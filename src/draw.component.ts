import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-draw';
import { LeafletService } from './leaflet.service';

@Component({
  selector: 'draw',
  template: '',
  styles: []
})
export class DrawComponent implements OnInit, OnDestroy {
  @Output() featureClosed = new EventEmitter<any>();

  private drawnItems: L.FeatureGroup;
  private drawControl: L.Control.Draw;
  private polygon: L.Draw.Polygon;

  constructor(private map: LeafletService) { }

  ngOnDestroy(): void {
    this.map.withMap(m=>this.removeControl(m))
  }

  ngOnInit(): void {
    this.map.withMap(m=>this.addControl(m))
  }

  removeControl(m: L.Map): void {
    m.removeLayer(this.drawnItems);
    this.polygon.removeHooks();
    // m.removeControl(this.drawControl);
    m.off(L.Draw.Event.DRAWSTART);
    m.off(L.Draw.Event.CREATED);
  }

  addControl(m: L.Map): void {
    this.drawnItems = new L.FeatureGroup();
    m.addLayer(this.drawnItems);

    // this.drawControl = new L.Control.Draw({
    //   draw: {
    //     polyline: false,
    //     circle: false,
    //     marker: false,
    //     rectangle: false,
    //     circlemarker: false
    //   },
    //   edit: null
    // });
    // m.addControl(this.drawControl);
    this.initiateDrawing(m);

    m.on(L.Draw.Event.DRAWSTART, (event) => {
      this.drawnItems.clearLayers();
    });

    m.on(L.Draw.Event.DRAWVERTEX, (event) => {
      this.drawnItems.clearLayers();
    });

    m.on(L.Draw.Event.CREATED, (event) => {
      console.log(event);

      const layer = event.layer;
      this.drawnItems.clearLayers();
      this.drawnItems.addLayer(layer);
      this.featureClosed.emit(layer.toGeoJSON());
      this.polygon.removeHooks();
      this.initiateDrawing(m);
    });
  }

  initiateDrawing(m: L.Map): void {
    this.polygon = new L.Draw.Polygon(m as L.DrawMap, {repeatMode: false});
    this.polygon.addHooks();
  }
}


