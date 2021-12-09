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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVjdG9yLXRpbGUtbGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtbGVhZmxldC8iLCJzb3VyY2VzIjpbInZlY3Rvci10aWxlLWxheWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFBOUMsOENBQThDO0FBRTlDLHdDQUFvSDtBQUVwSCwrQkFBK0I7QUFDL0IsdURBQStEOzs7QUFHL0QsTUFLYSx3QkFBd0I7SUFlbkMsWUFBb0IsR0FBbUI7UUFBbkIsUUFBRyxHQUFILEdBQUcsQ0FBZ0I7UUFaOUIsY0FBUyxHQUE4QixFQUFFLENBQUM7UUFDekMsb0JBQWUsR0FBRyxJQUFJLG1CQUFZLEVBQU8sQ0FBQztRQUMzQyxZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLFdBQU0sR0FBRyxHQUFHLENBQUM7UUFFZCxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBSWlCLENBQUM7SUFFNUMsUUFBUTtJQUNSLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQSxFQUFFO1lBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sWUFBWSxDQUFDLENBQUs7UUFDeEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBLEVBQUUsQ0FBQSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQy9ELE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENB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LENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUEsRUFBRSxDQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFBLEVBQUUsQ0FBQSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckYsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUEsNEJBQTRCO1FBQ2pFLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFBLDRCQUE0QjtRQUVqRSxNQUFNLFVBQVUsR0FBSSxFQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUEsRUFBRSxDQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFBLEVBQUUsQ0FBQSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckYsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUEsNEJBQTRCO1FBQ2pFLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFBLDRCQUE0QjtRQUVqRSxTQUFTLFNBQVMsQ0FBQyxJQUFhLEVBQUMsRUFBVztZQUMxQyxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUIsT0FBTyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsU0FBUyxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQ3hELENBQUM7UUFFRCxNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksRUFBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEYsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBRXBGLE9BQU87WUFDTCxJQUFJLEVBQUMsU0FBUztZQUNkLFFBQVEsRUFBQztnQkFDUCxJQUFJLEVBQUMsU0FBUztnQkFDZCxXQUFXLEVBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUEsRUFBRSxDQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFBLEVBQUUsQ0FBQSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xGO1lBQ0QsVUFBVSxFQUFDLEdBQUcsQ0FBQyxVQUFVO1NBQzFCLENBQUM7SUFDSixDQUFDOztBQS9HSCw0REFpSEM7Z0dBNUdZLHdCQUF3Qjs2REFBeEIsd0JBQXdCO2tEQUF4Qix3QkFBd0I7Y0FMcEMsZ0JBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUUsRUFBRTtnQkFDWixNQUFNLEVBQUUsRUFBRTthQUNYO2lFQUVVLEdBQUc7a0JBQVgsWUFBSztZQUNHLE1BQU07a0JBQWQsWUFBSztZQUNHLFNBQVM7a0JBQWpCLFlBQUs7WUFDSSxlQUFlO2tCQUF4QixhQUFNO1lBQ0UsT0FBTztrQkFBZixZQUFLO1lBQ0csT0FBTztrQkFBZixZQUFLO1lBQ0csYUFBYTtrQkFBckIsWUFBSztZQUNHLGFBQWE7a0JBQXJCLFlBQUs7WUFDRyxNQUFNO2tCQUFkLFlBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cIi4vbGVhZmxldC52ZWN0b3JncmlkXCIgLz5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGxlYWZsZXQgZnJvbSAnbGVhZmxldCc7XG4vLyBpbXBvcnQgJ2xlYWZsZXQudmVjdG9yZ3JpZCc7XG5pbXBvcnQgeyBlbnN1cmVQYW5lLCBMZWFmbGV0U2VydmljZSB9IGZyb20gJy4vbGVhZmxldC5zZXJ2aWNlJztcbmltcG9ydCB7IFRpbGVkU3VibGF5ZXJEZXNjcmlwdG9yIH0gZnJvbSAnLi9kYXRhJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndmVjdG9yLXRpbGUtbGF5ZXInLFxuICB0ZW1wbGF0ZTogJycsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgVmVjdG9yVGlsZUxheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHVybDogc3RyaW5nO1xuICBASW5wdXQoKSBzdHlsZXM6IGFueTtcbiAgQElucHV0KCkgc3VibGF5ZXJzOiBUaWxlZFN1YmxheWVyRGVzY3JpcHRvcltdID0gW107XG4gIEBPdXRwdXQoKSBmZWF0dXJlU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQElucHV0KCkgbWluWm9vbSA9IDA7XG4gIEBJbnB1dCgpIG1heFpvb20gPSAzMDtcbiAgQElucHV0KCkgbWluTmF0aXZlWm9vbSA9IDExO1xuICBASW5wdXQoKSBtYXhOYXRpdmVab29tID0gMTM7XG4gIEBJbnB1dCgpIHpJbmRleCA9IDEwMDtcblxuICBwcml2YXRlIGRlc3Ryb3llZCA9IGZhbHNlO1xuICBwcml2YXRlIHNlbGVjdGVkRmVhdHVyZTogYW55O1xuICBwcml2YXRlIHZlY3RvckxheWVyOiBMLlZlY3RvckdyaWRMYXllcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTGVhZmxldFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuICAgIHRoaXMubWFwLm1hcC50aGVuKG09PntcbiAgICAgIHRoaXMucmVtb3ZlKG0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGZWF0dXJlSWQoZjphbnkpOiBzdHJpbmcge1xuICAgIGNvbnN0IG1hdGNoID0gdGhpcy5zdWJsYXllcnMuZmluZCh2PT5mLnByb3BlcnRpZXNbdi5rZXlGaWVsZF0pO1xuICAgIHJldHVybiBmLnByb3BlcnRpZXNbbWF0Y2gua2V5RmllbGRdO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmUobTogTC5NYXApOiB2b2lkIHtcbiAgICBpZih0aGlzLnZlY3RvckxheWVyKXtcbiAgICAgIHRoaXMudmVjdG9yTGF5ZXIucmVtb3ZlRnJvbShtKTtcbiAgICAgIHRoaXMudmVjdG9yTGF5ZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLm1hcC5tYXAudGhlbihtPT57XG4gICAgICB0aGlzLnJlbW92ZShtKTtcbiAgICAgIGlmKHRoaXMuZGVzdHJveWVkKXtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYW5lID0gYHZlY3Rvci1wYW5lLSR7dGhpcy56SW5kZXh9YDtcbiAgICAgIGVuc3VyZVBhbmUobSxwYW5lLHRoaXMuekluZGV4KVxuXG4gICAgICB0aGlzLnZlY3RvckxheWVyID0gTC52ZWN0b3JHcmlkLnByb3RvYnVmKHRoaXMudXJsLHtcbiAgICAgICAgcGFuZSxcbiAgICAgICAgbWluWm9vbTp0aGlzLm1pblpvb20sXG4gICAgICAgIG1heFpvb206dGhpcy5tYXhab29tLFxuICAgICAgICBtaW5OYXRpdmVab29tOnRoaXMubWluTmF0aXZlWm9vbSxcbiAgICAgICAgbWF4TmF0aXZlWm9vbTp0aGlzLm1heE5hdGl2ZVpvb20sXG4gICAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgICAgICB2ZWN0b3JUaWxlTGF5ZXJTdHlsZXM6IHRoaXMuc3R5bGVzLFxuICAgICAgICBnZXRGZWF0dXJlSWQ6IChmOmFueSkgPT4gdGhpcy5nZXRGZWF0dXJlSWQoZilcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnZlY3RvckxheWVyLm9uKCdjbGljaycgYXMgYW55LChldmVudCk9PntcbiAgICAgICAgaWYodGhpcy5zZWxlY3RlZEZlYXR1cmUpe1xuICAgICAgICAgIHRoaXMudmVjdG9yTGF5ZXIucmVzZXRGZWF0dXJlU3R5bGUodGhpcy5zZWxlY3RlZEZlYXR1cmUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRGZWF0dXJlID0gdGhpcy5nZXRGZWF0dXJlSWQoZXZlbnQubGF5ZXIpO1xuICAgICAgICB0aGlzLnZlY3RvckxheWVyLnNldEZlYXR1cmVTdHlsZSh0aGlzLnNlbGVjdGVkRmVhdHVyZSwge1xuICAgICAgICAgIHdlaWdodDo1XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGdlb0pTT04gPSB0aGlzLnZlY3RvckdyaWRGZWF0dXJlVG9HZW9KU09OKGV2ZW50LmxheWVyKTtcbiAgICAgICAgdGhpcy5mZWF0dXJlU2VsZWN0ZWQuZW1pdChnZW9KU09OKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy52ZWN0b3JMYXllci5hZGRUbyhtKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZlY3RvckdyaWRGZWF0dXJlVG9HZW9KU09OKGx5cjphbnkpOmFueXtcbiAgICBjb25zdCBwYXJ0czphbnlbXVtdID0gKGx5ci5fcGFydHNbMF0mJmx5ci5fcGFydHNbMF1bMF0pP2x5ci5fcGFydHM6W2x5ci5fcGFydHNdO1xuICAgIGNvbnN0IHBvaW50cyA9IChwYXJ0cyBhcyBhbnlbXSkubWFwKChwYXJ0OmFueVtdKT0+e1xuICAgICAgcmV0dXJuIHBhcnQubWFwKHB0PT4oW3B0LngscHQueV0gYXMgbnVtYmVyW10pKTtcbiAgICB9KTtcbiAgICBjb25zdCBvcmlnaW5hbFhzID0gKFtdIGFzIG51bWJlcltdKS5jb25jYXQoLi4ucG9pbnRzLm1hcChwYXJ0PT5wYXJ0Lm1hcChwdD0+cHRbMF0pKSk7XG4gICAgY29uc3QgbWlueCA9IE1hdGgubWluKC4uLm9yaWdpbmFsWHMpOy8vcG9pbnRzWzBdLm1hcChwdD0+cHRbMF0pKTtcbiAgICBjb25zdCBtYXh4ID0gTWF0aC5tYXgoLi4ub3JpZ2luYWxYcyk7Ly9wb2ludHNbMF0ubWFwKHB0PT5wdFswXSkpO1xuXG4gICAgY29uc3Qgb3JpZ2luYWxZcyA9IChbXSBhcyBudW1iZXJbXSkuY29uY2F0KC4uLnBvaW50cy5tYXAocGFydD0+cGFydC5tYXAocHQ9PnB0WzFdKSkpO1xuICAgIGNvbnN0IG1pbnkgPSBNYXRoLm1pbiguLi5vcmlnaW5hbFlzKTsvL3BvaW50c1swXS5tYXAocHQ9PnB0WzFdKSk7XG4gICAgY29uc3QgbWF4eSA9IE1hdGgubWF4KC4uLm9yaWdpbmFsWXMpOy8vcG9pbnRzWzBdLm1hcChwdD0+cHRbMV0pKTtcblxuICAgIGZ1bmN0aW9uIGNvbnZlcnRlcihmcm9tOm51bWJlcltdLHRvOm51bWJlcltdKTogKChjOm51bWJlcik9Pm51bWJlcikge1xuICAgICAgY29uc3QgZnJvbURlbHRhID0gZnJvbVsxXS1mcm9tWzBdO1xuICAgICAgY29uc3QgdG9EZWx0YSA9IHRvWzFdIC0gdG9bMF07XG4gICAgICByZXR1cm4gKGMpPT50b1swXSArICgoYy1mcm9tWzBdKS9mcm9tRGVsdGEpICogdG9EZWx0YTtcbiAgICB9XG5cbiAgICBjb25zdCB4Q29udmVydGVyID0gY29udmVydGVyKFttaW54LG1heHhdLFtseXIucHJvcGVydGllcy5taW54LGx5ci5wcm9wZXJ0aWVzLm1heHhdKTtcbiAgICBjb25zdCB5Q29udmVydGVyID0gY29udmVydGVyKFttaW55LG1heHldLFtseXIucHJvcGVydGllcy5tYXh5LGx5ci5wcm9wZXJ0aWVzLm1pbnldKTtcblxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOidGZWF0dXJlJyxcbiAgICAgIGdlb21ldHJ5OntcbiAgICAgICAgdHlwZTonUG9seWdvbicsXG4gICAgICAgIGNvb3JkaW5hdGVzOnBvaW50cy5tYXAocGFydD0+cGFydC5tYXAocHQ9Plt4Q29udmVydGVyKHB0WzBdKSx5Q29udmVydGVyKHB0WzFdKV0pKVxuICAgICAgfSxcbiAgICAgIHByb3BlcnRpZXM6bHlyLnByb3BlcnRpZXNcbiAgICB9O1xuICB9XG5cbn1cbiJdfQ==