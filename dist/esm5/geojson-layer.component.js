"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeojsonLayerComponent = exports.PointMode = void 0;
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
var PointMode;
(function (PointMode) {
    PointMode[PointMode["default"] = 0] = "default";
    PointMode[PointMode["circle"] = 1] = "circle";
})(PointMode = exports.PointMode || (exports.PointMode = {}));
var GeojsonLayerComponent = /** @class */ (function () {
    // private data: any;
    function GeojsonLayerComponent(http, map) {
        this.http = http;
        this.map = map;
        this.sublayers = [];
        this.pointMode = PointMode.default;
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
        if (changes.url) {
            this.downloadLayer(changes.url.currentValue);
        }
        else if (changes.features || changes.pointMode) {
            this.makeLayer();
        }
    };
    GeojsonLayerComponent.prototype.downloadLayer = function (url) {
        var _this = this;
        this.http.get(this.url).subscribe(function (data) {
            if (url !== _this.url) {
                // out of date!
                return;
            }
            _this.features = data;
            _this.makeLayer();
        });
    };
    GeojsonLayerComponent.prototype.makeLayer = function () {
        var _this = this;
        this.map.map.then(function (m) {
            _this.remove(m);
            if (_this.destroyed) {
                return;
            }
            var options = {
                // interactive: true
                style: STYLES
            };
            if (_this.pointMode === PointMode.circle) {
                options.pointToLayer = function (feature, latlng) {
                    return L.circleMarker(latlng);
                };
            }
            _this.vectorLayer = L.geoJSON(_this.features, options);
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
    };
    GeojsonLayerComponent.ɵfac = function GeojsonLayerComponent_Factory(t) { return new (t || GeojsonLayerComponent)(i0.ɵɵdirectiveInject(i1.HttpClient), i0.ɵɵdirectiveInject(i2.LeafletService)); };
    GeojsonLayerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: GeojsonLayerComponent, selectors: [["geojson-layer"]], inputs: { url: "url", features: "features", styles: "styles", sublayers: "sublayers", pointMode: "pointMode" }, outputs: { featureSelected: "featureSelected" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function GeojsonLayerComponent_Template(rf, ctx) { }, styles: [""] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VvanNvbi1sYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC1sZWFmbGV0LyIsInNvdXJjZXMiOlsiZ2VvanNvbi1sYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQW9IO0FBQ3BILDJCQUE2QjtBQUM3Qiw4QkFBNEI7QUFDNUIscURBQW1EO0FBRW5ELDZDQUFrRDs7OztBQUVsRCxJQUFNLE1BQU0sR0FBRztJQUNiLFdBQVcsRUFBRSxHQUFHO0lBQ2hCLE1BQU0sRUFBRSxHQUFHO0NBQ1osQ0FBQztBQUVGLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQiwrQ0FBTyxDQUFBO0lBQ1AsNkNBQU0sQ0FBQTtBQUNSLENBQUMsRUFIVyxTQUFTLEdBQVQsaUJBQVMsS0FBVCxpQkFBUyxRQUdwQjtBQUVEO0lBa0JFLHFCQUFxQjtJQUVyQiwrQkFBb0IsSUFBZ0IsRUFBVSxHQUFtQjtRQUE3QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBZ0I7UUFYeEQsY0FBUyxHQUE4QixFQUFFLENBQUM7UUFDMUMsY0FBUyxHQUFhLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFFakQsNEJBQTRCO1FBQ2xCLG9CQUFlLEdBQUcsSUFBSSxtQkFBWSxFQUFPLENBQUM7UUFFNUMsY0FBUyxHQUFHLEtBQUssQ0FBQztJQU0xQixDQUFDO0lBRUQsd0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCwyQ0FBVyxHQUFYO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sc0NBQU0sR0FBZCxVQUFlLENBQVE7UUFDckIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVELDJDQUFXLEdBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDOUM7YUFBTSxJQUFHLE9BQU8sQ0FBQyxRQUFRLElBQUUsT0FBTyxDQUFDLFNBQVMsRUFBQztZQUM1QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEI7SUFDSCxDQUFDO0lBRUQsNkNBQWEsR0FBYixVQUFjLEdBQVU7UUFBeEIsaUJBVUM7UUFUQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBUztZQUMxQyxJQUFJLEdBQUcsS0FBSyxLQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNwQixlQUFlO2dCQUNmLE9BQU87YUFDUjtZQUNELEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBRXJCLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx5Q0FBUyxHQUFUO1FBQUEsaUJBa0NDO1FBakNDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7WUFDakIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksS0FBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbEIsT0FBTzthQUNSO1lBRUQsSUFBTSxPQUFPLEdBQW9CO2dCQUMvQixvQkFBb0I7Z0JBQ3BCLEtBQUssRUFBRSxNQUFNO2FBQ2QsQ0FBQztZQUVGLElBQUcsS0FBSSxDQUFDLFNBQVMsS0FBRyxTQUFTLENBQUMsTUFBTSxFQUFDO2dCQUNuQyxPQUFPLENBQUMsWUFBWSxHQUFHLFVBQUMsT0FBTyxFQUFFLE1BQU07b0JBQ3JDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDaEMsQ0FBQyxDQUFDO2FBQ0g7WUFFRCxLQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUVyRCxLQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxPQUFjLEVBQUUsVUFBQyxLQUFLO2dCQUN4QyxJQUFJLEtBQUksQ0FBQyxlQUFlLEVBQUU7b0JBQ3hCLEtBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDbEQsMkNBQTJDO2lCQUM1QztnQkFDRCxLQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7Z0JBQ25DLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDO29CQUM1QixNQUFNLEVBQUMsQ0FBQztpQkFDVCxDQUFDLENBQUM7Z0JBRUgsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMxRCxDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs4RkF6RlUscUJBQXFCOzhEQUFyQixxQkFBcUI7Z0NBdEJsQztDQWdIQyxBQS9GRCxJQStGQztBQTFGWSxzREFBcUI7a0RBQXJCLHFCQUFxQjtjQUxqQyxnQkFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUUsRUFBRTtnQkFDWixNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDYjswRkFFVSxHQUFHO2tCQUFYLFlBQUs7WUFDRyxRQUFRO2tCQUFoQixZQUFLO1lBQ0csTUFBTTtrQkFBZCxZQUFLO1lBQ0csU0FBUztrQkFBakIsWUFBSztZQUNHLFNBQVM7a0JBQWpCLFlBQUs7WUFHSSxlQUFlO2tCQUF4QixhQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIEwgZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgJ2xlYWZsZXQudmVjdG9yZ3JpZCc7XG5pbXBvcnQgeyBMZWFmbGV0U2VydmljZSB9IGZyb20gJy4vbGVhZmxldC5zZXJ2aWNlJztcbmltcG9ydCB7IFRpbGVkU3VibGF5ZXJEZXNjcmlwdG9yIH0gZnJvbSAnLi9kYXRhJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmNvbnN0IFNUWUxFUyA9IHtcbiAgZmlsbE9wYWNpdHk6IDAuMCxcbiAgd2VpZ2h0OiAxLjBcbn07XG5cbmV4cG9ydCBlbnVtIFBvaW50TW9kZSB7XG4gIGRlZmF1bHQsXG4gIGNpcmNsZVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdnZW9qc29uLWxheWVyJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBzdHlsZXM6IFsnJ11cbn0pXG5leHBvcnQgY2xhc3MgR2VvanNvbkxheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIHVybDogc3RyaW5nO1xuICBASW5wdXQoKSBmZWF0dXJlczogYW55O1xuICBASW5wdXQoKSBzdHlsZXM6IGFueTtcbiAgQElucHV0KCkgc3VibGF5ZXJzOiBUaWxlZFN1YmxheWVyRGVzY3JpcHRvcltdID0gW107XG4gIEBJbnB1dCgpIHBvaW50TW9kZTpQb2ludE1vZGUgPSBQb2ludE1vZGUuZGVmYXVsdDtcblxuICAvLyBASW5wdXQoKSBpZENvbHVtbiA9ICdpZCc7XG4gIEBPdXRwdXQoKSBmZWF0dXJlU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwcml2YXRlIGRlc3Ryb3llZCA9IGZhbHNlO1xuICBwcml2YXRlIHNlbGVjdGVkRmVhdHVyZTogYW55O1xuICBwcml2YXRlIHZlY3RvckxheWVyOiBMLkdlb0pTT047XG4gIC8vIHByaXZhdGUgZGF0YTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBtYXA6IExlYWZsZXRTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICB0aGlzLm1hcC5tYXAudGhlbihtID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKG0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmUobTogTC5NYXApOiB2b2lkIHtcbiAgICBpZiAodGhpcy52ZWN0b3JMYXllcikge1xuICAgICAgdGhpcy52ZWN0b3JMYXllci5yZW1vdmVGcm9tKG0pO1xuICAgICAgdGhpcy52ZWN0b3JMYXllciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLnVybCkge1xuICAgICAgdGhpcy5kb3dubG9hZExheWVyKGNoYW5nZXMudXJsLmN1cnJlbnRWYWx1ZSk7XG4gICAgfSBlbHNlIGlmKGNoYW5nZXMuZmVhdHVyZXN8fGNoYW5nZXMucG9pbnRNb2RlKXtcbiAgICAgIHRoaXMubWFrZUxheWVyKCk7XG4gICAgfVxuICB9XG5cbiAgZG93bmxvYWRMYXllcih1cmw6c3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5odHRwLmdldCh0aGlzLnVybCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcbiAgICAgIGlmICh1cmwgIT09IHRoaXMudXJsKSB7XG4gICAgICAgIC8vIG91dCBvZiBkYXRlIVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmZlYXR1cmVzID0gZGF0YTtcblxuICAgICAgdGhpcy5tYWtlTGF5ZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG1ha2VMYXllcigpOiB2b2lkIHtcbiAgICB0aGlzLm1hcC5tYXAudGhlbihtID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlKG0pO1xuICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb3B0aW9uczpMLkdlb0pTT05PcHRpb25zID0ge1xuICAgICAgICAvLyBpbnRlcmFjdGl2ZTogdHJ1ZVxuICAgICAgICBzdHlsZTogU1RZTEVTXG4gICAgICB9O1xuXG4gICAgICBpZih0aGlzLnBvaW50TW9kZT09PVBvaW50TW9kZS5jaXJjbGUpe1xuICAgICAgICBvcHRpb25zLnBvaW50VG9MYXllciA9IChmZWF0dXJlLCBsYXRsbmcpID0+IHtcbiAgICAgICAgICByZXR1cm4gTC5jaXJjbGVNYXJrZXIobGF0bG5nKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgdGhpcy52ZWN0b3JMYXllciA9IEwuZ2VvSlNPTih0aGlzLmZlYXR1cmVzLCBvcHRpb25zKTtcblxuICAgICAgdGhpcy52ZWN0b3JMYXllci5vbignY2xpY2snIGFzIGFueSwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkRmVhdHVyZSkge1xuICAgICAgICAgIHRoaXMudmVjdG9yTGF5ZXIucmVzZXRTdHlsZSh0aGlzLnNlbGVjdGVkRmVhdHVyZSk7XG4gICAgICAgICAgLy8gcmVzZXRGZWF0dXJlU3R5bGUodGhpcy5zZWxlY3RlZEZlYXR1cmUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRGZWF0dXJlID0gZXZlbnQubGF5ZXI7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRGZWF0dXJlLnNldFN0eWxlKHtcbiAgICAgICAgICB3ZWlnaHQ6NVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmZlYXR1cmVTZWxlY3RlZC5lbWl0KHRoaXMuc2VsZWN0ZWRGZWF0dXJlLmZlYXR1cmUpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnZlY3RvckxheWVyLmFkZFRvKG0pO1xuICAgIH0pO1xuICB9XG59XG4iXX0=