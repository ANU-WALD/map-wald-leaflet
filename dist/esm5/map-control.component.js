"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapControlComponent = void 0;
/// <reference types="./leaflet.customcontrols" />
/// <reference types="./leaflet.customcontrols" />
var core_1 = require("@angular/core");
var leaflet_service_1 = require("./leaflet.service");
var leaflet = require("leaflet");
var i0 = require("@angular/core");
var i1 = require("./leaflet.service");
var _c0 = ["mapControl"];
var _c1 = ["*"];
var TAG_WHITE_LIST = ['INPUT', 'SELECT', 'OPTION'];
var MapControlComponent = /** @class */ (function () {
    function MapControlComponent(_el, _map) {
        this._el = _el;
        this._map = _map;
        this.position = 'TOP_RIGHT';
        this.touchDevice = false;
    }
    MapControlComponent.prototype.ngOnInit = function () {
    };
    MapControlComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // this._wrapper.getNativeMap().then((m)=>{
        var content = this._el.nativeElement.querySelector('.map-control-content');
        //   // If content of the map control is not already wrapped in a div, do it
        //   // now.
        if (content.nodeName !== "DIV") {
            var controlDiv = document.createElement('div');
            controlDiv.appendChild(content);
            content = controlDiv;
        }
        var CustomControl = leaflet.Control.extend({
            onAdd: function (map) {
                return content;
            },
            onRemove: function (map) {
                // Nothing to do here
            }
        });
        var makeCustomControl = function (opts) {
            return new CustomControl(opts);
        };
        this._map.map.then(function (map) {
            var c = makeCustomControl({
                position: _this.position.replace(/_/g, '').toLowerCase()
            });
            c.addTo(map);
        });
        //   (<any>m).controls[(<any>window).google.maps.ControlPosition[this.position]].push(content);
        // });
    };
    MapControlComponent.prototype.ontouchstart = function (ev) {
        this.touchDevice = true;
        if (TAG_WHITE_LIST.indexOf(ev.target.tagName) >= 0) {
            ev.stopPropagation();
        }
        this.enableMapEvents();
    };
    MapControlComponent.prototype.disableMapEvents = function () {
        if (this.touchDevice) {
            return;
        }
        this._map.map.then(function (m) {
            m.dragging.disable();
            m.scrollWheelZoom.disable();
        });
    };
    MapControlComponent.prototype.enableMapEvents = function () {
        this._map.map.then(function (m) {
            var options = {
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
    };
    MapControlComponent.ɵfac = function MapControlComponent_Factory(t) { return new (t || MapControlComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.LeafletService)); };
    MapControlComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MapControlComponent, selectors: [["map-control"]], viewQuery: function MapControlComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mapControl = _t.first);
        } }, inputs: { position: "position" }, ngContentSelectors: _c1, decls: 3, vars: 0, consts: [[1, "map-control-content", 3, "touchstart", "mouseenter", "mouseleave"], ["mapControl", ""]], template: function MapControlComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0, 1);
            i0.ɵɵlistener("touchstart", function MapControlComponent_Template_div_touchstart_0_listener($event) { return ctx.ontouchstart($event); })("mouseenter", function MapControlComponent_Template_div_mouseenter_0_listener() { return ctx.disableMapEvents(); })("mouseleave", function MapControlComponent_Template_div_mouseleave_0_listener() { return ctx.enableMapEvents(); });
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd();
        } }, styles: [".map-control-content[_ngcontent-%COMP%]{\n  background: transparent;\n}"] });
    return MapControlComponent;
}());
exports.MapControlComponent = MapControlComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MapControlComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'map-control',
                template: "<div #mapControl class=\"map-control-content\"\n                  (touchstart)=\"ontouchstart($event)\"\n                  (mouseenter)=\"disableMapEvents()\"\n                  (mouseleave)=\"enableMapEvents()\">\n  <ng-content></ng-content>\n</div>\n", styles: [".map-control-content{\n  background: transparent;\n}\n"],
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.LeafletService }]; }, { mapControl: [{
            type: core_1.ViewChild,
            args: ['mapControl', { static: false }]
        }], position: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtbGVhZmxldC8iLCJzb3VyY2VzIjpbIm1hcC1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrREFBa0Q7QUFBbEQsa0RBQWtEO0FBRWxELHNDQUErRjtBQUMvRixxREFBbUQ7QUFDbkQsaUNBQW1DOzs7OztBQU9uQyxJQUFNLGNBQWMsR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFFckQ7SUFrQkUsNkJBQW9CLEdBQWUsRUFBVSxJQUFvQjtRQUE3QyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFIeEQsYUFBUSxHQUFHLFdBQVcsQ0FBQztRQUNoQyxnQkFBVyxHQUFHLEtBQUssQ0FBQztJQUVpRCxDQUFDO0lBRXRFLHNDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsNkNBQWUsR0FBZjtRQUFBLGlCQWtDQztRQWpDQywyQ0FBMkM7UUFDM0MsSUFBSSxPQUFPLEdBQWdCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRXhGLDRFQUE0RTtRQUM1RSxZQUFZO1FBQ1osSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLEtBQUssRUFBRTtZQUM5QixJQUFNLFVBQVUsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5RCxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sR0FBRyxVQUFVLENBQUM7U0FDdEI7UUFFRCxJQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUMzQyxLQUFLLEVBQUUsVUFBQyxHQUFlO2dCQUNyQixPQUFPLE9BQU8sQ0FBQztZQUNqQixDQUFDO1lBRUQsUUFBUSxFQUFFLFVBQUMsR0FBZTtnQkFDeEIscUJBQXFCO1lBQ3ZCLENBQUM7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFNLGlCQUFpQixHQUFHLFVBQUMsSUFBUTtZQUNqQyxPQUFPLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDcEIsSUFBTSxDQUFDLEdBQUcsaUJBQWlCLENBQUM7Z0JBQzFCLFFBQVEsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFO2FBQ3ZELENBQUMsQ0FBQztZQUNILENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztRQUNILCtGQUErRjtRQUMvRixNQUFNO0lBQ1IsQ0FBQztJQUVELDBDQUFZLEdBQVosVUFBYSxFQUFjO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBRSxFQUFFLENBQUMsTUFBYyxDQUFDLE9BQU8sQ0FBQyxJQUFFLENBQUMsRUFBQztZQUN2RCxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDdEI7UUFDRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELDhDQUFnQixHQUFoQjtRQUNFLElBQUcsSUFBSSxDQUFDLFdBQVcsRUFBQztZQUNsQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckIsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCw2Q0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztZQUNsQixJQUFNLE9BQU8sR0FBRztnQkFDZCxHQUFHLEVBQUMsSUFBSTtnQkFDUixJQUFJLEVBQUMsSUFBSTthQUNWLENBQUM7WUFFRixJQUFHLE9BQU8sQ0FBQyxHQUFHLEVBQUM7Z0JBQ2IsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNyQjtZQUVELElBQUcsT0FBTyxDQUFDLElBQUksRUFBQztnQkFDZCxDQUFDLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQzVCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzBGQWhGVSxtQkFBbUI7NERBQW5CLG1CQUFtQjs7Ozs7OztZQVhuQixpQ0FJWDtZQUhnQiw2R0FBYyx3QkFBb0IsSUFBQywwRkFDckIsc0JBQWtCLElBREcsMEZBRXJCLHFCQUFpQixJQUZJO1lBR25ELGtCQUF5QjtZQUMzQixpQkFBTTs7OEJBcEJOO0NBNEdDLEFBL0ZELElBK0ZDO0FBbEZZLGtEQUFtQjtrREFBbkIsbUJBQW1CO2NBYi9CLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRSw4UEFNWCxFQUFFLE1BQU0sRUFBRSxDQUFDLHdEQUdYLENBQUM7YUFDRDswRkFFNkMsVUFBVTtrQkFBckQsZ0JBQVM7bUJBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUNqQyxRQUFRO2tCQUFoQixZQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCIuL2xlYWZsZXQuY3VzdG9tY29udHJvbHNcIiAvPlxuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGVhZmxldFNlcnZpY2UgfSBmcm9tICcuL2xlYWZsZXQuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBsZWFmbGV0IGZyb20gJ2xlYWZsZXQnO1xuXG5pbnRlcmZhY2UgU2F2ZWRNYXBTZXR0aW5ncyB7XG4gIHBhbjogYm9vbGVhbjtcbiAgem9vbTogYm9vbGVhbjtcbn1cblxuY29uc3QgVEFHX1dISVRFX0xJU1QgPSBbJ0lOUFVUJywgJ1NFTEVDVCcsICdPUFRJT04nXTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWFwLWNvbnRyb2wnLFxuICB0ZW1wbGF0ZTogYDxkaXYgI21hcENvbnRyb2wgY2xhc3M9XCJtYXAtY29udHJvbC1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICh0b3VjaHN0YXJ0KT1cIm9udG91Y2hzdGFydCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cImRpc2FibGVNYXBFdmVudHMoKVwiXG4gICAgICAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJlbmFibGVNYXBFdmVudHMoKVwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbmAsIHN0eWxlczogW2AubWFwLWNvbnRyb2wtY29udGVudHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5gXSxcbn0pXG5leHBvcnQgY2xhc3MgTWFwQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ21hcENvbnRyb2wnLCB7IHN0YXRpYzogZmFsc2UgfSkgbWFwQ29udHJvbDogQ29tcG9uZW50O1xuICBASW5wdXQoKSBwb3NpdGlvbiA9ICdUT1BfUklHSFQnO1xuICB0b3VjaERldmljZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLCBwcml2YXRlIF9tYXA6IExlYWZsZXRTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAvLyB0aGlzLl93cmFwcGVyLmdldE5hdGl2ZU1hcCgpLnRoZW4oKG0pPT57XG4gICAgbGV0IGNvbnRlbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubWFwLWNvbnRyb2wtY29udGVudCcpO1xuXG4gICAgLy8gICAvLyBJZiBjb250ZW50IG9mIHRoZSBtYXAgY29udHJvbCBpcyBub3QgYWxyZWFkeSB3cmFwcGVkIGluIGEgZGl2LCBkbyBpdFxuICAgIC8vICAgLy8gbm93LlxuICAgIGlmIChjb250ZW50Lm5vZGVOYW1lICE9PSBcIkRJVlwiKSB7XG4gICAgICBjb25zdCBjb250cm9sRGl2OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udHJvbERpdi5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgIGNvbnRlbnQgPSBjb250cm9sRGl2O1xuICAgIH1cblxuICAgIGNvbnN0IEN1c3RvbUNvbnRyb2wgPSBsZWFmbGV0LkNvbnRyb2wuZXh0ZW5kKHtcbiAgICAgIG9uQWRkOiAobWFwOmxlYWZsZXQuTWFwKSA9PiB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfSxcblxuICAgICAgb25SZW1vdmU6IChtYXA6bGVhZmxldC5NYXApID0+IHtcbiAgICAgICAgLy8gTm90aGluZyB0byBkbyBoZXJlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBtYWtlQ3VzdG9tQ29udHJvbCA9IChvcHRzOmFueSkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBDdXN0b21Db250cm9sKG9wdHMpO1xuICAgIH07XG5cbiAgICB0aGlzLl9tYXAubWFwLnRoZW4obWFwID0+IHtcbiAgICAgIGNvbnN0IGMgPSBtYWtlQ3VzdG9tQ29udHJvbCh7XG4gICAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLnJlcGxhY2UoL18vZywnJykudG9Mb3dlckNhc2UoKVxuICAgICAgfSk7XG4gICAgICBjLmFkZFRvKG1hcCk7XG4gICAgfSk7XG4gICAgLy8gICAoPGFueT5tKS5jb250cm9sc1soPGFueT53aW5kb3cpLmdvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvblt0aGlzLnBvc2l0aW9uXV0ucHVzaChjb250ZW50KTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIG9udG91Y2hzdGFydChldjogVG91Y2hFdmVudCk6IHZvaWQge1xuICAgIHRoaXMudG91Y2hEZXZpY2UgPSB0cnVlO1xuICAgIGlmKFRBR19XSElURV9MSVNULmluZGV4T2YoKGV2LnRhcmdldCBhcyBhbnkpLnRhZ05hbWUpPj0wKXtcbiAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICB0aGlzLmVuYWJsZU1hcEV2ZW50cygpO1xuICB9XG5cbiAgZGlzYWJsZU1hcEV2ZW50cygpOiB2b2lkIHtcbiAgICBpZih0aGlzLnRvdWNoRGV2aWNlKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9tYXAubWFwLnRoZW4obT0+e1xuICAgICAgbS5kcmFnZ2luZy5kaXNhYmxlKCk7XG4gICAgICBtLnNjcm9sbFdoZWVsWm9vbS5kaXNhYmxlKCk7XG4gICAgfSk7XG4gIH1cblxuICBlbmFibGVNYXBFdmVudHMoKTogdm9pZCB7XG4gICAgdGhpcy5fbWFwLm1hcC50aGVuKG09PntcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIHBhbjp0cnVlLFxuICAgICAgICB6b29tOnRydWVcbiAgICAgIH07XG5cbiAgICAgIGlmKG9wdGlvbnMucGFuKXtcbiAgICAgICAgbS5kcmFnZ2luZy5lbmFibGUoKTtcbiAgICAgIH1cblxuICAgICAgaWYob3B0aW9ucy56b29tKXtcbiAgICAgICAgbS5zY3JvbGxXaGVlbFpvb20uZW5hYmxlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxufVxuIl19