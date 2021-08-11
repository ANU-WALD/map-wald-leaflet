"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WmsLayerComponent = void 0;
const core_1 = require("@angular/core");
const leaflet_service_1 = require("./leaflet.service");
const L = require("leaflet");
const i0 = require("@angular/core");
const i1 = require("./leaflet.service");
const DEFAULT_WMS_PARAMS = {
    format: 'image/png',
    transparent: true
};
class WmsLayerComponent {
    constructor(map) {
        this.map = map;
        this.params = {};
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        this.map.map.then(m => {
            if (this.layer) {
                this.layer.removeFrom(m);
                this.layer = null;
            }
            if (!this.url || !this.params) {
                return;
            }
            const params = Object.assign({}, DEFAULT_WMS_PARAMS, this.params);
            this.layer = L.tileLayer.wms(this.url, params);
            // this.layer.options.noWrap = true;
            this.layer.addTo(m);
        });
    }
}
exports.WmsLayerComponent = WmsLayerComponent;
WmsLayerComponent.ɵfac = function WmsLayerComponent_Factory(t) { return new (t || WmsLayerComponent)(i0.ɵɵdirectiveInject(i1.LeafletService)); };
WmsLayerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: WmsLayerComponent, selectors: [["wms-layer"]], inputs: { url: "url", params: "params" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function WmsLayerComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(WmsLayerComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'wms-layer',
                template: '',
                styles: []
            }]
    }], function () { return [{ type: i1.LeafletService }]; }, { url: [{
            type: core_1.Input
        }], params: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid21zLWxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLWxlYWZsZXQvIiwic291cmNlcyI6WyJ3bXMtbGF5ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFtRjtBQUNuRix1REFBbUQ7QUFDbkQsNkJBQTZCOzs7QUFFN0IsTUFBTSxrQkFBa0IsR0FBRztJQUN6QixNQUFNLEVBQUUsV0FBVztJQUNuQixXQUFXLEVBQUUsSUFBSTtDQUNsQixDQUFDO0FBRUYsTUFLYSxpQkFBaUI7SUFLNUIsWUFBb0IsR0FBbUI7UUFBbkIsUUFBRyxHQUFILEdBQUcsQ0FBZ0I7UUFIOUIsV0FBTSxHQUFRLEVBQUUsQ0FBQztJQUdpQixDQUFDO0lBRTVDLFFBQVE7SUFDUixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUEsRUFBRTtZQUNuQixJQUFHLElBQUksQ0FBQyxLQUFLLEVBQUM7Z0JBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ25CO1lBQ0QsSUFBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO2dCQUN6QixPQUFPO2FBQ1I7WUFFRCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBQyxrQkFBa0IsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFDLE1BQXNCLENBQUMsQ0FBQztZQUM5RCxvQ0FBb0M7WUFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztBQTlCSCw4Q0FnQ0M7a0ZBM0JZLGlCQUFpQjtzREFBakIsaUJBQWlCO2tEQUFqQixpQkFBaUI7Y0FMN0IsZ0JBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osTUFBTSxFQUFFLEVBQUU7YUFDWDtpRUFFVSxHQUFHO2tCQUFYLFlBQUs7WUFDRyxNQUFNO2tCQUFkLFlBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGVhZmxldFNlcnZpY2UgfSBmcm9tICcuL2xlYWZsZXQuc2VydmljZSc7XG5pbXBvcnQgKiBhcyBMIGZyb20gJ2xlYWZsZXQnO1xuXG5jb25zdCBERUZBVUxUX1dNU19QQVJBTVMgPSB7XG4gIGZvcm1hdDogJ2ltYWdlL3BuZycsXG4gIHRyYW5zcGFyZW50OiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3bXMtbGF5ZXInLFxuICB0ZW1wbGF0ZTogJycsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgV21zTGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHVybDogc3RyaW5nO1xuICBASW5wdXQoKSBwYXJhbXM6IGFueSA9IHt9O1xuICBwcml2YXRlIGxheWVyOiBMLlRpbGVMYXllcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1hcDogTGVhZmxldFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMubWFwLm1hcC50aGVuKG09PntcbiAgICAgIGlmKHRoaXMubGF5ZXIpe1xuICAgICAgICB0aGlzLmxheWVyLnJlbW92ZUZyb20obSk7XG4gICAgICAgIHRoaXMubGF5ZXIgPSBudWxsO1xuICAgICAgfVxuICAgICAgaWYoIXRoaXMudXJsfHwhdGhpcy5wYXJhbXMpe1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5hc3NpZ24oe30sREVGQVVMVF9XTVNfUEFSQU1TLHRoaXMucGFyYW1zKTtcbiAgICAgIHRoaXMubGF5ZXIgPSBMLnRpbGVMYXllci53bXModGhpcy51cmwscGFyYW1zIGFzIEwuV01TT3B0aW9ucyk7XG4gICAgICAvLyB0aGlzLmxheWVyLm9wdGlvbnMubm9XcmFwID0gdHJ1ZTtcbiAgICAgIHRoaXMubGF5ZXIuYWRkVG8obSk7XG4gICAgfSk7XG4gIH1cblxufVxuIl19