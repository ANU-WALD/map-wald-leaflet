import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, OnDestroy } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.vectorgrid';
import { LeafletService } from './leaflet.service';
import { TiledSublayerDescriptor } from './data';
import { HttpClient } from '@angular/common/http';

const STYLES = {
  fillOpacity: 0.0,
  weight: 1.0
};

@Component({
  selector: 'geojson-layer',
  template: '',
  styles: ['']
})
export class GeojsonLayerComponent implements OnInit, OnChanges, OnDestroy {
  @Input() url: string;
  @Input() styles: any;
  @Input() sublayers: TiledSublayerDescriptor[] = [];
  // @Input() idColumn = 'id';
  @Output() featureSelected = new EventEmitter<any>();

  private destroyed = false;
  private selectedFeature: any;
  private vectorLayer: L.GeoJSON;
  // private data: any;

  constructor(private http: HttpClient, private map: LeafletService) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroyed = true;
    this.map.map.then(m => {
      this.remove(m);
    });
  }

  private remove(m: L.Map): void {
    if (this.vectorLayer) {
      this.vectorLayer.removeFrom(m);
      this.vectorLayer = null;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.url) {
      this.http.get(this.url).subscribe((data: any) => {
        if (changes.url.currentValue !== this.url) {
          // out of date!
          return;
        }

        this.map.map.then(m => {
          this.remove(m);
          if (this.destroyed) {
            return;
          }

          this.vectorLayer = L.geoJSON(data, {
            // interactive: true
            style: STYLES
          });

          this.vectorLayer.on('click' as any, (event) => {
            if (this.selectedFeature) {
              this.vectorLayer.resetStyle(this.selectedFeature);
              // resetFeatureStyle(this.selectedFeature);
            }
            this.selectedFeature = event.layer;
            this.selectedFeature.setStyle({
              weight:5
            });

            this.featureSelected.emit(this.selectedFeature.feature);
          });
          this.vectorLayer.addTo(m);
        });
      });
    }
  }
}
