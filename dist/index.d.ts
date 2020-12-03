import { ModuleWithProviders } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./draw.component";
import * as i2 from "./geojson-layer.component";
import * as i3 from "./leaflet-map.component";
import * as i4 from "./legend.component";
import * as i5 from "./map-control.component";
import * as i6 from "./one-time-splash.component";
import * as i7 from "./vector-tile-layer.component";
import * as i8 from "./wms-layer.component";
import * as i9 from "./date-element.component";
import * as i10 from "./date-selection.component";
import * as i11 from "@angular/common";
import * as i12 from "@angular/forms";
import * as i13 from "@angular/common/http";
import * as i14 from "@ng-bootstrap/ng-bootstrap";
import * as i15 from "map-wald";
export * from './data';
export * from './leaflet.service';
export * from './leaflet-map.component';
export * from './draw.component';
export * from './geojson-layer.component';
export * from './legend.component';
export * from './map-control.component';
export * from './one-time-splash.component';
export * from './vector-tile-layer.component';
export * from './wms-layer.component';
export * from './date-element.component';
export * from './date-selection.component';
export declare class MapWaldLeafletModule {
    static forRoot(moduleInitialisation: any): ModuleWithProviders<MapWaldLeafletModule>;
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<MapWaldLeafletModule, [typeof i1.DrawComponent, typeof i2.GeojsonLayerComponent, typeof i3.LeafletMapComponent, typeof i4.LegendComponent, typeof i5.MapControlComponent, typeof i6.OneTimeSplashComponent, typeof i7.VectorTileLayerComponent, typeof i8.WmsLayerComponent, typeof i9.DateElementComponent, typeof i10.DateSelectionComponent], [typeof i11.CommonModule, typeof i12.FormsModule, typeof i13.HttpClientModule, typeof i14.NgbModule, typeof i15.MapWaldCoreModule], [typeof i1.DrawComponent, typeof i2.GeojsonLayerComponent, typeof i3.LeafletMapComponent, typeof i4.LegendComponent, typeof i5.MapControlComponent, typeof i6.OneTimeSplashComponent, typeof i7.VectorTileLayerComponent, typeof i8.WmsLayerComponent, typeof i9.DateElementComponent, typeof i10.DateSelectionComponent]>;
    static ɵinj: i0.ɵɵInjectorDef<MapWaldLeafletModule>;
}
