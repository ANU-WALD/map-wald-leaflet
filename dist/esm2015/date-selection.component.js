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
function DateSelectionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵelementStart(2, "div", 5);
    i0.ɵɵelementStart(3, "input", 6, 7);
    i0.ɵɵlistener("ngModelChange", function DateSelectionComponent_div_1_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.dateStruct = $event; })("ngModelChange", function DateSelectionComponent_div_1_Template_input_ngModelChange_3_listener() { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.dateStructChanged(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 8);
    i0.ɵɵlistener("click", function DateSelectionComponent_div_1_Template_div_click_5_listener() { i0.ɵɵrestoreView(_r4); const _r2 = i0.ɵɵreference(4); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.disabled || _r2.toggle(); });
    i0.ɵɵelement(6, "i", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r0.dateStruct)("maxDate", ctx_r0.maxDateStruct)("minDate", ctx_r0.minDateStruct)("disabled", ctx_r0.disabled);
} }
function DateSelectionComponent_div_2_date_element_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "date-element", 12);
    i0.ɵɵlistener("changed", function DateSelectionComponent_div_2_date_element_1_Template_date_element_changed_0_listener() { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.dateStructChanged(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r7.dateStruct)("property", "day")("label", "Day")("step", ctx_r7.stepDays)("disabled", ctx_r7.disabled);
} }
function DateSelectionComponent_div_2_date_element_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "date-element", 13);
    i0.ɵɵlistener("changed", function DateSelectionComponent_div_2_date_element_2_Template_date_element_changed_0_listener() { i0.ɵɵrestoreView(_r13); const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.dateStructChanged(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r8.dateStruct)("property", "month")("label", "Month")("disabled", ctx_r8.disabled);
} }
function DateSelectionComponent_div_2_date_element_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "date-element", 13);
    i0.ɵɵlistener("changed", function DateSelectionComponent_div_2_date_element_3_Template_date_element_changed_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.dateStructChanged(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r9.dateStruct)("property", "year")("label", "Year")("disabled", ctx_r9.disabled);
} }
function DateSelectionComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, DateSelectionComponent_div_2_date_element_1_Template, 1, 5, "date-element", 10);
    i0.ɵɵtemplate(2, DateSelectionComponent_div_2_date_element_2_Template, 1, 4, "date-element", 11);
    i0.ɵɵtemplate(3, DateSelectionComponent_div_2_date_element_3_Template, 1, 4, "date-element", 11);
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
DateSelectionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: DateSelectionComponent, selectors: [["date-selection"]], inputs: { date: "date", timestep: "timestep", minDate: "minDate", maxDate: "maxDate", style: "style", stepDays: "stepDays", referenceDate: "referenceDate", disabled: "disabled" }, outputs: { dateChange: "dateChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 2, consts: [[1, "date-control", "container-fluid"], ["class", "row no-gutters", 4, "ngIf"], [4, "ngIf"], [1, "row", "no-gutters"], [1, "col-8", "form-group-inline"], [1, "input-group", "input-group-sm"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", 1, "form-control", "form-control-sm", 3, "ngModel", "maxDate", "minDate", "disabled", "ngModelChange"], ["d", "ngbDatepicker"], [1, "input-group-addon", 3, "click"], [1, "fa", "fa-calendar"], [3, "src", "property", "label", "step", "disabled", "changed", 4, "ngIf"], [3, "src", "property", "label", "disabled", "changed", 4, "ngIf"], [3, "src", "property", "label", "step", "disabled", "changed"], [3, "src", "property", "label", "disabled", "changed"]], template: function DateSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, DateSelectionComponent_div_1_Template, 7, 4, "div", 1);
        i0.ɵɵtemplate(2, DateSelectionComponent_div_2_Template, 4, 3, "div", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.style !== "arrows");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.style === "arrows");
    } }, directives: [i2.NgIf, i3.NgbInputDatepicker, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i5.DateElementComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateSelectionComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'date-selection',
                template: `<div class="date-control container-fluid">
  <div *ngIf="style!=='arrows'" class="row no-gutters">
    <div class="col-8 form-group-inline">
        <div class="input-group input-group-sm">
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
          <div class="input-group-addon" (click)="disabled||d.toggle()" >
            <i class="fa fa-calendar"></i>
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
`, styles: []
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1zZWxlY3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtbGVhZmxldC8iLCJzb3VyY2VzIjpbImRhdGUtc2VsZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBNkc7QUFFN0csdUNBQWtFOzs7Ozs7Ozs7SUFTaEUsOEJBQ0U7SUFBQSw4QkFDSTtJQUFBLDhCQUNFO0lBQUEsbUNBVUE7SUFQTyxzTkFBd0IsbU1BQUE7SUFIL0IsaUJBVUE7SUFBQSw4QkFDRTtJQUQ2QixrTkFBbUIsWUFBVSxJQUFDO0lBQzNELHVCQUE4QjtJQUNoQyxpQkFBTTtJQUNSLGlCQUFNO0lBQ1IsaUJBQU07SUFRVixpQkFBTTs7O0lBbkJTLGVBQXdCO0lBQXhCLDJDQUF3QixpQ0FBQSxpQ0FBQSw2QkFBQTs7OztJQXNCckMsd0NBR29DO0lBRHRCLDhOQUErQjtJQUNULGlCQUFlOzs7SUFIbEIsdUNBQWtCLG1CQUFBLGdCQUFBLHlCQUFBLDZCQUFBOzs7O0lBSW5ELHdDQUVvQztJQUR0Qiw4TkFBK0I7SUFDVCxpQkFBZTs7O0lBRmxCLHVDQUFrQixxQkFBQSxrQkFBQSw2QkFBQTs7OztJQUduRCx3Q0FFb0M7SUFEdEIsOE5BQStCO0lBQ1QsaUJBQWU7OztJQUZsQix1Q0FBa0Isb0JBQUEsaUJBQUEsNkJBQUE7OztJQVJyRCwyQkFDRTtJQUFBLGdHQUdtRDtJQUNuRCxnR0FFbUQ7SUFDbkQsZ0dBRW1EO0lBQ3JELGlCQUFNOzs7SUFWVyxlQUFjO0lBQWQsc0NBQWM7SUFJZCxlQUFnQjtJQUFoQix3Q0FBZ0I7SUFHaEIsZUFBZTtJQUFmLHVDQUFlOztBQTFDbEMsTUFBTSxvQkFBb0IsR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxJQUFJLENBQUM7QUFJekMsTUE0Q2Esc0JBQXNCO0lBd0JqQyxZQUFvQixTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQXRCckMsZUFB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QztRQUVwRCxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEdBQUcsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUMsUUFBUSxDQUFDO1FBQ2pFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUMsUUFBUSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7QUF6Skgsd0RBMkpDOzRGQS9HWSxzQkFBc0I7MkRBQXRCLHNCQUFzQjtRQTFDdEIsOEJBQ1g7UUFBQSx1RUF5Qk07UUFFTix1RUFXTTtRQUNSLGlCQUFNOztRQXZDRSxlQUFzQjtRQUF0Qiw2Q0FBc0I7UUEyQnRCLGVBQXNCO1FBQXRCLDZDQUFzQjs7a0RBY2pCLHNCQUFzQjtjQTVDbEMsZ0JBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBeUNYLEVBQUMsTUFBTSxFQUFFLEVBQUU7YUFBQzttRUFFRixJQUFJO2tCQUFaLFlBQUs7WUFDSSxVQUFVO2tCQUFuQixhQUFNO1lBQ0UsUUFBUTtrQkFBaEIsWUFBSztZQUNHLE9BQU87a0JBQWYsWUFBSztZQUNHLE9BQU87a0JBQWYsWUFBSztZQUNHLEtBQUs7a0JBQWIsWUFBSztZQUNHLFFBQVE7a0JBQWhCLFlBQUs7WUFDRyxhQUFhO2tCQUFyQixZQUFLO1lBQ0csUUFBUTtrQkFBaEIsWUFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYkRhdGVTdHJ1Y3QgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBUaW1lVXRpbHNTZXJ2aWNlLCBJbnRlcnBvbGF0aW9uU2VydmljZSB9IGZyb20gJ21hcC13YWxkJztcblxuY29uc3QgTUlMTElTRUNPTkRTX1BFUl9EQVk9MjQqNjAqNjAqMTAwMDtcblxuZGVjbGFyZSB2YXIgUGxvdGx5OiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGUtc2VsZWN0aW9uJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwiZGF0ZS1jb250cm9sIGNvbnRhaW5lci1mbHVpZFwiPlxuICA8ZGl2ICpuZ0lmPVwic3R5bGUhPT0nYXJyb3dzJ1wiIGNsYXNzPVwicm93IG5vLWd1dHRlcnNcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLTggZm9ybS1ncm91cC1pbmxpbmVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIGlucHV0LWdyb3VwLXNtXCI+XG4gICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbVwiXG4gICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwieXl5eS1tbS1kZFwiXG4gICAgICAgICAgICAgICAgIG5hbWU9XCJkcFwiXG4gICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiZGF0ZVN0cnVjdFwiXG4gICAgICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cImRhdGVTdHJ1Y3RDaGFuZ2VkKClcIlxuICAgICAgICAgICAgICAgICBuZ2JEYXRlcGlja2VyXG4gICAgICAgICAgICAgICAgICNkPVwibmdiRGF0ZXBpY2tlclwiXG4gICAgICAgICAgICAgICAgIFttYXhEYXRlXT1cIm1heERhdGVTdHJ1Y3RcIlxuICAgICAgICAgICAgICAgICBbbWluRGF0ZV09XCJtaW5EYXRlU3RydWN0XCJcbiAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCIgKGNsaWNrKT1cImRpc2FibGVkfHxkLnRvZ2dsZSgpXCIgPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jYWxlbmRhclwiPjwvaT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgIDwhLS1cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMlwiID5cbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbVwiIFtkaXNhYmxlZF09XCJhdE1heFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm1vdmUoMSlcIj48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAtLT5cbiAgPC9kaXY+XG5cbiAgPGRpdiAqbmdJZj1cInN0eWxlPT09J2Fycm93cydcIj5cbiAgICA8ZGF0ZS1lbGVtZW50ICpuZ0lmPVwibmVlZC5kYXlcIiAgIFtzcmNdPVwiZGF0ZVN0cnVjdFwiIFtwcm9wZXJ0eV09XCInZGF5J1wiIFtsYWJlbF09XCInRGF5J1wiXG4gICAgICAgICAgICAgICAgICBbc3RlcF09XCJzdGVwRGF5c1wiXG4gICAgICAgICAgICAgICAgICAoY2hhbmdlZCk9XCJkYXRlU3RydWN0Q2hhbmdlZCgpXCJcbiAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPjwvZGF0ZS1lbGVtZW50PlxuICAgIDxkYXRlLWVsZW1lbnQgKm5nSWY9XCJuZWVkLm1vbnRoXCIgW3NyY109XCJkYXRlU3RydWN0XCIgW3Byb3BlcnR5XT1cIidtb250aCdcIiBbbGFiZWxdPVwiJ01vbnRoJ1wiXG4gICAgICAgICAgICAgICAgICAoY2hhbmdlZCk9XCJkYXRlU3RydWN0Q2hhbmdlZCgpXCJcbiAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPjwvZGF0ZS1lbGVtZW50PlxuICAgIDxkYXRlLWVsZW1lbnQgKm5nSWY9XCJuZWVkLnllYXJcIiAgW3NyY109XCJkYXRlU3RydWN0XCIgW3Byb3BlcnR5XT1cIid5ZWFyJ1wiIFtsYWJlbF09XCInWWVhcidcIlxuICAgICAgICAgICAgICAgICAgKGNoYW5nZWQpPVwiZGF0ZVN0cnVjdENoYW5nZWQoKVwiXG4gICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj48L2RhdGUtZWxlbWVudD5cbiAgPC9kaXY+XG48L2Rpdj5cbmAsc3R5bGVzOiBbXX0pXG5leHBvcnQgY2xhc3MgRGF0ZVNlbGVjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQgIHtcbiAgQElucHV0KCkgZGF0ZTogRGF0ZTtcbiAgQE91dHB1dCgpIGRhdGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIHRpbWVzdGVwOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1pbkRhdGU6IERhdGV8c3RyaW5nO1xuICBASW5wdXQoKSBtYXhEYXRlOiBEYXRlfHN0cmluZztcbiAgQElucHV0KCkgc3R5bGU6ICgncG9wdXAnfCdhcnJvd3MnKSA9ICdhcnJvd3MnO1xuICBASW5wdXQoKSBzdGVwRGF5cyA9IDE7XG4gIEBJbnB1dCgpIHJlZmVyZW5jZURhdGU6c3RyaW5nID0gbnVsbDtcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBuZWVkID0ge1xuICAgIGRheTp0cnVlLFxuICAgIG1vbnRoOnRydWUsXG4gICAgeWVhcjp0cnVlXG4gIH07XG5cbiAgbWluRGF0ZVN0cnVjdDpOZ2JEYXRlU3RydWN0O1xuICBtYXhEYXRlU3RydWN0Ok5nYkRhdGVTdHJ1Y3Q7XG4gIGRhdGVTdHJ1Y3Q6TmdiRGF0ZVN0cnVjdDtcblxuICBhdE1heDpib29sZWFuPWZhbHNlO1xuICBhdE1pbjpib29sZWFuPWZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdGltZVV0aWxzOiBUaW1lVXRpbHNTZXJ2aWNlKXtcblxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG5cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6YW55KXtcbiAgICBpZihjaGFuZ2VzLm1pbkRhdGUpe1xuICAgICAgdGhpcy5taW5EYXRlU3RydWN0ID0gdGhpcy50aW1lVXRpbHMuY29udmVydERhdGUodGhpcy5taW5EYXRlKTtcbiAgICB9XG5cbiAgICBpZihjaGFuZ2VzLm1heERhdGUpe1xuICAgICAgdGhpcy5tYXhEYXRlU3RydWN0ID0gdGhpcy50aW1lVXRpbHMuY29udmVydERhdGUodGhpcy5tYXhEYXRlKTtcbiAgICB9XG5cbiAgICBpZihjaGFuZ2VzLmRhdGUpe1xuICAgICAgdGhpcy5kYXRlU3RydWN0ID0gdGhpcy50aW1lVXRpbHMuY29udmVydERhdGUodGhpcy5kYXRlKTtcbiAgICB9XG5cbiAgICBpZihjaGFuZ2VzLnRpbWVzdGVwKXtcbiAgICAgIHRoaXMuYXNzZXNzRGF0ZUNvbXBvbmVudHMoKTtcbiAgICB9XG4gICAgdGhpcy5jaGVja0xpbWl0cygpO1xuICB9XG5cbiAgZGF0ZVN0cnVjdENoYW5nZWQoKXtcbiAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyh0aGlzLmRhdGVTdHJ1Y3QueWVhcix0aGlzLmRhdGVTdHJ1Y3QubW9udGgtMSx0aGlzLmRhdGVTdHJ1Y3QuZGF5KSk7XG4gICAgLy8gdGhpcy5kYXRlLnNldFVUQ0Z1bGxZZWFyKHRoaXMuZGF0ZVN0cnVjdC55ZWFyKVxuICAgIC8vIHRoaXMuZGF0ZS5zZXRVVENNb250aCh0aGlzLmRhdGVTdHJ1Y3QubW9udGgtMSlcbiAgICAvLyB0aGlzLmRhdGUuc2V0VVRDRGF0ZSh0aGlzLmRhdGVTdHJ1Y3QuZGF5KTtcbiAgICB0aGlzLmNoZWNrUmVmZXJlbmNlKCk7XG4gICAgdGhpcy5kYXRlQ2hhbmdlLmVtaXQodGhpcy5kYXRlKTtcbiAgfVxuXG4gIGFzc2Vzc0RhdGVDb21wb25lbnRzKCl7XG4gICAgdGhpcy5uZWVkLmRheSA9IHRoaXMubmVlZC5tb250aCA9IHRoaXMubmVlZC55ZWFyID0gdHJ1ZTtcbiAgICBpZih0aGlzLnRpbWVzdGVwPT09J2RhaWx5Jyl7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubmVlZC5kYXkgPSBmYWxzZTtcblxuICAgIGlmKHRoaXMudGltZXN0ZXA9PT0nYW5udWFsJykge1xuICAgICAgdGhpcy5uZWVkLm1vbnRoID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgbW92ZShuOm51bWJlcil7XG4gICAgdGhpcy5kYXRlID0gbmV3IERhdGUodGhpcy5kYXRlJiZ0aGlzLmRhdGUuZ2V0VGltZSgpKTtcbiAgICB0aGlzLmRhdGUuc2V0RGF0ZSh0aGlzLmRhdGUuZ2V0RGF0ZSgpK24pO1xuICAgIHRoaXMub25EYXRlQ2hhbmdlZCgpO1xuICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KHRoaXMuZGF0ZSk7XG4gIH1cblxuICBvbkRhdGVDaGFuZ2VkKCl7XG4gICAgdGhpcy5jaGVja0xpbWl0cygpO1xuICB9XG5cbiAgY2hlY2tMaW1pdHMoKXtcbiAgICB0aGlzLmF0TWF4ID0gdGhpcy50aW1lVXRpbHMuZGF0ZXNFcXVhbCh0aGlzLmRhdGVTdHJ1Y3QsdGhpcy5tYXhEYXRlU3RydWN0KTtcbiAgICB0aGlzLmF0TWluID0gdGhpcy50aW1lVXRpbHMuZGF0ZXNFcXVhbCh0aGlzLmRhdGVTdHJ1Y3QsdGhpcy5taW5EYXRlU3RydWN0KTtcbiAgfVxuICAvLyBUT0RPIG5vdCBlbmZvcmNpbmcgbGltaXRzIGV0Yy4uLlxuXG4gIGNoZWNrUmVmZXJlbmNlKCk6IGFueSB7XG4gICAgaWYoIXRoaXMucmVmZXJlbmNlRGF0ZSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHJlZkNvbXBvbmVudHMgPSBJbnRlcnBvbGF0aW9uU2VydmljZS5pbnRlcnBvbGF0ZSh0aGlzLnJlZmVyZW5jZURhdGUse1xuICAgICAgeWVhcjp0aGlzLmRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgIG1vbnRoOnRoaXMuZGF0ZS5nZXRNb250aCgpKzEsXG4gICAgICBkYXRlOnRoaXMuZGF0ZS5nZXREYXRlKClcbiAgICB9KS5zcGxpdCgnLScpLm1hcChzPT4rcyk7XG5cbiAgICBsZXQgY3VycmVudFJlZiA9IG5ldyBEYXRlKERhdGUuVVRDKHJlZkNvbXBvbmVudHNbMF0scmVmQ29tcG9uZW50c1sxXS0xLHJlZkNvbXBvbmVudHNbMl0pKTtcblxuICAgIGNvbnNvbGUubG9nKCdjdXJyZW50UmVmJyxjdXJyZW50UmVmKTtcbiAgICBjb25zb2xlLmxvZygnY3VycmVudERhdGUnLHRoaXMuZGF0ZSk7XG4gICAgbGV0IHRpbWVTcGFuID0gTUlMTElTRUNPTkRTX1BFUl9EQVkgKiB0aGlzLnN0ZXBEYXlzO1xuXG4gICAgbGV0IGRheXMgPSAodGhpcy5kYXRlLmdldFRpbWUoKSAtIGN1cnJlbnRSZWYuZ2V0VGltZSgpKS90aW1lU3BhbjtcbiAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZShjdXJyZW50UmVmLmdldFRpbWUoKSArIE1hdGgucm91bmQoZGF5cykqdGltZVNwYW4pO1xuICAgIHRoaXMuZGF0ZVN0cnVjdCA9IHRoaXMudGltZVV0aWxzLmNvbnZlcnREYXRlKHRoaXMuZGF0ZSk7XG4gIH1cblxufVxuIl19