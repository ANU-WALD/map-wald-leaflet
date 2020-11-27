"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeojsonLayerComponent = void 0;
var core_1 = require("@angular/core");
var L = require("leaflet");
require("leaflet.vectorgrid");
var leaflet_service_1 = require("./leaflet.service");
var http_1 = require("@angular/common/http");
var i0 = require("@angular/core");
var i1 = require("@angular/common/http");
var i2 = require("./leaflet.service");
var STYLES = {
    fillOpacity: 0.0,
    weight: 1.0
};
var GeojsonLayerComponent = /** @class */ (function () {
    // private data: any;
    function GeojsonLayerComponent(http, map) {
        this.http = http;
        this.map = map;
        this.sublayers = [];
        // @Input() idColumn = 'id';
        this.featureSelected = new core_1.EventEmitter();
        this.destroyed = false;
    }
    GeojsonLayerComponent.prototype.ngOnInit = function () {
    };
    GeojsonLayerComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.destroyed = true;
        this.map.map.then(function (m) {
            _this.remove(m);
        });
    };
    GeojsonLayerComponent.prototype.remove = function (m) {
        if (this.vectorLayer) {
            this.vectorLayer.removeFrom(m);
            this.vectorLayer = null;
        }
    };
    GeojsonLayerComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.url) {
            this.http.get(this.url).subscribe(function (data) {
                if (changes.url.currentValue !== _this.url) {
                    // out of date!
                    return;
                }
                _this.map.map.then(function (m) {
                    _this.remove(m);
                    if (_this.destroyed) {
                        return;
                    }
                    _this.vectorLayer = L.geoJSON(data, {
                        // interactive: true
                        style: STYLES
                    });
                    _this.vectorLayer.on('click', function (event) {
                        if (_this.selectedFeature) {
                            _this.vectorLayer.resetStyle(_this.selectedFeature);
                            // resetFeatureStyle(this.selectedFeature);
                        }
                        _this.selectedFeature = event.layer;
                        _this.selectedFeature.setStyle({
                            weight: 5
                        });
                        _this.featureSelected.emit(_this.selectedFeature.feature);
                    });
                    _this.vectorLayer.addTo(m);
                });
            });
        }
    };
    GeojsonLayerComponent.ɵfac = function GeojsonLayerComponent_Factory(t) { return new (t || GeojsonLayerComponent)(i0.ɵɵdirectiveInject(i1.HttpClient), i0.ɵɵdirectiveInject(i2.LeafletService)); };
    GeojsonLayerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GeojsonLayerComponent, selectors: [["geojson-layer"]], inputs: { url: "url", styles: "styles", sublayers: "sublayers" }, outputs: { featureSelected: "featureSelected" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function GeojsonLayerComponent_Template(rf, ctx) { }, styles: [""] });
    return GeojsonLayerComponent;
}());
exports.GeojsonLayerComponent = GeojsonLayerComponent;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvanNvbi1sYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC1sZWFmbGV0LyIsInNvdXJjZXMiOlsiZ2VvanNvbi1sYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQW9IO0FBQ3BILDJCQUE2QjtBQUM3Qiw4QkFBNEI7QUFDNUIscURBQW1EO0FBRW5ELDZDQUFrRDs7OztBQUVsRCxJQUFNLE1BQU0sR0FBRztJQUNiLFdBQVcsRUFBRSxHQUFHO0lBQ2hCLE1BQU0sRUFBRSxHQUFHO0NBQ1osQ0FBQztBQUVGO0lBZUUscUJBQXFCO0lBRXJCLCtCQUFvQixJQUFnQixFQUFVLEdBQW1CO1FBQTdDLFNBQUksR0FBSixJQUFJLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFnQjtRQVR4RCxjQUFTLEdBQThCLEVBQUUsQ0FBQztRQUNuRCw0QkFBNEI7UUFDbEIsb0JBQWUsR0FBRyxJQUFJLG1CQUFZLEVBQU8sQ0FBQztRQUU1QyxjQUFTLEdBQUcsS0FBSyxDQUFDO0lBTTFCLENBQUM7SUFFRCx3Q0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELDJDQUFXLEdBQVg7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7WUFDakIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTyxzQ0FBTSxHQUFkLFVBQWUsQ0FBUTtRQUNyQixJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsMkNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQWxDLGlCQW1DQztRQWxDQyxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBUztnQkFDMUMsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksS0FBSyxLQUFJLENBQUMsR0FBRyxFQUFFO29CQUN6QyxlQUFlO29CQUNmLE9BQU87aUJBQ1I7Z0JBRUQsS0FBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztvQkFDakIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDZixJQUFJLEtBQUksQ0FBQyxTQUFTLEVBQUU7d0JBQ2xCLE9BQU87cUJBQ1I7b0JBRUQsS0FBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTt3QkFDakMsb0JBQW9CO3dCQUNwQixLQUFLLEVBQUUsTUFBTTtxQkFDZCxDQUFDLENBQUM7b0JBRUgsS0FBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsT0FBYyxFQUFFLFVBQUMsS0FBSzt3QkFDeEMsSUFBSSxLQUFJLENBQUMsZUFBZSxFQUFFOzRCQUN4QixLQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7NEJBQ2xELDJDQUEyQzt5QkFDNUM7d0JBQ0QsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO3dCQUNuQyxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQzs0QkFDNUIsTUFBTSxFQUFDLENBQUM7eUJBQ1QsQ0FBQyxDQUFDO3dCQUVILEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQzFELENBQUMsQ0FBQyxDQUFDO29CQUNILEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzhGQW5FVSxxQkFBcUI7OERBQXJCLHFCQUFxQjtnQ0FqQmxDO0NBcUZDLEFBekVELElBeUVDO0FBcEVZLHNEQUFxQjtrREFBckIscUJBQXFCO2NBTGpDLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRSxFQUFFO2dCQUNaLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUNiOzBGQUVVLEdBQUc7a0JBQVgsWUFBSztZQUNHLE1BQU07a0JBQWQsWUFBSztZQUNHLFNBQVM7a0JBQWpCLFlBQUs7WUFFSSxlQUFlO2tCQUF4QixhQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIEwgZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgJ2xlYWZsZXQudmVjdG9yZ3JpZCc7XG5pbXBvcnQgeyBMZWFmbGV0U2VydmljZSB9IGZyb20gJy4vbGVhZmxldC5zZXJ2aWNlJztcbmltcG9ydCB7IFRpbGVkU3VibGF5ZXJEZXNjcmlwdG9yIH0gZnJvbSAnLi9kYXRhJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmNvbnN0IFNUWUxFUyA9IHtcbiAgZmlsbE9wYWNpdHk6IDAuMCxcbiAgd2VpZ2h0OiAxLjBcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2dlb2pzb24tbGF5ZXInLFxuICB0ZW1wbGF0ZTogJycsXG4gIHN0eWxlczogWycnXVxufSlcbmV4cG9ydCBjbGFzcyBHZW9qc29uTGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQElucHV0KCkgdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN0eWxlczogYW55O1xuICBASW5wdXQoKSBzdWJsYXllcnM6IFRpbGVkU3VibGF5ZXJEZXNjcmlwdG9yW10gPSBbXTtcbiAgLy8gQElucHV0KCkgaWRDb2x1bW4gPSAnaWQnO1xuICBAT3V0cHV0KCkgZmVhdHVyZVNlbGVjdGVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHJpdmF0ZSBkZXN0cm95ZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzZWxlY3RlZEZlYXR1cmU6IGFueTtcbiAgcHJpdmF0ZSB2ZWN0b3JMYXllcjogTC5HZW9KU09OO1xuICAvLyBwcml2YXRlIGRhdGE6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIHByaXZhdGUgbWFwOiBMZWFmbGV0U2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgdGhpcy5tYXAubWFwLnRoZW4obSA9PiB7XG4gICAgICB0aGlzLnJlbW92ZShtKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlKG06IEwuTWFwKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmVjdG9yTGF5ZXIpIHtcbiAgICAgIHRoaXMudmVjdG9yTGF5ZXIucmVtb3ZlRnJvbShtKTtcbiAgICAgIHRoaXMudmVjdG9yTGF5ZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy51cmwpIHtcbiAgICAgIHRoaXMuaHR0cC5nZXQodGhpcy51cmwpLnN1YnNjcmliZSgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgIGlmIChjaGFuZ2VzLnVybC5jdXJyZW50VmFsdWUgIT09IHRoaXMudXJsKSB7XG4gICAgICAgICAgLy8gb3V0IG9mIGRhdGUhXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYXAubWFwLnRoZW4obSA9PiB7XG4gICAgICAgICAgdGhpcy5yZW1vdmUobSk7XG4gICAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy52ZWN0b3JMYXllciA9IEwuZ2VvSlNPTihkYXRhLCB7XG4gICAgICAgICAgICAvLyBpbnRlcmFjdGl2ZTogdHJ1ZVxuICAgICAgICAgICAgc3R5bGU6IFNUWUxFU1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgdGhpcy52ZWN0b3JMYXllci5vbignY2xpY2snIGFzIGFueSwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEZlYXR1cmUpIHtcbiAgICAgICAgICAgICAgdGhpcy52ZWN0b3JMYXllci5yZXNldFN0eWxlKHRoaXMuc2VsZWN0ZWRGZWF0dXJlKTtcbiAgICAgICAgICAgICAgLy8gcmVzZXRGZWF0dXJlU3R5bGUodGhpcy5zZWxlY3RlZEZlYXR1cmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEZlYXR1cmUgPSBldmVudC5sYXllcjtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRGZWF0dXJlLnNldFN0eWxlKHtcbiAgICAgICAgICAgICAgd2VpZ2h0OjVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmZlYXR1cmVTZWxlY3RlZC5lbWl0KHRoaXMuc2VsZWN0ZWRGZWF0dXJlLmZlYXR1cmUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMudmVjdG9yTGF5ZXIuYWRkVG8obSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=