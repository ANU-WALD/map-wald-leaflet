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
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngClass", ctx_r8.markerClasses[i_r10] || ctx_r8.markerClasses[0] || "");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(3, _c0, colour_r9));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("innerHTML", ctx_r8.labels[i_r10], i0.ɵɵsanitizeHtml);
} }
function LegendComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵtemplate(2, LegendComponent_div_7_div_2_Template, 5, 5, "div", 10);
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
        this.markerClasses = [];
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
LegendComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LegendComponent, selectors: [["legend"]], inputs: { colours: "colours", labels: "labels", markerClasses: "markerClasses", imageURL: "imageURL", title: "title", mapUnits: "mapUnits", helpText: "helpText", tooltipPlacement: "tooltipPlacement", attribution: "attribution", attributionLink: "attributionLink" }, decls: 11, vars: 7, consts: [[1, "map-legend", "panel", "panel-group"], ["tooltipContent", ""], [3, "innerHTML", 4, "ngIf"], ["container", "body", 3, "ngbTooltip", "placement", 4, "ngIf"], [4, "ngIf"], [3, "innerHtml"], [3, "innerHTML"], ["container", "body", 3, "ngbTooltip", "placement"], [1, "fa", "fa-info-circle"], [2, "display", "table", "line-height", "15px"], ["style", "display:table-row;padding:0;", 4, "ngFor", "ngForOf"], [2, "display", "table-row", "padding", "0"], [1, "legend-colour", 3, "ngClass"], [1, "legend-entry", 3, "ngStyle"], [1, "legend-label"], [3, "src"], [3, "href"]], template: function LegendComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [i1.NgIf, i2.NgbTooltip, i1.NgForOf, i1.NgClass, i1.NgStyle], styles: [".map-legend[_ngcontent-%COMP%]{\n  display:block;\n  background: white;\n}\n\n.legend-colour[_ngcontent-%COMP%]{\n  display:table-cell;\n  padding:0px;\n}\n\n.legend-label[_ngcontent-%COMP%]{\n  display:table-cell;\n  padding:0px 4px 2px 2px;\n  font-size:10px;\n  vertical-align:middle;\n}\n\n.legend-entry[_ngcontent-%COMP%] {\n  float: left;\n  width: 15px !important;\n  height: 15px !important;\n}\n\n.legend-colour.circle[_ngcontent-%COMP%]   i.legend-entry[_ngcontent-%COMP%] {\n  border-radius:7px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LegendComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'legend',
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
        <div class="legend-colour" [ngClass]="markerClasses[i]||markerClasses[0]||''">
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

.legend-colour.circle i.legend-entry {
  border-radius:7px;
}
`]
            }]
    }], function () { return []; }, { colours: [{
            type: core_1.Input
        }], labels: [{
            type: core_1.Input
        }], markerClasses: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVnZW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLWxlYWZsZXQvIiwic291cmNlcyI6WyJsZWdlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUF5RDs7Ozs7SUFNdkQsMEJBQWtDOzs7SUFBNUIsOERBQW9COzs7SUFFUiwwQkFBNkQ7OztJQUF0QywwRUFBOEI7OztJQUNqRSwrQkFJRTtJQUFBLHVCQUFpQztJQUNuQyxpQkFBTzs7OztJQUpELGdDQUE2QixzQ0FBQTs7OztJQVNyQywrQkFFRTtJQUFBLCtCQUNFO0lBQUEsd0JBQTREO0lBQzlELGlCQUFNO0lBQ04sK0JBQ0U7SUFBQSwwQkFBcUM7SUFDdkMsaUJBQU07SUFDUixpQkFBTTs7Ozs7SUFOdUIsZUFBa0Q7SUFBbEQsc0ZBQWtEO0lBQ25ELGVBQStCO0lBQS9CLCtEQUErQjtJQUdqRCxlQUF1QjtJQUF2QixtRUFBdUI7OztJQVJyQywyQkFDRTtJQUFBLDhCQUNFO0lBQUEsdUVBUU07SUFDUixpQkFBTTtJQUNSLGlCQUFNOzs7SUFUcUIsZUFBWTtJQUFaLHdDQUFZOzs7SUFXdkMsMkJBQ0U7SUFBQSwwQkFDRjtJQUFBLGlCQUFNOzs7SUFEQyxlQUFnQjtJQUFoQix1REFBZ0I7OztJQUV2Qix5QkFBMkI7SUFBQSx3QkFBUTtJQUFBLDZCQUE0QjtJQUFBLFlBQTRCO0lBQUEsaUJBQUk7SUFBQSxpQkFBSTs7O0lBQTdELGVBQXdCO0lBQXhCLCtEQUF3QjtJQUFDLGVBQTRCO0lBQTVCLHFEQUE0Qjs7O0lBQzNGLHlCQUF5QztJQUFBLFlBQXVCO0lBQUEsaUJBQUk7OztJQUEzQixlQUF1QjtJQUF2Qix5REFBdUI7O0FBakNsRSxNQWdFYSxlQUFlO0lBYzFCO1FBYlMsWUFBTyxHQUFrQixDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbEQsV0FBTSxHQUFrQixFQUFFLENBQUM7UUFDM0Isa0JBQWEsR0FBYSxFQUFFLENBQUM7UUFFN0IsVUFBSyxHQUFHLFdBQVcsQ0FBQztRQUNwQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBRWQscUJBQWdCLEdBQUcsT0FBTyxDQUFDO1FBSXBDLG9CQUFlLEdBQWEsRUFBRSxDQUFDO0lBRWYsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7QUFqRkgsMENBbUZDOzhFQW5CWSxlQUFlO29EQUFmLGVBQWU7UUE5RGYsOEJBQ2I7UUFBQSxpSEFFYztRQUNaLDhCQUFRO1FBQUEsWUFBVTtRQUFBLGtFQUE2RDtRQUN6RSxrRUFLTztRQUNiLGlCQUFTO1FBRVQsZ0VBWU07UUFFTixnRUFFTTtRQUNOLDREQUFtRztRQUNuRyw4REFBb0U7UUFDdEUsaUJBQU07O1FBNUJJLGVBQVU7UUFBVix5Q0FBVTtRQUFPLGVBQWM7UUFBZCxtQ0FBYztRQUMxQixlQUFjO1FBQWQsbUNBQWM7UUFRckIsZUFBZTtRQUFmLG9DQUFlO1FBY2YsZUFBYztRQUFkLG1DQUFjO1FBR2hCLGVBQXFCO1FBQXJCLDBDQUFxQjtRQUNyQixlQUFtQztRQUFuQyw4REFBbUM7O2tEQStCNUIsZUFBZTtjQWhFM0IsZ0JBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsUUFBUTtnQkFDbEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FpQ1gsRUFBRSxNQUFNLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBMkJYLENBQUM7YUFDRDtzQ0FFVSxPQUFPO2tCQUFmLFlBQUs7WUFDRyxNQUFNO2tCQUFkLFlBQUs7WUFDRyxhQUFhO2tCQUFyQixZQUFLO1lBQ0csUUFBUTtrQkFBaEIsWUFBSztZQUNHLEtBQUs7a0JBQWIsWUFBSztZQUNHLFFBQVE7a0JBQWhCLFlBQUs7WUFDRyxRQUFRO2tCQUFoQixZQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixZQUFLO1lBQ0csV0FBVztrQkFBbkIsWUFBSztZQUNHLGVBQWU7a0JBQXZCLFlBQUs7O0FBV1IsU0FBZ0IsVUFBVSxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVU7SUFDcEUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM5QixPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDcEMsQ0FBQztBQUhELGdDQUdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xlZ2VuZCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm1hcC1sZWdlbmQgcGFuZWwgcGFuZWwtZ3JvdXBcIj5cbjxuZy10ZW1wbGF0ZSAjdG9vbHRpcENvbnRlbnQ+XG4gIDxzcGFuIFtpbm5lckh0bWxdPWhlbHBUZXh0Pjwvc3Bhbj5cbjwvbmctdGVtcGxhdGU+XG4gIDxzdHJvbmc+e3t0aXRsZX19IDxzcGFuICpuZ0lmPVwibWFwVW5pdHNcIiBbaW5uZXJIVE1MXT1cIicoJyttYXBVbml0cysnKSdcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiaGVscFRleHRcIlxuICAgICAgICAgICAgICBbbmdiVG9vbHRpcF09XCJ0b29sdGlwQ29udGVudFwiXG4gICAgICAgICAgICAgIFtwbGFjZW1lbnRdPVwidG9vbHRpcFBsYWNlbWVudFwiXG4gICAgICAgICAgICAgIGNvbnRhaW5lcj1cImJvZHlcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWluZm8tY2lyY2xlXCI+PC9pPlxuICAgICAgICA8L3NwYW4+XG4gIDwvc3Ryb25nPlxuXG4gIDxkaXYgKm5nSWY9XCIhaW1hZ2VVUkxcIj5cbiAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTp0YWJsZTtsaW5lLWhlaWdodDoxNXB4XCI+XG4gICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTp0YWJsZS1yb3c7cGFkZGluZzowO1wiXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGNvbG91ciBvZiBjb2xvdXJzOyBsZXQgaT1pbmRleFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGVnZW5kLWNvbG91clwiIFtuZ0NsYXNzXT1cIm1hcmtlckNsYXNzZXNbaV18fG1hcmtlckNsYXNzZXNbMF18fCcnXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJsZWdlbmQtZW50cnlcIiBbbmdTdHlsZV09XCJ7YmFja2dyb3VuZDpjb2xvdXJ9XCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxlZ2VuZC1sYWJlbFwiPlxuICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwibGFiZWxzW2ldXCI+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2ICpuZ0lmPVwiaW1hZ2VVUkxcIj5cbiAgICA8aW1nIFtzcmNdPVwiaW1hZ2VVUkxcIj5cbiAgPC9kaXY+XG4gIDxwICpuZ0lmPVwiYXR0cmlidXRpb25MaW5rXCI+U291cmNlOiA8YSBbaHJlZl09XCJhdHRyaWJ1dGlvbkxpbmtcIj57e2F0dHJpYnV0aW9uIHx8ICdkZXRhaWxzJ319PC9hPjwvcD5cbiAgPHAgKm5nSWY9XCJhdHRyaWJ1dGlvbiYmIWF0dHJpYnV0aW9uTGlua1wiPlNvdXJjZToge3thdHRyaWJ1dGlvbn19PC9wPlxuPC9kaXY+XG5gLCBzdHlsZXM6IFtgXG4ubWFwLWxlZ2VuZHtcbiAgZGlzcGxheTpibG9jaztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5sZWdlbmQtY29sb3Vye1xuICBkaXNwbGF5OnRhYmxlLWNlbGw7XG4gIHBhZGRpbmc6MHB4O1xufVxuXG4ubGVnZW5kLWxhYmVse1xuICBkaXNwbGF5OnRhYmxlLWNlbGw7XG4gIHBhZGRpbmc6MHB4IDRweCAycHggMnB4O1xuICBmb250LXNpemU6MTBweDtcbiAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xufVxuXG4ubGVnZW5kLWVudHJ5IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuXG4ubGVnZW5kLWNvbG91ci5jaXJjbGUgaS5sZWdlbmQtZW50cnkge1xuICBib3JkZXItcmFkaXVzOjdweDtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIExlZ2VuZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNvbG91cnM6IEFycmF5PHN0cmluZz4gPSBbJ3JlZCcsICd3aGl0ZScsICdibHVlJ107XG4gIEBJbnB1dCgpIGxhYmVsczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICBASW5wdXQoKSBtYXJrZXJDbGFzc2VzOiBzdHJpbmdbXSA9IFtdO1xuICBASW5wdXQoKSBpbWFnZVVSTDogc3RyaW5nXG4gIEBJbnB1dCgpIHRpdGxlID0gJ3RoZSB0aXRsZSc7XG4gIEBJbnB1dCgpIG1hcFVuaXRzID0gJyc7XG4gIEBJbnB1dCgpIGhlbHBUZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRvb2x0aXBQbGFjZW1lbnQgPSAncmlnaHQnO1xuICBASW5wdXQoKSBhdHRyaWJ1dGlvbjogc3RyaW5nO1xuICBASW5wdXQoKSBhdHRyaWJ1dGlvbkxpbms6IHN0cmluZztcblxuICBnZW5lcmF0ZWRMYWJlbHM6IHN0cmluZ1tdID0gW107XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlQ29sb3VyKHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIsIGE/OiBudW1iZXIpOiBzdHJpbmcge1xuICBhID0gKGEgPT09IHVuZGVmaW5lZCkgPyAxIDogYTtcbiAgcmV0dXJuIGByZ2IoJHtyfSwke2d9LCR7Yn0sJHthfSlgO1xufVxuXG4iXX0=