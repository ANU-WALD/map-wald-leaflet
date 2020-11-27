import { OnInit, EventEmitter, OnDestroy } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet-draw';
import { LeafletService } from './leaflet.service';
import * as i0 from "@angular/core";
export declare class DrawComponent implements OnInit, OnDestroy {
    private map;
    featureClosed: EventEmitter<any>;
    private drawnItems;
    private drawControl;
    private polygon;
    constructor(map: LeafletService);
    ngOnDestroy(): void;
    ngOnInit(): void;
    removeControl(m: L.Map): void;
    addControl(m: L.Map): void;
    initiateDrawing(m: L.Map): void;
    static ɵfac: i0.ɵɵFactoryDef<DrawComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DrawComponent, "draw", never, {}, { "featureClosed": "featureClosed"; }, never, never>;
}
