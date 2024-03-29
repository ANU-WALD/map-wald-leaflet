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
var date_element_component_1 = require("./date-element.component");
var date_selection_component_1 = require("./date-selection.component");
var map_coordinates_component_1 = require("./map-coordinates.component");
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
__exportStar(require("./date-element.component"), exports);
__exportStar(require("./date-selection.component"), exports);
__exportStar(require("./map-coordinates.component"), exports);
var components = [
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
    date_selection_component_1.DateSelectionComponent,
    map_coordinates_component_1.MapCoordinatesComponent
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
        wms_layer_component_1.WmsLayerComponent,
        date_element_component_1.DateElementComponent,
        date_selection_component_1.DateSelectionComponent,
        map_coordinates_component_1.MapCoordinatesComponent], imports: [common_1.CommonModule,
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
        date_selection_component_1.DateSelectionComponent,
        map_coordinates_component_1.MapCoordinatesComponent] }); })();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC1sZWFmbGV0LyIsInNvdXJjZXMiOlsiaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUE4RDtBQUM5RCx3Q0FBNkM7QUFDN0MsMkRBQXVEO0FBQ3ZELDZDQUF3RDtBQUN4RCwwQ0FBK0M7QUFDL0MscUNBQTZDO0FBRTdDLHFEQUFtRDtBQUNuRCxpRUFBOEQ7QUFDOUQsbURBQWlEO0FBQ2pELHFFQUFrRTtBQUNsRSx1REFBcUQ7QUFDckQsaUVBQThEO0FBQzlELHlFQUFxRTtBQUNyRSw2RUFBeUU7QUFDekUsNkRBQTBEO0FBQzFELG1FQUFnRTtBQUNoRSx1RUFBb0U7QUFDcEUseUVBQXNFOztBQUV0RSx5Q0FBdUI7QUFDdkIsb0RBQWtDO0FBQ2xDLDBEQUF3QztBQUN4QyxtREFBaUM7QUFDakMsNERBQTBDO0FBQzFDLHFEQUFtQztBQUNuQywwREFBd0M7QUFDeEMsOERBQTRDO0FBQzVDLGdFQUE4QztBQUM5Qyx3REFBc0M7QUFDdEMsMkRBQXlDO0FBQ3pDLDZEQUEyQztBQUMzQyw4REFBNEM7QUFFNUMsSUFBTSxVQUFVLEdBQVU7SUFDeEIsZ0JBQWdCO0lBQ2hCLDhCQUFhO0lBQ2IsK0NBQXFCO0lBQ3JCLDJDQUFtQjtJQUNuQixrQ0FBZTtJQUNmLDJDQUFtQjtJQUNuQixrREFBc0I7SUFDdEIsc0RBQXdCO0lBQ3hCLHVDQUFpQjtJQUNqQiw2Q0FBb0I7SUFDcEIsaURBQXNCO0lBQ3RCLG1EQUF1QjtDQUN4QixDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQVU7SUFDdEIsY0FBYztJQUNkLGdDQUFjO0NBQ2YsQ0FBQztBQUVGO0lBQUE7S0FtQkM7SUFOUSw0QkFBTyxHQUFkLFVBQWUsb0JBQXdCO1FBQ3JDLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFNBQVMsRUFBRSxRQUFRO1NBQ3BCLENBQUM7SUFDSixDQUFDOzREQU5VLG9CQUFvQjsySEFBcEIsb0JBQW9CLG1CQUZwQixRQUFRLFlBVFY7Z0JBQ1AscUJBQVk7Z0JBQ1osbUJBQVc7Z0JBQ1gsdUJBQWdCO2dCQUNoQix3QkFBUztnQkFDVCw0QkFBaUI7YUFDbEI7K0JBN0RIO0NBeUVDLEFBbkJELElBbUJDO0FBUFksb0RBQW9CO3dGQUFwQixvQkFBb0I7UUEvQi9CLGdCQUFnQjtRQUNoQiw4QkFBYTtRQUNiLCtDQUFxQjtRQUNyQiwyQ0FBbUI7UUFDbkIsa0NBQWU7UUFDZiwyQ0FBbUI7UUFDbkIsa0RBQXNCO1FBQ3RCLHNEQUF3QjtRQUN4Qix1Q0FBaUI7UUFDakIsNkNBQW9CO1FBQ3BCLGlEQUFzQjtRQUN0QixtREFBdUIsYUFVckIscUJBQVk7UUFDWixtQkFBVztRQUNYLHVCQUFnQjtRQUNoQix3QkFBUztRQUNULDRCQUFpQjtRQXpCbkIsZ0JBQWdCO1FBQ2hCLDhCQUFhO1FBQ2IsK0NBQXFCO1FBQ3JCLDJDQUFtQjtRQUNuQixrQ0FBZTtRQUNmLDJDQUFtQjtRQUNuQixrREFBc0I7UUFDdEIsc0RBQXdCO1FBQ3hCLHVDQUFpQjtRQUNqQiw2Q0FBb0I7UUFDcEIsaURBQXNCO1FBQ3RCLG1EQUF1QjtrREFvQlosb0JBQW9CO2NBWmhDLGVBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AscUJBQVk7b0JBQ1osbUJBQVc7b0JBQ1gsdUJBQWdCO29CQUNoQix3QkFBUztvQkFDVCw0QkFBaUI7aUJBQ2xCO2dCQUNELFlBQVksRUFBRSxVQUFVO2dCQUN4QixPQUFPLEVBQUUsVUFBVTtnQkFDbkIsU0FBUyxFQUFFLFFBQVE7YUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hcFdhbGRDb3JlTW9kdWxlIH0gZnJvbSAnbWFwLXdhbGQnO1xuXG5pbXBvcnQgeyBMZWFmbGV0U2VydmljZSB9IGZyb20gJy4vbGVhZmxldC5zZXJ2aWNlJztcbmltcG9ydCB7IExlYWZsZXRNYXBDb21wb25lbnQgfSBmcm9tICcuL2xlYWZsZXQtbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEcmF3Q29tcG9uZW50IH0gZnJvbSAnLi9kcmF3LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHZW9qc29uTGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL2dlb2pzb24tbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExlZ2VuZENvbXBvbmVudCB9IGZyb20gJy4vbGVnZW5kLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9tYXAtY29udHJvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgT25lVGltZVNwbGFzaENvbXBvbmVudCB9IGZyb20gJy4vb25lLXRpbWUtc3BsYXNoLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWZWN0b3JUaWxlTGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL3ZlY3Rvci10aWxlLWxheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXbXNMYXllckNvbXBvbmVudCB9IGZyb20gJy4vd21zLWxheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlRWxlbWVudENvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1lbGVtZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlU2VsZWN0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9kYXRlLXNlbGVjdGlvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFwQ29vcmRpbmF0ZXNDb21wb25lbnQgfSBmcm9tICcuL21hcC1jb29yZGluYXRlcy5jb21wb25lbnQnO1xuXG5leHBvcnQgKiBmcm9tICcuL2RhdGEnO1xuZXhwb3J0ICogZnJvbSAnLi9sZWFmbGV0LnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9sZWFmbGV0LW1hcC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9kcmF3LmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2dlb2pzb24tbGF5ZXIuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vbGVnZW5kLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL21hcC1jb250cm9sLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL29uZS10aW1lLXNwbGFzaC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi92ZWN0b3ItdGlsZS1sYXllci5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi93bXMtbGF5ZXIuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZGF0ZS1lbGVtZW50LmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGUtc2VsZWN0aW9uLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL21hcC1jb29yZGluYXRlcy5jb21wb25lbnQnO1xuXG5jb25zdCBjb21wb25lbnRzOiBhbnlbXSA9IFtcbiAgLy8kY29tcG9uZW50TGlzdFxuICBEcmF3Q29tcG9uZW50LFxuICBHZW9qc29uTGF5ZXJDb21wb25lbnQsXG4gIExlYWZsZXRNYXBDb21wb25lbnQsXG4gIExlZ2VuZENvbXBvbmVudCxcbiAgTWFwQ29udHJvbENvbXBvbmVudCxcbiAgT25lVGltZVNwbGFzaENvbXBvbmVudCxcbiAgVmVjdG9yVGlsZUxheWVyQ29tcG9uZW50LFxuICBXbXNMYXllckNvbXBvbmVudCxcbiAgRGF0ZUVsZW1lbnRDb21wb25lbnQsXG4gIERhdGVTZWxlY3Rpb25Db21wb25lbnQsXG4gIE1hcENvb3JkaW5hdGVzQ29tcG9uZW50XG5dO1xuXG5jb25zdCBzZXJ2aWNlczogYW55W10gPSBbXG4gIC8vJHNlcnZpY2VMaXN0XG4gIExlYWZsZXRTZXJ2aWNlICBcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBOZ2JNb2R1bGUsXG4gICAgTWFwV2FsZENvcmVNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBjb21wb25lbnRzLFxuICBleHBvcnRzOiBjb21wb25lbnRzLFxuICBwcm92aWRlcnM6IHNlcnZpY2VzXG59KVxuZXhwb3J0IGNsYXNzIE1hcFdhbGRMZWFmbGV0TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QobW9kdWxlSW5pdGlhbGlzYXRpb246YW55KTogTW9kdWxlV2l0aFByb3ZpZGVyczxNYXBXYWxkTGVhZmxldE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTWFwV2FsZExlYWZsZXRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IHNlcnZpY2VzXG4gICAgfTtcbiAgfVxufVxuIl19