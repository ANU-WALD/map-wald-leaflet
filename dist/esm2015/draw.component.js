"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawComponent = void 0;
const core_1 = require("@angular/core");
const L = require("leaflet");
require("leaflet-draw");
const leaflet_service_1 = require("./leaflet.service");
const i0 = require("@angular/core");
const i1 = require("./leaflet.service");
class DrawComponent {
    constructor(map) {
        this.map = map;
        this.featureClosed = new core_1.EventEmitter();
        this.keyHandler = (event) => {
            const key = event.originalEvent.key;
            if (key === 'Escape') {
                this.drawnItems.clearLayers();
                this.polygon.removeHooks();
                this.map.withMap(m => this.initiateDrawing(m));
            }
            else if ((key === 'Delete') || (key === 'Backspace')) {
                this.polygon.deleteLastVertex();
            }
        };
    }
    ngOnDestroy() {
        this.map.withMap(m => this.removeControl(m));
    }
    ngOnInit() {
        this.map.withMap(m => this.addControl(m));
    }
    removeControl(m) {
        m.removeLayer(this.drawnItems);
        this.polygon.removeHooks();
        // m.removeControl(this.drawControl);
        m.off(L.Draw.Event.DRAWSTART);
        m.off(L.Draw.Event.CREATED);
        m.off('keyup', this.keyHandler);
    }
    addControl(m) {
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
        m.on(L.Draw.Event.DRAWSTART, (event) => {
            this.drawnItems.clearLayers();
        });
        m.on(L.Draw.Event.DRAWVERTEX, (event) => {
            this.drawnItems.clearLayers();
        });
        m.on(L.Draw.Event.CREATED, (event) => {
            console.log(event);
            const layer = event.layer;
            this.drawnItems.clearLayers();
            this.drawnItems.addLayer(layer);
            this.featureClosed.emit(layer.toGeoJSON());
            this.polygon.removeHooks();
            this.initiateDrawing(m);
        });
        m.on('keyup', this.keyHandler);
    }
    initiateDrawing(m) {
        L.Draw.Polygon.prototype._onTouch = L.Util.falseFn;
        this.polygon = new L.Draw.Polygon(m, { repeatMode: false });
        this.polygon.addHooks();
    }
}
exports.DrawComponent = DrawComponent;
DrawComponent.ɵfac = function DrawComponent_Factory(t) { return new (t || DrawComponent)(i0.ɵɵdirectiveInject(i1.LeafletService)); };
DrawComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DrawComponent, selectors: [["draw"]], outputs: { featureClosed: "featureClosed" }, decls: 0, vars: 0, template: function DrawComponent_Template(rf, ctx) { }, encapsulation: 2 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC1sZWFmbGV0LyIsInNvdXJjZXMiOlsiZHJhdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQW1GO0FBQ25GLDZCQUE2QjtBQUM3Qix3QkFBc0I7QUFDdEIsdURBQW1EOzs7QUFFbkQsTUFLYSxhQUFhO0lBT3hCLFlBQW9CLEdBQW1CO1FBQW5CLFFBQUcsR0FBSCxHQUFHLENBQWdCO1FBTjdCLGtCQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUFPLENBQUM7UUFRbEQsZUFBVSxHQUFHLENBQUMsS0FBNkIsRUFBRSxFQUFFO1lBQzdDLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDO1lBQ3BDLElBQUksR0FBRyxLQUFLLFFBQVEsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBLEVBQUUsQ0FBQSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDOUM7aUJBQU0sSUFBRyxDQUFDLEdBQUcsS0FBSyxRQUFRLENBQUMsSUFBRSxDQUFDLEdBQUcsS0FBSyxXQUFXLENBQUMsRUFBRTtnQkFDbkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ2pDO1FBQ0gsQ0FBQyxDQUFBO0lBWDBDLENBQUM7SUFhNUMsV0FBVztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSxFQUFFLENBQUEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzVDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENB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QWIsYUFBYTtrREFBYixhQUFhO2NBTHpCLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLFFBQVEsRUFBRSxFQUFFO2dCQUNaLE1BQU0sRUFBRSxFQUFFO2FBQ1g7aUVBRVcsYUFBYTtrQkFBdEIsYUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBMIGZyb20gJ2xlYWZsZXQnO1xuaW1wb3J0ICdsZWFmbGV0LWRyYXcnO1xuaW1wb3J0IHsgTGVhZmxldFNlcnZpY2UgfSBmcm9tICcuL2xlYWZsZXQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RyYXcnLFxuICB0ZW1wbGF0ZTogJycsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgRHJhd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQE91dHB1dCgpIGZlYXR1cmVDbG9zZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBwcml2YXRlIGRyYXduSXRlbXM6IEwuRmVhdHVyZUdyb3VwO1xuICBwcml2YXRlIGRyYXdDb250cm9sOiBMLkNvbnRyb2wuRHJhdztcbiAgcHJpdmF0ZSBwb2x5Z29uOiBMLkRyYXcuUG9seWdvbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTGVhZmxldFNlcnZpY2UpIHsgfVxuXG4gIGtleUhhbmRsZXIgPSAoZXZlbnQ6IEwuTGVhZmxldEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICBjb25zdCBrZXkgPSBldmVudC5vcmlnaW5hbEV2ZW50LmtleTtcbiAgICBpZiAoa2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgdGhpcy5kcmF3bkl0ZW1zLmNsZWFyTGF5ZXJzKCk7XG4gICAgICB0aGlzLnBvbHlnb24ucmVtb3ZlSG9va3MoKTtcbiAgICAgIHRoaXMubWFwLndpdGhNYXAobT0+dGhpcy5pbml0aWF0ZURyYXdpbmcobSkpO1xuICAgIH0gZWxzZSBpZigoa2V5ID09PSAnRGVsZXRlJyl8fChrZXkgPT09ICdCYWNrc3BhY2UnKSApe1xuICAgICAgdGhpcy5wb2x5Z29uLmRlbGV0ZUxhc3RWZXJ0ZXgoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLm1hcC53aXRoTWFwKG09PnRoaXMucmVtb3ZlQ29udHJvbChtKSlcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMubWFwLndpdGhNYXAobT0+dGhpcy5hZGRDb250cm9sKG0pKVxuICB9XG5cbiAgcmVtb3ZlQ29udHJvbChtOiBMLk1hcCk6IHZvaWQge1xuICAgIG0ucmVtb3ZlTGF5ZXIodGhpcy5kcmF3bkl0ZW1zKTtcbiAgICB0aGlzLnBvbHlnb24ucmVtb3ZlSG9va3MoKTtcbiAgICAvLyBtLnJlbW92ZUNvbnRyb2wodGhpcy5kcmF3Q29udHJvbCk7XG4gICAgbS5vZmYoTC5EcmF3LkV2ZW50LkRSQVdTVEFSVCk7XG4gICAgbS5vZmYoTC5EcmF3LkV2ZW50LkNSRUFURUQpO1xuICAgIG0ub2ZmKCdrZXl1cCcsdGhpcy5rZXlIYW5kbGVyKTtcbiAgfVxuXG4gIGFkZENvbnRyb2wobTogTC5NYXApOiB2b2lkIHtcbiAgICB0aGlzLmRyYXduSXRlbXMgPSBuZXcgTC5GZWF0dXJlR3JvdXAoKTtcbiAgICBtLmFkZExheWVyKHRoaXMuZHJhd25JdGVtcyk7XG5cbiAgICAvLyB0aGlzLmRyYXdDb250cm9sID0gbmV3IEwuQ29udHJvbC5EcmF3KHtcbiAgICAvLyAgIGRyYXc6IHtcbiAgICAvLyAgICAgcG9seWxpbmU6IGZhbHNlLFxuICAgIC8vICAgICBjaXJjbGU6IGZhbHNlLFxuICAgIC8vICAgICBtYXJrZXI6IGZhbHNlLFxuICAgIC8vICAgICByZWN0YW5nbGU6IGZhbHNlLFxuICAgIC8vICAgICBjaXJjbGVtYXJrZXI6IGZhbHNlXG4gICAgLy8gICB9LFxuICAgIC8vICAgZWRpdDogbnVsbFxuICAgIC8vIH0pO1xuICAgIC8vIG0uYWRkQ29udHJvbCh0aGlzLmRyYXdDb250cm9sKTtcbiAgICB0aGlzLmluaXRpYXRlRHJhd2luZyhtKTtcblxuICAgIG0ub24oTC5EcmF3LkV2ZW50LkRSQVdTVEFSVCwgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmRyYXduSXRlbXMuY2xlYXJMYXllcnMoKTtcbiAgICB9KTtcblxuICAgIG0ub24oTC5EcmF3LkV2ZW50LkRSQVdWRVJURVgsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5kcmF3bkl0ZW1zLmNsZWFyTGF5ZXJzKCk7XG4gICAgfSk7XG5cbiAgICBtLm9uKEwuRHJhdy5FdmVudC5DUkVBVEVELCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcblxuICAgICAgY29uc3QgbGF5ZXIgPSBldmVudC5sYXllcjtcbiAgICAgIHRoaXMuZHJhd25JdGVtcy5jbGVhckxheWVycygpO1xuICAgICAgdGhpcy5kcmF3bkl0ZW1zLmFkZExheWVyKGxheWVyKTtcbiAgICAgIHRoaXMuZmVhdHVyZUNsb3NlZC5lbWl0KGxheWVyLnRvR2VvSlNPTigpKTtcbiAgICAgIHRoaXMucG9seWdvbi5yZW1vdmVIb29rcygpO1xuICAgICAgdGhpcy5pbml0aWF0ZURyYXdpbmcobSk7XG4gICAgfSk7XG5cbiAgICBtLm9uKCdrZXl1cCcsdGhpcy5rZXlIYW5kbGVyKTtcbiAgfVxuXG4gIGluaXRpYXRlRHJhd2luZyhtOiBMLk1hcCk6IHZvaWQge1xuICAgIChMLkRyYXcuUG9seWdvbi5wcm90b3R5cGUgYXMgYW55KS5fb25Ub3VjaCA9IEwuVXRpbC5mYWxzZUZuO1xuICAgIHRoaXMucG9seWdvbiA9IG5ldyBMLkRyYXcuUG9seWdvbihtIGFzIEwuRHJhd01hcCwge3JlcGVhdE1vZGU6IGZhbHNlfSk7XG4gICAgdGhpcy5wb2x5Z29uLmFkZEhvb2tzKCk7XG4gIH1cbn1cblxuXG4iXX0=