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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvanNvbi1sYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC1sZWFmbGV0LyIsInNvdXJjZXMiOlsiZ2VvanNvbi1sYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQW9IO0FBQ3BILDZCQUE2QjtBQUM3Qiw4QkFBNEI7QUFDNUIsdURBQW1EO0FBRW5ELCtDQUFrRDs7OztBQUlsRCxNQUFNLE1BQU0sR0FBRztJQUNiLFdBQVcsRUFBRSxHQUFHO0lBQ2hCLE1BQU0sRUFBRSxHQUFHO0NBQ1osQ0FBQztBQUVGLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQiwrQ0FBTyxDQUFBO0lBQ1AsNkNBQU0sQ0FBQTtBQUNSLENBQUMsRUFIVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUdwQjtBQUVELE1BS2EscUJBQXFCO0lBYWhDLHFCQUFxQjtJQUVyQixZQUFvQixJQUFnQixFQUFVLEdBQW1CO1FBQTdDLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFnQjtRQVpqRSx3QkFBd0I7UUFDZixjQUFTLEdBQThCLEVBQUUsQ0FBQztRQUMxQyxjQUFTLEdBQWEsU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUN4QyxVQUFLLEdBQThCLEVBQUUsQ0FBQztRQUMvQyw0QkFBNEI7UUFDbEIsb0JBQWUsR0FBRyxJQUFJLG1CQUFZLEVBQU8sQ0FBQztRQUU1QyxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBTTFCLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNMLENB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Q29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIEwgZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgJ2xlYWZsZXQudmVjdG9yZ3JpZCc7XG5pbXBvcnQgeyBMZWFmbGV0U2VydmljZSB9IGZyb20gJy4vbGVhZmxldC5zZXJ2aWNlJztcbmltcG9ydCB7IFRpbGVkU3VibGF5ZXJEZXNjcmlwdG9yIH0gZnJvbSAnLi9kYXRhJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBTY2FsZWRTdHlsZSwgU3R5bGVWYWx1ZSB9IGZyb20gJ21hcC13YWxkJztcbmltcG9ydCB7IEZlYXR1cmUgfSBmcm9tICdnZW9qc29uJztcblxuY29uc3QgU1RZTEVTID0ge1xuICBmaWxsT3BhY2l0eTogMC4wLFxuICB3ZWlnaHQ6IDEuMFxufTtcblxuZXhwb3J0IGVudW0gUG9pbnRNb2RlIHtcbiAgZGVmYXVsdCxcbiAgY2lyY2xlXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dlb2pzb24tbGF5ZXInLFxuICB0ZW1wbGF0ZTogJycsXG4gIHN0eWxlczogWycnXVxufSlcbmV4cG9ydCBjbGFzcyBHZW9qc29uTGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZlYXR1cmVzOiBhbnk7XG4gIC8vIEBJbnB1dCgpIHN0eWxlczogYW55O1xuICBASW5wdXQoKSBzdWJsYXllcnM6IFRpbGVkU3VibGF5ZXJEZXNjcmlwdG9yW10gPSBbXTtcbiAgQElucHV0KCkgcG9pbnRNb2RlOlBvaW50TW9kZSA9IFBvaW50TW9kZS5kZWZhdWx0O1xuICBASW5wdXQoKSBzdHlsZToge1trZXk6c3RyaW5nXTpTdHlsZVZhbHVlfSA9IHt9O1xuICAvLyBASW5wdXQoKSBpZENvbHVtbiA9ICdpZCc7XG4gIEBPdXRwdXQoKSBmZWF0dXJlU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwcml2YXRlIGRlc3Ryb3llZCA9IGZhbHNlO1xuICBwcml2YXRlIHNlbGVjdGVkRmVhdHVyZTogYW55O1xuICBwcml2YXRlIHZlY3RvckxheWVyOiBMLkdlb0pTT047XG4gIC8vIHByaXZhdGUgZGF0YTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBtYXA6IExlYWZsZXRTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICB0aGlzLm1hcC5tYXAudGhlbihtID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKG0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmUobTogTC5NYXApOiB2b2lkIHtcbiAgICBpZiAodGhpcy52ZWN0b3JMYXllcikge1xuICAgICAgdGhpcy52ZWN0b3JMYXllci5yZW1vdmVGcm9tKG0pO1xuICAgICAgdGhpcy52ZWN0b3JMYXllciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLnVybCkge1xuICAgICAgdGhpcy5kb3dubG9hZExheWVyKGNoYW5nZXMudXJsLmN1cnJlbnRWYWx1ZSk7XG4gICAgfSBlbHNlIGlmKGNoYW5nZXMuZmVhdHVyZXN8fGNoYW5nZXMucG9pbnRNb2RlKXtcbiAgICAgIHRoaXMubWFrZUxheWVyKCk7XG4gICAgfVxuICB9XG5cbiAgZG93bmxvYWRMYXllcih1cmw6c3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5odHRwLmdldCh0aGlzLnVybCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgIGlmICh1cmwgIT09IHRoaXMudXJsKSB7XG4gICAgICAgIC8vIG91dCBvZiBkYXRlIVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmZlYXR1cmVzID0gZGF0YTtcblxuICAgICAgdGhpcy5tYWtlTGF5ZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1ha2VMYXllcigpOiB2b2lkIHtcbiAgICB0aGlzLm1hcC5tYXAudGhlbihtID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKG0pO1xuICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3R5bGUgPSAoZjogYW55KT0+e1xuICAgICAgICBjb25zdCBzdHlsZXM6IHtba2V5OnN0cmluZ106YW55fSA9IE9iamVjdC5hc3NpZ24oe30sU1RZTEVTKTtcbiAgICAgICAgT2JqZWN0LmtleXModGhpcy5zdHlsZSkuZm9yRWFjaChrPT57XG4gICAgICAgICAgY29uc3QgdmFsID0gdGhpcy5zdHlsZVtrXTtcbiAgICAgICAgICBpZigodmFsIGFzIFNjYWxlZFN0eWxlPGFueT4pLmdldFN0eWxlVmFsdWUpIHtcbiAgICAgICAgICAgIHN0eWxlc1trXSA9ICh2YWwgYXMgU2NhbGVkU3R5bGU8YW55PikuZ2V0U3R5bGVWYWx1ZShmKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3R5bGVzW2tdID0gdmFsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdHlsZXM7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBvcHRpb25zOkwuR2VvSlNPTk9wdGlvbnMgPSB7XG4gICAgICAgIC8vIGludGVyYWN0aXZlOiB0cnVlXG4gICAgICAgIHN0eWxlOiBzdHlsZVxuICAgICAgfTtcblxuICAgICAgaWYodGhpcy5wb2ludE1vZGU9PT1Qb2ludE1vZGUuY2lyY2xlKXtcbiAgICAgICAgb3B0aW9ucy5wb2ludFRvTGF5ZXIgPSAoZmVhdHVyZSwgbGF0bG5nKSA9PiB7XG4gICAgICAgICAgbGV0IHJhZGl1cyA9IDM7XG4gICAgICAgICAgaWYodGhpcy5zdHlsZSAmJiB0aGlzLnN0eWxlLnJhZGl1cykge1xuICAgICAgICAgICAgaWYoKHRoaXMuc3R5bGUucmFkaXVzIGFzIFNjYWxlZFN0eWxlPG51bWJlcj4pLmdldFN0eWxlVmFsdWUpe1xuICAgICAgICAgICAgICByYWRpdXMgPSAodGhpcy5zdHlsZS5yYWRpdXMgYXMgU2NhbGVkU3R5bGU8bnVtYmVyPikuZ2V0U3R5bGVWYWx1ZShmZWF0dXJlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJhZGl1cyA9IHRoaXMuc3R5bGUucmFkaXVzIGFzIG51bWJlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIEwuY2lyY2xlTWFya2VyKGxhdGxuZyx7cmFkaXVzOnJhZGl1c30pO1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICB0aGlzLnZlY3RvckxheWVyID0gTC5nZW9KU09OKHRoaXMuZmVhdHVyZXMsIG9wdGlvbnMpO1xuXG4gICAgICB0aGlzLnZlY3RvckxheWVyLm9uKCdjbGljaycgYXMgYW55LCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRGZWF0dXJlKSB7XG4gICAgICAgICAgdGhpcy52ZWN0b3JMYXllci5yZXNldFN0eWxlKHRoaXMuc2VsZWN0ZWRGZWF0dXJlKTtcbiAgICAgICAgICAvLyByZXNldEZlYXR1cmVTdHlsZSh0aGlzLnNlbGVjdGVkRmVhdHVyZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3RlZEZlYXR1cmUgPSBldmVudC5sYXllcjtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEZlYXR1cmUuc2V0U3R5bGUoe1xuICAgICAgICAgIHdlaWdodDo1XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZmVhdHVyZVNlbGVjdGVkLmVtaXQodGhpcy5zZWxlY3RlZEZlYXR1cmUuZmVhdHVyZSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMudmVjdG9yTGF5ZXIuYWRkVG8obSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==