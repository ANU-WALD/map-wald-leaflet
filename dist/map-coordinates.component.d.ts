import { OnInit } from '@angular/core';
import { LatLng, LatLngBounds, LeafletEvent } from 'leaflet';
import { LeafletService } from './leaflet.service';
import * as i0 from "@angular/core";
export declare class MapCoordinatesComponent implements OnInit {
    private map;
    mouseCoordinates: LatLng;
    bounds: LatLngBounds;
    constructor(map: LeafletService);
    ngOnInit(): void;
    withMap(fn: ((m: L.Map) => void)): void;
    mapChange(evt: LeafletEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<MapCoordinatesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MapCoordinatesComponent, "map-coordinates", never, {}, {}, never, never>;
}
