"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WmsLayerComponent = void 0;
var core_1 = require("@angular/core");
var leaflet_service_1 = require("./leaflet.service");
var L = require("leaflet");
var i0 = require("@angular/core");
var i1 = require("./leaflet.service");
var DEFAULT_WMS_PARAMS = {
    format: 'image/png',
    transparent: true
};
var WmsLayerComponent = /** @class */ (function () {
    function WmsLayerComponent(map) {
        this.map = map;
        this.params = {};
    }
    WmsLayerComponent.prototype.ngOnInit = function () {
    };
    WmsLayerComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        this.map.map.then(function (m) {
            if (_this.layer) {
                _this.layer.removeFrom(m);
                _this.layer = null;
            }
            if (!_this.url || !_this.params) {
                return;
            }
            var params = Object.assign({}, DEFAULT_WMS_PARAMS, _this.params);
            _this.layer = L.tileLayer.wms(_this.url, params);
            _this.layer.addTo(m);
        });
    };
    WmsLayerComponent.ɵfac = function WmsLayerComponent_Factory(t) { return new (t || WmsLayerComponent)(i0.ɵɵdirectiveInject(i1.LeafletService)); };
    WmsLayerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: WmsLayerComponent, selectors: [["wms-layer"]], inputs: { url: "url", params: "params" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function WmsLayerComponent_Template(rf, ctx) { }, encapsulation: 2 });
    return WmsLayerComponent;
}());
exports.WmsLayerComponent = WmsLayerComponent;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid21zLWxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLWxlYWZsZXQvIiwic291cmNlcyI6WyJ3bXMtbGF5ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFtRjtBQUNuRixxREFBbUQ7QUFDbkQsMkJBQTZCOzs7QUFFN0IsSUFBTSxrQkFBa0IsR0FBRztJQUN6QixNQUFNLEVBQUUsV0FBVztJQUNuQixXQUFXLEVBQUUsSUFBSTtDQUNsQixDQUFDO0FBRUY7SUFVRSwyQkFBb0IsR0FBbUI7UUFBbkIsUUFBRyxHQUFILEdBQUcsQ0FBZ0I7UUFIOUIsV0FBTSxHQUFRLEVBQUUsQ0FBQztJQUdpQixDQUFDO0lBRTVDLG9DQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQWxDLGlCQWVDO1FBZEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQztZQUNqQixJQUFHLEtBQUksQ0FBQyxLQUFLLEVBQUM7Z0JBQ1osS0FBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ25CO1lBQ0QsSUFBRyxDQUFDLEtBQUksQ0FBQyxHQUFHLElBQUUsQ0FBQyxLQUFJLENBQUMsTUFBTSxFQUFDO2dCQUN6QixPQUFPO2FBQ1I7WUFFRCxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBQyxrQkFBa0IsRUFBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEUsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsR0FBRyxFQUFDLE1BQXNCLENBQUMsQ0FBQztZQUU5RCxLQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7c0ZBekJVLGlCQUFpQjswREFBakIsaUJBQWlCOzRCQWQ5QjtDQXlDQyxBQWhDRCxJQWdDQztBQTNCWSw4Q0FBaUI7a0RBQWpCLGlCQUFpQjtjQUw3QixnQkFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUUsRUFBRTtnQkFDWixNQUFNLEVBQUUsRUFBRTthQUNYO2lFQUVVLEdBQUc7a0JBQVgsWUFBSztZQUNHLE1BQU07a0JBQWQsWUFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMZWFmbGV0U2VydmljZSB9IGZyb20gJy4vbGVhZmxldC5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIEwgZnJvbSAnbGVhZmxldCc7XG5cbmNvbnN0IERFRkFVTFRfV01TX1BBUkFNUyA9IHtcbiAgZm9ybWF0OiAnaW1hZ2UvcG5nJyxcbiAgdHJhbnNwYXJlbnQ6IHRydWVcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dtcy1sYXllcicsXG4gIHRlbXBsYXRlOiAnJyxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBXbXNMYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgdXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBhcmFtczogYW55ID0ge307XG4gIHByaXZhdGUgbGF5ZXI6IEwuVGlsZUxheWVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBMZWFmbGV0U2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5tYXAubWFwLnRoZW4obT0+e1xuICAgICAgaWYodGhpcy5sYXllcil7XG4gICAgICAgIHRoaXMubGF5ZXIucmVtb3ZlRnJvbShtKTtcbiAgICAgICAgdGhpcy5sYXllciA9IG51bGw7XG4gICAgICB9XG4gICAgICBpZighdGhpcy51cmx8fCF0aGlzLnBhcmFtcyl7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSxERUZBVUxUX1dNU19QQVJBTVMsdGhpcy5wYXJhbXMpO1xuICAgICAgdGhpcy5sYXllciA9IEwudGlsZUxheWVyLndtcyh0aGlzLnVybCxwYXJhbXMgYXMgTC5XTVNPcHRpb25zKTtcblxuICAgICAgdGhpcy5sYXllci5hZGRUbyhtKTtcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=