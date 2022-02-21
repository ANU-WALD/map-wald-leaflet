"use strict";
var __read = (this && this.__read) || function (o, n) {
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
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VectorTileLayerComponent = void 0;
/// <reference types="./leaflet.vectorgrid" />
/// <reference types="./leaflet.vectorgrid" />
var core_1 = require("@angular/core");
// import 'leaflet.vectorgrid';
var leaflet_service_1 = require("./leaflet.service");
var i0 = require("@angular/core");
var i1 = require("./leaflet.service");
var VectorTileLayerComponent = /** @class */ (function () {
    function VectorTileLayerComponent(map) {
        this.map = map;
        this.sublayers = [];
        this.featureSelected = new core_1.EventEmitter();
        this.minZoom = 0;
        this.maxZoom = 30;
        this.minNativeZoom = 11;
        this.maxNativeZoom = 13;
        this.zIndex = 100;
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
            var pane = "vector-pane-" + _this.zIndex;
            leaflet_service_1.ensurePane(m, pane, _this.zIndex);
            _this.vectorLayer = L.vectorGrid.protobuf(_this.url, {
                pane: pane,
                minZoom: _this.minZoom,
                maxZoom: _this.maxZoom,
                minNativeZoom: _this.minNativeZoom,
                maxNativeZoom: _this.maxNativeZoom,
                interactive: true,
                vectorTileLayerStyles: _this.styles,
                getFeatureId: function (f) { return _this.getFeatureId(f); }
            });
            if (_this.featureSelected.observers.length) {
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
            }
            _this.vectorLayer.addTo(m);
        });
    };
    VectorTileLayerComponent.prototype.vectorGridFeatureToGeoJSON = function (lyr) {
        var _a, _b;
        var parts = (lyr._parts[0] && lyr._parts[0][0]) ? lyr._parts : [lyr._parts];
        var points = parts.map(function (part) {
            return part.map(function (pt) { return [pt.x, pt.y]; });
        });
        var originalXs = (_a = []).concat.apply(_a, __spread(points.map(function (part) { return part.map(function (pt) { return pt[0]; }); })));
        var minx = Math.min.apply(Math, __spread(originalXs)); //points[0].map(pt=>pt[0]));
        var maxx = Math.max.apply(Math, __spread(originalXs)); //points[0].map(pt=>pt[0]));
        var originalYs = (_b = []).concat.apply(_b, __spread(points.map(function (part) { return part.map(function (pt) { return pt[1]; }); })));
        var miny = Math.min.apply(Math, __spread(originalYs)); //points[0].map(pt=>pt[1]));
        var maxy = Math.max.apply(Math, __spread(originalYs)); //points[0].map(pt=>pt[1]));
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
    VectorTileLayerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: VectorTileLayerComponent, selectors: [["vector-tile-layer"]], inputs: { url: "url", styles: "styles", sublayers: "sublayers", minZoom: "minZoom", maxZoom: "maxZoom", minNativeZoom: "minNativeZoom", maxNativeZoom: "maxNativeZoom", zIndex: "zIndex" }, outputs: { featureSelected: "featureSelected" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function VectorTileLayerComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return VectorTileLayerComponent;
}());
exports.VectorTileLayerComponent = VectorTileLayerComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(VectorTileLayerComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'vector-tile-layer',
                template: '',
                styles: []
            }]
    }], function () { return [{ type: i1.LeafletService }]; }, { url: [{
            type: core_1.Input
        }], styles: [{
            type: core_1.Input
        }], sublayers: [{
            type: core_1.Input
        }], featureSelected: [{
            type: core_1.Output
        }], minZoom: [{
            type: core_1.Input
        }], maxZoom: [{
            type: core_1.Input
        }], minNativeZoom: [{
            type: core_1.Input
        }], maxNativeZoom: [{
            type: core_1.Input
        }], zIndex: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9yLXRpbGUtbGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtbGVhZmxldC8iLCJzb3VyY2VzIjpbInZlY3Rvci10aWxlLWxheWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUE4QztBQUE5Qyw4Q0FBOEM7QUFFOUMsc0NBQW9IO0FBRXBILCtCQUErQjtBQUMvQixxREFBK0Q7OztBQUcvRDtJQW9CRSxrQ0FBb0IsR0FBbUI7UUFBbkIsUUFBRyxHQUFILEdBQUcsQ0FBZ0I7UUFaOUIsY0FBUyxHQUE4QixFQUFFLENBQUM7UUFDekMsb0JBQWUsR0FBRyxJQUFJLG1CQUFZLEVBQU8sQ0FBQztRQUMzQyxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFFZCxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBSWlCLENBQUM7SUFFNUMsMkNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCw4Q0FBVyxHQUFYO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sK0NBQVksR0FBcEIsVUFBcUIsQ0FBSztRQUN4QixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBRSxPQUFBLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUF4QixDQUF3QixD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LEFBbkhELElBbUhDO0FBOUdZLDREQUF3QjtrREFBeEIsd0JBQXdCO2NBTHBDLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osTUFBTSxFQUFFLEVBQUU7YUFDWDtpRUFFVSxHQUFHO2tCQUFYLFlBQUs7WUFDRyxNQUFNO2tCQUFkLFlBQUs7WUFDRyxTQUFTO2tCQUFqQixZQUFLO1lBQ0ksZUFBZTtrQkFBeEIsYUFBTTtZQUNFLE9BQU87a0JBQWYsWUFBSztZQUNHLE9BQU87a0JBQWYsWUFBSztZQUNHLGFBQWE7a0JBQXJCLFlBQUs7WUFDRyxhQUFhO2tCQUFyQixZQUFLO1lBQ0csTUFBTTtrQkFBZCxZQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCIuL2xlYWZsZXQudmVjdG9yZ3JpZFwiIC8+XG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBsZWFmbGV0IGZyb20gJ2xlYWZsZXQnO1xuLy8gaW1wb3J0ICdsZWFmbGV0LnZlY3RvcmdyaWQnO1xuaW1wb3J0IHsgZW5zdXJlUGFuZSwgTGVhZmxldFNlcnZpY2UgfSBmcm9tICcuL2xlYWZsZXQuc2VydmljZSc7XG5pbXBvcnQgeyBUaWxlZFN1YmxheWVyRGVzY3JpcHRvciB9IGZyb20gJy4vZGF0YSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ZlY3Rvci10aWxlLWxheWVyJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFZlY3RvclRpbGVMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSB1cmw6IHN0cmluZztcbiAgQElucHV0KCkgc3R5bGVzOiBhbnk7XG4gIEBJbnB1dCgpIHN1YmxheWVyczogVGlsZWRTdWJsYXllckRlc2NyaXB0b3JbXSA9IFtdO1xuICBAT3V0cHV0KCkgZmVhdHVyZVNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBJbnB1dCgpIG1pblpvb20gPSAwO1xuICBASW5wdXQoKSBtYXhab29tID0gMzA7XG4gIEBJbnB1dCgpIG1pbk5hdGl2ZVpvb20gPSAxMTtcbiAgQElucHV0KCkgbWF4TmF0aXZlWm9vbSA9IDEzO1xuICBASW5wdXQoKSB6SW5kZXggPSAxMDA7XG5cbiAgcHJpdmF0ZSBkZXN0cm95ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzZWxlY3RlZEZlYXR1cmU6IGFueTtcbiAgcHJpdmF0ZSB2ZWN0b3JMYXllcjogTC5WZWN0b3JHcmlkTGF5ZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IExlYWZsZXRTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICB0aGlzLm1hcC5tYXAudGhlbihtPT57XG4gICAgICB0aGlzLnJlbW92ZShtKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RmVhdHVyZUlkKGY6YW55KTogc3RyaW5nIHtcbiAgICBjb25zdCBtYXRjaCA9IHRoaXMuc3VibGF5ZXJzLmZpbmQodj0+Zi5wcm9wZXJ0aWVzW3Yua2V5RmllbGRdKTtcbiAgICByZXR1cm4gZi5wcm9wZXJ0aWVzW21hdGNoLmtleUZpZWxkXTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlKG06IEwuTWFwKTogdm9pZCB7XG4gICAgaWYodGhpcy52ZWN0b3JMYXllcil7XG4gICAgICB0aGlzLnZlY3RvckxheWVyLnJlbW92ZUZyb20obSk7XG4gICAgICB0aGlzLnZlY3RvckxheWVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5tYXAubWFwLnRoZW4obT0+e1xuICAgICAgdGhpcy5yZW1vdmUobSk7XG4gICAgICBpZih0aGlzLmRlc3Ryb3llZCl7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFuZSA9IGB2ZWN0b3ItcGFuZS0ke3RoaXMuekluZGV4fWA7XG4gICAgICBlbnN1cmVQYW5lKG0scGFuZSx0aGlzLnpJbmRleClcblxuICAgICAgdGhpcy52ZWN0b3JMYXllciA9IEwudmVjdG9yR3JpZC5wcm90b2J1Zih0aGlzLnVybCx7XG4gICAgICAgIHBhbmUsXG4gICAgICAgIG1pblpvb206dGhpcy5taW5ab29tLFxuICAgICAgICBtYXhab29tOnRoaXMubWF4Wm9vbSxcbiAgICAgICAgbWluTmF0aXZlWm9vbTp0aGlzLm1pbk5hdGl2ZVpvb20sXG4gICAgICAgIG1heE5hdGl2ZVpvb206dGhpcy5tYXhOYXRpdmVab29tLFxuICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgdmVjdG9yVGlsZUxheWVyU3R5bGVzOiB0aGlzLnN0eWxlcyxcbiAgICAgICAgZ2V0RmVhdHVyZUlkOiAoZjphbnkpID0+IHRoaXMuZ2V0RmVhdHVyZUlkKGYpXG4gICAgICB9KTtcblxuICAgICAgaWYodGhpcy5mZWF0dXJlU2VsZWN0ZWQub2JzZXJ2ZXJzLmxlbmd0aCl7XG4gICAgICAgIHRoaXMudmVjdG9yTGF5ZXIub24oJ2NsaWNrJyBhcyBhbnksKGV2ZW50KT0+e1xuICAgICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRGZWF0dXJlKXtcbiAgICAgICAgICAgIHRoaXMudmVjdG9yTGF5ZXIucmVzZXRGZWF0dXJlU3R5bGUodGhpcy5zZWxlY3RlZEZlYXR1cmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnNlbGVjdGVkRmVhdHVyZSA9IHRoaXMuZ2V0RmVhdHVyZUlkKGV2ZW50LmxheWVyKTtcbiAgICAgICAgICB0aGlzLnZlY3RvckxheWVyLnNldEZlYXR1cmVTdHlsZSh0aGlzLnNlbGVjdGVkRmVhdHVyZSwge1xuICAgICAgICAgICAgd2VpZ2h0OjVcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNvbnN0IGdlb0pTT04gPSB0aGlzLnZlY3RvckdyaWRGZWF0dXJlVG9HZW9KU09OKGV2ZW50LmxheWVyKTtcbiAgICAgICAgICB0aGlzLmZlYXR1cmVTZWxlY3RlZC5lbWl0KGdlb0pTT04pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMudmVjdG9yTGF5ZXIuYWRkVG8obSk7XG4gICAgfSk7XG4gIH1cblxuICB2ZWN0b3JHcmlkRmVhdHVyZVRvR2VvSlNPTihseXI6YW55KTphbnl7XG4gICAgY29uc3QgcGFydHM6YW55W11bXSA9IChseXIuX3BhcnRzWzBdJiZseXIuX3BhcnRzWzBdWzBdKT9seXIuX3BhcnRzOltseXIuX3BhcnRzXTtcbiAgICBjb25zdCBwb2ludHMgPSAocGFydHMgYXMgYW55W10pLm1hcCgocGFydDphbnlbXSk9PntcbiAgICAgIHJldHVybiBwYXJ0Lm1hcChwdD0+KFtwdC54LHB0LnldIGFzIG51bWJlcltdKSk7XG4gICAgfSk7XG4gICAgY29uc3Qgb3JpZ2luYWxYcyA9IChbXSBhcyBudW1iZXJbXSkuY29uY2F0KC4uLnBvaW50cy5tYXAocGFydD0+cGFydC5tYXAocHQ9PnB0WzBdKSkpO1xuICAgIGNvbnN0IG1pbnggPSBNYXRoLm1pbiguLi5vcmlnaW5hbFhzKTsvL3BvaW50c1swXS5tYXAocHQ9PnB0WzBdKSk7XG4gICAgY29uc3QgbWF4eCA9IE1hdGgubWF4KC4uLm9yaWdpbmFsWHMpOy8vcG9pbnRzWzBdLm1hcChwdD0+cHRbMF0pKTtcblxuICAgIGNvbnN0IG9yaWdpbmFsWXMgPSAoW10gYXMgbnVtYmVyW10pLmNvbmNhdCguLi5wb2ludHMubWFwKHBhcnQ9PnBhcnQubWFwKHB0PT5wdFsxXSkpKTtcbiAgICBjb25zdCBtaW55ID0gTWF0aC5taW4oLi4ub3JpZ2luYWxZcyk7Ly9wb2ludHNbMF0ubWFwKHB0PT5wdFsxXSkpO1xuICAgIGNvbnN0IG1heHkgPSBNYXRoLm1heCguLi5vcmlnaW5hbFlzKTsvL3BvaW50c1swXS5tYXAocHQ9PnB0WzFdKSk7XG5cbiAgICBmdW5jdGlvbiBjb252ZXJ0ZXIoZnJvbTpudW1iZXJbXSx0bzpudW1iZXJbXSk6ICgoYzpudW1iZXIpPT5udW1iZXIpIHtcbiAgICAgIGNvbnN0IGZyb21EZWx0YSA9IGZyb21bMV0tZnJvbVswXTtcbiAgICAgIGNvbnN0IHRvRGVsdGEgPSB0b1sxXSAtIHRvWzBdO1xuICAgICAgcmV0dXJuIChjKT0+dG9bMF0gKyAoKGMtZnJvbVswXSkvZnJvbURlbHRhKSAqIHRvRGVsdGE7XG4gICAgfVxuXG4gICAgY29uc3QgeENvbnZlcnRlciA9IGNvbnZlcnRlcihbbWlueCxtYXh4XSxbbHlyLnByb3BlcnRpZXMubWlueCxseXIucHJvcGVydGllcy5tYXh4XSk7XG4gICAgY29uc3QgeUNvbnZlcnRlciA9IGNvbnZlcnRlcihbbWlueSxtYXh5XSxbbHlyLnByb3BlcnRpZXMubWF4eSxseXIucHJvcGVydGllcy5taW55XSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTonRmVhdHVyZScsXG4gICAgICBnZW9tZXRyeTp7XG4gICAgICAgIHR5cGU6J1BvbHlnb24nLFxuICAgICAgICBjb29yZGluYXRlczpwb2ludHMubWFwKHBhcnQ9PnBhcnQubWFwKHB0PT5beENvbnZlcnRlcihwdFswXSkseUNvbnZlcnRlcihwdFsxXSldKSlcbiAgICAgIH0sXG4gICAgICBwcm9wZXJ0aWVzOmx5ci5wcm9wZXJ0aWVzXG4gICAgfTtcbiAgfVxuXG59XG4iXX0=