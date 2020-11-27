(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@angular/core'), require('@angular/forms'), require('@ng-bootstrap/ng-bootstrap'), require('@angular/common/http'), require('@angular/common'), require('map-wald')) :
    typeof define === 'function' && define.amd ? define('map-wald-leaflet', ['@angular/core', '@angular/forms', '@ng-bootstrap/ng-bootstrap', '@angular/common/http', '@angular/common', 'map-wald'], factory) :
    (global = global || self, global['map-wald-leaflet'] = factory(global.ng.core, global.ng.forms, global.ngBootstrap, global.ng.common.http, global.ng.common, global.mapWald));
}(this, (function (core, forms, ngBootstrap, http, common, mapWald) { 'use strict';

    core = core && core.hasOwnProperty('default') ? core['default'] : core;
    forms = forms && forms.hasOwnProperty('default') ? forms['default'] : forms;
    ngBootstrap = ngBootstrap && ngBootstrap.hasOwnProperty('default') ? ngBootstrap['default'] : ngBootstrap;
    http = http && http.hasOwnProperty('default') ? http['default'] : http;
    common = common && common.hasOwnProperty('default') ? common['default'] : common;
    mapWald = mapWald && mapWald.hasOwnProperty('default') ? mapWald['default'] : mapWald;

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function commonjsRequire () {
    	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
    }

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    function getCjsExportFromNamespace (n) {
    	return n && n['default'] || n;
    }

    var esm5 = createCommonjsModule(function (module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MapWaldLeafletModule = void 0;






    var i0 = core;
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
                    common.CommonModule,
                    forms.FormsModule,
                    http.HttpClientModule,
                    ngBootstrap.NgbModule,
                    mapWald.MapWaldCoreModule
                ]] });
        return MapWaldLeafletModule;
    }());
    exports.MapWaldLeafletModule = MapWaldLeafletModule;
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MapWaldLeafletModule, { imports: [common.CommonModule,
            forms.FormsModule,
            http.HttpClientModule,
            ngBootstrap.NgbModule,
            mapWald.MapWaldCoreModule] }); })();
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MapWaldLeafletModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
                        forms.FormsModule,
                        http.HttpClientModule,
                        ngBootstrap.NgbModule,
                        mapWald.MapWaldCoreModule
                    ],
                    declarations: components,
                    exports: components,
                    providers: services
                }]
        }], null, null); })();

    });

    var index = unwrapExports(esm5);
    var esm5_1 = esm5.MapWaldLeafletModule;

    var mapWaldLeaflet = createCommonjsModule(function (module, exports) {
    "use strict";
    /**
     * Generated bundle index. Do not edit.
     */
    var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }));
    var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(esm5, exports);

    });

    var mapWaldLeaflet$1 = unwrapExports(mapWaldLeaflet);

    return mapWaldLeaflet$1;

})));
//# sourceMappingURL=map-wald-leaflet.umd.js.map
