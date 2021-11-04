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
                minZoom: _this.minZoom,
                maxZoom: _this.maxZoom,
                minNativeZoom: _this.minNativeZoom,
                maxNativeZoom: _this.maxNativeZoom,
                interactive: true,
                vectorTileLayerStyles: _this.styles,
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
    VectorTileLayerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: VectorTileLayerComponent, selectors: [["vector-tile-layer"]], inputs: { url: "url", styles: "styles", sublayers: "sublayers", minZoom: "minZoom", maxZoom: "maxZoom", minNativeZoom: "minNativeZoom", maxNativeZoom: "maxNativeZoom" }, outputs: { featureSelected: "featureSelected" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function VectorTileLayerComponent_Template(rf, ctx) { }, encapsulation: 2 });
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9yLXRpbGUtbGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtbGVhZmxldC8iLCJzb3VyY2VzIjpbInZlY3Rvci10aWxlLWxheWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUE4QztBQUE5Qyw4Q0FBOEM7QUFFOUMsc0NBQW9IO0FBRXBILCtCQUErQjtBQUMvQixxREFBbUQ7OztBQUduRDtJQW1CRSxrQ0FBb0IsR0FBbUI7UUFBbkIsUUFBRyxHQUFILEdBQUcsQ0FBZ0I7UUFYOUIsY0FBUyxHQUE4QixFQUFFLENBQUM7UUFDekMsb0JBQWUsR0FBRyxJQUFJLG1CQUFZLEVBQU8sQ0FBQztRQUMzQyxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBRXBCLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFJaUIsQ0FBQztJQUU1QywyQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELDhDQUFXLEdBQVg7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7WUFDakIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTywrQ0FBWSxHQUFwQixVQUFxQixDQUFLO1FBQ3hCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFFLE9BQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQztRQUMvRCxPQUFPLENBQUMs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QixhQUFNO1lBQ0UsT0FBTztrQkFBZixZQUFLO1lBQ0csT0FBTztrQkFBZixZQUFLO1lBQ0csYUFBYTtrQkFBckIsWUFBSztZQUNHLGFBQWE7a0JBQXJCLFlBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cIi4vbGVhZmxldC52ZWN0b3JncmlkXCIgLz5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGxlYWZsZXQgZnJvbSAnbGVhZmxldCc7XG4vLyBpbXBvcnQgJ2xlYWZsZXQudmVjdG9yZ3JpZCc7XG5pbXBvcnQgeyBMZWFmbGV0U2VydmljZSB9IGZyb20gJy4vbGVhZmxldC5zZXJ2aWNlJztcbmltcG9ydCB7IFRpbGVkU3VibGF5ZXJEZXNjcmlwdG9yIH0gZnJvbSAnLi9kYXRhJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndmVjdG9yLXRpbGUtbGF5ZXInLFxuICB0ZW1wbGF0ZTogJycsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgVmVjdG9yVGlsZUxheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHVybDogc3RyaW5nO1xuICBASW5wdXQoKSBzdHlsZXM6IGFueTtcbiAgQElucHV0KCkgc3VibGF5ZXJzOiBUaWxlZFN1YmxheWVyRGVzY3JpcHRvcltdID0gW107XG4gIEBPdXRwdXQoKSBmZWF0dXJlU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQElucHV0KCkgbWluWm9vbSA9IDA7XG4gIEBJbnB1dCgpIG1heFpvb20gPSAzMDtcbiAgQElucHV0KCkgbWluTmF0aXZlWm9vbSA9IDExO1xuICBASW5wdXQoKSBtYXhOYXRpdmVab29tID0gMTM7XG5cbiAgcHJpdmF0ZSBkZXN0cm95ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzZWxlY3RlZEZlYXR1cmU6IGFueTtcbiAgcHJpdmF0ZSB2ZWN0b3JMYXllcjogTC5WZWN0b3JHcmlkTGF5ZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IExlYWZsZXRTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICB0aGlzLm1hcC5tYXAudGhlbihtPT57XG4gICAgICB0aGlzLnJlbW92ZShtKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RmVhdHVyZUlkKGY6YW55KTogc3RyaW5nIHtcbiAgICBjb25zdCBtYXRjaCA9IHRoaXMuc3VibGF5ZXJzLmZpbmQodj0+Zi5wcm9wZXJ0aWVzW3Yua2V5RmllbGRdKTtcbiAgICByZXR1cm4gZi5wcm9wZXJ0aWVzW21hdGNoLmtleUZpZWxkXTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlKG06IEwuTWFwKTogdm9pZCB7XG4gICAgaWYodGhpcy52ZWN0b3JMYXllcil7XG4gICAgICB0aGlzLnZlY3RvckxheWVyLnJlbW92ZUZyb20obSk7XG4gICAgICB0aGlzLnZlY3RvckxheWVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5tYXAubWFwLnRoZW4obT0+e1xuICAgICAgdGhpcy5yZW1vdmUobSk7XG4gICAgICBpZih0aGlzLmRlc3Ryb3llZCl7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy52ZWN0b3JMYXllciA9IEwudmVjdG9yR3JpZC5wcm90b2J1Zih0aGlzLnVybCx7XG4gICAgICAgIG1pblpvb206dGhpcy5taW5ab29tLFxuICAgICAgICBtYXhab29tOnRoaXMubWF4Wm9vbSxcbiAgICAgICAgbWluTmF0aXZlWm9vbTp0aGlzLm1pbk5hdGl2ZVpvb20sXG4gICAgICAgIG1heE5hdGl2ZVpvb206dGhpcy5tYXhOYXRpdmVab29tLFxuICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgdmVjdG9yVGlsZUxheWVyU3R5bGVzOiB0aGlzLnN0eWxlcyxcbiAgICAgICAgZ2V0RmVhdHVyZUlkOiAoZjphbnkpID0+IHRoaXMuZ2V0RmVhdHVyZUlkKGYpXG4gICAgICB9KTtcblxuICAgICAgdGhpcy52ZWN0b3JMYXllci5vbignY2xpY2snIGFzIGFueSwoZXZlbnQpPT57XG4gICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRGZWF0dXJlKXtcbiAgICAgICAgICB0aGlzLnZlY3RvckxheWVyLnJlc2V0RmVhdHVyZVN0eWxlKHRoaXMuc2VsZWN0ZWRGZWF0dXJlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdGVkRmVhdHVyZSA9IHRoaXMuZ2V0RmVhdHVyZUlkKGV2ZW50LmxheWVyKTtcbiAgICAgICAgdGhpcy52ZWN0b3JMYXllci5zZXRGZWF0dXJlU3R5bGUodGhpcy5zZWxlY3RlZEZlYXR1cmUsIHtcbiAgICAgICAgICB3ZWlnaHQ6NVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBnZW9KU09OID0gdGhpcy52ZWN0b3JHcmlkRmVhdHVyZVRvR2VvSlNPTihldmVudC5sYXllcik7XG4gICAgICAgIHRoaXMuZmVhdHVyZVNlbGVjdGVkLmVtaXQoZ2VvSlNPTik7XG4gICAgICB9KTtcbiAgICAgIHRoaXMudmVjdG9yTGF5ZXIuYWRkVG8obSk7XG4gICAgfSk7XG4gIH1cblxuICB2ZWN0b3JHcmlkRmVhdHVyZVRvR2VvSlNPTihseXI6YW55KTphbnl7XG4gICAgY29uc3QgcGFydHM6YW55W11bXSA9IChseXIuX3BhcnRzWzBdJiZseXIuX3BhcnRzWzBdWzBdKT9seXIuX3BhcnRzOltseXIuX3BhcnRzXTtcbiAgICBjb25zdCBwb2ludHMgPSAocGFydHMgYXMgYW55W10pLm1hcCgocGFydDphbnlbXSk9PntcbiAgICAgIHJldHVybiBwYXJ0Lm1hcChwdD0+KFtwdC54LHB0LnldIGFzIG51bWJlcltdKSk7XG4gICAgfSk7XG4gICAgY29uc3Qgb3JpZ2luYWxYcyA9IChbXSBhcyBudW1iZXJbXSkuY29uY2F0KC4uLnBvaW50cy5tYXAocGFydD0+cGFydC5tYXAocHQ9PnB0WzBdKSkpO1xuICAgIGNvbnN0IG1pbnggPSBNYXRoLm1pbiguLi5vcmlnaW5hbFhzKTsvL3BvaW50c1swXS5tYXAocHQ9PnB0WzBdKSk7XG4gICAgY29uc3QgbWF4eCA9IE1hdGgubWF4KC4uLm9yaWdpbmFsWHMpOy8vcG9pbnRzWzBdLm1hcChwdD0+cHRbMF0pKTtcblxuICAgIGNvbnN0IG9yaWdpbmFsWXMgPSAoW10gYXMgbnVtYmVyW10pLmNvbmNhdCguLi5wb2ludHMubWFwKHBhcnQ9PnBhcnQubWFwKHB0PT5wdFsxXSkpKTtcbiAgICBjb25zdCBtaW55ID0gTWF0aC5taW4oLi4ub3JpZ2luYWxZcyk7Ly9wb2ludHNbMF0ubWFwKHB0PT5wdFsxXSkpO1xuICAgIGNvbnN0IG1heHkgPSBNYXRoLm1heCguLi5vcmlnaW5hbFlzKTsvL3BvaW50c1swXS5tYXAocHQ9PnB0WzFdKSk7XG5cbiAgICBmdW5jdGlvbiBjb252ZXJ0ZXIoZnJvbTpudW1iZXJbXSx0bzpudW1iZXJbXSk6ICgoYzpudW1iZXIpPT5udW1iZXIpIHtcbiAgICAgIGNvbnN0IGZyb21EZWx0YSA9IGZyb21bMV0tZnJvbVswXTtcbiAgICAgIGNvbnN0IHRvRGVsdGEgPSB0b1sxXSAtIHRvWzBdO1xuICAgICAgcmV0dXJuIChjKT0+dG9bMF0gKyAoKGMtZnJvbVswXSkvZnJvbURlbHRhKSAqIHRvRGVsdGE7XG4gICAgfVxuXG4gICAgY29uc3QgeENvbnZlcnRlciA9IGNvbnZlcnRlcihbbWlueCxtYXh4XSxbbHlyLnByb3BlcnRpZXMubWlueCxseXIucHJvcGVydGllcy5tYXh4XSk7XG4gICAgY29uc3QgeUNvbnZlcnRlciA9IGNvbnZlcnRlcihbbWlueSxtYXh5XSxbbHlyLnByb3BlcnRpZXMubWF4eSxseXIucHJvcGVydGllcy5taW55XSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTonRmVhdHVyZScsXG4gICAgICBnZW9tZXRyeTp7XG4gICAgICAgIHR5cGU6J1BvbHlnb24nLFxuICAgICAgICBjb29yZGluYXRlczpwb2ludHMubWFwKHBhcnQ9PnBhcnQubWFwKHB0PT5beENvbnZlcnRlcihwdFswXSkseUNvbnZlcnRlcihwdFsxXSldKSlcbiAgICAgIH0sXG4gICAgICBwcm9wZXJ0aWVzOmx5ci5wcm9wZXJ0aWVzXG4gICAgfTtcbiAgfVxuXG59XG4iXX0=