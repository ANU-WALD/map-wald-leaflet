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
        L.Draw.Polygon.prototype._onTouch = L.Util.falseFn;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC1sZWFmbGV0LyIsInNvdXJjZXMiOlsiZHJhdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQW1GO0FBQ25GLDJCQUE2QjtBQUM3Qix3QkFBc0I7QUFDdEIscURBQW1EOzs7QUFFbkQ7SUFZRSx1QkFBb0IsR0FBbUI7UUFBdkMsaUJBQTRDO1FBQXhCLFFBQUcsR0FBSCxHQUFHLENBQWdCO1FBTjdCLGtCQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUFPLENBQUM7UUFRbEQsZUFBVSxHQUFHLFVBQUMsS0FBNkI7WUFDekMsSUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7WUFDcEMsSUFBSSxHQUFHLEtBQUssUUFBUSxFQUFFO2dCQUNwQixLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUM5QixLQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUMzQixLQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBRSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQzthQUM5QztpQkFBTSxJQUFHLENBQUMsR0FBRyxLQUFLLFFBQVEsQ0FBQyxJQUFFLENBQUMsR0FBRyxLQUFLLFdBQVcsQ0FBQyxFQUFFO2dCQUNuRCxLQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUM7YUFDakM7UUFDSCxDQUFDLENBQUE7SUFYMEMsQ0FBQztJQWE1QyxtQ0FBVyxHQUFYO1FBQUEsaUJBRUM7UUFEQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBRSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQXJCLENBQXFCLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0lBRUQsZ0NB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T0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzFCLENBQUM7OEVBaEZVLGFBQWE7c0RBQWIsYUFBYTt3QkFWMUI7Q0EyRkMsQUF0RkQsSUFzRkM7QUFqRlksc0NBQWE7a0RBQWIsYUFBYTtjQUx6QixnQkFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxNQUFNO2dCQUNoQixRQUFRLEVBQUUsRUFBRTtnQkFDWixNQUFNLEVBQUUsRUFBRTthQUNYO2lFQUVXLGFBQWE7a0JBQXRCLGFBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgTCBmcm9tICdsZWFmbGV0JztcbmltcG9ydCAnbGVhZmxldC1kcmF3JztcbmltcG9ydCB7IExlYWZsZXRTZXJ2aWNlIH0gZnJvbSAnLi9sZWFmbGV0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkcmF3JyxcbiAgdGVtcGxhdGU6ICcnLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIERyYXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBPdXRwdXQoKSBmZWF0dXJlQ2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgcHJpdmF0ZSBkcmF3bkl0ZW1zOiBMLkZlYXR1cmVHcm91cDtcbiAgcHJpdmF0ZSBkcmF3Q29udHJvbDogTC5Db250cm9sLkRyYXc7XG4gIHByaXZhdGUgcG9seWdvbjogTC5EcmF3LlBvbHlnb247XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IExlYWZsZXRTZXJ2aWNlKSB7IH1cblxuICBrZXlIYW5kbGVyID0gKGV2ZW50OiBMLkxlYWZsZXRLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgY29uc3Qga2V5ID0gZXZlbnQub3JpZ2luYWxFdmVudC5rZXk7XG4gICAgaWYgKGtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgIHRoaXMuZHJhd25JdGVtcy5jbGVhckxheWVycygpO1xuICAgICAgdGhpcy5wb2x5Z29uLnJlbW92ZUhvb2tzKCk7XG4gICAgICB0aGlzLm1hcC53aXRoTWFwKG09PnRoaXMuaW5pdGlhdGVEcmF3aW5nKG0pKTtcbiAgICB9IGVsc2UgaWYoKGtleSA9PT0gJ0RlbGV0ZScpfHwoa2V5ID09PSAnQmFja3NwYWNlJykgKXtcbiAgICAgIHRoaXMucG9seWdvbi5kZWxldGVMYXN0VmVydGV4KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5tYXAud2l0aE1hcChtPT50aGlzLnJlbW92ZUNvbnRyb2wobSkpXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm1hcC53aXRoTWFwKG09PnRoaXMuYWRkQ29udHJvbChtKSlcbiAgfVxuXG4gIHJlbW92ZUNvbnRyb2wobTogTC5NYXApOiB2b2lkIHtcbiAgICBtLnJlbW92ZUxheWVyKHRoaXMuZHJhd25JdGVtcyk7XG4gICAgdGhpcy5wb2x5Z29uLnJlbW92ZUhvb2tzKCk7XG4gICAgLy8gbS5yZW1vdmVDb250cm9sKHRoaXMuZHJhd0NvbnRyb2wpO1xuICAgIG0ub2ZmKEwuRHJhdy5FdmVudC5EUkFXU1RBUlQpO1xuICAgIG0ub2ZmKEwuRHJhdy5FdmVudC5DUkVBVEVEKTtcbiAgICBtLm9mZigna2V5dXAnLHRoaXMua2V5SGFuZGxlcik7XG4gIH1cblxuICBhZGRDb250cm9sKG06IEwuTWFwKTogdm9pZCB7XG4gICAgdGhpcy5kcmF3bkl0ZW1zID0gbmV3IEwuRmVhdHVyZUdyb3VwKCk7XG4gICAgbS5hZGRMYXllcih0aGlzLmRyYXduSXRlbXMpO1xuXG4gICAgLy8gdGhpcy5kcmF3Q29udHJvbCA9IG5ldyBMLkNvbnRyb2wuRHJhdyh7XG4gICAgLy8gICBkcmF3OiB7XG4gICAgLy8gICAgIHBvbHlsaW5lOiBmYWxzZSxcbiAgICAvLyAgICAgY2lyY2xlOiBmYWxzZSxcbiAgICAvLyAgICAgbWFya2VyOiBmYWxzZSxcbiAgICAvLyAgICAgcmVjdGFuZ2xlOiBmYWxzZSxcbiAgICAvLyAgICAgY2lyY2xlbWFya2VyOiBmYWxzZVxuICAgIC8vICAgfSxcbiAgICAvLyAgIGVkaXQ6IG51bGxcbiAgICAvLyB9KTtcbiAgICAvLyBtLmFkZENvbnRyb2wodGhpcy5kcmF3Q29udHJvbCk7XG4gICAgdGhpcy5pbml0aWF0ZURyYXdpbmcobSk7XG5cbiAgICBtLm9uKEwuRHJhdy5FdmVudC5EUkFXU1RBUlQsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5kcmF3bkl0ZW1zLmNsZWFyTGF5ZXJzKCk7XG4gICAgfSk7XG5cbiAgICBtLm9uKEwuRHJhdy5FdmVudC5EUkFXVkVSVEVYLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuZHJhd25JdGVtcy5jbGVhckxheWVycygpO1xuICAgIH0pO1xuXG4gICAgbS5vbihMLkRyYXcuRXZlbnQuQ1JFQVRFRCwgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhldmVudCk7XG5cbiAgICAgIGNvbnN0IGxheWVyID0gZXZlbnQubGF5ZXI7XG4gICAgICB0aGlzLmRyYXduSXRlbXMuY2xlYXJMYXllcnMoKTtcbiAgICAgIHRoaXMuZHJhd25JdGVtcy5hZGRMYXllcihsYXllcik7XG4gICAgICB0aGlzLmZlYXR1cmVDbG9zZWQuZW1pdChsYXllci50b0dlb0pTT04oKSk7XG4gICAgICB0aGlzLnBvbHlnb24ucmVtb3ZlSG9va3MoKTtcbiAgICAgIHRoaXMuaW5pdGlhdGVEcmF3aW5nKG0pO1xuICAgIH0pO1xuXG4gICAgbS5vbigna2V5dXAnLHRoaXMua2V5SGFuZGxlcik7XG4gIH1cblxuICBpbml0aWF0ZURyYXdpbmcobTogTC5NYXApOiB2b2lkIHtcbiAgICAoTC5EcmF3LlBvbHlnb24ucHJvdG90eXBlIGFzIGFueSkuX29uVG91Y2ggPSBMLlV0aWwuZmFsc2VGbjtcbiAgICB0aGlzLnBvbHlnb24gPSBuZXcgTC5EcmF3LlBvbHlnb24obSBhcyBMLkRyYXdNYXAsIHtyZXBlYXRNb2RlOiBmYWxzZX0pO1xuICAgIHRoaXMucG9seWdvbi5hZGRIb29rcygpO1xuICB9XG59XG5cblxuIl19