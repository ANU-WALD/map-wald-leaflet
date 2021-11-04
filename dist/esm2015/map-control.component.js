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
            m._handlers.forEach(h => h.disable());
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
            m._handlers.forEach(h => h.disable());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtbGVhZmxldC8iLCJzb3VyY2VzIjpbIm1hcC1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrREFBa0Q7QUFBbEQsa0RBQWtEO0FBRWxELHdDQUErRjtBQUMvRix1REFBbUQ7QUFDbkQsbUNBQW1DOzs7OztBQU9uQyxNQUFNLGNBQWMsR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFTckQsTUFrQmEsbUJBQW1CO0lBSzlCLFlBQW9CLEdBQWUsRUFBVSxJQUFvQjtRQUE3QyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFIeEQsYUFBUSxHQUFHLFdBQVcsQ0FBQztRQUNoQyxnQkFBVyxHQUFHLEtBQUssQ0FBQztJQUVpRCxDQUFDO0lBRXRFLFFBQVE7SUFDUixDQUFDO0lBRUQsZUFBZTtRQUNiLDJDQUEyQztRQUMzQyxJQUFJLE9BQU8sR0FBZ0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFeEYsNEVBQTRFO1FBQzVFLFlBQVk7UUFDWixJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssS0FBSyxFQUFFO1lBQzlCLE1BQU0sVUFBVSxHQUFnQixRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlELFVBQVUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDaEMsT0FBTyxHQUFHLFVBQVUsQ0FBQztTQUN0QjtRQUVELE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQzNDLEtBQUssRUFBRSxDQUFDLEdBQWUsRUFBRSxFQUFFO2dCQUN6QixPQUFPLE9BQU8sQ0FBQztZQUNqQixDQUFDO1lBRUQsUUFBUSxFQUFFLENBQUMsR0FB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O1FBQzNCLGlCQUFNOztrREFNTyxtQkFBbUI7Y0FsQi9CLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Q0FXWCxFQUFFLE1BQU0sRUFBRSxDQUFDOzs7Q0FHWCxDQUFDO2FBQ0Q7MEZBRTZDLFVBQVU7a0JBQXJELGdCQUFTO21CQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFDakMsUUFBUTtrQkFBaEIsWUFBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiLi9sZWFmbGV0LmN1c3RvbWNvbnRyb2xzXCIgLz5cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExlYWZsZXRTZXJ2aWNlIH0gZnJvbSAnLi9sZWFmbGV0LnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgbGVhZmxldCBmcm9tICdsZWFmbGV0JztcblxuaW50ZXJmYWNlIFNhdmVkTWFwU2V0dGluZ3Mge1xuICBwYW46IGJvb2xlYW47XG4gIHpvb206IGJvb2xlYW47XG59XG5cbmNvbnN0IFRBR19XSElURV9MSVNUID0gWydJTlBVVCcsICdTRUxFQ1QnLCAnT1BUSU9OJ107XG5cbmludGVyZmFjZSBNYXBXaXRoSGFuZGxlcntcbiAgX2hhbmRsZXJzOiB7XG4gICAgZW5hYmxlOiAoKT0+dm9pZDtcbiAgICBkaXNhYmxlOiAoKT0+dm9pZDtcbiAgfVtdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXAtY29udHJvbCcsXG4gIHRlbXBsYXRlOiBgPGRpdiAjbWFwQ29udHJvbCBjbGFzcz1cIm1hcC1jb250cm9sLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgKHRvdWNoc3RhcnQpPVwib250b3VjaHN0YXJ0KCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwiZGlzYWJsZU1hcEV2ZW50cygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cImVuYWJsZU1hcEV2ZW50cygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJtKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgKGRibGNsaWNrKT1cIm0oJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAobW91c2Vtb3ZlKT1cIm0oJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAobW91c2Vkb3duKT1cIm0oJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAobW91c2V1cCk9XCJtKCRldmVudClcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gLCBzdHlsZXM6IFtgLm1hcC1jb250cm9sLWNvbnRlbnR7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuYF0sXG59KVxuZXhwb3J0IGNsYXNzIE1hcENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCdtYXBDb250cm9sJywgeyBzdGF0aWM6IGZhbHNlIH0pIG1hcENvbnRyb2w6IENvbXBvbmVudDtcbiAgQElucHV0KCkgcG9zaXRpb24gPSAnVE9QX1JJR0hUJztcbiAgdG91Y2hEZXZpY2UgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBfbWFwOiBMZWFmbGV0U2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgLy8gdGhpcy5fd3JhcHBlci5nZXROYXRpdmVNYXAoKS50aGVuKChtKT0+e1xuICAgIGxldCBjb250ZW50OiBIVE1MRWxlbWVudCA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLm1hcC1jb250cm9sLWNvbnRlbnQnKTtcblxuICAgIC8vICAgLy8gSWYgY29udGVudCBvZiB0aGUgbWFwIGNvbnRyb2wgaXMgbm90IGFscmVhZHkgd3JhcHBlZCBpbiBhIGRpdiwgZG8gaXRcbiAgICAvLyAgIC8vIG5vdy5cbiAgICBpZiAoY29udGVudC5ub2RlTmFtZSAhPT0gXCJESVZcIikge1xuICAgICAgY29uc3QgY29udHJvbERpdjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIGNvbnRyb2xEaXYuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICBjb250ZW50ID0gY29udHJvbERpdjtcbiAgICB9XG5cbiAgICBjb25zdCBDdXN0b21Db250cm9sID0gbGVhZmxldC5Db250cm9sLmV4dGVuZCh7XG4gICAgICBvbkFkZDogKG1hcDpsZWFmbGV0Lk1hcCkgPT4ge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH0sXG5cbiAgICAgIG9uUmVtb3ZlOiAobWFwOmxlYWZsZXQuTWFwKSA9PiB7XG4gICAgICAgIC8vIE5vdGhpbmcgdG8gZG8gaGVyZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgbWFrZUN1c3RvbUNvbnRyb2wgPSAob3B0czphbnkpID0+IHtcbiAgICAgIHJldHVybiBuZXcgQ3VzdG9tQ29udHJvbChvcHRzKTtcbiAgICB9O1xuXG4gICAgdGhpcy5fbWFwLm1hcC50aGVuKG1hcCA9PiB7XG4gICAgICBjb25zdCBjID0gbWFrZUN1c3RvbUNvbnRyb2woe1xuICAgICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbi5yZXBsYWNlKC9fL2csJycpLnRvTG93ZXJDYXNlKClcbiAgICAgIH0pO1xuICAgICAgYy5hZGRUbyhtYXApO1xuICAgIH0pO1xuICAgIC8vICAgKDxhbnk+bSkuY29udHJvbHNbKDxhbnk+d2luZG93KS5nb29nbGUubWFwcy5Db250cm9sUG9zaXRpb25bdGhpcy5wb3NpdGlvbl1dLnB1c2goY29udGVudCk7XG4gICAgLy8gfSk7XG4gIH1cblxuICBvbnRvdWNoc3RhcnQoZXY6IFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLnRvdWNoRGV2aWNlID0gdHJ1ZTtcbiAgICBpZihUQUdfV0hJVEVfTElTVC5pbmRleE9mKChldi50YXJnZXQgYXMgYW55KS50YWdOYW1lKT49MCl7XG4gICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgdGhpcy5lbmFibGVNYXBFdmVudHMobnVsbCk7XG4gIH1cblxuICBkaXNhYmxlTWFwRXZlbnRzKGV2ZW50Ok1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm0oZXZlbnQpO1xuXG4gICAgaWYodGhpcy50b3VjaERldmljZSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fbWFwLm1hcC50aGVuKG09PntcbiAgICAgIG0uZHJhZ2dpbmcuZGlzYWJsZSgpO1xuICAgICAgbS5zY3JvbGxXaGVlbFpvb20uZGlzYWJsZSgpO1xuXG4gICAgICAobSBhcyBhbnkgYXMgTWFwV2l0aEhhbmRsZXIpLl9oYW5kbGVycy5mb3JFYWNoKGg9PmguZGlzYWJsZSgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGVuYWJsZU1hcEV2ZW50cyhldmVudDpNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYoZXZlbnQpe1xuICAgICAgdGhpcy5tKGV2ZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLl9tYXAubWFwLnRoZW4obT0+e1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgcGFuOnRydWUsXG4gICAgICAgIHpvb206dHJ1ZVxuICAgICAgfTtcblxuICAgICAgaWYob3B0aW9ucy5wYW4pe1xuICAgICAgICBtLmRyYWdnaW5nLmVuYWJsZSgpO1xuICAgICAgfVxuXG4gICAgICBpZihvcHRpb25zLnpvb20pe1xuICAgICAgICBtLnNjcm9sbFdoZWVsWm9vbS5lbmFibGUoKTtcbiAgICAgIH1cblxuICAgICAgKG0gYXMgYW55IGFzIE1hcFdpdGhIYW5kbGVyKS5faGFuZGxlcnMuZm9yRWFjaChoPT5oLmRpc2FibGUoKSk7XG4gICAgfSk7XG4gIH1cblxuICBtKGV2ZW50Ok1vdXNlRXZlbnQpe1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbn1cbiJdfQ==