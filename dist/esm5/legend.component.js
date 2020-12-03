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
    LegendComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LegendComponent, selectors: [["legend"]], inputs: { colours: "colours", labels: "labels", imageURL: "imageURL", title: "title", mapUnits: "mapUnits", helpText: "helpText", tooltipPlacement: "tooltipPlacement", attribution: "attribution", attributionLink: "attributionLink" }, decls: 11, vars: 7, consts: [[1, "map-legend", "panel", "panel-group"], ["tooltipContent", ""], [3, "innerHTML", 4, "ngIf"], ["container", "body", 3, "ngbTooltip", "placement", 4, "ngIf"], [4, "ngIf"], [3, "innerHtml"], [3, "innerHTML"], ["container", "body", 3, "ngbTooltip", "placement"], [1, "fa", "fa-info-circle"], [2, "display", "table", "line-height", "15px"], ["style", "display:table-row;padding:0;", 4, "ngFor", "ngForOf"], [2, "display", "table-row", "padding", "0"], [1, "legend-colour"], [1, "legend-entry", 3, "ngStyle"], [1, "legend-label"], [3, "src"], [3, "href"]], template: function LegendComponent_Template(rf, ctx) { if (rf & 1) {
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
                selector: 'legend',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVnZW5kLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLWxlYWZsZXQvIiwic291cmNlcyI6WyJsZWdlbmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF5RDs7Ozs7SUFNdkQsMEJBQWtDOzs7SUFBNUIsOERBQW9COzs7SUFFUiwwQkFBNkQ7OztJQUF0QywwRUFBOEI7OztJQUNqRSwrQkFJRTtJQUFBLHVCQUFpQztJQUNuQyxpQkFBTzs7OztJQUpELGdDQUE2QixzQ0FBQTs7OztJQVNyQywrQkFFRTtJQUFBLCtCQUNFO0lBQUEsd0JBQTREO0lBQzlELGlCQUFNO0lBQ04sK0JBQ0U7SUFBQSwwQkFBcUM7SUFDdkMsaUJBQU07SUFDUixpQkFBTTs7Ozs7SUFMc0IsZUFBK0I7SUFBL0IsK0RBQStCO0lBR2pELGVBQXVCO0lBQXZCLG1FQUF1Qjs7O0lBUnJDLDJCQUNFO0lBQUEsOEJBQ0U7SUFBQSx1RUFRTTtJQUNSLGlCQUFNO0lBQ1IsaUJBQU07OztJQVRxQixlQUFZO0lBQVosd0NBQVk7OztJQVd2QywyQkFDRTtJQUFBLDBCQUNGO0lBQUEsaUJBQU07OztJQURDLGVBQWdCO0lBQWhCLHVEQUFnQjs7O0lBRXZCLHlCQUEyQjtJQUFBLHdCQUFRO0lBQUEsNkJBQTRCO0lBQUEsWUFBNEI7SUFBQSxpQkFBSTtJQUFBLGlCQUFJOzs7SUFBN0QsZUFBd0I7SUFBeEIsK0RBQXdCO0lBQUMsZUFBNEI7SUFBNUIscURBQTRCOzs7SUFDM0YseUJBQXlDO0lBQUEsWUFBdUI7SUFBQSxpQkFBSTs7O0lBQTNCLGVBQXVCO0lBQXZCLHlEQUF1Qjs7QUFqQ2xFO0lBMEVFO1FBYlMsWUFBTyxHQUFrQixDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbEQsV0FBTSxHQUFrQixFQUFFLENBQUM7UUFHM0IsVUFBSyxHQUFHLFdBQVcsQ0FBQztRQUNwQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBRWQscUJBQWdCLEdBQUcsT0FBTyxDQUFDO1FBSXBDLG9CQUFlLEdBQWEsRUFBRSxDQUFDO0lBRWYsQ0FBQztJQUVqQixrQ0FBUSxHQUFSO0lBQ0EsQ0FBQztrRkFqQlUsZUFBZTt3REFBZixlQUFlO1lBMURmLDhCQUNiO1lBQUEsaUhBRWM7WUFDWiw4QkFBUTtZQUFBLFlBQVU7WUFBQSxrRUFBNkQ7WUFDekUsa0VBS087WUFDYixpQkFBUztZQUVULGdFQVlNO1lBRU4sZ0VBRU07WUFDTiw0REFBbUc7WUFDbkcsOERBQW9FO1lBQ3RFLGlCQUFNOztZQTVCSSxlQUFVO1lBQVYseUNBQVU7WUFBTyxlQUFjO1lBQWQsbUNBQWM7WUFDMUIsZUFBYztZQUFkLG1DQUFjO1lBUXJCLGVBQWU7WUFBZixvQ0FBZTtZQWNmLGVBQWM7WUFBZCxtQ0FBYztZQUdoQixlQUFxQjtZQUFyQiwwQ0FBcUI7WUFDckIsZUFBbUM7WUFBbkMsOERBQW1DOzswQkFuQ3pDO0NBaUZDLEFBL0VELElBK0VDO0FBbkJZLDBDQUFlO2tEQUFmLGVBQWU7Y0E1RDNCLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFFBQVEsRUFBRSxncUNBaUNYLEVBQUUsTUFBTSxFQUFFLENBQUMsNFVBdUJYLENBQUM7YUFDRDtzQ0FFVSxPQUFPO2tCQUFmLFlBQUs7WUFDRyxNQUFNO2tCQUFkLFlBQUs7WUFFRyxRQUFRO2tCQUFoQixZQUFLO1lBQ0csS0FBSztrQkFBYixZQUFLO1lBQ0csUUFBUTtrQkFBaEIsWUFBSztZQUNHLFFBQVE7a0JBQWhCLFlBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLFlBQUs7WUFDRyxXQUFXO2tCQUFuQixZQUFLO1lBQ0csZUFBZTtrQkFBdkIsWUFBSzs7QUFXUixTQUFnQixVQUFVLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBVTtJQUNwRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlCLE9BQU8sU0FBTyxDQUFDLFNBQUksQ0FBQyxTQUFJLENBQUMsU0FBSSxDQUFDLE1BQUcsQ0FBQztBQUNwQyxDQUFDO0FBSEQsZ0NBR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGVnZW5kJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibWFwLWxlZ2VuZCBwYW5lbCBwYW5lbC1ncm91cFwiPlxuPG5nLXRlbXBsYXRlICN0b29sdGlwQ29udGVudD5cbiAgPHNwYW4gW2lubmVySHRtbF09aGVscFRleHQ+PC9zcGFuPlxuPC9uZy10ZW1wbGF0ZT5cbiAgPHN0cm9uZz57e3RpdGxlfX0gPHNwYW4gKm5nSWY9XCJtYXBVbml0c1wiIFtpbm5lckhUTUxdPVwiJygnK21hcFVuaXRzKycpJ1wiPjwvc3Bhbj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJoZWxwVGV4dFwiXG4gICAgICAgICAgICAgIFtuZ2JUb29sdGlwXT1cInRvb2x0aXBDb250ZW50XCJcbiAgICAgICAgICAgICAgW3BsYWNlbWVudF09XCJ0b29sdGlwUGxhY2VtZW50XCJcbiAgICAgICAgICAgICAgY29udGFpbmVyPVwiYm9keVwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtaW5mby1jaXJjbGVcIj48L2k+XG4gICAgICAgIDwvc3Bhbj5cbiAgPC9zdHJvbmc+XG5cbiAgPGRpdiAqbmdJZj1cIiFpbWFnZVVSTFwiPlxuICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OnRhYmxlO2xpbmUtaGVpZ2h0OjE1cHhcIj5cbiAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OnRhYmxlLXJvdztwYWRkaW5nOjA7XCJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgY29sb3VyIG9mIGNvbG91cnM7IGxldCBpPWluZGV4XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZWdlbmQtY29sb3VyXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJsZWdlbmQtZW50cnlcIiBbbmdTdHlsZV09XCJ7YmFja2dyb3VuZDpjb2xvdXJ9XCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImxlZ2VuZC1sYWJlbFwiPlxuICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwibGFiZWxzW2ldXCI+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2ICpuZ0lmPVwiaW1hZ2VVUkxcIj5cbiAgICA8aW1nIFtzcmNdPVwiaW1hZ2VVUkxcIj5cbiAgPC9kaXY+XG4gIDxwICpuZ0lmPVwiYXR0cmlidXRpb25MaW5rXCI+U291cmNlOiA8YSBbaHJlZl09XCJhdHRyaWJ1dGlvbkxpbmtcIj57e2F0dHJpYnV0aW9uIHx8ICdkZXRhaWxzJ319PC9hPjwvcD5cbiAgPHAgKm5nSWY9XCJhdHRyaWJ1dGlvbiYmIWF0dHJpYnV0aW9uTGlua1wiPlNvdXJjZToge3thdHRyaWJ1dGlvbn19PC9wPlxuPC9kaXY+XG5gLCBzdHlsZXM6IFtgXG4ubWFwLWxlZ2VuZHtcbiAgZGlzcGxheTpibG9jaztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5sZWdlbmQtY29sb3Vye1xuICBkaXNwbGF5OnRhYmxlLWNlbGw7XG4gIHBhZGRpbmc6MHB4O1xufVxuXG4ubGVnZW5kLWxhYmVse1xuICBkaXNwbGF5OnRhYmxlLWNlbGw7XG4gIHBhZGRpbmc6MHB4IDRweCAycHggMnB4O1xuICBmb250LXNpemU6MTBweDtcbiAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xufVxuXG4ubGVnZW5kLWVudHJ5IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxNXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xufVxuYF1cbn0pXG5leHBvcnQgY2xhc3MgTGVnZW5kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY29sb3VyczogQXJyYXk8c3RyaW5nPiA9IFsncmVkJywgJ3doaXRlJywgJ2JsdWUnXTtcbiAgQElucHV0KCkgbGFiZWxzOiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgQElucHV0KCkgaW1hZ2VVUkw6IHN0cmluZ1xuICBASW5wdXQoKSB0aXRsZSA9ICd0aGUgdGl0bGUnO1xuICBASW5wdXQoKSBtYXBVbml0cyA9ICcnO1xuICBASW5wdXQoKSBoZWxwVGV4dDogc3RyaW5nO1xuICBASW5wdXQoKSB0b29sdGlwUGxhY2VtZW50ID0gJ3JpZ2h0JztcbiAgQElucHV0KCkgYXR0cmlidXRpb246IHN0cmluZztcbiAgQElucHV0KCkgYXR0cmlidXRpb25MaW5rOiBzdHJpbmc7XG5cbiAgZ2VuZXJhdGVkTGFiZWxzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUNvbG91cihyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyLCBhPzogbnVtYmVyKTogc3RyaW5nIHtcbiAgYSA9IChhID09PSB1bmRlZmluZWQpID8gMSA6IGE7XG4gIHJldHVybiBgcmdiKCR7cn0sJHtnfSwke2J9LCR7YX0pYDtcbn1cblxuIl19