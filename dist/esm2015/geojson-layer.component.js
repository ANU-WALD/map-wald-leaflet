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
        this.sublayers = [];
        this.pointMode = PointMode.default;
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
            const options = {
                // interactive: true
                style: STYLES
            };
            if (this.pointMode === PointMode.circle) {
                options.pointToLayer = (feature, latlng) => {
                    return L.circleMarker(latlng);
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
GeojsonLayerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GeojsonLayerComponent, selectors: [["geojson-layer"]], inputs: { url: "url", features: "features", styles: "styles", sublayers: "sublayers", pointMode: "pointMode" }, outputs: { featureSelected: "featureSelected" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function GeojsonLayerComponent_Template(rf, ctx) { }, styles: [""] });
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
        }], styles: [{
            type: core_1.Input
        }], sublayers: [{
            type: core_1.Input
        }], pointMode: [{
            type: core_1.Input
        }], featureSelected: [{
            type: core_1.Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvanNvbi1sYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC1sZWFmbGV0LyIsInNvdXJjZXMiOlsiZ2VvanNvbi1sYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQW9IO0FBQ3BILDZCQUE2QjtBQUM3Qiw4QkFBNEI7QUFDNUIsdURBQW1EO0FBRW5ELCtDQUFrRDs7OztBQUVsRCxNQUFNLE1BQU0sR0FBRztJQUNiLFdBQVcsRUFBRSxHQUFHO0lBQ2hCLE1BQU0sRUFBRSxHQUFHO0NBQ1osQ0FBQztBQUVGLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQiwrQ0FBTyxDQUFBO0lBQ1AsNkNBQU0sQ0FBQTtBQUNSLENBQUMsRUFIVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUdwQjtBQUVELE1BS2EscUJBQXFCO0lBYWhDLHFCQUFxQjtJQUVyQixZQUFvQixJQUFnQixFQUFVLEdBQW1CO1FBQTdDLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFnQjtRQVh4RCxjQUFTLEdBQThCLEVBQUUsQ0FBQztRQUMxQyxjQUFTLEdBQWEsU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUVqRCw0QkFBNEI7UUFDbEIsb0JBQWUsR0FBRyxJQUFJLG1CQUFZLEVBQU8sQ0FBQztRQUU1QyxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBTTFCLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxNQUFNLENBQUMsQ0FBUTtRQUNyQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUNmLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUM5QzthQUFNLElBQUcsT0FBTyxDQUFDLFFBQVEsSUFBRSxPQUFPLENBQUMsU0FBUyxFQUFDO1lBQzVDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNsQjtJQUNILENBQUM7SUFFRCxhQUFhLENBQUMsR0FBVTtRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7WUFDOUMsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDcEIsZUFBZTtnQkFDZixPQUFPO2FBQ1I7WUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUVyQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2YsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNsQixPQUFPO2FBQ1I7WUFFRCxNQUFNLE9BQU8sR0FBb0I7Z0JBQy9CLG9CQUFvQjtnQkFDcEIsS0FBSyxFQUFFLE1BQU07YUFDZCxDQUFDO1lBRUYsSUFBRyxJQUFJLENBQUMsU0FBUyxLQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUM7Z0JBQ25DLE9BQU8sQ0FBQyxZQUFZLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7b0JBQ3pDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDaEMsQ0FBQyxDQUFDO2FBQ0g7WUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUVyRCxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxPQUFjLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDNUMsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO29CQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQ2xELDJDQUEyQztpQkFDNUM7Z0JBQ0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO2dCQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQztvQkFDNUIsTUFBTSxFQUFDLENBQUM7aUJBQ1QsQ0FBQyxDQUFDO2dCQUVILElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUQsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O0FBOUZILHNEQStGQzswRkExRlkscUJBQXFCOzBEQUFyQixxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQUxqQyxnQkFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUsRUFBRTtnQkFDWixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDYjswRkFFVSxHQUFHO2tCQUFYLFlBQUs7WUFDRyxRQUFRO2tCQUFoQixZQUFLO1lBQ0csTUFBTTtrQkFBZCxZQUFLO1lBQ0csU0FBUztrQkFBakIsWUFBSztZQUNHLFNBQVM7a0JBQWpCLFlBQUs7WUFHSSxlQUFlO2tCQUF4QixhQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIEwgZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgJ2xlYWZsZXQudmVjdG9yZ3JpZCc7XG5pbXBvcnQgeyBMZWFmbGV0U2VydmljZSB9IGZyb20gJy4vbGVhZmxldC5zZXJ2aWNlJztcbmltcG9ydCB7IFRpbGVkU3VibGF5ZXJEZXNjcmlwdG9yIH0gZnJvbSAnLi9kYXRhJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmNvbnN0IFNUWUxFUyA9IHtcbiAgZmlsbE9wYWNpdHk6IDAuMCxcbiAgd2VpZ2h0OiAxLjBcbn07XG5cbmV4cG9ydCBlbnVtIFBvaW50TW9kZSB7XG4gIGRlZmF1bHQsXG4gIGNpcmNsZVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZW9qc29uLWxheWVyJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBzdHlsZXM6IFsnJ11cbn0pXG5leHBvcnQgY2xhc3MgR2VvanNvbkxheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHVybDogc3RyaW5nO1xuICBASW5wdXQoKSBmZWF0dXJlczogYW55O1xuICBASW5wdXQoKSBzdHlsZXM6IGFueTtcbiAgQElucHV0KCkgc3VibGF5ZXJzOiBUaWxlZFN1YmxheWVyRGVzY3JpcHRvcltdID0gW107XG4gIEBJbnB1dCgpIHBvaW50TW9kZTpQb2ludE1vZGUgPSBQb2ludE1vZGUuZGVmYXVsdDtcblxuICAvLyBASW5wdXQoKSBpZENvbHVtbiA9ICdpZCc7XG4gIEBPdXRwdXQoKSBmZWF0dXJlU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwcml2YXRlIGRlc3Ryb3llZCA9IGZhbHNlO1xuICBwcml2YXRlIHNlbGVjdGVkRmVhdHVyZTogYW55O1xuICBwcml2YXRlIHZlY3RvckxheWVyOiBMLkdlb0pTT047XG4gIC8vIHByaXZhdGUgZGF0YTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBtYXA6IExlYWZsZXRTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICB0aGlzLm1hcC5tYXAudGhlbihtID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKG0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmUobTogTC5NYXApOiB2b2lkIHtcbiAgICBpZiAodGhpcy52ZWN0b3JMYXllcikge1xuICAgICAgdGhpcy52ZWN0b3JMYXllci5yZW1vdmVGcm9tKG0pO1xuICAgICAgdGhpcy52ZWN0b3JMYXllciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLnVybCkge1xuICAgICAgdGhpcy5kb3dubG9hZExheWVyKGNoYW5nZXMudXJsLmN1cnJlbnRWYWx1ZSk7XG4gICAgfSBlbHNlIGlmKGNoYW5nZXMuZmVhdHVyZXN8fGNoYW5nZXMucG9pbnRNb2RlKXtcbiAgICAgIHRoaXMubWFrZUxheWVyKCk7XG4gICAgfVxuICB9XG5cbiAgZG93bmxvYWRMYXllcih1cmw6c3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5odHRwLmdldCh0aGlzLnVybCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgIGlmICh1cmwgIT09IHRoaXMudXJsKSB7XG4gICAgICAgIC8vIG91dCBvZiBkYXRlIVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmZlYXR1cmVzID0gZGF0YTtcblxuICAgICAgdGhpcy5tYWtlTGF5ZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1ha2VMYXllcigpOiB2b2lkIHtcbiAgICB0aGlzLm1hcC5tYXAudGhlbihtID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKG0pO1xuICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb3B0aW9uczpMLkdlb0pTT05PcHRpb25zID0ge1xuICAgICAgICAvLyBpbnRlcmFjdGl2ZTogdHJ1ZVxuICAgICAgICBzdHlsZTogU1RZTEVTXG4gICAgICB9O1xuXG4gICAgICBpZih0aGlzLnBvaW50TW9kZT09PVBvaW50TW9kZS5jaXJjbGUpe1xuICAgICAgICBvcHRpb25zLnBvaW50VG9MYXllciA9IChmZWF0dXJlLCBsYXRsbmcpID0+IHtcbiAgICAgICAgICByZXR1cm4gTC5jaXJjbGVNYXJrZXIobGF0bG5nKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgdGhpcy52ZWN0b3JMYXllciA9IEwuZ2VvSlNPTih0aGlzLmZlYXR1cmVzLCBvcHRpb25zKTtcblxuICAgICAgdGhpcy52ZWN0b3JMYXllci5vbignY2xpY2snIGFzIGFueSwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkRmVhdHVyZSkge1xuICAgICAgICAgIHRoaXMudmVjdG9yTGF5ZXIucmVzZXRTdHlsZSh0aGlzLnNlbGVjdGVkRmVhdHVyZSk7XG4gICAgICAgICAgLy8gcmVzZXRGZWF0dXJlU3R5bGUodGhpcy5zZWxlY3RlZEZlYXR1cmUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRGZWF0dXJlID0gZXZlbnQubGF5ZXI7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRGZWF0dXJlLnNldFN0eWxlKHtcbiAgICAgICAgICB3ZWlnaHQ6NVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmZlYXR1cmVTZWxlY3RlZC5lbWl0KHRoaXMuc2VsZWN0ZWRGZWF0dXJlLmZlYXR1cmUpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnZlY3RvckxheWVyLmFkZFRvKG0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=