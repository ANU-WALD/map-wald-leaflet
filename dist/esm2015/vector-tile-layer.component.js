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
        this.zIndex = 100;
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
            const pane = `vector-pane-${this.zIndex}`;
            leaflet_service_1.ensurePane(m, pane, this.zIndex);
            this.vectorLayer = L.vectorGrid.protobuf(this.url, {
                pane,
                minZoom: this.minZoom,
                maxZoom: this.maxZoom,
                minNativeZoom: this.minNativeZoom,
                maxNativeZoom: this.maxNativeZoom,
                interactive: true,
                vectorTileLayerStyles: this.styles,
                getFeatureId: (f) => this.getFeatureId(f)
            });
            if (this.featureSelected.observers.length) {
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
            }
            this.vectorLayer.addTo(m);
        });
    }
    vectorGridFeatureToGeoJSON(lyr) {
        const parts = (lyr._parts[0] && lyr._parts[0][0]) ? lyr._parts : [lyr._parts];
        const points = parts.map((part) => {
            return part.map(pt => [pt.x, pt.y]);
        });
        const originalXs = [].concat(...points.map(part => part.map(pt => pt[0])));
        const minx = Math.min(...originalXs); //points[0].map(pt=>pt[0]));
        const maxx = Math.max(...originalXs); //points[0].map(pt=>pt[0]));
        const originalYs = [].concat(...points.map(part => part.map(pt => pt[1])));
        const miny = Math.min(...originalYs); //points[0].map(pt=>pt[1]));
        const maxy = Math.max(...originalYs); //points[0].map(pt=>pt[1]));
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
VectorTileLayerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: VectorTileLayerComponent, selectors: [["vector-tile-layer"]], inputs: { url: "url", styles: "styles", sublayers: "sublayers", minZoom: "minZoom", maxZoom: "maxZoom", minNativeZoom: "minNativeZoom", maxNativeZoom: "maxNativeZoom", zIndex: "zIndex" }, outputs: { featureSelected: "featureSelected" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function VectorTileLayerComponent_Template(rf, ctx) { }, encapsulation: 2 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9yLXRpbGUtbGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtbGVhZmxldC8iLCJzb3VyY2VzIjpbInZlY3Rvci10aWxlLWxheWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFBOUMsOENBQThDO0FBRTlDLHdDQUFvSDtBQUVwSCwrQkFBK0I7QUFDL0IsdURBQStEOzs7QUFHL0QsTUFLYSx3QkFBd0I7SUFlbkMsWUFBb0IsR0FBbUI7UUFBbkIsUUFBRyxHQUFILEdBQUcsQ0FBZ0I7UUFaOUIsY0FBUyxHQUE4QixFQUFFLENBQUM7UUFDekMsb0JBQWUsR0FBRyxJQUFJLG1CQUFZLEVBQU8sQ0FBQztRQUMzQyxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFFZCxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBSWlCLENBQUM7SUFFNUMsUUFBUTtJQUNSLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxFQUFFO1lBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sWUFBWSxDQUFDLENBQUs7UUFDeEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBLEVBQUUsQ0FBQSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQy9ELE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENB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QUNFLE9BQU87a0JBQWYsWUFBSztZQUNHLE9BQU87a0JBQWYsWUFBSztZQUNHLGFBQWE7a0JBQXJCLFlBQUs7WUFDRyxhQUFhO2tCQUFyQixZQUFLO1lBQ0csTUFBTTtrQkFBZCxZQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCIuL2xlYWZsZXQudmVjdG9yZ3JpZFwiIC8+XG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBsZWFmbGV0IGZyb20gJ2xlYWZsZXQnO1xuLy8gaW1wb3J0ICdsZWFmbGV0LnZlY3RvcmdyaWQnO1xuaW1wb3J0IHsgZW5zdXJlUGFuZSwgTGVhZmxldFNlcnZpY2UgfSBmcm9tICcuL2xlYWZsZXQuc2VydmljZSc7XG5pbXBvcnQgeyBUaWxlZFN1YmxheWVyRGVzY3JpcHRvciB9IGZyb20gJy4vZGF0YSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ZlY3Rvci10aWxlLWxheWVyJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFZlY3RvclRpbGVMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSB1cmw6IHN0cmluZztcbiAgQElucHV0KCkgc3R5bGVzOiBhbnk7XG4gIEBJbnB1dCgpIHN1YmxheWVyczogVGlsZWRTdWJsYXllckRlc2NyaXB0b3JbXSA9IFtdO1xuICBAT3V0cHV0KCkgZmVhdHVyZVNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBJbnB1dCgpIG1pblpvb20gPSAwO1xuICBASW5wdXQoKSBtYXhab29tID0gMzA7XG4gIEBJbnB1dCgpIG1pbk5hdGl2ZVpvb20gPSAxMTtcbiAgQElucHV0KCkgbWF4TmF0aXZlWm9vbSA9IDEzO1xuICBASW5wdXQoKSB6SW5kZXggPSAxMDA7XG5cbiAgcHJpdmF0ZSBkZXN0cm95ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzZWxlY3RlZEZlYXR1cmU6IGFueTtcbiAgcHJpdmF0ZSB2ZWN0b3JMYXllcjogTC5WZWN0b3JHcmlkTGF5ZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IExlYWZsZXRTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICB0aGlzLm1hcC5tYXAudGhlbihtPT57XG4gICAgICB0aGlzLnJlbW92ZShtKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RmVhdHVyZUlkKGY6YW55KTogc3RyaW5nIHtcbiAgICBjb25zdCBtYXRjaCA9IHRoaXMuc3VibGF5ZXJzLmZpbmQodj0+Zi5wcm9wZXJ0aWVzW3Yua2V5RmllbGRdKTtcbiAgICByZXR1cm4gZi5wcm9wZXJ0aWVzW21hdGNoLmtleUZpZWxkXTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlKG06IEwuTWFwKTogdm9pZCB7XG4gICAgaWYodGhpcy52ZWN0b3JMYXllcil7XG4gICAgICB0aGlzLnZlY3RvckxheWVyLnJlbW92ZUZyb20obSk7XG4gICAgICB0aGlzLnZlY3RvckxheWVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5tYXAubWFwLnRoZW4obT0+e1xuICAgICAgdGhpcy5yZW1vdmUobSk7XG4gICAgICBpZih0aGlzLmRlc3Ryb3llZCl7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFuZSA9IGB2ZWN0b3ItcGFuZS0ke3RoaXMuekluZGV4fWA7XG4gICAgICBlbnN1cmVQYW5lKG0scGFuZSx0aGlzLnpJbmRleClcblxuICAgICAgdGhpcy52ZWN0b3JMYXllciA9IEwudmVjdG9yR3JpZC5wcm90b2J1Zih0aGlzLnVybCx7XG4gICAgICAgIHBhbmUsXG4gICAgICAgIG1pblpvb206dGhpcy5taW5ab29tLFxuICAgICAgICBtYXhab29tOnRoaXMubWF4Wm9vbSxcbiAgICAgICAgbWluTmF0aXZlWm9vbTp0aGlzLm1pbk5hdGl2ZVpvb20sXG4gICAgICAgIG1heE5hdGl2ZVpvb206dGhpcy5tYXhOYXRpdmVab29tLFxuICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgdmVjdG9yVGlsZUxheWVyU3R5bGVzOiB0aGlzLnN0eWxlcyxcbiAgICAgICAgZ2V0RmVhdHVyZUlkOiAoZjphbnkpID0+IHRoaXMuZ2V0RmVhdHVyZUlkKGYpXG4gICAgICB9KTtcblxuICAgICAgaWYodGhpcy5mZWF0dXJlU2VsZWN0ZWQub2JzZXJ2ZXJzLmxlbmd0aCl7XG4gICAgICAgIHRoaXMudmVjdG9yTGF5ZXIub24oJ2NsaWNrJyBhcyBhbnksKGV2ZW50KT0+e1xuICAgICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRGZWF0dXJlKXtcbiAgICAgICAgICAgIHRoaXMudmVjdG9yTGF5ZXIucmVzZXRGZWF0dXJlU3R5bGUodGhpcy5zZWxlY3RlZEZlYXR1cmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnNlbGVjdGVkRmVhdHVyZSA9IHRoaXMuZ2V0RmVhdHVyZUlkKGV2ZW50LmxheWVyKTtcbiAgICAgICAgICB0aGlzLnZlY3RvckxheWVyLnNldEZlYXR1cmVTdHlsZSh0aGlzLnNlbGVjdGVkRmVhdHVyZSwge1xuICAgICAgICAgICAgd2VpZ2h0OjVcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNvbnN0IGdlb0pTT04gPSB0aGlzLnZlY3RvckdyaWRGZWF0dXJlVG9HZW9KU09OKGV2ZW50LmxheWVyKTtcbiAgICAgICAgICB0aGlzLmZlYXR1cmVTZWxlY3RlZC5lbWl0KGdlb0pTT04pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMudmVjdG9yTGF5ZXIuYWRkVG8obSk7XG4gICAgfSk7XG4gIH1cblxuICB2ZWN0b3JHcmlkRmVhdHVyZVRvR2VvSlNPTihseXI6YW55KTphbnl7XG4gICAgY29uc3QgcGFydHM6YW55W11bXSA9IChseXIuX3BhcnRzWzBdJiZseXIuX3BhcnRzWzBdWzBdKT9seXIuX3BhcnRzOltseXIuX3BhcnRzXTtcbiAgICBjb25zdCBwb2ludHMgPSAocGFydHMgYXMgYW55W10pLm1hcCgocGFydDphbnlbXSk9PntcbiAgICAgIHJldHVybiBwYXJ0Lm1hcChwdD0+KFtwdC54LHB0LnldIGFzIG51bWJlcltdKSk7XG4gICAgfSk7XG4gICAgY29uc3Qgb3JpZ2luYWxYcyA9IChbXSBhcyBudW1iZXJbXSkuY29uY2F0KC4uLnBvaW50cy5tYXAocGFydD0+cGFydC5tYXAocHQ9PnB0WzBdKSkpO1xuICAgIGNvbnN0IG1pbnggPSBNYXRoLm1pbiguLi5vcmlnaW5hbFhzKTsvL3BvaW50c1swXS5tYXAocHQ9PnB0WzBdKSk7XG4gICAgY29uc3QgbWF4eCA9IE1hdGgubWF4KC4uLm9yaWdpbmFsWHMpOy8vcG9pbnRzWzBdLm1hcChwdD0+cHRbMF0pKTtcblxuICAgIGNvbnN0IG9yaWdpbmFsWXMgPSAoW10gYXMgbnVtYmVyW10pLmNvbmNhdCguLi5wb2ludHMubWFwKHBhcnQ9PnBhcnQubWFwKHB0PT5wdFsxXSkpKTtcbiAgICBjb25zdCBtaW55ID0gTWF0aC5taW4oLi4ub3JpZ2luYWxZcyk7Ly9wb2ludHNbMF0ubWFwKHB0PT5wdFsxXSkpO1xuICAgIGNvbnN0IG1heHkgPSBNYXRoLm1heCguLi5vcmlnaW5hbFlzKTsvL3BvaW50c1swXS5tYXAocHQ9PnB0WzFdKSk7XG5cbiAgICBmdW5jdGlvbiBjb252ZXJ0ZXIoZnJvbTpudW1iZXJbXSx0bzpudW1iZXJbXSk6ICgoYzpudW1iZXIpPT5udW1iZXIpIHtcbiAgICAgIGNvbnN0IGZyb21EZWx0YSA9IGZyb21bMV0tZnJvbVswXTtcbiAgICAgIGNvbnN0IHRvRGVsdGEgPSB0b1sxXSAtIHRvWzBdO1xuICAgICAgcmV0dXJuIChjKT0+dG9bMF0gKyAoKGMtZnJvbVswXSkvZnJvbURlbHRhKSAqIHRvRGVsdGE7XG4gICAgfVxuXG4gICAgY29uc3QgeENvbnZlcnRlciA9IGNvbnZlcnRlcihbbWlueCxtYXh4XSxbbHlyLnByb3BlcnRpZXMubWlueCxseXIucHJvcGVydGllcy5tYXh4XSk7XG4gICAgY29uc3QgeUNvbnZlcnRlciA9IGNvbnZlcnRlcihbbWlueSxtYXh5XSxbbHlyLnByb3BlcnRpZXMubWF4eSxseXIucHJvcGVydGllcy5taW55XSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTonRmVhdHVyZScsXG4gICAgICBnZW9tZXRyeTp7XG4gICAgICAgIHR5cGU6J1BvbHlnb24nLFxuICAgICAgICBjb29yZGluYXRlczpwb2ludHMubWFwKHBhcnQ9PnBhcnQubWFwKHB0PT5beENvbnZlcnRlcihwdFswXSkseUNvbnZlcnRlcihwdFsxXSldKSlcbiAgICAgIH0sXG4gICAgICBwcm9wZXJ0aWVzOmx5ci5wcm9wZXJ0aWVzXG4gICAgfTtcbiAgfVxuXG59XG4iXX0=