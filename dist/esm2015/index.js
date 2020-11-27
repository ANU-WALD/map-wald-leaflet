"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapWaldLeafletModule = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const http_1 = require("@angular/common/http");
const common_1 = require("@angular/common");
const map_wald_1 = require("map-wald");
const i0 = require("@angular/core");
const components = [
//$componentList
];
const services = [
//$serviceList
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC1sZWFmbGV0LyIsInNvdXJjZXMiOlsiaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQThEO0FBQzlELDBDQUE2QztBQUM3Qyw2REFBdUQ7QUFDdkQsK0NBQXdEO0FBQ3hELDRDQUErQztBQUMvQyx1Q0FBNkM7O0FBRTdDLE1BQU0sVUFBVSxHQUFVO0FBQ3hCLGdCQUFnQjtDQUNqQixDQUFDO0FBRUYsTUFBTSxRQUFRLEdBQVU7QUFDdEIsY0FBYztDQUNmLENBQUM7QUFFRixNQVlhLG9CQUFvQjtJQUMvQixNQUFNLENBQUMsT0FBTyxDQUFDLG9CQUF3QjtRQUNyQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixTQUFTLEVBQUUsUUFBUTtTQUNwQixDQUFDO0lBQ0osQ0FBQzs7QUFsQkgsb0RBbUJDO3dEQVBZLG9CQUFvQjt1SEFBcEIsb0JBQW9CLG1CQUZwQixRQUFRLFlBVFY7WUFDUCxxQkFBWTtZQUNaLG1CQUFXO1lBQ1gsdUJBQWdCO1lBQ2hCLHdCQUFTO1lBQ1QsNEJBQWlCO1NBQ2xCO3dGQUtVLG9CQUFvQixjQVY3QixxQkFBWTtRQUNaLG1CQUFXO1FBQ1gsdUJBQWdCO1FBQ2hCLHdCQUFTO1FBQ1QsNEJBQWlCO2tEQU1SLG9CQUFvQjtjQVpoQyxlQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLHFCQUFZO29CQUNaLG1CQUFXO29CQUNYLHVCQUFnQjtvQkFDaEIsd0JBQVM7b0JBQ1QsNEJBQWlCO2lCQUNsQjtnQkFDRCxZQUFZLEVBQUUsVUFBVTtnQkFDeEIsT0FBTyxFQUFFLFVBQVU7Z0JBQ25CLFNBQVMsRUFBRSxRQUFRO2FBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmdiTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXBXYWxkQ29yZU1vZHVsZSB9IGZyb20gJ21hcC13YWxkJztcblxuY29uc3QgY29tcG9uZW50czogYW55W10gPSBbXG4gIC8vJGNvbXBvbmVudExpc3Rcbl07XG5cbmNvbnN0IHNlcnZpY2VzOiBhbnlbXSA9IFtcbiAgLy8kc2VydmljZUxpc3Rcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBOZ2JNb2R1bGUsXG4gICAgTWFwV2FsZENvcmVNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBjb21wb25lbnRzLFxuICBleHBvcnRzOiBjb21wb25lbnRzLFxuICBwcm92aWRlcnM6IHNlcnZpY2VzXG59KVxuZXhwb3J0IGNsYXNzIE1hcFdhbGRMZWFmbGV0TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QobW9kdWxlSW5pdGlhbGlzYXRpb246YW55KTogTW9kdWxlV2l0aFByb3ZpZGVyczxNYXBXYWxkTGVhZmxldE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTWFwV2FsZExlYWZsZXRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IHNlcnZpY2VzXG4gICAgfTtcbiAgfVxufVxuIl19