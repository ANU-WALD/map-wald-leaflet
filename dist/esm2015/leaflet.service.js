"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeafletService = void 0;
const core_1 = require("@angular/core");
const i0 = require("@angular/core");
class LeafletService {
    constructor() {
        this.map = new Promise((res, rej) => {
            this.resolve = res;
            this.reject = rej;
        });
    }
    mapCreated(map) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZmxldC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtbGVhZmxldC8iLCJzb3VyY2VzIjpbImxlYWZsZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBMkM7O0FBSTNDLE1BQ2EsY0FBYztJQUt6QjtRQUNFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxPQUFPLENBQWMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEVBQUU7WUFDN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7WUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsVUFBVSxDQUFDLEdBQWdCO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELE9BQU8sQ0FBQyxFQUFvQjtRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwQixDQUFDOztBQW5CSCx3Q0FvQkM7NEVBbkJZLGNBQWM7c0RBQWQsY0FBYyxXQUFkLGNBQWM7a0RBQWQsY0FBYztjQUQxQixpQkFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGxlYWZsZXQgZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMZWFmbGV0U2VydmljZSB7XG4gIG1hcDogUHJvbWlzZTxsZWFmbGV0Lk1hcD47XG4gIHByaXZhdGUgcmVzb2x2ZTogKCh4OiBsZWFmbGV0Lk1hcCk9PnZvaWQpO1xuICBwcml2YXRlIHJlamVjdDogKCh4OiBhbnkpPT52b2lkKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLm1hcCA9IG5ldyBQcm9taXNlPGxlYWZsZXQuTWFwPigocmVzLHJlaik9PntcbiAgICAgIHRoaXMucmVzb2x2ZSA9IHJlcztcbiAgICAgIHRoaXMucmVqZWN0ID0gcmVqO1xuICAgIH0pO1xuICB9XG5cbiAgbWFwQ3JlYXRlZChtYXA6IGxlYWZsZXQuTWFwKTogdm9pZCB7XG4gICAgdGhpcy5yZXNvbHZlKG1hcCk7XG4gIH1cblxuICB3aXRoTWFwKGZuOigobTpMLk1hcCk9PnZvaWQpKTogdm9pZCB7XG4gICAgdGhpcy5tYXAudGhlbihmbik7XG4gIH1cbn1cbiJdfQ==