"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapCoordinatesComponent = void 0;
const core_1 = require("@angular/core");
const leaflet_service_1 = require("./leaflet.service");
const i0 = require("@angular/core");
const i1 = require("./leaflet.service");
const i2 = require("@angular/common");
class MapCoordinatesComponent {
    constructor(map) {
        this.map = map;
        this.withMap(m => {
            const events = [
                'resize',
                'zoomend',
                'moveend',
                'mousemove'
            ];
            events.forEach(e => {
                m.on(e, (evt) => this.mapChange(evt));
            });
            // const mouseEvents = [
            //   'mousemove'
            // ];
            // mouseEvents.forEach(e=>{
            //   m.on(e,(evt)=>this.mouseEvent(evt));
            // })
        });
    }
    ngOnInit() {
    }
    withMap(fn) {
        this.map.map.then(fn);
    }
    mapChange(evt) {
        if (evt.type === 'mousemove') {
            this.mouseCoordinates = evt.latlng;
            return;
        }
        const map = evt.target;
        this.bounds = map.getBounds();
        // console.log(evt);
    }
}
exports.MapCoordinatesComponent = MapCoordinatesComponent;
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MapCoordinatesComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'map-coordinates',
                template: `
  <div style="background-color:white">
    <p>Cursor: {{mouseCoordinates}}</p>
    <p>Bounds: {{bounds | json}}</p>
</div>
`,
                styles: []
            }]
    }], function () { return [{ type: i1.LeafletService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWNvb3JkaW5hdGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLWxlYWZsZXQvIiwic291cmNlcyI6WyJtYXAtY29vcmRpbmF0ZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFrRDtBQUVsRCx1REFBbUQ7Ozs7QUFFbkQsTUFVYSx1QkFBdUI7SUFJbEMsWUFBb0IsR0FBbUI7UUFBbkIsUUFBRyxHQUFILEdBQUcsQ0FBZ0I7UUFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUEsRUFBRTtZQUNkLE1BQU0sTUFBTSxHQUFHO2dCQUNiLFFBQVE7Z0JBQ1IsU0FBUztnQkFDVCxTQUFTO2dCQUNULFdBQVc7YUFDWixDQUFBO1lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUEsRUFBRTtnQkFDaEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFHLEVBQUMsRUFBRSxDQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNyQyxDQUFDLENBQUMsQ0FBQztZQUVILHdCQUF3QjtZQUN4QixnQkFBZ0I7WUFDaEIsS0FBSztZQUNMLDJCQUEyQjtZQUMzQix5Q0FBeUM7WUFDekMsS0FBSztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsT0FBTyxDQUFDLEVBQW9CO1FBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsU0FBUyxDQUFDLEdBQWdCO1FBQ3hCLElBQUcsR0FBRyxDQUFDLElBQUksS0FBRyxXQUFXLEVBQUM7WUFDeEIsSUFBSSxDQUFDLGdCQUFnQixHQUFJLEdBQXlCLENBQUMsTUFBTSxDQUFDO1lBQzFELE9BQU87U0FDUjtRQUVELE1BQU0sR0FBRyxHQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDOUIsb0JBQW9CO0lBQ3RCLENBQUM7O0FBbkRILDBEQXdEQzs4RkE5Q1ksdUJBQXVCOzREQUF2Qix1QkFBdUI7UUFQbEMsOEJBQ0U7UUFBQSx5QkFBRztRQUFBLFlBQTRCO1FBQUEsaUJBQUk7UUFDbkMseUJBQUc7UUFBQSxZQUF5Qjs7UUFBQSxpQkFBSTtRQUNwQyxpQkFBTTs7UUFGQyxlQUE0QjtRQUE1QiwyREFBNEI7UUFDNUIsZUFBeUI7UUFBekIsdUVBQXlCOztrREFLbkIsdUJBQXVCO2NBVm5DLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOzs7OztDQUtYO2dCQUNDLE1BQU0sRUFBRSxFQUFFO2FBQ1giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGF0TG5nLCBMYXRMbmdCb3VuZHMsIExlYWZsZXRFdmVudCwgTGVhZmxldE1vdXNlRXZlbnQgfSBmcm9tICdsZWFmbGV0JztcbmltcG9ydCB7IExlYWZsZXRTZXJ2aWNlIH0gZnJvbSAnLi9sZWFmbGV0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXAtY29vcmRpbmF0ZXMnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjp3aGl0ZVwiPlxuICAgIDxwPkN1cnNvcjoge3ttb3VzZUNvb3JkaW5hdGVzfX08L3A+XG4gICAgPHA+Qm91bmRzOiB7e2JvdW5kcyB8IGpzb259fTwvcD5cbjwvZGl2PlxuYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBNYXBDb29yZGluYXRlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG1vdXNlQ29vcmRpbmF0ZXM6IExhdExuZztcbiAgYm91bmRzOiBMYXRMbmdCb3VuZHM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtYXA6IExlYWZsZXRTZXJ2aWNlKSB7XG4gICAgdGhpcy53aXRoTWFwKG09PntcbiAgICAgIGNvbnN0IGV2ZW50cyA9IFtcbiAgICAgICAgJ3Jlc2l6ZScsXG4gICAgICAgICd6b29tZW5kJyxcbiAgICAgICAgJ21vdmVlbmQnLFxuICAgICAgICAnbW91c2Vtb3ZlJ1xuICAgICAgXVxuICAgICAgZXZlbnRzLmZvckVhY2goZT0+e1xuICAgICAgICBtLm9uKGUsKGV2dCk9PnRoaXMubWFwQ2hhbmdlKGV2dCkpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGNvbnN0IG1vdXNlRXZlbnRzID0gW1xuICAgICAgLy8gICAnbW91c2Vtb3ZlJ1xuICAgICAgLy8gXTtcbiAgICAgIC8vIG1vdXNlRXZlbnRzLmZvckVhY2goZT0+e1xuICAgICAgLy8gICBtLm9uKGUsKGV2dCk9PnRoaXMubW91c2VFdmVudChldnQpKTtcbiAgICAgIC8vIH0pXG4gICAgfSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIHdpdGhNYXAoZm46KChtOkwuTWFwKT0+dm9pZCkpOiB2b2lkIHtcbiAgICB0aGlzLm1hcC5tYXAudGhlbihmbik7XG4gIH1cblxuICBtYXBDaGFuZ2UoZXZ0OkxlYWZsZXRFdmVudCk6IHZvaWQge1xuICAgIGlmKGV2dC50eXBlPT09J21vdXNlbW92ZScpe1xuICAgICAgdGhpcy5tb3VzZUNvb3JkaW5hdGVzID0gKGV2dCBhcyBMZWFmbGV0TW91c2VFdmVudCkubGF0bG5nO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcDpMLk1hcCA9IGV2dC50YXJnZXQ7XG4gICAgdGhpcy5ib3VuZHMgPSBtYXAuZ2V0Qm91bmRzKCk7XG4gICAgLy8gY29uc29sZS5sb2coZXZ0KTtcbiAgfVxuXG4gIC8vIG1vdXNlRXZlbnQoZXZ0Ok1vdXNlRXZlbnQpOnZvaWQge1xuXG4gIC8vIH1cbn1cbiJdfQ==