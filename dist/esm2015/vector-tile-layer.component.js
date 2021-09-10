"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VectorTileLayerComponent = void 0;
/// <reference types="./leaflet.vectorgrid" />
/// <reference types="./leaflet.vectorgrid" />
const core_1 = require("@angular/core");
// import 'leaflet.vectorgrid';
const leaflet_service_1 = require("./leaflet.service");
const i0 = require("@angular/core");
const i1 = require("./leaflet.service");
class VectorTileLayerComponent {
    constructor(map) {
        this.map = map;
        this.sublayers = [];
        this.featureSelected = new core_1.EventEmitter();
        this.minZoom = 0;
        this.maxZoom = 30;
        this.minNativeZoom = 11;
        this.maxNativeZoom = 13;
        this.destroyed = false;
    }
    ngOnInit() {
        console.log(this);
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
                minZoom: this.minZoom,
                maxZoom: this.maxZoom,
                minNativeZoom: this.minNativeZoom,
                maxNativeZoom: this.maxNativeZoom,
                interactive: true,
                vectorTileLayerStyles: this.styles,
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
VectorTileLayerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: VectorTileLayerComponent, selectors: [["vector-tile-layer"]], inputs: { url: "url", styles: "styles", sublayers: "sublayers", minZoom: "minZoom", maxZoom: "maxZoom", minNativeZoom: "minNativeZoom", maxNativeZoom: "maxNativeZoom" }, outputs: { featureSelected: "featureSelected" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function VectorTileLayerComponent_Template(rf, ctx) { }, encapsulation: 2 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9yLXRpbGUtbGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtbGVhZmxldC8iLCJzb3VyY2VzIjpbInZlY3Rvci10aWxlLWxheWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFBOUMsOENBQThDO0FBRTlDLHdDQUFvSDtBQUVwSCwrQkFBK0I7QUFDL0IsdURBQW1EOzs7QUFHbkQsTUFLYSx3QkFBd0I7SUFjbkMsWUFBb0IsR0FBbUI7UUFBbkIsUUFBRyxHQUFILEdBQUcsQ0FBZ0I7UUFYOUIsY0FBUyxHQUE4QixFQUFFLENBQUM7UUFDekMsb0JBQWUsR0FBRyxJQUFJLG1CQUFZLEVBQU8sQ0FBQztRQUMzQyxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBRXBCLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFJZ0IsQ0FBQztJQUUzQyxRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUEsRUFBRTtZQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLFlBQVksQ0FBQyxDQUFLO1FBQ3hCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxFQUFFLENBQUEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUMvRCxPQUFPLENBQUMsQ0FBQyxV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QyxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUVwRixPQUFPO1lBQ0wsSUFBSSxFQUFDLFNBQVM7WUFDZCxRQUFRLEVBQUM7Z0JBQ1AsSUFBSSxFQUFDLFNBQVM7Z0JBQ2QsV0FBVyxFQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFBLEVBQUUsQ0FBQSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQSxFQUFFLENBQUEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNsRjtZQUNELFVBQVUsRUFBQyxHQUFHLENBQUMsVUFBVTtTQUMxQixDQUFDO0lBQ0osQ0FBQzs7QUF6R0gsNERBMkdDO2dHQXRHWSx3QkFBd0I7NkRBQXhCLHdCQUF3QjtrREFBeEIsd0JBQXdCO2NBTHBDLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osTUFBTSxFQUFFLEVBQUU7YUFDWDtpRUFFVSxHQUFHO2tCQUFYLFlBQUs7WUFDRyxNQUFNO2tCQUFkLFlBQUs7WUFDRyxTQUFTO2tCQUFqQixZQUFLO1lBQ0ksZUFBZTtrQkFBeEIsYUFBTTtZQUNFLE9BQU87a0JBQWYsWUFBSztZQUNHLE9BQU87a0JBQWYsWUFBSztZQUNHLGFBQWE7a0JBQXJCLFlBQUs7WUFDRyxhQUFhO2tCQUFyQixZQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCIuL2xlYWZsZXQudmVjdG9yZ3JpZFwiIC8+XG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBsZWFmbGV0IGZyb20gJ2xlYWZsZXQnO1xuLy8gaW1wb3J0ICdsZWFmbGV0LnZlY3RvcmdyaWQnO1xuaW1wb3J0IHsgTGVhZmxldFNlcnZpY2UgfSBmcm9tICcuL2xlYWZsZXQuc2VydmljZSc7XG5pbXBvcnQgeyBUaWxlZFN1YmxheWVyRGVzY3JpcHRvciB9IGZyb20gJy4vZGF0YSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ZlY3Rvci10aWxlLWxheWVyJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFZlY3RvclRpbGVMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSB1cmw6IHN0cmluZztcbiAgQElucHV0KCkgc3R5bGVzOiBhbnk7XG4gIEBJbnB1dCgpIHN1YmxheWVyczogVGlsZWRTdWJsYXllckRlc2NyaXB0b3JbXSA9IFtdO1xuICBAT3V0cHV0KCkgZmVhdHVyZVNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBJbnB1dCgpIG1pblpvb20gPSAwO1xuICBASW5wdXQoKSBtYXhab29tID0gMzA7XG4gIEBJbnB1dCgpIG1pbk5hdGl2ZVpvb20gPSAxMTtcbiAgQElucHV0KCkgbWF4TmF0aXZlWm9vbSA9IDEzO1xuXG4gIHByaXZhdGUgZGVzdHJveWVkID0gZmFsc2U7XG4gIHByaXZhdGUgc2VsZWN0ZWRGZWF0dXJlOiBhbnk7XG4gIHByaXZhdGUgdmVjdG9yTGF5ZXI6IEwuVmVjdG9yR3JpZExheWVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBMZWFmbGV0U2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICB0aGlzLm1hcC5tYXAudGhlbihtPT57XG4gICAgICB0aGlzLnJlbW92ZShtKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RmVhdHVyZUlkKGY6YW55KTogc3RyaW5nIHtcbiAgICBjb25zdCBtYXRjaCA9IHRoaXMuc3VibGF5ZXJzLmZpbmQodj0+Zi5wcm9wZXJ0aWVzW3Yua2V5RmllbGRdKTtcbiAgICByZXR1cm4gZi5wcm9wZXJ0aWVzW21hdGNoLmtleUZpZWxkXTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlKG06IEwuTWFwKTogdm9pZCB7XG4gICAgaWYodGhpcy52ZWN0b3JMYXllcil7XG4gICAgICB0aGlzLnZlY3RvckxheWVyLnJlbW92ZUZyb20obSk7XG4gICAgICB0aGlzLnZlY3RvckxheWVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5tYXAubWFwLnRoZW4obT0+e1xuICAgICAgdGhpcy5yZW1vdmUobSk7XG4gICAgICBpZih0aGlzLmRlc3Ryb3llZCl7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy52ZWN0b3JMYXllciA9IEwudmVjdG9yR3JpZC5wcm90b2J1Zih0aGlzLnVybCx7XG4gICAgICAgIG1pblpvb206dGhpcy5taW5ab29tLFxuICAgICAgICBtYXhab29tOnRoaXMubWF4Wm9vbSxcbiAgICAgICAgbWluTmF0aXZlWm9vbTp0aGlzLm1pbk5hdGl2ZVpvb20sXG4gICAgICAgIG1heE5hdGl2ZVpvb206dGhpcy5tYXhOYXRpdmVab29tLFxuICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgdmVjdG9yVGlsZUxheWVyU3R5bGVzOiB0aGlzLnN0eWxlcyxcbiAgICAgICAgZ2V0RmVhdHVyZUlkOiAoZjphbnkpID0+IHRoaXMuZ2V0RmVhdHVyZUlkKGYpXG4gICAgICB9KTtcblxuICAgICAgdGhpcy52ZWN0b3JMYXllci5vbignY2xpY2snIGFzIGFueSwoZXZlbnQpPT57XG4gICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRGZWF0dXJlKXtcbiAgICAgICAgICB0aGlzLnZlY3RvckxheWVyLnJlc2V0RmVhdHVyZVN0eWxlKHRoaXMuc2VsZWN0ZWRGZWF0dXJlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdGVkRmVhdHVyZSA9IHRoaXMuZ2V0RmVhdHVyZUlkKGV2ZW50LmxheWVyKTtcbiAgICAgICAgdGhpcy52ZWN0b3JMYXllci5zZXRGZWF0dXJlU3R5bGUodGhpcy5zZWxlY3RlZEZlYXR1cmUsIHtcbiAgICAgICAgICB3ZWlnaHQ6NVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBnZW9KU09OID0gdGhpcy52ZWN0b3JHcmlkRmVhdHVyZVRvR2VvSlNPTihldmVudC5sYXllcik7XG4gICAgICAgIHRoaXMuZmVhdHVyZVNlbGVjdGVkLmVtaXQoZ2VvSlNPTik7XG4gICAgICB9KTtcbiAgICAgIHRoaXMudmVjdG9yTGF5ZXIuYWRkVG8obSk7XG4gICAgfSk7XG4gIH1cblxuICB2ZWN0b3JHcmlkRmVhdHVyZVRvR2VvSlNPTihseXI6YW55KTphbnl7XG4gICAgY29uc3QgcGFydHM6YW55W11bXSA9IChseXIuX3BhcnRzWzBdJiZseXIuX3BhcnRzWzBdWzBdKT9seXIuX3BhcnRzOltseXIuX3BhcnRzXTtcbiAgICBjb25zdCBwb2ludHMgPSAocGFydHMgYXMgYW55W10pLm1hcCgocGFydDphbnlbXSk9PntcbiAgICAgIHJldHVybiBwYXJ0Lm1hcChwdD0+KFtwdC54LHB0LnldIGFzIG51bWJlcltdKSk7XG4gICAgfSk7XG4gICAgY29uc3QgbWlueCA9IE1hdGgubWluKC4uLnBvaW50c1swXS5tYXAocHQ9PnB0WzBdKSk7XG4gICAgY29uc3QgbWF4eCA9IE1hdGgubWF4KC4uLnBvaW50c1swXS5tYXAocHQ9PnB0WzBdKSk7XG5cbiAgICBjb25zdCBtaW55ID0gTWF0aC5taW4oLi4ucG9pbnRzWzBdLm1hcChwdD0+cHRbMV0pKTtcbiAgICBjb25zdCBtYXh5ID0gTWF0aC5tYXgoLi4ucG9pbnRzWzBdLm1hcChwdD0+cHRbMV0pKTtcblxuICAgIGZ1bmN0aW9uIGNvbnZlcnRlcihmcm9tOm51bWJlcltdLHRvOm51bWJlcltdKTogKChjOm51bWJlcik9Pm51bWJlcikge1xuICAgICAgY29uc3QgZnJvbURlbHRhID0gZnJvbVsxXS1mcm9tWzBdO1xuICAgICAgY29uc3QgdG9EZWx0YSA9IHRvWzFdIC0gdG9bMF07XG4gICAgICByZXR1cm4gKGMpPT50b1swXSArICgoYy1mcm9tWzBdKS9mcm9tRGVsdGEpICogdG9EZWx0YTtcbiAgICB9XG5cbiAgICBjb25zdCB4Q29udmVydGVyID0gY29udmVydGVyKFttaW54LG1heHhdLFtseXIucHJvcGVydGllcy5taW54LGx5ci5wcm9wZXJ0aWVzLm1heHhdKTtcbiAgICBjb25zdCB5Q29udmVydGVyID0gY29udmVydGVyKFttaW55LG1heHldLFtseXIucHJvcGVydGllcy5tYXh5LGx5ci5wcm9wZXJ0aWVzLm1pbnldKTtcblxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOidGZWF0dXJlJyxcbiAgICAgIGdlb21ldHJ5OntcbiAgICAgICAgdHlwZTonUG9seWdvbicsXG4gICAgICAgIGNvb3JkaW5hdGVzOnBvaW50cy5tYXAocGFydD0+cGFydC5tYXAocHQ9Plt4Q29udmVydGVyKHB0WzBdKSx5Q29udmVydGVyKHB0WzFdKV0pKVxuICAgICAgfSxcbiAgICAgIHByb3BlcnRpZXM6bHlyLnByb3BlcnRpZXNcbiAgICB9O1xuICB9XG5cbn1cbiJdfQ==