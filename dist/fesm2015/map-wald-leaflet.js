import core from '@angular/core';
import forms from '@angular/forms';
import ngBootstrap from '@ng-bootstrap/ng-bootstrap';
import http from '@angular/common/http';
import common from '@angular/common';
import mapWald from 'map-wald';

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

var esm2015 = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapWaldLeafletModule = void 0;






const i0 = core;
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
            common.CommonModule,
            forms.FormsModule,
            http.HttpClientModule,
            ngBootstrap.NgbModule,
            mapWald.MapWaldCoreModule
        ]] });
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

var index = unwrapExports(esm2015);
var esm2015_1 = esm2015.MapWaldLeafletModule;

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
__exportStar(esm2015, exports);

});

var mapWaldLeaflet$1 = unwrapExports(mapWaldLeaflet);

export default mapWaldLeaflet$1;
//# sourceMappingURL=map-wald-leaflet.js.map
