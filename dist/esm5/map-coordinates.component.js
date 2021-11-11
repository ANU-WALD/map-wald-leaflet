"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapCoordinatesComponent = void 0;
var core_1 = require("@angular/core");
var leaflet_service_1 = require("./leaflet.service");
var i0 = require("@angular/core");
var i1 = require("./leaflet.service");
var i2 = require("@angular/common");
var MapCoordinatesComponent = /** @class */ (function () {
    function MapCoordinatesComponent(map) {
        var _this = this;
        this.map = map;
        this.withMap(function (m) {
            var events = [
                'resize',
                'zoomend',
                'moveend',
                'mousemove'
            ];
            events.forEach(function (e) {
                m.on(e, function (evt) { return _this.mapChange(evt); });
            });
            // const mouseEvents = [
            //   'mousemove'
            // ];
            // mouseEvents.forEach(e=>{
            //   m.on(e,(evt)=>this.mouseEvent(evt));
            // })
        });
    }
    MapCoordinatesComponent.prototype.ngOnInit = function () {
    };
    MapCoordinatesComponent.prototype.withMap = function (fn) {
        this.map.map.then(fn);
    };
    MapCoordinatesComponent.prototype.mapChange = function (evt) {
        if (evt.type === 'mousemove') {
            this.mouseCoordinates = evt.latlng;
            return;
        }
        var map = evt.target;
        this.bounds = map.getBounds();
        // console.log(evt);
    };
    MapCoordinatesComponent.ɵfac = function MapCoordinatesComponent_Factory(t) { return new (t || MapCoordinatesComponent)(i0.ɵɵdirectiveInject(i1.LeafletService)); };
    MapCoordinatesComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MapCoordinatesComponent, selectors: [["map-coordinates"]], decls: 6, vars: 4, consts: [[2, "background-color", "white"]], template: function MapCoordinatesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "p");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "p");
            i0.ɵɵtext(4);
            i0.ɵɵpipe(5, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("Cursor: ", ctx.mouseCoordinates, "");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("Bounds: ", i0.ɵɵpipeBind1(5, 2, ctx.bounds), "");
        } }, pipes: [i2.JsonPipe], encapsulation: 2 });
    return MapCoordinatesComponent;
}());
exports.MapCoordinatesComponent = MapCoordinatesComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MapCoordinatesComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'map-coordinates',
                template: "\n  <div style=\"background-color:white\">\n    <p>Cursor: {{mouseCoordinates}}</p>\n    <p>Bounds: {{bounds | json}}</p>\n</div>\n",
                styles: []
            }]
    }], function () { return [{ type: i1.LeafletService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWNvb3JkaW5hdGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLWxlYWZsZXQvIiwic291cmNlcyI6WyJtYXAtY29vcmRpbmF0ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFrRDtBQUVsRCxxREFBbUQ7Ozs7QUFFbkQ7SUFjRSxpQ0FBb0IsR0FBbUI7UUFBdkMsaUJBbUJDO1FBbkJtQixRQUFHLEdBQUgsR0FBRyxDQUFnQjtRQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztZQUNaLElBQU0sTUFBTSxHQUFHO2dCQUNiLFFBQVE7Z0JBQ1IsU0FBUztnQkFDVCxTQUFTO2dCQUNULFdBQVc7YUFDWixDQUFBO1lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7Z0JBQ2QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsVUFBQyxHQUFHLElBQUcsT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFuQixDQUFtQixDQUFDLENBQUM7WUFDckMsQ0FBQyxDQUFDLENBQUM7WUFFSCx3QkFBd0I7WUFDeEIsZ0JBQWdCO1lBQ2hCLEtBQUs7WUFDTCwyQkFBMkI7WUFDM0IseUNBQXlDO1lBQ3pDLEtBQUs7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwwQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELHlDQUFPLEdBQVAsVUFBUSxFQUFvQjtRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELDJDQUFTLEdBQVQsVUFBVSxHQUFnQjtRQUN4QixJQUFHLEdBQUcsQ0FBQyxJQUFJLEtBQUcsV0FBVyxFQUFDO1lBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBSSxHQUF5QixDQUFDLE1BQU0sQ0FBQztZQUMxRCxPQUFPO1NBQ1I7UUFFRCxJQUFNLEdBQUcsR0FBUyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzlCLG9CQUFvQjtJQUN0QixDQUFDO2tHQXpDVSx1QkFBdUI7Z0VBQXZCLHVCQUF1QjtZQVBsQyw4QkFDRTtZQUFBLHlCQUFHO1lBQUEsWUFBNEI7WUFBQSxpQkFBSTtZQUNuQyx5QkFBRztZQUFBLFlBQXlCOztZQUFBLGlCQUFJO1lBQ3BDLGlCQUFNOztZQUZDLGVBQTRCO1lBQTVCLDJEQUE0QjtZQUM1QixlQUF5QjtZQUF6Qix1RUFBeUI7O2tDQVRoQztDQTREQyxBQXhERCxJQXdEQztBQTlDWSwwREFBdUI7a0RBQXZCLHVCQUF1QjtjQVZuQyxnQkFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxxSUFLWDtnQkFDQyxNQUFNLEVBQUUsRUFBRTthQUNYIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExhdExuZywgTGF0TG5nQm91bmRzLCBMZWFmbGV0RXZlbnQsIExlYWZsZXRNb3VzZUV2ZW50IH0gZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgeyBMZWFmbGV0U2VydmljZSB9IGZyb20gJy4vbGVhZmxldC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWFwLWNvb3JkaW5hdGVzJyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6d2hpdGVcIj5cbiAgICA8cD5DdXJzb3I6IHt7bW91c2VDb29yZGluYXRlc319PC9wPlxuICAgIDxwPkJvdW5kczoge3tib3VuZHMgfCBqc29ufX08L3A+XG48L2Rpdj5cbmAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTWFwQ29vcmRpbmF0ZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBtb3VzZUNvb3JkaW5hdGVzOiBMYXRMbmc7XG4gIGJvdW5kczogTGF0TG5nQm91bmRzO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBMZWFmbGV0U2VydmljZSkge1xuICAgIHRoaXMud2l0aE1hcChtPT57XG4gICAgICBjb25zdCBldmVudHMgPSBbXG4gICAgICAgICdyZXNpemUnLFxuICAgICAgICAnem9vbWVuZCcsXG4gICAgICAgICdtb3ZlZW5kJyxcbiAgICAgICAgJ21vdXNlbW92ZSdcbiAgICAgIF1cbiAgICAgIGV2ZW50cy5mb3JFYWNoKGU9PntcbiAgICAgICAgbS5vbihlLChldnQpPT50aGlzLm1hcENoYW5nZShldnQpKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBjb25zdCBtb3VzZUV2ZW50cyA9IFtcbiAgICAgIC8vICAgJ21vdXNlbW92ZSdcbiAgICAgIC8vIF07XG4gICAgICAvLyBtb3VzZUV2ZW50cy5mb3JFYWNoKGU9PntcbiAgICAgIC8vICAgbS5vbihlLChldnQpPT50aGlzLm1vdXNlRXZlbnQoZXZ0KSk7XG4gICAgICAvLyB9KVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICB3aXRoTWFwKGZuOigobTpMLk1hcCk9PnZvaWQpKTogdm9pZCB7XG4gICAgdGhpcy5tYXAubWFwLnRoZW4oZm4pO1xuICB9XG5cbiAgbWFwQ2hhbmdlKGV2dDpMZWFmbGV0RXZlbnQpOiB2b2lkIHtcbiAgICBpZihldnQudHlwZT09PSdtb3VzZW1vdmUnKXtcbiAgICAgIHRoaXMubW91c2VDb29yZGluYXRlcyA9IChldnQgYXMgTGVhZmxldE1vdXNlRXZlbnQpLmxhdGxuZztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYXA6TC5NYXAgPSBldnQudGFyZ2V0O1xuICAgIHRoaXMuYm91bmRzID0gbWFwLmdldEJvdW5kcygpO1xuICAgIC8vIGNvbnNvbGUubG9nKGV2dCk7XG4gIH1cblxuICAvLyBtb3VzZUV2ZW50KGV2dDpNb3VzZUV2ZW50KTp2b2lkIHtcblxuICAvLyB9XG59XG4iXX0=