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
        this.zIndex = 100;
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
            var pane = "vector-pane-" + _this.zIndex;
            leaflet_service_1.ensurePane(m, pane, _this.zIndex);
            options.pane = pane;
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
    GeojsonLayerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GeojsonLayerComponent, selectors: [["geojson-layer"]], inputs: { url: "url", features: "features", sublayers: "sublayers", pointMode: "pointMode", style: "style", zIndex: "zIndex" }, outputs: { featureSelected: "featureSelected" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function GeojsonLayerComponent_Template(rf, ctx) { }, styles: [""] });
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
        }], zIndex: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvanNvbi1sYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC1sZWFmbGV0LyIsInNvdXJjZXMiOlsiZ2VvanNvbi1sYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQW9IO0FBQ3BILDJCQUE2QjtBQUM3Qiw4QkFBNEI7QUFDNUIscURBQStEO0FBRS9ELDZDQUFrRDs7OztBQUlsRCxJQUFNLE1BQU0sR0FBRztJQUNiLFdBQVcsRUFBRSxHQUFHO0lBQ2hCLE1BQU0sRUFBRSxHQUFHO0NBQ1osQ0FBQztBQUVGLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQiwrQ0FBTyxDQUFBO0lBQ1AsNkNBQU0sQ0FBQTtBQUNSLENBQUMsRUFIVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUdwQjtBQUVEO0lBbUJFLHFCQUFxQjtJQUVyQiwrQkFBb0IsSUFBZ0IsRUFBVSxHQUFtQjtRQUE3QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBZ0I7UUFiakUsd0JBQXdCO1FBQ2YsY0FBUyxHQUE4QixFQUFFLENBQUM7UUFDMUMsY0FBUyxHQUFhLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDeEMsVUFBSyxHQUE4QixFQUFFLENBQUM7UUFDL0MsNEJBQTRCO1FBQ2xCLG9CQUFlLEdBQUcsSUFBSSxtQkFBWSxFQUFPLENBQUM7UUFDM0MsV0FBTSxHQUFHLEdBQUcsQ0FBQztRQUVkLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFNMUIsQ0FBQztJQUVELHdDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsMkNBQVcsR0FBWDtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztZQUNqQixLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxD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QUFFO2dCQUNaLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNiOzBGQUVVLEdBQUc7a0JBQVgsWUFBSztZQUNHLFFBQVE7a0JBQWhCLFlBQUs7WUFFRyxTQUFTO2tCQUFqQixZQUFLO1lBQ0csU0FBUztrQkFBakIsWUFBSztZQUNHLEtBQUs7a0JBQWIsWUFBSztZQUVJLGVBQWU7a0JBQXhCLGFBQU07WUFDRSxNQUFNO2tCQUFkLFlBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgTCBmcm9tICdsZWFmbGV0JztcbmltcG9ydCAnbGVhZmxldC52ZWN0b3JncmlkJztcbmltcG9ydCB7IExlYWZsZXRTZXJ2aWNlLCBlbnN1cmVQYW5lIH0gZnJvbSAnLi9sZWFmbGV0LnNlcnZpY2UnO1xuaW1wb3J0IHsgVGlsZWRTdWJsYXllckRlc2NyaXB0b3IgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFNjYWxlZFN0eWxlLCBTdHlsZVZhbHVlIH0gZnJvbSAnbWFwLXdhbGQnO1xuaW1wb3J0IHsgRmVhdHVyZSB9IGZyb20gJ2dlb2pzb24nO1xuXG5jb25zdCBTVFlMRVMgPSB7XG4gIGZpbGxPcGFjaXR5OiAwLjAsXG4gIHdlaWdodDogMS4wXG59O1xuXG5leHBvcnQgZW51bSBQb2ludE1vZGUge1xuICBkZWZhdWx0LFxuICBjaXJjbGVcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2VvanNvbi1sYXllcicsXG4gIHRlbXBsYXRlOiAnJyxcbiAgc3R5bGVzOiBbJyddXG59KVxuZXhwb3J0IGNsYXNzIEdlb2pzb25MYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSB1cmw6IHN0cmluZztcbiAgQElucHV0KCkgZmVhdHVyZXM6IGFueTtcbiAgLy8gQElucHV0KCkgc3R5bGVzOiBhbnk7XG4gIEBJbnB1dCgpIHN1YmxheWVyczogVGlsZWRTdWJsYXllckRlc2NyaXB0b3JbXSA9IFtdO1xuICBASW5wdXQoKSBwb2ludE1vZGU6UG9pbnRNb2RlID0gUG9pbnRNb2RlLmRlZmF1bHQ7XG4gIEBJbnB1dCgpIHN0eWxlOiB7W2tleTpzdHJpbmddOlN0eWxlVmFsdWV9ID0ge307XG4gIC8vIEBJbnB1dCgpIGlkQ29sdW1uID0gJ2lkJztcbiAgQE91dHB1dCgpIGZlYXR1cmVTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBASW5wdXQoKSB6SW5kZXggPSAxMDA7XG5cbiAgcHJpdmF0ZSBkZXN0cm95ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzZWxlY3RlZEZlYXR1cmU6IGFueTtcbiAgcHJpdmF0ZSB2ZWN0b3JMYXllcjogTC5HZW9KU09OO1xuICAvLyBwcml2YXRlIGRhdGE6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgbWFwOiBMZWFmbGV0U2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgdGhpcy5tYXAubWFwLnRoZW4obSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZShtKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlKG06IEwuTWFwKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmVjdG9yTGF5ZXIpIHtcbiAgICAgIHRoaXMudmVjdG9yTGF5ZXIucmVtb3ZlRnJvbShtKTtcbiAgICAgIHRoaXMudmVjdG9yTGF5ZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy51cmwpIHtcbiAgICAgIHRoaXMuZG93bmxvYWRMYXllcihjaGFuZ2VzLnVybC5jdXJyZW50VmFsdWUpO1xuICAgIH0gZWxzZSBpZihjaGFuZ2VzLmZlYXR1cmVzfHxjaGFuZ2VzLnBvaW50TW9kZSl7XG4gICAgICB0aGlzLm1ha2VMYXllcigpO1xuICAgIH1cbiAgfVxuXG4gIGRvd25sb2FkTGF5ZXIodXJsOnN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuaHR0cC5nZXQodGhpcy51cmwpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICBpZiAodXJsICE9PSB0aGlzLnVybCkge1xuICAgICAgICAvLyBvdXQgb2YgZGF0ZSFcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5mZWF0dXJlcyA9IGRhdGE7XG5cbiAgICAgIHRoaXMubWFrZUxheWVyKCk7XG4gICAgfSk7XG4gIH1cblxuICBtYWtlTGF5ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5tYXAubWFwLnRoZW4obSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZShtKTtcbiAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN0eWxlID0gKGY6IGFueSk9PntcbiAgICAgICAgY29uc3Qgc3R5bGVzOiB7W2tleTpzdHJpbmddOmFueX0gPSBPYmplY3QuYXNzaWduKHt9LFNUWUxFUyk7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3R5bGUpLmZvckVhY2goaz0+e1xuICAgICAgICAgIGNvbnN0IHZhbCA9IHRoaXMuc3R5bGVba107XG4gICAgICAgICAgaWYoKHZhbCBhcyBTY2FsZWRTdHlsZTxhbnk+KS5nZXRTdHlsZVZhbHVlKSB7XG4gICAgICAgICAgICBzdHlsZXNba10gPSAodmFsIGFzIFNjYWxlZFN0eWxlPGFueT4pLmdldFN0eWxlVmFsdWUoZik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc1trXSA9IHZhbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3R5bGVzO1xuICAgICAgfTtcblxuICAgICAgY29uc3Qgb3B0aW9uczpMLkdlb0pTT05PcHRpb25zID0ge1xuICAgICAgICAvLyBpbnRlcmFjdGl2ZTogdHJ1ZVxuICAgICAgICBzdHlsZTogc3R5bGVcbiAgICAgIH07XG5cbiAgICAgIGlmKHRoaXMucG9pbnRNb2RlPT09UG9pbnRNb2RlLmNpcmNsZSl7XG4gICAgICAgIG9wdGlvbnMucG9pbnRUb0xheWVyID0gKGZlYXR1cmUsIGxhdGxuZykgPT4ge1xuICAgICAgICAgIGxldCByYWRpdXMgPSAzO1xuICAgICAgICAgIGlmKHRoaXMuc3R5bGUgJiYgdGhpcy5zdHlsZS5yYWRpdXMpIHtcbiAgICAgICAgICAgIGlmKCh0aGlzLnN0eWxlLnJhZGl1cyBhcyBTY2FsZWRTdHlsZTxudW1iZXI+KS5nZXRTdHlsZVZhbHVlKXtcbiAgICAgICAgICAgICAgcmFkaXVzID0gKHRoaXMuc3R5bGUucmFkaXVzIGFzIFNjYWxlZFN0eWxlPG51bWJlcj4pLmdldFN0eWxlVmFsdWUoZmVhdHVyZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByYWRpdXMgPSB0aGlzLnN0eWxlLnJhZGl1cyBhcyBudW1iZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBMLmNpcmNsZU1hcmtlcihsYXRsbmcse3JhZGl1czpyYWRpdXN9KTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFuZSA9IGB2ZWN0b3ItcGFuZS0ke3RoaXMuekluZGV4fWA7XG4gICAgICBlbnN1cmVQYW5lKG0scGFuZSx0aGlzLnpJbmRleClcbiAgICAgIG9wdGlvbnMucGFuZSA9IHBhbmU7XG4gICAgICB0aGlzLnZlY3RvckxheWVyID0gTC5nZW9KU09OKHRoaXMuZmVhdHVyZXMsIG9wdGlvbnMpO1xuXG4gICAgICB0aGlzLnZlY3RvckxheWVyLm9uKCdjbGljaycgYXMgYW55LCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRGZWF0dXJlKSB7XG4gICAgICAgICAgdGhpcy52ZWN0b3JMYXllci5yZXNldFN0eWxlKHRoaXMuc2VsZWN0ZWRGZWF0dXJlKTtcbiAgICAgICAgICAvLyByZXNldEZlYXR1cmVTdHlsZSh0aGlzLnNlbGVjdGVkRmVhdHVyZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3RlZEZlYXR1cmUgPSBldmVudC5sYXllcjtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEZlYXR1cmUuc2V0U3R5bGUoe1xuICAgICAgICAgIHdlaWdodDo1XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZmVhdHVyZVNlbGVjdGVkLmVtaXQodGhpcy5zZWxlY3RlZEZlYXR1cmUuZmVhdHVyZSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMudmVjdG9yTGF5ZXIuYWRkVG8obSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==