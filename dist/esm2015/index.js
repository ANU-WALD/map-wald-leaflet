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
const date_element_component_1 = require("./date-element.component");
const date_selection_component_1 = require("./date-selection.component");
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
__exportStar(require("./date-element.component"), exports);
__exportStar(require("./date-selection.component"), exports);
const components = [
    //$componentList
    draw_component_1.DrawComponent,
    geojson_layer_component_1.GeojsonLayerComponent,
    leaflet_map_component_1.LeafletMapComponent,
    legend_component_1.LegendComponent,
    map_control_component_1.MapControlComponent,
    one_time_splash_component_1.OneTimeSplashComponent,
    vector_tile_layer_component_1.VectorTileLayerComponent,
    wms_layer_component_1.WmsLayerComponent,
    date_element_component_1.DateElementComponent,
    date_selection_component_1.DateSelectionComponent
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
        wms_layer_component_1.WmsLayerComponent,
        date_element_component_1.DateElementComponent,
        date_selection_component_1.DateSelectionComponent], imports: [common_1.CommonModule,
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
        wms_layer_component_1.WmsLayerComponent,
        date_element_component_1.DateElementComponent,
        date_selection_component_1.DateSelectionComponent] }); })();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC1sZWFmbGV0LyIsInNvdXJjZXMiOlsiaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHdDQUE4RDtBQUM5RCwwQ0FBNkM7QUFDN0MsNkRBQXVEO0FBQ3ZELCtDQUF3RDtBQUN4RCw0Q0FBK0M7QUFDL0MsdUNBQTZDO0FBRTdDLHVEQUFtRDtBQUNuRCxtRUFBOEQ7QUFDOUQscURBQWlEO0FBQ2pELHVFQUFrRTtBQUNsRSx5REFBcUQ7QUFDckQsbUVBQThEO0FBQzlELDJFQUFxRTtBQUNyRSwrRUFBeUU7QUFDekUsK0RBQTBEO0FBQzFELHFFQUFnRTtBQUNoRSx5RUFBb0U7O0FBRXBFLHlDQUF1QjtBQUN2QixvREFBa0M7QUFDbEMsMERBQXdDO0FBQ3hDLG1EQUFpQztBQUNqQyw0REFBMEM7QUFDMUMscURBQW1DO0FBQ25DLDBEQUF3QztBQUN4Qyw4REFBNEM7QUFDNUMsZ0VBQThDO0FBQzlDLHdEQUFzQztBQUN0QywyREFBeUM7QUFDekMsNkRBQTJDO0FBRTNDLE1BQU0sVUFBVSxHQUFVO0lBQ3hCLGdCQUFnQjtJQUNoQiw4QkFBYTtJQUNiLCtDQUFxQjtJQUNyQiwyQ0FBbUI7SUFDbkIsa0NBQWU7SUFDZiwyQ0FBbUI7SUFDbkIsa0RBQXNCO0lBQ3RCLHNEQUF3QjtJQUN4Qix1Q0FBaUI7SUFDakIsNkNBQW9CO0lBQ3BCLGlEQUFzQjtDQUN2QixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQVU7SUFDdEIsY0FBYztJQUNkLGdDQUFjO0NBQ2YsQ0FBQztBQUVGLE1BWWEsb0JBQW9CO0lBQy9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsb0JBQXdCO1FBQ3JDLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFNBQVMsRUFBRSxRQUFRO1NBQ3BCLENBQUM7SUFDSixDQUFDOztBQWxCSCxvREFtQkM7d0RBUFksb0JBQW9CO3VIQUFwQixvQkFBb0IsbUJBRnBCLFFBQVEsWUFUVjtZQUNQLHFCQUFZO1lBQ1osbUJBQVc7WUFDWCx1QkFBZ0I7WUFDaEIsd0JBQVM7WUFDVCw0QkFBaUI7U0FDbEI7d0ZBS1Usb0JBQW9CO1FBOUIvQixnQkFBZ0I7UUFDaEIsOEJBQWE7UUFDYiwrQ0FBcUI7UUFDckIsMkNBQW1CO1FBQ25CLGtDQUFlO1FBQ2YsMkNBQW1CO1FBQ25CLGtEQUFzQjtRQUN0QixzREFBd0I7UUFDeEIsdUNBQWlCO1FBQ2pCLDZDQUFvQjtRQUNwQixpREFBc0IsYUFVcEIscUJBQVk7UUFDWixtQkFBVztRQUNYLHVCQUFnQjtRQUNoQix3QkFBUztRQUNULDRCQUFpQjtRQXhCbkIsZ0JBQWdCO1FBQ2hCLDhCQUFhO1FBQ2IsK0NBQXFCO1FBQ3JCLDJDQUFtQjtRQUNuQixrQ0FBZTtRQUNmLDJDQUFtQjtRQUNuQixrREFBc0I7UUFDdEIsc0RBQXdCO1FBQ3hCLHVDQUFpQjtRQUNqQiw2Q0FBb0I7UUFDcEIsaURBQXNCO2tEQW9CWCxvQkFBb0I7Y0FaaEMsZUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxxQkFBWTtvQkFDWixtQkFBVztvQkFDWCx1QkFBZ0I7b0JBQ2hCLHdCQUFTO29CQUNULDRCQUFpQjtpQkFDbEI7Z0JBQ0QsWUFBWSxFQUFFLFVBQVU7Z0JBQ3hCLE9BQU8sRUFBRSxVQUFVO2dCQUNuQixTQUFTLEVBQUUsUUFBUTthQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nYk1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWFwV2FsZENvcmVNb2R1bGUgfSBmcm9tICdtYXAtd2FsZCc7XG5cbmltcG9ydCB7IExlYWZsZXRTZXJ2aWNlIH0gZnJvbSAnLi9sZWFmbGV0LnNlcnZpY2UnO1xuaW1wb3J0IHsgTGVhZmxldE1hcENvbXBvbmVudCB9IGZyb20gJy4vbGVhZmxldC1tYXAuY29tcG9uZW50JztcbmltcG9ydCB7IERyYXdDb21wb25lbnQgfSBmcm9tICcuL2RyYXcuY29tcG9uZW50JztcbmltcG9ydCB7IEdlb2pzb25MYXllckNvbXBvbmVudCB9IGZyb20gJy4vZ2VvanNvbi1sYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGVnZW5kQ29tcG9uZW50IH0gZnJvbSAnLi9sZWdlbmQuY29tcG9uZW50JztcbmltcG9ydCB7IE1hcENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL21hcC1jb250cm9sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPbmVUaW1lU3BsYXNoQ29tcG9uZW50IH0gZnJvbSAnLi9vbmUtdGltZS1zcGxhc2guY29tcG9uZW50JztcbmltcG9ydCB7IFZlY3RvclRpbGVMYXllckNvbXBvbmVudCB9IGZyb20gJy4vdmVjdG9yLXRpbGUtbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFdtc0xheWVyQ29tcG9uZW50IH0gZnJvbSAnLi93bXMtbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVFbGVtZW50Q29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLWVsZW1lbnQuY29tcG9uZW50JztcbmltcG9ydCB7IERhdGVTZWxlY3Rpb25Db21wb25lbnQgfSBmcm9tICcuL2RhdGUtc2VsZWN0aW9uLmNvbXBvbmVudCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vZGF0YSc7XG5leHBvcnQgKiBmcm9tICcuL2xlYWZsZXQuc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL2xlYWZsZXQtbWFwLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2RyYXcuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZ2VvanNvbi1sYXllci5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9sZWdlbmQuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbWFwLWNvbnRyb2wuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vb25lLXRpbWUtc3BsYXNoLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3ZlY3Rvci10aWxlLWxheWVyLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL3dtcy1sYXllci5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRlLWVsZW1lbnQuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZGF0ZS1zZWxlY3Rpb24uY29tcG9uZW50JztcblxuY29uc3QgY29tcG9uZW50czogYW55W10gPSBbXG4gIC8vJGNvbXBvbmVudExpc3RcbiAgRHJhd0NvbXBvbmVudCxcbiAgR2VvanNvbkxheWVyQ29tcG9uZW50LFxuICBMZWFmbGV0TWFwQ29tcG9uZW50LFxuICBMZWdlbmRDb21wb25lbnQsXG4gIE1hcENvbnRyb2xDb21wb25lbnQsXG4gIE9uZVRpbWVTcGxhc2hDb21wb25lbnQsXG4gIFZlY3RvclRpbGVMYXllckNvbXBvbmVudCxcbiAgV21zTGF5ZXJDb21wb25lbnQsXG4gIERhdGVFbGVtZW50Q29tcG9uZW50LFxuICBEYXRlU2VsZWN0aW9uQ29tcG9uZW50XG5dO1xuXG5jb25zdCBzZXJ2aWNlczogYW55W10gPSBbXG4gIC8vJHNlcnZpY2VMaXN0XG4gIExlYWZsZXRTZXJ2aWNlICBcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBOZ2JNb2R1bGUsXG4gICAgTWFwV2FsZENvcmVNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBjb21wb25lbnRzLFxuICBleHBvcnRzOiBjb21wb25lbnRzLFxuICBwcm92aWRlcnM6IHNlcnZpY2VzXG59KVxuZXhwb3J0IGNsYXNzIE1hcFdhbGRMZWFmbGV0TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QobW9kdWxlSW5pdGlhbGlzYXRpb246YW55KTogTW9kdWxlV2l0aFByb3ZpZGVyczxNYXBXYWxkTGVhZmxldE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTWFwV2FsZExlYWZsZXRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IHNlcnZpY2VzXG4gICAgfTtcbiAgfVxufVxuIl19