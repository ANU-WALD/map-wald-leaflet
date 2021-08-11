import core from '@angular/core';
import forms from '@angular/forms';
import ngBootstrap from '@ng-bootstrap/ng-bootstrap';
import http from '@angular/common/http';
import common from '@angular/common';
import mapWald from 'map-wald';
import leaflet from 'leaflet';
import leafletDraw from 'leaflet-draw';
import leaflet$1 from 'leaflet.vectorgrid';
import store from 'store';

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

var leaflet_service = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeafletService = void 0;

const i0 = core;
class LeafletService {
    constructor() {
        this.map = new Promise((res, rej) => {
            this.resolve = res;
            this.reject = rej;
        });
    }
    mapCreated(map) {
        this.resolve(map);
    }
    withMap(fn) {
        this.map.then(fn);
    }
}
exports.LeafletService = LeafletService;
LeafletService.ɵfac = function LeafletService_Factory(t) { return new (t || LeafletService)(); };
LeafletService.ɵprov = i0.ɵɵdefineInjectable({ token: LeafletService, factory: LeafletService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LeafletService, [{
        type: core.Injectable
    }], function () { return []; }, null); })();

});

var leaflet_service$1 = unwrapExports(leaflet_service);
var leaflet_service_1 = leaflet_service.LeafletService;

var leafletMap_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeafletMapComponent = void 0;



const i0 = core;
const i1 = leaflet_service;
const _c0 = ["*"];
const DEFAULT_BASE_MAP = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
class LeafletMapComponent {
    constructor(element, svc) {
        this.element = element;
        this.svc = svc;
        this.zoomControl = true;
        this.minZoom = 5;
        this.maxZoom = 32;
        this.styles = {};
        this.initialised = false;
        console.log('LeafletMapComponent');
    }
    ngOnChanges(changes) {
        if (!this.initialised) {
            return;
        }
        const changeCount = Object.keys(changes).length;
        // if(this.creating){
        //   return;
        // }
        // if(this.map){
        //   if(changes.markers){
        //     this.setupMarkers();
        //     if(changeCount===1){
        //       return;
        //     }
        //   }
        //   this.map.remove();
        // }
        //    if(!this.creating){
        this.updateMap(changes);
        //    }
        if (changes.bounds) {
            this.setBounds();
        }
    }
    ngOnInit() {
        this.updateMap();
        this.setBounds();
    }
    updateMap(changes) {
        setTimeout(() => {
            if (!this.map) {
                this.createMap();
                return;
            }
            if (changes && changes.baseMap) {
                // this.baseLayer.setUrl(this.baseMap.urlTemplate || DEFAULT_BASE_MAP)
                if (this.baseLayer) {
                    this.baseLayer.setUrl(this.baseMap.urlTemplate || DEFAULT_BASE_MAP);
                    // this.baseLayer.removeFrom(this.map);
                }
                else if (this.baseMap) {
                    this.createBaseLayer();
                    this.baseLayer.addTo(this.map).bringToBack();
                }
            }
        });
        // Update parameters
    }
    createBaseLayer() {
        this.baseLayer = null;
        if (!this.baseMap) {
            return;
        }
        const options = {};
        if (this.baseMap.maxNativeZoom) {
            options.maxNativeZoom = this.baseMap.maxNativeZoom;
        }
        this.baseLayer = leaflet.tileLayer(this.baseMap.urlTemplate || DEFAULT_BASE_MAP, options);
    }
    createMap() {
        setTimeout(() => {
            if (this.map) {
                this.map.remove();
                this.map = null;
            }
            const theDiv = this.element.nativeElement;
            const theHost = theDiv.querySelector('.leafletHost');
            // let baseLayers = R.mapObjIndexed(v=>{
            //   return L.tileLayer(v,
            //     { maxZoom: 18, attribution: '...' });
            // },this.baseMaps);
            // if(!this.baseMap || !baseLayers[this.baseMap]){
            //   this.baseMap = Object.keys(this.baseMaps)[0];
            // }
            // let baseLayerArray = [baseLayers[this.baseMap]];
            let crs = leaflet.CRS.EPSG3857; //:L.CRS.Simple;
            // if(this.crs){
            //   crs = L.CRS[this.crs];
            // }
            // let panes = 0;
            // if(this.map){
            //   panes = getCustomMapPanes(this.map).length;
            // }
            this.createBaseLayer();
            const baseLayerArray = [];
            if (this.baseLayer) {
                baseLayerArray.push(this.baseLayer);
            }
            this.map = leaflet.map(theHost, {
                crs,
                zoom: 5,
                minZoom: this.minZoom,
                maxZoom: this.maxZoom,
                zoomControl: this.zoomControl,
                center: leaflet.latLng(-20, 135),
                // zoom: this.zoom,
                // minZoom: this.minZoom,
                // maxZoom: this.maxZoom,
                scrollWheelZoom: true,
                layers: baseLayerArray,
                continuousWorld: false,
                noWrap: true,
            });
            this.svc.mapCreated(this.map);
            // if(!this.pannable){
            //   this.map.dragging.disable();
            // }
            // if(!this.zoomable){
            //   this.map.touchZoom.disable();
            //   this.map.doubleClickZoom.disable();
            //   this.map.scrollWheelZoom.disable();
            // }
            // configureVectorPanes(panes,this.map);
            // this._helper.register(this.map);
            this.map.on('click', (evt) => {
                if (evt.originalEvent.defaultPrevented) {
                    return;
                }
                // this.pointClick.emit(evt.latlng);
            });
            // this.creating=false;
            // this.map.on('zoomend',()=>this.coordinatesChanged());
            // this.map.on('moveend',()=>this.coordinatesChanged());
            // if(this.showLayerControl){
            //   this.layerControl = L.control.layers(baseLayers, [],{
            //     hideSingleBase:true
            //   }).addTo(this.map);
            // }
            // this.mapCreated.emit(this.map);
            // this.markerLayers = [];
            // this.setupMarkers();
            this.setBounds();
            this.initialised = true;
        });
    }
    setBounds() {
        if (!this.map || !this.bounds) {
            return;
        }
        this.map.fitBounds([
            [this.bounds.south, this.bounds.west],
            [this.bounds.north, this.bounds.east]
        ]);
    }
}
exports.LeafletMapComponent = LeafletMapComponent;
LeafletMapComponent.ɵfac = function LeafletMapComponent_Factory(t) { return new (t || LeafletMapComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.LeafletService)); };
LeafletMapComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LeafletMapComponent, selectors: [["leaflet-map"]], inputs: { bounds: "bounds", baseMap: "baseMap", zoomControl: "zoomControl", minZoom: "minZoom", maxZoom: "maxZoom" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[1, "leafletHost"]], template: function LeafletMapComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleMap(ctx.styles);
    } }, styles: [".leafletHost[_ngcontent-%COMP%]{\n    width:100%;\n    min-height:400px;\n  }"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LeafletMapComponent, [{
        type: core.Component,
        args: [{
                selector: 'leaflet-map',
                template: `<div class="leafletHost" [style]="styles">
  <ng-content></ng-content>
</div>
`, styles: [
                    `
  .leafletHost{
    width:100%;
    min-height:400px;
  }`
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.LeafletService }]; }, { bounds: [{
            type: core.Input
        }], baseMap: [{
            type: core.Input
        }], zoomControl: [{
            type: core.Input
        }], minZoom: [{
            type: core.Input
        }], maxZoom: [{
            type: core.Input
        }] }); })();

});

var leafletMap_component$1 = unwrapExports(leafletMap_component);
var leafletMap_component_1 = leafletMap_component.LeafletMapComponent;

var draw_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawComponent = void 0;




const i0 = core;
const i1 = leaflet_service;
class DrawComponent {
    constructor(map) {
        this.map = map;
        this.featureClosed = new core.EventEmitter();
    }
    ngOnDestroy() {
        this.map.withMap(m => this.removeControl(m));
    }
    ngOnInit() {
        this.map.withMap(m => this.addControl(m));
    }
    removeControl(m) {
        m.removeLayer(this.drawnItems);
        this.polygon.removeHooks();
        // m.removeControl(this.drawControl);
        m.off(leaflet.Draw.Event.DRAWSTART);
        m.off(leaflet.Draw.Event.CREATED);
    }
    addControl(m) {
        this.drawnItems = new leaflet.FeatureGroup();
        m.addLayer(this.drawnItems);
        // this.drawControl = new L.Control.Draw({
        //   draw: {
        //     polyline: false,
        //     circle: false,
        //     marker: false,
        //     rectangle: false,
        //     circlemarker: false
        //   },
        //   edit: null
        // });
        // m.addControl(this.drawControl);
        this.initiateDrawing(m);
        m.on(leaflet.Draw.Event.DRAWSTART, (event) => {
            this.drawnItems.clearLayers();
        });
        m.on(leaflet.Draw.Event.DRAWVERTEX, (event) => {
            this.drawnItems.clearLayers();
        });
        m.on(leaflet.Draw.Event.CREATED, (event) => {
            console.log(event);
            const layer = event.layer;
            this.drawnItems.clearLayers();
            this.drawnItems.addLayer(layer);
            this.featureClosed.emit(layer.toGeoJSON());
            this.polygon.removeHooks();
            this.initiateDrawing(m);
        });
    }
    initiateDrawing(m) {
        this.polygon = new leaflet.Draw.Polygon(m, { repeatMode: false });
        this.polygon.addHooks();
    }
}
exports.DrawComponent = DrawComponent;
DrawComponent.ɵfac = function DrawComponent_Factory(t) { return new (t || DrawComponent)(i0.ɵɵdirectiveInject(i1.LeafletService)); };
DrawComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DrawComponent, selectors: [["draw"]], outputs: { featureClosed: "featureClosed" }, decls: 0, vars: 0, template: function DrawComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DrawComponent, [{
        type: core.Component,
        args: [{
                selector: 'draw',
                template: '',
                styles: []
            }]
    }], function () { return [{ type: i1.LeafletService }]; }, { featureClosed: [{
            type: core.Output
        }] }); })();

});

var draw_component$1 = unwrapExports(draw_component);
var draw_component_1 = draw_component.DrawComponent;

var geojsonLayer_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeojsonLayerComponent = exports.PointMode = void 0;





const i0 = core;
const i1 = http;
const i2 = leaflet_service;
const STYLES = {
    fillOpacity: 0.0,
    weight: 1.0
};
var PointMode;
(function (PointMode) {
    PointMode[PointMode["default"] = 0] = "default";
    PointMode[PointMode["circle"] = 1] = "circle";
})(PointMode = exports.PointMode || (exports.PointMode = {}));
class GeojsonLayerComponent {
    // private data: any;
    constructor(http, map) {
        this.http = http;
        this.map = map;
        // @Input() styles: any;
        this.sublayers = [];
        this.pointMode = PointMode.default;
        this.style = {};
        // @Input() idColumn = 'id';
        this.featureSelected = new core.EventEmitter();
        this.destroyed = false;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.destroyed = true;
        this.map.map.then(m => {
            this.remove(m);
        });
    }
    remove(m) {
        if (this.vectorLayer) {
            this.vectorLayer.removeFrom(m);
            this.vectorLayer = null;
        }
    }
    ngOnChanges(changes) {
        if (changes.url) {
            this.downloadLayer(changes.url.currentValue);
        }
        else if (changes.features || changes.pointMode) {
            this.makeLayer();
        }
    }
    downloadLayer(url) {
        this.http.get(this.url).subscribe((data) => {
            if (url !== this.url) {
                // out of date!
                return;
            }
            this.features = data;
            this.makeLayer();
        });
    }
    makeLayer() {
        this.map.map.then(m => {
            this.remove(m);
            if (this.destroyed) {
                return;
            }
            const style = (f) => {
                const styles = Object.assign({}, STYLES);
                Object.keys(this.style).forEach(k => {
                    const val = this.style[k];
                    if (val.getStyleValue) {
                        styles[k] = val.getStyleValue(f);
                    }
                    else {
                        styles[k] = val;
                    }
                });
                return styles;
            };
            const options = {
                // interactive: true
                style: style
            };
            if (this.pointMode === PointMode.circle) {
                options.pointToLayer = (feature, latlng) => {
                    let radius = 3;
                    if (this.style && this.style.radius) {
                        if (this.style.radius.getStyleValue) {
                            radius = this.style.radius.getStyleValue(feature);
                        }
                        else {
                            radius = this.style.radius;
                        }
                    }
                    return leaflet.circleMarker(latlng, { radius: radius });
                };
            }
            this.vectorLayer = leaflet.geoJSON(this.features, options);
            this.vectorLayer.on('click', (event) => {
                if (this.selectedFeature) {
                    this.vectorLayer.resetStyle(this.selectedFeature);
                    // resetFeatureStyle(this.selectedFeature);
                }
                this.selectedFeature = event.layer;
                this.selectedFeature.setStyle({
                    weight: 5
                });
                this.featureSelected.emit(this.selectedFeature.feature);
            });
            this.vectorLayer.addTo(m);
        });
    }
}
exports.GeojsonLayerComponent = GeojsonLayerComponent;
GeojsonLayerComponent.ɵfac = function GeojsonLayerComponent_Factory(t) { return new (t || GeojsonLayerComponent)(i0.ɵɵdirectiveInject(i1.HttpClient), i0.ɵɵdirectiveInject(i2.LeafletService)); };
GeojsonLayerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GeojsonLayerComponent, selectors: [["geojson-layer"]], inputs: { url: "url", features: "features", sublayers: "sublayers", pointMode: "pointMode", style: "style" }, outputs: { featureSelected: "featureSelected" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function GeojsonLayerComponent_Template(rf, ctx) { }, styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GeojsonLayerComponent, [{
        type: core.Component,
        args: [{
                selector: 'geojson-layer',
                template: '',
                styles: ['']
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.LeafletService }]; }, { url: [{
            type: core.Input
        }], features: [{
            type: core.Input
        }], sublayers: [{
            type: core.Input
        }], pointMode: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], featureSelected: [{
            type: core.Output
        }] }); })();

});

var geojsonLayer_component$1 = unwrapExports(geojsonLayer_component);
var geojsonLayer_component_1 = geojsonLayer_component.GeojsonLayerComponent;
var geojsonLayer_component_2 = geojsonLayer_component.PointMode;

var legend_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeColour = exports.LegendComponent = void 0;

const i0 = core;


function LegendComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 5);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHtml", ctx_r1.helpText, i0.ɵɵsanitizeHtml);
} }
function LegendComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 6);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", "(" + ctx_r2.mapUnits + ")", i0.ɵɵsanitizeHtml);
} }
function LegendComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵelement(1, "i", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngbTooltip", _r0)("placement", ctx_r3.tooltipPlacement);
} }
const _c0 = function (a0) { return { background: a0 }; };
function LegendComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵelement(2, "i", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 14);
    i0.ɵɵelement(4, "span", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const colour_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c0, colour_r9));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", ctx_r8.labels[i_r10], i0.ɵɵsanitizeHtml);
} }
function LegendComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵtemplate(2, LegendComponent_div_7_div_2_Template, 5, 4, "div", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.colours);
} }
function LegendComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "img", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r5.imageURL, i0.ɵɵsanitizeUrl);
} }
function LegendComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Source: ");
    i0.ɵɵelementStart(2, "a", 16);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("href", ctx_r6.attributionLink, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r6.attribution || "details");
} }
function LegendComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("Source: ", ctx_r7.attribution, "");
} }
class LegendComponent {
    constructor() {
        this.colours = ['red', 'white', 'blue'];
        this.labels = [];
        this.title = 'the title';
        this.mapUnits = '';
        this.tooltipPlacement = 'right';
        this.generatedLabels = [];
    }
    ngOnInit() {
    }
}
exports.LegendComponent = LegendComponent;
LegendComponent.ɵfac = function LegendComponent_Factory(t) { return new (t || LegendComponent)(); };
LegendComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LegendComponent, selectors: [["legend"]], inputs: { colours: "colours", labels: "labels", imageURL: "imageURL", title: "title", mapUnits: "mapUnits", helpText: "helpText", tooltipPlacement: "tooltipPlacement", attribution: "attribution", attributionLink: "attributionLink" }, decls: 11, vars: 7, consts: [[1, "map-legend", "panel", "panel-group"], ["tooltipContent", ""], [3, "innerHTML", 4, "ngIf"], ["container", "body", 3, "ngbTooltip", "placement", 4, "ngIf"], [4, "ngIf"], [3, "innerHtml"], [3, "innerHTML"], ["container", "body", 3, "ngbTooltip", "placement"], [1, "fa", "fa-info-circle"], [2, "display", "table", "line-height", "15px"], ["style", "display:table-row;padding:0;", 4, "ngFor", "ngForOf"], [2, "display", "table-row", "padding", "0"], [1, "legend-colour"], [1, "legend-entry", 3, "ngStyle"], [1, "legend-label"], [3, "src"], [3, "href"]], template: function LegendComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, LegendComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementStart(3, "strong");
        i0.ɵɵtext(4);
        i0.ɵɵtemplate(5, LegendComponent_span_5_Template, 1, 1, "span", 2);
        i0.ɵɵtemplate(6, LegendComponent_span_6_Template, 2, 2, "span", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, LegendComponent_div_7_Template, 3, 1, "div", 4);
        i0.ɵɵtemplate(8, LegendComponent_div_8_Template, 2, 1, "div", 4);
        i0.ɵɵtemplate(9, LegendComponent_p_9_Template, 4, 2, "p", 4);
        i0.ɵɵtemplate(10, LegendComponent_p_10_Template, 2, 1, "p", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1("", ctx.title, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.mapUnits);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.helpText);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.imageURL);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.imageURL);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.attributionLink);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.attribution && !ctx.attributionLink);
    } }, directives: [common.NgIf, ngBootstrap.NgbTooltip, common.NgForOf, common.NgStyle], styles: [".map-legend[_ngcontent-%COMP%]{\n  display:block;\n  background: white;\n}\n\n.legend-colour[_ngcontent-%COMP%]{\n  display:table-cell;\n  padding:0px;\n}\n\n.legend-label[_ngcontent-%COMP%]{\n  display:table-cell;\n  padding:0px 4px 2px 2px;\n  font-size:10px;\n  vertical-align:middle;\n}\n\n.legend-entry[_ngcontent-%COMP%] {\n  float: left;\n  width: 15px !important;\n  height: 15px !important;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LegendComponent, [{
        type: core.Component,
        args: [{
                selector: 'legend',
                template: `<div class="map-legend panel panel-group">
<ng-template #tooltipContent>
  <span [innerHtml]=helpText></span>
</ng-template>
  <strong>{{title}} <span *ngIf="mapUnits" [innerHTML]="'('+mapUnits+')'"></span>
        <span *ngIf="helpText"
              [ngbTooltip]="tooltipContent"
              [placement]="tooltipPlacement"
              container="body">
          <i class="fa fa-info-circle"></i>
        </span>
  </strong>

  <div *ngIf="!imageURL">
    <div style="display:table;line-height:15px">
      <div style="display:table-row;padding:0;"
          *ngFor="let colour of colours; let i=index">
        <div class="legend-colour">
          <i class="legend-entry" [ngStyle]="{background:colour}"></i>
        </div>
        <div class="legend-label">
          <span [innerHTML]="labels[i]"></span>
        </div>
      </div>
    </div>
  </div>

  <div *ngIf="imageURL">
    <img [src]="imageURL">
  </div>
  <p *ngIf="attributionLink">Source: <a [href]="attributionLink">{{attribution || 'details'}}</a></p>
  <p *ngIf="attribution&&!attributionLink">Source: {{attribution}}</p>
</div>
`, styles: [`
.map-legend{
  display:block;
  background: white;
}

.legend-colour{
  display:table-cell;
  padding:0px;
}

.legend-label{
  display:table-cell;
  padding:0px 4px 2px 2px;
  font-size:10px;
  vertical-align:middle;
}

.legend-entry {
  float: left;
  width: 15px !important;
  height: 15px !important;
}
`]
            }]
    }], function () { return []; }, { colours: [{
            type: core.Input
        }], labels: [{
            type: core.Input
        }], imageURL: [{
            type: core.Input
        }], title: [{
            type: core.Input
        }], mapUnits: [{
            type: core.Input
        }], helpText: [{
            type: core.Input
        }], tooltipPlacement: [{
            type: core.Input
        }], attribution: [{
            type: core.Input
        }], attributionLink: [{
            type: core.Input
        }] }); })();
function makeColour(r, g, b, a) {
    a = (a === undefined) ? 1 : a;
    return `rgb(${r},${g},${b},${a})`;
}
exports.makeColour = makeColour;

});

var legend_component$1 = unwrapExports(legend_component);
var legend_component_1 = legend_component.makeColour;
var legend_component_2 = legend_component.LegendComponent;

var mapControl_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapControlComponent = void 0;
/// <reference types="./leaflet.customcontrols" />
/// <reference types="./leaflet.customcontrols" />



const i0 = core;
const i1 = leaflet_service;
const _c0 = ["mapControl"];
const _c1 = ["*"];
const TAG_WHITE_LIST = ['INPUT', 'SELECT', 'OPTION'];
class MapControlComponent {
    constructor(_el, _map) {
        this._el = _el;
        this._map = _map;
        this.position = 'TOP_RIGHT';
        this.touchDevice = false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        // this._wrapper.getNativeMap().then((m)=>{
        let content = this._el.nativeElement.querySelector('.map-control-content');
        //   // If content of the map control is not already wrapped in a div, do it
        //   // now.
        if (content.nodeName !== "DIV") {
            const controlDiv = document.createElement('div');
            controlDiv.appendChild(content);
            content = controlDiv;
        }
        const CustomControl = leaflet.Control.extend({
            onAdd: (map) => {
                return content;
            },
            onRemove: (map) => {
                // Nothing to do here
            }
        });
        const makeCustomControl = (opts) => {
            return new CustomControl(opts);
        };
        this._map.map.then(map => {
            const c = makeCustomControl({
                position: this.position.replace(/_/g, '').toLowerCase()
            });
            c.addTo(map);
        });
        //   (<any>m).controls[(<any>window).google.maps.ControlPosition[this.position]].push(content);
        // });
    }
    ontouchstart(ev) {
        this.touchDevice = true;
        if (TAG_WHITE_LIST.indexOf(ev.target.tagName) >= 0) {
            ev.stopPropagation();
        }
        this.enableMapEvents(null);
    }
    disableMapEvents(event) {
        this.m(event);
        if (this.touchDevice) {
            return;
        }
        this._map.map.then(m => {
            m.dragging.disable();
            m.scrollWheelZoom.disable();
        });
    }
    enableMapEvents(event) {
        if (event) {
            this.m(event);
        }
        this._map.map.then(m => {
            const options = {
                pan: true,
                zoom: true
            };
            if (options.pan) {
                m.dragging.enable();
            }
            if (options.zoom) {
                m.scrollWheelZoom.enable();
            }
        });
    }
    m(event) {
        event.stopPropagation();
    }
}
exports.MapControlComponent = MapControlComponent;
MapControlComponent.ɵfac = function MapControlComponent_Factory(t) { return new (t || MapControlComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.LeafletService)); };
MapControlComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MapControlComponent, selectors: [["map-control"]], viewQuery: function MapControlComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mapControl = _t.first);
    } }, inputs: { position: "position" }, ngContentSelectors: _c1, decls: 3, vars: 0, consts: [[1, "map-control-content", 3, "touchstart", "mouseenter", "mouseleave", "click", "dblclick", "mousemove", "mousedown", "mouseup"], ["mapControl", ""]], template: function MapControlComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵlistener("touchstart", function MapControlComponent_Template_div_touchstart_0_listener($event) { return ctx.ontouchstart($event); })("mouseenter", function MapControlComponent_Template_div_mouseenter_0_listener($event) { return ctx.disableMapEvents($event); })("mouseleave", function MapControlComponent_Template_div_mouseleave_0_listener($event) { return ctx.enableMapEvents($event); })("click", function MapControlComponent_Template_div_click_0_listener($event) { return ctx.m($event); })("dblclick", function MapControlComponent_Template_div_dblclick_0_listener($event) { return ctx.m($event); })("mousemove", function MapControlComponent_Template_div_mousemove_0_listener($event) { return ctx.m($event); })("mousedown", function MapControlComponent_Template_div_mousedown_0_listener($event) { return ctx.m($event); })("mouseup", function MapControlComponent_Template_div_mouseup_0_listener($event) { return ctx.m($event); });
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
    } }, styles: [".map-control-content[_ngcontent-%COMP%]{\n  background: transparent;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MapControlComponent, [{
        type: core.Component,
        args: [{
                selector: 'map-control',
                template: `<div #mapControl class="map-control-content"
                  (touchstart)="ontouchstart($event)"
                  (mouseenter)="disableMapEvents($event)"
                  (mouseleave)="enableMapEvents($event)"
                  (click)="m($event)"
                  (dblclick)="m($event)"
                  (mousemove)="m($event)"
                  (mousedown)="m($event)"
                  (mouseup)="m($event)">
  <ng-content></ng-content>
</div>
`, styles: [`.map-control-content{
  background: transparent;
}
`],
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.LeafletService }]; }, { mapControl: [{
            type: core.ViewChild,
            args: ['mapControl', { static: false }]
        }], position: [{
            type: core.Input
        }] }); })();

});

var mapControl_component$1 = unwrapExports(mapControl_component);
var mapControl_component_1 = mapControl_component.MapControlComponent;

var oneTimeSplash_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneTimeSplashComponent = exports.SplashCloseMode = void 0;



const i0 = core;
const i1 = ngBootstrap;


const _c0 = ["splashTemplate"];
function OneTimeSplashComponent_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "h4", 7);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 8);
    i0.ɵɵlistener("click", function OneTimeSplashComponent_ng_template_0_div_0_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r8); const d_r3 = i0.ɵɵnextContext().dismiss; return d_r3("Cross click"); });
    i0.ɵɵelementStart(4, "span", 9);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.label, "");
} }
function OneTimeSplashComponent_ng_template_0_label_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵelementStart(1, "input", 10);
    i0.ɵɵlistener("ngModelChange", function OneTimeSplashComponent_ng_template_0_label_4_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.doNotShow = $event; })("ngModelChange", function OneTimeSplashComponent_ng_template_0_label_4_Template_input_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.doNotShowClicked(); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r5.doNotShow);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" \u00A0 ", ctx_r5.hideMessage, " ");
} }
function OneTimeSplashComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, OneTimeSplashComponent_ng_template_0_div_0_Template, 6, 1, "div", 1);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵprojection(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 3);
    i0.ɵɵtemplate(4, OneTimeSplashComponent_ng_template_0_label_4_Template, 3, 2, "label", 4);
    i0.ɵɵelementStart(5, "button", 5);
    i0.ɵɵlistener("click", function OneTimeSplashComponent_ng_template_0_Template_button_click_5_listener() { const c_r2 = ctx.close; return c_r2("Close click"); });
    i0.ɵɵtext(6, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r1.label);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.application);
} }
const _c1 = ["*"];
var SplashCloseMode;
(function (SplashCloseMode) {
    SplashCloseMode[SplashCloseMode["NotOpened"] = 0] = "NotOpened";
    SplashCloseMode[SplashCloseMode["Accepted"] = 1] = "Accepted";
    SplashCloseMode[SplashCloseMode["Cancelled"] = 2] = "Cancelled";
})(SplashCloseMode = exports.SplashCloseMode || (exports.SplashCloseMode = {}));
class OneTimeSplashComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.label = 'About';
        this.hideMessage = 'Understood, I don’t need to see this again';
        this.showOnLaunch = true;
        this.closed = new core.EventEmitter();
    }
    storageKey() {
        if (!this.application) {
            return null;
        }
        return this.application + '-splash-skip';
    }
    ngAfterViewInit() {
        setTimeout(() => {
            const key = this.storageKey();
            if (key) {
                this.doNotShow = store.get(key, false);
            }
            if (this.showOnLaunch) {
                this.defaultShow();
            }
        });
    }
    defaultShow() {
        if (!this.doNotShow) {
            this.show();
        }
        else {
            this.closed.emit(SplashCloseMode.NotOpened);
        }
    }
    show() {
        this.current = this.modalService.open(this.splashTemplate, {
            size: 'lg',
            windowClass: this.klass
        });
    }
    close() {
        if (!this.current) {
            this.closed.emit(SplashCloseMode.NotOpened);
            return;
        }
        this.current.close();
        this.current = null;
        this.closed.emit(SplashCloseMode.Accepted);
    }
    doNotShowClicked() {
        const key = this.storageKey();
        if (!key) {
            return;
        }
        store.set(key, this.doNotShow);
    }
}
exports.OneTimeSplashComponent = OneTimeSplashComponent;
OneTimeSplashComponent.ɵfac = function OneTimeSplashComponent_Factory(t) { return new (t || OneTimeSplashComponent)(i0.ɵɵdirectiveInject(i1.NgbModal)); };
OneTimeSplashComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OneTimeSplashComponent, selectors: [["one-time-splash"]], viewQuery: function OneTimeSplashComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.splashTemplate = _t.first);
    } }, inputs: { application: "application", label: "label", hideMessage: "hideMessage", klass: "klass", showOnLaunch: "showOnLaunch" }, outputs: { closed: "closed" }, ngContentSelectors: _c1, decls: 2, vars: 0, consts: [["splashTemplate", ""], ["class", "modal-header", 4, "ngIf"], [1, "modal-body"], [1, "modal-footer"], [4, "ngIf"], ["autofocus", "", "type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["type", "checkbox", 3, "ngModel", "ngModelChange"]], template: function OneTimeSplashComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, OneTimeSplashComponent_ng_template_0_Template, 7, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    } }, directives: [common.NgIf, forms.CheckboxControlValueAccessor, forms.NgControlStatus, forms.NgModel], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OneTimeSplashComponent, [{
        type: core.Component,
        args: [{
                selector: 'one-time-splash',
                template: `<ng-template #splashTemplate let-c="close" let-d="dismiss">
  <div *ngIf="label" class="modal-header">
    <h4 class="modal-title">
      {{label}}</h4>
    <button type="button" class="close" aria-label="Close" (click)="d('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <ng-content></ng-content>
  </div>
  <div class="modal-footer">
    <label *ngIf="application">
      <input type="checkbox" [(ngModel)]="doNotShow" (ngModelChange)="doNotShowClicked()">
      &nbsp; {{hideMessage}}
    </label>
    <button autofocus type="button" class="btn btn-secondary" (click)="c('Close click')">Close</button>
  </div>
  </ng-template>
`,
                styles: [``]
            }]
    }], function () { return [{ type: i1.NgbModal }]; }, { splashTemplate: [{
            type: core.ViewChild,
            args: ['splashTemplate', { static: false }]
        }], application: [{
            type: core.Input
        }], label: [{
            type: core.Input
        }], hideMessage: [{
            type: core.Input
        }], klass: [{
            type: core.Input
        }], showOnLaunch: [{
            type: core.Input
        }], closed: [{
            type: core.Output
        }] }); })();

});

var oneTimeSplash_component$1 = unwrapExports(oneTimeSplash_component);
var oneTimeSplash_component_1 = oneTimeSplash_component.OneTimeSplashComponent;
var oneTimeSplash_component_2 = oneTimeSplash_component.SplashCloseMode;

var vectorTileLayer_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VectorTileLayerComponent = void 0;
/// <reference types="./leaflet.vectorgrid" />
/// <reference types="./leaflet.vectorgrid" />

// import 'leaflet.vectorgrid';

const i0 = core;
const i1 = leaflet_service;
class VectorTileLayerComponent {
    constructor(map) {
        this.map = map;
        this.sublayers = [];
        this.featureSelected = new core.EventEmitter();
        this.destroyed = false;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.destroyed = true;
        this.map.map.then(m => {
            this.remove(m);
        });
    }
    getFeatureId(f) {
        const match = this.sublayers.find(v => f.properties[v.keyField]);
        return f.properties[match.keyField];
    }
    remove(m) {
        if (this.vectorLayer) {
            this.vectorLayer.removeFrom(m);
            this.vectorLayer = null;
        }
    }
    ngOnChanges(changes) {
        this.map.map.then(m => {
            this.remove(m);
            if (this.destroyed) {
                return;
            }
            this.vectorLayer = L.vectorGrid.protobuf(this.url, {
                minZoom: 11,
                interactive: true,
                vectorTileLayerStyles: this.styles,
                maxNativeZoom: 13,
                getFeatureId: (f) => this.getFeatureId(f)
            });
            this.vectorLayer.on('click', (event) => {
                if (this.selectedFeature) {
                    this.vectorLayer.resetFeatureStyle(this.selectedFeature);
                }
                this.selectedFeature = this.getFeatureId(event.layer);
                this.vectorLayer.setFeatureStyle(this.selectedFeature, {
                    weight: 5
                });
                const geoJSON = this.vectorGridFeatureToGeoJSON(event.layer);
                this.featureSelected.emit(geoJSON);
            });
            this.vectorLayer.addTo(m);
        });
    }
    vectorGridFeatureToGeoJSON(lyr) {
        const parts = (lyr._parts[0] && lyr._parts[0][0]) ? lyr._parts : [lyr._parts];
        const points = parts.map((part) => {
            return part.map(pt => [pt.x, pt.y]);
        });
        const minx = Math.min(...points[0].map(pt => pt[0]));
        const maxx = Math.max(...points[0].map(pt => pt[0]));
        const miny = Math.min(...points[0].map(pt => pt[1]));
        const maxy = Math.max(...points[0].map(pt => pt[1]));
        function converter(from, to) {
            const fromDelta = from[1] - from[0];
            const toDelta = to[1] - to[0];
            return (c) => to[0] + ((c - from[0]) / fromDelta) * toDelta;
        }
        const xConverter = converter([minx, maxx], [lyr.properties.minx, lyr.properties.maxx]);
        const yConverter = converter([miny, maxy], [lyr.properties.maxy, lyr.properties.miny]);
        return {
            type: 'Feature',
            geometry: {
                type: 'Polygon',
                coordinates: points.map(part => part.map(pt => [xConverter(pt[0]), yConverter(pt[1])]))
            },
            properties: lyr.properties
        };
    }
}
exports.VectorTileLayerComponent = VectorTileLayerComponent;
VectorTileLayerComponent.ɵfac = function VectorTileLayerComponent_Factory(t) { return new (t || VectorTileLayerComponent)(i0.ɵɵdirectiveInject(i1.LeafletService)); };
VectorTileLayerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: VectorTileLayerComponent, selectors: [["vector-tile-layer"]], inputs: { url: "url", styles: "styles", sublayers: "sublayers" }, outputs: { featureSelected: "featureSelected" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function VectorTileLayerComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(VectorTileLayerComponent, [{
        type: core.Component,
        args: [{
                selector: 'vector-tile-layer',
                template: '',
                styles: []
            }]
    }], function () { return [{ type: i1.LeafletService }]; }, { url: [{
            type: core.Input
        }], styles: [{
            type: core.Input
        }], sublayers: [{
            type: core.Input
        }], featureSelected: [{
            type: core.Output
        }] }); })();

});

var vectorTileLayer_component$1 = unwrapExports(vectorTileLayer_component);
var vectorTileLayer_component_1 = vectorTileLayer_component.VectorTileLayerComponent;

var wmsLayer_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WmsLayerComponent = void 0;



const i0 = core;
const i1 = leaflet_service;
const DEFAULT_WMS_PARAMS = {
    format: 'image/png',
    transparent: true
};
class WmsLayerComponent {
    constructor(map) {
        this.map = map;
        this.params = {};
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        this.map.map.then(m => {
            if (this.layer) {
                this.layer.removeFrom(m);
                this.layer = null;
            }
            if (!this.url || !this.params) {
                return;
            }
            const params = Object.assign({}, DEFAULT_WMS_PARAMS, this.params);
            this.layer = leaflet.tileLayer.wms(this.url, params);
            // this.layer.options.noWrap = true;
            this.layer.addTo(m);
        });
    }
}
exports.WmsLayerComponent = WmsLayerComponent;
WmsLayerComponent.ɵfac = function WmsLayerComponent_Factory(t) { return new (t || WmsLayerComponent)(i0.ɵɵdirectiveInject(i1.LeafletService)); };
WmsLayerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: WmsLayerComponent, selectors: [["wms-layer"]], inputs: { url: "url", params: "params" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function WmsLayerComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WmsLayerComponent, [{
        type: core.Component,
        args: [{
                selector: 'wms-layer',
                template: '',
                styles: []
            }]
    }], function () { return [{ type: i1.LeafletService }]; }, { url: [{
            type: core.Input
        }], params: [{
            type: core.Input
        }] }); })();

});

var wmsLayer_component$1 = unwrapExports(wmsLayer_component);
var wmsLayer_component_1 = wmsLayer_component.WmsLayerComponent;

var dateElement_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateElementComponent = void 0;

const i0 = core;
class DateElementComponent {
    constructor() {
        this.step = 1;
        this.changed = new core.EventEmitter();
        this.disabled = false;
    }
    ngAfterViewInit() {
    }
    move(n) {
        this.src[this.property] += n;
        this.changed.emit(this.src);
    }
}
exports.DateElementComponent = DateElementComponent;
DateElementComponent.ɵfac = function DateElementComponent_Factory(t) { return new (t || DateElementComponent)(); };
DateElementComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DateElementComponent, selectors: [["date-element"]], inputs: { label: "label", property: "property", src: "src", step: "step", disabled: "disabled" }, outputs: { changed: "changed" }, decls: 12, vars: 4, consts: [[1, "row", "no-gutters"], [1, "col-4"], [1, "col-2"], [1, "btn", "btn-secondary", "btn-sm", 3, "disabled", "click"], [1, "fa", "fa-angle-left"], [1, "btn", "btn-link", "btn-sm"], [1, "fa", "fa-angle-right"]], template: function DateElementComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵelementStart(4, "button", 3);
        i0.ɵɵlistener("click", function DateElementComponent_Template_button_click_4_listener() { return ctx.move(-ctx.step); });
        i0.ɵɵelement(5, "i", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 1);
        i0.ɵɵelementStart(7, "button", 5);
        i0.ɵɵtext(8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "div", 2);
        i0.ɵɵelementStart(10, "button", 3);
        i0.ɵɵlistener("click", function DateElementComponent_Template_button_click_10_listener() { return ctx.move(ctx.step); });
        i0.ɵɵelement(11, "i", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.label);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.disabled);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.src[ctx.property]);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("disabled", ctx.disabled);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateElementComponent, [{
        type: core.Component,
        args: [{
                selector: 'date-element',
                template: `<div class="row no-gutters">
  <div class="col-4">{{label}}</div>
  <div class="col-2">
    <button class="btn btn-secondary btn-sm"
            (click)="move(-step)"
            [disabled]="disabled">
      <i class="fa fa-angle-left"></i>
    </button>
  </div>
  <div class="col-4"><button class="btn btn-link btn-sm">{{src[property]}}</button></div>
  <div class="col-2">
    <button class="btn btn-secondary btn-sm"
            (click)="move(step)"
            [disabled]="disabled">
      <i class="fa fa-angle-right"></i>
    </button>
  </div>
</div>
`, styles: []
            }]
    }], function () { return []; }, { label: [{
            type: core.Input
        }], property: [{
            type: core.Input
        }], src: [{
            type: core.Input
        }], step: [{
            type: core.Input
        }], changed: [{
            type: core.Output
        }], disabled: [{
            type: core.Input
        }] }); })();

});

var dateElement_component$1 = unwrapExports(dateElement_component);
var dateElement_component_1 = dateElement_component.DateElementComponent;

var dateSelection_component = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateSelectionComponent = void 0;


const i0 = core;
const i1 = mapWald;




function DateSelectionComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵlistener("click", function DateSelectionComponent_div_1_div_3_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(2); return ctx_r5.move(-ctx_r5.stepDays); });
    i0.ɵɵelement(1, "i", 11);
    i0.ɵɵelementEnd();
} }
function DateSelectionComponent_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵlistener("click", function DateSelectionComponent_div_1_div_8_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.move(ctx_r7.stepDays); });
    i0.ɵɵelement(1, "i", 12);
    i0.ɵɵelementEnd();
} }
function DateSelectionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵelementStart(2, "div", 5);
    i0.ɵɵtemplate(3, DateSelectionComponent_div_1_div_3_Template, 2, 0, "div", 6);
    i0.ɵɵelementStart(4, "input", 7, 8);
    i0.ɵɵlistener("ngModelChange", function DateSelectionComponent_div_1_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.dateStruct = $event; })("ngModelChange", function DateSelectionComponent_div_1_Template_input_ngModelChange_4_listener() { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.dateStructChanged(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 9);
    i0.ɵɵlistener("click", function DateSelectionComponent_div_1_Template_div_click_6_listener() { i0.ɵɵrestoreView(_r10); const _r3 = i0.ɵɵreference(5); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.disabled || _r3.toggle(); });
    i0.ɵɵelement(7, "i", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, DateSelectionComponent_div_1_div_8_Template, 2, 0, "div", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.step);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r0.dateStruct)("maxDate", ctx_r0.maxDateStruct)("minDate", ctx_r0.minDateStruct)("disabled", ctx_r0.disabled);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.step);
} }
function DateSelectionComponent_div_2_date_element_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "date-element", 15);
    i0.ɵɵlistener("changed", function DateSelectionComponent_div_2_date_element_1_Template_date_element_changed_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.dateStructChanged(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r13.dateStruct)("property", "day")("label", "Day")("step", ctx_r13.stepDays)("disabled", ctx_r13.disabled);
} }
function DateSelectionComponent_div_2_date_element_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "date-element", 16);
    i0.ɵɵlistener("changed", function DateSelectionComponent_div_2_date_element_2_Template_date_element_changed_0_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.dateStructChanged(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r14.dateStruct)("property", "month")("label", "Month")("disabled", ctx_r14.disabled);
} }
function DateSelectionComponent_div_2_date_element_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "date-element", 16);
    i0.ɵɵlistener("changed", function DateSelectionComponent_div_2_date_element_3_Template_date_element_changed_0_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.dateStructChanged(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r15.dateStruct)("property", "year")("label", "Year")("disabled", ctx_r15.disabled);
} }
function DateSelectionComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, DateSelectionComponent_div_2_date_element_1_Template, 1, 5, "date-element", 13);
    i0.ɵɵtemplate(2, DateSelectionComponent_div_2_date_element_2_Template, 1, 4, "date-element", 14);
    i0.ɵɵtemplate(3, DateSelectionComponent_div_2_date_element_3_Template, 1, 4, "date-element", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.need.day);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.need.month);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.need.year);
} }
const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;
class DateSelectionComponent {
    constructor(timeUtils) {
        this.timeUtils = timeUtils;
        this.dateChange = new core.EventEmitter();
        this.style = 'arrows';
        this.stepDays = 1;
        this.referenceDate = null;
        this.disabled = false;
        this.step = false;
        this.need = {
            day: true,
            month: true,
            year: true
        };
        this.atMax = false;
        this.atMin = false;
    }
    ngAfterViewInit() {
    }
    ngOnChanges(changes) {
        if (changes.minDate) {
            this.minDateStruct = this.timeUtils.convertDate(this.minDate);
        }
        if (changes.maxDate) {
            this.maxDateStruct = this.timeUtils.convertDate(this.maxDate);
        }
        if (changes.date) {
            this.dateStruct = this.timeUtils.convertDate(this.date);
        }
        if (changes.timestep) {
            this.assessDateComponents();
        }
        this.checkLimits();
    }
    dateStructChanged() {
        this.date = new Date(Date.UTC(this.dateStruct.year, this.dateStruct.month - 1, this.dateStruct.day));
        // this.date.setUTCFullYear(this.dateStruct.year)
        // this.date.setUTCMonth(this.dateStruct.month-1)
        // this.date.setUTCDate(this.dateStruct.day);
        this.checkReference();
        this.dateChange.emit(this.date);
    }
    assessDateComponents() {
        this.need.day = this.need.month = this.need.year = true;
        if (this.timestep === 'daily') {
            return;
        }
        this.need.day = false;
        if (this.timestep === 'annual') {
            this.need.month = false;
        }
    }
    move(n) {
        this.date = new Date(this.date && this.date.getTime());
        this.date.setDate(this.date.getDate() + n);
        this.onDateChanged();
        this.dateChange.emit(this.date);
    }
    onDateChanged() {
        this.checkLimits();
    }
    checkLimits() {
        this.atMax = this.timeUtils.datesEqual(this.dateStruct, this.maxDateStruct);
        this.atMin = this.timeUtils.datesEqual(this.dateStruct, this.minDateStruct);
    }
    // TODO not enforcing limits etc...
    checkReference() {
        if (!this.referenceDate) {
            return;
        }
        let refComponents = mapWald.InterpolationService.interpolate(this.referenceDate, {
            year: this.date.getFullYear(),
            month: this.date.getMonth() + 1,
            date: this.date.getDate()
        }).split('-').map(s => +s);
        let currentRef = new Date(Date.UTC(refComponents[0], refComponents[1] - 1, refComponents[2]));
        console.log('currentRef', currentRef);
        console.log('currentDate', this.date);
        let timeSpan = MILLISECONDS_PER_DAY * this.stepDays;
        let days = (this.date.getTime() - currentRef.getTime()) / timeSpan;
        this.date = new Date(currentRef.getTime() + Math.round(days) * timeSpan);
        this.dateStruct = this.timeUtils.convertDate(this.date);
    }
}
exports.DateSelectionComponent = DateSelectionComponent;
DateSelectionComponent.ɵfac = function DateSelectionComponent_Factory(t) { return new (t || DateSelectionComponent)(i0.ɵɵdirectiveInject(i1.TimeUtilsService)); };
DateSelectionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DateSelectionComponent, selectors: [["date-selection"]], inputs: { date: "date", timestep: "timestep", minDate: "minDate", maxDate: "maxDate", style: "style", stepDays: "stepDays", referenceDate: "referenceDate", disabled: "disabled", step: "step" }, outputs: { dateChange: "dateChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 2, consts: [[1, "date-control", "container-fluid"], ["class", "row no-gutters", 4, "ngIf"], [4, "ngIf"], [1, "row", "no-gutters"], [1, "col-12", "form-group-inline"], [1, "input-group", "input-group-sm"], ["class", "ds-btn input-group-addon", 3, "click", 4, "ngIf"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control", "form-control-sm", 3, "ngModel", "maxDate", "minDate", "disabled", "ngModelChange"], ["d", "ngbDatepicker"], [1, "ds-btn", "input-group-addon", 3, "click"], [1, "fa", "fa-calendar"], [1, "fa", "fa-angle-left"], [1, "fa", "fa-angle-right"], [3, "src", "property", "label", "step", "disabled", "changed", 4, "ngIf"], [3, "src", "property", "label", "disabled", "changed", 4, "ngIf"], [3, "src", "property", "label", "step", "disabled", "changed"], [3, "src", "property", "label", "disabled", "changed"]], template: function DateSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, DateSelectionComponent_div_1_Template, 9, 6, "div", 1);
        i0.ɵɵtemplate(2, DateSelectionComponent_div_2_Template, 4, 3, "div", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.style !== "arrows");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.style === "arrows");
    } }, directives: [common.NgIf, ngBootstrap.NgbInputDatepicker, forms.DefaultValueAccessor, forms.NgControlStatus, forms.NgModel, dateElement_component.DateElementComponent], styles: [".date-control.container-fluid[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n\n  .ds-btn[_ngcontent-%COMP%] {\n    min-width:10px;\n    padding: 5px;\n  }"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateSelectionComponent, [{
        type: core.Component,
        args: [{
                selector: 'date-selection',
                template: `<div class="date-control container-fluid">
  <div *ngIf="style!=='arrows'" class="row no-gutters">
    <div class="col-12 form-group-inline">
        <div class="input-group input-group-sm">
          <div *ngIf="step" class="ds-btn input-group-addon" (click)="move(-stepDays)">
            <i class="fa fa-angle-left"></i>
          </div>
          <input class="form-control form-control-sm"
                 placeholder="yyyy-mm-dd"
                 name="dp"
                 [(ngModel)]="dateStruct"
                 (ngModelChange)="dateStructChanged()"
                 ngbDatepicker
                 #d="ngbDatepicker"
                 [maxDate]="maxDateStruct"
                 [minDate]="minDateStruct"
                 [disabled]="disabled">
          <div class="ds-btn input-group-addon" (click)="disabled||d.toggle()" >
            <i class="fa fa-calendar"></i>
          </div>
          <div *ngIf="step" class="ds-btn input-group-addon" (click)="move(stepDays)">
            <i class="fa fa-angle-right"></i>
          </div>
        </div>
      </div>

    <!--
      <div class="col-2" >
        <button class="btn btn-secondary btn-sm" [disabled]="atMax"
                (click)="move(1)"><i class="fa fa-chevron-right"></i></button>
      </div>
    -->
  </div>

  <div *ngIf="style==='arrows'">
    <date-element *ngIf="need.day"   [src]="dateStruct" [property]="'day'" [label]="'Day'"
                  [step]="stepDays"
                  (changed)="dateStructChanged()"
                  [disabled]="disabled"></date-element>
    <date-element *ngIf="need.month" [src]="dateStruct" [property]="'month'" [label]="'Month'"
                  (changed)="dateStructChanged()"
                  [disabled]="disabled"></date-element>
    <date-element *ngIf="need.year"  [src]="dateStruct" [property]="'year'" [label]="'Year'"
                  (changed)="dateStructChanged()"
                  [disabled]="disabled"></date-element>
  </div>
</div>
`, styles: [
                    `
  .date-control.container-fluid {
    padding-left: 0px;
    padding-right: 0px;
  }

  .ds-btn {
    min-width:10px;
    padding: 5px;
  }
  `
                ]
            }]
    }], function () { return [{ type: i1.TimeUtilsService }]; }, { date: [{
            type: core.Input
        }], dateChange: [{
            type: core.Output
        }], timestep: [{
            type: core.Input
        }], minDate: [{
            type: core.Input
        }], maxDate: [{
            type: core.Input
        }], style: [{
            type: core.Input
        }], stepDays: [{
            type: core.Input
        }], referenceDate: [{
            type: core.Input
        }], disabled: [{
            type: core.Input
        }], step: [{
            type: core.Input
        }] }); })();

});

var dateSelection_component$1 = unwrapExports(dateSelection_component);
var dateSelection_component_1 = dateSelection_component.DateSelectionComponent;

var basemapDescriptor = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

});

var basemapDescriptor$1 = unwrapExports(basemapDescriptor);

var vectorLayerDescriptor = createCommonjsModule(function (module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

});

var vectorLayerDescriptor$1 = unwrapExports(vectorLayerDescriptor);

var data = createCommonjsModule(function (module, exports) {
"use strict";
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
__exportStar(basemapDescriptor, exports);
__exportStar(vectorLayerDescriptor, exports);
// export * from './display-settings';
// export * from './layer-descriptor';
// export * from './legend-response';
// export * from './map-settings';

});

var index = unwrapExports(data);

var esm2015 = createCommonjsModule(function (module, exports) {
"use strict";
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
exports.MapWaldLeafletModule = void 0;

















const i0 = core;
__exportStar(data, exports);
__exportStar(leaflet_service, exports);
__exportStar(leafletMap_component, exports);
__exportStar(draw_component, exports);
__exportStar(geojsonLayer_component, exports);
__exportStar(legend_component, exports);
__exportStar(mapControl_component, exports);
__exportStar(oneTimeSplash_component, exports);
__exportStar(vectorTileLayer_component, exports);
__exportStar(wmsLayer_component, exports);
__exportStar(dateElement_component, exports);
__exportStar(dateSelection_component, exports);
const components = [
    //$componentList
    draw_component.DrawComponent,
    geojsonLayer_component.GeojsonLayerComponent,
    leafletMap_component.LeafletMapComponent,
    legend_component.LegendComponent,
    mapControl_component.MapControlComponent,
    oneTimeSplash_component.OneTimeSplashComponent,
    vectorTileLayer_component.VectorTileLayerComponent,
    wmsLayer_component.WmsLayerComponent,
    dateElement_component.DateElementComponent,
    dateSelection_component.DateSelectionComponent
];
const services = [
    //$serviceList
    leaflet_service.LeafletService
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MapWaldLeafletModule, { declarations: [
        //$componentList
        draw_component.DrawComponent,
        geojsonLayer_component.GeojsonLayerComponent,
        leafletMap_component.LeafletMapComponent,
        legend_component.LegendComponent,
        mapControl_component.MapControlComponent,
        oneTimeSplash_component.OneTimeSplashComponent,
        vectorTileLayer_component.VectorTileLayerComponent,
        wmsLayer_component.WmsLayerComponent,
        dateElement_component.DateElementComponent,
        dateSelection_component.DateSelectionComponent], imports: [common.CommonModule,
        forms.FormsModule,
        http.HttpClientModule,
        ngBootstrap.NgbModule,
        mapWald.MapWaldCoreModule], exports: [
        //$componentList
        draw_component.DrawComponent,
        geojsonLayer_component.GeojsonLayerComponent,
        leafletMap_component.LeafletMapComponent,
        legend_component.LegendComponent,
        mapControl_component.MapControlComponent,
        oneTimeSplash_component.OneTimeSplashComponent,
        vectorTileLayer_component.VectorTileLayerComponent,
        wmsLayer_component.WmsLayerComponent,
        dateElement_component.DateElementComponent,
        dateSelection_component.DateSelectionComponent] }); })();
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

var index$1 = unwrapExports(esm2015);
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
