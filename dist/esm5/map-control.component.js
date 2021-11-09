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
        this.enableMapEvents(null);
    };
    MapControlComponent.prototype.disableMapEvents = function (event) {
        this.m(event);
        if (this.touchDevice) {
            return;
        }
        this._map.map.then(function (m) {
            m.dragging.disable();
            m.scrollWheelZoom.disable();
            m._handlers.forEach(function (h) { return h.disable(); });
        });
    };
    MapControlComponent.prototype.enableMapEvents = function (event) {
        if (event) {
            this.m(event);
        }
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
            m._handlers.forEach(function (h) { return h.enable(); });
        });
    };
    MapControlComponent.prototype.m = function (event) {
        event.stopPropagation();
    };
    MapControlComponent.ɵfac = function MapControlComponent_Factory(t) { return new (t || MapControlComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.LeafletService)); };
    MapControlComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MapControlComponent, selectors: [["map-control"]], viewQuery: function MapControlComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.mapControl = _t.first);
        } }, inputs: { position: "position" }, ngContentSelectors: _c1, decls: 3, vars: 0, consts: [[1, "map-control-content", 3, "touchstart", "mouseenter", "mouseleave", "click", "dblclick", "mousemove", "mousedown", "mouseup"], ["mapControl", ""]], template: function MapControlComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0, 1);
            i0.ɵɵlistener("touchstart", function MapControlComponent_Template_div_touchstart_0_listener($event) { return ctx.ontouchstart($event); })("mouseenter", function MapControlComponent_Template_div_mouseenter_0_listener($event) { return ctx.disableMapEvents($event); })("mouseleave", function MapControlComponent_Template_div_mouseleave_0_listener($event) { return ctx.enableMapEvents($event); })("click", function MapControlComponent_Template_div_click_0_listener($event) { return ctx.m($event); })("dblclick", function MapControlComponent_Template_div_dblclick_0_listener($event) { return ctx.m($event); })("mousemove", function MapControlComponent_Template_div_mousemove_0_listener($event) { return ctx.m($event); })("mousedown", function MapControlComponent_Template_div_mousedown_0_listener($event) { return ctx.m($event); })("mouseup", function MapControlComponent_Template_div_mouseup_0_listener($event) { return ctx.m($event); });
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
                template: "<div #mapControl class=\"map-control-content\"\n                  (touchstart)=\"ontouchstart($event)\"\n                  (mouseenter)=\"disableMapEvents($event)\"\n                  (mouseleave)=\"enableMapEvents($event)\"\n                  (click)=\"m($event)\"\n                  (dblclick)=\"m($event)\"\n                  (mousemove)=\"m($event)\"\n                  (mousedown)=\"m($event)\"\n                  (mouseup)=\"m($event)\">\n  <ng-content></ng-content>\n</div>\n", styles: [".map-control-content{\n  background: transparent;\n}\n"],
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.LeafletService }]; }, { mapControl: [{
            type: core_1.ViewChild,
            args: ['mapControl', { static: false }]
        }], position: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtbGVhZmxldC8iLCJzb3VyY2VzIjpbIm1hcC1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrREFBa0Q7QUFBbEQsa0RBQWtEO0FBRWxELHNDQUErRjtBQUMvRixxREFBbUQ7QUFDbkQsaUNBQW1DOzs7OztBQU9uQyxJQUFNLGNBQWMsR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFTckQ7SUF1QkUsNkJBQW9CLEdBQWUsRUFBVSxJQUFvQjtRQUE3QyxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBZ0I7UUFIeEQsYUFBUSxHQUFHLFdBQVcsQ0FBQztRQUNoQyxnQkFBVyxHQUFHLEtBQUssQ0FBQztJQUVpRCxDQUFDO0lBRXRFLHNDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsNkNBQWUsR0FBZjtRQUFBLGlCQWtDQztRQWpDQywyQ0FBMkM7UUFDM0MsSUFBSSxPQUFPLEdBQWdCLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBRXhGLDRFQUE0RTtRQUM1RSxZQUFZO1FBQ1osSUFBSSxPQUFPLENBQUMsUUFBUSxLQUFLLEtBQUssRUFBRTtZQUM5QixJQUFNLFVBQVUsR0FBZ0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5RCxVQUFVLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sR0FBRyxVQUFVLENBQUM7U0FDdEI7UUFFRCxJQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUMzQyxLQUFLLEVBQUUsVUFBQyxHQUFlO2dCQUNyQixPQUFPLE9BQU8sQ0FBQztZQUNqQixDQUFDO1lBRUQsUUFBUSxFQUFFLFVBQUMsR0FBZTtnQkFDeEIscUJBQXFCO1lBQ3ZCLENBQUM7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFNLGlCQUFpQixHQUFHLFVBQUMsSUFBUTtZQUNqQyxPQUFPLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQztRQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDcEIsSUFBTSxDQUFDLEdBQUcsaUJBQWlCLENBQUM7Z0JBQzFCLFFBQVEsRUFBRSxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFO2FBQ3ZELENBQUMsQ0FBQztZQUNILENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztRQUNILCtGQUErRjtRQUMvRixNQUFNO0lBQ1IsQ0FBQztJQUVELDBDQUFZLEdBQVosVUFBYSxFQUFjO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBRSxFQUFFLENBQUMsTUFBYyxDQUFDLE9BQU8sQ0FBQyxJQUFFLENBQUMsRUFBQztZQUN2RCxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDdEI7UUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCw4Q0FBZ0IsR0FBaEIsVUFBaUIsS0FBZ0I7UUFDL0IsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVkLElBQUcsSUFBSSxDQUFDLFdBQVcsRUFBQztZQUNsQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO1lBQ2xCLENBQUMsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckIsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUUzQixDQUEyQixDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUUsT0FBQSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQVgsQ0FBVyxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsNkNBQWUsR0FBZixVQUFnQixLQUFnQjtRQUM5QixJQUFHLEtBQUssRUFBQztZQUNQLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDZjtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7WUFDbEIsSUFBTSxPQUFPLEdBQUc7Z0JBQ2QsR0FBRyxFQUFDLElBQUk7Z0JBQ1IsSUFBSSxFQUFDLElBQUk7YUFDVixDQUFDO1lBRUYsSUFBRyxPQUFPLENBQUMsR0FBRyxFQUFDO2dCQUNiLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDckI7WUFFRCxJQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUM7Z0JBQ2QsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUM1QjtZQUVBLENBQTJCLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBRSxPQUFBLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwrQkFBQyxHQUFELFVBQUUsS0FBZ0I7UUFDaEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFCLENBQUM7MEZBOUZVLG1CQUFtQjs0REFBbkIsbUJBQW1COzs7Ozs7O1lBaEJuQixpQ0FTWDtZQVJnQiw2R0FBYyx3QkFBb0IsSUFBQyxnR0FDckIsNEJBQXdCLElBREgsZ0dBRXJCLDJCQUF1QixJQUZGLHNGQUcxQixhQUFTLElBSGlCLDRGQUl2QixhQUFTLElBSmMsOEZBS3RCLGFBQVMsSUFMYSw4RkFNdEIsYUFBUyxJQU5hLDBGQU94QixhQUFTLElBUGU7WUFRbkQsa0JBQXlCO1lBQzNCLGlCQUFNOzs4QkFoQ047Q0FzSUMsQUFsSEQsSUFrSEM7QUFoR1ksa0RBQW1CO2tEQUFuQixtQkFBbUI7Y0FsQi9CLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRSxvZUFXWCxFQUFFLE1BQU0sRUFBRSxDQUFDLHdEQUdYLENBQUM7YUFDRDswRkFFNkMsVUFBVTtrQkFBckQsZ0JBQVM7bUJBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUNqQyxRQUFRO2tCQUFoQixZQUFLIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCIuL2xlYWZsZXQuY3VzdG9tY29udHJvbHNcIiAvPlxuXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGVhZmxldFNlcnZpY2UgfSBmcm9tICcuL2xlYWZsZXQuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBsZWFmbGV0IGZyb20gJ2xlYWZsZXQnO1xuXG5pbnRlcmZhY2UgU2F2ZWRNYXBTZXR0aW5ncyB7XG4gIHBhbjogYm9vbGVhbjtcbiAgem9vbTogYm9vbGVhbjtcbn1cblxuY29uc3QgVEFHX1dISVRFX0xJU1QgPSBbJ0lOUFVUJywgJ1NFTEVDVCcsICdPUFRJT04nXTtcblxuaW50ZXJmYWNlIE1hcFdpdGhIYW5kbGVye1xuICBfaGFuZGxlcnM6IHtcbiAgICBlbmFibGU6ICgpPT52b2lkO1xuICAgIGRpc2FibGU6ICgpPT52b2lkO1xuICB9W107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21hcC1jb250cm9sJyxcbiAgdGVtcGxhdGU6IGA8ZGl2ICNtYXBDb250cm9sIGNsYXNzPVwibWFwLWNvbnRyb2wtY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAodG91Y2hzdGFydCk9XCJvbnRvdWNoc3RhcnQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJkaXNhYmxlTWFwRXZlbnRzKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgKG1vdXNlbGVhdmUpPVwiZW5hYmxlTWFwRXZlbnRzKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm0oJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAoZGJsY2xpY2spPVwibSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgIChtb3VzZW1vdmUpPVwibSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgIChtb3VzZWRvd24pPVwibSgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgIChtb3VzZXVwKT1cIm0oJGV2ZW50KVwiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbmAsIHN0eWxlczogW2AubWFwLWNvbnRyb2wtY29udGVudHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5gXSxcbn0pXG5leHBvcnQgY2xhc3MgTWFwQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ21hcENvbnRyb2wnLCB7IHN0YXRpYzogZmFsc2UgfSkgbWFwQ29udHJvbDogQ29tcG9uZW50O1xuICBASW5wdXQoKSBwb3NpdGlvbiA9ICdUT1BfUklHSFQnO1xuICB0b3VjaERldmljZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLCBwcml2YXRlIF9tYXA6IExlYWZsZXRTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICAvLyB0aGlzLl93cmFwcGVyLmdldE5hdGl2ZU1hcCgpLnRoZW4oKG0pPT57XG4gICAgbGV0IGNvbnRlbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5fZWwubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubWFwLWNvbnRyb2wtY29udGVudCcpO1xuXG4gICAgLy8gICAvLyBJZiBjb250ZW50IG9mIHRoZSBtYXAgY29udHJvbCBpcyBub3QgYWxyZWFkeSB3cmFwcGVkIGluIGEgZGl2LCBkbyBpdFxuICAgIC8vICAgLy8gbm93LlxuICAgIGlmIChjb250ZW50Lm5vZGVOYW1lICE9PSBcIkRJVlwiKSB7XG4gICAgICBjb25zdCBjb250cm9sRGl2OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgY29udHJvbERpdi5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgIGNvbnRlbnQgPSBjb250cm9sRGl2O1xuICAgIH1cblxuICAgIGNvbnN0IEN1c3RvbUNvbnRyb2wgPSBsZWFmbGV0LkNvbnRyb2wuZXh0ZW5kKHtcbiAgICAgIG9uQWRkOiAobWFwOmxlYWZsZXQuTWFwKSA9PiB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfSxcblxuICAgICAgb25SZW1vdmU6IChtYXA6bGVhZmxldC5NYXApID0+IHtcbiAgICAgICAgLy8gTm90aGluZyB0byBkbyBoZXJlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBtYWtlQ3VzdG9tQ29udHJvbCA9IChvcHRzOmFueSkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBDdXN0b21Db250cm9sKG9wdHMpO1xuICAgIH07XG5cbiAgICB0aGlzLl9tYXAubWFwLnRoZW4obWFwID0+IHtcbiAgICAgIGNvbnN0IGMgPSBtYWtlQ3VzdG9tQ29udHJvbCh7XG4gICAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLnJlcGxhY2UoL18vZywnJykudG9Mb3dlckNhc2UoKVxuICAgICAgfSk7XG4gICAgICBjLmFkZFRvKG1hcCk7XG4gICAgfSk7XG4gICAgLy8gICAoPGFueT5tKS5jb250cm9sc1soPGFueT53aW5kb3cpLmdvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvblt0aGlzLnBvc2l0aW9uXV0ucHVzaChjb250ZW50KTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIG9udG91Y2hzdGFydChldjogVG91Y2hFdmVudCk6IHZvaWQge1xuICAgIHRoaXMudG91Y2hEZXZpY2UgPSB0cnVlO1xuICAgIGlmKFRBR19XSElURV9MSVNULmluZGV4T2YoKGV2LnRhcmdldCBhcyBhbnkpLnRhZ05hbWUpPj0wKXtcbiAgICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICB0aGlzLmVuYWJsZU1hcEV2ZW50cyhudWxsKTtcbiAgfVxuXG4gIGRpc2FibGVNYXBFdmVudHMoZXZlbnQ6TW91c2VFdmVudCk6IHZvaWQge1xuICAgIHRoaXMubShldmVudCk7XG5cbiAgICBpZih0aGlzLnRvdWNoRGV2aWNlKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9tYXAubWFwLnRoZW4obT0+e1xuICAgICAgbS5kcmFnZ2luZy5kaXNhYmxlKCk7XG4gICAgICBtLnNjcm9sbFdoZWVsWm9vbS5kaXNhYmxlKCk7XG5cbiAgICAgIChtIGFzIGFueSBhcyBNYXBXaXRoSGFuZGxlcikuX2hhbmRsZXJzLmZvckVhY2goaD0+aC5kaXNhYmxlKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgZW5hYmxlTWFwRXZlbnRzKGV2ZW50Ok1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZihldmVudCl7XG4gICAgICB0aGlzLm0oZXZlbnQpO1xuICAgIH1cblxuICAgIHRoaXMuX21hcC5tYXAudGhlbihtPT57XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBwYW46dHJ1ZSxcbiAgICAgICAgem9vbTp0cnVlXG4gICAgICB9O1xuXG4gICAgICBpZihvcHRpb25zLnBhbil7XG4gICAgICAgIG0uZHJhZ2dpbmcuZW5hYmxlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmKG9wdGlvbnMuem9vbSl7XG4gICAgICAgIG0uc2Nyb2xsV2hlZWxab29tLmVuYWJsZSgpO1xuICAgICAgfVxuXG4gICAgICAobSBhcyBhbnkgYXMgTWFwV2l0aEhhbmRsZXIpLl9oYW5kbGVycy5mb3JFYWNoKGg9PmguZW5hYmxlKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgbShldmVudDpNb3VzZUV2ZW50KXtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxuXG59XG4iXX0=