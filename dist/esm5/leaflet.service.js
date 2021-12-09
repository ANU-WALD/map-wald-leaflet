"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensurePane = exports.LeafletService = void 0;
var core_1 = require("@angular/core");
var leaflet = require("leaflet");
var i0 = require("@angular/core");
var LeafletService = /** @class */ (function () {
    function LeafletService() {
        var _this = this;
        this.map = new Promise(function (res, rej) {
            _this.resolve = res;
            _this.reject = rej;
        });
    }
    LeafletService.prototype.mapCreated = function (map) {
        addControlPlaceholders(map);
        this.resolve(map);
    };
    LeafletService.prototype.withMap = function (fn) {
        this.map.then(fn);
    };
    LeafletService.ɵfac = function LeafletService_Factory(t) { return new (t || LeafletService)(); };
    LeafletService.ɵprov = i0.ɵɵdefineInjectable({ token: LeafletService, factory: LeafletService.ɵfac });
    return LeafletService;
}());
exports.LeafletService = LeafletService;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LeafletService, [{
        type: core_1.Injectable
    }], function () { return []; }, null); })();
function addControlPlaceholders(map) {
    var corners = map._controlCorners, l = 'leaflet-', container = map._controlContainer;
    function createCorner(vSide, hSide) {
        var className = l + vSide + ' ' + l + hSide;
        corners[vSide + hSide] = leaflet.DomUtil.create('div', className, container);
    }
    createCorner('middle', 'left');
    createCorner('middle', 'right');
    createCorner('top', 'center');
    createCorner('bottom', 'center');
}
function ensurePane(map, pane, zIndex) {
    if (!map.getPane(pane)) {
        map.createPane(pane);
        map.getPane(pane).style.zIndex = 405 + zIndex;
    }
}
exports.ensurePane = ensurePane;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZmxldC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtbGVhZmxldC8iLCJzb3VyY2VzIjpbImxlYWZsZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBMkM7QUFDM0MsaUNBQW1DOztBQUduQztJQU1FO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksT0FBTyxDQUFjLFVBQUMsR0FBRyxFQUFDLEdBQUc7WUFDMUMsS0FBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDbkIsS0FBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBR0QsbUNBQVUsR0FBVixVQUFXLEdBQWdCO1FBQ3pCLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELGdDQUFPLEdBQVAsVUFBUSxFQUFvQjtRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwQixDQUFDO2dGQXBCVSxjQUFjOzBEQUFkLGNBQWMsV0FBZCxjQUFjO3lCQUwzQjtDQTBCQyxBQXRCRCxJQXNCQztBQXJCWSx3Q0FBYztrREFBZCxjQUFjO2NBRDFCLGlCQUFVOztBQXdCWCxTQUFTLHNCQUFzQixDQUFDLEdBQVE7SUFDdEMsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLGVBQWUsRUFDN0IsQ0FBQyxHQUFHLFVBQVUsRUFDZCxTQUFTLEdBQUcsR0FBRyxDQUFDLGlCQUFpQixDQUFDO0lBRXRDLFNBQVMsWUFBWSxDQUFDLEtBQVksRUFBRSxLQUFZO1FBQzVDLElBQUksU0FBUyxHQUFHLENBQUMsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7UUFFNUMsT0FBTyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFRCxZQUFZLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLFlBQVksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEMsWUFBWSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5QixZQUFZLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFFRCxTQUFnQixVQUFVLENBQUMsR0FBTyxFQUFFLElBQVcsRUFBRSxNQUFhO0lBQzVELElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3RCLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7S0FDL0M7QUFDSCxDQUFDO0FBTEQsZ0NBS0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBsZWFmbGV0IGZyb20gJ2xlYWZsZXQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGVhZmxldFNlcnZpY2Uge1xuICBtYXA6IFByb21pc2U8bGVhZmxldC5NYXA+O1xuICBwcml2YXRlIHJlc29sdmU6ICgoeDogbGVhZmxldC5NYXApPT52b2lkKTtcbiAgcHJpdmF0ZSByZWplY3Q6ICgoeDogYW55KT0+dm9pZCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tYXAgPSBuZXcgUHJvbWlzZTxsZWFmbGV0Lk1hcD4oKHJlcyxyZWopPT57XG4gICAgICB0aGlzLnJlc29sdmUgPSByZXM7XG4gICAgICB0aGlzLnJlamVjdCA9IHJlajtcbiAgICB9KTtcbiAgfVxuXG5cbiAgbWFwQ3JlYXRlZChtYXA6IGxlYWZsZXQuTWFwKTogdm9pZCB7XG4gICAgYWRkQ29udHJvbFBsYWNlaG9sZGVycyhtYXApO1xuICAgIHRoaXMucmVzb2x2ZShtYXApO1xuICB9XG5cbiAgd2l0aE1hcChmbjooKG06TC5NYXApPT52b2lkKSk6IHZvaWQge1xuICAgIHRoaXMubWFwLnRoZW4oZm4pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZENvbnRyb2xQbGFjZWhvbGRlcnMobWFwOiBhbnkpIHtcbiAgdmFyIGNvcm5lcnMgPSBtYXAuX2NvbnRyb2xDb3JuZXJzLFxuICAgICAgbCA9ICdsZWFmbGV0LScsXG4gICAgICBjb250YWluZXIgPSBtYXAuX2NvbnRyb2xDb250YWluZXI7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ29ybmVyKHZTaWRlOnN0cmluZywgaFNpZGU6c3RyaW5nKSB7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gbCArIHZTaWRlICsgJyAnICsgbCArIGhTaWRlO1xuXG4gICAgICBjb3JuZXJzW3ZTaWRlICsgaFNpZGVdID0gbGVhZmxldC5Eb21VdGlsLmNyZWF0ZSgnZGl2JywgY2xhc3NOYW1lLCBjb250YWluZXIpO1xuICB9XG5cbiAgY3JlYXRlQ29ybmVyKCdtaWRkbGUnLCAnbGVmdCcpO1xuICBjcmVhdGVDb3JuZXIoJ21pZGRsZScsICdyaWdodCcpO1xuICBjcmVhdGVDb3JuZXIoJ3RvcCcsICdjZW50ZXInKTtcbiAgY3JlYXRlQ29ybmVyKCdib3R0b20nLCAnY2VudGVyJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbnN1cmVQYW5lKG1hcDphbnksIHBhbmU6c3RyaW5nLCB6SW5kZXg6bnVtYmVyKTogdm9pZCB7XG4gIGlmICghbWFwLmdldFBhbmUocGFuZSkpIHtcbiAgICBtYXAuY3JlYXRlUGFuZShwYW5lKTtcbiAgICBtYXAuZ2V0UGFuZShwYW5lKS5zdHlsZS56SW5kZXggPSA0MDUgKyB6SW5kZXg7XG4gIH1cbn0iXX0=