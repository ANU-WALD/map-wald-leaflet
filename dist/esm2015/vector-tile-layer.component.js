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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9yLXRpbGUtbGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtbGVhZmxldC8iLCJzb3VyY2VzIjpbInZlY3Rvci10aWxlLWxheWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFBOUMsOENBQThDO0FBRTlDLHdDQUFvSDtBQUVwSCwrQkFBK0I7QUFDL0IsdURBQW1EOzs7QUFHbkQsTUFLYSx3QkFBd0I7SUFjbkMsWUFBb0IsR0FBbUI7UUFBbkIsUUFBRyxHQUFILEdBQUcsQ0FBZ0I7UUFYOUIsY0FBUyxHQUE4QixFQUFFLENBQUM7UUFDekMsb0JBQWUsR0FBRyxJQUFJLG1CQUFZLEVBQU8sQ0FBQztRQUMzQyxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBRXBCLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFJaUIsQ0FBQztJQUU1QyxRQUFRO0lBQ1IsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBLEVBQUU7WUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxZQUFZLENBQUMsQ0FBSztRQUN4QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUEsRUFBRSxDQUFBLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDL0QsT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN0QyxD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Q0FBQyxDQUFDO1FBQ3BGLE1BQU0sVUFBVSxHQUFHLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBQyxJQUFJLENBQUMsRUFBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUVwRixPQUFPO1lBQ0wsSUFBSSxFQUFDLFNBQVM7WUFDZCxRQUFRLEVBQUM7Z0JBQ1AsSUFBSSxFQUFDLFNBQVM7Z0JBQ2QsV0FBVyxFQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFBLEVBQUUsQ0FBQSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQSxFQUFFLENBQUEsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNsRjtZQUNELFVBQVUsRUFBQyxHQUFHLENBQUMsVUFBVTtTQUMxQixDQUFDO0lBQ0osQ0FBQzs7QUExR0gsNERBNEdDO2dHQXZHWSx3QkFBd0I7NkRBQXhCLHdCQUF3QjtrREFBeEIsd0JBQXdCO2NBTHBDLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osTUFBTSxFQUFFLEVBQUU7YUFDWDtpRUFFVSxHQUFHO2tCQUFYLFlBQUs7WUFDRyxNQUFNO2tCQUFkLFlBQUs7WUFDRyxTQUFTO2tCQUFqQixZQUFLO1lBQ0ksZUFBZTtrQkFBeEIsYUFBTTtZQUNFLE9BQU87a0JBQWYsWUFBSztZQUNHLE9BQU87a0JBQWYsWUFBSztZQUNHLGFBQWE7a0JBQXJCLFlBQUs7WUFDRyxhQUFhO2tCQUFyQixZQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCIuL2xlYWZsZXQudmVjdG9yZ3JpZFwiIC8+XG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBsZWFmbGV0IGZyb20gJ2xlYWZsZXQnO1xuLy8gaW1wb3J0ICdsZWFmbGV0LnZlY3RvcmdyaWQnO1xuaW1wb3J0IHsgTGVhZmxldFNlcnZpY2UgfSBmcm9tICcuL2xlYWZsZXQuc2VydmljZSc7XG5pbXBvcnQgeyBUaWxlZFN1YmxheWVyRGVzY3JpcHRvciB9IGZyb20gJy4vZGF0YSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ZlY3Rvci10aWxlLWxheWVyJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFZlY3RvclRpbGVMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSB1cmw6IHN0cmluZztcbiAgQElucHV0KCkgc3R5bGVzOiBhbnk7XG4gIEBJbnB1dCgpIHN1YmxheWVyczogVGlsZWRTdWJsYXllckRlc2NyaXB0b3JbXSA9IFtdO1xuICBAT3V0cHV0KCkgZmVhdHVyZVNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBJbnB1dCgpIG1pblpvb20gPSAwO1xuICBASW5wdXQoKSBtYXhab29tID0gMzA7XG4gIEBJbnB1dCgpIG1pbk5hdGl2ZVpvb20gPSAxMTtcbiAgQElucHV0KCkgbWF4TmF0aXZlWm9vbSA9IDEzO1xuXG4gIHByaXZhdGUgZGVzdHJveWVkID0gZmFsc2U7XG4gIHByaXZhdGUgc2VsZWN0ZWRGZWF0dXJlOiBhbnk7XG4gIHByaXZhdGUgdmVjdG9yTGF5ZXI6IEwuVmVjdG9yR3JpZExheWVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBMZWFmbGV0U2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgdGhpcy5tYXAubWFwLnRoZW4obT0+e1xuICAgICAgdGhpcy5yZW1vdmUobSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldEZlYXR1cmVJZChmOmFueSk6IHN0cmluZyB7XG4gICAgY29uc3QgbWF0Y2ggPSB0aGlzLnN1YmxheWVycy5maW5kKHY9PmYucHJvcGVydGllc1t2LmtleUZpZWxkXSk7XG4gICAgcmV0dXJuIGYucHJvcGVydGllc1ttYXRjaC5rZXlGaWVsZF07XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZShtOiBMLk1hcCk6IHZvaWQge1xuICAgIGlmKHRoaXMudmVjdG9yTGF5ZXIpe1xuICAgICAgdGhpcy52ZWN0b3JMYXllci5yZW1vdmVGcm9tKG0pO1xuICAgICAgdGhpcy52ZWN0b3JMYXllciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMubWFwLm1hcC50aGVuKG09PntcbiAgICAgIHRoaXMucmVtb3ZlKG0pO1xuICAgICAgaWYodGhpcy5kZXN0cm95ZWQpe1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMudmVjdG9yTGF5ZXIgPSBMLnZlY3RvckdyaWQucHJvdG9idWYodGhpcy51cmwse1xuICAgICAgICBtaW5ab29tOnRoaXMubWluWm9vbSxcbiAgICAgICAgbWF4Wm9vbTp0aGlzLm1heFpvb20sXG4gICAgICAgIG1pbk5hdGl2ZVpvb206dGhpcy5taW5OYXRpdmVab29tLFxuICAgICAgICBtYXhOYXRpdmVab29tOnRoaXMubWF4TmF0aXZlWm9vbSxcbiAgICAgICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgICAgIHZlY3RvclRpbGVMYXllclN0eWxlczogdGhpcy5zdHlsZXMsXG4gICAgICAgIGdldEZlYXR1cmVJZDogKGY6YW55KSA9PiB0aGlzLmdldEZlYXR1cmVJZChmKVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudmVjdG9yTGF5ZXIub24oJ2NsaWNrJyBhcyBhbnksKGV2ZW50KT0+e1xuICAgICAgICBpZih0aGlzLnNlbGVjdGVkRmVhdHVyZSl7XG4gICAgICAgICAgdGhpcy52ZWN0b3JMYXllci5yZXNldEZlYXR1cmVTdHlsZSh0aGlzLnNlbGVjdGVkRmVhdHVyZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3RlZEZlYXR1cmUgPSB0aGlzLmdldEZlYXR1cmVJZChldmVudC5sYXllcik7XG4gICAgICAgIHRoaXMudmVjdG9yTGF5ZXIuc2V0RmVhdHVyZVN0eWxlKHRoaXMuc2VsZWN0ZWRGZWF0dXJlLCB7XG4gICAgICAgICAgd2VpZ2h0OjVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZ2VvSlNPTiA9IHRoaXMudmVjdG9yR3JpZEZlYXR1cmVUb0dlb0pTT04oZXZlbnQubGF5ZXIpO1xuICAgICAgICB0aGlzLmZlYXR1cmVTZWxlY3RlZC5lbWl0KGdlb0pTT04pO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnZlY3RvckxheWVyLmFkZFRvKG0pO1xuICAgIH0pO1xuICB9XG5cbiAgdmVjdG9yR3JpZEZlYXR1cmVUb0dlb0pTT04obHlyOmFueSk6YW55e1xuICAgIGNvbnN0IHBhcnRzOmFueVtdW10gPSAobHlyLl9wYXJ0c1swXSYmbHlyLl9wYXJ0c1swXVswXSk/bHlyLl9wYXJ0czpbbHlyLl9wYXJ0c107XG4gICAgY29uc3QgcG9pbnRzID0gKHBhcnRzIGFzIGFueVtdKS5tYXAoKHBhcnQ6YW55W10pPT57XG4gICAgICByZXR1cm4gcGFydC5tYXAocHQ9PihbcHQueCxwdC55XSBhcyBudW1iZXJbXSkpO1xuICAgIH0pO1xuICAgIGNvbnN0IG9yaWdpbmFsWHMgPSAoW10gYXMgbnVtYmVyW10pLmNvbmNhdCguLi5wb2ludHMubWFwKHBhcnQ9PnBhcnQubWFwKHB0PT5wdFswXSkpKTtcbiAgICBjb25zdCBtaW54ID0gTWF0aC5taW4oLi4ub3JpZ2luYWxYcyk7Ly9wb2ludHNbMF0ubWFwKHB0PT5wdFswXSkpO1xuICAgIGNvbnN0IG1heHggPSBNYXRoLm1heCguLi5vcmlnaW5hbFhzKTsvL3BvaW50c1swXS5tYXAocHQ9PnB0WzBdKSk7XG5cbiAgICBjb25zdCBvcmlnaW5hbFlzID0gKFtdIGFzIG51bWJlcltdKS5jb25jYXQoLi4ucG9pbnRzLm1hcChwYXJ0PT5wYXJ0Lm1hcChwdD0+cHRbMV0pKSk7XG4gICAgY29uc3QgbWlueSA9IE1hdGgubWluKC4uLm9yaWdpbmFsWXMpOy8vcG9pbnRzWzBdLm1hcChwdD0+cHRbMV0pKTtcbiAgICBjb25zdCBtYXh5ID0gTWF0aC5tYXgoLi4ub3JpZ2luYWxZcyk7Ly9wb2ludHNbMF0ubWFwKHB0PT5wdFsxXSkpO1xuXG4gICAgZnVuY3Rpb24gY29udmVydGVyKGZyb206bnVtYmVyW10sdG86bnVtYmVyW10pOiAoKGM6bnVtYmVyKT0+bnVtYmVyKSB7XG4gICAgICBjb25zdCBmcm9tRGVsdGEgPSBmcm9tWzFdLWZyb21bMF07XG4gICAgICBjb25zdCB0b0RlbHRhID0gdG9bMV0gLSB0b1swXTtcbiAgICAgIHJldHVybiAoYyk9PnRvWzBdICsgKChjLWZyb21bMF0pL2Zyb21EZWx0YSkgKiB0b0RlbHRhO1xuICAgIH1cblxuICAgIGNvbnN0IHhDb252ZXJ0ZXIgPSBjb252ZXJ0ZXIoW21pbngsbWF4eF0sW2x5ci5wcm9wZXJ0aWVzLm1pbngsbHlyLnByb3BlcnRpZXMubWF4eF0pO1xuICAgIGNvbnN0IHlDb252ZXJ0ZXIgPSBjb252ZXJ0ZXIoW21pbnksbWF4eV0sW2x5ci5wcm9wZXJ0aWVzLm1heHksbHlyLnByb3BlcnRpZXMubWlueV0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6J0ZlYXR1cmUnLFxuICAgICAgZ2VvbWV0cnk6e1xuICAgICAgICB0eXBlOidQb2x5Z29uJyxcbiAgICAgICAgY29vcmRpbmF0ZXM6cG9pbnRzLm1hcChwYXJ0PT5wYXJ0Lm1hcChwdD0+W3hDb252ZXJ0ZXIocHRbMF0pLHlDb252ZXJ0ZXIocHRbMV0pXSkpXG4gICAgICB9LFxuICAgICAgcHJvcGVydGllczpseXIucHJvcGVydGllc1xuICAgIH07XG4gIH1cblxufVxuIl19