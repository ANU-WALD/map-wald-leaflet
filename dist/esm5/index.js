"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapWaldLeafletModule = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var http_1 = require("@angular/common/http");
var common_1 = require("@angular/common");
var map_wald_1 = require("map-wald");
var i0 = require("@angular/core");
var components = [
//$componentList
];
var services = [
//$serviceList
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MapWaldLeafletModule, { imports: [common_1.CommonModule,
        forms_1.FormsModule,
        http_1.HttpClientModule,
        ng_bootstrap_1.NgbModule,
        map_wald_1.MapWaldCoreModule] }); })();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC1sZWFmbGV0LyIsInNvdXJjZXMiOlsiaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQThEO0FBQzlELHdDQUE2QztBQUM3QywyREFBdUQ7QUFDdkQsNkNBQXdEO0FBQ3hELDBDQUErQztBQUMvQyxxQ0FBNkM7O0FBRTdDLElBQU0sVUFBVSxHQUFVO0FBQ3hCLGdCQUFnQjtDQUNqQixDQUFDO0FBRUYsSUFBTSxRQUFRLEdBQVU7QUFDdEIsY0FBYztDQUNmLENBQUM7QUFFRjtJQUFBO0tBbUJDO0lBTlEsNEJBQU8sR0FBZCxVQUFlLG9CQUF3QjtRQUNyQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixTQUFTLEVBQUUsUUFBUTtTQUNwQixDQUFDO0lBQ0osQ0FBQzs0REFOVSxvQkFBb0I7MkhBQXBCLG9CQUFvQixtQkFGcEIsUUFBUSxZQVRWO2dCQUNQLHFCQUFZO2dCQUNaLG1CQUFXO2dCQUNYLHVCQUFnQjtnQkFDaEIsd0JBQVM7Z0JBQ1QsNEJBQWlCO2FBQ2xCOytCQXRCSDtDQWtDQyxBQW5CRCxJQW1CQztBQVBZLG9EQUFvQjt3RkFBcEIsb0JBQW9CLGNBVjdCLHFCQUFZO1FBQ1osbUJBQVc7UUFDWCx1QkFBZ0I7UUFDaEIsd0JBQVM7UUFDVCw0QkFBaUI7a0RBTVIsb0JBQW9CO2NBWmhDLGVBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AscUJBQVk7b0JBQ1osbUJBQVc7b0JBQ1gsdUJBQWdCO29CQUNoQix3QkFBUztvQkFDVCw0QkFBaUI7aUJBQ2xCO2dCQUNELFlBQVksRUFBRSxVQUFVO2dCQUN4QixPQUFPLEVBQUUsVUFBVTtnQkFDbkIsU0FBUyxFQUFFLFFBQVE7YUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOZ2JNb2R1bGUgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hcFdhbGRDb3JlTW9kdWxlIH0gZnJvbSAnbWFwLXdhbGQnO1xuXG5jb25zdCBjb21wb25lbnRzOiBhbnlbXSA9IFtcbiAgLy8kY29tcG9uZW50TGlzdFxuXTtcblxuY29uc3Qgc2VydmljZXM6IGFueVtdID0gW1xuICAvLyRzZXJ2aWNlTGlzdFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE5nYk1vZHVsZSxcbiAgICBNYXBXYWxkQ29yZU1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IGNvbXBvbmVudHMsXG4gIGV4cG9ydHM6IGNvbXBvbmVudHMsXG4gIHByb3ZpZGVyczogc2VydmljZXNcbn0pXG5leHBvcnQgY2xhc3MgTWFwV2FsZExlYWZsZXRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChtb2R1bGVJbml0aWFsaXNhdGlvbjphbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE1hcFdhbGRMZWFmbGV0TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBNYXBXYWxkTGVhZmxldE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogc2VydmljZXNcbiAgICB9O1xuICB9XG59XG4iXX0=