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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9yLXRpbGUtbGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtbGVhZmxldC8iLCJzb3VyY2VzIjpbInZlY3Rvci10aWxlLWxheWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUE4QztBQUE5Qyw4Q0FBOEM7QUFFOUMsc0NBQW9IO0FBRXBILCtCQUErQjtBQUMvQixxREFBK0Q7OztBQUcvRDtJQW9CRSxrQ0FBb0IsR0FBbUI7UUFBbkIsUUFBRyxHQUFILEdBQUcsQ0FBZ0I7UUFaOUIsY0FBUyxHQUE4QixFQUFFLENBQUM7UUFDekMsb0JBQWUsR0FBRyxJQUFJLG1CQUFZLEVBQU8sQ0FBQztRQUMzQyxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFFZCxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBSWlCLENBQUM7SUFFNUMsMkNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCw4Q0FBVyxHQUFYO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sK0NBQVksR0FBcEIsVUFBcUIsQ0FBSztRQUN4QixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBRSxPQUFBLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUF4QixDQUF3QixD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QkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUUsRUFBRTtnQkFDWixNQUFNLEVBQUUsRUFBRTthQUNYO2lFQUVVLEdBQUc7a0JBQVgsWUFBSztZQUNHLE1BQU07a0JBQWQsWUFBSztZQUNHLFNBQVM7a0JBQWpCLFlBQUs7WUFDSSxlQUFlO2tCQUF4QixhQUFNO1lBQ0UsT0FBTztrQkFBZixZQUFLO1lBQ0csT0FBTztrQkFBZixZQUFLO1lBQ0csYUFBYTtrQkFBckIsWUFBSztZQUNHLGFBQWE7a0JBQXJCLFlBQUs7WUFDRyxNQUFNO2tCQUFkLFlBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cIi4vbGVhZmxldC52ZWN0b3JncmlkXCIgLz5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGxlYWZsZXQgZnJvbSAnbGVhZmxldCc7XG4vLyBpbXBvcnQgJ2xlYWZsZXQudmVjdG9yZ3JpZCc7XG5pbXBvcnQgeyBlbnN1cmVQYW5lLCBMZWFmbGV0U2VydmljZSB9IGZyb20gJy4vbGVhZmxldC5zZXJ2aWNlJztcbmltcG9ydCB7IFRpbGVkU3VibGF5ZXJEZXNjcmlwdG9yIH0gZnJvbSAnLi9kYXRhJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndmVjdG9yLXRpbGUtbGF5ZXInLFxuICB0ZW1wbGF0ZTogJycsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgVmVjdG9yVGlsZUxheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHVybDogc3RyaW5nO1xuICBASW5wdXQoKSBzdHlsZXM6IGFueTtcbiAgQElucHV0KCkgc3VibGF5ZXJzOiBUaWxlZFN1YmxheWVyRGVzY3JpcHRvcltdID0gW107XG4gIEBPdXRwdXQoKSBmZWF0dXJlU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQElucHV0KCkgbWluWm9vbSA9IDA7XG4gIEBJbnB1dCgpIG1heFpvb20gPSAzMDtcbiAgQElucHV0KCkgbWluTmF0aXZlWm9vbSA9IDExO1xuICBASW5wdXQoKSBtYXhOYXRpdmVab29tID0gMTM7XG4gIEBJbnB1dCgpIHpJbmRleCA9IDEwMDtcblxuICBwcml2YXRlIGRlc3Ryb3llZCA9IGZhbHNlO1xuICBwcml2YXRlIHNlbGVjdGVkRmVhdHVyZTogYW55O1xuICBwcml2YXRlIHZlY3RvckxheWVyOiBMLlZlY3RvckdyaWRMYXllcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTGVhZmxldFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuICAgIHRoaXMubWFwLm1hcC50aGVuKG09PntcbiAgICAgIHRoaXMucmVtb3ZlKG0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGZWF0dXJlSWQoZjphbnkpOiBzdHJpbmcge1xuICAgIGNvbnN0IG1hdGNoID0gdGhpcy5zdWJsYXllcnMuZmluZCh2PT5mLnByb3BlcnRpZXNbdi5rZXlGaWVsZF0pO1xuICAgIHJldHVybiBmLnByb3BlcnRpZXNbbWF0Y2gua2V5RmllbGRdO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmUobTogTC5NYXApOiB2b2lkIHtcbiAgICBpZih0aGlzLnZlY3RvckxheWVyKXtcbiAgICAgIHRoaXMudmVjdG9yTGF5ZXIucmVtb3ZlRnJvbShtKTtcbiAgICAgIHRoaXMudmVjdG9yTGF5ZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLm1hcC5tYXAudGhlbihtPT57XG4gICAgICB0aGlzLnJlbW92ZShtKTtcbiAgICAgIGlmKHRoaXMuZGVzdHJveWVkKXtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYW5lID0gYHZlY3Rvci1wYW5lLSR7dGhpcy56SW5kZXh9YDtcbiAgICAgIGVuc3VyZVBhbmUobSxwYW5lLHRoaXMuekluZGV4KVxuXG4gICAgICB0aGlzLnZlY3RvckxheWVyID0gTC52ZWN0b3JHcmlkLnByb3RvYnVmKHRoaXMudXJsLHtcbiAgICAgICAgcGFuZSxcbiAgICAgICAgbWluWm9vbTp0aGlzLm1pblpvb20sXG4gICAgICAgIG1heFpvb206dGhpcy5tYXhab29tLFxuICAgICAgICBtaW5OYXRpdmVab29tOnRoaXMubWluTmF0aXZlWm9vbSxcbiAgICAgICAgbWF4TmF0aXZlWm9vbTp0aGlzLm1heE5hdGl2ZVpvb20sXG4gICAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgICAgICB2ZWN0b3JUaWxlTGF5ZXJTdHlsZXM6IHRoaXMuc3R5bGVzLFxuICAgICAgICBnZXRGZWF0dXJlSWQ6IChmOmFueSkgPT4gdGhpcy5nZXRGZWF0dXJlSWQoZilcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnZlY3RvckxheWVyLm9uKCdjbGljaycgYXMgYW55LChldmVudCk9PntcbiAgICAgICAgaWYodGhpcy5zZWxlY3RlZEZlYXR1cmUpe1xuICAgICAgICAgIHRoaXMudmVjdG9yTGF5ZXIucmVzZXRGZWF0dXJlU3R5bGUodGhpcy5zZWxlY3RlZEZlYXR1cmUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRGZWF0dXJlID0gdGhpcy5nZXRGZWF0dXJlSWQoZXZlbnQubGF5ZXIpO1xuICAgICAgICB0aGlzLnZlY3RvckxheWVyLnNldEZlYXR1cmVTdHlsZSh0aGlzLnNlbGVjdGVkRmVhdHVyZSwge1xuICAgICAgICAgIHdlaWdodDo1XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGdlb0pTT04gPSB0aGlzLnZlY3RvckdyaWRGZWF0dXJlVG9HZW9KU09OKGV2ZW50LmxheWVyKTtcbiAgICAgICAgdGhpcy5mZWF0dXJlU2VsZWN0ZWQuZW1pdChnZW9KU09OKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy52ZWN0b3JMYXllci5hZGRUbyhtKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZlY3RvckdyaWRGZWF0dXJlVG9HZW9KU09OKGx5cjphbnkpOmFueXtcbiAgICBjb25zdCBwYXJ0czphbnlbXVtdID0gKGx5ci5fcGFydHNbMF0mJmx5ci5fcGFydHNbMF1bMF0pP2x5ci5fcGFydHM6W2x5ci5fcGFydHNdO1xuICAgIGNvbnN0IHBvaW50cyA9IChwYXJ0cyBhcyBhbnlbXSkubWFwKChwYXJ0OmFueVtdKT0+e1xuICAgICAgcmV0dXJuIHBhcnQubWFwKHB0PT4oW3B0LngscHQueV0gYXMgbnVtYmVyW10pKTtcbiAgICB9KTtcbiAgICBjb25zdCBvcmlnaW5hbFhzID0gKFtdIGFzIG51bWJlcltdKS5jb25jYXQoLi4ucG9pbnRzLm1hcChwYXJ0PT5wYXJ0Lm1hcChwdD0+cHRbMF0pKSk7XG4gICAgY29uc3QgbWlueCA9IE1hdGgubWluKC4uLm9yaWdpbmFsWHMpOy8vcG9pbnRzWzBdLm1hcChwdD0+cHRbMF0pKTtcbiAgICBjb25zdCBtYXh4ID0gTWF0aC5tYXgoLi4ub3JpZ2luYWxYcyk7Ly9wb2ludHNbMF0ubWFwKHB0PT5wdFswXSkpO1xuXG4gICAgY29uc3Qgb3JpZ2luYWxZcyA9IChbXSBhcyBudW1iZXJbXSkuY29uY2F0KC4uLnBvaW50cy5tYXAocGFydD0+cGFydC5tYXAocHQ9PnB0WzFdKSkpO1xuICAgIGNvbnN0IG1pbnkgPSBNYXRoLm1pbiguLi5vcmlnaW5hbFlzKTsvL3BvaW50c1swXS5tYXAocHQ9PnB0WzFdKSk7XG4gICAgY29uc3QgbWF4eSA9IE1hdGgubWF4KC4uLm9yaWdpbmFsWXMpOy8vcG9pbnRzWzBdLm1hcChwdD0+cHRbMV0pKTtcblxuICAgIGZ1bmN0aW9uIGNvbnZlcnRlcihmcm9tOm51bWJlcltdLHRvOm51bWJlcltdKTogKChjOm51bWJlcik9Pm51bWJlcikge1xuICAgICAgY29uc3QgZnJvbURlbHRhID0gZnJvbVsxXS1mcm9tWzBdO1xuICAgICAgY29uc3QgdG9EZWx0YSA9IHRvWzFdIC0gdG9bMF07XG4gICAgICByZXR1cm4gKGMpPT50b1swXSArICgoYy1mcm9tWzBdKS9mcm9tRGVsdGEpICogdG9EZWx0YTtcbiAgICB9XG5cbiAgICBjb25zdCB4Q29udmVydGVyID0gY29udmVydGVyKFttaW54LG1heHhdLFtseXIucHJvcGVydGllcy5taW54LGx5ci5wcm9wZXJ0aWVzLm1heHhdKTtcbiAgICBjb25zdCB5Q29udmVydGVyID0gY29udmVydGVyKFttaW55LG1heHldLFtseXIucHJvcGVydGllcy5tYXh5LGx5ci5wcm9wZXJ0aWVzLm1pbnldKTtcblxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOidGZWF0dXJlJyxcbiAgICAgIGdlb21ldHJ5OntcbiAgICAgICAgdHlwZTonUG9seWdvbicsXG4gICAgICAgIGNvb3JkaW5hdGVzOnBvaW50cy5tYXAocGFydD0+cGFydC5tYXAocHQ9Plt4Q29udmVydGVyKHB0WzBdKSx5Q29udmVydGVyKHB0WzFdKV0pKVxuICAgICAgfSxcbiAgICAgIHByb3BlcnRpZXM6bHlyLnByb3BlcnRpZXNcbiAgICB9O1xuICB9XG5cbn1cbiJdfQ==