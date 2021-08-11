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
        this.enableMapEvents(null);
    }
    disableMapEvents(event) {
        this.m(event);
        if (this.touchDevice) {
            return;
        }
        this._map.map.then(m => {
            m.dragging.disable();
            m.scrollWheelZoom.disable();
        });
    }
    enableMapEvents(event) {
        if (event) {
            this.m(event);
        }
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
    m(event) {
        event.stopPropagation();
    }
}
exports.MapControlComponent = MapControlComponent;
MapControlComponent.ɵfac = function MapControlComponent_Factory(t) { return new (t || MapControlComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.LeafletService)); };
MapControlComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MapControlComponent, selectors: [["map-control"]], viewQuery: function MapControlComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mapControl = _t.first);
    } }, inputs: { position: "position" }, ngContentSelectors: _c1, decls: 3, vars: 0, consts: [[1, "map-control-content", 3, "touchstart", "mouseenter", "mouseleave", "click", "dblclick", "mousemove", "mousedown", "mouseup"], ["mapControl", ""]], template: function MapControlComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0, 1);
        i0.ɵɵlistener("touchstart", function MapControlComponent_Template_div_touchstart_0_listener($event) { return ctx.ontouchstart($event); })("mouseenter", function MapControlComponent_Template_div_mouseenter_0_listener($event) { return ctx.disableMapEvents($event); })("mouseleave", function MapControlComponent_Template_div_mouseleave_0_listener($event) { return ctx.enableMapEvents($event); })("click", function MapControlComponent_Template_div_click_0_listener($event) { return ctx.m($event); })("dblclick", function MapControlComponent_Template_div_dblclick_0_listener($event) { return ctx.m($event); })("mousemove", function MapControlComponent_Template_div_mousemove_0_listener($event) { return ctx.m($event); })("mousedown", function MapControlComponent_Template_div_mousedown_0_listener($event) { return ctx.m($event); })("mouseup", function MapControlComponent_Template_div_mouseup_0_listener($event) { return ctx.m($event); });
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
    } }, styles: [".map-control-content[_ngcontent-%COMP%]{\n  background: transparent;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MapControlComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'map-control',
                template: `<div #mapControl class="map-control-content"
                  (touchstart)="ontouchstart($event)"
                  (mouseenter)="disableMapEvents($event)"
                  (mouseleave)="enableMapEvents($event)"
                  (click)="m($event)"
                  (dblclick)="m($event)"
                  (mousemove)="m($event)"
                  (mousedown)="m($event)"
                  (mouseup)="m($event)">
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtbGVhZmxldC8iLCJzb3VyY2VzIjpbIm1hcC1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrREFBa0Q7QUFBbEQsa0RBQWtEO0FBRWxELHdDQUErRjtBQUMvRix1REFBbUQ7QUFDbkQsbUNBQW1DOzs7OztBQU9uQyxNQUFNLGNBQWMsR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFFckQsTUFrQmEsbUJBQW1CO0lBSzlCLFlBQW9CLEdBQWUsRUFBVSxJQUFvQjtRQUE3QyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFIeEQsYUFBUSxHQUFHLFdBQVcsQ0FBQztRQUNoQyxnQkFBVyxHQUFHLEtBQUssQ0FBQztJQUVpRCxDQUFDO0lBRXRFLFFBQVE7SUFDUixDQUFDO0lBRUQsZUFBZTtRQUNiLDJDQUEyQztRQUMzQyxJQUFJLE9BQU8sR0FBZ0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFeEYsNEVBQTRFO1FBQzVFLFlBQVk7UUFDWixJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssS0FBSyxFQUFFO1lBQzlCLE1BQU0sVUFBVSxHQUFnQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlELFVBQVUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDaEMsT0FBTyxHQUFHLFVBQVUsQ0FBQztTQUN0QjtRQUVELE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQzNDLEtBQUssRUFBRSxDQUFDLEdBQWUsRUFBRSxFQUFFO2dCQUN6QixPQUFPLE9BQU8sQ0FBQztZQUNqQixDQUFDO1lBRUQsUUFBUSxFQUFFLENBQUMsR0FB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RSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFDakMsUUFBUTtrQkFBaEIsWUFBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiLi9sZWFmbGV0LmN1c3RvbWNvbnRyb2xzXCIgLz5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExlYWZsZXRTZXJ2aWNlIH0gZnJvbSAnLi9sZWFmbGV0LnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgbGVhZmxldCBmcm9tICdsZWFmbGV0JztcblxuaW50ZXJmYWNlIFNhdmVkTWFwU2V0dGluZ3Mge1xuICBwYW46IGJvb2xlYW47XG4gIHpvb206IGJvb2xlYW47XG59XG5cbmNvbnN0IFRBR19XSElURV9MSVNUID0gWydJTlBVVCcsICdTRUxFQ1QnLCAnT1BUSU9OJ107XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hcC1jb250cm9sJyxcbiAgdGVtcGxhdGU6IGA8ZGl2ICNtYXBDb250cm9sIGNsYXNzPVwibWFwLWNvbnRyb2wtY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAodG91Y2hzdGFydCk9XCJvbnRvdWNoc3RhcnQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJkaXNhYmxlTWFwRXZlbnRzKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgKG1vdXNlbGVhdmUpPVwiZW5hYmxlTWFwRXZlbnRzKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm0oJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAoZGJsY2xpY2spPVwibSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgIChtb3VzZW1vdmUpPVwibSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgIChtb3VzZWRvd24pPVwibSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgIChtb3VzZXVwKT1cIm0oJGV2ZW50KVwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbmAsIHN0eWxlczogW2AubWFwLWNvbnRyb2wtY29udGVudHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5gXSxcbn0pXG5leHBvcnQgY2xhc3MgTWFwQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ21hcENvbnRyb2wnLCB7IHN0YXRpYzogZmFsc2UgfSkgbWFwQ29udHJvbDogQ29tcG9uZW50O1xuICBASW5wdXQoKSBwb3NpdGlvbiA9ICdUT1BfUklHSFQnO1xuICB0b3VjaERldmljZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLCBwcml2YXRlIF9tYXA6IExlYWZsZXRTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAvLyB0aGlzLl93cmFwcGVyLmdldE5hdGl2ZU1hcCgpLnRoZW4oKG0pPT57XG4gICAgbGV0IGNvbnRlbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubWFwLWNvbnRyb2wtY29udGVudCcpO1xuXG4gICAgLy8gICAvLyBJZiBjb250ZW50IG9mIHRoZSBtYXAgY29udHJvbCBpcyBub3QgYWxyZWFkeSB3cmFwcGVkIGluIGEgZGl2LCBkbyBpdFxuICAgIC8vICAgLy8gbm93LlxuICAgIGlmIChjb250ZW50Lm5vZGVOYW1lICE9PSBcIkRJVlwiKSB7XG4gICAgICBjb25zdCBjb250cm9sRGl2OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udHJvbERpdi5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgIGNvbnRlbnQgPSBjb250cm9sRGl2O1xuICAgIH1cblxuICAgIGNvbnN0IEN1c3RvbUNvbnRyb2wgPSBsZWFmbGV0LkNvbnRyb2wuZXh0ZW5kKHtcbiAgICAgIG9uQWRkOiAobWFwOmxlYWZsZXQuTWFwKSA9PiB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfSxcblxuICAgICAgb25SZW1vdmU6IChtYXA6bGVhZmxldC5NYXApID0+IHtcbiAgICAgICAgLy8gTm90aGluZyB0byBkbyBoZXJlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBtYWtlQ3VzdG9tQ29udHJvbCA9IChvcHRzOmFueSkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBDdXN0b21Db250cm9sKG9wdHMpO1xuICAgIH07XG5cbiAgICB0aGlzLl9tYXAubWFwLnRoZW4obWFwID0+IHtcbiAgICAgIGNvbnN0IGMgPSBtYWtlQ3VzdG9tQ29udHJvbCh7XG4gICAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLnJlcGxhY2UoL18vZywnJykudG9Mb3dlckNhc2UoKVxuICAgICAgfSk7XG4gICAgICBjLmFkZFRvKG1hcCk7XG4gICAgfSk7XG4gICAgLy8gICAoPGFueT5tKS5jb250cm9sc1soPGFueT53aW5kb3cpLmdvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvblt0aGlzLnBvc2l0aW9uXV0ucHVzaChjb250ZW50KTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIG9udG91Y2hzdGFydChldjogVG91Y2hFdmVudCk6IHZvaWQge1xuICAgIHRoaXMudG91Y2hEZXZpY2UgPSB0cnVlO1xuICAgIGlmKFRBR19XSElURV9MSVNULmluZGV4T2YoKGV2LnRhcmdldCBhcyBhbnkpLnRhZ05hbWUpPj0wKXtcbiAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICB0aGlzLmVuYWJsZU1hcEV2ZW50cyhudWxsKTtcbiAgfVxuXG4gIGRpc2FibGVNYXBFdmVudHMoZXZlbnQ6TW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMubShldmVudCk7XG5cbiAgICBpZih0aGlzLnRvdWNoRGV2aWNlKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9tYXAubWFwLnRoZW4obT0+e1xuICAgICAgbS5kcmFnZ2luZy5kaXNhYmxlKCk7XG4gICAgICBtLnNjcm9sbFdoZWVsWm9vbS5kaXNhYmxlKCk7XG4gICAgfSk7XG4gIH1cblxuICBlbmFibGVNYXBFdmVudHMoZXZlbnQ6TW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmKGV2ZW50KXtcbiAgICAgIHRoaXMubShldmVudCk7XG4gICAgfVxuXG4gICAgdGhpcy5fbWFwLm1hcC50aGVuKG09PntcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIHBhbjp0cnVlLFxuICAgICAgICB6b29tOnRydWVcbiAgICAgIH07XG5cbiAgICAgIGlmKG9wdGlvbnMucGFuKXtcbiAgICAgICAgbS5kcmFnZ2luZy5lbmFibGUoKTtcbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy56b29tKXtcbiAgICAgICAgbS5zY3JvbGxXaGVlbFpvb20uZW5hYmxlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBtKGV2ZW50Ok1vdXNlRXZlbnQpe1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbn1cbiJdfQ==