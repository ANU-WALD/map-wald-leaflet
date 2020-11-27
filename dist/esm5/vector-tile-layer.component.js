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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9yLXRpbGUtbGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtbGVhZmxldC8iLCJzb3VyY2VzIjpbInZlY3Rvci10aWxlLWxheWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUE4QztBQUE5Qyw4Q0FBOEM7QUFFOUMsc0NBQW9IO0FBRXBILCtCQUErQjtBQUMvQixxREFBbUQ7OztBQUduRDtJQWVFLGtDQUFvQixHQUFtQjtRQUFuQixRQUFHLEdBQUgsR0FBRyxDQUFnQjtRQVA5QixjQUFTLEdBQThCLEVBQUUsQ0FBQztRQUN6QyxvQkFBZSxHQUFHLElBQUksbUJBQVksRUFBTyxDQUFDO1FBRTVDLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFJaUIsQ0FBQztJQUU1QywyQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELDhDQUFXLEdBQVg7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7WUFDakIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTywrQ0FBWSxHQUFwQixVQUFxQixDQUFLO1FBQ3hCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFFLE9BQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQztRQUMvRCxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTyx5Q0FBTSxHQUFkLFVBQWUsQ0FBUTtRQUNyQixJQUFHLElBQUksQ0FBQyxXQUFXLEVB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LENBQUMsQ0FBQyxDQUFDO1FBRXBGLE9BQU87WUFDTCxJQUFJLEVBQUMsU0FBUztZQUNkLFFBQVEsRUFBQztnQkFDUCxJQUFJLEVBQUMsU0FBUztnQkFDZCxXQUFXLEVBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBRSxPQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxFQUFFLElBQUUsT0FBQSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBckMsQ0FBcUMsQ0FBQyxFQUFuRCxDQUFtRCxDQUFDO2FBQ2xGO1lBQ0QsVUFBVSxFQUFDLEdBQUcsQ0FBQyxVQUFVO1NBQzFCLENBQUM7SUFDSixDQUFDO29HQTdGVSx3QkFBd0I7aUVBQXhCLHdCQUF3QjttQ0FickM7Q0E0R0MsQUFwR0QsSUFvR0M7QUEvRlksNERBQXdCO2tEQUF4Qix3QkFBd0I7Y0FMcEMsZ0JBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUUsRUFBRTtnQkFDWixNQUFNLEVBQUUsRUFBRTthQUNYO2lFQUVVLEdBQUc7a0JBQVgsWUFBSztZQUNHLE1BQU07a0JBQWQsWUFBSztZQUNHLFNBQVM7a0JBQWpCLFlBQUs7WUFDSSxlQUFlO2tCQUF4QixhQUFNIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCIuL2xlYWZsZXQudmVjdG9yZ3JpZFwiIC8+XG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBsZWFmbGV0IGZyb20gJ2xlYWZsZXQnO1xuLy8gaW1wb3J0ICdsZWFmbGV0LnZlY3RvcmdyaWQnO1xuaW1wb3J0IHsgTGVhZmxldFNlcnZpY2UgfSBmcm9tICcuL2xlYWZsZXQuc2VydmljZSc7XG5pbXBvcnQgeyBUaWxlZFN1YmxheWVyRGVzY3JpcHRvciB9IGZyb20gJy4vZGF0YSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ZlY3Rvci10aWxlLWxheWVyJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFZlY3RvclRpbGVMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSB1cmw6IHN0cmluZztcbiAgQElucHV0KCkgc3R5bGVzOiBhbnk7XG4gIEBJbnB1dCgpIHN1YmxheWVyczogVGlsZWRTdWJsYXllckRlc2NyaXB0b3JbXSA9IFtdO1xuICBAT3V0cHV0KCkgZmVhdHVyZVNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHJpdmF0ZSBkZXN0cm95ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzZWxlY3RlZEZlYXR1cmU6IGFueTtcbiAgcHJpdmF0ZSB2ZWN0b3JMYXllcjogTC5WZWN0b3JHcmlkTGF5ZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IExlYWZsZXRTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICB0aGlzLm1hcC5tYXAudGhlbihtPT57XG4gICAgICB0aGlzLnJlbW92ZShtKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RmVhdHVyZUlkKGY6YW55KTogc3RyaW5nIHtcbiAgICBjb25zdCBtYXRjaCA9IHRoaXMuc3VibGF5ZXJzLmZpbmQodj0+Zi5wcm9wZXJ0aWVzW3Yua2V5RmllbGRdKTtcbiAgICByZXR1cm4gZi5wcm9wZXJ0aWVzW21hdGNoLmtleUZpZWxkXTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlKG06IEwuTWFwKTogdm9pZCB7XG4gICAgaWYodGhpcy52ZWN0b3JMYXllcil7XG4gICAgICB0aGlzLnZlY3RvckxheWVyLnJlbW92ZUZyb20obSk7XG4gICAgICB0aGlzLnZlY3RvckxheWVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5tYXAubWFwLnRoZW4obT0+e1xuICAgICAgdGhpcy5yZW1vdmUobSk7XG4gICAgICBpZih0aGlzLmRlc3Ryb3llZCl7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy52ZWN0b3JMYXllciA9IEwudmVjdG9yR3JpZC5wcm90b2J1Zih0aGlzLnVybCx7XG4gICAgICAgIG1pblpvb206MTEsXG4gICAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgICAgICB2ZWN0b3JUaWxlTGF5ZXJTdHlsZXM6IHRoaXMuc3R5bGVzLFxuICAgICAgICBtYXhOYXRpdmVab29tOjEzLFxuICAgICAgICBnZXRGZWF0dXJlSWQ6IChmOmFueSkgPT4gdGhpcy5nZXRGZWF0dXJlSWQoZilcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnZlY3RvckxheWVyLm9uKCdjbGljaycgYXMgYW55LChldmVudCk9PntcbiAgICAgICAgaWYodGhpcy5zZWxlY3RlZEZlYXR1cmUpe1xuICAgICAgICAgIHRoaXMudmVjdG9yTGF5ZXIucmVzZXRGZWF0dXJlU3R5bGUodGhpcy5zZWxlY3RlZEZlYXR1cmUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRGZWF0dXJlID0gdGhpcy5nZXRGZWF0dXJlSWQoZXZlbnQubGF5ZXIpO1xuICAgICAgICB0aGlzLnZlY3RvckxheWVyLnNldEZlYXR1cmVTdHlsZSh0aGlzLnNlbGVjdGVkRmVhdHVyZSwge1xuICAgICAgICAgIHdlaWdodDo1XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGdlb0pTT04gPSB0aGlzLnZlY3RvckdyaWRGZWF0dXJlVG9HZW9KU09OKGV2ZW50LmxheWVyKTtcbiAgICAgICAgdGhpcy5mZWF0dXJlU2VsZWN0ZWQuZW1pdChnZW9KU09OKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy52ZWN0b3JMYXllci5hZGRUbyhtKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZlY3RvckdyaWRGZWF0dXJlVG9HZW9KU09OKGx5cjphbnkpOmFueXtcbiAgICBjb25zdCBwYXJ0czphbnlbXVtdID0gKGx5ci5fcGFydHNbMF0mJmx5ci5fcGFydHNbMF1bMF0pP2x5ci5fcGFydHM6W2x5ci5fcGFydHNdO1xuICAgIGNvbnN0IHBvaW50cyA9IChwYXJ0cyBhcyBhbnlbXSkubWFwKChwYXJ0OmFueVtdKT0+e1xuICAgICAgcmV0dXJuIHBhcnQubWFwKHB0PT4oW3B0LngscHQueV0gYXMgbnVtYmVyW10pKTtcbiAgICB9KTtcbiAgICBjb25zdCBtaW54ID0gTWF0aC5taW4oLi4ucG9pbnRzWzBdLm1hcChwdD0+cHRbMF0pKTtcbiAgICBjb25zdCBtYXh4ID0gTWF0aC5tYXgoLi4ucG9pbnRzWzBdLm1hcChwdD0+cHRbMF0pKTtcblxuICAgIGNvbnN0IG1pbnkgPSBNYXRoLm1pbiguLi5wb2ludHNbMF0ubWFwKHB0PT5wdFsxXSkpO1xuICAgIGNvbnN0IG1heHkgPSBNYXRoLm1heCguLi5wb2ludHNbMF0ubWFwKHB0PT5wdFsxXSkpO1xuXG4gICAgZnVuY3Rpb24gY29udmVydGVyKGZyb206bnVtYmVyW10sdG86bnVtYmVyW10pOiAoKGM6bnVtYmVyKT0+bnVtYmVyKSB7XG4gICAgICBjb25zdCBmcm9tRGVsdGEgPSBmcm9tWzFdLWZyb21bMF07XG4gICAgICBjb25zdCB0b0RlbHRhID0gdG9bMV0gLSB0b1swXTtcbiAgICAgIHJldHVybiAoYyk9PnRvWzBdICsgKChjLWZyb21bMF0pL2Zyb21EZWx0YSkgKiB0b0RlbHRhO1xuICAgIH1cblxuICAgIGNvbnN0IHhDb252ZXJ0ZXIgPSBjb252ZXJ0ZXIoW21pbngsbWF4eF0sW2x5ci5wcm9wZXJ0aWVzLm1pbngsbHlyLnByb3BlcnRpZXMubWF4eF0pO1xuICAgIGNvbnN0IHlDb252ZXJ0ZXIgPSBjb252ZXJ0ZXIoW21pbnksbWF4eV0sW2x5ci5wcm9wZXJ0aWVzLm1heHksbHlyLnByb3BlcnRpZXMubWlueV0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6J0ZlYXR1cmUnLFxuICAgICAgZ2VvbWV0cnk6e1xuICAgICAgICB0eXBlOidQb2x5Z29uJyxcbiAgICAgICAgY29vcmRpbmF0ZXM6cG9pbnRzLm1hcChwYXJ0PT5wYXJ0Lm1hcChwdD0+W3hDb252ZXJ0ZXIocHRbMF0pLHlDb252ZXJ0ZXIocHRbMV0pXSkpXG4gICAgICB9LFxuICAgICAgcHJvcGVydGllczpseXIucHJvcGVydGllc1xuICAgIH07XG4gIH1cblxufVxuIl19