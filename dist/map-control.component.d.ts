import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { LeafletService } from './leaflet.service';
import * as i0 from "@angular/core";
export declare class MapControlComponent implements OnInit, AfterViewInit {
    private _el;
    private _map;
    mapControl: Component;
    position: string;
    touchDevice: boolean;
    constructor(_el: ElementRef, _map: LeafletService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ontouchstart(ev: TouchEvent): void;
    disableMapEvents(): void;
    enableMapEvents(): void;
    static ɵfac: i0.ɵɵFactoryDef<MapControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MapControlComponent, "map-control", never, { "position": "position"; }, {}, never, ["*"]>;
}
