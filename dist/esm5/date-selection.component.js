"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateSelectionComponent = void 0;
var core_1 = require("@angular/core");
var map_wald_1 = require("map-wald");
var i0 = require("@angular/core");
var i1 = require("map-wald");
var i2 = require("@angular/common");
var i3 = require("@ng-bootstrap/ng-bootstrap");
var i4 = require("@angular/forms");
var i5 = require("./date-element.component");
function DateSelectionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵelementStart(2, "div", 5);
    i0.ɵɵelementStart(3, "input", 6, 7);
    i0.ɵɵlistener("ngModelChange", function DateSelectionComponent_div_1_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r4); var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.dateStruct = $event; })("ngModelChange", function DateSelectionComponent_div_1_Template_input_ngModelChange_3_listener() { i0.ɵɵrestoreView(_r4); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.dateStructChanged(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 8);
    i0.ɵɵlistener("click", function DateSelectionComponent_div_1_Template_div_click_5_listener() { i0.ɵɵrestoreView(_r4); var _r2 = i0.ɵɵreference(4); var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.disabled || _r2.toggle(); });
    i0.ɵɵelement(6, "i", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", ctx_r0.dateStruct)("maxDate", ctx_r0.maxDateStruct)("minDate", ctx_r0.minDateStruct)("disabled", ctx_r0.disabled);
} }
function DateSelectionComponent_div_2_date_element_1_Template(rf, ctx) { if (rf & 1) {
    var _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "date-element", 12);
    i0.ɵɵlistener("changed", function DateSelectionComponent_div_2_date_element_1_Template_date_element_changed_0_listener() { i0.ɵɵrestoreView(_r11); var ctx_r10 = i0.ɵɵnextContext(2); return ctx_r10.dateStructChanged(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r7.dateStruct)("property", "day")("label", "Day")("step", ctx_r7.stepDays)("disabled", ctx_r7.disabled);
} }
function DateSelectionComponent_div_2_date_element_2_Template(rf, ctx) { if (rf & 1) {
    var _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "date-element", 13);
    i0.ɵɵlistener("changed", function DateSelectionComponent_div_2_date_element_2_Template_date_element_changed_0_listener() { i0.ɵɵrestoreView(_r13); var ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.dateStructChanged(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r8.dateStruct)("property", "month")("label", "Month")("disabled", ctx_r8.disabled);
} }
function DateSelectionComponent_div_2_date_element_3_Template(rf, ctx) { if (rf & 1) {
    var _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "date-element", 13);
    i0.ɵɵlistener("changed", function DateSelectionComponent_div_2_date_element_3_Template_date_element_changed_0_listener() { i0.ɵɵrestoreView(_r15); var ctx_r14 = i0.ɵɵnextContext(2); return ctx_r14.dateStructChanged(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r9.dateStruct)("property", "year")("label", "Year")("disabled", ctx_r9.disabled);
} }
function DateSelectionComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, DateSelectionComponent_div_2_date_element_1_Template, 1, 5, "date-element", 10);
    i0.ɵɵtemplate(2, DateSelectionComponent_div_2_date_element_2_Template, 1, 4, "date-element", 11);
    i0.ɵɵtemplate(3, DateSelectionComponent_div_2_date_element_3_Template, 1, 4, "date-element", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.need.day);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.need.month);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.need.year);
} }
var MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;
var DateSelectionComponent = /** @class */ (function () {
    function DateSelectionComponent(timeUtils) {
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
    DateSelectionComponent.prototype.ngAfterViewInit = function () {
    };
    DateSelectionComponent.prototype.ngOnChanges = function (changes) {
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
    };
    DateSelectionComponent.prototype.dateStructChanged = function () {
        this.date = new Date(Date.UTC(this.dateStruct.year, this.dateStruct.month - 1, this.dateStruct.day));
        // this.date.setUTCFullYear(this.dateStruct.year)
        // this.date.setUTCMonth(this.dateStruct.month-1)
        // this.date.setUTCDate(this.dateStruct.day);
        this.checkReference();
        this.dateChange.emit(this.date);
    };
    DateSelectionComponent.prototype.assessDateComponents = function () {
        this.need.day = this.need.month = this.need.year = true;
        if (this.timestep === 'daily') {
            return;
        }
        this.need.day = false;
        if (this.timestep === 'annual') {
            this.need.month = false;
        }
    };
    DateSelectionComponent.prototype.move = function (n) {
        this.date = new Date(this.date && this.date.getTime());
        this.date.setDate(this.date.getDate() + n);
        this.onDateChanged();
        this.dateChange.emit(this.date);
    };
    DateSelectionComponent.prototype.onDateChanged = function () {
        this.checkLimits();
    };
    DateSelectionComponent.prototype.checkLimits = function () {
        this.atMax = this.timeUtils.datesEqual(this.dateStruct, this.maxDateStruct);
        this.atMin = this.timeUtils.datesEqual(this.dateStruct, this.minDateStruct);
    };
    // TODO not enforcing limits etc...
    DateSelectionComponent.prototype.checkReference = function () {
        if (!this.referenceDate) {
            return;
        }
        var refComponents = map_wald_1.InterpolationService.interpolate(this.referenceDate, {
            year: this.date.getFullYear(),
            month: this.date.getMonth() + 1,
            date: this.date.getDate()
        }).split('-').map(function (s) { return +s; });
        var currentRef = new Date(Date.UTC(refComponents[0], refComponents[1] - 1, refComponents[2]));
        console.log('currentRef', currentRef);
        console.log('currentDate', this.date);
        var timeSpan = MILLISECONDS_PER_DAY * this.stepDays;
        var days = (this.date.getTime() - currentRef.getTime()) / timeSpan;
        this.date = new Date(currentRef.getTime() + Math.round(days) * timeSpan);
        this.dateStruct = this.timeUtils.convertDate(this.date);
    };
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
    return DateSelectionComponent;
}());
exports.DateSelectionComponent = DateSelectionComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateSelectionComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'date-selection',
                template: "<div class=\"date-control container-fluid\">\n  <div *ngIf=\"style!=='arrows'\" class=\"row no-gutters\">\n    <div class=\"col-8 form-group-inline\">\n        <div class=\"input-group input-group-sm\">\n          <input class=\"form-control form-control-sm\"\n                 placeholder=\"yyyy-mm-dd\"\n                 name=\"dp\"\n                 [(ngModel)]=\"dateStruct\"\n                 (ngModelChange)=\"dateStructChanged()\"\n                 ngbDatepicker\n                 #d=\"ngbDatepicker\"\n                 [maxDate]=\"maxDateStruct\"\n                 [minDate]=\"minDateStruct\"\n                 [disabled]=\"disabled\">\n          <div class=\"input-group-addon\" (click)=\"disabled||d.toggle()\" >\n            <i class=\"fa fa-calendar\"></i>\n          </div>\n        </div>\n      </div>\n\n    <!--\n      <div class=\"col-2\" >\n        <button class=\"btn btn-secondary btn-sm\" [disabled]=\"atMax\"\n                (click)=\"move(1)\"><i class=\"fa fa-chevron-right\"></i></button>\n      </div>\n    -->\n  </div>\n\n  <div *ngIf=\"style==='arrows'\">\n    <date-element *ngIf=\"need.day\"   [src]=\"dateStruct\" [property]=\"'day'\" [label]=\"'Day'\"\n                  [step]=\"stepDays\"\n                  (changed)=\"dateStructChanged()\"\n                  [disabled]=\"disabled\"></date-element>\n    <date-element *ngIf=\"need.month\" [src]=\"dateStruct\" [property]=\"'month'\" [label]=\"'Month'\"\n                  (changed)=\"dateStructChanged()\"\n                  [disabled]=\"disabled\"></date-element>\n    <date-element *ngIf=\"need.year\"  [src]=\"dateStruct\" [property]=\"'year'\" [label]=\"'Year'\"\n                  (changed)=\"dateStructChanged()\"\n                  [disabled]=\"disabled\"></date-element>\n  </div>\n</div>\n",
                styles: []
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1zZWxlY3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtbGVhZmxldC8iLCJzb3VyY2VzIjpbImRhdGUtc2VsZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBNkc7QUFFN0cscUNBQWtFOzs7Ozs7Ozs7SUFTaEUsOEJBQ0U7SUFBQSw4QkFDSTtJQUFBLDhCQUNFO0lBQUEsbUNBVUE7SUFQTyxvTkFBd0IsaU1BQUE7SUFIL0IsaUJBVUE7SUFBQSw4QkFDRTtJQUQ2Qiw4TUFBbUIsWUFBVSxJQUFDO0lBQzNELHVCQUE4QjtJQUNoQyxpQkFBTTtJQUNSLGlCQUFNO0lBQ1IsaUJBQU07SUFRVixpQkFBTTs7O0lBbkJTLGVBQXdCO0lBQXhCLDJDQUF3QixpQ0FBQSxpQ0FBQSw2QkFBQTs7OztJQXNCckMsd0NBR29DO0lBRHRCLDROQUErQjtJQUNULGlCQUFlOzs7SUFIbEIsdUNBQWtCLG1CQUFBLGdCQUFBLHlCQUFBLDZCQUFBOzs7O0lBSW5ELHdDQUVvQztJQUR0Qiw0TkFBK0I7SUFDVCxpQkFBZTs7O0lBRmxCLHVDQUFrQixxQkFBQSxrQkFBQSw2QkFBQTs7OztJQUduRCx3Q0FFb0M7SUFEdEIsNE5BQStCO0lBQ1QsaUJBQWU7OztJQUZsQix1Q0FBa0Isb0JBQUEsaUJBQUEsNkJBQUE7OztJQVJyRCwyQkFDRTtJQUFBLGdHQUdtRDtJQUNuRCxnR0FFbUQ7SUFDbkQsZ0dBRW1EO0lBQ3JELGlCQUFNOzs7SUFWVyxlQUFjO0lBQWQsc0NBQWM7SUFJZCxlQUFnQjtJQUFoQix3Q0FBZ0I7SUFHaEIsZUFBZTtJQUFmLHVDQUFlOztBQTFDbEMsSUFBTSxvQkFBb0IsR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLEVBQUUsR0FBQyxJQUFJLENBQUM7QUFJekM7SUFvRUUsZ0NBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBdEJyQyxlQUFVLEdBQUcsSUFBSSxt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QUFJLFFBQVEsR0FBRyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRXBELElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsR0FBQyxRQUFRLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxRCxDQUFDO2dHQTdHVSxzQkFBc0I7K0RBQXRCLHNCQUFzQjtZQTFDdEIsOEJBQ1g7WUFBQSx1RUF5Qk07WUFFTix1RUFXTTtZQUNSLGlCQUFNOztZQXZDRSxlQUFzQjtZQUF0Qiw2Q0FBc0I7WUEyQnRCLGVBQXNCO1lBQXRCLDZDQUFzQjs7aUNBdEM5QjtDQW1LQyxBQTNKRCxJQTJKQztBQS9HWSx3REFBc0I7a0RBQXRCLHNCQUFzQjtjQTVDbEMsZ0JBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsNnZEQXlDWDtnQkFBQyxNQUFNLEVBQUUsRUFBRTthQUFDO21FQUVGLElBQUk7a0JBQVosWUFBSztZQUNJLFVBQVU7a0JBQW5CLGFBQU07WUFDRSxRQUFRO2tCQUFoQixZQUFLO1lBQ0csT0FBTztrQkFBZixZQUFLO1lBQ0csT0FBTztrQkFBZixZQUFLO1lBQ0csS0FBSztrQkFBYixZQUFLO1lBQ0csUUFBUTtrQkFBaEIsWUFBSztZQUNHLGFBQWE7a0JBQXJCLFlBQUs7WUFDRyxRQUFRO2tCQUFoQixZQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiRGF0ZVN0cnVjdCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IFRpbWVVdGlsc1NlcnZpY2UsIEludGVycG9sYXRpb25TZXJ2aWNlIH0gZnJvbSAnbWFwLXdhbGQnO1xuXG5jb25zdCBNSUxMSVNFQ09ORFNfUEVSX0RBWT0yNCo2MCo2MCoxMDAwO1xuXG5kZWNsYXJlIHZhciBQbG90bHk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZS1zZWxlY3Rpb24nLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJkYXRlLWNvbnRyb2wgY29udGFpbmVyLWZsdWlkXCI+XG4gIDxkaXYgKm5nSWY9XCJzdHlsZSE9PSdhcnJvd3MnXCIgY2xhc3M9XCJyb3cgbm8tZ3V0dGVyc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtOCBmb3JtLWdyb3VwLWlubGluZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc21cIj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ5eXl5LW1tLWRkXCJcbiAgICAgICAgICAgICAgICAgbmFtZT1cImRwXCJcbiAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJkYXRlU3RydWN0XCJcbiAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiZGF0ZVN0cnVjdENoYW5nZWQoKVwiXG4gICAgICAgICAgICAgICAgIG5nYkRhdGVwaWNrZXJcbiAgICAgICAgICAgICAgICAgI2Q9XCJuZ2JEYXRlcGlja2VyXCJcbiAgICAgICAgICAgICAgICAgW21heERhdGVdPVwibWF4RGF0ZVN0cnVjdFwiXG4gICAgICAgICAgICAgICAgIFttaW5EYXRlXT1cIm1pbkRhdGVTdHJ1Y3RcIlxuICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIiAoY2xpY2spPVwiZGlzYWJsZWR8fGQudG9nZ2xlKClcIiA+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWNhbGVuZGFyXCI+PC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPCEtLVxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0yXCIgPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCIgW2Rpc2FibGVkXT1cImF0TWF4XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwibW92ZSgxKVwiPjxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIC0tPlxuICA8L2Rpdj5cblxuICA8ZGl2ICpuZ0lmPVwic3R5bGU9PT0nYXJyb3dzJ1wiPlxuICAgIDxkYXRlLWVsZW1lbnQgKm5nSWY9XCJuZWVkLmRheVwiICAgW3NyY109XCJkYXRlU3RydWN0XCIgW3Byb3BlcnR5XT1cIidkYXknXCIgW2xhYmVsXT1cIidEYXknXCJcbiAgICAgICAgICAgICAgICAgIFtzdGVwXT1cInN0ZXBEYXlzXCJcbiAgICAgICAgICAgICAgICAgIChjaGFuZ2VkKT1cImRhdGVTdHJ1Y3RDaGFuZ2VkKClcIlxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+PC9kYXRlLWVsZW1lbnQ+XG4gICAgPGRhdGUtZWxlbWVudCAqbmdJZj1cIm5lZWQubW9udGhcIiBbc3JjXT1cImRhdGVTdHJ1Y3RcIiBbcHJvcGVydHldPVwiJ21vbnRoJ1wiIFtsYWJlbF09XCInTW9udGgnXCJcbiAgICAgICAgICAgICAgICAgIChjaGFuZ2VkKT1cImRhdGVTdHJ1Y3RDaGFuZ2VkKClcIlxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+PC9kYXRlLWVsZW1lbnQ+XG4gICAgPGRhdGUtZWxlbWVudCAqbmdJZj1cIm5lZWQueWVhclwiICBbc3JjXT1cImRhdGVTdHJ1Y3RcIiBbcHJvcGVydHldPVwiJ3llYXInXCIgW2xhYmVsXT1cIidZZWFyJ1wiXG4gICAgICAgICAgICAgICAgICAoY2hhbmdlZCk9XCJkYXRlU3RydWN0Q2hhbmdlZCgpXCJcbiAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPjwvZGF0ZS1lbGVtZW50PlxuICA8L2Rpdj5cbjwvZGl2PlxuYCxzdHlsZXM6IFtdfSlcbmV4cG9ydCBjbGFzcyBEYXRlU2VsZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCAge1xuICBASW5wdXQoKSBkYXRlOiBEYXRlO1xuICBAT3V0cHV0KCkgZGF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgdGltZXN0ZXA6IHN0cmluZztcbiAgQElucHV0KCkgbWluRGF0ZTogRGF0ZXxzdHJpbmc7XG4gIEBJbnB1dCgpIG1heERhdGU6IERhdGV8c3RyaW5nO1xuICBASW5wdXQoKSBzdHlsZTogKCdwb3B1cCd8J2Fycm93cycpID0gJ2Fycm93cyc7XG4gIEBJbnB1dCgpIHN0ZXBEYXlzID0gMTtcbiAgQElucHV0KCkgcmVmZXJlbmNlRGF0ZTpzdHJpbmcgPSBudWxsO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIG5lZWQgPSB7XG4gICAgZGF5OnRydWUsXG4gICAgbW9udGg6dHJ1ZSxcbiAgICB5ZWFyOnRydWVcbiAgfTtcblxuICBtaW5EYXRlU3RydWN0Ok5nYkRhdGVTdHJ1Y3Q7XG4gIG1heERhdGVTdHJ1Y3Q6TmdiRGF0ZVN0cnVjdDtcbiAgZGF0ZVN0cnVjdDpOZ2JEYXRlU3RydWN0O1xuXG4gIGF0TWF4OmJvb2xlYW49ZmFsc2U7XG4gIGF0TWluOmJvb2xlYW49ZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB0aW1lVXRpbHM6IFRpbWVVdGlsc1NlcnZpY2Upe1xuXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcblxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczphbnkpe1xuICAgIGlmKGNoYW5nZXMubWluRGF0ZSl7XG4gICAgICB0aGlzLm1pbkRhdGVTdHJ1Y3QgPSB0aGlzLnRpbWVVdGlscy5jb252ZXJ0RGF0ZSh0aGlzLm1pbkRhdGUpO1xuICAgIH1cblxuICAgIGlmKGNoYW5nZXMubWF4RGF0ZSl7XG4gICAgICB0aGlzLm1heERhdGVTdHJ1Y3QgPSB0aGlzLnRpbWVVdGlscy5jb252ZXJ0RGF0ZSh0aGlzLm1heERhdGUpO1xuICAgIH1cblxuICAgIGlmKGNoYW5nZXMuZGF0ZSl7XG4gICAgICB0aGlzLmRhdGVTdHJ1Y3QgPSB0aGlzLnRpbWVVdGlscy5jb252ZXJ0RGF0ZSh0aGlzLmRhdGUpO1xuICAgIH1cblxuICAgIGlmKGNoYW5nZXMudGltZXN0ZXApe1xuICAgICAgdGhpcy5hc3Nlc3NEYXRlQ29tcG9uZW50cygpO1xuICAgIH1cbiAgICB0aGlzLmNoZWNrTGltaXRzKCk7XG4gIH1cblxuICBkYXRlU3RydWN0Q2hhbmdlZCgpe1xuICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKHRoaXMuZGF0ZVN0cnVjdC55ZWFyLHRoaXMuZGF0ZVN0cnVjdC5tb250aC0xLHRoaXMuZGF0ZVN0cnVjdC5kYXkpKTtcbiAgICAvLyB0aGlzLmRhdGUuc2V0VVRDRnVsbFllYXIodGhpcy5kYXRlU3RydWN0LnllYXIpXG4gICAgLy8gdGhpcy5kYXRlLnNldFVUQ01vbnRoKHRoaXMuZGF0ZVN0cnVjdC5tb250aC0xKVxuICAgIC8vIHRoaXMuZGF0ZS5zZXRVVENEYXRlKHRoaXMuZGF0ZVN0cnVjdC5kYXkpO1xuICAgIHRoaXMuY2hlY2tSZWZlcmVuY2UoKTtcbiAgICB0aGlzLmRhdGVDaGFuZ2UuZW1pdCh0aGlzLmRhdGUpO1xuICB9XG5cbiAgYXNzZXNzRGF0ZUNvbXBvbmVudHMoKXtcbiAgICB0aGlzLm5lZWQuZGF5ID0gdGhpcy5uZWVkLm1vbnRoID0gdGhpcy5uZWVkLnllYXIgPSB0cnVlO1xuICAgIGlmKHRoaXMudGltZXN0ZXA9PT0nZGFpbHknKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5uZWVkLmRheSA9IGZhbHNlO1xuXG4gICAgaWYodGhpcy50aW1lc3RlcD09PSdhbm51YWwnKSB7XG4gICAgICB0aGlzLm5lZWQubW9udGggPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBtb3ZlKG46bnVtYmVyKXtcbiAgICB0aGlzLmRhdGUgPSBuZXcgRGF0ZSh0aGlzLmRhdGUmJnRoaXMuZGF0ZS5nZXRUaW1lKCkpO1xuICAgIHRoaXMuZGF0ZS5zZXREYXRlKHRoaXMuZGF0ZS5nZXREYXRlKCkrbik7XG4gICAgdGhpcy5vbkRhdGVDaGFuZ2VkKCk7XG4gICAgdGhpcy5kYXRlQ2hhbmdlLmVtaXQodGhpcy5kYXRlKTtcbiAgfVxuXG4gIG9uRGF0ZUNoYW5nZWQoKXtcbiAgICB0aGlzLmNoZWNrTGltaXRzKCk7XG4gIH1cblxuICBjaGVja0xpbWl0cygpe1xuICAgIHRoaXMuYXRNYXggPSB0aGlzLnRpbWVVdGlscy5kYXRlc0VxdWFsKHRoaXMuZGF0ZVN0cnVjdCx0aGlzLm1heERhdGVTdHJ1Y3QpO1xuICAgIHRoaXMuYXRNaW4gPSB0aGlzLnRpbWVVdGlscy5kYXRlc0VxdWFsKHRoaXMuZGF0ZVN0cnVjdCx0aGlzLm1pbkRhdGVTdHJ1Y3QpO1xuICB9XG4gIC8vIFRPRE8gbm90IGVuZm9yY2luZyBsaW1pdHMgZXRjLi4uXG5cbiAgY2hlY2tSZWZlcmVuY2UoKTogYW55IHtcbiAgICBpZighdGhpcy5yZWZlcmVuY2VEYXRlKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgcmVmQ29tcG9uZW50cyA9IEludGVycG9sYXRpb25TZXJ2aWNlLmludGVycG9sYXRlKHRoaXMucmVmZXJlbmNlRGF0ZSx7XG4gICAgICB5ZWFyOnRoaXMuZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgbW9udGg6dGhpcy5kYXRlLmdldE1vbnRoKCkrMSxcbiAgICAgIGRhdGU6dGhpcy5kYXRlLmdldERhdGUoKVxuICAgIH0pLnNwbGl0KCctJykubWFwKHM9PitzKTtcblxuICAgIGxldCBjdXJyZW50UmVmID0gbmV3IERhdGUoRGF0ZS5VVEMocmVmQ29tcG9uZW50c1swXSxyZWZDb21wb25lbnRzWzFdLTEscmVmQ29tcG9uZW50c1syXSkpO1xuXG4gICAgY29uc29sZS5sb2coJ2N1cnJlbnRSZWYnLGN1cnJlbnRSZWYpO1xuICAgIGNvbnNvbGUubG9nKCdjdXJyZW50RGF0ZScsdGhpcy5kYXRlKTtcbiAgICBsZXQgdGltZVNwYW4gPSBNSUxMSVNFQ09ORFNfUEVSX0RBWSAqIHRoaXMuc3RlcERheXM7XG5cbiAgICBsZXQgZGF5cyA9ICh0aGlzLmRhdGUuZ2V0VGltZSgpIC0gY3VycmVudFJlZi5nZXRUaW1lKCkpL3RpbWVTcGFuO1xuICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKGN1cnJlbnRSZWYuZ2V0VGltZSgpICsgTWF0aC5yb3VuZChkYXlzKSp0aW1lU3Bhbik7XG4gICAgdGhpcy5kYXRlU3RydWN0ID0gdGhpcy50aW1lVXRpbHMuY29udmVydERhdGUodGhpcy5kYXRlKTtcbiAgfVxuXG59XG4iXX0=