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
function DateSelectionComponent_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    var _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵlistener("click", function DateSelectionComponent_div_1_div_3_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r6); var ctx_r5 = i0.ɵɵnextContext(2); return ctx_r5.move(-ctx_r5.stepDays); });
    i0.ɵɵelement(1, "i", 11);
    i0.ɵɵelementEnd();
} }
function DateSelectionComponent_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    var _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵlistener("click", function DateSelectionComponent_div_1_div_8_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r8); var ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.move(ctx_r7.stepDays); });
    i0.ɵɵelement(1, "i", 12);
    i0.ɵɵelementEnd();
} }
function DateSelectionComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "div", 4);
    i0.ɵɵelementStart(2, "div", 5);
    i0.ɵɵtemplate(3, DateSelectionComponent_div_1_div_3_Template, 2, 0, "div", 6);
    i0.ɵɵelementStart(4, "input", 7, 8);
    i0.ɵɵlistener("ngModelChange", function DateSelectionComponent_div_1_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r10); var ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.dateStruct = $event; })("ngModelChange", function DateSelectionComponent_div_1_Template_input_ngModelChange_4_listener() { i0.ɵɵrestoreView(_r10); var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.dateStructChanged(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 9);
    i0.ɵɵlistener("click", function DateSelectionComponent_div_1_Template_div_click_6_listener() { i0.ɵɵrestoreView(_r10); var _r3 = i0.ɵɵreference(5); var ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.disabled || _r3.toggle(); });
    i0.ɵɵelement(7, "i", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, DateSelectionComponent_div_1_div_8_Template, 2, 0, "div", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.step);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r0.dateStruct)("maxDate", ctx_r0.maxDateStruct)("minDate", ctx_r0.minDateStruct)("disabled", ctx_r0.disabled);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r0.step);
} }
function DateSelectionComponent_div_2_date_element_1_Template(rf, ctx) { if (rf & 1) {
    var _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "date-element", 15);
    i0.ɵɵlistener("changed", function DateSelectionComponent_div_2_date_element_1_Template_date_element_changed_0_listener() { i0.ɵɵrestoreView(_r17); var ctx_r16 = i0.ɵɵnextContext(2); return ctx_r16.dateStructChanged(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r13.dateStruct)("property", "day")("label", "Day")("step", ctx_r13.stepDays)("disabled", ctx_r13.disabled);
} }
function DateSelectionComponent_div_2_date_element_2_Template(rf, ctx) { if (rf & 1) {
    var _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "date-element", 16);
    i0.ɵɵlistener("changed", function DateSelectionComponent_div_2_date_element_2_Template_date_element_changed_0_listener() { i0.ɵɵrestoreView(_r19); var ctx_r18 = i0.ɵɵnextContext(2); return ctx_r18.dateStructChanged(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r14.dateStruct)("property", "month")("label", "Month")("disabled", ctx_r14.disabled);
} }
function DateSelectionComponent_div_2_date_element_3_Template(rf, ctx) { if (rf & 1) {
    var _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "date-element", 16);
    i0.ɵɵlistener("changed", function DateSelectionComponent_div_2_date_element_3_Template_date_element_changed_0_listener() { i0.ɵɵrestoreView(_r21); var ctx_r20 = i0.ɵɵnextContext(2); return ctx_r20.dateStructChanged(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("src", ctx_r15.dateStruct)("property", "year")("label", "Year")("disabled", ctx_r15.disabled);
} }
function DateSelectionComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, DateSelectionComponent_div_2_date_element_1_Template, 1, 5, "date-element", 13);
    i0.ɵɵtemplate(2, DateSelectionComponent_div_2_date_element_2_Template, 1, 4, "date-element", 14);
    i0.ɵɵtemplate(3, DateSelectionComponent_div_2_date_element_3_Template, 1, 4, "date-element", 14);
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
        this.step = false;
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
    return DateSelectionComponent;
}());
exports.DateSelectionComponent = DateSelectionComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DateSelectionComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'date-selection',
                template: "<div class=\"date-control container-fluid\">\n  <div *ngIf=\"style!=='arrows'\" class=\"row no-gutters\">\n    <div class=\"col-12 form-group-inline\">\n        <div class=\"input-group input-group-sm\">\n          <div *ngIf=\"step\" class=\"ds-btn input-group-addon\" (click)=\"move(-stepDays)\">\n            <i class=\"fa fa-angle-left\"></i>\n          </div>\n          <input class=\"form-control form-control-sm\"\n                 placeholder=\"yyyy-mm-dd\"\n                 name=\"dp\"\n                 [(ngModel)]=\"dateStruct\"\n                 (ngModelChange)=\"dateStructChanged()\"\n                 ngbDatepicker\n                 #d=\"ngbDatepicker\"\n                 [maxDate]=\"maxDateStruct\"\n                 [minDate]=\"minDateStruct\"\n                 [disabled]=\"disabled\">\n          <div class=\"ds-btn input-group-addon\" (click)=\"disabled||d.toggle()\" >\n            <i class=\"fa fa-calendar\"></i>\n          </div>\n          <div *ngIf=\"step\" class=\"ds-btn input-group-addon\" (click)=\"move(stepDays)\">\n            <i class=\"fa fa-angle-right\"></i>\n          </div>\n        </div>\n      </div>\n\n    <!--\n      <div class=\"col-2\" >\n        <button class=\"btn btn-secondary btn-sm\" [disabled]=\"atMax\"\n                (click)=\"move(1)\"><i class=\"fa fa-chevron-right\"></i></button>\n      </div>\n    -->\n  </div>\n\n  <div *ngIf=\"style==='arrows'\">\n    <date-element *ngIf=\"need.day\"   [src]=\"dateStruct\" [property]=\"'day'\" [label]=\"'Day'\"\n                  [step]=\"stepDays\"\n                  (changed)=\"dateStructChanged()\"\n                  [disabled]=\"disabled\"></date-element>\n    <date-element *ngIf=\"need.month\" [src]=\"dateStruct\" [property]=\"'month'\" [label]=\"'Month'\"\n                  (changed)=\"dateStructChanged()\"\n                  [disabled]=\"disabled\"></date-element>\n    <date-element *ngIf=\"need.year\"  [src]=\"dateStruct\" [property]=\"'year'\" [label]=\"'Year'\"\n                  (changed)=\"dateStructChanged()\"\n                  [disabled]=\"disabled\"></date-element>\n  </div>\n</div>\n", styles: [
                    "\n  .ds-btn {\n    min-width:10px;\n  }\n  "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1zZWxlY3Rpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtbGVhZmxldC8iLCJzb3VyY2VzIjpbImRhdGUtc2VsZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBNkc7QUFFN0cscUNBQWtFOzs7Ozs7Ozs7SUFZeEQsOEJBQ0U7SUFEaUQsc01BQXlCO0lBQzFFLHdCQUFnQztJQUNsQyxpQkFBTTs7OztJQWNOLDhCQUNFO0lBRGlELHFNQUF3QjtJQUN6RSx3QkFBaUM7SUFDbkMsaUJBQU07Ozs7SUFyQmQsOEJBQ0U7SUFBQSw4QkFDSTtJQUFBLDhCQUNFO0lBQUEsNkVBRU07SUFDTixtQ0FVQTtJQVBPLHFOQUF3QixvTUFBQTtJQUgvQixpQkFVQTtJQUFBLDhCQUNFO0lBRG9DLGlOQUFtQixZQUFVLElBQUM7SUFDbEUsd0JBQThCO0lBQ2hDLGlCQUFNO0lBQ04sNkVBRU07SUFDUixpQkFBTTtJQUNSLGlCQUFNO0lBUVYsaUJBQU07OztJQTVCUSxlQUFVO0lBQVYsa0NBQVU7SUFNVCxlQUF3QjtJQUF4QiwyQ0FBd0IsaUNBQUEsaUNBQUEsNkJBQUE7SUFVekIsZUFBVTtJQUFWLGtDQUFVOzs7O0lBZXRCLHdDQUdvQztJQUR0Qiw0TkFBK0I7SUFDVCxpQkFBZTs7O0lBSGxCLHdDQUFrQixtQkFBQSxnQkFBQSwwQkFBQSw4QkFBQTs7OztJQUluRCx3Q0FFb0M7SUFEdEIsNE5BQStCO0lBQ1QsaUJBQWU7OztJQUZsQix3Q0FBa0IscUJBQUEsa0JBQUEsOEJBQUE7Ozs7SUFHbkQsd0NBRW9DO0lBRHRCLDROQUErQjtJQUNULGlCQUFlOzs7SUFGbEIsd0NBQWtCLG9CQUFBLGlCQUFBLDhCQUFBOzs7SUFSckQsMkJBQ0U7SUFBQSxnR0FHbUQ7SUFDbkQsZ0dBRW1EO0lBQ25ELGdHQUVtRDtJQUNyRCxpQkFBTTs7O0lBVlcsZUFBYztJQUFkLHNDQUFjO0lBSWQsZUFBZ0I7SUFBaEIs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O1lBQ0csT0FBTztrQkFBZixZQUFLO1lBQ0csT0FBTztrQkFBZixZQUFLO1lBQ0csS0FBSztrQkFBYixZQUFLO1lBQ0csUUFBUTtrQkFBaEIsWUFBSztZQUNHLGFBQWE7a0JBQXJCLFlBQUs7WUFDRyxRQUFRO2tCQUFoQixZQUFLO1lBQ0csSUFBSTtrQkFBWixZQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdiRGF0ZVN0cnVjdCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCB7IFRpbWVVdGlsc1NlcnZpY2UsIEludGVycG9sYXRpb25TZXJ2aWNlIH0gZnJvbSAnbWFwLXdhbGQnO1xuXG5jb25zdCBNSUxMSVNFQ09ORFNfUEVSX0RBWT0yNCo2MCo2MCoxMDAwO1xuXG5kZWNsYXJlIHZhciBQbG90bHk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZS1zZWxlY3Rpb24nLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJkYXRlLWNvbnRyb2wgY29udGFpbmVyLWZsdWlkXCI+XG4gIDxkaXYgKm5nSWY9XCJzdHlsZSE9PSdhcnJvd3MnXCIgY2xhc3M9XCJyb3cgbm8tZ3V0dGVyc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtMTIgZm9ybS1ncm91cC1pbmxpbmVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIGlucHV0LWdyb3VwLXNtXCI+XG4gICAgICAgICAgPGRpdiAqbmdJZj1cInN0ZXBcIiBjbGFzcz1cImRzLWJ0biBpbnB1dC1ncm91cC1hZGRvblwiIChjbGljayk9XCJtb3ZlKC1zdGVwRGF5cylcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtbGVmdFwiPjwvaT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtXCJcbiAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ5eXl5LW1tLWRkXCJcbiAgICAgICAgICAgICAgICAgbmFtZT1cImRwXCJcbiAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJkYXRlU3RydWN0XCJcbiAgICAgICAgICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwiZGF0ZVN0cnVjdENoYW5nZWQoKVwiXG4gICAgICAgICAgICAgICAgIG5nYkRhdGVwaWNrZXJcbiAgICAgICAgICAgICAgICAgI2Q9XCJuZ2JEYXRlcGlja2VyXCJcbiAgICAgICAgICAgICAgICAgW21heERhdGVdPVwibWF4RGF0ZVN0cnVjdFwiXG4gICAgICAgICAgICAgICAgIFttaW5EYXRlXT1cIm1pbkRhdGVTdHJ1Y3RcIlxuICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHMtYnRuIGlucHV0LWdyb3VwLWFkZG9uXCIgKGNsaWNrKT1cImRpc2FibGVkfHxkLnRvZ2dsZSgpXCIgPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jYWxlbmRhclwiPjwvaT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2ICpuZ0lmPVwic3RlcFwiIGNsYXNzPVwiZHMtYnRuIGlucHV0LWdyb3VwLWFkZG9uXCIgKGNsaWNrKT1cIm1vdmUoc3RlcERheXMpXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLXJpZ2h0XCI+PC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPCEtLVxuICAgICAgPGRpdiBjbGFzcz1cImNvbC0yXCIgPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtXCIgW2Rpc2FibGVkXT1cImF0TWF4XCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwibW92ZSgxKVwiPjxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIC0tPlxuICA8L2Rpdj5cblxuICA8ZGl2ICpuZ0lmPVwic3R5bGU9PT0nYXJyb3dzJ1wiPlxuICAgIDxkYXRlLWVsZW1lbnQgKm5nSWY9XCJuZWVkLmRheVwiICAgW3NyY109XCJkYXRlU3RydWN0XCIgW3Byb3BlcnR5XT1cIidkYXknXCIgW2xhYmVsXT1cIidEYXknXCJcbiAgICAgICAgICAgICAgICAgIFtzdGVwXT1cInN0ZXBEYXlzXCJcbiAgICAgICAgICAgICAgICAgIChjaGFuZ2VkKT1cImRhdGVTdHJ1Y3RDaGFuZ2VkKClcIlxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+PC9kYXRlLWVsZW1lbnQ+XG4gICAgPGRhdGUtZWxlbWVudCAqbmdJZj1cIm5lZWQubW9udGhcIiBbc3JjXT1cImRhdGVTdHJ1Y3RcIiBbcHJvcGVydHldPVwiJ21vbnRoJ1wiIFtsYWJlbF09XCInTW9udGgnXCJcbiAgICAgICAgICAgICAgICAgIChjaGFuZ2VkKT1cImRhdGVTdHJ1Y3RDaGFuZ2VkKClcIlxuICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCI+PC9kYXRlLWVsZW1lbnQ+XG4gICAgPGRhdGUtZWxlbWVudCAqbmdJZj1cIm5lZWQueWVhclwiICBbc3JjXT1cImRhdGVTdHJ1Y3RcIiBbcHJvcGVydHldPVwiJ3llYXInXCIgW2xhYmVsXT1cIidZZWFyJ1wiXG4gICAgICAgICAgICAgICAgICAoY2hhbmdlZCk9XCJkYXRlU3RydWN0Q2hhbmdlZCgpXCJcbiAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiPjwvZGF0ZS1lbGVtZW50PlxuICA8L2Rpdj5cbjwvZGl2PlxuYCxzdHlsZXM6IFtcbiAgYFxuICAuZHMtYnRuIHtcbiAgICBtaW4td2lkdGg6MTBweDtcbiAgfVxuICBgXG5dfSlcbmV4cG9ydCBjbGFzcyBEYXRlU2VsZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCAge1xuICBASW5wdXQoKSBkYXRlOiBEYXRlO1xuICBAT3V0cHV0KCkgZGF0ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgdGltZXN0ZXA6IHN0cmluZztcbiAgQElucHV0KCkgbWluRGF0ZTogRGF0ZXxzdHJpbmc7XG4gIEBJbnB1dCgpIG1heERhdGU6IERhdGV8c3RyaW5nO1xuICBASW5wdXQoKSBzdHlsZTogKCdwb3B1cCd8J2Fycm93cycpID0gJ2Fycm93cyc7XG4gIEBJbnB1dCgpIHN0ZXBEYXlzID0gMTtcbiAgQElucHV0KCkgcmVmZXJlbmNlRGF0ZTpzdHJpbmcgPSBudWxsO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBzdGVwID0gZmFsc2U7XG5cbiAgbmVlZCA9IHtcbiAgICBkYXk6dHJ1ZSxcbiAgICBtb250aDp0cnVlLFxuICAgIHllYXI6dHJ1ZVxuICB9O1xuXG4gIG1pbkRhdGVTdHJ1Y3Q6TmdiRGF0ZVN0cnVjdDtcbiAgbWF4RGF0ZVN0cnVjdDpOZ2JEYXRlU3RydWN0O1xuICBkYXRlU3RydWN0Ok5nYkRhdGVTdHJ1Y3Q7XG5cbiAgYXRNYXg6Ym9vbGVhbj1mYWxzZTtcbiAgYXRNaW46Ym9vbGVhbj1mYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRpbWVVdGlsczogVGltZVV0aWxzU2VydmljZSl7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuXG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOmFueSl7XG4gICAgaWYoY2hhbmdlcy5taW5EYXRlKXtcbiAgICAgIHRoaXMubWluRGF0ZVN0cnVjdCA9IHRoaXMudGltZVV0aWxzLmNvbnZlcnREYXRlKHRoaXMubWluRGF0ZSk7XG4gICAgfVxuXG4gICAgaWYoY2hhbmdlcy5tYXhEYXRlKXtcbiAgICAgIHRoaXMubWF4RGF0ZVN0cnVjdCA9IHRoaXMudGltZVV0aWxzLmNvbnZlcnREYXRlKHRoaXMubWF4RGF0ZSk7XG4gICAgfVxuXG4gICAgaWYoY2hhbmdlcy5kYXRlKXtcbiAgICAgIHRoaXMuZGF0ZVN0cnVjdCA9IHRoaXMudGltZVV0aWxzLmNvbnZlcnREYXRlKHRoaXMuZGF0ZSk7XG4gICAgfVxuXG4gICAgaWYoY2hhbmdlcy50aW1lc3RlcCl7XG4gICAgICB0aGlzLmFzc2Vzc0RhdGVDb21wb25lbnRzKCk7XG4gICAgfVxuICAgIHRoaXMuY2hlY2tMaW1pdHMoKTtcbiAgfVxuXG4gIGRhdGVTdHJ1Y3RDaGFuZ2VkKCl7XG4gICAgdGhpcy5kYXRlID0gbmV3IERhdGUoRGF0ZS5VVEModGhpcy5kYXRlU3RydWN0LnllYXIsdGhpcy5kYXRlU3RydWN0Lm1vbnRoLTEsdGhpcy5kYXRlU3RydWN0LmRheSkpO1xuICAgIC8vIHRoaXMuZGF0ZS5zZXRVVENGdWxsWWVhcih0aGlzLmRhdGVTdHJ1Y3QueWVhcilcbiAgICAvLyB0aGlzLmRhdGUuc2V0VVRDTW9udGgodGhpcy5kYXRlU3RydWN0Lm1vbnRoLTEpXG4gICAgLy8gdGhpcy5kYXRlLnNldFVUQ0RhdGUodGhpcy5kYXRlU3RydWN0LmRheSk7XG4gICAgdGhpcy5jaGVja1JlZmVyZW5jZSgpO1xuICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KHRoaXMuZGF0ZSk7XG4gIH1cblxuICBhc3Nlc3NEYXRlQ29tcG9uZW50cygpe1xuICAgIHRoaXMubmVlZC5kYXkgPSB0aGlzLm5lZWQubW9udGggPSB0aGlzLm5lZWQueWVhciA9IHRydWU7XG4gICAgaWYodGhpcy50aW1lc3RlcD09PSdkYWlseScpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm5lZWQuZGF5ID0gZmFsc2U7XG5cbiAgICBpZih0aGlzLnRpbWVzdGVwPT09J2FubnVhbCcpIHtcbiAgICAgIHRoaXMubmVlZC5tb250aCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIG1vdmUobjpudW1iZXIpe1xuICAgIHRoaXMuZGF0ZSA9IG5ldyBEYXRlKHRoaXMuZGF0ZSYmdGhpcy5kYXRlLmdldFRpbWUoKSk7XG4gICAgdGhpcy5kYXRlLnNldERhdGUodGhpcy5kYXRlLmdldERhdGUoKStuKTtcbiAgICB0aGlzLm9uRGF0ZUNoYW5nZWQoKTtcbiAgICB0aGlzLmRhdGVDaGFuZ2UuZW1pdCh0aGlzLmRhdGUpO1xuICB9XG5cbiAgb25EYXRlQ2hhbmdlZCgpe1xuICAgIHRoaXMuY2hlY2tMaW1pdHMoKTtcbiAgfVxuXG4gIGNoZWNrTGltaXRzKCl7XG4gICAgdGhpcy5hdE1heCA9IHRoaXMudGltZVV0aWxzLmRhdGVzRXF1YWwodGhpcy5kYXRlU3RydWN0LHRoaXMubWF4RGF0ZVN0cnVjdCk7XG4gICAgdGhpcy5hdE1pbiA9IHRoaXMudGltZVV0aWxzLmRhdGVzRXF1YWwodGhpcy5kYXRlU3RydWN0LHRoaXMubWluRGF0ZVN0cnVjdCk7XG4gIH1cbiAgLy8gVE9ETyBub3QgZW5mb3JjaW5nIGxpbWl0cyBldGMuLi5cblxuICBjaGVja1JlZmVyZW5jZSgpOiBhbnkge1xuICAgIGlmKCF0aGlzLnJlZmVyZW5jZURhdGUpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCByZWZDb21wb25lbnRzID0gSW50ZXJwb2xhdGlvblNlcnZpY2UuaW50ZXJwb2xhdGUodGhpcy5yZWZlcmVuY2VEYXRlLHtcbiAgICAgIHllYXI6dGhpcy5kYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBtb250aDp0aGlzLmRhdGUuZ2V0TW9udGgoKSsxLFxuICAgICAgZGF0ZTp0aGlzLmRhdGUuZ2V0RGF0ZSgpXG4gICAgfSkuc3BsaXQoJy0nKS5tYXAocz0+K3MpO1xuXG4gICAgbGV0IGN1cnJlbnRSZWYgPSBuZXcgRGF0ZShEYXRlLlVUQyhyZWZDb21wb25lbnRzWzBdLHJlZkNvbXBvbmVudHNbMV0tMSxyZWZDb21wb25lbnRzWzJdKSk7XG5cbiAgICBjb25zb2xlLmxvZygnY3VycmVudFJlZicsY3VycmVudFJlZik7XG4gICAgY29uc29sZS5sb2coJ2N1cnJlbnREYXRlJyx0aGlzLmRhdGUpO1xuICAgIGxldCB0aW1lU3BhbiA9IE1JTExJU0VDT05EU19QRVJfREFZICogdGhpcy5zdGVwRGF5cztcblxuICAgIGxldCBkYXlzID0gKHRoaXMuZGF0ZS5nZXRUaW1lKCkgLSBjdXJyZW50UmVmLmdldFRpbWUoKSkvdGltZVNwYW47XG4gICAgdGhpcy5kYXRlID0gbmV3IERhdGUoY3VycmVudFJlZi5nZXRUaW1lKCkgKyBNYXRoLnJvdW5kKGRheXMpKnRpbWVTcGFuKTtcbiAgICB0aGlzLmRhdGVTdHJ1Y3QgPSB0aGlzLnRpbWVVdGlscy5jb252ZXJ0RGF0ZSh0aGlzLmRhdGUpO1xuICB9XG5cbn1cbiJdfQ==