"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneTimeSplashComponent = exports.SplashCloseMode = void 0;
const core_1 = require("@angular/core");
const ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
const store = require("store");
const i0 = require("@angular/core");
const i1 = require("@ng-bootstrap/ng-bootstrap");
const i2 = require("@angular/common");
const i3 = require("@angular/forms");
const _c0 = ["splashTemplate"];
function OneTimeSplashComponent_ng_template_0_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "h4", 7);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 8);
    i0.ɵɵlistener("click", function OneTimeSplashComponent_ng_template_0_div_0_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r8); const d_r3 = i0.ɵɵnextContext().dismiss; return d_r3("Cross click"); });
    i0.ɵɵelementStart(4, "span", 9);
    i0.ɵɵtext(5, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r4.label, "");
} }
function OneTimeSplashComponent_ng_template_0_label_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵelementStart(1, "input", 10);
    i0.ɵɵlistener("ngModelChange", function OneTimeSplashComponent_ng_template_0_label_4_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r9 = i0.ɵɵnextContext(2); return ctx_r9.doNotShow = $event; })("ngModelChange", function OneTimeSplashComponent_ng_template_0_label_4_Template_input_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r10); const ctx_r11 = i0.ɵɵnextContext(2); return ctx_r11.doNotShowClicked(); });
    i0.ɵɵelementEnd();
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
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
    i0.ɵɵlistener("click", function OneTimeSplashComponent_ng_template_0_Template_button_click_5_listener() { const c_r2 = ctx.close; return c_r2("Close click"); });
    i0.ɵɵtext(6, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r1.label);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", ctx_r1.application);
} }
const _c1 = ["*"];
var SplashCloseMode;
(function (SplashCloseMode) {
    SplashCloseMode[SplashCloseMode["NotOpened"] = 0] = "NotOpened";
    SplashCloseMode[SplashCloseMode["Accepted"] = 1] = "Accepted";
    SplashCloseMode[SplashCloseMode["Cancelled"] = 2] = "Cancelled";
})(SplashCloseMode = exports.SplashCloseMode || (exports.SplashCloseMode = {}));
class OneTimeSplashComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.label = 'About';
        this.hideMessage = 'Understood, I don’t need to see this again';
        this.showOnLaunch = true;
        this.closed = new core_1.EventEmitter();
    }
    storageKey() {
        if (!this.application) {
            return null;
        }
        return this.application + '-splash-skip';
    }
    ngAfterViewInit() {
        setTimeout(() => {
            const key = this.storageKey();
            if (key) {
                this.doNotShow = store.get(key, false);
            }
            if (this.showOnLaunch) {
                this.defaultShow();
            }
        });
    }
    defaultShow() {
        if (!this.doNotShow) {
            this.show();
        }
        else {
            this.closed.emit(SplashCloseMode.NotOpened);
        }
    }
    show() {
        this.current = this.modalService.open(this.splashTemplate, {
            size: 'lg',
            windowClass: this.klass
        });
    }
    close() {
        if (!this.current) {
            this.closed.emit(SplashCloseMode.NotOpened);
            return;
        }
        this.current.close();
        this.current = null;
        this.closed.emit(SplashCloseMode.Accepted);
    }
    doNotShowClicked() {
        const key = this.storageKey();
        if (!key) {
            return;
        }
        store.set(key, this.doNotShow);
    }
}
exports.OneTimeSplashComponent = OneTimeSplashComponent;
OneTimeSplashComponent.ɵfac = function OneTimeSplashComponent_Factory(t) { return new (t || OneTimeSplashComponent)(i0.ɵɵdirectiveInject(i1.NgbModal)); };
OneTimeSplashComponent.ɵcmp = i0.ɵɵdefineComponent({ type: OneTimeSplashComponent, selectors: [["one-time-splash"]], viewQuery: function OneTimeSplashComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.splashTemplate = _t.first);
    } }, inputs: { application: "application", label: "label", hideMessage: "hideMessage", klass: "klass", showOnLaunch: "showOnLaunch" }, outputs: { closed: "closed" }, ngContentSelectors: _c1, decls: 2, vars: 0, consts: [["splashTemplate", ""], ["class", "modal-header", 4, "ngIf"], [1, "modal-body"], [1, "modal-footer"], [4, "ngIf"], ["autofocus", "", "type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["type", "checkbox", 3, "ngModel", "ngModelChange"]], template: function OneTimeSplashComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, OneTimeSplashComponent_ng_template_0_Template, 7, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    } }, directives: [i2.NgIf, i3.CheckboxControlValueAccessor, i3.NgControlStatus, i3.NgModel], styles: [""] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(OneTimeSplashComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'one-time-splash',
                template: `<ng-template #splashTemplate let-c="close" let-d="dismiss">
  <div *ngIf="label" class="modal-header">
    <h4 class="modal-title">
      {{label}}</h4>
    <button type="button" class="close" aria-label="Close" (click)="d('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <ng-content></ng-content>
  </div>
  <div class="modal-footer">
    <label *ngIf="application">
      <input type="checkbox" [(ngModel)]="doNotShow" (ngModelChange)="doNotShowClicked()">
      &nbsp; {{hideMessage}}
    </label>
    <button autofocus type="button" class="btn btn-secondary" (click)="c('Close click')">Close</button>
  </div>
  </ng-template>
`,
                styles: [``]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lLXRpbWUtc3BsYXNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLWxlYWZsZXQvIiwic291cmNlcyI6WyJvbmUtdGltZS1zcGxhc2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUE2RztBQUM3Ryw2REFBbUU7QUFDbkUsK0JBQStCOzs7Ozs7OztJQVc3Qiw4QkFDRTtJQUFBLDZCQUNFO0lBQUEsWUFBUztJQUFBLGlCQUFLO0lBQ2hCLGlDQUNFO0lBRHFELDRMQUFXLGFBQWEsS0FBRTtJQUMvRSwrQkFBeUI7SUFBQSxzQkFBTztJQUFBLGlCQUFPO0lBQ3pDLGlCQUFTO0lBQ1gsaUJBQU07OztJQUpGLGVBQVM7SUFBVCw0Q0FBUzs7OztJQVNYLDZCQUNFO0lBQUEsaUNBQ0E7SUFEdUIsdU9BQXVCLHNOQUFBO0lBQTlDLGlCQUNBO0lBQUEsWUFDRjtJQUFBLGlCQUFROzs7SUFGaUIsZUFBdUI7SUFBdkIsMENBQXVCO0lBQzlDLGVBQ0Y7SUFERSwwREFDRjs7O0lBZEYscUZBTU07SUFDTiw4QkFDRTtJQUFBLGtCQUF5QjtJQUMzQixpQkFBTTtJQUNOLDhCQUNFO0lBQUEseUZBR1E7SUFDUixpQ0FBcUY7SUFBM0IsOElBQVcsYUFBYSxLQUFFO0lBQUMscUJBQUs7SUFBQSxpQkFBUztJQUNyRyxpQkFBTTs7O0lBaEJBLG1DQUFXO0lBV1AsZUFBaUI7SUFBakIseUNBQWlCOzs7QUFwQjdCLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUN6QiwrREFBUyxDQUFBO0lBQ1QsNkRBQVEsQ0FBQTtJQUNSLCtEQUFTLENBQUE7QUFDWCxDQUFDLEVBSlcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFJMUI7QUFFRCxNQXdCYSxzQkFBc0I7SUFXakMsWUFBb0IsWUFBc0I7UUFBdEIsaUJBQVksR0FBWixZQUFZLENBQVU7UUFSakMsVUFBSyxHQUFHLE9BQU8sQ0FBQztRQUNoQixnQkFBVyxHQUFHLDRDQUE0QyxDQUFDO1FBRTNELGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ25CLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQW1CLENBQUM7SUFNdkQsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBQztZQUNuQixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxJQUFJLENBQUMsV0FBVyxHQUFJLGNBQWMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsZUFBZTtRQUNiLFVBQVUsQ0FBQyxHQUFFLEVBQUU7WUFDYixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDOUIsSUFBRyxHQUFHLEVBQUM7Z0JBQ0wsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxLQUFLLENBQUMsQ0FBQzthQUN2QztZQUVELElBQUcsSUFBSSxDQUFDLFlBQVksRUFBQztnQkFDbkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3BCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFDO1lBQ2pCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNiO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBQztZQUN4RCxJQUFJLEVBQUMsSUFBSTtZQUNULFdBQVcsRUFBQyxJQUFJLENBQUMsS0FBSztTQUN2QixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSztRQUNILElBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFDO1lBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVDLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBQyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDOUIsSUFBRyxDQUFDLEdBQUcsRUFBQztZQUNOLE9BQU87U0FDUjtRQUVELEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoQyxDQUFDOztBQTdGSCx3REE4RkM7NEZBdEVZLHNCQUFzQjsyREFBdEIsc0JBQXNCOzs7Ozs7O1FBdEJ0Qix3SEFrQkc7O2tEQUlILHNCQUFzQjtjQXhCbEMsZ0JBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FtQlg7Z0JBQ0MsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ2I7MkRBRTZDLGNBQWM7a0JBQXpELGdCQUFTO21CQUFDLGdCQUFnQixFQUFDLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQztZQUNqQyxXQUFXO2tCQUFuQixZQUFLO1lBQ0csS0FBSztrQkFBYixZQUFLO1lBQ0csV0FBVztrQkFBbkIsWUFBSztZQUNHLEtBQUs7a0JBQWIsWUFBSztZQUNHLFlBQVk7a0JBQXBCLFlBQUs7WUFDSSxNQUFNO2tCQUFmLGFBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ2JNb2RhbCwgTmdiTW9kYWxSZWYgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5pbXBvcnQgKiBhcyBzdG9yZSBmcm9tICdzdG9yZSc7XG5cbmV4cG9ydCBlbnVtIFNwbGFzaENsb3NlTW9kZSB7XG4gIE5vdE9wZW5lZCxcbiAgQWNjZXB0ZWQsXG4gIENhbmNlbGxlZFxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdvbmUtdGltZS1zcGxhc2gnLFxuICB0ZW1wbGF0ZTogYDxuZy10ZW1wbGF0ZSAjc3BsYXNoVGVtcGxhdGUgbGV0LWM9XCJjbG9zZVwiIGxldC1kPVwiZGlzbWlzc1wiPlxuICA8ZGl2ICpuZ0lmPVwibGFiZWxcIiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxuICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+XG4gICAgICB7e2xhYmVsfX08L2g0PlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiAoY2xpY2spPVwiZCgnQ3Jvc3MgY2xpY2snKVwiPlxuICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxuICAgIDxsYWJlbCAqbmdJZj1cImFwcGxpY2F0aW9uXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgWyhuZ01vZGVsKV09XCJkb05vdFNob3dcIiAobmdNb2RlbENoYW5nZSk9XCJkb05vdFNob3dDbGlja2VkKClcIj5cbiAgICAgICZuYnNwOyB7e2hpZGVNZXNzYWdlfX1cbiAgICA8L2xhYmVsPlxuICAgIDxidXR0b24gYXV0b2ZvY3VzIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5XCIgKGNsaWNrKT1cImMoJ0Nsb3NlIGNsaWNrJylcIj5DbG9zZTwvYnV0dG9uPlxuICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cbmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBPbmVUaW1lU3BsYXNoQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCAge1xuICBAVmlld0NoaWxkKCdzcGxhc2hUZW1wbGF0ZScse3N0YXRpYzpmYWxzZX0pIHNwbGFzaFRlbXBsYXRlOmFueTtcbiAgQElucHV0KCkgYXBwbGljYXRpb246c3RyaW5nO1xuICBASW5wdXQoKSBsYWJlbCA9ICdBYm91dCc7XG4gIEBJbnB1dCgpIGhpZGVNZXNzYWdlID0gJ1VuZGVyc3Rvb2QsIEkgZG9u4oCZdCBuZWVkIHRvIHNlZSB0aGlzIGFnYWluJztcbiAgQElucHV0KCkga2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgc2hvd09uTGF1bmNoID0gdHJ1ZTtcbiAgQE91dHB1dCgpIGNsb3NlZCA9IG5ldyBFdmVudEVtaXR0ZXI8U3BsYXNoQ2xvc2VNb2RlPigpO1xuICBkb05vdFNob3c6IGJvb2xlYW47XG4gIGN1cnJlbnQ6TmdiTW9kYWxSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsKXtcblxuICB9XG5cbiAgc3RvcmFnZUtleSgpOiBzdHJpbmcge1xuICAgIGlmKCF0aGlzLmFwcGxpY2F0aW9uKXtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmFwcGxpY2F0aW9uICArICctc3BsYXNoLXNraXAnO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuc3RvcmFnZUtleSgpO1xuICAgICAgaWYoa2V5KXtcbiAgICAgICAgdGhpcy5kb05vdFNob3cgPSBzdG9yZS5nZXQoa2V5LGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5zaG93T25MYXVuY2gpe1xuICAgICAgICB0aGlzLmRlZmF1bHRTaG93KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBkZWZhdWx0U2hvdygpOiB2b2lkIHtcbiAgICBpZighdGhpcy5kb05vdFNob3cpe1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xvc2VkLmVtaXQoU3BsYXNoQ2xvc2VNb2RlLk5vdE9wZW5lZCk7XG4gICAgfVxuICB9XG5cbiAgc2hvdygpOiB2b2lkIHtcbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKHRoaXMuc3BsYXNoVGVtcGxhdGUse1xuICAgICAgc2l6ZTonbGcnLFxuICAgICAgd2luZG93Q2xhc3M6dGhpcy5rbGFzc1xuICAgIH0pO1xuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgaWYoIXRoaXMuY3VycmVudCl7XG4gICAgICB0aGlzLmNsb3NlZC5lbWl0KFNwbGFzaENsb3NlTW9kZS5Ob3RPcGVuZWQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY3VycmVudC5jbG9zZSgpO1xuICAgIHRoaXMuY3VycmVudD1udWxsO1xuICAgIHRoaXMuY2xvc2VkLmVtaXQoU3BsYXNoQ2xvc2VNb2RlLkFjY2VwdGVkKTtcbiAgfVxuXG4gIGRvTm90U2hvd0NsaWNrZWQoKTogdm9pZCB7XG4gICAgY29uc3Qga2V5ID0gdGhpcy5zdG9yYWdlS2V5KCk7XG4gICAgaWYoIWtleSl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc3RvcmUuc2V0KGtleSx0aGlzLmRvTm90U2hvdyk7XG4gIH1cbn1cbiJdfQ==