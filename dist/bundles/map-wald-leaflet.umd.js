(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@angular/core'), require('@angular/forms'), require('@ng-bootstrap/ng-bootstrap'), require('@angular/common/http'), require('@angular/common'), require('map-wald'), require('leaflet'), require('leaflet-draw'), require('leaflet.vectorgrid'), require('store')) :
    typeof define === 'function' && define.amd ? define('map-wald-leaflet', ['@angular/core', '@angular/forms', '@ng-bootstrap/ng-bootstrap', '@angular/common/http', '@angular/common', 'map-wald', 'leaflet', 'leaflet-draw', 'leaflet.vectorgrid', 'store'], factory) :
    (global = global || self, global['map-wald-leaflet'] = factory(global.ng.core, global.ng.forms, global.ngBootstrap, global.ng.common.http, global.ng.common, global.mapWald, global.leaflet, global.leafletDraw, global.leaflet_vectorgrid, global.store));
}(this, (function (core, forms, ngBootstrap, http, common, mapWald, leaflet, leafletDraw, leaflet_vectorgrid, store) { 'use strict';

    core = core && core.hasOwnProperty('default') ? core['default'] : core;
    forms = forms && forms.hasOwnProperty('default') ? forms['default'] : forms;
    ngBootstrap = ngBootstrap && ngBootstrap.hasOwnProperty('default') ? ngBootstrap['default'] : ngBootstrap;
    http = http && http.hasOwnProperty('default') ? http['default'] : http;
    common = common && common.hasOwnProperty('default') ? common['default'] : common;
    mapWald = mapWald && mapWald.hasOwnProperty('default') ? mapWald['default'] : mapWald;
    leaflet = leaflet && leaflet.hasOwnProperty('default') ? leaflet['default'] : leaflet;
    leafletDraw = leafletDraw && leafletDraw.hasOwnProperty('default') ? leafletDraw['default'] : leafletDraw;
    leaflet_vectorgrid = leaflet_vectorgrid && leaflet_vectorgrid.hasOwnProperty('default') ? leaflet_vectorgrid['default'] : leaflet_vectorgrid;
    store = store && store.hasOwnProperty('default') ? store['default'] : store;

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

    var i0 = core;
    var LeafletService = /** @class */ (function () {
        function LeafletService() {
            var _this = this;
            this.map = new Promise(function (res, rej) {
                _this.resolve = res;
                _this.reject = rej;
            });
        }
        LeafletService.prototype.mapCreated = function (map) {
            this.resolve(map);
        };
        LeafletService.prototype.withMap = function (fn) {
            this.map.then(fn);
        };
        LeafletService.ɵfac = function LeafletService_Factory(t) { return new (t || LeafletService)(); };
        LeafletService.ɵprov = i0.ɵɵdefineInjectable({ token: LeafletService, factory: LeafletService.ɵfac });
        return LeafletService;
    }());
    exports.LeafletService = LeafletService;
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



    var i0 = core;
    var i1 = leaflet_service;
    var _c0 = ["*"];
    var DEFAULT_BASE_MAP = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var LeafletMapComponent = /** @class */ (function () {
        function LeafletMapComponent(element, svc) {
            this.element = element;
            this.svc = svc;
            this.zoomControl = true;
            this.minZoom = 5;
            this.maxZoom = 32;
            this.styles = {};
            this.initialised = false;
            console.log('LeafletMapComponent');
        }
        LeafletMapComponent.prototype.ngOnChanges = function (changes) {
            if (!this.initialised) {
                return;
            }
            var changeCount = Object.keys(changes).length;
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
        };
        LeafletMapComponent.prototype.ngOnInit = function () {
            this.updateMap();
            this.setBounds();
        };
        LeafletMapComponent.prototype.updateMap = function (changes) {
            var _this = this;
            setTimeout(function () {
                if (!_this.map) {
                    _this.createMap();
                    return;
                }
                if (changes && changes.baseMap) {
                    // this.baseLayer.setUrl(this.baseMap.urlTemplate || DEFAULT_BASE_MAP)
                    if (_this.baseLayer) {
                        _this.baseLayer.setUrl(_this.baseMap.urlTemplate || DEFAULT_BASE_MAP);
                        // this.baseLayer.removeFrom(this.map);
                    }
                    else {
                        _this.createBaseLayer();
                        _this.baseLayer.addTo(_this.map);
                    }
                }
            });
            // Update parameters
        };
        LeafletMapComponent.prototype.createBaseLayer = function () {
            var options = {};
            if (this.baseMap.maxNativeZoom) {
                options.maxNativeZoom = this.baseMap.maxNativeZoom;
            }
            this.baseLayer = leaflet.tileLayer(this.baseMap.urlTemplate || DEFAULT_BASE_MAP, options);
        };
        LeafletMapComponent.prototype.createMap = function () {
            var _this = this;
            setTimeout(function () {
                if (_this.map) {
                    _this.map.remove();
                    _this.map = null;
                }
                var theDiv = _this.element.nativeElement;
                var theHost = theDiv.querySelector('.leafletHost');
                // let baseLayers = R.mapObjIndexed(v=>{
                //   return L.tileLayer(v,
                //     { maxZoom: 18, attribution: '...' });
                // },this.baseMaps);
                // if(!this.baseMap || !baseLayers[this.baseMap]){
                //   this.baseMap = Object.keys(this.baseMaps)[0];
                // }
                // let baseLayerArray = [baseLayers[this.baseMap]];
                var crs = leaflet.CRS.EPSG3857; //:L.CRS.Simple;
                // if(this.crs){
                //   crs = L.CRS[this.crs];
                // }
                // let panes = 0;
                // if(this.map){
                //   panes = getCustomMapPanes(this.map).length;
                // }
                _this.createBaseLayer();
                var baseLayerArray = [
                    _this.baseLayer
                ];
                _this.map = leaflet.map(theHost, {
                    crs: crs,
                    zoom: 5,
                    minZoom: _this.minZoom,
                    maxZoom: _this.maxZoom,
                    zoomControl: _this.zoomControl,
                    center: leaflet.latLng(-20, 135),
                    // zoom: this.zoom,
                    // minZoom: this.minZoom,
                    // maxZoom: this.maxZoom,
                    scrollWheelZoom: true,
                    layers: baseLayerArray,
                    continuousWorld: false,
                    noWrap: true
                    // attributionControl: this.attribution
                });
                _this.svc.mapCreated(_this.map);
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
                _this.map.on('click', function (evt) {
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
                _this.setBounds();
                _this.initialised = true;
            });
        };
        LeafletMapComponent.prototype.setBounds = function () {
            if (!this.map || !this.bounds) {
                return;
            }
            this.map.fitBounds([
                [this.bounds.south, this.bounds.west],
                [this.bounds.north, this.bounds.east]
            ]);
        };
        LeafletMapComponent.ɵfac = function LeafletMapComponent_Factory(t) { return new (t || LeafletMapComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.LeafletService)); };
        LeafletMapComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LeafletMapComponent, selectors: [["leaflet-map"]], inputs: { bounds: "bounds", baseMap: "baseMap", zoomControl: "zoomControl", minZoom: "minZoom", maxZoom: "maxZoom" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[1, "leafletHost"]], template: function LeafletMapComponent_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵprojection(1);
                i0.ɵɵelementEnd();
            } if (rf & 2) {
                i0.ɵɵstyleMap(ctx.styles);
            } }, styles: [".leafletHost[_ngcontent-%COMP%]{\n    width:100%;\n    min-height:400px;\n  }"] });
        return LeafletMapComponent;
    }());
    exports.LeafletMapComponent = LeafletMapComponent;
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LeafletMapComponent, [{
            type: core.Component,
            args: [{
                    selector: 'leaflet-map',
                    template: "<div class=\"leafletHost\" [style]=\"styles\">\n  <ng-content></ng-content>\n</div>\n", styles: [
                        "\n  .leafletHost{\n    width:100%;\n    min-height:400px;\n  }"
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




    var i0 = core;
    var i1 = leaflet_service;
    var DrawComponent = /** @class */ (function () {
        function DrawComponent(map) {
            this.map = map;
            this.featureClosed = new core.EventEmitter();
        }
        DrawComponent.prototype.ngOnDestroy = function () {
            var _this = this;
            this.map.withMap(function (m) { return _this.removeControl(m); });
        };
        DrawComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.map.withMap(function (m) { return _this.addControl(m); });
        };
        DrawComponent.prototype.removeControl = function (m) {
            m.removeLayer(this.drawnItems);
            this.polygon.removeHooks();
            // m.removeControl(this.drawControl);
            m.off(leaflet.Draw.Event.DRAWSTART);
            m.off(leaflet.Draw.Event.CREATED);
        };
        DrawComponent.prototype.addControl = function (m) {
            var _this = this;
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
            m.on(leaflet.Draw.Event.DRAWSTART, function (event) {
                _this.drawnItems.clearLayers();
            });
            m.on(leaflet.Draw.Event.DRAWVERTEX, function (event) {
                _this.drawnItems.clearLayers();
            });
            m.on(leaflet.Draw.Event.CREATED, function (event) {
                console.log(event);
                var layer = event.layer;
                _this.drawnItems.clearLayers();
                _this.drawnItems.addLayer(layer);
                _this.featureClosed.emit(layer.toGeoJSON());
                _this.polygon.removeHooks();
                _this.initiateDrawing(m);
            });
        };
        DrawComponent.prototype.initiateDrawing = function (m) {
            this.polygon = new leaflet.Draw.Polygon(m, { repeatMode: false });
            this.polygon.addHooks();
        };
        DrawComponent.ɵfac = function DrawComponent_Factory(t) { return new (t || DrawComponent)(i0.ɵɵdirectiveInject(i1.LeafletService)); };
        DrawComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DrawComponent, selectors: [["draw"]], outputs: { featureClosed: "featureClosed" }, decls: 0, vars: 0, template: function DrawComponent_Template(rf, ctx) { }, encapsulation: 2 });
        return DrawComponent;
    }());
    exports.DrawComponent = DrawComponent;
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
    exports.GeojsonLayerComponent = void 0;





    var i0 = core;
    var i1 = http;
    var i2 = leaflet_service;
    var STYLES = {
        fillOpacity: 0.0,
        weight: 1.0
    };
    var GeojsonLayerComponent = /** @class */ (function () {
        // private data: any;
        function GeojsonLayerComponent(http, map) {
            this.http = http;
            this.map = map;
            this.sublayers = [];
            // @Input() idColumn = 'id';
            this.featureSelected = new core.EventEmitter();
            this.destroyed = false;
        }
        GeojsonLayerComponent.prototype.ngOnInit = function () {
        };
        GeojsonLayerComponent.prototype.ngOnDestroy = function () {
            var _this = this;
            this.destroyed = true;
            this.map.map.then(function (m) {
                _this.remove(m);
            });
        };
        GeojsonLayerComponent.prototype.remove = function (m) {
            if (this.vectorLayer) {
                this.vectorLayer.removeFrom(m);
                this.vectorLayer = null;
            }
        };
        GeojsonLayerComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            if (changes.url) {
                this.http.get(this.url).subscribe(function (data) {
                    if (changes.url.currentValue !== _this.url) {
                        // out of date!
                        return;
                    }
                    _this.map.map.then(function (m) {
                        _this.remove(m);
                        if (_this.destroyed) {
                            return;
                        }
                        _this.vectorLayer = leaflet.geoJSON(data, {
                            // interactive: true
                            style: STYLES
                        });
                        _this.vectorLayer.on('click', function (event) {
                            if (_this.selectedFeature) {
                                _this.vectorLayer.resetStyle(_this.selectedFeature);
                                // resetFeatureStyle(this.selectedFeature);
                            }
                            _this.selectedFeature = event.layer;
                            _this.selectedFeature.setStyle({
                                weight: 5
                            });
                            _this.featureSelected.emit(_this.selectedFeature.feature);
                        });
                        _this.vectorLayer.addTo(m);
                    });
                });
            }
        };
        GeojsonLayerComponent.ɵfac = function GeojsonLayerComponent_Factory(t) { return new (t || GeojsonLayerComponent)(i0.ɵɵdirectiveInject(i1.HttpClient), i0.ɵɵdirectiveInject(i2.LeafletService)); };
        GeojsonLayerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GeojsonLayerComponent, selectors: [["geojson-layer"]], inputs: { url: "url", styles: "styles", sublayers: "sublayers" }, outputs: { featureSelected: "featureSelected" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function GeojsonLayerComponent_Template(rf, ctx) { }, styles: [""] });
        return GeojsonLayerComponent;
    }());
    exports.GeojsonLayerComponent = GeojsonLayerComponent;
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GeojsonLayerComponent, [{
            type: core.Component,
            args: [{
                    selector: 'geojson-layer',
                    template: '',
                    styles: ['']
                }]
        }], function () { return [{ type: i1.HttpClient }, { type: i2.LeafletService }]; }, { url: [{
                type: core.Input
            }], styles: [{
                type: core.Input
            }], sublayers: [{
                type: core.Input
            }], featureSelected: [{
                type: core.Output
            }] }); })();

    });

    var geojsonLayer_component$1 = unwrapExports(geojsonLayer_component);
    var geojsonLayer_component_1 = geojsonLayer_component.GeojsonLayerComponent;

    var legend_component = createCommonjsModule(function (module, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.makeColour = exports.LegendComponent = void 0;

    var i0 = core;


    function LegendComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "span", 5);
    } if (rf & 2) {
        var ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵproperty("innerHtml", ctx_r1.helpText, i0.ɵɵsanitizeHtml);
    } }
    function LegendComponent_span_5_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "span", 6);
    } if (rf & 2) {
        var ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵproperty("innerHTML", "(" + ctx_r2.mapUnits + ")", i0.ɵɵsanitizeHtml);
    } }
    function LegendComponent_span_6_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 7);
        i0.ɵɵelement(1, "i", 8);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r3 = i0.ɵɵnextContext();
        var _r0 = i0.ɵɵreference(2);
        i0.ɵɵproperty("ngbTooltip", _r0)("placement", ctx_r3.tooltipPlacement);
    } }
    var _c0 = function (a0) { return { background: a0 }; };
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
        var colour_r9 = ctx.$implicit;
        var i_r10 = ctx.index;
        var ctx_r8 = i0.ɵɵnextContext(2);
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
        var ctx_r4 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx_r4.colours);
    } }
    function LegendComponent_div_8_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelement(1, "img", 15);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r5 = i0.ɵɵnextContext();
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
        var ctx_r6 = i0.ɵɵnextContext();
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
        var ctx_r7 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1("Source: ", ctx_r7.attribution, "");
    } }
    var LegendComponent = /** @class */ (function () {
        function LegendComponent() {
            this.colours = ['red', 'white', 'blue'];
            this.labels = [];
            this.title = 'the title';
            this.mapUnits = '';
            this.tooltipPlacement = 'right';
            this.generatedLabels = [];
        }
        LegendComponent.prototype.ngOnInit = function () {
        };
        LegendComponent.ɵfac = function LegendComponent_Factory(t) { return new (t || LegendComponent)(); };
        LegendComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LegendComponent, selectors: [["app-legend"]], inputs: { colours: "colours", labels: "labels", imageURL: "imageURL", title: "title", mapUnits: "mapUnits", helpText: "helpText", tooltipPlacement: "tooltipPlacement", attribution: "attribution", attributionLink: "attributionLink" }, decls: 11, vars: 7, consts: [[1, "map-legend", "panel", "panel-group"], ["tooltipContent", ""], [3, "innerHTML", 4, "ngIf"], ["container", "body", 3, "ngbTooltip", "placement", 4, "ngIf"], [4, "ngIf"], [3, "innerHtml"], [3, "innerHTML"], ["container", "body", 3, "ngbTooltip", "placement"], [1, "fa", "fa-info-circle"], [2, "display", "table", "line-height", "15px"], ["style", "display:table-row;padding:0;", 4, "ngFor", "ngForOf"], [2, "display", "table-row", "padding", "0"], [1, "legend-colour"], [1, "legend-entry", 3, "ngStyle"], [1, "legend-label"], [3, "src"], [3, "href"]], template: function LegendComponent_Template(rf, ctx) { if (rf & 1) {
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
        return LegendComponent;
    }());
    exports.LegendComponent = LegendComponent;
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LegendComponent, [{
            type: core.Component,
            args: [{
                    selector: 'app-legend',
                    template: "<div class=\"map-legend panel panel-group\">\n<ng-template #tooltipContent>\n  <span [innerHtml]=helpText></span>\n</ng-template>\n  <strong>{{title}} <span *ngIf=\"mapUnits\" [innerHTML]=\"'('+mapUnits+')'\"></span>\n        <span *ngIf=\"helpText\"\n              [ngbTooltip]=\"tooltipContent\"\n              [placement]=\"tooltipPlacement\"\n              container=\"body\">\n          <i class=\"fa fa-info-circle\"></i>\n        </span>\n  </strong>\n\n  <div *ngIf=\"!imageURL\">\n    <div style=\"display:table;line-height:15px\">\n      <div style=\"display:table-row;padding:0;\"\n          *ngFor=\"let colour of colours; let i=index\">\n        <div class=\"legend-colour\">\n          <i class=\"legend-entry\" [ngStyle]=\"{background:colour}\"></i>\n        </div>\n        <div class=\"legend-label\">\n          <span [innerHTML]=\"labels[i]\"></span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"imageURL\">\n    <img [src]=\"imageURL\">\n  </div>\n  <p *ngIf=\"attributionLink\">Source: <a [href]=\"attributionLink\">{{attribution || 'details'}}</a></p>\n  <p *ngIf=\"attribution&&!attributionLink\">Source: {{attribution}}</p>\n</div>\n", styles: ["\n.map-legend{\n  display:block;\n  background: white;\n}\n\n.legend-colour{\n  display:table-cell;\n  padding:0px;\n}\n\n.legend-label{\n  display:table-cell;\n  padding:0px 4px 2px 2px;\n  font-size:10px;\n  vertical-align:middle;\n}\n\n.legend-entry {\n  float: left;\n  width: 15px !important;\n  height: 15px !important;\n}\n"]
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
        return "rgb(" + r + "," + g + "," + b + "," + a + ")";
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



    var i0 = core;
    var i1 = leaflet_service;
    var _c0 = ["mapControl"];
    var _c1 = ["*"];
    var TAG_WHITE_LIST = ['INPUT', 'SELECT', 'OPTION'];
    var MapControlComponent = /** @class */ (function () {
        function MapControlComponent(_el, _map) {
            this._el = _el;
            this._map = _map;
            this.position = 'TOP_RIGHT';
            this.touchDevice = false;
        }
        MapControlComponent.prototype.ngOnInit = function () {
        };
        MapControlComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            // this._wrapper.getNativeMap().then((m)=>{
            var content = this._el.nativeElement.querySelector('.map-control-content');
            //   // If content of the map control is not already wrapped in a div, do it
            //   // now.
            if (content.nodeName !== "DIV") {
                var controlDiv = document.createElement('div');
                controlDiv.appendChild(content);
                content = controlDiv;
            }
            var CustomControl = leaflet.Control.extend({
                onAdd: function (map) {
                    return content;
                },
                onRemove: function (map) {
                    // Nothing to do here
                }
            });
            var makeCustomControl = function (opts) {
                return new CustomControl(opts);
            };
            this._map.map.then(function (map) {
                var c = makeCustomControl({
                    position: _this.position.replace(/_/g, '').toLowerCase()
                });
                c.addTo(map);
            });
            //   (<any>m).controls[(<any>window).google.maps.ControlPosition[this.position]].push(content);
            // });
        };
        MapControlComponent.prototype.ontouchstart = function (ev) {
            this.touchDevice = true;
            if (TAG_WHITE_LIST.indexOf(ev.target.tagName) >= 0) {
                ev.stopPropagation();
            }
            this.enableMapEvents();
        };
        MapControlComponent.prototype.disableMapEvents = function () {
            if (this.touchDevice) {
                return;
            }
            this._map.map.then(function (m) {
                m.dragging.disable();
                m.scrollWheelZoom.disable();
            });
        };
        MapControlComponent.prototype.enableMapEvents = function () {
            this._map.map.then(function (m) {
                var options = {
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
        };
        MapControlComponent.ɵfac = function MapControlComponent_Factory(t) { return new (t || MapControlComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.LeafletService)); };
        MapControlComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MapControlComponent, selectors: [["map-control"]], viewQuery: function MapControlComponent_Query(rf, ctx) { if (rf & 1) {
                i0.ɵɵviewQuery(_c0, true);
            } if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mapControl = _t.first);
            } }, inputs: { position: "position" }, ngContentSelectors: _c1, decls: 3, vars: 0, consts: [[1, "map-control-content", 3, "touchstart", "mouseenter", "mouseleave"], ["mapControl", ""]], template: function MapControlComponent_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "div", 0, 1);
                i0.ɵɵlistener("touchstart", function MapControlComponent_Template_div_touchstart_0_listener($event) { return ctx.ontouchstart($event); })("mouseenter", function MapControlComponent_Template_div_mouseenter_0_listener() { return ctx.disableMapEvents(); })("mouseleave", function MapControlComponent_Template_div_mouseleave_0_listener() { return ctx.enableMapEvents(); });
                i0.ɵɵprojection(2);
                i0.ɵɵelementEnd();
            } }, styles: [".map-control-content[_ngcontent-%COMP%]{\n  background: transparent;\n}"] });
        return MapControlComponent;
    }());
    exports.MapControlComponent = MapControlComponent;
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MapControlComponent, [{
            type: core.Component,
            args: [{
                    selector: 'map-control',
                    template: "<div #mapControl class=\"map-control-content\"\n                  (touchstart)=\"ontouchstart($event)\"\n                  (mouseenter)=\"disableMapEvents()\"\n                  (mouseleave)=\"enableMapEvents()\">\n  <ng-content></ng-content>\n</div>\n", styles: [".map-control-content{\n  background: transparent;\n}\n"],
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



    var i0 = core;
    var i1 = ngBootstrap;


    var _c0 = ["splashTemplate"];
    function OneTimeSplashComponent_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
        var _r8 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "div", 6);
        i0.ɵɵelementStart(1, "h4", 7);
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 8);
        i0.ɵɵlistener("click", function OneTimeSplashComponent_ng_template_0_div_0_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r8); var d_r3 = i0.ɵɵnextContext().dismiss; return d_r3("Cross click"); });
        i0.ɵɵelementStart(4, "span", 9);
        i0.ɵɵtext(5, "\u00D7");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r4 = i0.ɵɵnextContext(2);
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate1(" ", ctx_r4.label, "");
    } }
    function OneTimeSplashComponent_ng_template_0_label_4_Template(rf, ctx) { if (rf & 1) {
        var _r10 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "label");
        i0.ɵɵelementStart(1, "input", 10);
        i0.ɵɵlistener("ngModelChange", function OneTimeSplashComponent_ng_template_0_label_4_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r10); var ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.doNotShow = $event; })("ngModelChange", function OneTimeSplashComponent_ng_template_0_label_4_Template_input_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r10); var ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.doNotShowClicked(); });
        i0.ɵɵelementEnd();
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r5 = i0.ɵɵnextContext(2);
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
        i0.ɵɵlistener("click", function OneTimeSplashComponent_ng_template_0_Template_button_click_5_listener() { var c_r2 = ctx.close; return c_r2("Close click"); });
        i0.ɵɵtext(6, "Close");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        var ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵproperty("ngIf", ctx_r1.label);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx_r1.application);
    } }
    var _c1 = ["*"];
    var SplashCloseMode;
    (function (SplashCloseMode) {
        SplashCloseMode[SplashCloseMode["NotOpened"] = 0] = "NotOpened";
        SplashCloseMode[SplashCloseMode["Accepted"] = 1] = "Accepted";
        SplashCloseMode[SplashCloseMode["Cancelled"] = 2] = "Cancelled";
    })(SplashCloseMode = exports.SplashCloseMode || (exports.SplashCloseMode = {}));
    var OneTimeSplashComponent = /** @class */ (function () {
        function OneTimeSplashComponent(modalService) {
            this.modalService = modalService;
            this.label = 'About';
            this.hideMessage = 'Understood, I don’t need to see this again';
            this.showOnLaunch = true;
            this.closed = new core.EventEmitter();
        }
        OneTimeSplashComponent.prototype.storageKey = function () {
            if (!this.application) {
                return null;
            }
            return this.application + '-splash-skip';
        };
        OneTimeSplashComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            setTimeout(function () {
                var key = _this.storageKey();
                if (key) {
                    _this.doNotShow = store.get(key, false);
                }
                if (_this.showOnLaunch) {
                    _this.defaultShow();
                }
            });
        };
        OneTimeSplashComponent.prototype.defaultShow = function () {
            if (!this.doNotShow) {
                this.show();
            }
            else {
                this.closed.emit(SplashCloseMode.NotOpened);
            }
        };
        OneTimeSplashComponent.prototype.show = function () {
            this.current = this.modalService.open(this.splashTemplate, {
                size: 'lg',
                windowClass: this.klass
            });
        };
        OneTimeSplashComponent.prototype.close = function () {
            if (!this.current) {
                this.closed.emit(SplashCloseMode.NotOpened);
                return;
            }
            this.current.close();
            this.current = null;
            this.closed.emit(SplashCloseMode.Accepted);
        };
        OneTimeSplashComponent.prototype.doNotShowClicked = function () {
            var key = this.storageKey();
            if (!key) {
                return;
            }
            store.set(key, this.doNotShow);
        };
        OneTimeSplashComponent.ɵfac = function OneTimeSplashComponent_Factory(t) { return new (t || OneTimeSplashComponent)(i0.ɵɵdirectiveInject(i1.NgbModal)); };
        OneTimeSplashComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OneTimeSplashComponent, selectors: [["one-time-splash"]], viewQuery: function OneTimeSplashComponent_Query(rf, ctx) { if (rf & 1) {
                i0.ɵɵviewQuery(_c0, true);
            } if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.splashTemplate = _t.first);
            } }, inputs: { application: "application", label: "label", hideMessage: "hideMessage", klass: "klass", showOnLaunch: "showOnLaunch" }, outputs: { closed: "closed" }, ngContentSelectors: _c1, decls: 2, vars: 0, consts: [["splashTemplate", ""], ["class", "modal-header", 4, "ngIf"], [1, "modal-body"], [1, "modal-footer"], [4, "ngIf"], ["autofocus", "", "type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["type", "checkbox", 3, "ngModel", "ngModelChange"]], template: function OneTimeSplashComponent_Template(rf, ctx) { if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵtemplate(0, OneTimeSplashComponent_ng_template_0_Template, 7, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            } }, directives: [common.NgIf, forms.CheckboxControlValueAccessor, forms.NgControlStatus, forms.NgModel], styles: [""] });
        return OneTimeSplashComponent;
    }());
    exports.OneTimeSplashComponent = OneTimeSplashComponent;
    /*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OneTimeSplashComponent, [{
            type: core.Component,
            args: [{
                    selector: 'one-time-splash',
                    template: "<ng-template #splashTemplate let-c=\"close\" let-d=\"dismiss\">\n  <div *ngIf=\"label\" class=\"modal-header\">\n    <h4 class=\"modal-title\">\n      {{label}}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <ng-content></ng-content>\n  </div>\n  <div class=\"modal-footer\">\n    <label *ngIf=\"application\">\n      <input type=\"checkbox\" [(ngModel)]=\"doNotShow\" (ngModelChange)=\"doNotShowClicked()\">\n      &nbsp; {{hideMessage}}\n    </label>\n    <button autofocus type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n  </ng-template>\n",
                    styles: [""]
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
    var __read = (commonjsGlobal && commonjsGlobal.__read) || function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };
    var __spread = (commonjsGlobal && commonjsGlobal.__spread) || function () {
        for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
        return ar;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VectorTileLayerComponent = void 0;
    /// <reference types="./leaflet.vectorgrid" />
    /// <reference types="./leaflet.vectorgrid" />

    // import 'leaflet.vectorgrid';

    var i0 = core;
    var i1 = leaflet_service;
    var VectorTileLayerComponent = /** @class */ (function () {
        function VectorTileLayerComponent(map) {
            this.map = map;
            this.sublayers = [];
            this.featureSelected = new core.EventEmitter();
            this.destroyed = false;
        }
        VectorTileLayerComponent.prototype.ngOnInit = function () {
        };
        VectorTileLayerComponent.prototype.ngOnDestroy = function () {
            var _this = this;
            this.destroyed = true;
            this.map.map.then(function (m) {
                _this.remove(m);
            });
        };
        VectorTileLayerComponent.prototype.getFeatureId = function (f) {
            var match = this.sublayers.find(function (v) { return f.properties[v.keyField]; });
            return f.properties[match.keyField];
        };
        VectorTileLayerComponent.prototype.remove = function (m) {
            if (this.vectorLayer) {
                this.vectorLayer.removeFrom(m);
                this.vectorLayer = null;
            }
        };
        VectorTileLayerComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            this.map.map.then(function (m) {
                _this.remove(m);
                if (_this.destroyed) {
                    return;
                }
                _this.vectorLayer = L.vectorGrid.protobuf(_this.url, {
                    minZoom: 11,
                    interactive: true,
                    vectorTileLayerStyles: _this.styles,
                    maxNativeZoom: 13,
                    getFeatureId: function (f) { return _this.getFeatureId(f); }
                });
                _this.vectorLayer.on('click', function (event) {
                    if (_this.selectedFeature) {
                        _this.vectorLayer.resetFeatureStyle(_this.selectedFeature);
                    }
                    _this.selectedFeature = _this.getFeatureId(event.layer);
                    _this.vectorLayer.setFeatureStyle(_this.selectedFeature, {
                        weight: 5
                    });
                    var geoJSON = _this.vectorGridFeatureToGeoJSON(event.layer);
                    _this.featureSelected.emit(geoJSON);
                });
                _this.vectorLayer.addTo(m);
            });
        };
        VectorTileLayerComponent.prototype.vectorGridFeatureToGeoJSON = function (lyr) {
            var parts = (lyr._parts[0] && lyr._parts[0][0]) ? lyr._parts : [lyr._parts];
            var points = parts.map(function (part) {
                return part.map(function (pt) { return [pt.x, pt.y]; });
            });
            var minx = Math.min.apply(Math, __spread(points[0].map(function (pt) { return pt[0]; })));
            var maxx = Math.max.apply(Math, __spread(points[0].map(function (pt) { return pt[0]; })));
            var miny = Math.min.apply(Math, __spread(points[0].map(function (pt) { return pt[1]; })));
            var maxy = Math.max.apply(Math, __spread(points[0].map(function (pt) { return pt[1]; })));
            function converter(from, to) {
                var fromDelta = from[1] - from[0];
                var toDelta = to[1] - to[0];
                return function (c) { return to[0] + ((c - from[0]) / fromDelta) * toDelta; };
            }
            var xConverter = converter([minx, maxx], [lyr.properties.minx, lyr.properties.maxx]);
            var yConverter = converter([miny, maxy], [lyr.properties.maxy, lyr.properties.miny]);
            return {
                type: 'Feature',
                geometry: {
                    type: 'Polygon',
                    coordinates: points.map(function (part) { return part.map(function (pt) { return [xConverter(pt[0]), yConverter(pt[1])]; }); })
                },
                properties: lyr.properties
            };
        };
        VectorTileLayerComponent.ɵfac = function VectorTileLayerComponent_Factory(t) { return new (t || VectorTileLayerComponent)(i0.ɵɵdirectiveInject(i1.LeafletService)); };
        VectorTileLayerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: VectorTileLayerComponent, selectors: [["vector-tile-layer"]], inputs: { url: "url", styles: "styles", sublayers: "sublayers" }, outputs: { featureSelected: "featureSelected" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function VectorTileLayerComponent_Template(rf, ctx) { }, encapsulation: 2 });
        return VectorTileLayerComponent;
    }());
    exports.VectorTileLayerComponent = VectorTileLayerComponent;
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



    var i0 = core;
    var i1 = leaflet_service;
    var DEFAULT_WMS_PARAMS = {
        format: 'image/png',
        transparent: true
    };
    var WmsLayerComponent = /** @class */ (function () {
        function WmsLayerComponent(map) {
            this.map = map;
            this.params = {};
        }
        WmsLayerComponent.prototype.ngOnInit = function () {
        };
        WmsLayerComponent.prototype.ngOnChanges = function (changes) {
            var _this = this;
            this.map.map.then(function (m) {
                if (_this.layer) {
                    _this.layer.removeFrom(m);
                    _this.layer = null;
                }
                if (!_this.url || !_this.params) {
                    return;
                }
                var params = Object.assign({}, DEFAULT_WMS_PARAMS, _this.params);
                _this.layer = leaflet.tileLayer.wms(_this.url, params);
                _this.layer.addTo(m);
            });
        };
        WmsLayerComponent.ɵfac = function WmsLayerComponent_Factory(t) { return new (t || WmsLayerComponent)(i0.ɵɵdirectiveInject(i1.LeafletService)); };
        WmsLayerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: WmsLayerComponent, selectors: [["wms-layer"]], inputs: { url: "url", params: "params" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function WmsLayerComponent_Template(rf, ctx) { }, encapsulation: 2 });
        return WmsLayerComponent;
    }());
    exports.WmsLayerComponent = WmsLayerComponent;
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

    var esm5 = createCommonjsModule(function (module, exports) {
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















    var i0 = core;
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
    var components = [
        //$componentList
        draw_component.DrawComponent,
        geojsonLayer_component.GeojsonLayerComponent,
        leafletMap_component.LeafletMapComponent,
        legend_component.LegendComponent,
        mapControl_component.MapControlComponent,
        oneTimeSplash_component.OneTimeSplashComponent,
        vectorTileLayer_component.VectorTileLayerComponent,
        wmsLayer_component.WmsLayerComponent
    ];
    var services = [
        //$serviceList
        leaflet_service.LeafletService
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
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MapWaldLeafletModule, { declarations: [
            //$componentList
            draw_component.DrawComponent,
            geojsonLayer_component.GeojsonLayerComponent,
            leafletMap_component.LeafletMapComponent,
            legend_component.LegendComponent,
            mapControl_component.MapControlComponent,
            oneTimeSplash_component.OneTimeSplashComponent,
            vectorTileLayer_component.VectorTileLayerComponent,
            wmsLayer_component.WmsLayerComponent], imports: [common.CommonModule,
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
            wmsLayer_component.WmsLayerComponent] }); })();
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

    var index$1 = unwrapExports(esm5);
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
