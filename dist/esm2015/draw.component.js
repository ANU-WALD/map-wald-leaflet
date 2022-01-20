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
        // @Input() zIndex = 2000;
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
        // const pane = `drawn-polygon-${this.zIndex}`;
        // ensurePane(m,pane,this.zIndex);
        L.Draw.Polygon.prototype._onTouch = L.Util.falseFn;
        // const options = {zIndexOffset:this.zIndex,repeatMode: false};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXAtd2FsZC1sZWFmbGV0LyIsInNvdXJjZXMiOlsiZHJhdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0NBQTBGO0FBQzFGLDZCQUE2QjtBQUM3Qix3QkFBc0I7QUFDdEIsdURBQStEOzs7QUFFL0QsTUFLYSxhQUFhO0lBUXhCLFlBQW9CLEdBQW1CO1FBQW5CLFFBQUcsR0FBSCxHQUFHLENBQWdCO1FBUHZDLDBCQUEwQjtRQUNoQixrQkFBYSxHQUFHLElBQUksbUJBQVksRUFBTyxDQUFDO1FBUWxELGVBQVUsR0FBRyxDQUFDLEtBQTZCLEVBQUUsRUFBRTtZQUM3QyxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQztZQUNwQyxJQUFJLEdBQUcsS0FBSyxRQUFRLEVBQUU7Z0JBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSxFQUFFLENBQUEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQzlDO2lCQUFNLElBQUcsQ0FBQyxHQUFHLEtBQUssUUFBUSxDQUFDLElBQUUsQ0FBQyxHQUFHLEtBQUssV0FBVyxDQUFDLEVBQUU7Z0JBQ25ELElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzthQUNqQztRQUNILENBQUMsQ0FBQTtJQVgwQyxDQUFDO0lBYTVDLFdBQVc7UUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUEsRUFBRSxDQUFBLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUM1QyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSxFQUFFLENBQUEsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFFRCxhQUFhLENBQUMsQ0FBUTtRQUNwQixDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNCLHFDQUFxQztRQUNyQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxVQUFVLENBQUMsQ0FBUTtRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTVCLDBDQUEwQztRQUMxQyxZQUFZO1FBQ1osdUJBQXVCO1FBQ3ZCLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsd0JBQXdCO1FBQ3hCLDBCQUEwQjtRQUMxQixPQUFPO1FBQ1AsZUFBZTtRQUNmLE1BQU07UUFDTixrQ0FBa0M7UUFDbEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV4QixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFbkIsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUMxQixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUVILENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsZUFBZSxDQUFDLENBQVE7UUFDdEIsK0NBQStDO1FBQy9DLGtDQUFrQztRQUNqQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFpQixDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM1RCxnRUFBZ0U7UUFDaEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQWMsRUFBRSxFQUFDLFVBQVUsRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7QUF6Rkgsc0NBMEZDOzBFQXJGWSxhQUFhO2tEQUFiLGFBQWE7a0RBQWIsYUFBYTtjQUx6QixnQkFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxNQUFNO2dCQUNoQixRQUFRLEVBQUUsRUFBRTtnQkFDWixNQUFNLEVBQUUsRUFBRTthQUNYO2lFQUdXLGFBQWE7a0JBQXRCLGFBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIEwgZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgJ2xlYWZsZXQtZHJhdyc7XG5pbXBvcnQgeyBlbnN1cmVQYW5lLCBMZWFmbGV0U2VydmljZSB9IGZyb20gJy4vbGVhZmxldC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZHJhdycsXG4gIHRlbXBsYXRlOiAnJyxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBEcmF3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvLyBASW5wdXQoKSB6SW5kZXggPSAyMDAwO1xuICBAT3V0cHV0KCkgZmVhdHVyZUNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHByaXZhdGUgZHJhd25JdGVtczogTC5GZWF0dXJlR3JvdXA7XG4gIHByaXZhdGUgZHJhd0NvbnRyb2w6IEwuQ29udHJvbC5EcmF3O1xuICBwcml2YXRlIHBvbHlnb246IEwuRHJhdy5Qb2x5Z29uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBMZWFmbGV0U2VydmljZSkgeyB9XG5cbiAga2V5SGFuZGxlciA9IChldmVudDogTC5MZWFmbGV0S2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgIGNvbnN0IGtleSA9IGV2ZW50Lm9yaWdpbmFsRXZlbnQua2V5O1xuICAgIGlmIChrZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICB0aGlzLmRyYXduSXRlbXMuY2xlYXJMYXllcnMoKTtcbiAgICAgIHRoaXMucG9seWdvbi5yZW1vdmVIb29rcygpO1xuICAgICAgdGhpcy5tYXAud2l0aE1hcChtPT50aGlzLmluaXRpYXRlRHJhd2luZyhtKSk7XG4gICAgfSBlbHNlIGlmKChrZXkgPT09ICdEZWxldGUnKXx8KGtleSA9PT0gJ0JhY2tzcGFjZScpICl7XG4gICAgICB0aGlzLnBvbHlnb24uZGVsZXRlTGFzdFZlcnRleCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMubWFwLndpdGhNYXAobT0+dGhpcy5yZW1vdmVDb250cm9sKG0pKVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5tYXAud2l0aE1hcChtPT50aGlzLmFkZENvbnRyb2wobSkpXG4gIH1cblxuICByZW1vdmVDb250cm9sKG06IEwuTWFwKTogdm9pZCB7XG4gICAgbS5yZW1vdmVMYXllcih0aGlzLmRyYXduSXRlbXMpO1xuICAgIHRoaXMucG9seWdvbi5yZW1vdmVIb29rcygpO1xuICAgIC8vIG0ucmVtb3ZlQ29udHJvbCh0aGlzLmRyYXdDb250cm9sKTtcbiAgICBtLm9mZihMLkRyYXcuRXZlbnQuRFJBV1NUQVJUKTtcbiAgICBtLm9mZihMLkRyYXcuRXZlbnQuQ1JFQVRFRCk7XG4gICAgbS5vZmYoJ2tleXVwJyx0aGlzLmtleUhhbmRsZXIpO1xuICB9XG5cbiAgYWRkQ29udHJvbChtOiBMLk1hcCk6IHZvaWQge1xuICAgIHRoaXMuZHJhd25JdGVtcyA9IG5ldyBMLkZlYXR1cmVHcm91cCgpO1xuICAgIG0uYWRkTGF5ZXIodGhpcy5kcmF3bkl0ZW1zKTtcblxuICAgIC8vIHRoaXMuZHJhd0NvbnRyb2wgPSBuZXcgTC5Db250cm9sLkRyYXcoe1xuICAgIC8vICAgZHJhdzoge1xuICAgIC8vICAgICBwb2x5bGluZTogZmFsc2UsXG4gICAgLy8gICAgIGNpcmNsZTogZmFsc2UsXG4gICAgLy8gICAgIG1hcmtlcjogZmFsc2UsXG4gICAgLy8gICAgIHJlY3RhbmdsZTogZmFsc2UsXG4gICAgLy8gICAgIGNpcmNsZW1hcmtlcjogZmFsc2VcbiAgICAvLyAgIH0sXG4gICAgLy8gICBlZGl0OiBudWxsXG4gICAgLy8gfSk7XG4gICAgLy8gbS5hZGRDb250cm9sKHRoaXMuZHJhd0NvbnRyb2wpO1xuICAgIHRoaXMuaW5pdGlhdGVEcmF3aW5nKG0pO1xuXG4gICAgbS5vbihMLkRyYXcuRXZlbnQuRFJBV1NUQVJULCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuZHJhd25JdGVtcy5jbGVhckxheWVycygpO1xuICAgIH0pO1xuXG4gICAgbS5vbihMLkRyYXcuRXZlbnQuRFJBV1ZFUlRFWCwgKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmRyYXduSXRlbXMuY2xlYXJMYXllcnMoKTtcbiAgICB9KTtcblxuICAgIG0ub24oTC5EcmF3LkV2ZW50LkNSRUFURUQsIChldmVudCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuXG4gICAgICBjb25zdCBsYXllciA9IGV2ZW50LmxheWVyO1xuICAgICAgdGhpcy5kcmF3bkl0ZW1zLmNsZWFyTGF5ZXJzKCk7XG4gICAgICB0aGlzLmRyYXduSXRlbXMuYWRkTGF5ZXIobGF5ZXIpO1xuICAgICAgdGhpcy5mZWF0dXJlQ2xvc2VkLmVtaXQobGF5ZXIudG9HZW9KU09OKCkpO1xuICAgICAgdGhpcy5wb2x5Z29uLnJlbW92ZUhvb2tzKCk7XG4gICAgICB0aGlzLmluaXRpYXRlRHJhd2luZyhtKTtcbiAgICB9KTtcblxuICAgIG0ub24oJ2tleXVwJyx0aGlzLmtleUhhbmRsZXIpO1xuICB9XG5cbiAgaW5pdGlhdGVEcmF3aW5nKG06IEwuTWFwKTogdm9pZCB7XG4gICAgLy8gY29uc3QgcGFuZSA9IGBkcmF3bi1wb2x5Z29uLSR7dGhpcy56SW5kZXh9YDtcbiAgICAvLyBlbnN1cmVQYW5lKG0scGFuZSx0aGlzLnpJbmRleCk7XG4gICAgKEwuRHJhdy5Qb2x5Z29uLnByb3RvdHlwZSBhcyBhbnkpLl9vblRvdWNoID0gTC5VdGlsLmZhbHNlRm47XG4gICAgLy8gY29uc3Qgb3B0aW9ucyA9IHt6SW5kZXhPZmZzZXQ6dGhpcy56SW5kZXgscmVwZWF0TW9kZTogZmFsc2V9O1xuICAgIHRoaXMucG9seWdvbiA9IG5ldyBMLkRyYXcuUG9seWdvbihtIGFzIEwuRHJhd01hcCwge3JlcGVhdE1vZGU6IGZhbHNlfSk7XG4gICAgdGhpcy5wb2x5Z29uLmFkZEhvb2tzKCk7XG4gIH1cbn1cblxuXG4iXX0=