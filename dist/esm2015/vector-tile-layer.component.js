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
            this.vectorLayer = L.vectorGrid.protobuf(this.url, {
                minZoom: 11,
                interactive: true,
                vectorTileLayerStyles: this.styles,
                maxNativeZoom: 13,
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
VectorTileLayerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: VectorTileLayerComponent, selectors: [["vector-tile-layer"]], inputs: { url: "url", styles: "styles", sublayers: "sublayers" }, outputs: { featureSelected: "featureSelected" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function VectorTileLayerComponent_Template(rf, ctx) { }, encapsulation: 2 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9yLXRpbGUtbGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtbGVhZmxldC8iLCJzb3VyY2VzIjpbInZlY3Rvci10aWxlLWxheWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFBOUMsOENBQThDO0FBRTlDLHdDQUFvSDtBQUVwSCwrQkFBK0I7QUFDL0IsdURBQW1EOzs7QUFHbkQsTUFLYSx3QkFBd0I7SUFVbkMsWUFBb0IsR0FBbUI7UUFBbkIsUUFBRyxHQUFILEdBQUcsQ0FBZ0I7UUFQOUIsY0FBUyxHQUE4QixFQUFFLENBQUM7UUFDekMsb0JBQWUsR0FBRyxJQUFJLG1CQUFZLEVBQU8sQ0FBQztRQUU1QyxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBSWlCLENBQUM7SUFFNUMsUUFBUTtJQUNSLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxFQUFFO1lBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sWUFBWSxDQUFDLENBQUs7UUFDeEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBLEVBQUUsQ0FBQSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQy9ELE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVPLE1BQU0sQ0FBQyxDQUFRO1FBQ3JCLElBQUcsSUFBSSxDQUFDLFdBQVcsRUFBQztZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FB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SUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUEsRUFBRSxDQUFBLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbEY7WUFDRCxVQUFVLEVBQUMsR0FBRyxDQUFDLFVBQVU7U0FDMUIsQ0FBQztJQUNKLENBQUM7O0FBbEdILDREQW9HQztnR0EvRlksd0JBQXdCOzZEQUF4Qix3QkFBd0I7a0RBQXhCLHdCQUF3QjtjQUxwQyxnQkFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRSxFQUFFO2dCQUNaLE1BQU0sRUFBRSxFQUFFO2FBQ1g7aUVBRVUsR0FBRztrQkFBWCxZQUFLO1lBQ0csTUFBTTtrQkFBZCxZQUFLO1lBQ0csU0FBUztrQkFBakIsWUFBSztZQUNJLGVBQWU7a0JBQXhCLGFBQU0iLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cIi4vbGVhZmxldC52ZWN0b3JncmlkXCIgLz5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGxlYWZsZXQgZnJvbSAnbGVhZmxldCc7XG4vLyBpbXBvcnQgJ2xlYWZsZXQudmVjdG9yZ3JpZCc7XG5pbXBvcnQgeyBMZWFmbGV0U2VydmljZSB9IGZyb20gJy4vbGVhZmxldC5zZXJ2aWNlJztcbmltcG9ydCB7IFRpbGVkU3VibGF5ZXJEZXNjcmlwdG9yIH0gZnJvbSAnLi9kYXRhJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndmVjdG9yLXRpbGUtbGF5ZXInLFxuICB0ZW1wbGF0ZTogJycsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgVmVjdG9yVGlsZUxheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHVybDogc3RyaW5nO1xuICBASW5wdXQoKSBzdHlsZXM6IGFueTtcbiAgQElucHV0KCkgc3VibGF5ZXJzOiBUaWxlZFN1YmxheWVyRGVzY3JpcHRvcltdID0gW107XG4gIEBPdXRwdXQoKSBmZWF0dXJlU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwcml2YXRlIGRlc3Ryb3llZCA9IGZhbHNlO1xuICBwcml2YXRlIHNlbGVjdGVkRmVhdHVyZTogYW55O1xuICBwcml2YXRlIHZlY3RvckxheWVyOiBMLlZlY3RvckdyaWRMYXllcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTGVhZmxldFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuICAgIHRoaXMubWFwLm1hcC50aGVuKG09PntcbiAgICAgIHRoaXMucmVtb3ZlKG0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGZWF0dXJlSWQoZjphbnkpOiBzdHJpbmcge1xuICAgIGNvbnN0IG1hdGNoID0gdGhpcy5zdWJsYXllcnMuZmluZCh2PT5mLnByb3BlcnRpZXNbdi5rZXlGaWVsZF0pO1xuICAgIHJldHVybiBmLnByb3BlcnRpZXNbbWF0Y2gua2V5RmllbGRdO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmUobTogTC5NYXApOiB2b2lkIHtcbiAgICBpZih0aGlzLnZlY3RvckxheWVyKXtcbiAgICAgIHRoaXMudmVjdG9yTGF5ZXIucmVtb3ZlRnJvbShtKTtcbiAgICAgIHRoaXMudmVjdG9yTGF5ZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLm1hcC5tYXAudGhlbihtPT57XG4gICAgICB0aGlzLnJlbW92ZShtKTtcbiAgICAgIGlmKHRoaXMuZGVzdHJveWVkKXtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnZlY3RvckxheWVyID0gTC52ZWN0b3JHcmlkLnByb3RvYnVmKHRoaXMudXJsLHtcbiAgICAgICAgbWluWm9vbToxMSxcbiAgICAgICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgICAgIHZlY3RvclRpbGVMYXllclN0eWxlczogdGhpcy5zdHlsZXMsXG4gICAgICAgIG1heE5hdGl2ZVpvb206MTMsXG4gICAgICAgIGdldEZlYXR1cmVJZDogKGY6YW55KSA9PiB0aGlzLmdldEZlYXR1cmVJZChmKVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudmVjdG9yTGF5ZXIub24oJ2NsaWNrJyBhcyBhbnksKGV2ZW50KT0+e1xuICAgICAgICBpZih0aGlzLnNlbGVjdGVkRmVhdHVyZSl7XG4gICAgICAgICAgdGhpcy52ZWN0b3JMYXllci5yZXNldEZlYXR1cmVTdHlsZSh0aGlzLnNlbGVjdGVkRmVhdHVyZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3RlZEZlYXR1cmUgPSB0aGlzLmdldEZlYXR1cmVJZChldmVudC5sYXllcik7XG4gICAgICAgIHRoaXMudmVjdG9yTGF5ZXIuc2V0RmVhdHVyZVN0eWxlKHRoaXMuc2VsZWN0ZWRGZWF0dXJlLCB7XG4gICAgICAgICAgd2VpZ2h0OjVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZ2VvSlNPTiA9IHRoaXMudmVjdG9yR3JpZEZlYXR1cmVUb0dlb0pTT04oZXZlbnQubGF5ZXIpO1xuICAgICAgICB0aGlzLmZlYXR1cmVTZWxlY3RlZC5lbWl0KGdlb0pTT04pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnZlY3RvckxheWVyLmFkZFRvKG0pO1xuICAgIH0pO1xuICB9XG5cbiAgdmVjdG9yR3JpZEZlYXR1cmVUb0dlb0pTT04obHlyOmFueSk6YW55e1xuICAgIGNvbnN0IHBhcnRzOmFueVtdW10gPSAobHlyLl9wYXJ0c1swXSYmbHlyLl9wYXJ0c1swXVswXSk/bHlyLl9wYXJ0czpbbHlyLl9wYXJ0c107XG4gICAgY29uc3QgcG9pbnRzID0gKHBhcnRzIGFzIGFueVtdKS5tYXAoKHBhcnQ6YW55W10pPT57XG4gICAgICByZXR1cm4gcGFydC5tYXAocHQ9PihbcHQueCxwdC55XSBhcyBudW1iZXJbXSkpO1xuICAgIH0pO1xuICAgIGNvbnN0IG1pbnggPSBNYXRoLm1pbiguLi5wb2ludHNbMF0ubWFwKHB0PT5wdFswXSkpO1xuICAgIGNvbnN0IG1heHggPSBNYXRoLm1heCguLi5wb2ludHNbMF0ubWFwKHB0PT5wdFswXSkpO1xuXG4gICAgY29uc3QgbWlueSA9IE1hdGgubWluKC4uLnBvaW50c1swXS5tYXAocHQ9PnB0WzFdKSk7XG4gICAgY29uc3QgbWF4eSA9IE1hdGgubWF4KC4uLnBvaW50c1swXS5tYXAocHQ9PnB0WzFdKSk7XG5cbiAgICBmdW5jdGlvbiBjb252ZXJ0ZXIoZnJvbTpudW1iZXJbXSx0bzpudW1iZXJbXSk6ICgoYzpudW1iZXIpPT5udW1iZXIpIHtcbiAgICAgIGNvbnN0IGZyb21EZWx0YSA9IGZyb21bMV0tZnJvbVswXTtcbiAgICAgIGNvbnN0IHRvRGVsdGEgPSB0b1sxXSAtIHRvWzBdO1xuICAgICAgcmV0dXJuIChjKT0+dG9bMF0gKyAoKGMtZnJvbVswXSkvZnJvbURlbHRhKSAqIHRvRGVsdGE7XG4gICAgfVxuXG4gICAgY29uc3QgeENvbnZlcnRlciA9IGNvbnZlcnRlcihbbWlueCxtYXh4XSxbbHlyLnByb3BlcnRpZXMubWlueCxseXIucHJvcGVydGllcy5tYXh4XSk7XG4gICAgY29uc3QgeUNvbnZlcnRlciA9IGNvbnZlcnRlcihbbWlueSxtYXh5XSxbbHlyLnByb3BlcnRpZXMubWF4eSxseXIucHJvcGVydGllcy5taW55XSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTonRmVhdHVyZScsXG4gICAgICBnZW9tZXRyeTp7XG4gICAgICAgIHR5cGU6J1BvbHlnb24nLFxuICAgICAgICBjb29yZGluYXRlczpwb2ludHMubWFwKHBhcnQ9PnBhcnQubWFwKHB0PT5beENvbnZlcnRlcihwdFswXSkseUNvbnZlcnRlcihwdFsxXSldKSlcbiAgICAgIH0sXG4gICAgICBwcm9wZXJ0aWVzOmx5ci5wcm9wZXJ0aWVzXG4gICAgfTtcbiAgfVxuXG59XG4iXX0=