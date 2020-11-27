"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeColour = exports.LegendComponent = void 0;
const core_1 = require("@angular/core");
const i0 = require("@angular/core");
const i1 = require("@angular/common");
const i2 = require("@ng-bootstrap/ng-bootstrap");
function LegendComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 5);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHtml", ctx_r1.helpText, i0.ɵɵsanitizeHtml);
} }
function LegendComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 6);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", "(" + ctx_r2.mapUnits + ")", i0.ɵɵsanitizeHtml);
} }
function LegendComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵelement(1, "i", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngbTooltip", _r0)("placement", ctx_r3.tooltipPlacement);
} }
const _c0 = function (a0) { return { background: a0 }; };
function LegendComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵelementStart(1, "div", 12);
    i0.ɵɵelement(2, "i", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 14);
    i0.ɵɵelement(4, "span", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const colour_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c0, colour_r9));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", ctx_r8.labels[i_r10], i0.ɵɵsanitizeHtml);
} }
function LegendComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵtemplate(2, LegendComponent_div_7_div_2_Template, 5, 4, "div", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.colours);
} }
function LegendComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "img", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("src", ctx_r5.imageURL, i0.ɵɵsanitizeUrl);
} }
function LegendComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Source: ");
    i0.ɵɵelementStart(2, "a", 16);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("href", ctx_r6.attributionLink, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r6.attribution || "details");
} }
function LegendComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("Source: ", ctx_r7.attribution, "");
} }
class LegendComponent {
    constructor() {
        this.colours = ['red', 'white', 'blue'];
        this.labels = [];
        this.title = 'the title';
        this.mapUnits = '';
        this.tooltipPlacement = 'right';
        this.generatedLabels = [];
    }
    ngOnInit() {
    }
}
exports.LegendComponent = LegendComponent;
LegendComponent.ɵfac = function LegendComponent_Factory(t) { return new (t || LegendComponent)(); };
LegendComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LegendComponent, selectors: [["app-legend"]], inputs: { colours: "colours", labels: "labels", imageURL: "imageURL", title: "title", mapUnits: "mapUnits", helpText: "helpText", tooltipPlacement: "tooltipPlacement", attribution: "attribution", attributionLink: "attributionLink" }, decls: 11, vars: 7, consts: [[1, "map-legend", "panel", "panel-group"], ["tooltipContent", ""], [3, "innerHTML", 4, "ngIf"], ["container", "body", 3, "ngbTooltip", "placement", 4, "ngIf"], [4, "ngIf"], [3, "innerHtml"], [3, "innerHTML"], ["container", "body", 3, "ngbTooltip", "placement"], [1, "fa", "fa-info-circle"], [2, "display", "table", "line-height", "15px"], ["style", "display:table-row;padding:0;", 4, "ngFor", "ngForOf"], [2, "display", "table-row", "padding", "0"], [1, "legend-colour"], [1, "legend-entry", 3, "ngStyle"], [1, "legend-label"], [3, "src"], [3, "href"]], template: function LegendComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, LegendComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementStart(3, "strong");
        i0.ɵɵtext(4);
        i0.ɵɵtemplate(5, LegendComponent_span_5_Template, 1, 1, "span", 2);
        i0.ɵɵtemplate(6, LegendComponent_span_6_Template, 2, 2, "span", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(7, LegendComponent_div_7_Template, 3, 1, "div", 4);
        i0.ɵɵtemplate(8, LegendComponent_div_8_Template, 2, 1, "div", 4);
        i0.ɵɵtemplate(9, LegendComponent_p_9_Template, 4, 2, "p", 4);
        i0.ɵɵtemplate(10, LegendComponent_p_10_Template, 2, 1, "p", 4);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1("", ctx.title, " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.mapUnits);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.helpText);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.imageURL);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.imageURL);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.attributionLink);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.attribution && !ctx.attributionLink);
    } }, directives: [i1.NgIf, i2.NgbTooltip, i1.NgForOf, i1.NgStyle], styles: [".map-legend[_ngcontent-%COMP%]{\n  display:block;\n  background: white;\n}\n\n.legend-colour[_ngcontent-%COMP%]{\n  display:table-cell;\n  padding:0px;\n}\n\n.legend-label[_ngcontent-%COMP%]{\n  display:table-cell;\n  padding:0px 4px 2px 2px;\n  font-size:10px;\n  vertical-align:middle;\n}\n\n.legend-entry[_ngcontent-%COMP%] {\n  float: left;\n  width: 15px !important;\n  height: 15px !important;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LegendComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-legend',
                template: `<div class="map-legend panel panel-group">
<ng-template #tooltipContent>
  <span [innerHtml]=helpText></span>
</ng-template>
  <strong>{{title}} <span *ngIf="mapUnits" [innerHTML]="'('+mapUnits+')'"></span>
        <span *ngIf="helpText"
              [ngbTooltip]="tooltipContent"
              [placement]="tooltipPlacement"
              container="body">
          <i class="fa fa-info-circle"></i>
        </span>
  </strong>

  <div *ngIf="!imageURL">
    <div style="display:table;line-height:15px">
      <div style="display:table-row;padding:0;"
          *ngFor="let colour of colours; let i=index">
        <div class="legend-colour">
          <i class="legend-entry" [ngStyle]="{background:colour}"></i>
        </div>
        <div class="legend-label">
          <span [innerHTML]="labels[i]"></span>
        </div>
      </div>
    </div>
  </div>

  <div *ngIf="imageURL">
    <img [src]="imageURL">
  </div>
  <p *ngIf="attributionLink">Source: <a [href]="attributionLink">{{attribution || 'details'}}</a></p>
  <p *ngIf="attribution&&!attributionLink">Source: {{attribution}}</p>
</div>
`, styles: [`
.map-legend{
  display:block;
  background: white;
}

.legend-colour{
  display:table-cell;
  padding:0px;
}

.legend-label{
  display:table-cell;
  padding:0px 4px 2px 2px;
  font-size:10px;
  vertical-align:middle;
}

.legend-entry {
  float: left;
  width: 15px !important;
  height: 15px !important;
}
`]
            }]
    }], function () { return []; }, { colours: [{
            type: core_1.Input
        }], labels: [{
            type: core_1.Input
        }], imageURL: [{
            type: core_1.Input
        }], title: [{
            type: core_1.Input
        }], mapUnits: [{
            type: core_1.Input
        }], helpText: [{
            type: core_1.Input
        }], tooltipPlacement: [{
            type: core_1.Input
        }], attribution: [{
            type: core_1.Input
        }], attributionLink: [{
            type: core_1.Input
        }] }); })();
function makeColour(r, g, b, a) {
    a = (a === undefined) ? 1 : a;
    return `rgb(${r},${g},${b},${a})`;
}
exports.makeColour = makeColour;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVnZW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLWxlYWZsZXQvIiwic291cmNlcyI6WyJsZWdlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUF5RDs7Ozs7SUFNdkQsMEJBQWtDOzs7SUFBNUIsOERBQW9COzs7SUFFUiwwQkFBNkQ7OztJQUF0QywwRUFBOEI7OztJQUNqRSwrQkFJRTtJQUFBLHVCQUFpQztJQUNuQyxpQkFBTzs7OztJQUpELGdDQUE2QixzQ0FBQTs7OztJQVNyQywrQkFFRTtJQUFBLCtCQUNFO0lBQUEsd0JBQTREO0lBQzlELGlCQUFNO0lBQ04sK0JBQ0U7SUFBQSwwQkFBcUM7SUFDdkMsaUJBQU07SUFDUixpQkFBTTs7Ozs7SUFMc0IsZUFBK0I7SUFBL0IsK0RBQStCO0lBR2pELGVBQXVCO0lBQXZCLG1FQUF1Qjs7O0lBUnJDLDJCQUNFO0lBQUEsOEJBQ0U7SUFBQSx1RUFRTTtJQUNSLGlCQUFNO0lBQ1IsaUJBQU07OztJQVRxQixlQUFZO0lBQVosd0NBQVk7OztJQVd2QywyQkFDRTtJQUFBLDBCQUNGO0lBQUEsaUJBQU07OztJQURDLGVBQWdCO0lBQWhCLHVEQUFnQjs7O0lBRXZCLHlCQUEyQjtJQUFBLHdCQUFRO0lBQUEsNkJBQTRCO0lBQUEsWUFBNEI7SUFBQSxpQkFBSTtJQUFBLGlCQUFJOzs7SUFBN0QsZUFBd0I7SUFBeEIsK0RBQXdCO0lBQUMsZUFBNEI7SUFBNUIscURBQTRCOzs7SUFDM0YseUJBQXlDO0lBQUEsWUFBdUI7SUFBQSxpQkFBSTs7O0lBQTNCLGVBQXVCO0lBQXZCLHlEQUF1Qjs7QUFqQ2xFLE1BNERhLGVBQWU7SUFjMUI7UUFiUyxZQUFPLEdBQWtCLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNsRCxXQUFNLEdBQWtCLEVBQUUsQ0FBQztRQUczQixVQUFLLEdBQUcsV0FBVyxDQUFDO1FBQ3BCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFFZCxxQkFBZ0IsR0FBRyxPQUFPLENBQUM7UUFJcEMsb0JBQWUsR0FBYSxFQUFFLENBQUM7SUFFZixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOztBQTdFSCwwQ0ErRUM7OEVBbkJZLGVBQWU7b0RBQWYsZUFBZTtRQTFEZiw4QkFDYjtRQUFBLGlIQUVjO1FBQ1osOEJBQVE7UUFBQSxZQUFVO1FBQUEsa0VBQTZEO1FBQ3pFLGtFQUtPO1FBQ2IsaUJBQVM7UUFFVCxnRUFZTTtRQUVOLGdFQUVNO1FBQ04sNERBQW1HO1FBQ25HLDhEQUFvRTtRQUN0RSxpQkFBTTs7UUE1QkksZUFBVTtRQUFWLHlDQUFVO1FBQU8sZUFBYztRQUFkLG1DQUFjO1FBQzFCLGVBQWM7UUFBZCxtQ0FBYztRQVFyQixlQUFlO1FBQWYsb0NBQWU7UUFjZixlQUFjO1FBQWQsbUNBQWM7UUFHaEIsZUFBcUI7UUFBckIsMENBQXFCO1FBQ3JCLGVBQW1DO1FBQW5DLDhEQUFtQzs7a0RBMkI1QixlQUFlO2NBNUQzQixnQkFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWlDWCxFQUFFLE1BQU0sRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXVCWCxDQUFDO2FBQ0Q7c0NBRVUsT0FBTztrQkFBZixZQUFLO1lBQ0csTUFBTTtrQkFBZCxZQUFLO1lBRUcsUUFBUTtrQkFBaEIsWUFBSztZQUNHLEtBQUs7a0JBQWIsWUFBSztZQUNHLFFBQVE7a0JBQWhCLFlBQUs7WUFDRyxRQUFRO2tCQUFoQixZQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixZQUFLO1lBQ0csV0FBVztrQkFBbkIsWUFBSztZQUNHLGVBQWU7a0JBQXZCLFlBQUs7O0FBV1IsU0FBZ0IsVUFBVSxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVU7SUFDcEUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDcEMsQ0FBQztBQUhELGdDQUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1sZWdlbmQnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtYXAtbGVnZW5kIHBhbmVsIHBhbmVsLWdyb3VwXCI+XG48bmctdGVtcGxhdGUgI3Rvb2x0aXBDb250ZW50PlxuICA8c3BhbiBbaW5uZXJIdG1sXT1oZWxwVGV4dD48L3NwYW4+XG48L25nLXRlbXBsYXRlPlxuICA8c3Ryb25nPnt7dGl0bGV9fSA8c3BhbiAqbmdJZj1cIm1hcFVuaXRzXCIgW2lubmVySFRNTF09XCInKCcrbWFwVW5pdHMrJyknXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiAqbmdJZj1cImhlbHBUZXh0XCJcbiAgICAgICAgICAgICAgW25nYlRvb2x0aXBdPVwidG9vbHRpcENvbnRlbnRcIlxuICAgICAgICAgICAgICBbcGxhY2VtZW50XT1cInRvb2x0aXBQbGFjZW1lbnRcIlxuICAgICAgICAgICAgICBjb250YWluZXI9XCJib2R5XCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1pbmZvLWNpcmNsZVwiPjwvaT5cbiAgICAgICAgPC9zcGFuPlxuICA8L3N0cm9uZz5cblxuICA8ZGl2ICpuZ0lmPVwiIWltYWdlVVJMXCI+XG4gICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6dGFibGU7bGluZS1oZWlnaHQ6MTVweFwiPlxuICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6dGFibGUtcm93O3BhZGRpbmc6MDtcIlxuICAgICAgICAgICpuZ0Zvcj1cImxldCBjb2xvdXIgb2YgY29sb3VyczsgbGV0IGk9aW5kZXhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxlZ2VuZC1jb2xvdXJcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImxlZ2VuZC1lbnRyeVwiIFtuZ1N0eWxlXT1cIntiYWNrZ3JvdW5kOmNvbG91cn1cIj48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGVnZW5kLWxhYmVsXCI+XG4gICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJsYWJlbHNbaV1cIj48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgKm5nSWY9XCJpbWFnZVVSTFwiPlxuICAgIDxpbWcgW3NyY109XCJpbWFnZVVSTFwiPlxuICA8L2Rpdj5cbiAgPHAgKm5nSWY9XCJhdHRyaWJ1dGlvbkxpbmtcIj5Tb3VyY2U6IDxhIFtocmVmXT1cImF0dHJpYnV0aW9uTGlua1wiPnt7YXR0cmlidXRpb24gfHwgJ2RldGFpbHMnfX08L2E+PC9wPlxuICA8cCAqbmdJZj1cImF0dHJpYnV0aW9uJiYhYXR0cmlidXRpb25MaW5rXCI+U291cmNlOiB7e2F0dHJpYnV0aW9ufX08L3A+XG48L2Rpdj5cbmAsIHN0eWxlczogW2Bcbi5tYXAtbGVnZW5ke1xuICBkaXNwbGF5OmJsb2NrO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn1cblxuLmxlZ2VuZC1jb2xvdXJ7XG4gIGRpc3BsYXk6dGFibGUtY2VsbDtcbiAgcGFkZGluZzowcHg7XG59XG5cbi5sZWdlbmQtbGFiZWx7XG4gIGRpc3BsYXk6dGFibGUtY2VsbDtcbiAgcGFkZGluZzowcHggNHB4IDJweCAycHg7XG4gIGZvbnQtc2l6ZToxMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG59XG5cbi5sZWdlbmQtZW50cnkge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDE1cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBMZWdlbmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjb2xvdXJzOiBBcnJheTxzdHJpbmc+ID0gWydyZWQnLCAnd2hpdGUnLCAnYmx1ZSddO1xuICBASW5wdXQoKSBsYWJlbHM6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICBASW5wdXQoKSBpbWFnZVVSTDogc3RyaW5nXG4gIEBJbnB1dCgpIHRpdGxlID0gJ3RoZSB0aXRsZSc7XG4gIEBJbnB1dCgpIG1hcFVuaXRzID0gJyc7XG4gIEBJbnB1dCgpIGhlbHBUZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRvb2x0aXBQbGFjZW1lbnQgPSAncmlnaHQnO1xuICBASW5wdXQoKSBhdHRyaWJ1dGlvbjogc3RyaW5nO1xuICBASW5wdXQoKSBhdHRyaWJ1dGlvbkxpbms6IHN0cmluZztcblxuICBnZW5lcmF0ZWRMYWJlbHM6IHN0cmluZ1tdID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ29sb3VyKHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIsIGE/OiBudW1iZXIpOiBzdHJpbmcge1xuICBhID0gKGEgPT09IHVuZGVmaW5lZCkgPyAxIDogYTtcbiAgcmV0dXJuIGByZ2IoJHtyfSwke2d9LCR7Yn0sJHthfSlgO1xufVxuXG4iXX0=