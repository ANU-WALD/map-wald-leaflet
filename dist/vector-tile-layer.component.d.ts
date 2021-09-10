import { OnInit, OnChanges, SimpleChanges, EventEmitter, OnDestroy } from '@angular/core';
import { LeafletService } from './leaflet.service';
import { TiledSublayerDescriptor } from './data';
import * as i0 from "@angular/core";
export declare class VectorTileLayerComponent implements OnInit, OnChanges, OnDestroy {
    private map;
    url: string;
    styles: any;
    sublayers: TiledSublayerDescriptor[];
    featureSelected: EventEmitter<any>;
    minZoom: number;
    maxZoom: number;
    minNativeZoom: number;
    maxNativeZoom: number;
    private destroyed;
    private selectedFeature;
    private vectorLayer;
    constructor(map: LeafletService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private getFeatureId;
    private remove;
    ngOnChanges(changes: SimpleChanges): void;
    vectorGridFeatureToGeoJSON(lyr: any): any;
    static ɵfac: i0.ɵɵFactoryDef<VectorTileLayerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<VectorTileLayerComponent, "vector-tile-layer", never, { "url": "url"; "styles": "styles"; "sublayers": "sublayers"; "minZoom": "minZoom"; "maxZoom": "maxZoom"; "minNativeZoom": "minNativeZoom"; "maxNativeZoom": "maxNativeZoom"; }, { "featureSelected": "featureSelected"; }, never, never>;
}
