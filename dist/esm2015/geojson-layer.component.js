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
            const pane = `vector-pane-${this.zIndex}`;
            leaflet_service_1.ensurePane(m, pane, this.zIndex);
            options.pane = pane;
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
GeojsonLayerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GeojsonLayerComponent, selectors: [["geojson-layer"]], inputs: { url: "url", features: "features", sublayers: "sublayers", pointMode: "pointMode", style: "style", zIndex: "zIndex" }, outputs: { featureSelected: "featureSelected" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function GeojsonLayerComponent_Template(rf, ctx) { }, styles: [""] });
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
        }], zIndex: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvanNvbi1sYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC1sZWFmbGV0LyIsInNvdXJjZXMiOlsiZ2VvanNvbi1sYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQW9IO0FBQ3BILDZCQUE2QjtBQUM3Qiw4QkFBNEI7QUFDNUIsdURBQStEO0FBRS9ELCtDQUFrRDs7OztBQUlsRCxNQUFNLE1BQU0sR0FBRztJQUNiLFdBQVcsRUFBRSxHQUFHO0lBQ2hCLE1BQU0sRUFBRSxHQUFHO0NBQ1osQ0FBQztBQUVGLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQiwrQ0FBTyxDQUFBO0lBQ1AsNkNBQU0sQ0FBQTtBQUNSLENBQUMsRUFIVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUdwQjtBQUVELE1BS2EscUJBQXFCO0lBY2hDLHFCQUFxQjtJQUVyQixZQUFvQixJQUFnQixFQUFVLEdBQW1CO1FBQTdDLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFnQjtRQWJqRSx3QkFBd0I7UUFDZixjQUFTLEdBQThCLEVBQUUsQ0FBQztRQUMxQyxjQUFTLEdBQWEsU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUN4QyxVQUFLLEdBQThCLEVBQUUsQ0FBQztRQUMvQyw0QkFBNEI7UUFDbEIsb0JBQWUsR0FBRyxJQUFJLG1CQUFZLEVBQU8sQ0FBQztRQUMzQyxXQUFNLEdBQUcsR0FBRyxDQUFDO1FBRWQsY0FBUyxHQUFHLEtBQUssQ0FBQztJQU0xQixDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFD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QUFFLENBQUM7YUFDYjswRkFFVSxHQUFHO2tCQUFYLFlBQUs7WUFDRyxRQUFRO2tCQUFoQixZQUFLO1lBRUcsU0FBUztrQkFBakIsWUFBSztZQUNHLFNBQVM7a0JBQWpCLFlBQUs7WUFDRyxLQUFLO2tCQUFiLFlBQUs7WUFFSSxlQUFlO2tCQUF4QixhQUFNO1lBQ0UsTUFBTTtrQkFBZCxZQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIEwgZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgJ2xlYWZsZXQudmVjdG9yZ3JpZCc7XG5pbXBvcnQgeyBMZWFmbGV0U2VydmljZSwgZW5zdXJlUGFuZSB9IGZyb20gJy4vbGVhZmxldC5zZXJ2aWNlJztcbmltcG9ydCB7IFRpbGVkU3VibGF5ZXJEZXNjcmlwdG9yIH0gZnJvbSAnLi9kYXRhJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBTY2FsZWRTdHlsZSwgU3R5bGVWYWx1ZSB9IGZyb20gJ21hcC13YWxkJztcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICdnZW9qc29uJztcblxuY29uc3QgU1RZTEVTID0ge1xuICBmaWxsT3BhY2l0eTogMC4wLFxuICB3ZWlnaHQ6IDEuMFxufTtcblxuZXhwb3J0IGVudW0gUG9pbnRNb2RlIHtcbiAgZGVmYXVsdCxcbiAgY2lyY2xlXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dlb2pzb24tbGF5ZXInLFxuICB0ZW1wbGF0ZTogJycsXG4gIHN0eWxlczogWycnXVxufSlcbmV4cG9ydCBjbGFzcyBHZW9qc29uTGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZlYXR1cmVzOiBhbnk7XG4gIC8vIEBJbnB1dCgpIHN0eWxlczogYW55O1xuICBASW5wdXQoKSBzdWJsYXllcnM6IFRpbGVkU3VibGF5ZXJEZXNjcmlwdG9yW10gPSBbXTtcbiAgQElucHV0KCkgcG9pbnRNb2RlOlBvaW50TW9kZSA9IFBvaW50TW9kZS5kZWZhdWx0O1xuICBASW5wdXQoKSBzdHlsZToge1trZXk6c3RyaW5nXTpTdHlsZVZhbHVlfSA9IHt9O1xuICAvLyBASW5wdXQoKSBpZENvbHVtbiA9ICdpZCc7XG4gIEBPdXRwdXQoKSBmZWF0dXJlU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQElucHV0KCkgekluZGV4ID0gMTAwO1xuXG4gIHByaXZhdGUgZGVzdHJveWVkID0gZmFsc2U7XG4gIHByaXZhdGUgc2VsZWN0ZWRGZWF0dXJlOiBhbnk7XG4gIHByaXZhdGUgdmVjdG9yTGF5ZXI6IEwuR2VvSlNPTjtcbiAgLy8gcHJpdmF0ZSBkYXRhOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LCBwcml2YXRlIG1hcDogTGVhZmxldFNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuICAgIHRoaXMubWFwLm1hcC50aGVuKG0gPT4ge1xuICAgICAgdGhpcy5yZW1vdmUobSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZShtOiBMLk1hcCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZlY3RvckxheWVyKSB7XG4gICAgICB0aGlzLnZlY3RvckxheWVyLnJlbW92ZUZyb20obSk7XG4gICAgICB0aGlzLnZlY3RvckxheWVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMudXJsKSB7XG4gICAgICB0aGlzLmRvd25sb2FkTGF5ZXIoY2hhbmdlcy51cmwuY3VycmVudFZhbHVlKTtcbiAgICB9IGVsc2UgaWYoY2hhbmdlcy5mZWF0dXJlc3x8Y2hhbmdlcy5wb2ludE1vZGUpe1xuICAgICAgdGhpcy5tYWtlTGF5ZXIoKTtcbiAgICB9XG4gIH1cblxuICBkb3dubG9hZExheWVyKHVybDpzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmh0dHAuZ2V0KHRoaXMudXJsKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgaWYgKHVybCAhPT0gdGhpcy51cmwpIHtcbiAgICAgICAgLy8gb3V0IG9mIGRhdGUhXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZmVhdHVyZXMgPSBkYXRhO1xuXG4gICAgICB0aGlzLm1ha2VMYXllcigpO1xuICAgIH0pO1xuICB9XG5cbiAgbWFrZUxheWVyKCk6IHZvaWQge1xuICAgIHRoaXMubWFwLm1hcC50aGVuKG0gPT4ge1xuICAgICAgdGhpcy5yZW1vdmUobSk7XG4gICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzdHlsZSA9IChmOiBhbnkpPT57XG4gICAgICAgIGNvbnN0IHN0eWxlczoge1trZXk6c3RyaW5nXTphbnl9ID0gT2JqZWN0LmFzc2lnbih7fSxTVFlMRVMpO1xuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnN0eWxlKS5mb3JFYWNoKGs9PntcbiAgICAgICAgICBjb25zdCB2YWwgPSB0aGlzLnN0eWxlW2tdO1xuICAgICAgICAgIGlmKCh2YWwgYXMgU2NhbGVkU3R5bGU8YW55PikuZ2V0U3R5bGVWYWx1ZSkge1xuICAgICAgICAgICAgc3R5bGVzW2tdID0gKHZhbCBhcyBTY2FsZWRTdHlsZTxhbnk+KS5nZXRTdHlsZVZhbHVlKGYpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHlsZXNba10gPSB2YWw7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN0eWxlcztcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IG9wdGlvbnM6TC5HZW9KU09OT3B0aW9ucyA9IHtcbiAgICAgICAgLy8gaW50ZXJhY3RpdmU6IHRydWVcbiAgICAgICAgc3R5bGU6IHN0eWxlXG4gICAgICB9O1xuXG4gICAgICBpZih0aGlzLnBvaW50TW9kZT09PVBvaW50TW9kZS5jaXJjbGUpe1xuICAgICAgICBvcHRpb25zLnBvaW50VG9MYXllciA9IChmZWF0dXJlLCBsYXRsbmcpID0+IHtcbiAgICAgICAgICBsZXQgcmFkaXVzID0gMztcbiAgICAgICAgICBpZih0aGlzLnN0eWxlICYmIHRoaXMuc3R5bGUucmFkaXVzKSB7XG4gICAgICAgICAgICBpZigodGhpcy5zdHlsZS5yYWRpdXMgYXMgU2NhbGVkU3R5bGU8bnVtYmVyPikuZ2V0U3R5bGVWYWx1ZSl7XG4gICAgICAgICAgICAgIHJhZGl1cyA9ICh0aGlzLnN0eWxlLnJhZGl1cyBhcyBTY2FsZWRTdHlsZTxudW1iZXI+KS5nZXRTdHlsZVZhbHVlKGZlYXR1cmUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmFkaXVzID0gdGhpcy5zdHlsZS5yYWRpdXMgYXMgbnVtYmVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gTC5jaXJjbGVNYXJrZXIobGF0bG5nLHtyYWRpdXM6cmFkaXVzfSk7XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhbmUgPSBgdmVjdG9yLXBhbmUtJHt0aGlzLnpJbmRleH1gO1xuICAgICAgZW5zdXJlUGFuZShtLHBhbmUsdGhpcy56SW5kZXgpXG4gICAgICBvcHRpb25zLnBhbmUgPSBwYW5lO1xuICAgICAgdGhpcy52ZWN0b3JMYXllciA9IEwuZ2VvSlNPTih0aGlzLmZlYXR1cmVzLCBvcHRpb25zKTtcblxuICAgICAgdGhpcy52ZWN0b3JMYXllci5vbignY2xpY2snIGFzIGFueSwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkRmVhdHVyZSkge1xuICAgICAgICAgIHRoaXMudmVjdG9yTGF5ZXIucmVzZXRTdHlsZSh0aGlzLnNlbGVjdGVkRmVhdHVyZSk7XG4gICAgICAgICAgLy8gcmVzZXRGZWF0dXJlU3R5bGUodGhpcy5zZWxlY3RlZEZlYXR1cmUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRGZWF0dXJlID0gZXZlbnQubGF5ZXI7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRGZWF0dXJlLnNldFN0eWxlKHtcbiAgICAgICAgICB3ZWlnaHQ6NVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmZlYXR1cmVTZWxlY3RlZC5lbWl0KHRoaXMuc2VsZWN0ZWRGZWF0dXJlLmZlYXR1cmUpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnZlY3RvckxheWVyLmFkZFRvKG0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=