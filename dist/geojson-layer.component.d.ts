import { OnInit, OnChanges, SimpleChanges, EventEmitter, OnDestroy } from '@angular/core';
import 'leaflet.vectorgrid';
import { LeafletService } from './leaflet.service';
import { TiledSublayerDescriptor } from './data';
import { HttpClient } from '@angular/common/http';
import { StyleValue } from 'map-wald';
import * as i0 from "@angular/core";
export declare enum PointMode {
    default = 0,
    circle = 1
}
export declare class GeojsonLayerComponent implements OnInit, OnChanges, OnDestroy {
    private http;
    private map;
    url: string;
    features: any;
    sublayers: TiledSublayerDescriptor[];
    pointMode: PointMode;
    style: {
        [key: string]: StyleValue;
    };
    featureSelected: EventEmitter<any>;
    private destroyed;
    private selectedFeature;
    private vectorLayer;
    constructor(http: HttpClient, map: LeafletService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private remove;
    ngOnChanges(changes: SimpleChanges): void;
    downloadLayer(url: string): void;
    makeLayer(): void;
    static ɵfac: i0.ɵɵFactoryDef<GeojsonLayerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<GeojsonLayerComponent, "geojson-layer", never, { "url": "url"; "features": "features"; "sublayers": "sublayers"; "pointMode": "pointMode"; "style": "style"; }, { "featureSelected": "featureSelected"; }, never, never>;
}
