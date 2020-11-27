"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneTimeSplashComponent = exports.SplashCloseMode = void 0;
var core_1 = require("@angular/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var store = require("store");
var i0 = require("@angular/core");
var i1 = require("@ng-bootstrap/ng-bootstrap");
var i2 = require("@angular/common");
var i3 = require("@angular/forms");
var _c0 = ["splashTemplate"];
function OneTimeSplashComponent_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "h4", 7);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 8);
    i0.ɵɵlistener("click", function OneTimeSplashComponent_ng_template_0_div_0_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r8); var d_r3 = i0.ɵɵnextContext().dismiss; return d_r3("Cross click"); });
    i0.ɵɵelementStart(4, "span", 9);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.label, "");
} }
function OneTimeSplashComponent_ng_template_0_label_4_Template(rf, ctx) { if (rf & 1) {
    var _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵelementStart(1, "input", 10);
    i0.ɵɵlistener("ngModelChange", function OneTimeSplashComponent_ng_template_0_label_4_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r10); var ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.doNotShow = $event; })("ngModelChange", function OneTimeSplashComponent_ng_template_0_label_4_Template_input_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r10); var ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.doNotShowClicked(); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngModel", ctx_r5.doNotShow);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" \u00A0 ", ctx_r5.hideMessage, " ");
} }
function OneTimeSplashComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, OneTimeSplashComponent_ng_template_0_div_0_Template, 6, 1, "div", 1);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵprojection(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 3);
    i0.ɵɵtemplate(4, OneTimeSplashComponent_ng_template_0_label_4_Template, 3, 2, "label", 4);
    i0.ɵɵelementStart(5, "button", 5);
    i0.ɵɵlistener("click", function OneTimeSplashComponent_ng_template_0_Template_button_click_5_listener() { var c_r2 = ctx.close; return c_r2("Close click"); });
    i0.ɵɵtext(6, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r1.label);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.application);
} }
var _c1 = ["*"];
var SplashCloseMode;
(function (SplashCloseMode) {
    SplashCloseMode[SplashCloseMode["NotOpened"] = 0] = "NotOpened";
    SplashCloseMode[SplashCloseMode["Accepted"] = 1] = "Accepted";
    SplashCloseMode[SplashCloseMode["Cancelled"] = 2] = "Cancelled";
})(SplashCloseMode = exports.SplashCloseMode || (exports.SplashCloseMode = {}));
var OneTimeSplashComponent = /** @class */ (function () {
    function OneTimeSplashComponent(modalService) {
        this.modalService = modalService;
        this.label = 'About';
        this.hideMessage = 'Understood, I don’t need to see this again';
        this.showOnLaunch = true;
        this.closed = new core_1.EventEmitter();
    }
    OneTimeSplashComponent.prototype.storageKey = function () {
        if (!this.application) {
            return null;
        }
        return this.application + '-splash-skip';
    };
    OneTimeSplashComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            var key = _this.storageKey();
            if (key) {
                _this.doNotShow = store.get(key, false);
            }
            if (_this.showOnLaunch) {
                _this.defaultShow();
            }
        });
    };
    OneTimeSplashComponent.prototype.defaultShow = function () {
        if (!this.doNotShow) {
            this.show();
        }
        else {
            this.closed.emit(SplashCloseMode.NotOpened);
        }
    };
    OneTimeSplashComponent.prototype.show = function () {
        this.current = this.modalService.open(this.splashTemplate, {
            size: 'lg',
            windowClass: this.klass
        });
    };
    OneTimeSplashComponent.prototype.close = function () {
        if (!this.current) {
            this.closed.emit(SplashCloseMode.NotOpened);
            return;
        }
        this.current.close();
        this.current = null;
        this.closed.emit(SplashCloseMode.Accepted);
    };
    OneTimeSplashComponent.prototype.doNotShowClicked = function () {
        var key = this.storageKey();
        if (!key) {
            return;
        }
        store.set(key, this.doNotShow);
    };
    OneTimeSplashComponent.ɵfac = function OneTimeSplashComponent_Factory(t) { return new (t || OneTimeSplashComponent)(i0.ɵɵdirectiveInject(i1.NgbModal)); };
    OneTimeSplashComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OneTimeSplashComponent, selectors: [["one-time-splash"]], viewQuery: function OneTimeSplashComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.splashTemplate = _t.first);
        } }, inputs: { application: "application", label: "label", hideMessage: "hideMessage", klass: "klass", showOnLaunch: "showOnLaunch" }, outputs: { closed: "closed" }, ngContentSelectors: _c1, decls: 2, vars: 0, consts: [["splashTemplate", ""], ["class", "modal-header", 4, "ngIf"], [1, "modal-body"], [1, "modal-footer"], [4, "ngIf"], ["autofocus", "", "type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["type", "checkbox", 3, "ngModel", "ngModelChange"]], template: function OneTimeSplashComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, OneTimeSplashComponent_ng_template_0_Template, 7, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } }, directives: [i2.NgIf, i3.CheckboxControlValueAccessor, i3.NgControlStatus, i3.NgModel], styles: [""] });
    return OneTimeSplashComponent;
}());
exports.OneTimeSplashComponent = OneTimeSplashComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OneTimeSplashComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'one-time-splash',
                template: "<ng-template #splashTemplate let-c=\"close\" let-d=\"dismiss\">\n  <div *ngIf=\"label\" class=\"modal-header\">\n    <h4 class=\"modal-title\">\n      {{label}}</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <ng-content></ng-content>\n  </div>\n  <div class=\"modal-footer\">\n    <label *ngIf=\"application\">\n      <input type=\"checkbox\" [(ngModel)]=\"doNotShow\" (ngModelChange)=\"doNotShowClicked()\">\n      &nbsp; {{hideMessage}}\n    </label>\n    <button autofocus type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\n  </div>\n  </ng-template>\n",
                styles: [""]
            }]
    }], function () { return [{ type: i1.NgbModal }]; }, { splashTemplate: [{
            type: core_1.ViewChild,
            args: ['splashTemplate', { static: false }]
        }], application: [{
            type: core_1.Input
        }], label: [{
            type: core_1.Input
        }], hideMessage: [{
            type: core_1.Input
        }], klass: [{
            type: core_1.Input
        }], showOnLaunch: [{
            type: core_1.Input
        }], closed: [{
            type: core_1.Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lLXRpbWUtc3BsYXNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLWxlYWZsZXQvIiwic291cmNlcyI6WyJvbmUtdGltZS1zcGxhc2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUE2RztBQUM3RywyREFBbUU7QUFDbkUsNkJBQStCOzs7Ozs7OztJQVc3Qiw4QkFDRTtJQUFBLDZCQUNFO0lBQUEsWUFBUztJQUFBLGlCQUFLO0lBQ2hCLGlDQUNFO0lBRHFELDBMQUFXLGFBQWEsS0FBRTtJQUMvRSwrQkFBeUI7SUFBQSxzQkFBTztJQUFBLGlCQUFPO0lBQ3pDLGlCQUFTO0lBQ1gsaUJBQU07OztJQUpGLGVBQVM7SUFBVCw0Q0FBUzs7OztJQVNYLDZCQUNFO0lBQUEsaUNBQ0E7SUFEdUIscU9BQXVCLG9OQUFBO0lBQTlDLGlCQUNBO0lBQUEsWUFDRjtJQUFBLGlCQUFROzs7SUFGaUIsZUFBdUI7SUFBdkIsMENBQXVCO0lBQzlDLGVBQ0Y7SUFERSwwREFDRjs7O0lBZEYscUZBTU07SUFDTiw4QkFDRTtJQUFBLGtCQUF5QjtJQUMzQixpQkFBTTtJQUNOLDhCQUNFO0lBQUEseUZBR1E7SUFDUixpQ0FBcUY7SUFBM0IsNElBQVcsYUFBYSxLQUFFO0lBQUMscUJBQUs7SUFBQSxpQkFBUztJQUNyRyxpQkFBTTs7O0lBaEJBLG1DQUFXO0lBV1AsZUFBaUI7SUFBakIseUNBQWlCOzs7QUFwQjdCLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUN6QiwrREFBUyxDQUFBO0lBQ1QsNkRBQVEsQ0FBQTtJQUNSLCtEQUFTLENBQUE7QUFDWCxDQUFDLEVBSlcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFJMUI7QUFFRDtJQW1DRSxnQ0FBb0IsWUFBc0I7UUFBdEIsaUJBQVksR0FBWixZQUFZLENBQVU7UUFSakMsVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUNoQixnQkFBVyxHQUFHLDRDQUE0QyxDQUFDO1FBRTNELGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ25CLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQW1CLENBQUM7SUFNdkQsQ0FBQztJQUVELDJDQUFVLEdBQVY7UUFDRSxJQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQztZQUNuQixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxJQUFJLENBQUMsV0FBVyxHQUFJLGNBQWMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsZ0RBQWUsR0FBZjtRQUFBLGlCQVdDO1FBVkMsVUFBVSxDQUFDO1lBQ1QsSUFBTSxHQUFHLEdBQUcsS0FBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQzlCLElBQUcsR0FBRyxFQUFDO2dCQUNMLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsS0FBSyxDQUFDLENBQUM7YUFDdkM7WUFFRCxJQUFHLEtBQUksQ0FBQyxZQUFZLEVBQUM7Z0JBQ25CLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNwQjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDRDQUFXLEdBQVg7UUFDRSxJQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQztZQUNqQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQztJQUVELHFDQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUM7WUFDeEQsSUFBSSxFQUFDLElBQUk7WUFDVCxXQUFXLEVBQUMsSUFBSSxDQUFDLEtBQUs7U0FDdkIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHNDQUFLLEdBQUw7UUFDRSxJQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM1QyxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUMsSUFBSSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsaURBQWdCLEdBQWhCO1FBQ0UsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzlCLElBQUcsQ0FBQyxHQUFHLEVBQUM7WUFDTixPQUFPO1NBQ1I7UUFFRCxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEMsQ0FBQztnR0FyRVUsc0JBQXNCOytEQUF0QixzQkFBc0I7Ozs7Ozs7WUF0QnRCLHdIQWtCRzs7aUNBOUJoQjtDQXdHQyxBQTlGRCxJQThGQztBQXRFWSx3REFBc0I7a0RBQXRCLHNCQUFzQjtjQXhCbEMsZ0JBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsc3ZCQW1CWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7YUFDYjsyREFFNkMsY0FBYztrQkFBekQsZ0JBQVM7bUJBQUMsZ0JBQWdCLEVBQUMsRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDO1lBQ2pDLFdBQVc7a0JBQW5CLFlBQUs7WUFDRyxLQUFLO2tCQUFiLFlBQUs7WUFDRyxXQUFXO2tCQUFuQixZQUFLO1lBQ0csS0FBSztrQkFBYixZQUFLO1lBQ0csWUFBWTtrQkFBcEIsWUFBSztZQUNJLE1BQU07a0JBQWYsYUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nYk1vZGFsLCBOZ2JNb2RhbFJlZiB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcbmltcG9ydCAqIGFzIHN0b3JlIGZyb20gJ3N0b3JlJztcblxuZXhwb3J0IGVudW0gU3BsYXNoQ2xvc2VNb2RlIHtcbiAgTm90T3BlbmVkLFxuICBBY2NlcHRlZCxcbiAgQ2FuY2VsbGVkXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29uZS10aW1lLXNwbGFzaCcsXG4gIHRlbXBsYXRlOiBgPG5nLXRlbXBsYXRlICNzcGxhc2hUZW1wbGF0ZSBsZXQtYz1cImNsb3NlXCIgbGV0LWQ9XCJkaXNtaXNzXCI+XG4gIDxkaXYgKm5nSWY9XCJsYWJlbFwiIGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5cbiAgICAgIHt7bGFiZWx9fTwvaDQ+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIChjbGljayk9XCJkKCdDcm9zcyBjbGljaycpXCI+XG4gICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgPGxhYmVsICpuZ0lmPVwiYXBwbGljYXRpb25cIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbKG5nTW9kZWwpXT1cImRvTm90U2hvd1wiIChuZ01vZGVsQ2hhbmdlKT1cImRvTm90U2hvd0NsaWNrZWQoKVwiPlxuICAgICAgJm5ic3A7IHt7aGlkZU1lc3NhZ2V9fVxuICAgIDwvbGFiZWw+XG4gICAgPGJ1dHRvbiBhdXRvZm9jdXMgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiAoY2xpY2spPVwiYygnQ2xvc2UgY2xpY2snKVwiPkNsb3NlPC9idXR0b24+XG4gIDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuYCxcbiAgc3R5bGVzOiBbYGBdXG59KVxuZXhwb3J0IGNsYXNzIE9uZVRpbWVTcGxhc2hDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0ICB7XG4gIEBWaWV3Q2hpbGQoJ3NwbGFzaFRlbXBsYXRlJyx7c3RhdGljOmZhbHNlfSkgc3BsYXNoVGVtcGxhdGU6YW55O1xuICBASW5wdXQoKSBhcHBsaWNhdGlvbjpzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsID0gJ0Fib3V0JztcbiAgQElucHV0KCkgaGlkZU1lc3NhZ2UgPSAnVW5kZXJzdG9vZCwgSSBkb27igJl0IG5lZWQgdG8gc2VlIHRoaXMgYWdhaW4nO1xuICBASW5wdXQoKSBrbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBzaG93T25MYXVuY2ggPSB0cnVlO1xuICBAT3V0cHV0KCkgY2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjxTcGxhc2hDbG9zZU1vZGU+KCk7XG4gIGRvTm90U2hvdzogYm9vbGVhbjtcbiAgY3VycmVudDpOZ2JNb2RhbFJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWwpe1xuXG4gIH1cblxuICBzdG9yYWdlS2V5KCk6IHN0cmluZyB7XG4gICAgaWYoIXRoaXMuYXBwbGljYXRpb24pe1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuYXBwbGljYXRpb24gICsgJy1zcGxhc2gtc2tpcCc7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgY29uc3Qga2V5ID0gdGhpcy5zdG9yYWdlS2V5KCk7XG4gICAgICBpZihrZXkpe1xuICAgICAgICB0aGlzLmRvTm90U2hvdyA9IHN0b3JlLmdldChrZXksZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLnNob3dPbkxhdW5jaCl7XG4gICAgICAgIHRoaXMuZGVmYXVsdFNob3coKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGRlZmF1bHRTaG93KCk6IHZvaWQge1xuICAgIGlmKCF0aGlzLmRvTm90U2hvdyl7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbG9zZWQuZW1pdChTcGxhc2hDbG9zZU1vZGUuTm90T3BlbmVkKTtcbiAgICB9XG4gIH1cblxuICBzaG93KCk6IHZvaWQge1xuICAgIHRoaXMuY3VycmVudCA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4odGhpcy5zcGxhc2hUZW1wbGF0ZSx7XG4gICAgICBzaXplOidsZycsXG4gICAgICB3aW5kb3dDbGFzczp0aGlzLmtsYXNzXG4gICAgfSk7XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICBpZighdGhpcy5jdXJyZW50KXtcbiAgICAgIHRoaXMuY2xvc2VkLmVtaXQoU3BsYXNoQ2xvc2VNb2RlLk5vdE9wZW5lZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50LmNsb3NlKCk7XG4gICAgdGhpcy5jdXJyZW50PW51bGw7XG4gICAgdGhpcy5jbG9zZWQuZW1pdChTcGxhc2hDbG9zZU1vZGUuQWNjZXB0ZWQpO1xuICB9XG5cbiAgZG9Ob3RTaG93Q2xpY2tlZCgpOiB2b2lkIHtcbiAgICBjb25zdCBrZXkgPSB0aGlzLnN0b3JhZ2VLZXkoKTtcbiAgICBpZigha2V5KXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzdG9yZS5zZXQoa2V5LHRoaXMuZG9Ob3RTaG93KTtcbiAgfVxufVxuIl19