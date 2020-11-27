"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeojsonLayerComponent = void 0;
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
class GeojsonLayerComponent {
    // private data: any;
    constructor(http, map) {
        this.http = http;
        this.map = map;
        this.sublayers = [];
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
            this.http.get(this.url).subscribe((data) => {
                if (changes.url.currentValue !== this.url) {
                    // out of date!
                    return;
                }
                this.map.map.then(m => {
                    this.remove(m);
                    if (this.destroyed) {
                        return;
                    }
                    this.vectorLayer = L.geoJSON(data, {
                        // interactive: true
                        style: STYLES
                    });
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
            });
        }
    }
}
exports.GeojsonLayerComponent = GeojsonLayerComponent;
GeojsonLayerComponent.ɵfac = function GeojsonLayerComponent_Factory(t) { return new (t || GeojsonLayerComponent)(i0.ɵɵdirectiveInject(i1.HttpClient), i0.ɵɵdirectiveInject(i2.LeafletService)); };
GeojsonLayerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GeojsonLayerComponent, selectors: [["geojson-layer"]], inputs: { url: "url", styles: "styles", sublayers: "sublayers" }, outputs: { featureSelected: "featureSelected" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function GeojsonLayerComponent_Template(rf, ctx) { }, styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GeojsonLayerComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'geojson-layer',
                template: '',
                styles: ['']
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i2.LeafletService }]; }, { url: [{
            type: core_1.Input
        }], styles: [{
            type: core_1.Input
        }], sublayers: [{
            type: core_1.Input
        }], featureSelected: [{
            type: core_1.Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvanNvbi1sYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC1sZWFmbGV0LyIsInNvdXJjZXMiOlsiZ2VvanNvbi1sYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQW9IO0FBQ3BILDZCQUE2QjtBQUM3Qiw4QkFBNEI7QUFDNUIsdURBQW1EO0FBRW5ELCtDQUFrRDs7OztBQUVsRCxNQUFNLE1BQU0sR0FBRztJQUNiLFdBQVcsRUFBRSxHQUFHO0lBQ2hCLE1BQU0sRUFBRSxHQUFHO0NBQ1osQ0FBQztBQUVGLE1BS2EscUJBQXFCO0lBVWhDLHFCQUFxQjtJQUVyQixZQUFvQixJQUFnQixFQUFVLEdBQW1CO1FBQTdDLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFnQjtRQVR4RCxjQUFTLEdBQThCLEVBQUUsQ0FBQztRQUNuRCw0QkFBNEI7UUFDbEIsb0JBQWUsR0FBRyxJQUFJLG1CQUFZLEVBQU8sQ0FBQztRQUU1QyxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBTTFCLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxNQUFNLENBQUMsQ0FBUTtRQUNyQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtnQkFDOUMsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUMsR0FBRyxFQUFFO29CQUN6QyxlQUFlO29CQUNmLE9BQU87aUJBQ1I7Z0JBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNmLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTt3QkFDbEIsT0FBTztxQkFDUjtvQkFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFO3dCQUNqQyxvQkFBb0I7d0JBQ3BCLEtBQUssRUFBRSxNQUFNO3FCQUNkLENBQUMsQ0FBQztvQkFFSCxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxPQUFjLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTt3QkFDNUMsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFOzRCQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7NEJBQ2xELDJDQUEyQzt5QkFDNUM7d0JBQ0QsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO3dCQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQzs0QkFDNUIsTUFBTSxFQUFDLENBQUM7eUJBQ1QsQ0FBQyxDQUFDO3dCQUVILElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzFELENBQUMsQ0FBQyxDQUFDO29CQUNILElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztBQXhFSCxzREF5RUM7MEZBcEVZLHFCQUFxQjswREFBckIscUJBQXFCO2tEQUFyQixxQkFBcUI7Y0FMakMsZ0JBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ2I7MEZBRVUsR0FBRztrQkFBWCxZQUFLO1lBQ0csTUFBTTtrQkFBZCxZQUFLO1lBQ0csU0FBUztrQkFBakIsWUFBSztZQUVJLGVBQWU7a0JBQXhCLGFBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgTCBmcm9tICdsZWFmbGV0JztcbmltcG9ydCAnbGVhZmxldC52ZWN0b3JncmlkJztcbmltcG9ydCB7IExlYWZsZXRTZXJ2aWNlIH0gZnJvbSAnLi9sZWFmbGV0LnNlcnZpY2UnO1xuaW1wb3J0IHsgVGlsZWRTdWJsYXllckRlc2NyaXB0b3IgfSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuY29uc3QgU1RZTEVTID0ge1xuICBmaWxsT3BhY2l0eTogMC4wLFxuICB3ZWlnaHQ6IDEuMFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ2VvanNvbi1sYXllcicsXG4gIHRlbXBsYXRlOiAnJyxcbiAgc3R5bGVzOiBbJyddXG59KVxuZXhwb3J0IGNsYXNzIEdlb2pzb25MYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSB1cmw6IHN0cmluZztcbiAgQElucHV0KCkgc3R5bGVzOiBhbnk7XG4gIEBJbnB1dCgpIHN1YmxheWVyczogVGlsZWRTdWJsYXllckRlc2NyaXB0b3JbXSA9IFtdO1xuICAvLyBASW5wdXQoKSBpZENvbHVtbiA9ICdpZCc7XG4gIEBPdXRwdXQoKSBmZWF0dXJlU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwcml2YXRlIGRlc3Ryb3llZCA9IGZhbHNlO1xuICBwcml2YXRlIHNlbGVjdGVkRmVhdHVyZTogYW55O1xuICBwcml2YXRlIHZlY3RvckxheWVyOiBMLkdlb0pTT047XG4gIC8vIHByaXZhdGUgZGF0YTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBtYXA6IExlYWZsZXRTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICB0aGlzLm1hcC5tYXAudGhlbihtID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKG0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmUobTogTC5NYXApOiB2b2lkIHtcbiAgICBpZiAodGhpcy52ZWN0b3JMYXllcikge1xuICAgICAgdGhpcy52ZWN0b3JMYXllci5yZW1vdmVGcm9tKG0pO1xuICAgICAgdGhpcy52ZWN0b3JMYXllciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLnVybCkge1xuICAgICAgdGhpcy5odHRwLmdldCh0aGlzLnVybCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGNoYW5nZXMudXJsLmN1cnJlbnRWYWx1ZSAhPT0gdGhpcy51cmwpIHtcbiAgICAgICAgICAvLyBvdXQgb2YgZGF0ZSFcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1hcC5tYXAudGhlbihtID0+IHtcbiAgICAgICAgICB0aGlzLnJlbW92ZShtKTtcbiAgICAgICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnZlY3RvckxheWVyID0gTC5nZW9KU09OKGRhdGEsIHtcbiAgICAgICAgICAgIC8vIGludGVyYWN0aXZlOiB0cnVlXG4gICAgICAgICAgICBzdHlsZTogU1RZTEVTXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICB0aGlzLnZlY3RvckxheWVyLm9uKCdjbGljaycgYXMgYW55LCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkRmVhdHVyZSkge1xuICAgICAgICAgICAgICB0aGlzLnZlY3RvckxheWVyLnJlc2V0U3R5bGUodGhpcy5zZWxlY3RlZEZlYXR1cmUpO1xuICAgICAgICAgICAgICAvLyByZXNldEZlYXR1cmVTdHlsZSh0aGlzLnNlbGVjdGVkRmVhdHVyZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRmVhdHVyZSA9IGV2ZW50LmxheWVyO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZlYXR1cmUuc2V0U3R5bGUoe1xuICAgICAgICAgICAgICB3ZWlnaHQ6NVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuZmVhdHVyZVNlbGVjdGVkLmVtaXQodGhpcy5zZWxlY3RlZEZlYXR1cmUuZmVhdHVyZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy52ZWN0b3JMYXllci5hZGRUbyhtKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==