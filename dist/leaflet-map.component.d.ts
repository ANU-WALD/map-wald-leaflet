import { OnInit, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import * as leaflet from 'leaflet';
import { LeafletService } from './leaflet.service';
import { Bounds } from 'map-wald';
import { BasemapDescriptor } from './data';
import * as i0 from "@angular/core";
export declare class LeafletMapComponent implements OnInit, OnChanges {
    private element;
    private svc;
    bounds: Bounds;
    baseMap: BasemapDescriptor;
    zoomControl: boolean;
    minZoom: number;
    maxZoom: number;
    map: leaflet.Map;
    styles: any;
    initialised: boolean;
    private baseLayer;
    constructor(element: ElementRef, svc: LeafletService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    updateMap(changes?: SimpleChanges): void;
    createBaseLayer(): void;
    createMap(): void;
    setBounds(): void;
    static ɵfac: i0.ɵɵFactoryDef<LeafletMapComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<LeafletMapComponent, "leaflet-map", never, { "bounds": "bounds"; "baseMap": "baseMap"; "zoomControl": "zoomControl"; "minZoom": "minZoom"; "maxZoom": "maxZoom"; }, {}, never, ["*"]>;
}
