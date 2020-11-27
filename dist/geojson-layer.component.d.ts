import { OnInit, OnChanges, SimpleChanges, EventEmitter, OnDestroy } from '@angular/core';
import 'leaflet.vectorgrid';
import { LeafletService } from './leaflet.service';
import { TiledSublayerDescriptor } from './data';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class GeojsonLayerComponent implements OnInit, OnChanges, OnDestroy {
    private http;
    private map;
    url: string;
    styles: any;
    sublayers: TiledSublayerDescriptor[];
    featureSelected: EventEmitter<any>;
    private destroyed;
    private selectedFeature;
    private vectorLayer;
    constructor(http: HttpClient, map: LeafletService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private remove;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDef<GeojsonLayerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<GeojsonLayerComponent, "geojson-layer", never, { "url": "url"; "styles": "styles"; "sublayers": "sublayers"; }, { "featureSelected": "featureSelected"; }, never, never>;
}
