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
const map_coordinates_component_1 = require("./map-coordinates.component");
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
__exportStar(require("./map-coordinates.component"), exports);
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
    date_selection_component_1.DateSelectionComponent,
    map_coordinates_component_1.MapCoordinatesComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC1sZWFmbGV0LyIsInNvdXJjZXMiOlsiaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHdDQUE4RDtBQUM5RCwwQ0FBNkM7QUFDN0MsNkRBQXVEO0FBQ3ZELCtDQUF3RDtBQUN4RCw0Q0FBK0M7QUFDL0MsdUNBQTZDO0FBRTdDLHVEQUFtRDtBQUNuRCxtRUFBOEQ7QUFDOUQscURBQWlEO0FBQ2pELHVFQUFrRTtBQUNsRSx5REFBcUQ7QUFDckQsbUVBQThEO0FBQzlELDJFQUFxRTtBQUNyRSwrRUFBeUU7QUFDekUsK0RBQTBEO0FBQzFELHFFQUFnRTtBQUNoRSx5RUFBb0U7QUFDcEUsMkVBQXNFOztBQUV0RSx5Q0FBdUI7QUFDdkIsb0RBQWtDO0FBQ2xDLDBEQUF3QztBQUN4QyxtREFBaUM7QUFDakMsNERBQTBDO0FBQzFDLHFEQUFtQztBQUNuQywwREFBd0M7QUFDeEMsOERBQTRDO0FBQzVDLGdFQUE4QztBQUM5Qyx3REFBc0M7QUFDdEMsMkRBQXlDO0FBQ3pDLDZEQUEyQztBQUMzQyw4REFBNEM7QUFFNUMsTUFBTSxVQUFVLEdBQVU7SUFDeEIsZ0JBQWdCO0lBQ2hCLDhCQUFhO0lBQ2IsK0NBQXFCO0lBQ3JCLDJDQUFtQjtJQUNuQixrQ0FBZTtJQUNmLDJDQUFtQjtJQUNuQixrREFBc0I7SUFDdEIsc0RBQXdCO0lBQ3hCLHVDQUFpQjtJQUNqQiw2Q0FBb0I7SUFDcEIsaURBQXNCO0lBQ3RCLG1EQUF1QjtDQUN4QixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQVU7SUFDdEIsY0FBYztJQUNkLGdDQUFjO0NBQ2YsQ0FBQztBQUVGLE1BWWEsb0JBQW9CO0lBQy9CLE1BQU0sQ0FBQyxPQUFPLENBQUMsb0JBQXdCO1FBQ3JDLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFNBQVMsRUFBRSxRQUFRO1NBQ3BCLENBQUM7SUFDSixDQUFDOztBQWxCSCxvREFtQkM7d0RBUFksb0JBQW9CO3VIQUFwQixvQkFBb0IsbUJBRnBCLFFBQVEsWUFUVjtZQUNQLHFCQUFZO1lBQ1osbUJBQVc7WUFDWCx1QkFBZ0I7WUFDaEIsd0JBQVM7WUFDVCw0QkFBaUI7U0FDbEI7d0ZBS1Usb0JBQW9CO1FBL0IvQixnQkFBZ0I7UUFDaEIsOEJBQWE7UUFDYiwrQ0FBcUI7UUFDckIsMkNBQW1CO1FBQ25CLGtDQUFlO1FBQ2YsMkNBQW1CO1FBQ25CLGtEQUFzQjtRQUN0QixzREFBd0I7UUFDeEIsdUNBQWlCO1FBQ2pCLDZDQUFvQjtRQUNwQixpREFBc0I7UUFDdEIsbURBQXVCLGFBVXJCLHFCQUFZO1FBQ1osbUJBQVc7UUFDWCx1QkFBZ0I7UUFDaEIsd0JBQVM7UUFDVCw0QkFBaUI7UUF6Qm5CLGdCQUFnQjtRQUNoQiw4QkFBYTtRQUNiLCtDQUFxQjtRQUNyQiwyQ0FBbUI7UUFDbkIsa0NBQWU7UUFDZiwyQ0FBbUI7UUFDbkIsa0RBQXNCO1FBQ3RCLHNEQUF3QjtRQUN4Qix1Q0FBaUI7UUFDakIsNkNBQW9CO1FBQ3BCLGlEQUFzQjtRQUN0QixtREFBdUI7a0RBb0JaLG9CQUFvQjtjQVpoQyxlQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLHFCQUFZO29CQUNaLG1CQUFXO29CQUNYLHVCQUFnQjtvQkFDaEIsd0JBQVM7b0JBQ1QsNEJBQWlCO2lCQUNsQjtnQkFDRCxZQUFZLEVBQUUsVUFBVTtnQkFDeEIsT0FBTyxFQUFFLFVBQVU7Z0JBQ25CLFNBQVMsRUFBRSxRQUFRO2FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXBXYWxkQ29yZU1vZHVsZSB9IGZyb20gJ21hcC13YWxkJztcblxuaW1wb3J0IHsgTGVhZmxldFNlcnZpY2UgfSBmcm9tICcuL2xlYWZsZXQuc2VydmljZSc7XG5pbXBvcnQgeyBMZWFmbGV0TWFwQ29tcG9uZW50IH0gZnJvbSAnLi9sZWFmbGV0LW1hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHJhd0NvbXBvbmVudCB9IGZyb20gJy4vZHJhdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgR2VvanNvbkxheWVyQ29tcG9uZW50IH0gZnJvbSAnLi9nZW9qc29uLWxheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMZWdlbmRDb21wb25lbnQgfSBmcm9tICcuL2xlZ2VuZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFwQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vbWFwLWNvbnRyb2wuY29tcG9uZW50JztcbmltcG9ydCB7IE9uZVRpbWVTcGxhc2hDb21wb25lbnQgfSBmcm9tICcuL29uZS10aW1lLXNwbGFzaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVmVjdG9yVGlsZUxheWVyQ29tcG9uZW50IH0gZnJvbSAnLi92ZWN0b3ItdGlsZS1sYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgV21zTGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL3dtcy1sYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZUVsZW1lbnRDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtZWxlbWVudC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGF0ZVNlbGVjdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vZGF0ZS1zZWxlY3Rpb24uY29tcG9uZW50JztcbmltcG9ydCB7IE1hcENvb3JkaW5hdGVzQ29tcG9uZW50IH0gZnJvbSAnLi9tYXAtY29vcmRpbmF0ZXMuY29tcG9uZW50JztcblxuZXhwb3J0ICogZnJvbSAnLi9kYXRhJztcbmV4cG9ydCAqIGZyb20gJy4vbGVhZmxldC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vbGVhZmxldC1tYXAuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZHJhdy5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9nZW9qc29uLWxheWVyLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2xlZ2VuZC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9tYXAtY29udHJvbC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9vbmUtdGltZS1zcGxhc2guY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vdmVjdG9yLXRpbGUtbGF5ZXIuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vd21zLWxheWVyLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2RhdGUtZWxlbWVudC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9kYXRlLXNlbGVjdGlvbi5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9tYXAtY29vcmRpbmF0ZXMuY29tcG9uZW50JztcblxuY29uc3QgY29tcG9uZW50czogYW55W10gPSBbXG4gIC8vJGNvbXBvbmVudExpc3RcbiAgRHJhd0NvbXBvbmVudCxcbiAgR2VvanNvbkxheWVyQ29tcG9uZW50LFxuICBMZWFmbGV0TWFwQ29tcG9uZW50LFxuICBMZWdlbmRDb21wb25lbnQsXG4gIE1hcENvbnRyb2xDb21wb25lbnQsXG4gIE9uZVRpbWVTcGxhc2hDb21wb25lbnQsXG4gIFZlY3RvclRpbGVMYXllckNvbXBvbmVudCxcbiAgV21zTGF5ZXJDb21wb25lbnQsXG4gIERhdGVFbGVtZW50Q29tcG9uZW50LFxuICBEYXRlU2VsZWN0aW9uQ29tcG9uZW50LFxuICBNYXBDb29yZGluYXRlc0NvbXBvbmVudFxuXTtcblxuY29uc3Qgc2VydmljZXM6IGFueVtdID0gW1xuICAvLyRzZXJ2aWNlTGlzdFxuICBMZWFmbGV0U2VydmljZSAgXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgTmdiTW9kdWxlLFxuICAgIE1hcFdhbGRDb3JlTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogY29tcG9uZW50cyxcbiAgZXhwb3J0czogY29tcG9uZW50cyxcbiAgcHJvdmlkZXJzOiBzZXJ2aWNlc1xufSlcbmV4cG9ydCBjbGFzcyBNYXBXYWxkTGVhZmxldE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KG1vZHVsZUluaXRpYWxpc2F0aW9uOmFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TWFwV2FsZExlYWZsZXRNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE1hcFdhbGRMZWFmbGV0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBzZXJ2aWNlc1xuICAgIH07XG4gIH1cbn1cbiJdfQ==