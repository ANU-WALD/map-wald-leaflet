"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeojsonLayerComponent = exports.PointMode = void 0;
var core_1 = require("@angular/core");
var L = require("leaflet");
require("leaflet.vectorgrid");
var leaflet_service_1 = require("./leaflet.service");
var http_1 = require("@angular/common/http");
var i0 = require("@angular/core");
var i1 = require("@angular/common/http");
var i2 = require("./leaflet.service");
var STYLES = {
    fillOpacity: 0.0,
    weight: 1.0
};
var PointMode;
(function (PointMode) {
    PointMode[PointMode["default"] = 0] = "default";
    PointMode[PointMode["circle"] = 1] = "circle";
})(PointMode = exports.PointMode || (exports.PointMode = {}));
var GeojsonLayerComponent = /** @class */ (function () {
    // private data: any;
    function GeojsonLayerComponent(http, map) {
        this.http = http;
        this.map = map;
        // @Input() styles: any;
        this.sublayers = [];
        this.pointMode = PointMode.default;
        this.style = {};
        // @Input() idColumn = 'id';
        this.featureSelected = new core_1.EventEmitter();
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
        if (changes.url) {
            this.downloadLayer(changes.url.currentValue);
        }
        else if (changes.features || changes.pointMode) {
            this.makeLayer();
        }
    };
    GeojsonLayerComponent.prototype.downloadLayer = function (url) {
        var _this = this;
        this.http.get(this.url).subscribe(function (data) {
            if (url !== _this.url) {
                // out of date!
                return;
            }
            _this.features = data;
            _this.makeLayer();
        });
    };
    GeojsonLayerComponent.prototype.makeLayer = function () {
        var _this = this;
        this.map.map.then(function (m) {
            _this.remove(m);
            if (_this.destroyed) {
                return;
            }
            var style = function (f) {
                var styles = Object.assign({}, STYLES);
                Object.keys(_this.style).forEach(function (k) {
                    var val = _this.style[k];
                    if (val.getStyleValue) {
                        styles[k] = val.getStyleValue(f);
                    }
                    else {
                        styles[k] = val;
                    }
                });
                return styles;
            };
            var options = {
                // interactive: true
                style: style
            };
            if (_this.pointMode === PointMode.circle) {
                options.pointToLayer = function (feature, latlng) {
                    var radius = 3;
                    if (_this.style && _this.style.radius) {
                        if (_this.style.radius.getStyleValue) {
                            radius = _this.style.radius.getStyleValue(feature);
                        }
                        else {
                            radius = _this.style.radius;
                        }
                    }
                    return L.circleMarker(latlng, { radius: radius });
                };
            }
            _this.vectorLayer = L.geoJSON(_this.features, options);
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
    };
    GeojsonLayerComponent.ɵfac = function GeojsonLayerComponent_Factory(t) { return new (t || GeojsonLayerComponent)(i0.ɵɵdirectiveInject(i1.HttpClient), i0.ɵɵdirectiveInject(i2.LeafletService)); };
    GeojsonLayerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GeojsonLayerComponent, selectors: [["geojson-layer"]], inputs: { url: "url", features: "features", sublayers: "sublayers", pointMode: "pointMode", style: "style" }, outputs: { featureSelected: "featureSelected" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function GeojsonLayerComponent_Template(rf, ctx) { }, styles: [""] });
    return GeojsonLayerComponent;
}());
exports.GeojsonLayerComponent = GeojsonLayerComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GeojsonLayerComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'geojson-layer',
                template: '',
                styles: ['']
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.LeafletService }]; }, { url: [{
            type: core_1.Input
        }], features: [{
            type: core_1.Input
        }], sublayers: [{
            type: core_1.Input
        }], pointMode: [{
            type: core_1.Input
        }], style: [{
            type: core_1.Input
        }], featureSelected: [{
            type: core_1.Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvanNvbi1sYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC1sZWFmbGV0LyIsInNvdXJjZXMiOlsiZ2VvanNvbi1sYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQW9IO0FBQ3BILDJCQUE2QjtBQUM3Qiw4QkFBNEI7QUFDNUIscURBQW1EO0FBRW5ELDZDQUFrRDs7OztBQUlsRCxJQUFNLE1BQU0sR0FBRztJQUNiLFdBQVcsRUFBRSxHQUFHO0lBQ2hCLE1BQU0sRUFBRSxHQUFHO0NBQ1osQ0FBQztBQUVGLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQiwrQ0FBTyxDQUFBO0lBQ1AsNkNBQU0sQ0FBQTtBQUNSLENBQUMsRUFIVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUdwQjtBQUVEO0lBa0JFLHFCQUFxQjtJQUVyQiwrQkFBb0IsSUFBZ0IsRUFBVSxHQUFtQjtRQUE3QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBZ0I7UUFaakUsd0JBQXdCO1FBQ2YsY0FBUyxHQUE4QixFQUFFLENBQUM7UUFDMUMsY0FBUyxHQUFhLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDeEMsVUFBSyxHQUE4QixFQUFFLENBQUM7UUFDL0MsNEJBQTRCO1FBQ2xCLG9CQUFlLEdBQUcsSUFBSSxtQkFBWSxFQUFPLENBQUM7UUFFNUMsY0FBUyxHQUFHLEtBQUssQ0FBQztJQU0xQixDQUFDO0lBRUQsd0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCwyQ0FBVyxHQUFYO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIEwgZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgJ2xlYWZsZXQudmVjdG9yZ3JpZCc7XG5pbXBvcnQgeyBMZWFmbGV0U2VydmljZSB9IGZyb20gJy4vbGVhZmxldC5zZXJ2aWNlJztcbmltcG9ydCB7IFRpbGVkU3VibGF5ZXJEZXNjcmlwdG9yIH0gZnJvbSAnLi9kYXRhJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBTY2FsZWRTdHlsZSwgU3R5bGVWYWx1ZSB9IGZyb20gJ21hcC13YWxkJztcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICdnZW9qc29uJztcblxuY29uc3QgU1RZTEVTID0ge1xuICBmaWxsT3BhY2l0eTogMC4wLFxuICB3ZWlnaHQ6IDEuMFxufTtcblxuZXhwb3J0IGVudW0gUG9pbnRNb2RlIHtcbiAgZGVmYXVsdCxcbiAgY2lyY2xlXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dlb2pzb24tbGF5ZXInLFxuICB0ZW1wbGF0ZTogJycsXG4gIHN0eWxlczogWycnXVxufSlcbmV4cG9ydCBjbGFzcyBHZW9qc29uTGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZlYXR1cmVzOiBhbnk7XG4gIC8vIEBJbnB1dCgpIHN0eWxlczogYW55O1xuICBASW5wdXQoKSBzdWJsYXllcnM6IFRpbGVkU3VibGF5ZXJEZXNjcmlwdG9yW10gPSBbXTtcbiAgQElucHV0KCkgcG9pbnRNb2RlOlBvaW50TW9kZSA9IFBvaW50TW9kZS5kZWZhdWx0O1xuICBASW5wdXQoKSBzdHlsZToge1trZXk6c3RyaW5nXTpTdHlsZVZhbHVlfSA9IHt9O1xuICAvLyBASW5wdXQoKSBpZENvbHVtbiA9ICdpZCc7XG4gIEBPdXRwdXQoKSBmZWF0dXJlU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwcml2YXRlIGRlc3Ryb3llZCA9IGZhbHNlO1xuICBwcml2YXRlIHNlbGVjdGVkRmVhdHVyZTogYW55O1xuICBwcml2YXRlIHZlY3RvckxheWVyOiBMLkdlb0pTT047XG4gIC8vIHByaXZhdGUgZGF0YTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBtYXA6IExlYWZsZXRTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICB0aGlzLm1hcC5tYXAudGhlbihtID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKG0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmUobTogTC5NYXApOiB2b2lkIHtcbiAgICBpZiAodGhpcy52ZWN0b3JMYXllcikge1xuICAgICAgdGhpcy52ZWN0b3JMYXllci5yZW1vdmVGcm9tKG0pO1xuICAgICAgdGhpcy52ZWN0b3JMYXllciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLnVybCkge1xuICAgICAgdGhpcy5kb3dubG9hZExheWVyKGNoYW5nZXMudXJsLmN1cnJlbnRWYWx1ZSk7XG4gICAgfSBlbHNlIGlmKGNoYW5nZXMuZmVhdHVyZXN8fGNoYW5nZXMucG9pbnRNb2RlKXtcbiAgICAgIHRoaXMubWFrZUxheWVyKCk7XG4gICAgfVxuICB9XG5cbiAgZG93bmxvYWRMYXllcih1cmw6c3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5odHRwLmdldCh0aGlzLnVybCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgIGlmICh1cmwgIT09IHRoaXMudXJsKSB7XG4gICAgICAgIC8vIG91dCBvZiBkYXRlIVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmZlYXR1cmVzID0gZGF0YTtcblxuICAgICAgdGhpcy5tYWtlTGF5ZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1ha2VMYXllcigpOiB2b2lkIHtcbiAgICB0aGlzLm1hcC5tYXAudGhlbihtID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKG0pO1xuICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3R5bGUgPSAoZjogYW55KT0+e1xuICAgICAgICBjb25zdCBzdHlsZXM6IHtba2V5OnN0cmluZ106YW55fSA9IE9iamVjdC5hc3NpZ24oe30sU1RZTEVTKTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5zdHlsZSkuZm9yRWFjaChrPT57XG4gICAgICAgICAgY29uc3QgdmFsID0gdGhpcy5zdHlsZVtrXTtcbiAgICAgICAgICBpZigodmFsIGFzIFNjYWxlZFN0eWxlPGFueT4pLmdldFN0eWxlVmFsdWUpIHtcbiAgICAgICAgICAgIHN0eWxlc1trXSA9ICh2YWwgYXMgU2NhbGVkU3R5bGU8YW55PikuZ2V0U3R5bGVWYWx1ZShmKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzW2tdID0gdmFsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBvcHRpb25zOkwuR2VvSlNPTk9wdGlvbnMgPSB7XG4gICAgICAgIC8vIGludGVyYWN0aXZlOiB0cnVlXG4gICAgICAgIHN0eWxlOiBzdHlsZVxuICAgICAgfTtcblxuICAgICAgaWYodGhpcy5wb2ludE1vZGU9PT1Qb2ludE1vZGUuY2lyY2xlKXtcbiAgICAgICAgb3B0aW9ucy5wb2ludFRvTGF5ZXIgPSAoZmVhdHVyZSwgbGF0bG5nKSA9PiB7XG4gICAgICAgICAgbGV0IHJhZGl1cyA9IDM7XG4gICAgICAgICAgaWYodGhpcy5zdHlsZSAmJiB0aGlzLnN0eWxlLnJhZGl1cykge1xuICAgICAgICAgICAgaWYoKHRoaXMuc3R5bGUucmFkaXVzIGFzIFNjYWxlZFN0eWxlPG51bWJlcj4pLmdldFN0eWxlVmFsdWUpe1xuICAgICAgICAgICAgICByYWRpdXMgPSAodGhpcy5zdHlsZS5yYWRpdXMgYXMgU2NhbGVkU3R5bGU8bnVtYmVyPikuZ2V0U3R5bGVWYWx1ZShmZWF0dXJlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJhZGl1cyA9IHRoaXMuc3R5bGUucmFkaXVzIGFzIG51bWJlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIEwuY2lyY2xlTWFya2VyKGxhdGxuZyx7cmFkaXVzOnJhZGl1c30pO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB0aGlzLnZlY3RvckxheWVyID0gTC5nZW9KU09OKHRoaXMuZmVhdHVyZXMsIG9wdGlvbnMpO1xuXG4gICAgICB0aGlzLnZlY3RvckxheWVyLm9uKCdjbGljaycgYXMgYW55LCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRGZWF0dXJlKSB7XG4gICAgICAgICAgdGhpcy52ZWN0b3JMYXllci5yZXNldFN0eWxlKHRoaXMuc2VsZWN0ZWRGZWF0dXJlKTtcbiAgICAgICAgICAvLyByZXNldEZlYXR1cmVTdHlsZSh0aGlzLnNlbGVjdGVkRmVhdHVyZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3RlZEZlYXR1cmUgPSBldmVudC5sYXllcjtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEZlYXR1cmUuc2V0U3R5bGUoe1xuICAgICAgICAgIHdlaWdodDo1XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZmVhdHVyZVNlbGVjdGVkLmVtaXQodGhpcy5zZWxlY3RlZEZlYXR1cmUuZmVhdHVyZSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMudmVjdG9yTGF5ZXIuYWRkVG8obSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==