import * as leaflet from 'leaflet';
import * as i0 from "@angular/core";
export declare class LeafletService {
    map: Promise<leaflet.Map>;
    private resolve;
    private reject;
    constructor();
    mapCreated(map: leaflet.Map): void;
    withMap(fn: ((m: L.Map) => void)): void;
    static ɵfac: i0.ɵɵFactoryDef<LeafletService, never>;
    static ɵprov: i0.ɵɵInjectableDef<LeafletService>;
}
