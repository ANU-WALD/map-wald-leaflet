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
    date_selection_component_1.DateSelectionComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC1sZWFmbGV0LyIsInNvdXJjZXMiOlsiaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUE4RDtBQUM5RCx3Q0FBNkM7QUFDN0MsMkRBQXVEO0FBQ3ZELDZDQUF3RDtBQUN4RCwwQ0FBK0M7QUFDL0MscUNBQTZDO0FBRTdDLHFEQUFtRDtBQUNuRCxpRUFBOEQ7QUFDOUQsbURBQWlEO0FBQ2pELHFFQUFrRTtBQUNsRSx1REFBcUQ7QUFDckQsaUVBQThEO0FBQzlELHlFQUFxRTtBQUNyRSw2RUFBeUU7QUFDekUsNkRBQTBEO0FBQzFELG1FQUFnRTtBQUNoRSx1RUFBb0U7O0FBRXBFLHlDQUF1QjtBQUN2QixvREFBa0M7QUFDbEMsMERBQXdDO0FBQ3hDLG1EQUFpQztBQUNqQyw0REFBMEM7QUFDMUMscURBQW1DO0FBQ25DLDBEQUF3QztBQUN4Qyw4REFBNEM7QUFDNUMsZ0VBQThDO0FBQzlDLHdEQUFzQztBQUN0QywyREFBeUM7QUFDekMsNkRBQTJDO0FBRTNDLElBQU0sVUFBVSxHQUFVO0lBQ3hCLGdCQUFnQjtJQUNoQiw4QkFBYTtJQUNiLCtDQUFxQjtJQUNyQiwyQ0FBbUI7SUFDbkIsa0NBQWU7SUFDZiwyQ0FBbUI7SUFDbkIsa0RBQXNCO0lBQ3RCLHNEQUF3QjtJQUN4Qix1Q0FBaUI7SUFDakIsNkNBQW9CO0lBQ3BCLGlEQUFzQjtDQUN2QixDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQVU7SUFDdEIsY0FBYztJQUNkLGdDQUFjO0NBQ2YsQ0FBQztBQUVGO0lBQUE7S0FtQkM7SUFOUSw0QkFBTyxHQUFkLFVBQWUsb0JBQXdCO1FBQ3JDLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFNBQVMsRUFBRSxRQUFRO1NBQ3BCLENBQUM7SUFDSixDQUFDOzREQU5VLG9CQUFvQjsySEFBcEIsb0JBQW9CLG1CQUZwQixRQUFRLFlBVFY7Z0JBQ1AscUJBQVk7Z0JBQ1osbUJBQVc7Z0JBQ1gsdUJBQWdCO2dCQUNoQix3QkFBUztnQkFDVCw0QkFBaUI7YUFDbEI7K0JBMURIO0NBc0VDLEFBbkJELElBbUJDO0FBUFksb0RBQW9CO3dGQUFwQixvQkFBb0I7UUE5Qi9CLGdCQUFnQjtRQUNoQiw4QkFBYTtRQUNiLCtDQUFxQjtRQUNyQiwyQ0FBbUI7UUFDbkIsa0NBQWU7UUFDZiwyQ0FBbUI7UUFDbkIsa0RBQXNCO1FBQ3RCLHNEQUF3QjtRQUN4Qix1Q0FBaUI7UUFDakIsNkNBQW9CO1FBQ3BCLGlEQUFzQixhQVVwQixxQkFBWTtRQUNaLG1CQUFXO1FBQ1gsdUJBQWdCO1FBQ2hCLHdCQUFTO1FBQ1QsNEJBQWlCO1FBeEJuQixnQkFBZ0I7UUFDaEIsOEJBQWE7UUFDYiwrQ0FBcUI7UUFDckIsMkNBQW1CO1FBQ25CLGtDQUFlO1FBQ2YsMkNBQW1CO1FBQ25CLGtEQUFzQjtRQUN0QixzREFBd0I7UUFDeEIsdUNBQWlCO1FBQ2pCLDZDQUFvQjtRQUNwQixpREFBc0I7a0RBb0JYLG9CQUFvQjtjQVpoQyxlQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLHFCQUFZO29CQUNaLG1CQUFXO29CQUNYLHVCQUFnQjtvQkFDaEIsd0JBQVM7b0JBQ1QsNEJBQWlCO2lCQUNsQjtnQkFDRCxZQUFZLEVBQUUsVUFBVTtnQkFDeEIsT0FBTyxFQUFFLFVBQVU7Z0JBQ25CLFNBQVMsRUFBRSxRQUFRO2FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXBXYWxkQ29yZU1vZHVsZSB9IGZyb20gJ21hcC13YWxkJztcblxuaW1wb3J0IHsgTGVhZmxldFNlcnZpY2UgfSBmcm9tICcuL2xlYWZsZXQuc2VydmljZSc7XG5pbXBvcnQgeyBMZWFmbGV0TWFwQ29tcG9uZW50IH0gZnJvbSAnLi9sZWFmbGV0LW1hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHJhd0NvbXBvbmVudCB9IGZyb20gJy4vZHJhdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2VvanNvbkxheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9nZW9qc29uLWxheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWdlbmRDb21wb25lbnQgfSBmcm9tICcuL2xlZ2VuZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFwQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vbWFwLWNvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IE9uZVRpbWVTcGxhc2hDb21wb25lbnQgfSBmcm9tICcuL29uZS10aW1lLXNwbGFzaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVmVjdG9yVGlsZUxheWVyQ29tcG9uZW50IH0gZnJvbSAnLi92ZWN0b3ItdGlsZS1sYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgV21zTGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL3dtcy1sYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZUVsZW1lbnRDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtZWxlbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZVNlbGVjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1zZWxlY3Rpb24uY29tcG9uZW50JztcblxuZXhwb3J0ICogZnJvbSAnLi9kYXRhJztcbmV4cG9ydCAqIGZyb20gJy4vbGVhZmxldC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vbGVhZmxldC1tYXAuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZHJhdy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9nZW9qc29uLWxheWVyLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2xlZ2VuZC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9tYXAtY29udHJvbC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9vbmUtdGltZS1zcGxhc2guY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vdmVjdG9yLXRpbGUtbGF5ZXIuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vd21zLWxheWVyLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGUtZWxlbWVudC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRlLXNlbGVjdGlvbi5jb21wb25lbnQnO1xuXG5jb25zdCBjb21wb25lbnRzOiBhbnlbXSA9IFtcbiAgLy8kY29tcG9uZW50TGlzdFxuICBEcmF3Q29tcG9uZW50LFxuICBHZW9qc29uTGF5ZXJDb21wb25lbnQsXG4gIExlYWZsZXRNYXBDb21wb25lbnQsXG4gIExlZ2VuZENvbXBvbmVudCxcbiAgTWFwQ29udHJvbENvbXBvbmVudCxcbiAgT25lVGltZVNwbGFzaENvbXBvbmVudCxcbiAgVmVjdG9yVGlsZUxheWVyQ29tcG9uZW50LFxuICBXbXNMYXllckNvbXBvbmVudCxcbiAgRGF0ZUVsZW1lbnRDb21wb25lbnQsXG4gIERhdGVTZWxlY3Rpb25Db21wb25lbnRcbl07XG5cbmNvbnN0IHNlcnZpY2VzOiBhbnlbXSA9IFtcbiAgLy8kc2VydmljZUxpc3RcbiAgTGVhZmxldFNlcnZpY2UgIFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE5nYk1vZHVsZSxcbiAgICBNYXBXYWxkQ29yZU1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IGNvbXBvbmVudHMsXG4gIGV4cG9ydHM6IGNvbXBvbmVudHMsXG4gIHByb3ZpZGVyczogc2VydmljZXNcbn0pXG5leHBvcnQgY2xhc3MgTWFwV2FsZExlYWZsZXRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChtb2R1bGVJbml0aWFsaXNhdGlvbjphbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE1hcFdhbGRMZWFmbGV0TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBNYXBXYWxkTGVhZmxldE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogc2VydmljZXNcbiAgICB9O1xuICB9XG59XG4iXX0=