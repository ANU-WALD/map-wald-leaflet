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
        this.zIndex = 10;
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
            var pane = "wms-pane-" + _this.zIndex;
            leaflet_service_1.ensurePane(m, pane, _this.zIndex);
            params.pane = pane;
            _this.layer = L.tileLayer.wms(_this.url, params);
            // this.layer.options.noWrap = true;
            _this.layer.addTo(m);
        });
    };
    WmsLayerComponent.ɵfac = function WmsLayerComponent_Factory(t) { return new (t || WmsLayerComponent)(i0.ɵɵdirectiveInject(i1.LeafletService)); };
    WmsLayerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: WmsLayerComponent, selectors: [["wms-layer"]], inputs: { url: "url", params: "params", zIndex: "zIndex" }, features: [i0.ɵɵNgOnChangesFeature], decls: 0, vars: 0, template: function WmsLayerComponent_Template(rf, ctx) { }, encapsulation: 2 });
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
        }], zIndex: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid21zLWxheWVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hcC13YWxkLWxlYWZsZXQvIiwic291cmNlcyI6WyJ3bXMtbGF5ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFtRjtBQUNuRixxREFBK0Q7QUFDL0QsMkJBQTZCOzs7QUFFN0IsSUFBTSxrQkFBa0IsR0FBRztJQUN6QixNQUFNLEVBQUUsV0FBVztJQUNuQixXQUFXLEVBQUUsSUFBSTtDQUNsQixDQUFDO0FBRUY7SUFXRSwyQkFBb0IsR0FBbUI7UUFBbkIsUUFBRyxHQUFILEdBQUcsQ0FBZ0I7UUFKOUIsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUNqQixXQUFNLEdBQUcsRUFBRSxDQUFDO0lBR3NCLENBQUM7SUFFNUMsb0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCx1Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFBbEMsaUJBb0JDO1FBbkJDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7WUFDakIsSUFBRyxLQUFJLENBQUMsS0FBSyxFQUFDO2dCQUNaLEtBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzthQUNuQjtZQUNELElBQUcsQ0FBQyxLQUFJLENBQUMsR0FBRyxJQUFFLENBQUMsS0FBSSxDQUFDLE1BQU0sRUFBQztnQkFDekIsT0FBTzthQUNSO1lBRUQsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUMsa0JBQWtCLEVBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRWhFLElBQU0sSUFBSSxHQUFHLGNBQVksS0FBSSxDQUFDLE1BQVEsQ0FBQztZQUN2Qyw0QkFBVSxDQUFDLENBQUMsRUFBQyxJQUFJLEVBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQzlCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBRW5CLEtBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEdBQUcsRUFBQyxNQUFzQixDQUFDLENBQUM7WUFDOUQsb0NBQW9DO1lBQ3BDLEtBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztzRkEvQlUsaUJBQWlCOzBEQUFqQixpQkFBaUI7NEJBZDlCO0NBK0NDLEFBdENELElBc0NDO0FBakNZLDhDQUFpQjtrREFBakIsaUJBQWlCO2NBTDdCLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSxFQUFFO2dCQUNaLE1BQU0sRUFBRSxFQUFFO2FBQ1g7aUVBRVUsR0FBRztrQkFBWCxZQUFLO1lBQ0csTUFBTTtrQkFBZCxZQUFLO1lBQ0csTUFBTTtrQkFBZCxZQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGVuc3VyZVBhbmUsIExlYWZsZXRTZXJ2aWNlIH0gZnJvbSAnLi9sZWFmbGV0LnNlcnZpY2UnO1xuaW1wb3J0ICogYXMgTCBmcm9tICdsZWFmbGV0JztcblxuY29uc3QgREVGQVVMVF9XTVNfUEFSQU1TID0ge1xuICBmb3JtYXQ6ICdpbWFnZS9wbmcnLFxuICB0cmFuc3BhcmVudDogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnd21zLWxheWVyJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFdtc0xheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSB1cmw6IHN0cmluZztcbiAgQElucHV0KCkgcGFyYW1zOiBhbnkgPSB7fTtcbiAgQElucHV0KCkgekluZGV4ID0gMTA7XG4gIHByaXZhdGUgbGF5ZXI6IEwuVGlsZUxheWVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFwOiBMZWFmbGV0U2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5tYXAubWFwLnRoZW4obT0+e1xuICAgICAgaWYodGhpcy5sYXllcil7XG4gICAgICAgIHRoaXMubGF5ZXIucmVtb3ZlRnJvbShtKTtcbiAgICAgICAgdGhpcy5sYXllciA9IG51bGw7XG4gICAgICB9XG4gICAgICBpZighdGhpcy51cmx8fCF0aGlzLnBhcmFtcyl7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmFzc2lnbih7fSxERUZBVUxUX1dNU19QQVJBTVMsdGhpcy5wYXJhbXMpO1xuXG4gICAgICBjb25zdCBwYW5lID0gYHdtcy1wYW5lLSR7dGhpcy56SW5kZXh9YDtcbiAgICAgIGVuc3VyZVBhbmUobSxwYW5lLHRoaXMuekluZGV4KVxuICAgICAgcGFyYW1zLnBhbmUgPSBwYW5lO1xuXG4gICAgICB0aGlzLmxheWVyID0gTC50aWxlTGF5ZXIud21zKHRoaXMudXJsLHBhcmFtcyBhcyBMLldNU09wdGlvbnMpO1xuICAgICAgLy8gdGhpcy5sYXllci5vcHRpb25zLm5vV3JhcCA9IHRydWU7XG4gICAgICB0aGlzLmxheWVyLmFkZFRvKG0pO1xuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==