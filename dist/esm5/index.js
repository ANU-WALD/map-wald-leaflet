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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var http_1 = require("@angular/common/http");
var common_1 = require("@angular/common");
var map_wald_1 = require("map-wald");
var leaflet_service_1 = require("./leaflet.service");
var leaflet_map_component_1 = require("./leaflet-map.component");
var draw_component_1 = require("./draw.component");
var geojson_layer_component_1 = require("./geojson-layer.component");
var legend_component_1 = require("./legend.component");
var map_control_component_1 = require("./map-control.component");
var one_time_splash_component_1 = require("./one-time-splash.component");
var vector_tile_layer_component_1 = require("./vector-tile-layer.component");
var wms_layer_component_1 = require("./wms-layer.component");
var i0 = require("@angular/core");
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
var components = [
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
var services = [
    //$serviceList
    leaflet_service_1.LeafletService
];
var MapWaldLeafletModule = /** @class */ (function () {
    function MapWaldLeafletModule() {
    }
    MapWaldLeafletModule.forRoot = function (moduleInitialisation) {
        return {
            ngModule: MapWaldLeafletModule,
            providers: services
        };
    };
    MapWaldLeafletModule.ɵmod = i0.ɵɵdefineNgModule({ type: MapWaldLeafletModule });
    MapWaldLeafletModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MapWaldLeafletModule_Factory(t) { return new (t || MapWaldLeafletModule)(); }, providers: services, imports: [[
                common_1.CommonModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                ng_bootstrap_1.NgbModule,
                map_wald_1.MapWaldCoreModule
            ]] });
    return MapWaldLeafletModule;
}());
exports.MapWaldLeafletModule = MapWaldLeafletModule;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC1sZWFmbGV0LyIsInNvdXJjZXMiOlsiaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUE4RDtBQUM5RCx3Q0FBNkM7QUFDN0MsMkRBQXVEO0FBQ3ZELDZDQUF3RDtBQUN4RCwwQ0FBK0M7QUFDL0MscUNBQTZDO0FBRTdDLHFEQUFtRDtBQUNuRCxpRUFBOEQ7QUFDOUQsbURBQWlEO0FBQ2pELHFFQUFrRTtBQUNsRSx1REFBcUQ7QUFDckQsaUVBQThEO0FBQzlELHlFQUFxRTtBQUNyRSw2RUFBeUU7QUFDekUsNkRBQTBEOztBQUUxRCx5Q0FBdUI7QUFDdkIsb0RBQWtDO0FBQ2xDLDBEQUF3QztBQUN4QyxtREFBaUM7QUFDakMsNERBQTBDO0FBQzFDLHFEQUFtQztBQUNuQywwREFBd0M7QUFDeEMsOERBQTRDO0FBQzVDLGdFQUE4QztBQUM5Qyx3REFBc0M7QUFFdEMsSUFBTSxVQUFVLEdBQVU7SUFDeEIsZ0JBQWdCO0lBQ2hCLDhCQUFhO0lBQ2IsK0NBQXFCO0lBQ3JCLDJDQUFtQjtJQUNuQixrQ0FBZTtJQUNmLDJDQUFtQjtJQUNuQixrREFBc0I7SUFDdEIsc0RBQXdCO0lBQ3hCLHVDQUFpQjtDQUNsQixDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQVU7SUFDdEIsY0FBYztJQUNkLGdDQUFjO0NBQ2YsQ0FBQztBQUVGO0lBQUE7S0FtQkM7SUFOUSw0QkFBTyxHQUFkLFVBQWUsb0JBQXdCO1FBQ3JDLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFNBQVMsRUFBRSxRQUFRO1NBQ3BCLENBQUM7SUFDSixDQUFDOzREQU5VLG9CQUFvQjsySEFBcEIsb0JBQW9CLG1CQUZwQixRQUFRLFlBVFY7Z0JBQ1AscUJBQVk7Z0JBQ1osbUJBQVc7Z0JBQ1gsdUJBQWdCO2dCQUNoQix3QkFBUztnQkFDVCw0QkFBaUI7YUFDbEI7K0JBcERIO0NBZ0VDLEFBbkJELElBbUJDO0FBUFksb0RBQW9CO3dGQUFwQixvQkFBb0I7UUE1Qi9CLGdCQUFnQjtRQUNoQiw4QkFBYTtRQUNiLCtDQUFxQjtRQUNyQiwyQ0FBbUI7UUFDbkIsa0NBQWU7UUFDZiwyQ0FBbUI7UUFDbkIsa0RBQXNCO1FBQ3RCLHNEQUF3QjtRQUN4Qix1Q0FBaUIsYUFVZixxQkFBWTtRQUNaLG1CQUFXO1FBQ1gsdUJBQWdCO1FBQ2hCLHdCQUFTO1FBQ1QsNEJBQWlCO1FBdEJuQixnQkFBZ0I7UUFDaEIsOEJBQWE7UUFDYiwrQ0FBcUI7UUFDckIsMkNBQW1CO1FBQ25CLGtDQUFlO1FBQ2YsMkNBQW1CO1FBQ25CLGtEQUFzQjtRQUN0QixzREFBd0I7UUFDeEIsdUNBQWlCO2tEQW9CTixvQkFBb0I7Y0FaaEMsZUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxxQkFBWTtvQkFDWixtQkFBVztvQkFDWCx1QkFBZ0I7b0JBQ2hCLHdCQUFTO29CQUNULDRCQUFpQjtpQkFDbEI7Z0JBQ0QsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixTQUFTLEVBQUUsUUFBUTthQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWFwV2FsZENvcmVNb2R1bGUgfSBmcm9tICdtYXAtd2FsZCc7XG5cbmltcG9ydCB7IExlYWZsZXRTZXJ2aWNlIH0gZnJvbSAnLi9sZWFmbGV0LnNlcnZpY2UnO1xuaW1wb3J0IHsgTGVhZmxldE1hcENvbXBvbmVudCB9IGZyb20gJy4vbGVhZmxldC1tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IERyYXdDb21wb25lbnQgfSBmcm9tICcuL2RyYXcuY29tcG9uZW50JztcbmltcG9ydCB7IEdlb2pzb25MYXllckNvbXBvbmVudCB9IGZyb20gJy4vZ2VvanNvbi1sYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGVnZW5kQ29tcG9uZW50IH0gZnJvbSAnLi9sZWdlbmQuY29tcG9uZW50JztcbmltcG9ydCB7IE1hcENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL21hcC1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPbmVUaW1lU3BsYXNoQ29tcG9uZW50IH0gZnJvbSAnLi9vbmUtdGltZS1zcGxhc2guY29tcG9uZW50JztcbmltcG9ydCB7IFZlY3RvclRpbGVMYXllckNvbXBvbmVudCB9IGZyb20gJy4vdmVjdG9yLXRpbGUtbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFdtc0xheWVyQ29tcG9uZW50IH0gZnJvbSAnLi93bXMtbGF5ZXIuY29tcG9uZW50JztcblxuZXhwb3J0ICogZnJvbSAnLi9kYXRhJztcbmV4cG9ydCAqIGZyb20gJy4vbGVhZmxldC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vbGVhZmxldC1tYXAuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZHJhdy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9nZW9qc29uLWxheWVyLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2xlZ2VuZC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9tYXAtY29udHJvbC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9vbmUtdGltZS1zcGxhc2guY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vdmVjdG9yLXRpbGUtbGF5ZXIuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vd21zLWxheWVyLmNvbXBvbmVudCc7XG5cbmNvbnN0IGNvbXBvbmVudHM6IGFueVtdID0gW1xuICAvLyRjb21wb25lbnRMaXN0XG4gIERyYXdDb21wb25lbnQsXG4gIEdlb2pzb25MYXllckNvbXBvbmVudCxcbiAgTGVhZmxldE1hcENvbXBvbmVudCxcbiAgTGVnZW5kQ29tcG9uZW50LFxuICBNYXBDb250cm9sQ29tcG9uZW50LFxuICBPbmVUaW1lU3BsYXNoQ29tcG9uZW50LFxuICBWZWN0b3JUaWxlTGF5ZXJDb21wb25lbnQsXG4gIFdtc0xheWVyQ29tcG9uZW50XG5dO1xuXG5jb25zdCBzZXJ2aWNlczogYW55W10gPSBbXG4gIC8vJHNlcnZpY2VMaXN0XG4gIExlYWZsZXRTZXJ2aWNlICBcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBOZ2JNb2R1bGUsXG4gICAgTWFwV2FsZENvcmVNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBjb21wb25lbnRzLFxuICBleHBvcnRzOiBjb21wb25lbnRzLFxuICBwcm92aWRlcnM6IHNlcnZpY2VzXG59KVxuZXhwb3J0IGNsYXNzIE1hcFdhbGRMZWFmbGV0TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QobW9kdWxlSW5pdGlhbGlzYXRpb246YW55KTogTW9kdWxlV2l0aFByb3ZpZGVyczxNYXBXYWxkTGVhZmxldE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTWFwV2FsZExlYWZsZXRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IHNlcnZpY2VzXG4gICAgfTtcbiAgfVxufVxuIl19