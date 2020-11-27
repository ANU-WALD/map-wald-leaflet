"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeafletService = void 0;
var core_1 = require("@angular/core");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZmxldC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtbGVhZmxldC8iLCJzb3VyY2VzIjpbImxlYWZsZXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBMkM7O0FBSTNDO0lBTUU7UUFBQSxpQkFLQztRQUpDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxPQUFPLENBQWMsVUFBQyxHQUFHLEVBQUMsR0FBRztZQUMxQyxLQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNuQixLQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxtQ0FBVSxHQUFWLFVBQVcsR0FBZ0I7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsZ0NBQU8sR0FBUCxVQUFRLEVBQW9CO1FBQzFCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7Z0ZBbEJVLGNBQWM7MERBQWQsY0FBYyxXQUFkLGNBQWM7eUJBTDNCO0NBd0JDLEFBcEJELElBb0JDO0FBbkJZLHdDQUFjO2tEQUFkLGNBQWM7Y0FEMUIsaUJBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBsZWFmbGV0IGZyb20gJ2xlYWZsZXQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGVhZmxldFNlcnZpY2Uge1xuICBtYXA6IFByb21pc2U8bGVhZmxldC5NYXA+O1xuICBwcml2YXRlIHJlc29sdmU6ICgoeDogbGVhZmxldC5NYXApPT52b2lkKTtcbiAgcHJpdmF0ZSByZWplY3Q6ICgoeDogYW55KT0+dm9pZCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tYXAgPSBuZXcgUHJvbWlzZTxsZWFmbGV0Lk1hcD4oKHJlcyxyZWopPT57XG4gICAgICB0aGlzLnJlc29sdmUgPSByZXM7XG4gICAgICB0aGlzLnJlamVjdCA9IHJlajtcbiAgICB9KTtcbiAgfVxuXG4gIG1hcENyZWF0ZWQobWFwOiBsZWFmbGV0Lk1hcCk6IHZvaWQge1xuICAgIHRoaXMucmVzb2x2ZShtYXApO1xuICB9XG5cbiAgd2l0aE1hcChmbjooKG06TC5NYXApPT52b2lkKSk6IHZvaWQge1xuICAgIHRoaXMubWFwLnRoZW4oZm4pO1xuICB9XG59XG4iXX0=