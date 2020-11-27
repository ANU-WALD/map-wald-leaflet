"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapControlComponent = void 0;
/// <reference types="./leaflet.customcontrols" />
/// <reference types="./leaflet.customcontrols" />
const core_1 = require("@angular/core");
const leaflet_service_1 = require("./leaflet.service");
const leaflet = require("leaflet");
const i0 = require("@angular/core");
const i1 = require("./leaflet.service");
const _c0 = ["mapControl"];
const _c1 = ["*"];
const TAG_WHITE_LIST = ['INPUT', 'SELECT', 'OPTION'];
class MapControlComponent {
    constructor(_el, _map) {
        this._el = _el;
        this._map = _map;
        this.position = 'TOP_RIGHT';
        this.touchDevice = false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        // this._wrapper.getNativeMap().then((m)=>{
        let content = this._el.nativeElement.querySelector('.map-control-content');
        //   // If content of the map control is not already wrapped in a div, do it
        //   // now.
        if (content.nodeName !== "DIV") {
            const controlDiv = document.createElement('div');
            controlDiv.appendChild(content);
            content = controlDiv;
        }
        const CustomControl = leaflet.Control.extend({
            onAdd: (map) => {
                return content;
            },
            onRemove: (map) => {
                // Nothing to do here
            }
        });
        const makeCustomControl = (opts) => {
            return new CustomControl(opts);
        };
        this._map.map.then(map => {
            const c = makeCustomControl({
                position: this.position.replace(/_/g, '').toLowerCase()
            });
            c.addTo(map);
        });
        //   (<any>m).controls[(<any>window).google.maps.ControlPosition[this.position]].push(content);
        // });
    }
    ontouchstart(ev) {
        this.touchDevice = true;
        if (TAG_WHITE_LIST.indexOf(ev.target.tagName) >= 0) {
            ev.stopPropagation();
        }
        this.enableMapEvents();
    }
    disableMapEvents() {
        if (this.touchDevice) {
            return;
        }
        this._map.map.then(m => {
            m.dragging.disable();
            m.scrollWheelZoom.disable();
        });
    }
    enableMapEvents() {
        this._map.map.then(m => {
            const options = {
                pan: true,
                zoom: true
            };
            if (options.pan) {
                m.dragging.enable();
            }
            if (options.zoom) {
                m.scrollWheelZoom.enable();
            }
        });
    }
}
exports.MapControlComponent = MapControlComponent;
MapControlComponent.ɵfac = function MapControlComponent_Factory(t) { return new (t || MapControlComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.LeafletService)); };
MapControlComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MapControlComponent, selectors: [["map-control"]], viewQuery: function MapControlComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mapControl = _t.first);
    } }, inputs: { position: "position" }, ngContentSelectors: _c1, decls: 3, vars: 0, consts: [[1, "map-control-content", 3, "touchstart", "mouseenter", "mouseleave"], ["mapControl", ""]], template: function MapControlComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵlistener("touchstart", function MapControlComponent_Template_div_touchstart_0_listener($event) { return ctx.ontouchstart($event); })("mouseenter", function MapControlComponent_Template_div_mouseenter_0_listener() { return ctx.disableMapEvents(); })("mouseleave", function MapControlComponent_Template_div_mouseleave_0_listener() { return ctx.enableMapEvents(); });
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
    } }, styles: [".map-control-content[_ngcontent-%COMP%]{\n  background: transparent;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MapControlComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'map-control',
                template: `<div #mapControl class="map-control-content"
                  (touchstart)="ontouchstart($event)"
                  (mouseenter)="disableMapEvents()"
                  (mouseleave)="enableMapEvents()">
  <ng-content></ng-content>
</div>
`, styles: [`.map-control-content{
  background: transparent;
}
`],
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.LeafletService }]; }, { mapControl: [{
            type: core_1.ViewChild,
            args: ['mapControl', { static: false }]
        }], position: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtbGVhZmxldC8iLCJzb3VyY2VzIjpbIm1hcC1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrREFBa0Q7QUFBbEQsa0RBQWtEO0FBRWxELHdDQUErRjtBQUMvRix1REFBbUQ7QUFDbkQsbUNBQW1DOzs7OztBQU9uQyxNQUFNLGNBQWMsR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFFckQsTUFhYSxtQkFBbUI7SUFLOUIsWUFBb0IsR0FBZSxFQUFVLElBQW9CO1FBQTdDLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFnQjtRQUh4RCxhQUFRLEdBQUcsV0FBVyxDQUFDO1FBQ2hDLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBRWlELENBQUM7SUFFdEUsUUFBUTtJQUNSLENBQUM7SUFFRCxlQUFlO1FBQ2IsMkNBQTJDO1FBQzNDLElBQUksT0FBTyxHQUFnQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQztRQUV4Riw0RUFBNEU7UUFDNUUsWUFBWTtRQUNaLElBQUksT0FBTyxDQUFDLFFBQVEsS0FBSyxLQUFLLEVBQUU7WUFDOUIsTUFBTSxVQUFVLEdBQWdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDOUQsVUFBVSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNoQyxPQUFPLEdBQUcsVUFBVSxDQUFDO1NBQ3RCO1FBRUQsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDM0MsS0FBSyxFQUFFLENBQUMsR0FBZSxFQUFFLEVBQUU7Z0JBQ3pCLE9BQU8sT0FBTyxDQUFDO1lBQ2pCLENBQUM7WUFFRCxRQUFRLEVBQUUsQ0FBQyxHQUFlLEVBQUUsRUFBRTtnQkFDNUIscUJBQXFCO1lBQ3ZCLENBQUM7U0FDRixDQUFDLENBQUM7UUFFSCxNQUFNLGlCQUFpQixHQUFHLENBQUMsSUFBUSxFQUFFLEVBQUU7WUFDckMsT0FBTyxJQUFJLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUM7UUFFRixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDdkIsTUFBTSxDQUFDLEdBQUcsaUJBQWlCLENBQUM7Z0JBQzFCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFO2FBQ3ZELENBQUMsQ0FBQztZQUNILENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztRQUNILCtGQUErRjtRQUMvRixNQUFNO0lBQ1IsQ0FBQztJQUVELFlBQVksQ0FBQyxFQUFjO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBRSxFQUFFLENBQUMsTUFBYyxDQUFDLE9BQU8sQ0FBQyxJQUFFLENBQUMsRUFBQztZQUN2RCxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDdEI7UUFDRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELGdCQUFnQjtRQUNkLElBQUcsSUFBSSxDQUFDLFdBQVcsRUFBQztZQUNsQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBLEVBQUU7WUFDcEIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNyQixDQUFDLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBLEVBQUU7WUFDcEIsTUFBTSxPQUFPLEdBQUc7Z0JBQ2QsR0FBRyxFQUFDLElBQUk7Z0JBQ1IsSUFBSSxFQUFDLElBQUk7YUFDVixDQUFDO1lBRUYsSUFBRyxPQUFPLENBQUMsR0FBRyxFQUFDO2dCQUNiLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDckI7WUFFRCxJQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUM7Z0JBQ2QsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUM1QjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7QUE3Rkgsa0RBK0ZDO3NGQWxGWSxtQkFBbUI7d0RBQW5CLG1CQUFtQjs7Ozs7OztRQVhuQixpQ0FJWDtRQUhnQiw2R0FBYyx3QkFBb0IsSUFBQywwRkFDckIsc0JBQWtCLElBREcsMEZBRXJCLHFCQUFpQixJQUZJO1FBR25ELGtCQUF5QjtRQUMzQixpQkFBTTs7a0RBTU8sbUJBQW1CO2NBYi9CLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7O0NBTVgsRUFBRSxNQUFNLEVBQUUsQ0FBQzs7O0NBR1gsQ0FBQzthQUNEOzBGQUU2QyxVQUFVO2tCQUFyRCxnQkFBUzttQkFBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQ2pDLFFBQVE7a0JBQWhCLFlBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cIi4vbGVhZmxldC5jdXN0b21jb250cm9sc1wiIC8+XG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0LCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMZWFmbGV0U2VydmljZSB9IGZyb20gJy4vbGVhZmxldC5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIGxlYWZsZXQgZnJvbSAnbGVhZmxldCc7XG5cbmludGVyZmFjZSBTYXZlZE1hcFNldHRpbmdzIHtcbiAgcGFuOiBib29sZWFuO1xuICB6b29tOiBib29sZWFuO1xufVxuXG5jb25zdCBUQUdfV0hJVEVfTElTVCA9IFsnSU5QVVQnLCAnU0VMRUNUJywgJ09QVElPTiddO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXAtY29udHJvbCcsXG4gIHRlbXBsYXRlOiBgPGRpdiAjbWFwQ29udHJvbCBjbGFzcz1cIm1hcC1jb250cm9sLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgKHRvdWNoc3RhcnQpPVwib250b3VjaHN0YXJ0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwiZGlzYWJsZU1hcEV2ZW50cygpXCJcbiAgICAgICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cImVuYWJsZU1hcEV2ZW50cygpXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuYCwgc3R5bGVzOiBbYC5tYXAtY29udHJvbC1jb250ZW50e1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmBdLFxufSlcbmV4cG9ydCBjbGFzcyBNYXBDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgnbWFwQ29udHJvbCcsIHsgc3RhdGljOiBmYWxzZSB9KSBtYXBDb250cm9sOiBDb21wb25lbnQ7XG4gIEBJbnB1dCgpIHBvc2l0aW9uID0gJ1RPUF9SSUdIVCc7XG4gIHRvdWNoRGV2aWNlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgX21hcDogTGVhZmxldFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIC8vIHRoaXMuX3dyYXBwZXIuZ2V0TmF0aXZlTWFwKCkudGhlbigobSk9PntcbiAgICBsZXQgY29udGVudDogSFRNTEVsZW1lbnQgPSB0aGlzLl9lbC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXAtY29udHJvbC1jb250ZW50Jyk7XG5cbiAgICAvLyAgIC8vIElmIGNvbnRlbnQgb2YgdGhlIG1hcCBjb250cm9sIGlzIG5vdCBhbHJlYWR5IHdyYXBwZWQgaW4gYSBkaXYsIGRvIGl0XG4gICAgLy8gICAvLyBub3cuXG4gICAgaWYgKGNvbnRlbnQubm9kZU5hbWUgIT09IFwiRElWXCIpIHtcbiAgICAgIGNvbnN0IGNvbnRyb2xEaXY6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBjb250cm9sRGl2LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgY29udGVudCA9IGNvbnRyb2xEaXY7XG4gICAgfVxuXG4gICAgY29uc3QgQ3VzdG9tQ29udHJvbCA9IGxlYWZsZXQuQ29udHJvbC5leHRlbmQoe1xuICAgICAgb25BZGQ6IChtYXA6bGVhZmxldC5NYXApID0+IHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9LFxuXG4gICAgICBvblJlbW92ZTogKG1hcDpsZWFmbGV0Lk1hcCkgPT4ge1xuICAgICAgICAvLyBOb3RoaW5nIHRvIGRvIGhlcmVcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IG1ha2VDdXN0b21Db250cm9sID0gKG9wdHM6YW55KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IEN1c3RvbUNvbnRyb2wob3B0cyk7XG4gICAgfTtcblxuICAgIHRoaXMuX21hcC5tYXAudGhlbihtYXAgPT4ge1xuICAgICAgY29uc3QgYyA9IG1ha2VDdXN0b21Db250cm9sKHtcbiAgICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24ucmVwbGFjZSgvXy9nLCcnKS50b0xvd2VyQ2FzZSgpXG4gICAgICB9KTtcbiAgICAgIGMuYWRkVG8obWFwKTtcbiAgICB9KTtcbiAgICAvLyAgICg8YW55Pm0pLmNvbnRyb2xzWyg8YW55PndpbmRvdykuZ29vZ2xlLm1hcHMuQ29udHJvbFBvc2l0aW9uW3RoaXMucG9zaXRpb25dXS5wdXNoKGNvbnRlbnQpO1xuICAgIC8vIH0pO1xuICB9XG5cbiAgb250b3VjaHN0YXJ0KGV2OiBUb3VjaEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy50b3VjaERldmljZSA9IHRydWU7XG4gICAgaWYoVEFHX1dISVRFX0xJU1QuaW5kZXhPZigoZXYudGFyZ2V0IGFzIGFueSkudGFnTmFtZSk+PTApe1xuICAgICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICAgIHRoaXMuZW5hYmxlTWFwRXZlbnRzKCk7XG4gIH1cblxuICBkaXNhYmxlTWFwRXZlbnRzKCk6IHZvaWQge1xuICAgIGlmKHRoaXMudG91Y2hEZXZpY2Upe1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX21hcC5tYXAudGhlbihtPT57XG4gICAgICBtLmRyYWdnaW5nLmRpc2FibGUoKTtcbiAgICAgIG0uc2Nyb2xsV2hlZWxab29tLmRpc2FibGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGVuYWJsZU1hcEV2ZW50cygpOiB2b2lkIHtcbiAgICB0aGlzLl9tYXAubWFwLnRoZW4obT0+e1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgcGFuOnRydWUsXG4gICAgICAgIHpvb206dHJ1ZVxuICAgICAgfTtcblxuICAgICAgaWYob3B0aW9ucy5wYW4pe1xuICAgICAgICBtLmRyYWdnaW5nLmVuYWJsZSgpO1xuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zLnpvb20pe1xuICAgICAgICBtLnNjcm9sbFdoZWVsWm9vbS5lbmFibGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=