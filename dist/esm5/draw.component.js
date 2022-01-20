"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawComponent = void 0;
var core_1 = require("@angular/core");
var L = require("leaflet");
require("leaflet-draw");
var leaflet_service_1 = require("./leaflet.service");
var i0 = require("@angular/core");
var i1 = require("./leaflet.service");
var DrawComponent = /** @class */ (function () {
    function DrawComponent(map) {
        var _this = this;
        this.map = map;
        // @Input() zIndex = 2000;
        this.featureClosed = new core_1.EventEmitter();
        this.keyHandler = function (event) {
            var key = event.originalEvent.key;
            if (key === 'Escape') {
                _this.drawnItems.clearLayers();
                _this.polygon.removeHooks();
                _this.map.withMap(function (m) { return _this.initiateDrawing(m); });
            }
            else if ((key === 'Delete') || (key === 'Backspace')) {
                _this.polygon.deleteLastVertex();
            }
        };
    }
    DrawComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.map.withMap(function (m) { return _this.removeControl(m); });
    };
    DrawComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.map.withMap(function (m) { return _this.addControl(m); });
    };
    DrawComponent.prototype.removeControl = function (m) {
        m.removeLayer(this.drawnItems);
        this.polygon.removeHooks();
        // m.removeControl(this.drawControl);
        m.off(L.Draw.Event.DRAWSTART);
        m.off(L.Draw.Event.CREATED);
        m.off('keyup', this.keyHandler);
    };
    DrawComponent.prototype.addControl = function (m) {
        var _this = this;
        this.drawnItems = new L.FeatureGroup();
        m.addLayer(this.drawnItems);
        // this.drawControl = new L.Control.Draw({
        //   draw: {
        //     polyline: false,
        //     circle: false,
        //     marker: false,
        //     rectangle: false,
        //     circlemarker: false
        //   },
        //   edit: null
        // });
        // m.addControl(this.drawControl);
        this.initiateDrawing(m);
        m.on(L.Draw.Event.DRAWSTART, function (event) {
            _this.drawnItems.clearLayers();
        });
        m.on(L.Draw.Event.DRAWVERTEX, function (event) {
            _this.drawnItems.clearLayers();
        });
        m.on(L.Draw.Event.CREATED, function (event) {
            console.log(event);
            var layer = event.layer;
            _this.drawnItems.clearLayers();
            _this.drawnItems.addLayer(layer);
            _this.featureClosed.emit(layer.toGeoJSON());
            _this.polygon.removeHooks();
            _this.initiateDrawing(m);
        });
        m.on('keyup', this.keyHandler);
    };
    DrawComponent.prototype.initiateDrawing = function (m) {
        // const pane = `drawn-polygon-${this.zIndex}`;
        // ensurePane(m,pane,this.zIndex);
        L.Draw.Polygon.prototype._onTouch = L.Util.falseFn;
        // const options = {zIndexOffset:this.zIndex,repeatMode: false};
        this.polygon = new L.Draw.Polygon(m, { repeatMode: false });
        this.polygon.addHooks();
    };
    DrawComponent.ɵfac = function DrawComponent_Factory(t) { return new (t || DrawComponent)(i0.ɵɵdirectiveInject(i1.LeafletService)); };
    DrawComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DrawComponent, selectors: [["draw"]], outputs: { featureClosed: "featureClosed" }, decls: 0, vars: 0, template: function DrawComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return DrawComponent;
}());
exports.DrawComponent = DrawComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DrawComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'draw',
                template: '',
                styles: []
            }]
    }], function () { return [{ type: i1.LeafletService }]; }, { featureClosed: [{
            type: core_1.Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC1sZWFmbGV0LyIsInNvdXJjZXMiOlsiZHJhdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTBGO0FBQzFGLDJCQUE2QjtBQUM3Qix3QkFBc0I7QUFDdEIscURBQStEOzs7QUFFL0Q7SUFhRSx1QkFBb0IsR0FBbUI7UUFBdkMsaUJBQTRDO1FBQXhCLFFBQUcsR0FBSCxHQUFHLENBQWdCO1FBUHZDLDBCQUEwQjtRQUNoQixrQkFBYSxHQUFHLElBQUksbUJBQVksRUFBTyxDQUFDO1FBUWxELGVBQVUsR0FBRyxVQUFDLEtBQTZCO1lBQ3pDLElBQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDO1lBQ3BDLElBQUksR0FBRyxLQUFLLFFBQVEsRUFBRTtnQkFDcEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDOUIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDM0IsS0FBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUUsT0FBQSxLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7YUFDOUM7aUJBQU0sSUFBRyxDQUFDLEdBQUcsS0FBSyxRQUFRLENBQUMsSUFBRSxDQUFDLEdBQUcsS0FBSyxXQUFXLENBQUMsRUFBRTtnQkFDbkQsS0FBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ2pDO1FBQ0gsQ0FBQyxDQUFBO0lBWDBDLENBQUM7SUFhNUMsbUNBQVcsR0FBWDtRQUFBLGlCQUVDO1FBREMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUUsT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUE7SUFDNUMs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LEVBQUMsVUFBVSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMxQixDQUFDOzhFQXBGVSxhQUFhO3NEQUFiLGFBQWE7d0JBVjFCO0NBK0ZDLEFBMUZELElBMEZDO0FBckZZLHNDQUFhO2tEQUFiLGFBQWE7Y0FMekIsZ0JBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsTUFBTTtnQkFDaEIsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osTUFBTSxFQUFFLEVBQUU7YUFDWDtpRUFHVyxhQUFhO2tCQUF0QixhQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBMIGZyb20gJ2xlYWZsZXQnO1xuaW1wb3J0ICdsZWFmbGV0LWRyYXcnO1xuaW1wb3J0IHsgZW5zdXJlUGFuZSwgTGVhZmxldFNlcnZpY2UgfSBmcm9tICcuL2xlYWZsZXQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RyYXcnLFxuICB0ZW1wbGF0ZTogJycsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgRHJhd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLy8gQElucHV0KCkgekluZGV4ID0gMjAwMDtcbiAgQE91dHB1dCgpIGZlYXR1cmVDbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwcml2YXRlIGRyYXduSXRlbXM6IEwuRmVhdHVyZUdyb3VwO1xuICBwcml2YXRlIGRyYXdDb250cm9sOiBMLkNvbnRyb2wuRHJhdztcbiAgcHJpdmF0ZSBwb2x5Z29uOiBMLkRyYXcuUG9seWdvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTGVhZmxldFNlcnZpY2UpIHsgfVxuXG4gIGtleUhhbmRsZXIgPSAoZXZlbnQ6IEwuTGVhZmxldEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBjb25zdCBrZXkgPSBldmVudC5vcmlnaW5hbEV2ZW50LmtleTtcbiAgICBpZiAoa2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgdGhpcy5kcmF3bkl0ZW1zLmNsZWFyTGF5ZXJzKCk7XG4gICAgICB0aGlzLnBvbHlnb24ucmVtb3ZlSG9va3MoKTtcbiAgICAgIHRoaXMubWFwLndpdGhNYXAobT0+dGhpcy5pbml0aWF0ZURyYXdpbmcobSkpO1xuICAgIH0gZWxzZSBpZigoa2V5ID09PSAnRGVsZXRlJyl8fChrZXkgPT09ICdCYWNrc3BhY2UnKSApe1xuICAgICAgdGhpcy5wb2x5Z29uLmRlbGV0ZUxhc3RWZXJ0ZXgoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm1hcC53aXRoTWFwKG09PnRoaXMucmVtb3ZlQ29udHJvbChtKSlcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubWFwLndpdGhNYXAobT0+dGhpcy5hZGRDb250cm9sKG0pKVxuICB9XG5cbiAgcmVtb3ZlQ29udHJvbChtOiBMLk1hcCk6IHZvaWQge1xuICAgIG0ucmVtb3ZlTGF5ZXIodGhpcy5kcmF3bkl0ZW1zKTtcbiAgICB0aGlzLnBvbHlnb24ucmVtb3ZlSG9va3MoKTtcbiAgICAvLyBtLnJlbW92ZUNvbnRyb2wodGhpcy5kcmF3Q29udHJvbCk7XG4gICAgbS5vZmYoTC5EcmF3LkV2ZW50LkRSQVdTVEFSVCk7XG4gICAgbS5vZmYoTC5EcmF3LkV2ZW50LkNSRUFURUQpO1xuICAgIG0ub2ZmKCdrZXl1cCcsdGhpcy5rZXlIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZENvbnRyb2wobTogTC5NYXApOiB2b2lkIHtcbiAgICB0aGlzLmRyYXduSXRlbXMgPSBuZXcgTC5GZWF0dXJlR3JvdXAoKTtcbiAgICBtLmFkZExheWVyKHRoaXMuZHJhd25JdGVtcyk7XG5cbiAgICAvLyB0aGlzLmRyYXdDb250cm9sID0gbmV3IEwuQ29udHJvbC5EcmF3KHtcbiAgICAvLyAgIGRyYXc6IHtcbiAgICAvLyAgICAgcG9seWxpbmU6IGZhbHNlLFxuICAgIC8vICAgICBjaXJjbGU6IGZhbHNlLFxuICAgIC8vICAgICBtYXJrZXI6IGZhbHNlLFxuICAgIC8vICAgICByZWN0YW5nbGU6IGZhbHNlLFxuICAgIC8vICAgICBjaXJjbGVtYXJrZXI6IGZhbHNlXG4gICAgLy8gICB9LFxuICAgIC8vICAgZWRpdDogbnVsbFxuICAgIC8vIH0pO1xuICAgIC8vIG0uYWRkQ29udHJvbCh0aGlzLmRyYXdDb250cm9sKTtcbiAgICB0aGlzLmluaXRpYXRlRHJhd2luZyhtKTtcblxuICAgIG0ub24oTC5EcmF3LkV2ZW50LkRSQVdTVEFSVCwgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmRyYXduSXRlbXMuY2xlYXJMYXllcnMoKTtcbiAgICB9KTtcblxuICAgIG0ub24oTC5EcmF3LkV2ZW50LkRSQVdWRVJURVgsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5kcmF3bkl0ZW1zLmNsZWFyTGF5ZXJzKCk7XG4gICAgfSk7XG5cbiAgICBtLm9uKEwuRHJhdy5FdmVudC5DUkVBVEVELCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcblxuICAgICAgY29uc3QgbGF5ZXIgPSBldmVudC5sYXllcjtcbiAgICAgIHRoaXMuZHJhd25JdGVtcy5jbGVhckxheWVycygpO1xuICAgICAgdGhpcy5kcmF3bkl0ZW1zLmFkZExheWVyKGxheWVyKTtcbiAgICAgIHRoaXMuZmVhdHVyZUNsb3NlZC5lbWl0KGxheWVyLnRvR2VvSlNPTigpKTtcbiAgICAgIHRoaXMucG9seWdvbi5yZW1vdmVIb29rcygpO1xuICAgICAgdGhpcy5pbml0aWF0ZURyYXdpbmcobSk7XG4gICAgfSk7XG5cbiAgICBtLm9uKCdrZXl1cCcsdGhpcy5rZXlIYW5kbGVyKTtcbiAgfVxuXG4gIGluaXRpYXRlRHJhd2luZyhtOiBMLk1hcCk6IHZvaWQge1xuICAgIC8vIGNvbnN0IHBhbmUgPSBgZHJhd24tcG9seWdvbi0ke3RoaXMuekluZGV4fWA7XG4gICAgLy8gZW5zdXJlUGFuZShtLHBhbmUsdGhpcy56SW5kZXgpO1xuICAgIChMLkRyYXcuUG9seWdvbi5wcm90b3R5cGUgYXMgYW55KS5fb25Ub3VjaCA9IEwuVXRpbC5mYWxzZUZuO1xuICAgIC8vIGNvbnN0IG9wdGlvbnMgPSB7ekluZGV4T2Zmc2V0OnRoaXMuekluZGV4LHJlcGVhdE1vZGU6IGZhbHNlfTtcbiAgICB0aGlzLnBvbHlnb24gPSBuZXcgTC5EcmF3LlBvbHlnb24obSBhcyBMLkRyYXdNYXAsIHtyZXBlYXRNb2RlOiBmYWxzZX0pO1xuICAgIHRoaXMucG9seWdvbi5hZGRIb29rcygpO1xuICB9XG59XG5cblxuIl19