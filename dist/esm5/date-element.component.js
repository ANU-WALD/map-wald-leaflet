"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateElementComponent = void 0;
var core_1 = require("@angular/core");
var i0 = require("@angular/core");
var DateElementComponent = /** @class */ (function () {
    function DateElementComponent() {
        this.step = 1;
        this.changed = new core_1.EventEmitter();
        this.disabled = false;
    }
    DateElementComponent.prototype.ngAfterViewInit = function () {
    };
    DateElementComponent.prototype.move = function (n) {
        this.src[this.property] += n;
        this.changed.emit(this.src);
    };
    DateElementComponent.ɵfac = function DateElementComponent_Factory(t) { return new (t || DateElementComponent)(); };
    DateElementComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DateElementComponent, selectors: [["date-element"]], inputs: { label: "label", property: "property", src: "src", step: "step", disabled: "disabled" }, outputs: { changed: "changed" }, decls: 12, vars: 4, consts: [[1, "row", "no-gutters"], [1, "col-4"], [1, "col-2"], [1, "btn", "btn-secondary", "btn-sm", 3, "disabled", "click"], [1, "fa", "fa-angle-left"], [1, "btn", "btn-link", "btn-sm"], [1, "fa", "fa-angle-right"]], template: function DateElementComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵelementStart(4, "button", 3);
            i0.ɵɵlistener("click", function DateElementComponent_Template_button_click_4_listener() { return ctx.move(-ctx.step); });
            i0.ɵɵelement(5, "i", 4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 1);
            i0.ɵɵelementStart(7, "button", 5);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 2);
            i0.ɵɵelementStart(10, "button", 3);
            i0.ɵɵlistener("click", function DateElementComponent_Template_button_click_10_listener() { return ctx.move(ctx.step); });
            i0.ɵɵelement(11, "i", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.label);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.disabled);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx.src[ctx.property]);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", ctx.disabled);
        } }, encapsulation: 2 });
    return DateElementComponent;
}());
exports.DateElementComponent = DateElementComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateElementComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'date-element',
                template: "<div class=\"row no-gutters\">\n  <div class=\"col-4\">{{label}}</div>\n  <div class=\"col-2\">\n    <button class=\"btn btn-secondary btn-sm\"\n            (click)=\"move(-step)\"\n            [disabled]=\"disabled\">\n      <i class=\"fa fa-angle-left\"></i>\n    </button>\n  </div>\n  <div class=\"col-4\"><button class=\"btn btn-link btn-sm\">{{src[property]}}</button></div>\n  <div class=\"col-2\">\n    <button class=\"btn btn-secondary btn-sm\"\n            (click)=\"move(step)\"\n            [disabled]=\"disabled\">\n      <i class=\"fa fa-angle-right\"></i>\n    </button>\n  </div>\n</div>\n",
                styles: []
            }]
    }], function () { return []; }, { label: [{
            type: core_1.Input
        }], property: [{
            type: core_1.Input
        }], src: [{
            type: core_1.Input
        }], step: [{
            type: core_1.Input
        }], changed: [{
            type: core_1.Output
        }], disabled: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1lbGVtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLWxlYWZsZXQvIiwic291cmNlcyI6WyJkYXRlLWVsZW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUE2Rzs7QUFLN0c7SUE2QkU7UUFKUyxTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsWUFBTyxHQUFHLElBQUksbUJBQVksRUFBTyxDQUFDO1FBQ25DLGFBQVEsR0FBRyxLQUFLLENBQUM7SUFJMUIsQ0FBQztJQUVELDhDQUFlLEdBQWY7SUFFQSxDQUFDO0lBRUQsbUNBQUksR0FBSixVQUFLLENBQVE7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7NEZBbkJVLG9CQUFvQjs2REFBcEIsb0JBQW9CO1lBbkJwQiw4QkFDWDtZQUFBLDhCQUFtQjtZQUFBLFlBQVM7WUFBQSxpQkFBTTtZQUNsQyw4QkFDRTtZQUFBLGlDQUdFO1lBRk0saUdBQVMsbUJBQVcsSUFBQztZQUUzQix1QkFBZ0M7WUFDbEMsaUJBQVM7WUFDWCxpQkFBTTtZQUNOLDhCQUFtQjtZQUFBLGlDQUFvQztZQUFBLFlBQWlCO1lBQUEsaUJBQVM7WUFBQSxpQkFBTTtZQUN2Riw4QkFDRTtZQUFBLGtDQUdFO1lBRk0sa0dBQVMsa0JBQVUsSUFBQztZQUUxQix3QkFBaUM7WUFDbkMsaUJBQVM7WUFDWCxpQkFBTTtZQUNSLGlCQUFNOztZQWhCZSxlQUFTO1lBQVQsK0JBQVM7WUFJbEIsZUFBcUI7WUFBckIsdUNBQXFCO1lBSXdCLGVBQWlCO1lBQWpCLDJDQUFpQjtZQUk5RCxlQUFxQjtZQUFyQix1Q0FBcUI7OytCQXBCakM7Q0E4Q0MsQUF6Q0QsSUF5Q0M7QUFwQlksb0RBQW9CO2tEQUFwQixvQkFBb0I7Y0FyQmhDLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRSwrbEJBa0JYO2dCQUFDLE1BQU0sRUFBRSxFQUFFO2FBQUM7c0NBRUYsS0FBSztrQkFBYixZQUFLO1lBQ0csUUFBUTtrQkFBaEIsWUFBSztZQUNHLEdBQUc7a0JBQVgsWUFBSztZQUNHLElBQUk7a0JBQVosWUFBSztZQUNJLE9BQU87a0JBQWhCLGFBQU07WUFDRSxRQUFRO2tCQUFoQixZQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cbmRlY2xhcmUgdmFyIFBsb3RseTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlLWVsZW1lbnQnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJyb3cgbm8tZ3V0dGVyc1wiPlxuICA8ZGl2IGNsYXNzPVwiY29sLTRcIj57e2xhYmVsfX08L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbC0yXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiXG4gICAgICAgICAgICAoY2xpY2spPVwibW92ZSgtc3RlcClcIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLWxlZnRcIj48L2k+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29sLTRcIj48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1saW5rIGJ0bi1zbVwiPnt7c3JjW3Byb3BlcnR5XX19PC9idXR0b24+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjb2wtMlwiPlxuICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc21cIlxuICAgICAgICAgICAgKGNsaWNrKT1cIm1vdmUoc3RlcClcIlxuICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLXJpZ2h0XCI+PC9pPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZGl2PlxuYCxzdHlsZXM6IFtdfSlcbmV4cG9ydCBjbGFzcyBEYXRlRWxlbWVudENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQgIHtcbiAgQElucHV0KCkgbGFiZWw6c3RyaW5nO1xuICBASW5wdXQoKSBwcm9wZXJ0eTpzdHJpbmc7XG4gIEBJbnB1dCgpIHNyYzphbnk7XG4gIEBJbnB1dCgpIHN0ZXAgPSAxO1xuICBAT3V0cHV0KCkgY2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuXG4gIH1cblxuICBtb3ZlKG46bnVtYmVyKXtcbiAgICB0aGlzLnNyY1t0aGlzLnByb3BlcnR5XSArPSBuO1xuICAgIHRoaXMuY2hhbmdlZC5lbWl0KHRoaXMuc3JjKTtcbiAgfVxufVxuIl19