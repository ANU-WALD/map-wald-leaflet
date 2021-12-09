import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { LeafletService } from './leaflet.service';
import * as i0 from "@angular/core";
export declare class WmsLayerComponent implements OnInit, OnChanges {
    private map;
    url: string;
    params: any;
    zIndex: number;
    private layer;
    constructor(map: LeafletService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDef<WmsLayerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<WmsLayerComponent, "wms-layer", never, { "url": "url"; "params": "params"; "zIndex": "zIndex"; }, {}, never, never>;
}
