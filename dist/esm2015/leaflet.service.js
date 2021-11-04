"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeafletService = void 0;
const core_1 = require("@angular/core");
const leaflet = require("leaflet");
const i0 = require("@angular/core");
class LeafletService {
    constructor() {
        this.map = new Promise((res, rej) => {
            this.resolve = res;
            this.reject = rej;
        });
    }
    mapCreated(map) {
        addControlPlaceholders(map);
        this.resolve(map);
    }
    withMap(fn) {
        this.map.then(fn);
    }
}
exports.LeafletService = LeafletService;
LeafletService.ɵfac = function LeafletService_Factory(t) { return new (t || LeafletService)(); };
LeafletService.ɵprov = i0.ɵɵdefineInjectable({ token: LeafletService, factory: LeafletService.ɵfac });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZmxldC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtbGVhZmxldC8iLCJzb3VyY2VzIjpbImxlYWZsZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBMkM7QUFDM0MsbUNBQW1DOztBQUduQyxNQUNhLGNBQWM7SUFLekI7UUFDRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksT0FBTyxDQUFjLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxFQUFFO1lBQzdDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUdELFVBQVUsQ0FBQyxHQUFnQjtRQUN6QixzQkFBc0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxPQUFPLENBQUMsRUFBb0I7UUFDMUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEIsQ0FBQzs7QUFyQkgsd0NBc0JDOzRFQXJCWSxjQUFjO3NEQUFkLGNBQWMsV0FBZCxjQUFjO2tEQUFkLGNBQWM7Y0FEMUIsaUJBQVU7O0FBd0JYLFNBQVMsc0JBQXNCLENBQUMsR0FBUTtJQUN0QyxJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsZUFBZSxFQUM3QixDQUFDLEdBQUcsVUFBVSxFQUNkLFNBQVMsR0FBRyxHQUFHLENBQUMsaUJBQWlCLENBQUM7SUFFdEMsU0FBUyxZQUFZLENBQUMsS0FBWSxFQUFFLEtBQVk7UUFDNUMsSUFBSSxTQUFTLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUU1QyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUVELFlBQVksQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDL0IsWUFBWSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNoQyxZQUFZLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLFlBQVksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDbkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGxlYWZsZXQgZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMZWFmbGV0U2VydmljZSB7XG4gIG1hcDogUHJvbWlzZTxsZWFmbGV0Lk1hcD47XG4gIHByaXZhdGUgcmVzb2x2ZTogKCh4OiBsZWFmbGV0Lk1hcCk9PnZvaWQpO1xuICBwcml2YXRlIHJlamVjdDogKCh4OiBhbnkpPT52b2lkKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1hcCA9IG5ldyBQcm9taXNlPGxlYWZsZXQuTWFwPigocmVzLHJlaik9PntcbiAgICAgIHRoaXMucmVzb2x2ZSA9IHJlcztcbiAgICAgIHRoaXMucmVqZWN0ID0gcmVqO1xuICAgIH0pO1xuICB9XG5cblxuICBtYXBDcmVhdGVkKG1hcDogbGVhZmxldC5NYXApOiB2b2lkIHtcbiAgICBhZGRDb250cm9sUGxhY2Vob2xkZXJzKG1hcCk7XG4gICAgdGhpcy5yZXNvbHZlKG1hcCk7XG4gIH1cblxuICB3aXRoTWFwKGZuOigobTpMLk1hcCk9PnZvaWQpKTogdm9pZCB7XG4gICAgdGhpcy5tYXAudGhlbihmbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQ29udHJvbFBsYWNlaG9sZGVycyhtYXA6IGFueSkge1xuICB2YXIgY29ybmVycyA9IG1hcC5fY29udHJvbENvcm5lcnMsXG4gICAgICBsID0gJ2xlYWZsZXQtJyxcbiAgICAgIGNvbnRhaW5lciA9IG1hcC5fY29udHJvbENvbnRhaW5lcjtcblxuICBmdW5jdGlvbiBjcmVhdGVDb3JuZXIodlNpZGU6c3RyaW5nLCBoU2lkZTpzdHJpbmcpIHtcbiAgICAgIHZhciBjbGFzc05hbWUgPSBsICsgdlNpZGUgKyAnICcgKyBsICsgaFNpZGU7XG5cbiAgICAgIGNvcm5lcnNbdlNpZGUgKyBoU2lkZV0gPSBsZWFmbGV0LkRvbVV0aWwuY3JlYXRlKCdkaXYnLCBjbGFzc05hbWUsIGNvbnRhaW5lcik7XG4gIH1cblxuICBjcmVhdGVDb3JuZXIoJ21pZGRsZScsICdsZWZ0Jyk7XG4gIGNyZWF0ZUNvcm5lcignbWlkZGxlJywgJ3JpZ2h0Jyk7XG4gIGNyZWF0ZUNvcm5lcigndG9wJywgJ2NlbnRlcicpO1xuICBjcmVhdGVDb3JuZXIoJ2JvdHRvbScsICdjZW50ZXInKTtcbn1cbiJdfQ==