"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateElementComponent = void 0;
const core_1 = require("@angular/core");
const i0 = require("@angular/core");
class DateElementComponent {
    constructor() {
        this.step = 1;
        this.changed = new core_1.EventEmitter();
        this.disabled = false;
    }
    ngAfterViewInit() {
    }
    move(n) {
        this.src[this.property] += n;
        this.changed.emit(this.src);
    }
}
exports.DateElementComponent = DateElementComponent;
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
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateElementComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'date-element',
                template: `<div class="row no-gutters">
  <div class="col-4">{{label}}</div>
  <div class="col-2">
    <button class="btn btn-secondary btn-sm"
            (click)="move(-step)"
            [disabled]="disabled">
      <i class="fa fa-angle-left"></i>
    </button>
  </div>
  <div class="col-4"><button class="btn btn-link btn-sm">{{src[property]}}</button></div>
  <div class="col-2">
    <button class="btn btn-secondary btn-sm"
            (click)="move(step)"
            [disabled]="disabled">
      <i class="fa fa-angle-right"></i>
    </button>
  </div>
</div>
`, styles: []
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1lbGVtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLWxlYWZsZXQvIiwic291cmNlcyI6WyJkYXRlLWVsZW1lbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUE2Rzs7QUFLN0csTUFxQmEsb0JBQW9CO0lBUS9CO1FBSlMsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNSLFlBQU8sR0FBRyxJQUFJLG1CQUFZLEVBQU8sQ0FBQztRQUNuQyxhQUFRLEdBQUcsS0FBSyxDQUFDO0lBSTFCLENBQUM7SUFFRCxlQUFlO0lBRWYsQ0FBQztJQUVELElBQUksQ0FBQyxDQUFRO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QixDQUFDOztBQXhDSCxvREF5Q0M7d0ZBcEJZLG9CQUFvQjt5REFBcEIsb0JBQW9CO1FBbkJwQiw4QkFDWDtRQUFBLDhCQUFtQjtRQUFBLFlBQVM7UUFBQSxpQkFBTTtRQUNsQyw4QkFDRTtRQUFBLGlDQUdFO1FBRk0saUdBQVMsbUJBQVcsSUFBQztRQUUzQix1QkFBZ0M7UUFDbEMsaUJBQVM7UUFDWCxpQkFBTTtRQUNOLDhCQUFtQjtRQUFBLGlDQUFvQztRQUFBLFlBQWlCO1FBQUEsaUJBQVM7UUFBQSxpQkFBTTtRQUN2Riw4QkFDRTtRQUFBLGtDQUdFO1FBRk0sa0dBQVMsa0JBQVUsSUFBQztRQUUxQix3QkFBaUM7UUFDbkMsaUJBQVM7UUFDWCxpQkFBTTtRQUNSLGlCQUFNOztRQWhCZSxlQUFTO1FBQVQsK0JBQVM7UUFJbEIsZUFBcUI7UUFBckIsdUNBQXFCO1FBSXdCLGVBQWlCO1FBQWpCLDJDQUFpQjtRQUk5RCxlQUFxQjtRQUFyQix1Q0FBcUI7O2tEQU1wQixvQkFBb0I7Y0FyQmhDLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBa0JYLEVBQUMsTUFBTSxFQUFFLEVBQUU7YUFBQztzQ0FFRixLQUFLO2tCQUFiLFlBQUs7WUFDRyxRQUFRO2tCQUFoQixZQUFLO1lBQ0csR0FBRztrQkFBWCxZQUFLO1lBQ0csSUFBSTtrQkFBWixZQUFLO1lBQ0ksT0FBTztrQkFBaEIsYUFBTTtZQUNFLFFBQVE7a0JBQWhCLFlBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuZGVjbGFyZSB2YXIgUGxvdGx5OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGUtZWxlbWVudCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInJvdyBuby1ndXR0ZXJzXCI+XG4gIDxkaXYgY2xhc3M9XCJjb2wtNFwiPnt7bGFiZWx9fTwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiY29sLTJcIj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCJcbiAgICAgICAgICAgIChjbGljayk9XCJtb3ZlKC1zdGVwKVwiXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtbGVmdFwiPjwvaT5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJjb2wtNFwiPjxidXR0b24gY2xhc3M9XCJidG4gYnRuLWxpbmsgYnRuLXNtXCI+e3tzcmNbcHJvcGVydHldfX08L2J1dHRvbj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImNvbC0yXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiXG4gICAgICAgICAgICAoY2xpY2spPVwibW92ZShzdGVwKVwiXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIj48L2k+XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuPC9kaXY+XG5gLHN0eWxlczogW119KVxuZXhwb3J0IGNsYXNzIERhdGVFbGVtZW50Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCAge1xuICBASW5wdXQoKSBsYWJlbDpzdHJpbmc7XG4gIEBJbnB1dCgpIHByb3BlcnR5OnN0cmluZztcbiAgQElucHV0KCkgc3JjOmFueTtcbiAgQElucHV0KCkgc3RlcCA9IDE7XG4gIEBPdXRwdXQoKSBjaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKXtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG5cbiAgfVxuXG4gIG1vdmUobjpudW1iZXIpe1xuICAgIHRoaXMuc3JjW3RoaXMucHJvcGVydHldICs9IG47XG4gICAgdGhpcy5jaGFuZ2VkLmVtaXQodGhpcy5zcmMpO1xuICB9XG59XG4iXX0=