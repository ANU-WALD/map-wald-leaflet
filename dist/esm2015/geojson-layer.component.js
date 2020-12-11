"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeojsonLayerComponent = exports.PointMode = void 0;
const core_1 = require("@angular/core");
const L = require("leaflet");
require("leaflet.vectorgrid");
const leaflet_service_1 = require("./leaflet.service");
const http_1 = require("@angular/common/http");
const i0 = require("@angular/core");
const i1 = require("@angular/common/http");
const i2 = require("./leaflet.service");
const STYLES = {
    fillOpacity: 0.0,
    weight: 1.0
};
var PointMode;
(function (PointMode) {
    PointMode[PointMode["default"] = 0] = "default";
    PointMode[PointMode["circle"] = 1] = "circle";
})(PointMode = exports.PointMode || (exports.PointMode = {}));
class GeojsonLayerComponent {
    // private data: any;
    constructor(http, map) {
        this.http = http;
        this.map = map;
        // @Input() styles: any;
        this.sublayers = [];
        this.pointMode = PointMode.default;
        this.style = {};
        // @Input() idColumn = 'id';
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
    remove(m) {
        if (this.vectorLayer) {
            this.vectorLayer.removeFrom(m);
            this.vectorLayer = null;
        }
    }
    ngOnChanges(changes) {
        if (changes.url) {
            this.downloadLayer(changes.url.currentValue);
        }
        else if (changes.features || changes.pointMode) {
            this.makeLayer();
        }
        if (changes.style) {
            console.log(this.style);
        }
    }
    downloadLayer(url) {
        this.http.get(this.url).subscribe((data) => {
            if (url !== this.url) {
                // out of date!
                return;
            }
            this.features = data;
            this.makeLayer();
        });
    }
    makeLayer() {
        this.map.map.then(m => {
            this.remove(m);
            if (this.destroyed) {
                return;
            }
            const style = (f) => {
                const styles = Object.assign({}, STYLES);
                Object.keys(this.style).forEach(k => {
                    const val = this.style[k];
                    if (val.getStyleValue) {
                        styles[k] = val.getStyleValue(f);
                    }
                    else {
                        styles[k] = val;
                    }
                });
                return styles;
            };
            const options = {
                // interactive: true
                style: style
            };
            if (this.pointMode === PointMode.circle) {
                options.pointToLayer = (feature, latlng) => {
                    let radius = 3;
                    if (this.style && this.style.radius) {
                        if (this.style.radius.getStyleValue) {
                            radius = this.style.radius.getStyleValue(feature);
                        }
                        else {
                            radius = this.style.radius;
                        }
                    }
                    return L.circleMarker(latlng, { radius: radius });
                };
            }
            this.vectorLayer = L.geoJSON(this.features, options);
            this.vectorLayer.on('click', (event) => {
                if (this.selectedFeature) {
                    this.vectorLayer.resetStyle(this.selectedFeature);
                    // resetFeatureStyle(this.selectedFeature);
                }
                this.selectedFeature = event.layer;
                this.selectedFeature.setStyle({
                    weight: 5
                });
                this.featureSelected.emit(this.selectedFeature.feature);
            });
            this.vectorLayer.addTo(m);
        });
    }
}
exports.GeojsonLayerComponent = GeojsonLayerComponent;
GeojsonLayerComponent.ɵfac = function GeojsonLayerComponent_Factory(t) { return new (t || GeojsonLayerComponent)(i0.ɵɵdirectiveInject(i1.HttpClient), i0.ɵɵdirectiveInject(i2.LeafletService)); };
GeojsonLayerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GeojsonLayerComponent, selectors: [["geojson-layer"]], inputs: { url: "url", features: "features", sublayers: "sublayers", pointMode: "pointMode", style: "style" }, outputs: { featureSelected: "featureSelected" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function GeojsonLayerComponent_Template(rf, ctx) { }, styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GeojsonLayerComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'geojson-layer',
                template: '',
                styles: ['']
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.LeafletService }]; }, { url: [{
            type: core_1.Input
        }], features: [{
            type: core_1.Input
        }], sublayers: [{
            type: core_1.Input
        }], pointMode: [{
            type: core_1.Input
        }], style: [{
            type: core_1.Input
        }], featureSelected: [{
            type: core_1.Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvanNvbi1sYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC1sZWFmbGV0LyIsInNvdXJjZXMiOlsiZ2VvanNvbi1sYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQW9IO0FBQ3BILDZCQUE2QjtBQUM3Qiw4QkFBNEI7QUFDNUIsdURBQW1EO0FBRW5ELCtDQUFrRDs7OztBQUlsRCxNQUFNLE1BQU0sR0FBRztJQUNiLFdBQVcsRUFBRSxHQUFHO0lBQ2hCLE1BQU0sRUFBRSxHQUFHO0NBQ1osQ0FBQztBQUVGLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQiwrQ0FBTyxDQUFBO0lBQ1AsNkNBQU0sQ0FBQTtBQUNSLENBQUMsRUFIVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUdwQjtBQUVELE1BS2EscUJBQXFCO0lBYWhDLHFCQUFxQjtJQUVyQixZQUFvQixJQUFnQixFQUFVLEdBQW1CO1FBQTdDLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFnQjtRQVpqRSx3QkFBd0I7UUFDZixjQUFTLEdBQThCLEVBQUUsQ0FBQztRQUMxQyxjQUFTLEdBQWEsU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUN4QyxVQUFLLEdBQThCLEVBQUUsQ0FBQztRQUMvQyw0QkFBNEI7UUFDbEIsb0JBQWUsR0FBRyxJQUFJLG1CQUFZLEVBQU8sQ0FBQztRQUU1QyxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBTTFCLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxNQUFNLENBQUMsQ0FBUTtRQUNyQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUNmLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM5QzthQUFNLElBQUcsT0FBTyxDQUFDLFFBQVEsSUFBRSxPQUFPLENBQUMsU0FBUyxFQUFDO1lBQzVDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQjtRQUVELElBQUcsT0FBTyxDQUFDLEtBQUssRUFBQztZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVELGFBQWEsQ0FBQyxHQUFVO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtZQUM5QyxJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNwQixlQUFlO2dCQUNmLE9BQU87YUFDUjtZQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBRXJCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xCLE9BQU87YUFDUjtZQUVELE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBTSxFQUFDLEVBQUU7Z0JBQ3RCLE1BQU0sTUFBTSxHQUF1QixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBQyxNQUFNLENBQUMsQ0FBQztnQkFDNUQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSxFQUFFO29CQUNqQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxQixJQUFJLEdBQXdCLENBQUMsYUFBYSxFQUFFO3dCQUMxQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUksR0FBd0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3hEO3lCQUFNO3dCQUNMLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7cUJBQ2pCO2dCQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNILE9BQU8sTUFBTSxDQUFDO1lBQ2hCLENBQUMsQ0FBQztZQUVGLE1BQU0sT0FBTyxHQUFvQjtnQkFDL0Isb0JBQW9CO2dCQUNwQixLQUFLLEVBQUUsS0FBSzthQUNiLENBQUM7WUFFRixJQUFHLElBQUksQ0FBQyxTQUFTLEtBQUcsU0FBUyxDQUFDLE1BQU0sRUFBQztnQkFDbkMsT0FBTyxDQUFDLFlBQVksR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtvQkFDekMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUNmLElBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTt3QkFDbEMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQThCLENBQUMsYUFBYSxFQUFDOzRCQUMxRCxNQUFNLEdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUE4QixDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzt5QkFDNUU7NkJBQU07NEJBQ0wsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBZ0IsQ0FBQzt5QkFDdEM7cUJBQ0Y7b0JBQ0QsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBQyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDO2dCQUNoRCxDQUFDLENBQUM7YUFDSDtZQUVELElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBRXJELElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLE9BQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUM1QyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7b0JBQ3hCLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDbEQsMkNBQTJDO2lCQUM1QztnQkFDRCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7Z0JBQ25DLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDO29CQUM1QixNQUFNLEVBQUMsQ0FBQztpQkFDVCxDQUFDLENBQUM7Z0JBRUgsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMxRCxDQUFDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7QUF2SEgsc0RBd0hDOzBGQW5IWSxxQkFBcUI7MERBQXJCLHFCQUFxQjtrREFBckIscUJBQXFCO2NBTGpDLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSxFQUFFO2dCQUNaLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNiOzBGQUVVLEdBQUc7a0JBQVgsWUFBSztZQUNHLFFBQVE7a0JBQWhCLFlBQUs7WUFFRyxTQUFTO2tCQUFqQixZQUFLO1lBQ0csU0FBUztrQkFBakIsWUFBSztZQUNHLEtBQUs7a0JBQWIsWUFBSztZQUVJLGVBQWU7a0JBQXhCLGFBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgTCBmcm9tICdsZWFmbGV0JztcbmltcG9ydCAnbGVhZmxldC52ZWN0b3JncmlkJztcbmltcG9ydCB7IExlYWZsZXRTZXJ2aWNlIH0gZnJvbSAnLi9sZWFmbGV0LnNlcnZpY2UnO1xuaW1wb3J0IHsgVGlsZWRTdWJsYXllckRlc2NyaXB0b3IgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFNjYWxlZFN0eWxlLCBTdHlsZVZhbHVlIH0gZnJvbSAnbWFwLXdhbGQnO1xuaW1wb3J0IHsgRmVhdHVyZSB9IGZyb20gJ2dlb2pzb24nO1xuXG5jb25zdCBTVFlMRVMgPSB7XG4gIGZpbGxPcGFjaXR5OiAwLjAsXG4gIHdlaWdodDogMS4wXG59O1xuXG5leHBvcnQgZW51bSBQb2ludE1vZGUge1xuICBkZWZhdWx0LFxuICBjaXJjbGVcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2VvanNvbi1sYXllcicsXG4gIHRlbXBsYXRlOiAnJyxcbiAgc3R5bGVzOiBbJyddXG59KVxuZXhwb3J0IGNsYXNzIEdlb2pzb25MYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSB1cmw6IHN0cmluZztcbiAgQElucHV0KCkgZmVhdHVyZXM6IGFueTtcbiAgLy8gQElucHV0KCkgc3R5bGVzOiBhbnk7XG4gIEBJbnB1dCgpIHN1YmxheWVyczogVGlsZWRTdWJsYXllckRlc2NyaXB0b3JbXSA9IFtdO1xuICBASW5wdXQoKSBwb2ludE1vZGU6UG9pbnRNb2RlID0gUG9pbnRNb2RlLmRlZmF1bHQ7XG4gIEBJbnB1dCgpIHN0eWxlOiB7W2tleTpzdHJpbmddOlN0eWxlVmFsdWV9ID0ge307XG4gIC8vIEBJbnB1dCgpIGlkQ29sdW1uID0gJ2lkJztcbiAgQE91dHB1dCgpIGZlYXR1cmVTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHByaXZhdGUgZGVzdHJveWVkID0gZmFsc2U7XG4gIHByaXZhdGUgc2VsZWN0ZWRGZWF0dXJlOiBhbnk7XG4gIHByaXZhdGUgdmVjdG9yTGF5ZXI6IEwuR2VvSlNPTjtcbiAgLy8gcHJpdmF0ZSBkYXRhOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIG1hcDogTGVhZmxldFNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuICAgIHRoaXMubWFwLm1hcC50aGVuKG0gPT4ge1xuICAgICAgdGhpcy5yZW1vdmUobSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZShtOiBMLk1hcCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZlY3RvckxheWVyKSB7XG4gICAgICB0aGlzLnZlY3RvckxheWVyLnJlbW92ZUZyb20obSk7XG4gICAgICB0aGlzLnZlY3RvckxheWVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMudXJsKSB7XG4gICAgICB0aGlzLmRvd25sb2FkTGF5ZXIoY2hhbmdlcy51cmwuY3VycmVudFZhbHVlKTtcbiAgICB9IGVsc2UgaWYoY2hhbmdlcy5mZWF0dXJlc3x8Y2hhbmdlcy5wb2ludE1vZGUpe1xuICAgICAgdGhpcy5tYWtlTGF5ZXIoKTtcbiAgICB9XG5cbiAgICBpZihjaGFuZ2VzLnN0eWxlKXtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3R5bGUpO1xuICAgIH1cbiAgfVxuXG4gIGRvd25sb2FkTGF5ZXIodXJsOnN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuaHR0cC5nZXQodGhpcy51cmwpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICBpZiAodXJsICE9PSB0aGlzLnVybCkge1xuICAgICAgICAvLyBvdXQgb2YgZGF0ZSFcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5mZWF0dXJlcyA9IGRhdGE7XG5cbiAgICAgIHRoaXMubWFrZUxheWVyKCk7XG4gICAgfSk7XG4gIH1cblxuICBtYWtlTGF5ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5tYXAubWFwLnRoZW4obSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZShtKTtcbiAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHN0eWxlID0gKGY6IGFueSk9PntcbiAgICAgICAgY29uc3Qgc3R5bGVzOiB7W2tleTpzdHJpbmddOmFueX0gPSBPYmplY3QuYXNzaWduKHt9LFNUWUxFUyk7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuc3R5bGUpLmZvckVhY2goaz0+e1xuICAgICAgICAgIGNvbnN0IHZhbCA9IHRoaXMuc3R5bGVba107XG4gICAgICAgICAgaWYoKHZhbCBhcyBTY2FsZWRTdHlsZTxhbnk+KS5nZXRTdHlsZVZhbHVlKSB7XG4gICAgICAgICAgICBzdHlsZXNba10gPSAodmFsIGFzIFNjYWxlZFN0eWxlPGFueT4pLmdldFN0eWxlVmFsdWUoZik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0eWxlc1trXSA9IHZhbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3R5bGVzO1xuICAgICAgfTtcblxuICAgICAgY29uc3Qgb3B0aW9uczpMLkdlb0pTT05PcHRpb25zID0ge1xuICAgICAgICAvLyBpbnRlcmFjdGl2ZTogdHJ1ZVxuICAgICAgICBzdHlsZTogc3R5bGVcbiAgICAgIH07XG5cbiAgICAgIGlmKHRoaXMucG9pbnRNb2RlPT09UG9pbnRNb2RlLmNpcmNsZSl7XG4gICAgICAgIG9wdGlvbnMucG9pbnRUb0xheWVyID0gKGZlYXR1cmUsIGxhdGxuZykgPT4ge1xuICAgICAgICAgIGxldCByYWRpdXMgPSAzO1xuICAgICAgICAgIGlmKHRoaXMuc3R5bGUgJiYgdGhpcy5zdHlsZS5yYWRpdXMpIHtcbiAgICAgICAgICAgIGlmKCh0aGlzLnN0eWxlLnJhZGl1cyBhcyBTY2FsZWRTdHlsZTxudW1iZXI+KS5nZXRTdHlsZVZhbHVlKXtcbiAgICAgICAgICAgICAgcmFkaXVzID0gKHRoaXMuc3R5bGUucmFkaXVzIGFzIFNjYWxlZFN0eWxlPG51bWJlcj4pLmdldFN0eWxlVmFsdWUoZmVhdHVyZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByYWRpdXMgPSB0aGlzLnN0eWxlLnJhZGl1cyBhcyBudW1iZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBMLmNpcmNsZU1hcmtlcihsYXRsbmcse3JhZGl1czpyYWRpdXN9KTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgdGhpcy52ZWN0b3JMYXllciA9IEwuZ2VvSlNPTih0aGlzLmZlYXR1cmVzLCBvcHRpb25zKTtcblxuICAgICAgdGhpcy52ZWN0b3JMYXllci5vbignY2xpY2snIGFzIGFueSwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkRmVhdHVyZSkge1xuICAgICAgICAgIHRoaXMudmVjdG9yTGF5ZXIucmVzZXRTdHlsZSh0aGlzLnNlbGVjdGVkRmVhdHVyZSk7XG4gICAgICAgICAgLy8gcmVzZXRGZWF0dXJlU3R5bGUodGhpcy5zZWxlY3RlZEZlYXR1cmUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRGZWF0dXJlID0gZXZlbnQubGF5ZXI7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRGZWF0dXJlLnNldFN0eWxlKHtcbiAgICAgICAgICB3ZWlnaHQ6NVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmZlYXR1cmVTZWxlY3RlZC5lbWl0KHRoaXMuc2VsZWN0ZWRGZWF0dXJlLmZlYXR1cmUpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnZlY3RvckxheWVyLmFkZFRvKG0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=