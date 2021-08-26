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
        this.markerClasses = [];
        this.title = 'the title';
        this.mapUnits = '';
        this.tooltipPlacement = 'right';
        this.generatedLabels = [];
    }
    LegendComponent.prototype.ngOnInit = function () {
    };
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
    return LegendComponent;
}());
exports.LegendComponent = LegendComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LegendComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'legend',
                template: "<div class=\"map-legend panel panel-group\">\n<ng-template #tooltipContent>\n  <span [innerHtml]=helpText></span>\n</ng-template>\n  <strong>{{title}} <span *ngIf=\"mapUnits\" [innerHTML]=\"'('+mapUnits+')'\"></span>\n        <span *ngIf=\"helpText\"\n              [ngbTooltip]=\"tooltipContent\"\n              [placement]=\"tooltipPlacement\"\n              container=\"body\">\n          <i class=\"fa fa-info-circle\"></i>\n        </span>\n  </strong>\n\n  <div *ngIf=\"!imageURL\">\n    <div style=\"display:table;line-height:15px\">\n      <div style=\"display:table-row;padding:0;\"\n          *ngFor=\"let colour of colours; let i=index\">\n        <div class=\"legend-colour\" [ngClass]=\"markerClasses[i]||markerClasses[0]||''\">\n          <i class=\"legend-entry\" [ngStyle]=\"{background:colour}\"></i>\n        </div>\n        <div class=\"legend-label\">\n          <span [innerHTML]=\"labels[i]\"></span>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"imageURL\">\n    <img [src]=\"imageURL\">\n  </div>\n  <p *ngIf=\"attributionLink\">Source: <a [href]=\"attributionLink\">{{attribution || 'details'}}</a></p>\n  <p *ngIf=\"attribution&&!attributionLink\">Source: {{attribution}}</p>\n</div>\n", styles: ["\n.map-legend{\n  display:block;\n  background: white;\n}\n\n.legend-colour{\n  display:table-cell;\n  padding:0px;\n}\n\n.legend-label{\n  display:table-cell;\n  padding:0px 4px 2px 2px;\n  font-size:10px;\n  vertical-align:middle;\n}\n\n.legend-entry {\n  float: left;\n  width: 15px !important;\n  height: 15px !important;\n}\n\n.legend-colour.circle i.legend-entry {\n  border-radius:7px;\n}\n"]
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
    return "rgb(" + r + "," + g + "," + b + "," + a + ")";
}
exports.makeColour = makeColour;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVnZW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLWxlYWZsZXQvIiwic291cmNlcyI6WyJsZWdlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF5RDs7Ozs7SUFNdkQsMEJBQWtDOzs7SUFBNUIsOERBQW9COzs7SUFFUiwwQkFBNkQ7OztJQUF0QywwRUFBOEI7OztJQUNqRSwrQkFJRTtJQUFBLHVCQUFpQztJQUNuQyxpQkFBTzs7OztJQUpELGdDQUE2QixzQ0FBQTs7OztJQVNyQywrQkFFRTtJQUFBLCtCQUNFO0lBQUEsd0JBQTREO0lBQzlELGlCQUFNO0lBQ04sK0JBQ0U7SUFBQSwwQkFBcUM7SUFDdkMsaUJBQU07SUFDUixpQkFBTTs7Ozs7SUFOdUIsZUFBa0Q7SUFBbEQsc0ZBQWtEO0lBQ25ELGVBQStCO0lBQS9CLCtEQUErQjtJQUdqRCxlQUF1QjtJQUF2QixtRUFBdUI7OztJQVJyQywyQkFDRTtJQUFBLDhCQUNFO0lBQUEsdUVBUU07SUFDUixpQkFBTTtJQUNSLGlCQUFNOzs7SUFUcUIsZUFBWTtJQUFaLHdDQUFZOzs7SUFXdkMsMkJBQ0U7SUFBQSwwQkFDRjtJQUFBLGlCQUFNOzs7SUFEQyxlQUFnQjtJQUFoQix1REFBZ0I7OztJQUV2Qix5QkFBMkI7SUFBQSx3QkFBUTtJQUFBLDZCQUE0QjtJQUFBLFlBQTRCO0lBQUEsaUJBQUk7SUFBQSxpQkFBSTs7O0lBQTdELGVBQXdCO0lBQXhCLCtEQUF3QjtJQUFDLGVBQTRCO0lBQTVCLHFEQUE0Qjs7O0lBQzNGLHlCQUF5QztJQUFBLFlBQXVCO0lBQUEsaUJBQUk7OztJQUEzQixlQUF1QjtJQUF2Qix5REFBdUI7O0FBakNsRTtJQThFRTtRQWJTLFlBQU8sR0FBa0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELFdBQU0sR0FBa0IsRUFBRSxDQUFDO1FBQzNCLGtCQUFhLEdBQWEsRUFBRSxDQUFDO1FBRTdCLFVBQUssR0FBRyxXQUFXLENBQUM7UUFDcEIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUVkLHFCQUFnQixHQUFHLE9BQU8sQ0FBQztRQUlwQyxvQkFBZSxHQUFhLEVBQUUsQ0FBQztJQUVmLENBQUM7SUFFakIsa0NBQVEsR0FBUjtJQUNBLENBQUM7a0ZBakJVLGVBQWU7d0RBQWYsZUFBZTtZQTlEZiw4QkFDYjtZQUFBLGlIQUVjO1lBQ1osOEJBQVE7WUFBQSxZQUFVO1lBQUEsa0VBQTZEO1lBQ3pFLGtFQUtPO1lBQ2IsaUJBQVM7WUFFVCxnRUFZTTtZQUVOLGdFQUVNO1lBQ04sNERBQW1HO1lBQ25HLDhEQUFvRTtZQUN0RSxpQkFBTTs7WUE1QkksZUFBVTtZQUFWLHlDQUFVO1lBQU8sZUFBYztZQUFkLG1DQUFjO1lBQzFCLGVBQWM7WUFBZCxtQ0FBYztZQVFyQixlQUFlO1lBQWYsb0NBQWU7WUFjZixlQUFjO1lBQWQsbUNBQWM7WUFHaEIsZUFBcUI7WUFBckIsMENBQXFCO1lBQ3JCLGVBQW1DO1lBQW5DLDhEQUFtQzs7MEJBbkN6QztDQXFGQyxBQW5GRCxJQW1GQztBQW5CWSwwQ0FBZTtrREFBZixlQUFlO2NBaEUzQixnQkFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2dCQUNsQixRQUFRLEVBQUUscXRDQWlDWCxFQUFFLE1BQU0sRUFBRSxDQUFDLCtZQTJCWCxDQUFDO2FBQ0Q7c0NBRVUsT0FBTztrQkFBZixZQUFLO1lBQ0csTUFBTTtrQkFBZCxZQUFLO1lBQ0csYUFBYTtrQkFBckIsWUFBSztZQUNHLFFBQVE7a0JBQWhCLFlBQUs7WUFDRyxLQUFLO2tCQUFiLFlBQUs7WUFDRyxRQUFRO2tCQUFoQixZQUFLO1lBQ0csUUFBUTtrQkFBaEIsWUFBSztZQUNHLGdCQUFnQjtrQkFBeEIsWUFBSztZQUNHLFdBQVc7a0JBQW5CLFlBQUs7WUFDRyxlQUFlO2tCQUF2QixZQUFLOztBQVdSLFNBQWdCLFVBQVUsQ0FBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFVO0lBQ3BFLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUIsT0FBTyxTQUFPLENBQUMsU0FBSSxDQUFDLFNBQUksQ0FBQyxTQUFJLENBQUMsTUFBRyxDQUFDO0FBQ3BDLENBQUM7QUFIRCxnQ0FHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsZWdlbmQnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJtYXAtbGVnZW5kIHBhbmVsIHBhbmVsLWdyb3VwXCI+XG48bmctdGVtcGxhdGUgI3Rvb2x0aXBDb250ZW50PlxuICA8c3BhbiBbaW5uZXJIdG1sXT1oZWxwVGV4dD48L3NwYW4+XG48L25nLXRlbXBsYXRlPlxuICA8c3Ryb25nPnt7dGl0bGV9fSA8c3BhbiAqbmdJZj1cIm1hcFVuaXRzXCIgW2lubmVySFRNTF09XCInKCcrbWFwVW5pdHMrJyknXCI+PC9zcGFuPlxuICAgICAgICA8c3BhbiAqbmdJZj1cImhlbHBUZXh0XCJcbiAgICAgICAgICAgICAgW25nYlRvb2x0aXBdPVwidG9vbHRpcENvbnRlbnRcIlxuICAgICAgICAgICAgICBbcGxhY2VtZW50XT1cInRvb2x0aXBQbGFjZW1lbnRcIlxuICAgICAgICAgICAgICBjb250YWluZXI9XCJib2R5XCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1pbmZvLWNpcmNsZVwiPjwvaT5cbiAgICAgICAgPC9zcGFuPlxuICA8L3N0cm9uZz5cblxuICA8ZGl2ICpuZ0lmPVwiIWltYWdlVVJMXCI+XG4gICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6dGFibGU7bGluZS1oZWlnaHQ6MTVweFwiPlxuICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6dGFibGUtcm93O3BhZGRpbmc6MDtcIlxuICAgICAgICAgICpuZ0Zvcj1cImxldCBjb2xvdXIgb2YgY29sb3VyczsgbGV0IGk9aW5kZXhcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxlZ2VuZC1jb2xvdXJcIiBbbmdDbGFzc109XCJtYXJrZXJDbGFzc2VzW2ldfHxtYXJrZXJDbGFzc2VzWzBdfHwnJ1wiPlxuICAgICAgICAgIDxpIGNsYXNzPVwibGVnZW5kLWVudHJ5XCIgW25nU3R5bGVdPVwie2JhY2tncm91bmQ6Y29sb3VyfVwiPjwvaT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZWdlbmQtbGFiZWxcIj5cbiAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImxhYmVsc1tpXVwiPjwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiAqbmdJZj1cImltYWdlVVJMXCI+XG4gICAgPGltZyBbc3JjXT1cImltYWdlVVJMXCI+XG4gIDwvZGl2PlxuICA8cCAqbmdJZj1cImF0dHJpYnV0aW9uTGlua1wiPlNvdXJjZTogPGEgW2hyZWZdPVwiYXR0cmlidXRpb25MaW5rXCI+e3thdHRyaWJ1dGlvbiB8fCAnZGV0YWlscyd9fTwvYT48L3A+XG4gIDxwICpuZ0lmPVwiYXR0cmlidXRpb24mJiFhdHRyaWJ1dGlvbkxpbmtcIj5Tb3VyY2U6IHt7YXR0cmlidXRpb259fTwvcD5cbjwvZGl2PlxuYCwgc3R5bGVzOiBbYFxuLm1hcC1sZWdlbmR7XG4gIGRpc3BsYXk6YmxvY2s7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4ubGVnZW5kLWNvbG91cntcbiAgZGlzcGxheTp0YWJsZS1jZWxsO1xuICBwYWRkaW5nOjBweDtcbn1cblxuLmxlZ2VuZC1sYWJlbHtcbiAgZGlzcGxheTp0YWJsZS1jZWxsO1xuICBwYWRkaW5nOjBweCA0cHggMnB4IDJweDtcbiAgZm9udC1zaXplOjEwcHg7XG4gIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcbn1cblxuLmxlZ2VuZC1lbnRyeSB7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTVweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLmxlZ2VuZC1jb2xvdXIuY2lyY2xlIGkubGVnZW5kLWVudHJ5IHtcbiAgYm9yZGVyLXJhZGl1czo3cHg7XG59XG5gXVxufSlcbmV4cG9ydCBjbGFzcyBMZWdlbmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjb2xvdXJzOiBBcnJheTxzdHJpbmc+ID0gWydyZWQnLCAnd2hpdGUnLCAnYmx1ZSddO1xuICBASW5wdXQoKSBsYWJlbHM6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgQElucHV0KCkgbWFya2VyQ2xhc3Nlczogc3RyaW5nW10gPSBbXTtcbiAgQElucHV0KCkgaW1hZ2VVUkw6IHN0cmluZ1xuICBASW5wdXQoKSB0aXRsZSA9ICd0aGUgdGl0bGUnO1xuICBASW5wdXQoKSBtYXBVbml0cyA9ICcnO1xuICBASW5wdXQoKSBoZWxwVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSB0b29sdGlwUGxhY2VtZW50ID0gJ3JpZ2h0JztcbiAgQElucHV0KCkgYXR0cmlidXRpb246IHN0cmluZztcbiAgQElucHV0KCkgYXR0cmlidXRpb25MaW5rOiBzdHJpbmc7XG5cbiAgZ2VuZXJhdGVkTGFiZWxzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUNvbG91cihyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyLCBhPzogbnVtYmVyKTogc3RyaW5nIHtcbiAgYSA9IChhID09PSB1bmRlZmluZWQpID8gMSA6IGE7XG4gIHJldHVybiBgcmdiKCR7cn0sJHtnfSwke2J9LCR7YX0pYDtcbn1cblxuIl19