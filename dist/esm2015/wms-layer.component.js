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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid21zLWxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLWxlYWZsZXQvIiwic291cmNlcyI6WyJ3bXMtbGF5ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdDQUFtRjtBQUNuRix1REFBbUQ7QUFDbkQsNkJBQTZCOzs7QUFFN0IsTUFBTSxrQkFBa0IsR0FBRztJQUN6QixNQUFNLEVBQUUsV0FBVztJQUNuQixXQUFXLEVBQUUsSUFBSTtDQUNsQixDQUFDO0FBRUYsTUFLYSxpQkFBaUI7SUFLNUIsWUFBb0IsR0FBbUI7UUFBbkIsUUFBRyxHQUFILEdBQUcsQ0FBZ0I7UUFIOUIsV0FBTSxHQUFRLEVBQUUsQ0FBQztJQUdpQixDQUFDO0lBRTVDLFFBQVE7SUFDUixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUEsRUFBRTtZQUNuQixJQUFHLElBQUksQ0FBQyxLQUFLLEVBQUM7Z0JBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ25CO1lBQ0QsSUFBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO2dCQUN6QixPQUFPO2FBQ1I7WUFFRCxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBQyxrQkFBa0IsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFDLE1BQXNCLENBQUMsQ0FBQztZQUU5RCxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O0FBOUJILDhDQWdDQztrRkEzQlksaUJBQWlCO3NEQUFqQixpQkFBaUI7a0RBQWpCLGlCQUFpQjtjQUw3QixnQkFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsRUFBRTtnQkFDWixNQUFNLEVBQUUsRUFBRTthQUNYO2lFQUVVLEdBQUc7a0JBQVgsWUFBSztZQUNHLE1BQU07a0JBQWQsWUFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMZWFmbGV0U2VydmljZSB9IGZyb20gJy4vbGVhZmxldC5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIEwgZnJvbSAnbGVhZmxldCc7XG5cbmNvbnN0IERFRkFVTFRfV01TX1BBUkFNUyA9IHtcbiAgZm9ybWF0OiAnaW1hZ2UvcG5nJyxcbiAgdHJhbnNwYXJlbnQ6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dtcy1sYXllcicsXG4gIHRlbXBsYXRlOiAnJyxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBXbXNMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBhcmFtczogYW55ID0ge307XG4gIHByaXZhdGUgbGF5ZXI6IEwuVGlsZUxheWVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBMZWFmbGV0U2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5tYXAubWFwLnRoZW4obT0+e1xuICAgICAgaWYodGhpcy5sYXllcil7XG4gICAgICAgIHRoaXMubGF5ZXIucmVtb3ZlRnJvbShtKTtcbiAgICAgICAgdGhpcy5sYXllciA9IG51bGw7XG4gICAgICB9XG4gICAgICBpZighdGhpcy51cmx8fCF0aGlzLnBhcmFtcyl7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSxERUZBVUxUX1dNU19QQVJBTVMsdGhpcy5wYXJhbXMpO1xuICAgICAgdGhpcy5sYXllciA9IEwudGlsZUxheWVyLndtcyh0aGlzLnVybCxwYXJhbXMgYXMgTC5XTVNPcHRpb25zKTtcblxuICAgICAgdGhpcy5sYXllci5hZGRUbyhtKTtcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=