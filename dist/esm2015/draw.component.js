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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC1sZWFmbGV0LyIsInNvdXJjZXMiOlsiZHJhdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQW1GO0FBQ25GLDZCQUE2QjtBQUM3Qix3QkFBc0I7QUFDdEIsdURBQW1EOzs7QUFFbkQsTUFLYSxhQUFhO0lBT3hCLFlBQW9CLEdBQW1CO1FBQW5CLFFBQUcsR0FBSCxHQUFHLENBQWdCO1FBTjdCLGtCQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUFPLENBQUM7SUFNUCxDQUFDO0lBRTVDLFdBQVc7UUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUEsRUFBRSxDQUFBLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSxFQUFFLENBQUEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFFRCxhQUFhLENBQUMsQ0FBUTtRQUNwQixDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNCLHFDQUFxQztRQUNyQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELFVBQVUsQ0FBQyxDQUFRO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdkMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFNUIsMENBQTBDO1FBQzFDLFlBQVk7UUFDWix1QkFBdUI7UUFDdkIscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQix3QkFBd0I7UUFDeEIsMEJBQTBCO1FBQzFCLE9BQU87UUFDUCxlQUFlO1FBQ2YsTUFBTTtRQUNOLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXhCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUVILENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUVILENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVuQixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMzQixJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGVBQWUsQ0FBQyxDQUFRO1FBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQWlCLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzVELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFjLEVBQUUsRUFBQyxVQUFVLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzFCLENBQUM7O0FBdkVILHNDQXdFQzswRUFuRVksYUFBYTtrREFBYixhQUFhO2tEQUFiLGFBQWE7Y0FMekIsZ0JBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsTUFBTTtnQkFDaEIsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osTUFBTSxFQUFFLEVBQUU7YUFDWDtpRUFFVyxhQUFhO2tCQUF0QixhQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIEwgZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgJ2xlYWZsZXQtZHJhdyc7XG5pbXBvcnQgeyBMZWFmbGV0U2VydmljZSB9IGZyb20gJy4vbGVhZmxldC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZHJhdycsXG4gIHRlbXBsYXRlOiAnJyxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBEcmF3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBAT3V0cHV0KCkgZmVhdHVyZUNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHByaXZhdGUgZHJhd25JdGVtczogTC5GZWF0dXJlR3JvdXA7XG4gIHByaXZhdGUgZHJhd0NvbnRyb2w6IEwuQ29udHJvbC5EcmF3O1xuICBwcml2YXRlIHBvbHlnb246IEwuRHJhdy5Qb2x5Z29uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBMZWFmbGV0U2VydmljZSkgeyB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5tYXAud2l0aE1hcChtPT50aGlzLnJlbW92ZUNvbnRyb2wobSkpXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm1hcC53aXRoTWFwKG09PnRoaXMuYWRkQ29udHJvbChtKSlcbiAgfVxuXG4gIHJlbW92ZUNvbnRyb2wobTogTC5NYXApOiB2b2lkIHtcbiAgICBtLnJlbW92ZUxheWVyKHRoaXMuZHJhd25JdGVtcyk7XG4gICAgdGhpcy5wb2x5Z29uLnJlbW92ZUhvb2tzKCk7XG4gICAgLy8gbS5yZW1vdmVDb250cm9sKHRoaXMuZHJhd0NvbnRyb2wpO1xuICAgIG0ub2ZmKEwuRHJhdy5FdmVudC5EUkFXU1RBUlQpO1xuICAgIG0ub2ZmKEwuRHJhdy5FdmVudC5DUkVBVEVEKTtcbiAgfVxuXG4gIGFkZENvbnRyb2wobTogTC5NYXApOiB2b2lkIHtcbiAgICB0aGlzLmRyYXduSXRlbXMgPSBuZXcgTC5GZWF0dXJlR3JvdXAoKTtcbiAgICBtLmFkZExheWVyKHRoaXMuZHJhd25JdGVtcyk7XG5cbiAgICAvLyB0aGlzLmRyYXdDb250cm9sID0gbmV3IEwuQ29udHJvbC5EcmF3KHtcbiAgICAvLyAgIGRyYXc6IHtcbiAgICAvLyAgICAgcG9seWxpbmU6IGZhbHNlLFxuICAgIC8vICAgICBjaXJjbGU6IGZhbHNlLFxuICAgIC8vICAgICBtYXJrZXI6IGZhbHNlLFxuICAgIC8vICAgICByZWN0YW5nbGU6IGZhbHNlLFxuICAgIC8vICAgICBjaXJjbGVtYXJrZXI6IGZhbHNlXG4gICAgLy8gICB9LFxuICAgIC8vICAgZWRpdDogbnVsbFxuICAgIC8vIH0pO1xuICAgIC8vIG0uYWRkQ29udHJvbCh0aGlzLmRyYXdDb250cm9sKTtcbiAgICB0aGlzLmluaXRpYXRlRHJhd2luZyhtKTtcblxuICAgIG0ub24oTC5EcmF3LkV2ZW50LkRSQVdTVEFSVCwgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmRyYXduSXRlbXMuY2xlYXJMYXllcnMoKTtcbiAgICB9KTtcblxuICAgIG0ub24oTC5EcmF3LkV2ZW50LkRSQVdWRVJURVgsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5kcmF3bkl0ZW1zLmNsZWFyTGF5ZXJzKCk7XG4gICAgfSk7XG5cbiAgICBtLm9uKEwuRHJhdy5FdmVudC5DUkVBVEVELCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcblxuICAgICAgY29uc3QgbGF5ZXIgPSBldmVudC5sYXllcjtcbiAgICAgIHRoaXMuZHJhd25JdGVtcy5jbGVhckxheWVycygpO1xuICAgICAgdGhpcy5kcmF3bkl0ZW1zLmFkZExheWVyKGxheWVyKTtcbiAgICAgIHRoaXMuZmVhdHVyZUNsb3NlZC5lbWl0KGxheWVyLnRvR2VvSlNPTigpKTtcbiAgICAgIHRoaXMucG9seWdvbi5yZW1vdmVIb29rcygpO1xuICAgICAgdGhpcy5pbml0aWF0ZURyYXdpbmcobSk7XG4gICAgfSk7XG4gIH1cblxuICBpbml0aWF0ZURyYXdpbmcobTogTC5NYXApOiB2b2lkIHtcbiAgICAoTC5EcmF3LlBvbHlnb24ucHJvdG90eXBlIGFzIGFueSkuX29uVG91Y2ggPSBMLlV0aWwuZmFsc2VGbjtcbiAgICB0aGlzLnBvbHlnb24gPSBuZXcgTC5EcmF3LlBvbHlnb24obSBhcyBMLkRyYXdNYXAsIHtyZXBlYXRNb2RlOiBmYWxzZX0pO1xuICAgIHRoaXMucG9seWdvbi5hZGRIb29rcygpO1xuICB9XG59XG5cblxuIl19