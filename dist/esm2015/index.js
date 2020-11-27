"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapWaldLeafletModule = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const http_1 = require("@angular/common/http");
const common_1 = require("@angular/common");
const map_wald_1 = require("map-wald");
const leaflet_service_1 = require("./leaflet.service");
const leaflet_map_component_1 = require("./leaflet-map.component");
const draw_component_1 = require("./draw.component");
const geojson_layer_component_1 = require("./geojson-layer.component");
const legend_component_1 = require("./legend.component");
const map_control_component_1 = require("./map-control.component");
const one_time_splash_component_1 = require("./one-time-splash.component");
const vector_tile_layer_component_1 = require("./vector-tile-layer.component");
const wms_layer_component_1 = require("./wms-layer.component");
const i0 = require("@angular/core");
__exportStar(require("./data"), exports);
__exportStar(require("./leaflet.service"), exports);
__exportStar(require("./leaflet-map.component"), exports);
__exportStar(require("./draw.component"), exports);
__exportStar(require("./geojson-layer.component"), exports);
__exportStar(require("./legend.component"), exports);
__exportStar(require("./map-control.component"), exports);
__exportStar(require("./one-time-splash.component"), exports);
__exportStar(require("./vector-tile-layer.component"), exports);
__exportStar(require("./wms-layer.component"), exports);
const components = [
    //$componentList
    draw_component_1.DrawComponent,
    geojson_layer_component_1.GeojsonLayerComponent,
    leaflet_map_component_1.LeafletMapComponent,
    legend_component_1.LegendComponent,
    map_control_component_1.MapControlComponent,
    one_time_splash_component_1.OneTimeSplashComponent,
    vector_tile_layer_component_1.VectorTileLayerComponent,
    wms_layer_component_1.WmsLayerComponent
];
const services = [
    //$serviceList
    leaflet_service_1.LeafletService
];
class MapWaldLeafletModule {
    static forRoot(moduleInitialisation) {
        return {
            ngModule: MapWaldLeafletModule,
            providers: services
        };
    }
}
exports.MapWaldLeafletModule = MapWaldLeafletModule;
MapWaldLeafletModule.ɵmod = i0.ɵɵdefineNgModule({ type: MapWaldLeafletModule });
MapWaldLeafletModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MapWaldLeafletModule_Factory(t) { return new (t || MapWaldLeafletModule)(); }, providers: services, imports: [[
            common_1.CommonModule,
            forms_1.FormsModule,
            http_1.HttpClientModule,
            ng_bootstrap_1.NgbModule,
            map_wald_1.MapWaldCoreModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MapWaldLeafletModule, { declarations: [
        //$componentList
        draw_component_1.DrawComponent,
        geojson_layer_component_1.GeojsonLayerComponent,
        leaflet_map_component_1.LeafletMapComponent,
        legend_component_1.LegendComponent,
        map_control_component_1.MapControlComponent,
        one_time_splash_component_1.OneTimeSplashComponent,
        vector_tile_layer_component_1.VectorTileLayerComponent,
        wms_layer_component_1.WmsLayerComponent], imports: [common_1.CommonModule,
        forms_1.FormsModule,
        http_1.HttpClientModule,
        ng_bootstrap_1.NgbModule,
        map_wald_1.MapWaldCoreModule], exports: [
        //$componentList
        draw_component_1.DrawComponent,
        geojson_layer_component_1.GeojsonLayerComponent,
        leaflet_map_component_1.LeafletMapComponent,
        legend_component_1.LegendComponent,
        map_control_component_1.MapControlComponent,
        one_time_splash_component_1.OneTimeSplashComponent,
        vector_tile_layer_component_1.VectorTileLayerComponent,
        wms_layer_component_1.WmsLayerComponent] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MapWaldLeafletModule, [{
        type: core_1.NgModule,
        args: [{
                imports: [
                    common_1.CommonModule,
                    forms_1.FormsModule,
                    http_1.HttpClientModule,
                    ng_bootstrap_1.NgbModule,
                    map_wald_1.MapWaldCoreModule
                ],
                declarations: components,
                exports: components,
                providers: services
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC1sZWFmbGV0LyIsInNvdXJjZXMiOlsiaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHdDQUE4RDtBQUM5RCwwQ0FBNkM7QUFDN0MsNkRBQXVEO0FBQ3ZELCtDQUF3RDtBQUN4RCw0Q0FBK0M7QUFDL0MsdUNBQTZDO0FBRTdDLHVEQUFtRDtBQUNuRCxtRUFBOEQ7QUFDOUQscURBQWlEO0FBQ2pELHVFQUFrRTtBQUNsRSx5REFBcUQ7QUFDckQsbUVBQThEO0FBQzlELDJFQUFxRTtBQUNyRSwrRUFBeUU7QUFDekUsK0RBQTBEOztBQUUxRCx5Q0FBdUI7QUFDdkIsb0RBQWtDO0FBQ2xDLDBEQUF3QztBQUN4QyxtREFBaUM7QUFDakMsNERBQTBDO0FBQzFDLHFEQUFtQztBQUNuQywwREFBd0M7QUFDeEMsOERBQTRDO0FBQzVDLGdFQUE4QztBQUM5Qyx3REFBc0M7QUFFdEMsTUFBTSxVQUFVLEdBQVU7SUFDeEIsZ0JBQWdCO0lBQ2hCLDhCQUFhO0lBQ2IsK0NBQXFCO0lBQ3JCLDJDQUFtQjtJQUNuQixrQ0FBZTtJQUNmLDJDQUFtQjtJQUNuQixrREFBc0I7SUFDdEIsc0RBQXdCO0lBQ3hCLHVDQUFpQjtDQUNsQixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQVU7SUFDdEIsY0FBYztJQUNkLGdDQUFjO0NBQ2YsQ0FBQztBQUVGLE1BWWEsb0JBQW9CO0lBQy9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsb0JBQXdCO1FBQ3JDLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFNBQVMsRUFBRSxRQUFRO1NBQ3BCLENBQUM7SUFDSixDQUFDOztBQWxCSCxvREFtQkM7d0RBUFksb0JBQW9CO3VIQUFwQixvQkFBb0IsbUJBRnBCLFFBQVEsWUFUVjtZQUNQLHFCQUFZO1lBQ1osbUJBQVc7WUFDWCx1QkFBZ0I7WUFDaEIsd0JBQVM7WUFDVCw0QkFBaUI7U0FDbEI7d0ZBS1Usb0JBQW9CO1FBNUIvQixnQkFBZ0I7UUFDaEIsOEJBQWE7UUFDYiwrQ0FBcUI7UUFDckIsMkNBQW1CO1FBQ25CLGtDQUFlO1FBQ2YsMkNBQW1CO1FBQ25CLGtEQUFzQjtRQUN0QixzREFBd0I7UUFDeEIsdUNBQWlCLGFBVWYscUJBQVk7UUFDWixtQkFBVztRQUNYLHVCQUFnQjtRQUNoQix3QkFBUztRQUNULDRCQUFpQjtRQXRCbkIsZ0JBQWdCO1FBQ2hCLDhCQUFhO1FBQ2IsK0NBQXFCO1FBQ3JCLDJDQUFtQjtRQUNuQixrQ0FBZTtRQUNmLDJDQUFtQjtRQUNuQixrREFBc0I7UUFDdEIsc0RBQXdCO1FBQ3hCLHVDQUFpQjtrREFvQk4sb0JBQW9CO2NBWmhDLGVBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AscUJBQVk7b0JBQ1osbUJBQVc7b0JBQ1gsdUJBQWdCO29CQUNoQix3QkFBUztvQkFDVCw0QkFBaUI7aUJBQ2xCO2dCQUNELFlBQVksRUFBRSxVQUFVO2dCQUN4QixPQUFPLEVBQUUsVUFBVTtnQkFDbkIsU0FBUyxFQUFFLFFBQVE7YUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hcFdhbGRDb3JlTW9kdWxlIH0gZnJvbSAnbWFwLXdhbGQnO1xuXG5pbXBvcnQgeyBMZWFmbGV0U2VydmljZSB9IGZyb20gJy4vbGVhZmxldC5zZXJ2aWNlJztcbmltcG9ydCB7IExlYWZsZXRNYXBDb21wb25lbnQgfSBmcm9tICcuL2xlYWZsZXQtbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEcmF3Q29tcG9uZW50IH0gZnJvbSAnLi9kcmF3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW9qc29uTGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL2dlb2pzb24tbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExlZ2VuZENvbXBvbmVudCB9IGZyb20gJy4vbGVnZW5kLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9tYXAtY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgT25lVGltZVNwbGFzaENvbXBvbmVudCB9IGZyb20gJy4vb25lLXRpbWUtc3BsYXNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWZWN0b3JUaWxlTGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL3ZlY3Rvci10aWxlLWxheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXbXNMYXllckNvbXBvbmVudCB9IGZyb20gJy4vd21zLWxheWVyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vZGF0YSc7XG5leHBvcnQgKiBmcm9tICcuL2xlYWZsZXQuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2xlYWZsZXQtbWFwLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2RyYXcuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZ2VvanNvbi1sYXllci5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9sZWdlbmQuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbWFwLWNvbnRyb2wuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vb25lLXRpbWUtc3BsYXNoLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3ZlY3Rvci10aWxlLWxheWVyLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3dtcy1sYXllci5jb21wb25lbnQnO1xuXG5jb25zdCBjb21wb25lbnRzOiBhbnlbXSA9IFtcbiAgLy8kY29tcG9uZW50TGlzdFxuICBEcmF3Q29tcG9uZW50LFxuICBHZW9qc29uTGF5ZXJDb21wb25lbnQsXG4gIExlYWZsZXRNYXBDb21wb25lbnQsXG4gIExlZ2VuZENvbXBvbmVudCxcbiAgTWFwQ29udHJvbENvbXBvbmVudCxcbiAgT25lVGltZVNwbGFzaENvbXBvbmVudCxcbiAgVmVjdG9yVGlsZUxheWVyQ29tcG9uZW50LFxuICBXbXNMYXllckNvbXBvbmVudFxuXTtcblxuY29uc3Qgc2VydmljZXM6IGFueVtdID0gW1xuICAvLyRzZXJ2aWNlTGlzdFxuICBMZWFmbGV0U2VydmljZSAgXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgTmdiTW9kdWxlLFxuICAgIE1hcFdhbGRDb3JlTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogY29tcG9uZW50cyxcbiAgZXhwb3J0czogY29tcG9uZW50cyxcbiAgcHJvdmlkZXJzOiBzZXJ2aWNlc1xufSlcbmV4cG9ydCBjbGFzcyBNYXBXYWxkTGVhZmxldE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KG1vZHVsZUluaXRpYWxpc2F0aW9uOmFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TWFwV2FsZExlYWZsZXRNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE1hcFdhbGRMZWFmbGV0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBzZXJ2aWNlc1xuICAgIH07XG4gIH1cbn1cbiJdfQ==