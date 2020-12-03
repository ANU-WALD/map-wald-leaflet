"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateSelectionComponent = void 0;
const core_1 = require("@angular/core");
const map_wald_1 = require("map-wald");
const i0 = require("@angular/core");
const i1 = require("map-wald");
const i2 = require("@angular/common");
const i3 = require("@ng-bootstrap/ng-bootstrap");
const i4 = require("@angular/forms");
const i5 = require("./date-element.component");
function DateSelectionComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵlistener("click", function DateSelectionComponent_div_1_div_3_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(2); return ctx_r5.move(-ctx_r5.stepDays); });
    i0.ɵɵelement(1, "i", 11);
    i0.ɵɵelementEnd();
} }
function DateSelectionComponent_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵlistener("click", function DateSelectionComponent_div_1_div_8_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r8); const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.move(ctx_r7.stepDays); });
    i0.ɵɵelement(1, "i", 12);
    i0.ɵɵelementEnd();
} }
function DateSelectionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵelementStart(2, "div", 5);
    i0.ɵɵtemplate(3, DateSelectionComponent_div_1_div_3_Template, 2, 0, "div", 6);
    i0.ɵɵelementStart(4, "input", 7, 8);
    i0.ɵɵlistener("ngModelChange", function DateSelectionComponent_div_1_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.dateStruct = $event; })("ngModelChange", function DateSelectionComponent_div_1_Template_input_ngModelChange_4_listener() { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.dateStructChanged(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 9);
    i0.ɵɵlistener("click", function DateSelectionComponent_div_1_Template_div_click_6_listener() { i0.ɵɵrestoreView(_r10); const _r3 = i0.ɵɵreference(5); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.disabled || _r3.toggle(); });
    i0.ɵɵelement(7, "i", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, DateSelectionComponent_div_1_div_8_Template, 2, 0, "div", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.step);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r0.dateStruct)("maxDate", ctx_r0.maxDateStruct)("minDate", ctx_r0.minDateStruct)("disabled", ctx_r0.disabled);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.step);
} }
function DateSelectionComponent_div_2_date_element_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "date-element", 15);
    i0.ɵɵlistener("changed", function DateSelectionComponent_div_2_date_element_1_Template_date_element_changed_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.dateStructChanged(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r13.dateStruct)("property", "day")("label", "Day")("step", ctx_r13.stepDays)("disabled", ctx_r13.disabled);
} }
function DateSelectionComponent_div_2_date_element_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "date-element", 16);
    i0.ɵɵlistener("changed", function DateSelectionComponent_div_2_date_element_2_Template_date_element_changed_0_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.dateStructChanged(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r14.dateStruct)("property", "month")("label", "Month")("disabled", ctx_r14.disabled);
} }
function DateSelectionComponent_div_2_date_element_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "date-element", 16);
    i0.ɵɵlistener("changed", function DateSelectionComponent_div_2_date_element_3_Template_date_element_changed_0_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.dateStructChanged(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r15.dateStruct)("property", "year")("label", "Year")("disabled", ctx_r15.disabled);
} }
function DateSelectionComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, DateSelectionComponent_div_2_date_element_1_Template, 1, 5, "date-element", 13);
    i0.ɵɵtemplate(2, DateSelectionComponent_div_2_date_element_2_Template, 1, 4, "date-element", 14);
    i0.ɵɵtemplate(3, DateSelectionComponent_div_2_date_element_3_Template, 1, 4, "date-element", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.need.day);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.need.month);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.need.year);
} }
const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;
class DateSelectionComponent {
    constructor(timeUtils) {
        this.timeUtils = timeUtils;
        this.dateChange = new core_1.EventEmitter();
        this.style = 'arrows';
        this.stepDays = 1;
        this.referenceDate = null;
        this.disabled = false;
        this.step = false;
        this.need = {
            day: true,
            month: true,
            year: true
        };
        this.atMax = false;
        this.atMin = false;
    }
    ngAfterViewInit() {
    }
    ngOnChanges(changes) {
        if (changes.minDate) {
            this.minDateStruct = this.timeUtils.convertDate(this.minDate);
        }
        if (changes.maxDate) {
            this.maxDateStruct = this.timeUtils.convertDate(this.maxDate);
        }
        if (changes.date) {
            this.dateStruct = this.timeUtils.convertDate(this.date);
        }
        if (changes.timestep) {
            this.assessDateComponents();
        }
        this.checkLimits();
    }
    dateStructChanged() {
        this.date = new Date(Date.UTC(this.dateStruct.year, this.dateStruct.month - 1, this.dateStruct.day));
        // this.date.setUTCFullYear(this.dateStruct.year)
        // this.date.setUTCMonth(this.dateStruct.month-1)
        // this.date.setUTCDate(this.dateStruct.day);
        this.checkReference();
        this.dateChange.emit(this.date);
    }
    assessDateComponents() {
        this.need.day = this.need.month = this.need.year = true;
        if (this.timestep === 'daily') {
            return;
        }
        this.need.day = false;
        if (this.timestep === 'annual') {
            this.need.month = false;
        }
    }
    move(n) {
        this.date = new Date(this.date && this.date.getTime());
        this.date.setDate(this.date.getDate() + n);
        this.onDateChanged();
        this.dateChange.emit(this.date);
    }
    onDateChanged() {
        this.checkLimits();
    }
    checkLimits() {
        this.atMax = this.timeUtils.datesEqual(this.dateStruct, this.maxDateStruct);
        this.atMin = this.timeUtils.datesEqual(this.dateStruct, this.minDateStruct);
    }
    // TODO not enforcing limits etc...
    checkReference() {
        if (!this.referenceDate) {
            return;
        }
        let refComponents = map_wald_1.InterpolationService.interpolate(this.referenceDate, {
            year: this.date.getFullYear(),
            month: this.date.getMonth() + 1,
            date: this.date.getDate()
        }).split('-').map(s => +s);
        let currentRef = new Date(Date.UTC(refComponents[0], refComponents[1] - 1, refComponents[2]));
        console.log('currentRef', currentRef);
        console.log('currentDate', this.date);
        let timeSpan = MILLISECONDS_PER_DAY * this.stepDays;
        let days = (this.date.getTime() - currentRef.getTime()) / timeSpan;
        this.date = new Date(currentRef.getTime() + Math.round(days) * timeSpan);
        this.dateStruct = this.timeUtils.convertDate(this.date);
    }
}
exports.DateSelectionComponent = DateSelectionComponent;
DateSelectionComponent.ɵfac = function DateSelectionComponent_Factory(t) { return new (t || DateSelectionComponent)(i0.ɵɵdirectiveInject(i1.TimeUtilsService)); };
DateSelectionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DateSelectionComponent, selectors: [["date-selection"]], inputs: { date: "date", timestep: "timestep", minDate: "minDate", maxDate: "maxDate", style: "style", stepDays: "stepDays", referenceDate: "referenceDate", disabled: "disabled", step: "step" }, outputs: { dateChange: "dateChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 2, consts: [[1, "date-control", "container-fluid"], ["class", "row no-gutters", 4, "ngIf"], [4, "ngIf"], [1, "row", "no-gutters"], [1, "col-12", "form-group-inline"], [1, "input-group", "input-group-sm"], ["class", "ds-btn input-group-addon", 3, "click", 4, "ngIf"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control", "form-control-sm", 3, "ngModel", "maxDate", "minDate", "disabled", "ngModelChange"], ["d", "ngbDatepicker"], [1, "ds-btn", "input-group-addon", 3, "click"], [1, "fa", "fa-calendar"], [1, "fa", "fa-angle-left"], [1, "fa", "fa-angle-right"], [3, "src", "property", "label", "step", "disabled", "changed", 4, "ngIf"], [3, "src", "property", "label", "disabled", "changed", 4, "ngIf"], [3, "src", "property", "label", "step", "disabled", "changed"], [3, "src", "property", "label", "disabled", "changed"]], template: function DateSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, DateSelectionComponent_div_1_Template, 9, 6, "div", 1);
        i0.ɵɵtemplate(2, DateSelectionComponent_div_2_Template, 4, 3, "div", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.style !== "arrows");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.style === "arrows");
    } }, directives: [i2.NgIf, i3.NgbInputDatepicker, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.DateElementComponent], styles: [".ds-btn[_ngcontent-%COMP%] {\n    min-width:10px;\n  }"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateSelectionComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'date-selection',
                template: `<div class="date-control container-fluid">
  <div *ngIf="style!=='arrows'" class="row no-gutters">
    <div class="col-12 form-group-inline">
        <div class="input-group input-group-sm">
          <div *ngIf="step" class="ds-btn input-group-addon" (click)="move(-stepDays)">
            <i class="fa fa-angle-left"></i>
          </div>
          <input class="form-control form-control-sm"
                 placeholder="yyyy-mm-dd"
                 name="dp"
                 [(ngModel)]="dateStruct"
                 (ngModelChange)="dateStructChanged()"
                 ngbDatepicker
                 #d="ngbDatepicker"
                 [maxDate]="maxDateStruct"
                 [minDate]="minDateStruct"
                 [disabled]="disabled">
          <div class="ds-btn input-group-addon" (click)="disabled||d.toggle()" >
            <i class="fa fa-calendar"></i>
          </div>
          <div *ngIf="step" class="ds-btn input-group-addon" (click)="move(stepDays)">
            <i class="fa fa-angle-right"></i>
          </div>
        </div>
      </div>

    <!--
      <div class="col-2" >
        <button class="btn btn-secondary btn-sm" [disabled]="atMax"
                (click)="move(1)"><i class="fa fa-chevron-right"></i></button>
      </div>
    -->
  </div>

  <div *ngIf="style==='arrows'">
    <date-element *ngIf="need.day"   [src]="dateStruct" [property]="'day'" [label]="'Day'"
                  [step]="stepDays"
                  (changed)="dateStructChanged()"
                  [disabled]="disabled"></date-element>
    <date-element *ngIf="need.month" [src]="dateStruct" [property]="'month'" [label]="'Month'"
                  (changed)="dateStructChanged()"
                  [disabled]="disabled"></date-element>
    <date-element *ngIf="need.year"  [src]="dateStruct" [property]="'year'" [label]="'Year'"
                  (changed)="dateStructChanged()"
                  [disabled]="disabled"></date-element>
  </div>
</div>
`, styles: [
                    `
  .ds-btn {
    min-width:10px;
  }
  `
                ]
            }]
    }], function () { return [{ type: i1.TimeUtilsService }]; }, { date: [{
            type: core_1.Input
        }], dateChange: [{
            type: core_1.Output
        }], timestep: [{
            type: core_1.Input
        }], minDate: [{
            type: core_1.Input
        }], maxDate: [{
            type: core_1.Input
        }], style: [{
            type: core_1.Input
        }], stepDays: [{
            type: core_1.Input
        }], referenceDate: [{
            type: core_1.Input
        }], disabled: [{
            type: core_1.Input
        }], step: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1zZWxlY3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtbGVhZmxldC8iLCJzb3VyY2VzIjpbImRhdGUtc2VsZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBNkc7QUFFN0csdUNBQWtFOzs7Ozs7Ozs7SUFZeEQsOEJBQ0U7SUFEaUQsd01BQXlCO0lBQzFFLHdCQUFnQztJQUNsQyxpQkFBTTs7OztJQWNOLDhCQUNFO0lBRGlELHVNQUF3QjtJQUN6RSx3QkFBaUM7SUFDbkMsaUJBQU07Ozs7SUFyQmQsOEJBQ0U7SUFBQSw4QkFDSTtJQUFBLDhCQUNFO0lBQUEsNkVBRU07SUFDTixtQ0FVQTtJQVBPLHVOQUF3QixzTUFBQTtJQUgvQixpQkFVQTtJQUFBLDhCQUNFO0lBRG9DLHFOQUFtQixZQUFVLElBQUM7SUFDbEUsd0JBQThCO0lBQ2hDLGlCQUFNO0lBQ04sNkVBRU07SUFDUixpQkFBTTtJQUNSLGlCQUFNO0lBUVYsaUJBQU07OztJQTVCUSxlQUFVO0lBQVYsa0NBQVU7SUFNVCxlQUF3QjtJQUF4QiwyQ0FBd0IsaUNBQUEsaUNBQUEsNkJBQUE7SUFVekIsZUFBVTtJQUFWLGtDQUFVOzs7O0lBZXRCLHdDQUdvQztJQUR0Qiw4TkFBK0I7SUFDVCxpQkFBZTs7O0lBSGxCLHdDQUFrQixtQkFBQSxnQkFBQSwwQkFBQSw4QkFBQTs7OztJQUluRCx3Q0FFb0M7SUFEdEIsOE5BQStCO0lBQ1QsaUJBQWU7OztJQUZsQix3Q0FBa0IscUJBQUEsa0JBQUEsOEJBQUE7Ozs7SUFHbkQsd0NBRW9DO0lBRHRCLDhOQUErQjtJQUNULGlCQUFlOzs7SUFGbEIsd0NBQWtCLG9CQUFBLGlCQUFBLDhCQUFBOzs7SUFSckQsMkJBQ0U7SUFBQSxnR0FHbUQ7SUFDbkQsZ0dBRW1EO0lBQ25ELGdHQUVtRDtJQUNyRCxpQkFBTTs7O0lBVlcsZUFBYztJQUFkLHNDQUFjO0lBSWQsZUFBZ0I7SUFBaEIs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WUFDRyxPQUFPO2tCQUFmLFlBQUs7WUFDRyxLQUFLO2tCQUFiLFlBQUs7WUFDRyxRQUFRO2tCQUFoQixZQUFLO1lBQ0csYUFBYTtrQkFBckIsWUFBSztZQUNHLFFBQVE7a0JBQWhCLFlBQUs7WUFDRyxJQUFJO2tCQUFaLFlBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JEYXRlU3RydWN0IH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgVGltZVV0aWxzU2VydmljZSwgSW50ZXJwb2xhdGlvblNlcnZpY2UgfSBmcm9tICdtYXAtd2FsZCc7XG5cbmNvbnN0IE1JTExJU0VDT05EU19QRVJfREFZPTI0KjYwKjYwKjEwMDA7XG5cbmRlY2xhcmUgdmFyIFBsb3RseTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlLXNlbGVjdGlvbicsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImRhdGUtY29udHJvbCBjb250YWluZXItZmx1aWRcIj5cbiAgPGRpdiAqbmdJZj1cInN0eWxlIT09J2Fycm93cydcIiBjbGFzcz1cInJvdyBuby1ndXR0ZXJzXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC0xMiBmb3JtLWdyb3VwLWlubGluZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc21cIj5cbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwic3RlcFwiIGNsYXNzPVwiZHMtYnRuIGlucHV0LWdyb3VwLWFkZG9uXCIgKGNsaWNrKT1cIm1vdmUoLXN0ZXBEYXlzKVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS1sZWZ0XCI+PC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInl5eXktbW0tZGRcIlxuICAgICAgICAgICAgICAgICBuYW1lPVwiZHBcIlxuICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cImRhdGVTdHJ1Y3RcIlxuICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJkYXRlU3RydWN0Q2hhbmdlZCgpXCJcbiAgICAgICAgICAgICAgICAgbmdiRGF0ZXBpY2tlclxuICAgICAgICAgICAgICAgICAjZD1cIm5nYkRhdGVwaWNrZXJcIlxuICAgICAgICAgICAgICAgICBbbWF4RGF0ZV09XCJtYXhEYXRlU3RydWN0XCJcbiAgICAgICAgICAgICAgICAgW21pbkRhdGVdPVwibWluRGF0ZVN0cnVjdFwiXG4gICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcy1idG4gaW5wdXQtZ3JvdXAtYWRkb25cIiAoY2xpY2spPVwiZGlzYWJsZWR8fGQudG9nZ2xlKClcIiA+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNhbGVuZGFyXCI+PC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgKm5nSWY9XCJzdGVwXCIgY2xhc3M9XCJkcy1idG4gaW5wdXQtZ3JvdXAtYWRkb25cIiAoY2xpY2spPVwibW92ZShzdGVwRGF5cylcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtcmlnaHRcIj48L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICA8IS0tXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTJcIiA+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc21cIiBbZGlzYWJsZWRdPVwiYXRNYXhcIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJtb3ZlKDEpXCI+PGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgLS0+XG4gIDwvZGl2PlxuXG4gIDxkaXYgKm5nSWY9XCJzdHlsZT09PSdhcnJvd3MnXCI+XG4gICAgPGRhdGUtZWxlbWVudCAqbmdJZj1cIm5lZWQuZGF5XCIgICBbc3JjXT1cImRhdGVTdHJ1Y3RcIiBbcHJvcGVydHldPVwiJ2RheSdcIiBbbGFiZWxdPVwiJ0RheSdcIlxuICAgICAgICAgICAgICAgICAgW3N0ZXBdPVwic3RlcERheXNcIlxuICAgICAgICAgICAgICAgICAgKGNoYW5nZWQpPVwiZGF0ZVN0cnVjdENoYW5nZWQoKVwiXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj48L2RhdGUtZWxlbWVudD5cbiAgICA8ZGF0ZS1lbGVtZW50ICpuZ0lmPVwibmVlZC5tb250aFwiIFtzcmNdPVwiZGF0ZVN0cnVjdFwiIFtwcm9wZXJ0eV09XCInbW9udGgnXCIgW2xhYmVsXT1cIidNb250aCdcIlxuICAgICAgICAgICAgICAgICAgKGNoYW5nZWQpPVwiZGF0ZVN0cnVjdENoYW5nZWQoKVwiXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj48L2RhdGUtZWxlbWVudD5cbiAgICA8ZGF0ZS1lbGVtZW50ICpuZ0lmPVwibmVlZC55ZWFyXCIgIFtzcmNdPVwiZGF0ZVN0cnVjdFwiIFtwcm9wZXJ0eV09XCIneWVhcidcIiBbbGFiZWxdPVwiJ1llYXInXCJcbiAgICAgICAgICAgICAgICAgIChjaGFuZ2VkKT1cImRhdGVTdHJ1Y3RDaGFuZ2VkKClcIlxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+PC9kYXRlLWVsZW1lbnQ+XG4gIDwvZGl2PlxuPC9kaXY+XG5gLHN0eWxlczogW1xuICBgXG4gIC5kcy1idG4ge1xuICAgIG1pbi13aWR0aDoxMHB4O1xuICB9XG4gIGBcbl19KVxuZXhwb3J0IGNsYXNzIERhdGVTZWxlY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0ICB7XG4gIEBJbnB1dCgpIGRhdGU6IERhdGU7XG4gIEBPdXRwdXQoKSBkYXRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSB0aW1lc3RlcDogc3RyaW5nO1xuICBASW5wdXQoKSBtaW5EYXRlOiBEYXRlfHN0cmluZztcbiAgQElucHV0KCkgbWF4RGF0ZTogRGF0ZXxzdHJpbmc7XG4gIEBJbnB1dCgpIHN0eWxlOiAoJ3BvcHVwJ3wnYXJyb3dzJykgPSAnYXJyb3dzJztcbiAgQElucHV0KCkgc3RlcERheXMgPSAxO1xuICBASW5wdXQoKSByZWZlcmVuY2VEYXRlOnN0cmluZyA9IG51bGw7XG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIHN0ZXAgPSBmYWxzZTtcblxuICBuZWVkID0ge1xuICAgIGRheTp0cnVlLFxuICAgIG1vbnRoOnRydWUsXG4gICAgeWVhcjp0cnVlXG4gIH07XG5cbiAgbWluRGF0ZVN0cnVjdDpOZ2JEYXRlU3RydWN0O1xuICBtYXhEYXRlU3RydWN0Ok5nYkRhdGVTdHJ1Y3Q7XG4gIGRhdGVTdHJ1Y3Q6TmdiRGF0ZVN0cnVjdDtcblxuICBhdE1heDpib29sZWFuPWZhbHNlO1xuICBhdE1pbjpib29sZWFuPWZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGltZVV0aWxzOiBUaW1lVXRpbHNTZXJ2aWNlKXtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG5cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6YW55KXtcbiAgICBpZihjaGFuZ2VzLm1pbkRhdGUpe1xuICAgICAgdGhpcy5taW5EYXRlU3RydWN0ID0gdGhpcy50aW1lVXRpbHMuY29udmVydERhdGUodGhpcy5taW5EYXRlKTtcbiAgICB9XG5cbiAgICBpZihjaGFuZ2VzLm1heERhdGUpe1xuICAgICAgdGhpcy5tYXhEYXRlU3RydWN0ID0gdGhpcy50aW1lVXRpbHMuY29udmVydERhdGUodGhpcy5tYXhEYXRlKTtcbiAgICB9XG5cbiAgICBpZihjaGFuZ2VzLmRhdGUpe1xuICAgICAgdGhpcy5kYXRlU3RydWN0ID0gdGhpcy50aW1lVXRpbHMuY29udmVydERhdGUodGhpcy5kYXRlKTtcbiAgICB9XG5cbiAgICBpZihjaGFuZ2VzLnRpbWVzdGVwKXtcbiAgICAgIHRoaXMuYXNzZXNzRGF0ZUNvbXBvbmVudHMoKTtcbiAgICB9XG4gICAgdGhpcy5jaGVja0xpbWl0cygpO1xuICB9XG5cbiAgZGF0ZVN0cnVjdENoYW5nZWQoKXtcbiAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyh0aGlzLmRhdGVTdHJ1Y3QueWVhcix0aGlzLmRhdGVTdHJ1Y3QubW9udGgtMSx0aGlzLmRhdGVTdHJ1Y3QuZGF5KSk7XG4gICAgLy8gdGhpcy5kYXRlLnNldFVUQ0Z1bGxZZWFyKHRoaXMuZGF0ZVN0cnVjdC55ZWFyKVxuICAgIC8vIHRoaXMuZGF0ZS5zZXRVVENNb250aCh0aGlzLmRhdGVTdHJ1Y3QubW9udGgtMSlcbiAgICAvLyB0aGlzLmRhdGUuc2V0VVRDRGF0ZSh0aGlzLmRhdGVTdHJ1Y3QuZGF5KTtcbiAgICB0aGlzLmNoZWNrUmVmZXJlbmNlKCk7XG4gICAgdGhpcy5kYXRlQ2hhbmdlLmVtaXQodGhpcy5kYXRlKTtcbiAgfVxuXG4gIGFzc2Vzc0RhdGVDb21wb25lbnRzKCl7XG4gICAgdGhpcy5uZWVkLmRheSA9IHRoaXMubmVlZC5tb250aCA9IHRoaXMubmVlZC55ZWFyID0gdHJ1ZTtcbiAgICBpZih0aGlzLnRpbWVzdGVwPT09J2RhaWx5Jyl7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubmVlZC5kYXkgPSBmYWxzZTtcblxuICAgIGlmKHRoaXMudGltZXN0ZXA9PT0nYW5udWFsJykge1xuICAgICAgdGhpcy5uZWVkLm1vbnRoID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgbW92ZShuOm51bWJlcil7XG4gICAgdGhpcy5kYXRlID0gbmV3IERhdGUodGhpcy5kYXRlJiZ0aGlzLmRhdGUuZ2V0VGltZSgpKTtcbiAgICB0aGlzLmRhdGUuc2V0RGF0ZSh0aGlzLmRhdGUuZ2V0RGF0ZSgpK24pO1xuICAgIHRoaXMub25EYXRlQ2hhbmdlZCgpO1xuICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KHRoaXMuZGF0ZSk7XG4gIH1cblxuICBvbkRhdGVDaGFuZ2VkKCl7XG4gICAgdGhpcy5jaGVja0xpbWl0cygpO1xuICB9XG5cbiAgY2hlY2tMaW1pdHMoKXtcbiAgICB0aGlzLmF0TWF4ID0gdGhpcy50aW1lVXRpbHMuZGF0ZXNFcXVhbCh0aGlzLmRhdGVTdHJ1Y3QsdGhpcy5tYXhEYXRlU3RydWN0KTtcbiAgICB0aGlzLmF0TWluID0gdGhpcy50aW1lVXRpbHMuZGF0ZXNFcXVhbCh0aGlzLmRhdGVTdHJ1Y3QsdGhpcy5taW5EYXRlU3RydWN0KTtcbiAgfVxuICAvLyBUT0RPIG5vdCBlbmZvcmNpbmcgbGltaXRzIGV0Yy4uLlxuXG4gIGNoZWNrUmVmZXJlbmNlKCk6IGFueSB7XG4gICAgaWYoIXRoaXMucmVmZXJlbmNlRGF0ZSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHJlZkNvbXBvbmVudHMgPSBJbnRlcnBvbGF0aW9uU2VydmljZS5pbnRlcnBvbGF0ZSh0aGlzLnJlZmVyZW5jZURhdGUse1xuICAgICAgeWVhcjp0aGlzLmRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIG1vbnRoOnRoaXMuZGF0ZS5nZXRNb250aCgpKzEsXG4gICAgICBkYXRlOnRoaXMuZGF0ZS5nZXREYXRlKClcbiAgICB9KS5zcGxpdCgnLScpLm1hcChzPT4rcyk7XG5cbiAgICBsZXQgY3VycmVudFJlZiA9IG5ldyBEYXRlKERhdGUuVVRDKHJlZkNvbXBvbmVudHNbMF0scmVmQ29tcG9uZW50c1sxXS0xLHJlZkNvbXBvbmVudHNbMl0pKTtcblxuICAgIGNvbnNvbGUubG9nKCdjdXJyZW50UmVmJyxjdXJyZW50UmVmKTtcbiAgICBjb25zb2xlLmxvZygnY3VycmVudERhdGUnLHRoaXMuZGF0ZSk7XG4gICAgbGV0IHRpbWVTcGFuID0gTUlMTElTRUNPTkRTX1BFUl9EQVkgKiB0aGlzLnN0ZXBEYXlzO1xuXG4gICAgbGV0IGRheXMgPSAodGhpcy5kYXRlLmdldFRpbWUoKSAtIGN1cnJlbnRSZWYuZ2V0VGltZSgpKS90aW1lU3BhbjtcbiAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZShjdXJyZW50UmVmLmdldFRpbWUoKSArIE1hdGgucm91bmQoZGF5cykqdGltZVNwYW4pO1xuICAgIHRoaXMuZGF0ZVN0cnVjdCA9IHRoaXMudGltZVV0aWxzLmNvbnZlcnREYXRlKHRoaXMuZGF0ZSk7XG4gIH1cblxufVxuIl19