"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeColour = exports.LegendComponent = void 0;
var core_1 = require("@angular/core");
var i0 = require("@angular/core");
var i1 = require("@angular/common");
var i2 = require("@ng-bootstrap/ng-bootstrap");
function LegendComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 5);
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHtml", ctx_r1.helpText, i0.ɵɵsanitizeHtml);
} }
function LegendComponent_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 6);
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", "(" + ctx_r2.mapUnits + ")", i0.ɵɵsanitizeHtml);
} }
function LegendComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵelement(1, "i", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r3 = i0.ɵɵnextContext();
    var _r0 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngbTooltip", _r0)("placement", ctx_r3.tooltipPlacement);
} }
var _c0 = function (a0) { return { background: a0 }; };
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
    var colour_r9 = ctx.$implicit;
    var i_r10 = ctx.index;
    var ctx_r8 = i0.ɵɵnextContext(2);
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
    var ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r4.colours);
} }
function LegendComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "img", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = i0.ɵɵnextContext();
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
    var ctx_r6 = i0.ɵɵnextContext();
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
    var ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("Source: ", ctx_r7.attribution, "");
} }
var LegendComponent = /** @class */ (function () {
    function LegendComponent() {
        this.colours = ['red', 'white', 'blue'];
        this.labels = [];
        this.title = 'the title';
        this.mapUnits = '';
        this.tooltipPlacement = 'right';
        this.generatedLabels = [];
    }
    LegendComponent.prototype.ngOnInit = function () {
    };
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
    return LegendComponent;
}());
exports.LegendComponent = LegendComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LegendComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'app-legend',
                template: "<div class=\"map-legend panel panel-group\">\n<ng-template #tooltipContent>\n  <span [innerHtml]=helpText></span>\n</ng-template>\n  <strong>{{title}} <span *ngIf=\"mapUnits\" [innerHTML]=\"'('+mapUnits+')'\"></span>\n        <span *ngIf=\"helpText\"\n              [ngbTooltip]=\"tooltipContent\"\n              [placement]=\"tooltipPlacement\"\n              container=\"body\">\n          <i class=\"fa fa-info-circle\"></i>\n        </span>\n  </strong>\n\n  <div *ngIf=\"!imageURL\">\n    <div style=\"display:table;line-height:15px\">\n      <div style=\"display:table-row;padding:0;\"\n          *ngFor=\"let colour of colours; let i=index\">\n        <div class=\"legend-colour\">\n          <i class=\"legend-entry\" [ngStyle]=\"{background:colour}\"></i>\n        </div>\n        <div class=\"legend-label\">\n          <span [innerHTML]=\"labels[i]\"></span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"imageURL\">\n    <img [src]=\"imageURL\">\n  </div>\n  <p *ngIf=\"attributionLink\">Source: <a [href]=\"attributionLink\">{{attribution || 'details'}}</a></p>\n  <p *ngIf=\"attribution&&!attributionLink\">Source: {{attribution}}</p>\n</div>\n", styles: ["\n.map-legend{\n  display:block;\n  background: white;\n}\n\n.legend-colour{\n  display:table-cell;\n  padding:0px;\n}\n\n.legend-label{\n  display:table-cell;\n  padding:0px 4px 2px 2px;\n  font-size:10px;\n  vertical-align:middle;\n}\n\n.legend-entry {\n  float: left;\n  width: 15px !important;\n  height: 15px !important;\n}\n"]
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
    return "rgb(" + r + "," + g + "," + b + "," + a + ")";
}
exports.makeColour = makeColour;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVnZW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLWxlYWZsZXQvIiwic291cmNlcyI6WyJsZWdlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF5RDs7Ozs7SUFNdkQsMEJBQWtDOzs7SUFBNUIsOERBQW9COzs7SUFFUiwwQkFBNkQ7OztJQUF0QywwRUFBOEI7OztJQUNqRSwrQkFJRTtJQUFBLHVCQUFpQztJQUNuQyxpQkFBTzs7OztJQUpELGdDQUE2QixzQ0FBQTs7OztJQVNyQywrQkFFRTtJQUFBLCtCQUNFO0lBQUEsd0JBQTREO0lBQzlELGlCQUFNO0lBQ04sK0JBQ0U7SUFBQSwwQkFBcUM7SUFDdkMsaUJBQU07SUFDUixpQkFBTTs7Ozs7SUFMc0IsZUFBK0I7SUFBL0IsK0RBQStCO0lBR2pELGVBQXVCO0lBQXZCLG1FQUF1Qjs7O0lBUnJDLDJCQUNFO0lBQUEsOEJBQ0U7SUFBQSx1RUFRTTtJQUNSLGlCQUFNO0lBQ1IsaUJBQU07OztJQVRxQixlQUFZO0lBQVosd0NBQVk7OztJQVd2QywyQkFDRTtJQUFBLDBCQUNGO0lBQUEsaUJBQU07OztJQURDLGVBQWdCO0lBQWhCLHVEQUFnQjs7O0lBRXZCLHlCQUEyQjtJQUFBLHdCQUFRO0lBQUEsNkJBQTRCO0lBQUEsWUFBNEI7SUFBQSxpQkFBSTtJQUFBLGlCQUFJOzs7SUFBN0QsZUFBd0I7SUFBeEIsK0RBQXdCO0lBQUMsZUFBNEI7SUFBNUIscURBQTRCOzs7SUFDM0YseUJBQXlDO0lBQUEsWUFBdUI7SUFBQSxpQkFBSTs7O0lBQTNCLGVBQXVCO0lBQXZCLHlEQUF1Qjs7QUFqQ2xFO0lBMEVFO1FBYlMsWUFBTyxHQUFrQixDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbEQsV0FBTSxHQUFrQixFQUFFLENBQUM7UUFHM0IsVUFBSyxHQUFHLFdBQVcsQ0FBQztRQUNwQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBRWQscUJBQWdCLEdBQUcsT0FBTyxDQUFDO1FBSXBDLG9CQUFlLEdBQWEsRUFBRSxDQUFDO0lBRWYsQ0FBQztJQUVqQixrQ0FBUSxHQUFSO0lBQ0EsQ0FBQztrRkFqQlUsZUFBZTt3REFBZixlQUFlO1lBMURmLDhCQUNiO1lBQUEsaUhBRWM7WUFDWiw4QkFBUTtZQUFBLFlBQVU7WUFBQSxrRUFBNkQ7WUFDekUsa0VBS087WUFDYixpQkFBUztZQUVULGdFQVlNO1lBRU4sZ0VBRU07WUFDTiw0REFBbUc7WUFDbkcsOERBQW9FO1lBQ3RFLGlCQUFNOztZQTVCSSxlQUFVO1lBQVYseUNBQVU7WUFBTyxlQUFjO1lBQWQsbUNBQWM7WUFDMUIsZUFBYztZQUFkLG1DQUFjO1lBUXJCLGVBQWU7WUFBZixvQ0FBZTtZQWNmLGVBQWM7WUFBZCxtQ0FBYztZQUdoQixlQUFxQjtZQUFyQiwwQ0FBcUI7WUFDckIsZUFBbUM7WUFBbkMsOERBQW1DOzswQkFuQ3pDO0NBaUZDLEFBL0VELElBK0VDO0FBbkJZLDBDQUFlO2tEQUFmLGVBQWU7Y0E1RDNCLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRSxncUNBaUNYLEVBQUUsTUFBTSxFQUFFLENBQUMsNFVBdUJYLENBQUM7YUFDRDtzQ0FFVSxPQUFPO2tCQUFmLFlBQUs7WUFDRyxNQUFNO2tCQUFkLFlBQUs7WUFFRyxRQUFRO2tCQUFoQixZQUFLO1lBQ0csS0FBSztrQkFBYixZQUFLO1lBQ0csUUFBUTtrQkFBaEIsWUFBSztZQUNHLFFBQVE7a0JBQWhCLFlBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLFlBQUs7WUFDRyxXQUFXO2tCQUFuQixZQUFLO1lBQ0csZUFBZTtrQkFBdkIsWUFBSzs7QUFXUixTQUFnQixVQUFVLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBVTtJQUNwRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLE9BQU8sU0FBTyxDQUFDLFNBQUksQ0FBQyxTQUFJLENBQUMsU0FBSSxDQUFDLE1BQUcsQ0FBQztBQUNwQyxDQUFDO0FBSEQsZ0NBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWxlZ2VuZCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cIm1hcC1sZWdlbmQgcGFuZWwgcGFuZWwtZ3JvdXBcIj5cbjxuZy10ZW1wbGF0ZSAjdG9vbHRpcENvbnRlbnQ+XG4gIDxzcGFuIFtpbm5lckh0bWxdPWhlbHBUZXh0Pjwvc3Bhbj5cbjwvbmctdGVtcGxhdGU+XG4gIDxzdHJvbmc+e3t0aXRsZX19IDxzcGFuICpuZ0lmPVwibWFwVW5pdHNcIiBbaW5uZXJIVE1MXT1cIicoJyttYXBVbml0cysnKSdcIj48L3NwYW4+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiaGVscFRleHRcIlxuICAgICAgICAgICAgICBbbmdiVG9vbHRpcF09XCJ0b29sdGlwQ29udGVudFwiXG4gICAgICAgICAgICAgIFtwbGFjZW1lbnRdPVwidG9vbHRpcFBsYWNlbWVudFwiXG4gICAgICAgICAgICAgIGNvbnRhaW5lcj1cImJvZHlcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWluZm8tY2lyY2xlXCI+PC9pPlxuICAgICAgICA8L3NwYW4+XG4gIDwvc3Ryb25nPlxuXG4gIDxkaXYgKm5nSWY9XCIhaW1hZ2VVUkxcIj5cbiAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTp0YWJsZTtsaW5lLWhlaWdodDoxNXB4XCI+XG4gICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTp0YWJsZS1yb3c7cGFkZGluZzowO1wiXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGNvbG91ciBvZiBjb2xvdXJzOyBsZXQgaT1pbmRleFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGVnZW5kLWNvbG91clwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwibGVnZW5kLWVudHJ5XCIgW25nU3R5bGVdPVwie2JhY2tncm91bmQ6Y29sb3VyfVwiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZWdlbmQtbGFiZWxcIj5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImxhYmVsc1tpXVwiPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiAqbmdJZj1cImltYWdlVVJMXCI+XG4gICAgPGltZyBbc3JjXT1cImltYWdlVVJMXCI+XG4gIDwvZGl2PlxuICA8cCAqbmdJZj1cImF0dHJpYnV0aW9uTGlua1wiPlNvdXJjZTogPGEgW2hyZWZdPVwiYXR0cmlidXRpb25MaW5rXCI+e3thdHRyaWJ1dGlvbiB8fCAnZGV0YWlscyd9fTwvYT48L3A+XG4gIDxwICpuZ0lmPVwiYXR0cmlidXRpb24mJiFhdHRyaWJ1dGlvbkxpbmtcIj5Tb3VyY2U6IHt7YXR0cmlidXRpb259fTwvcD5cbjwvZGl2PlxuYCwgc3R5bGVzOiBbYFxuLm1hcC1sZWdlbmR7XG4gIGRpc3BsYXk6YmxvY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4ubGVnZW5kLWNvbG91cntcbiAgZGlzcGxheTp0YWJsZS1jZWxsO1xuICBwYWRkaW5nOjBweDtcbn1cblxuLmxlZ2VuZC1sYWJlbHtcbiAgZGlzcGxheTp0YWJsZS1jZWxsO1xuICBwYWRkaW5nOjBweCA0cHggMnB4IDJweDtcbiAgZm9udC1zaXplOjEwcHg7XG4gIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcbn1cblxuLmxlZ2VuZC1lbnRyeSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTVweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cbmBdXG59KVxuZXhwb3J0IGNsYXNzIExlZ2VuZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNvbG91cnM6IEFycmF5PHN0cmluZz4gPSBbJ3JlZCcsICd3aGl0ZScsICdibHVlJ107XG4gIEBJbnB1dCgpIGxhYmVsczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gIEBJbnB1dCgpIGltYWdlVVJMOiBzdHJpbmdcbiAgQElucHV0KCkgdGl0bGUgPSAndGhlIHRpdGxlJztcbiAgQElucHV0KCkgbWFwVW5pdHMgPSAnJztcbiAgQElucHV0KCkgaGVscFRleHQ6IHN0cmluZztcbiAgQElucHV0KCkgdG9vbHRpcFBsYWNlbWVudCA9ICdyaWdodCc7XG4gIEBJbnB1dCgpIGF0dHJpYnV0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGF0dHJpYnV0aW9uTGluazogc3RyaW5nO1xuXG4gIGdlbmVyYXRlZExhYmVsczogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VDb2xvdXIocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlciwgYT86IG51bWJlcik6IHN0cmluZyB7XG4gIGEgPSAoYSA9PT0gdW5kZWZpbmVkKSA/IDEgOiBhO1xuICByZXR1cm4gYHJnYigke3J9LCR7Z30sJHtifSwke2F9KWA7XG59XG5cbiJdfQ==