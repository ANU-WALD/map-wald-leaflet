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
        console.log(this);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9yLXRpbGUtbGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtbGVhZmxldC8iLCJzb3VyY2VzIjpbInZlY3Rvci10aWxlLWxheWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUE4QztBQUE5Qyw4Q0FBOEM7QUFFOUMsc0NBQW9IO0FBRXBILCtCQUErQjtBQUMvQixxREFBbUQ7OztBQUduRDtJQW1CRSxrQ0FBb0IsR0FBbUI7UUFBbkIsUUFBRyxHQUFILEdBQUcsQ0FBZ0I7UUFYOUIsY0FBUyxHQUE4QixFQUFFLENBQUM7UUFDekMsb0JBQWUsR0FBRyxJQUFJLG1CQUFZLEVBQU8sQ0FBQztRQUMzQyxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBRXBCLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFJZ0IsQ0FBQztJQUUzQywyQ0FBUSxHQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsOENBQVcsR0FBWDtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztZQUNqQixLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLCtDQUFZLEdBQXBCLFVBQXFCLENBQUs7UUFDeEIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUUsT0FBQSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENB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WUFBSztZQUNHLGFBQWE7a0JBQXJCLFlBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cIi4vbGVhZmxldC52ZWN0b3JncmlkXCIgLz5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGxlYWZsZXQgZnJvbSAnbGVhZmxldCc7XG4vLyBpbXBvcnQgJ2xlYWZsZXQudmVjdG9yZ3JpZCc7XG5pbXBvcnQgeyBMZWFmbGV0U2VydmljZSB9IGZyb20gJy4vbGVhZmxldC5zZXJ2aWNlJztcbmltcG9ydCB7IFRpbGVkU3VibGF5ZXJEZXNjcmlwdG9yIH0gZnJvbSAnLi9kYXRhJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndmVjdG9yLXRpbGUtbGF5ZXInLFxuICB0ZW1wbGF0ZTogJycsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgVmVjdG9yVGlsZUxheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHVybDogc3RyaW5nO1xuICBASW5wdXQoKSBzdHlsZXM6IGFueTtcbiAgQElucHV0KCkgc3VibGF5ZXJzOiBUaWxlZFN1YmxheWVyRGVzY3JpcHRvcltdID0gW107XG4gIEBPdXRwdXQoKSBmZWF0dXJlU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQElucHV0KCkgbWluWm9vbSA9IDA7XG4gIEBJbnB1dCgpIG1heFpvb20gPSAzMDtcbiAgQElucHV0KCkgbWluTmF0aXZlWm9vbSA9IDExO1xuICBASW5wdXQoKSBtYXhOYXRpdmVab29tID0gMTM7XG5cbiAgcHJpdmF0ZSBkZXN0cm95ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzZWxlY3RlZEZlYXR1cmU6IGFueTtcbiAgcHJpdmF0ZSB2ZWN0b3JMYXllcjogTC5WZWN0b3JHcmlkTGF5ZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IExlYWZsZXRTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuICAgIHRoaXMubWFwLm1hcC50aGVuKG09PntcbiAgICAgIHRoaXMucmVtb3ZlKG0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGZWF0dXJlSWQoZjphbnkpOiBzdHJpbmcge1xuICAgIGNvbnN0IG1hdGNoID0gdGhpcy5zdWJsYXllcnMuZmluZCh2PT5mLnByb3BlcnRpZXNbdi5rZXlGaWVsZF0pO1xuICAgIHJldHVybiBmLnByb3BlcnRpZXNbbWF0Y2gua2V5RmllbGRdO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmUobTogTC5NYXApOiB2b2lkIHtcbiAgICBpZih0aGlzLnZlY3RvckxheWVyKXtcbiAgICAgIHRoaXMudmVjdG9yTGF5ZXIucmVtb3ZlRnJvbShtKTtcbiAgICAgIHRoaXMudmVjdG9yTGF5ZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLm1hcC5tYXAudGhlbihtPT57XG4gICAgICB0aGlzLnJlbW92ZShtKTtcbiAgICAgIGlmKHRoaXMuZGVzdHJveWVkKXtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnZlY3RvckxheWVyID0gTC52ZWN0b3JHcmlkLnByb3RvYnVmKHRoaXMudXJsLHtcbiAgICAgICAgbWluWm9vbTp0aGlzLm1pblpvb20sXG4gICAgICAgIG1heFpvb206dGhpcy5tYXhab29tLFxuICAgICAgICBtaW5OYXRpdmVab29tOnRoaXMubWluTmF0aXZlWm9vbSxcbiAgICAgICAgbWF4TmF0aXZlWm9vbTp0aGlzLm1heE5hdGl2ZVpvb20sXG4gICAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgICAgICB2ZWN0b3JUaWxlTGF5ZXJTdHlsZXM6IHRoaXMuc3R5bGVzLFxuICAgICAgICBnZXRGZWF0dXJlSWQ6IChmOmFueSkgPT4gdGhpcy5nZXRGZWF0dXJlSWQoZilcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnZlY3RvckxheWVyLm9uKCdjbGljaycgYXMgYW55LChldmVudCk9PntcbiAgICAgICAgaWYodGhpcy5zZWxlY3RlZEZlYXR1cmUpe1xuICAgICAgICAgIHRoaXMudmVjdG9yTGF5ZXIucmVzZXRGZWF0dXJlU3R5bGUodGhpcy5zZWxlY3RlZEZlYXR1cmUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRGZWF0dXJlID0gdGhpcy5nZXRGZWF0dXJlSWQoZXZlbnQubGF5ZXIpO1xuICAgICAgICB0aGlzLnZlY3RvckxheWVyLnNldEZlYXR1cmVTdHlsZSh0aGlzLnNlbGVjdGVkRmVhdHVyZSwge1xuICAgICAgICAgIHdlaWdodDo1XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGdlb0pTT04gPSB0aGlzLnZlY3RvckdyaWRGZWF0dXJlVG9HZW9KU09OKGV2ZW50LmxheWVyKTtcbiAgICAgICAgdGhpcy5mZWF0dXJlU2VsZWN0ZWQuZW1pdChnZW9KU09OKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy52ZWN0b3JMYXllci5hZGRUbyhtKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZlY3RvckdyaWRGZWF0dXJlVG9HZW9KU09OKGx5cjphbnkpOmFueXtcbiAgICBjb25zdCBwYXJ0czphbnlbXVtdID0gKGx5ci5fcGFydHNbMF0mJmx5ci5fcGFydHNbMF1bMF0pP2x5ci5fcGFydHM6W2x5ci5fcGFydHNdO1xuICAgIGNvbnN0IHBvaW50cyA9IChwYXJ0cyBhcyBhbnlbXSkubWFwKChwYXJ0OmFueVtdKT0+e1xuICAgICAgcmV0dXJuIHBhcnQubWFwKHB0PT4oW3B0LngscHQueV0gYXMgbnVtYmVyW10pKTtcbiAgICB9KTtcbiAgICBjb25zdCBtaW54ID0gTWF0aC5taW4oLi4ucG9pbnRzWzBdLm1hcChwdD0+cHRbMF0pKTtcbiAgICBjb25zdCBtYXh4ID0gTWF0aC5tYXgoLi4ucG9pbnRzWzBdLm1hcChwdD0+cHRbMF0pKTtcblxuICAgIGNvbnN0IG1pbnkgPSBNYXRoLm1pbiguLi5wb2ludHNbMF0ubWFwKHB0PT5wdFsxXSkpO1xuICAgIGNvbnN0IG1heHkgPSBNYXRoLm1heCguLi5wb2ludHNbMF0ubWFwKHB0PT5wdFsxXSkpO1xuXG4gICAgZnVuY3Rpb24gY29udmVydGVyKGZyb206bnVtYmVyW10sdG86bnVtYmVyW10pOiAoKGM6bnVtYmVyKT0+bnVtYmVyKSB7XG4gICAgICBjb25zdCBmcm9tRGVsdGEgPSBmcm9tWzFdLWZyb21bMF07XG4gICAgICBjb25zdCB0b0RlbHRhID0gdG9bMV0gLSB0b1swXTtcbiAgICAgIHJldHVybiAoYyk9PnRvWzBdICsgKChjLWZyb21bMF0pL2Zyb21EZWx0YSkgKiB0b0RlbHRhO1xuICAgIH1cblxuICAgIGNvbnN0IHhDb252ZXJ0ZXIgPSBjb252ZXJ0ZXIoW21pbngsbWF4eF0sW2x5ci5wcm9wZXJ0aWVzLm1pbngsbHlyLnByb3BlcnRpZXMubWF4eF0pO1xuICAgIGNvbnN0IHlDb252ZXJ0ZXIgPSBjb252ZXJ0ZXIoW21pbnksbWF4eV0sW2x5ci5wcm9wZXJ0aWVzLm1heHksbHlyLnByb3BlcnRpZXMubWlueV0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6J0ZlYXR1cmUnLFxuICAgICAgZ2VvbWV0cnk6e1xuICAgICAgICB0eXBlOidQb2x5Z29uJyxcbiAgICAgICAgY29vcmRpbmF0ZXM6cG9pbnRzLm1hcChwYXJ0PT5wYXJ0Lm1hcChwdD0+W3hDb252ZXJ0ZXIocHRbMF0pLHlDb252ZXJ0ZXIocHRbMV0pXSkpXG4gICAgICB9LFxuICAgICAgcHJvcGVydGllczpseXIucHJvcGVydGllc1xuICAgIH07XG4gIH1cblxufVxuIl19