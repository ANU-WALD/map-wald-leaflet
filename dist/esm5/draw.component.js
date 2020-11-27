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
        this.map = map;
        this.featureClosed = new core_1.EventEmitter();
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
    };
    DrawComponent.prototype.initiateDrawing = function (m) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC1sZWFmbGV0LyIsInNvdXJjZXMiOlsiZHJhdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQW1GO0FBQ25GLDJCQUE2QjtBQUM3Qix3QkFBc0I7QUFDdEIscURBQW1EOzs7QUFFbkQ7SUFZRSx1QkFBb0IsR0FBbUI7UUFBbkIsUUFBRyxHQUFILEdBQUcsQ0FBZ0I7UUFON0Isa0JBQWEsR0FBRyxJQUFJLG1CQUFZLEVBQU8sQ0FBQztJQU1QLENBQUM7SUFFNUMsbUNBQVcsR0FBWDtRQUFBLGlCQUVDO1FBREMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUUsT0FBQSxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUE7SUFDNUMsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFFQztRQURDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFFLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFFRCxxQ0FBYSxHQUFiLFVBQWMsQ0FBUTtRQUNwQixDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNCLHFDQUFxQztRQUNyQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELGtDQUFVLEdBQVYsVUFBVyxDQUFRO1FBQW5CLGlCQW1DQztRQWxDQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTVCLDBDQUEwQztRQUMxQyxZQUFZO1FBQ1osdUJBQXVCO1FBQ3ZCLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsd0JBQXdCO1FBQ3hCLDBCQUEwQjtRQUMxQixPQUFPO1FBQ1AsZUFBZTtRQUNmLE1BQU07UUFDTixrQ0FBa0M7UUFDbEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV4QixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxVQUFDLEtBQUs7WUFDakMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUVILENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLFVBQUMsS0FBSztZQUNsQyxLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBRUgsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsVUFBQyxLQUFLO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFbkIsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUMxQixLQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hDLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQzNDLEtBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDM0IsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCx1Q0FBZSxHQUFmLFVBQWdCLENBQVE7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQWMsRUFBRSxFQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs4RUFqRVUsYUFBYTtzREFBYixhQUFhO3dCQVYxQjtDQTRFQyxBQXZFRCxJQXVFQztBQWxFWSxzQ0FBYTtrREFBYixhQUFhO2NBTHpCLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFFBQVEsRUFBRSxFQUFFO2dCQUNaLE1BQU0sRUFBRSxFQUFFO2FBQ1g7aUVBRVcsYUFBYTtrQkFBdEIsYUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBMIGZyb20gJ2xlYWZsZXQnO1xuaW1wb3J0ICdsZWFmbGV0LWRyYXcnO1xuaW1wb3J0IHsgTGVhZmxldFNlcnZpY2UgfSBmcm9tICcuL2xlYWZsZXQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RyYXcnLFxuICB0ZW1wbGF0ZTogJycsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgRHJhd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQE91dHB1dCgpIGZlYXR1cmVDbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwcml2YXRlIGRyYXduSXRlbXM6IEwuRmVhdHVyZUdyb3VwO1xuICBwcml2YXRlIGRyYXdDb250cm9sOiBMLkNvbnRyb2wuRHJhdztcbiAgcHJpdmF0ZSBwb2x5Z29uOiBMLkRyYXcuUG9seWdvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTGVhZmxldFNlcnZpY2UpIHsgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubWFwLndpdGhNYXAobT0+dGhpcy5yZW1vdmVDb250cm9sKG0pKVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5tYXAud2l0aE1hcChtPT50aGlzLmFkZENvbnRyb2wobSkpXG4gIH1cblxuICByZW1vdmVDb250cm9sKG06IEwuTWFwKTogdm9pZCB7XG4gICAgbS5yZW1vdmVMYXllcih0aGlzLmRyYXduSXRlbXMpO1xuICAgIHRoaXMucG9seWdvbi5yZW1vdmVIb29rcygpO1xuICAgIC8vIG0ucmVtb3ZlQ29udHJvbCh0aGlzLmRyYXdDb250cm9sKTtcbiAgICBtLm9mZihMLkRyYXcuRXZlbnQuRFJBV1NUQVJUKTtcbiAgICBtLm9mZihMLkRyYXcuRXZlbnQuQ1JFQVRFRCk7XG4gIH1cblxuICBhZGRDb250cm9sKG06IEwuTWFwKTogdm9pZCB7XG4gICAgdGhpcy5kcmF3bkl0ZW1zID0gbmV3IEwuRmVhdHVyZUdyb3VwKCk7XG4gICAgbS5hZGRMYXllcih0aGlzLmRyYXduSXRlbXMpO1xuXG4gICAgLy8gdGhpcy5kcmF3Q29udHJvbCA9IG5ldyBMLkNvbnRyb2wuRHJhdyh7XG4gICAgLy8gICBkcmF3OiB7XG4gICAgLy8gICAgIHBvbHlsaW5lOiBmYWxzZSxcbiAgICAvLyAgICAgY2lyY2xlOiBmYWxzZSxcbiAgICAvLyAgICAgbWFya2VyOiBmYWxzZSxcbiAgICAvLyAgICAgcmVjdGFuZ2xlOiBmYWxzZSxcbiAgICAvLyAgICAgY2lyY2xlbWFya2VyOiBmYWxzZVxuICAgIC8vICAgfSxcbiAgICAvLyAgIGVkaXQ6IG51bGxcbiAgICAvLyB9KTtcbiAgICAvLyBtLmFkZENvbnRyb2wodGhpcy5kcmF3Q29udHJvbCk7XG4gICAgdGhpcy5pbml0aWF0ZURyYXdpbmcobSk7XG5cbiAgICBtLm9uKEwuRHJhdy5FdmVudC5EUkFXU1RBUlQsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5kcmF3bkl0ZW1zLmNsZWFyTGF5ZXJzKCk7XG4gICAgfSk7XG5cbiAgICBtLm9uKEwuRHJhdy5FdmVudC5EUkFXVkVSVEVYLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuZHJhd25JdGVtcy5jbGVhckxheWVycygpO1xuICAgIH0pO1xuXG4gICAgbS5vbihMLkRyYXcuRXZlbnQuQ1JFQVRFRCwgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhldmVudCk7XG5cbiAgICAgIGNvbnN0IGxheWVyID0gZXZlbnQubGF5ZXI7XG4gICAgICB0aGlzLmRyYXduSXRlbXMuY2xlYXJMYXllcnMoKTtcbiAgICAgIHRoaXMuZHJhd25JdGVtcy5hZGRMYXllcihsYXllcik7XG4gICAgICB0aGlzLmZlYXR1cmVDbG9zZWQuZW1pdChsYXllci50b0dlb0pTT04oKSk7XG4gICAgICB0aGlzLnBvbHlnb24ucmVtb3ZlSG9va3MoKTtcbiAgICAgIHRoaXMuaW5pdGlhdGVEcmF3aW5nKG0pO1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdGlhdGVEcmF3aW5nKG06IEwuTWFwKTogdm9pZCB7XG4gICAgdGhpcy5wb2x5Z29uID0gbmV3IEwuRHJhdy5Qb2x5Z29uKG0gYXMgTC5EcmF3TWFwLCB7cmVwZWF0TW9kZTogZmFsc2V9KTtcbiAgICB0aGlzLnBvbHlnb24uYWRkSG9va3MoKTtcbiAgfVxufVxuXG5cbiJdfQ==