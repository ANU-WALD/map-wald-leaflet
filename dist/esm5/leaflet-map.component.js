"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeafletMapComponent = void 0;
var core_1 = require("@angular/core");
var leaflet = require("leaflet");
var leaflet_service_1 = require("./leaflet.service");
var i0 = require("@angular/core");
var i1 = require("./leaflet.service");
var _c0 = ["*"];
var DEFAULT_BASE_MAP = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
var LeafletMapComponent = /** @class */ (function () {
    function LeafletMapComponent(element, svc) {
        this.element = element;
        this.svc = svc;
        this.zoomControl = true;
        this.minZoom = 5;
        this.maxZoom = 32;
        this.styles = {};
        this.initialised = false;
        console.log('LeafletMapComponent');
    }
    LeafletMapComponent.prototype.ngOnChanges = function (changes) {
        if (!this.initialised) {
            return;
        }
        var changeCount = Object.keys(changes).length;
        // if(this.creating){
        //   return;
        // }
        // if(this.map){
        //   if(changes.markers){
        //     this.setupMarkers();
        //     if(changeCount===1){
        //       return;
        //     }
        //   }
        //   this.map.remove();
        // }
        //    if(!this.creating){
        this.updateMap(changes);
        //    }
        if (changes.bounds) {
            this.setBounds();
        }
    };
    LeafletMapComponent.prototype.ngOnInit = function () {
        this.updateMap();
        this.setBounds();
    };
    LeafletMapComponent.prototype.updateMap = function (changes) {
        var _this = this;
        setTimeout(function () {
            if (!_this.map) {
                _this.createMap();
                return;
            }
            if (changes && changes.baseMap) {
                // this.baseLayer.setUrl(this.baseMap.urlTemplate || DEFAULT_BASE_MAP)
                if (_this.baseLayer) {
                    _this.baseLayer.setUrl(_this.baseMap.urlTemplate || DEFAULT_BASE_MAP);
                    // this.baseLayer.removeFrom(this.map);
                }
                else if (_this.baseMap) {
                    _this.createBaseLayer();
                    _this.baseLayer.addTo(_this.map).bringToBack();
                }
            }
        });
        // Update parameters
    };
    LeafletMapComponent.prototype.createBaseLayer = function () {
        this.baseLayer = null;
        if (!this.baseMap) {
            return;
        }
        var options = {};
        if (this.baseMap.maxNativeZoom) {
            options.maxNativeZoom = this.baseMap.maxNativeZoom;
        }
        this.baseLayer = leaflet.tileLayer(this.baseMap.urlTemplate || DEFAULT_BASE_MAP, options);
    };
    LeafletMapComponent.prototype.createMap = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.map) {
                _this.map.remove();
                _this.map = null;
            }
            var theDiv = _this.element.nativeElement;
            var theHost = theDiv.querySelector('.leafletHost');
            // let baseLayers = R.mapObjIndexed(v=>{
            //   return L.tileLayer(v,
            //     { maxZoom: 18, attribution: '...' });
            // },this.baseMaps);
            // if(!this.baseMap || !baseLayers[this.baseMap]){
            //   this.baseMap = Object.keys(this.baseMaps)[0];
            // }
            // let baseLayerArray = [baseLayers[this.baseMap]];
            var crs = leaflet.CRS.EPSG3857; //:L.CRS.Simple;
            // if(this.crs){
            //   crs = L.CRS[this.crs];
            // }
            // let panes = 0;
            // if(this.map){
            //   panes = getCustomMapPanes(this.map).length;
            // }
            _this.createBaseLayer();
            var baseLayerArray = [];
            if (_this.baseLayer) {
                baseLayerArray.push(_this.baseLayer);
            }
            _this.map = leaflet.map(theHost, {
                crs: crs,
                zoom: 5,
                minZoom: _this.minZoom,
                maxZoom: _this.maxZoom,
                zoomControl: _this.zoomControl,
                center: leaflet.latLng(-20, 135),
                // zoom: this.zoom,
                // minZoom: this.minZoom,
                // maxZoom: this.maxZoom,
                scrollWheelZoom: true,
                layers: baseLayerArray,
                continuousWorld: false,
                noWrap: true
                // attributionControl: this.attribution
            });
            _this.svc.mapCreated(_this.map);
            // if(!this.pannable){
            //   this.map.dragging.disable();
            // }
            // if(!this.zoomable){
            //   this.map.touchZoom.disable();
            //   this.map.doubleClickZoom.disable();
            //   this.map.scrollWheelZoom.disable();
            // }
            // configureVectorPanes(panes,this.map);
            // this._helper.register(this.map);
            _this.map.on('click', function (evt) {
                if (evt.originalEvent.defaultPrevented) {
                    return;
                }
                // this.pointClick.emit(evt.latlng);
            });
            // this.creating=false;
            // this.map.on('zoomend',()=>this.coordinatesChanged());
            // this.map.on('moveend',()=>this.coordinatesChanged());
            // if(this.showLayerControl){
            //   this.layerControl = L.control.layers(baseLayers, [],{
            //     hideSingleBase:true
            //   }).addTo(this.map);
            // }
            // this.mapCreated.emit(this.map);
            // this.markerLayers = [];
            // this.setupMarkers();
            _this.setBounds();
            _this.initialised = true;
        });
    };
    LeafletMapComponent.prototype.setBounds = function () {
        if (!this.map || !this.bounds) {
            return;
        }
        this.map.fitBounds([
            [this.bounds.south, this.bounds.west],
            [this.bounds.north, this.bounds.east]
        ]);
    };
    LeafletMapComponent.ɵfac = function LeafletMapComponent_Factory(t) { return new (t || LeafletMapComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.LeafletService)); };
    LeafletMapComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LeafletMapComponent, selectors: [["leaflet-map"]], inputs: { bounds: "bounds", baseMap: "baseMap", zoomControl: "zoomControl", minZoom: "minZoom", maxZoom: "maxZoom" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[1, "leafletHost"]], template: function LeafletMapComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵstyleMap(ctx.styles);
        } }, styles: [".leafletHost[_ngcontent-%COMP%]{\n    width:100%;\n    min-height:400px;\n  }"] });
    return LeafletMapComponent;
}());
exports.LeafletMapComponent = LeafletMapComponent;
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LeafletMapComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'leaflet-map',
                template: "<div class=\"leafletHost\" [style]=\"styles\">\n  <ng-content></ng-content>\n</div>\n", styles: [
                    "\n  .leafletHost{\n    width:100%;\n    min-height:400px;\n  }"
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.LeafletService }]; }, { bounds: [{
            type: core_1.Input
        }], baseMap: [{
            type: core_1.Input
        }], zoomControl: [{
            type: core_1.Input
        }], minZoom: [{
            type: core_1.Input
        }], maxZoom: [{
            type: core_1.Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZmxldC1tYXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtbGVhZmxldC8iLCJzb3VyY2VzIjpbImxlYWZsZXQtbWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBK0Y7QUFDL0YsaUNBQW1DO0FBQ25DLHFEQUFtRDs7OztBQUluRCxJQUFNLGdCQUFnQixHQUFDLG9EQUFvRCxDQUFDO0FBRTVFO0lBMkJFLDZCQUFvQixPQUFtQixFQUFVLEdBQW1CO1FBQWhELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFnQjtRQVgzRCxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUd0QixXQUFNLEdBQVEsRUFBRSxDQUFDO1FBQ2pCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBTWxCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQseUNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFDO1lBQ25CLE9BQU87U0FDUjtRQUVELElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBRWhELHFCQUFxQjtRQUNyQixZQUFZO1FBQ1osSUFBSTtRQUVKLGdCQUFnQjtRQUNoQix5QkFBeUI7UUFDekIsMkJBQTJCO1FBRTNCLDJCQUEyQjtRQUMzQixnQkFBZ0I7UUFDaEIsUUFBUTtRQUNSLE1BQU07UUFDTix1QkFBdUI7UUFDdkIsSUFBSTtRQUVSLHlCQUF5QjtRQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLE9BQU87UUFFSCxJQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUM7WUFDaEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCx1Q0FBUyxHQUFULFVBQVUsT0FBdUI7UUFBakMsaUJBb0JDO1FBbkJDLFVBQVUsQ0FBQztZQUNULElBQUcsQ0FBQyxLQUFJLENBQUMsR0FBRyxFQUFDO2dCQUNYLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDakIsT0FBTzthQUNSO1lBRUQsSUFBRyxPQUFPLElBQUUsT0FBTyxDQUFDLE9BQU8sRUFBQztnQkFDMUIsc0VBQXNFO2dCQUN0RSxJQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUM7b0JBQ2hCLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxJQUFJLGdCQUFnQixDQUFDLENBQUM7b0JBQ3BFLHVDQUF1QztpQkFDeEM7cUJBQU0sSUFBRyxLQUFJLENBQUMsT0FBTyxFQUFFO29CQUN0QixLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3ZCLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDOUM7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsb0JBQW9CO0lBQ3RCLENBQUM7SUFFRCw2Q0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUM7WUFDZixPQUFPO1NBQ1I7UUFFRCxJQUFNLE9BQU8sR0FBNkIsRUFBRSxDQUFDO1FBQzdDLElBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUM7WUFDNUIsT0FBTyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztTQUNwRDtRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsSUFBSSxnQkFBZ0IsRUFBQyxPQUFPLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRUQsdUNBQVMsR0FBVDtRQUFBLGlCQThGQztRQTdGQyxVQUFVLENBQUM7WUFDVCxJQUFHLEtBQUksQ0FBQyxHQUFHLEVBQUM7Z0JBQ1YsS0FBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDbEIsS0FBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7YUFDakI7WUFFRCxJQUFNLE1BQU0sR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLGFBQTRCLENBQUM7WUFDekQsSUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUVyRCx3Q0FBd0M7WUFDeEMsMEJBQTBCO1lBQzFCLDRDQUE0QztZQUM1QyxvQkFBb0I7WUFFcEIsa0RBQWtEO1lBQ2xELGtEQUFrRDtZQUNsRCxJQUFJO1lBRUosbURBQW1EO1lBQ25ELElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUEsZ0JBQWdCO1lBQy9DLGdCQUFnQjtZQUNoQiwyQkFBMkI7WUFDM0IsSUFBSTtZQUVKLGlCQUFpQjtZQUNqQixnQkFBZ0I7WUFDaEIsZ0RBQWdEO1lBQ2hELElBQUk7WUFDSixLQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsSUFBTSxjQUFjLEdBQUcsRUFDdEIsQ0FBQztZQUNGLElBQUcsS0FBSSxDQUFDLFNBQVMsRUFBQztnQkFDaEIsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDckM7WUFFRCxLQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBc0IsRUFBQztnQkFDNUMsR0FBRyxLQUFBO2dCQUNILElBQUksRUFBRSxDQUFDO2dCQUNQLE9BQU8sRUFBRSxLQUFJLENBQUMsT0FBTztnQkFDckIsT0FBTyxFQUFFLEtBQUksQ0FBQyxPQUFPO2dCQUNyQixXQUFXLEVBQUUsS0FBSSxDQUFDLFdBQVc7Z0JBQzdCLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQztnQkFDaEMsbUJBQW1CO2dCQUNuQix5QkFBeUI7Z0JBQ3pCLHlCQUF5QjtnQkFDekIsZUFBZSxFQUFFLElBQUk7Z0JBQ3JCLE1BQU0sRUFBQyxjQUFjO2dCQUNyQixlQUFlLEVBQUUsS0FBSztnQkFDdEIsTUFBTSxFQUFFLElBQUk7Z0JBQ1IsdUNBQXVDO2FBQ3RCLENBQUMsQ0FBQztZQUN6QixLQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUIsc0JBQXNCO1lBQ3RCLGlDQUFpQztZQUNqQyxJQUFJO1lBRUosc0JBQXNCO1lBQ3RCLGtDQUFrQztZQUNsQyx3Q0FBd0M7WUFDeEMsd0NBQXdDO1lBQ3hDLElBQUk7WUFFSix3Q0FBd0M7WUFFeEMsbUNBQW1DO1lBQ25DLEtBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBQyxVQUFDLEdBQThCO2dCQUNqRCxJQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLEVBQUM7b0JBQ3BDLE9BQU87aUJBQ1I7Z0JBQ0Qsb0NBQW9DO1lBQ3RDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsdUJBQXVCO1lBRXZCLHdEQUF3RDtZQUN4RCx3REFBd0Q7WUFFeEQsNkJBQTZCO1lBQzdCLDBEQUEwRDtZQUMxRCwwQkFBMEI7WUFDMUIsd0JBQXdCO1lBQ3hCLElBQUk7WUFFSixrQ0FBa0M7WUFJbEMsMEJBQTBCO1lBQzFCLHVCQUF1QjtZQUV2QixLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDO0lBRUQsdUNBQVMsR0FBVDtRQUNFLElBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQztZQUN6QixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQztZQUNqQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3BDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDckMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzswRkFuTVUsbUJBQW1COzREQUFuQixtQkFBbUI7O1lBWG5CLDhCQUNYO1lBQUEsa0JBQXlCO1lBQzNCLGlCQUFNOztZQUZnQyx5QkFBZ0I7OzhCQVZ0RDtDQTBOQyxBQWxORCxJQWtOQztBQXJNWSxrREFBbUI7a0RBQW5CLG1CQUFtQjtjQWIvQixnQkFBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsdUZBR1gsRUFBQyxNQUFNLEVBQUU7b0JBQ1IsZ0VBSUU7aUJBQ0g7YUFDQTswRkFFVSxNQUFNO2tCQUFkLFlBQUs7WUFDRyxPQUFPO2tCQUFmLFlBQUs7WUFDRyxXQUFXO2tCQUFuQixZQUFLO1lBQ0csT0FBTztrQkFBZixZQUFLO1lBQ0csT0FBTztrQkFBZixZQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGxlYWZsZXQgZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgeyBMZWFmbGV0U2VydmljZSB9IGZyb20gJy4vbGVhZmxldC5zZXJ2aWNlJztcbmltcG9ydCB7IEJvdW5kcyB9IGZyb20gJ21hcC13YWxkJztcbmltcG9ydCB7IEJhc2VtYXBEZXNjcmlwdG9yIH0gZnJvbSAnLi9kYXRhJztcblxuY29uc3QgREVGQVVMVF9CQVNFX01BUD0naHR0cHM6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsZWFmbGV0LW1hcCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImxlYWZsZXRIb3N0XCIgW3N0eWxlXT1cInN0eWxlc1wiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbmAsc3R5bGVzOiBbXG4gIGBcbiAgLmxlYWZsZXRIb3N0e1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWluLWhlaWdodDo0MDBweDtcbiAgfWBcbl1cbn0pXG5leHBvcnQgY2xhc3MgTGVhZmxldE1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgYm91bmRzOiBCb3VuZHM7XG4gIEBJbnB1dCgpIGJhc2VNYXA6IEJhc2VtYXBEZXNjcmlwdG9yO1xuICBASW5wdXQoKSB6b29tQ29udHJvbCA9IHRydWU7XG4gIEBJbnB1dCgpIG1pblpvb20gPSA1O1xuICBASW5wdXQoKSBtYXhab29tID0gMzI7XG5cbiAgbWFwOiBsZWFmbGV0Lk1hcDtcbiAgc3R5bGVzOiBhbnkgPSB7fTtcbiAgaW5pdGlhbGlzZWQgPSBmYWxzZTtcblxuICAvLyBMZWFmbGV0LlRpbGVMYXllclxuICBwcml2YXRlIGJhc2VMYXllcjogbGVhZmxldC5UaWxlTGF5ZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHN2YzogTGVhZmxldFNlcnZpY2UpIHtcbiAgICBjb25zb2xlLmxvZygnTGVhZmxldE1hcENvbXBvbmVudCcpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmKCF0aGlzLmluaXRpYWxpc2VkKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjaGFuZ2VDb3VudCA9IE9iamVjdC5rZXlzKGNoYW5nZXMpLmxlbmd0aDtcblxuICAgIC8vIGlmKHRoaXMuY3JlYXRpbmcpe1xuICAgIC8vICAgcmV0dXJuO1xuICAgIC8vIH1cblxuICAgIC8vIGlmKHRoaXMubWFwKXtcbiAgICAvLyAgIGlmKGNoYW5nZXMubWFya2Vycyl7XG4gICAgLy8gICAgIHRoaXMuc2V0dXBNYXJrZXJzKCk7XG5cbiAgICAvLyAgICAgaWYoY2hhbmdlQ291bnQ9PT0xKXtcbiAgICAvLyAgICAgICByZXR1cm47XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyAgIHRoaXMubWFwLnJlbW92ZSgpO1xuICAgIC8vIH1cblxuLy8gICAgaWYoIXRoaXMuY3JlYXRpbmcpe1xuICAgIHRoaXMudXBkYXRlTWFwKGNoYW5nZXMpO1xuLy8gICAgfVxuXG4gICAgaWYoY2hhbmdlcy5ib3VuZHMpe1xuICAgICAgdGhpcy5zZXRCb3VuZHMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZU1hcCgpO1xuICAgIHRoaXMuc2V0Qm91bmRzKCk7XG4gIH1cblxuICB1cGRhdGVNYXAoY2hhbmdlcz86IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICBpZighdGhpcy5tYXApe1xuICAgICAgICB0aGlzLmNyZWF0ZU1hcCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmKGNoYW5nZXMmJmNoYW5nZXMuYmFzZU1hcCl7XG4gICAgICAgIC8vIHRoaXMuYmFzZUxheWVyLnNldFVybCh0aGlzLmJhc2VNYXAudXJsVGVtcGxhdGUgfHwgREVGQVVMVF9CQVNFX01BUClcbiAgICAgICAgaWYodGhpcy5iYXNlTGF5ZXIpe1xuICAgICAgICAgIHRoaXMuYmFzZUxheWVyLnNldFVybCh0aGlzLmJhc2VNYXAudXJsVGVtcGxhdGUgfHwgREVGQVVMVF9CQVNFX01BUCk7XG4gICAgICAgICAgLy8gdGhpcy5iYXNlTGF5ZXIucmVtb3ZlRnJvbSh0aGlzLm1hcCk7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmJhc2VNYXApIHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUJhc2VMYXllcigpO1xuICAgICAgICAgIHRoaXMuYmFzZUxheWVyLmFkZFRvKHRoaXMubWFwKS5icmluZ1RvQmFjaygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBVcGRhdGUgcGFyYW1ldGVyc1xuICB9XG5cbiAgY3JlYXRlQmFzZUxheWVyKCk6IHZvaWQge1xuICAgIHRoaXMuYmFzZUxheWVyID0gbnVsbDtcbiAgICBpZighdGhpcy5iYXNlTWFwKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zOiBsZWFmbGV0LlRpbGVMYXllck9wdGlvbnMgPSB7fTtcbiAgICBpZih0aGlzLmJhc2VNYXAubWF4TmF0aXZlWm9vbSl7XG4gICAgICBvcHRpb25zLm1heE5hdGl2ZVpvb20gPSB0aGlzLmJhc2VNYXAubWF4TmF0aXZlWm9vbTtcbiAgICB9XG5cbiAgICB0aGlzLmJhc2VMYXllciA9IGxlYWZsZXQudGlsZUxheWVyKHRoaXMuYmFzZU1hcC51cmxUZW1wbGF0ZSB8fCBERUZBVUxUX0JBU0VfTUFQLG9wdGlvbnMpO1xuICB9XG5cbiAgY3JlYXRlTWFwKCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgIGlmKHRoaXMubWFwKXtcbiAgICAgICAgdGhpcy5tYXAucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMubWFwID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdGhlRGl2ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCB0aGVIb3N0ID0gdGhlRGl2LnF1ZXJ5U2VsZWN0b3IoJy5sZWFmbGV0SG9zdCcpO1xuXG4gICAgICAvLyBsZXQgYmFzZUxheWVycyA9IFIubWFwT2JqSW5kZXhlZCh2PT57XG4gICAgICAvLyAgIHJldHVybiBMLnRpbGVMYXllcih2LFxuICAgICAgLy8gICAgIHsgbWF4Wm9vbTogMTgsIGF0dHJpYnV0aW9uOiAnLi4uJyB9KTtcbiAgICAgIC8vIH0sdGhpcy5iYXNlTWFwcyk7XG5cbiAgICAgIC8vIGlmKCF0aGlzLmJhc2VNYXAgfHwgIWJhc2VMYXllcnNbdGhpcy5iYXNlTWFwXSl7XG4gICAgICAvLyAgIHRoaXMuYmFzZU1hcCA9IE9iamVjdC5rZXlzKHRoaXMuYmFzZU1hcHMpWzBdO1xuICAgICAgLy8gfVxuXG4gICAgICAvLyBsZXQgYmFzZUxheWVyQXJyYXkgPSBbYmFzZUxheWVyc1t0aGlzLmJhc2VNYXBdXTtcbiAgICAgIGxldCBjcnMgPSBsZWFmbGV0LkNSUy5FUFNHMzg1NzsvLzpMLkNSUy5TaW1wbGU7XG4gICAgICAvLyBpZih0aGlzLmNycyl7XG4gICAgICAvLyAgIGNycyA9IEwuQ1JTW3RoaXMuY3JzXTtcbiAgICAgIC8vIH1cblxuICAgICAgLy8gbGV0IHBhbmVzID0gMDtcbiAgICAgIC8vIGlmKHRoaXMubWFwKXtcbiAgICAgIC8vICAgcGFuZXMgPSBnZXRDdXN0b21NYXBQYW5lcyh0aGlzLm1hcCkubGVuZ3RoO1xuICAgICAgLy8gfVxuICAgICAgdGhpcy5jcmVhdGVCYXNlTGF5ZXIoKTtcbiAgICAgIGNvbnN0IGJhc2VMYXllckFycmF5ID0gW1xuICAgICAgXTtcbiAgICAgIGlmKHRoaXMuYmFzZUxheWVyKXtcbiAgICAgICAgYmFzZUxheWVyQXJyYXkucHVzaCh0aGlzLmJhc2VMYXllcik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubWFwID0gbGVhZmxldC5tYXAodGhlSG9zdCBhcyBIVE1MRWxlbWVudCx7XG4gICAgICAgIGNycyxcbiAgICAgICAgem9vbTogNSxcbiAgICAgICAgbWluWm9vbTogdGhpcy5taW5ab29tLFxuICAgICAgICBtYXhab29tOiB0aGlzLm1heFpvb20sXG4gICAgICAgIHpvb21Db250cm9sOiB0aGlzLnpvb21Db250cm9sLFxuICAgICAgICBjZW50ZXI6IGxlYWZsZXQubGF0TG5nKC0yMCwgMTM1KSxcbiAgICAgICAgLy8gem9vbTogdGhpcy56b29tLFxuICAgICAgICAvLyBtaW5ab29tOiB0aGlzLm1pblpvb20sXG4gICAgICAgIC8vIG1heFpvb206IHRoaXMubWF4Wm9vbSxcbiAgICAgICAgc2Nyb2xsV2hlZWxab29tOiB0cnVlLFxuICAgICAgICBsYXllcnM6YmFzZUxheWVyQXJyYXksXG4gICAgICAgIGNvbnRpbnVvdXNXb3JsZDogZmFsc2UsXG4gICAgICAgIG5vV3JhcDogdHJ1ZVxuICAgICAgICAgICAgLy8gYXR0cmlidXRpb25Db250cm9sOiB0aGlzLmF0dHJpYnV0aW9uXG4gICAgICB9IGFzIGxlYWZsZXQuTWFwT3B0aW9ucyk7XG4gICAgICB0aGlzLnN2Yy5tYXBDcmVhdGVkKHRoaXMubWFwKTtcbiAgICAgIC8vIGlmKCF0aGlzLnBhbm5hYmxlKXtcbiAgICAgIC8vICAgdGhpcy5tYXAuZHJhZ2dpbmcuZGlzYWJsZSgpO1xuICAgICAgLy8gfVxuXG4gICAgICAvLyBpZighdGhpcy56b29tYWJsZSl7XG4gICAgICAvLyAgIHRoaXMubWFwLnRvdWNoWm9vbS5kaXNhYmxlKCk7XG4gICAgICAvLyAgIHRoaXMubWFwLmRvdWJsZUNsaWNrWm9vbS5kaXNhYmxlKCk7XG4gICAgICAvLyAgIHRoaXMubWFwLnNjcm9sbFdoZWVsWm9vbS5kaXNhYmxlKCk7XG4gICAgICAvLyB9XG5cbiAgICAgIC8vIGNvbmZpZ3VyZVZlY3RvclBhbmVzKHBhbmVzLHRoaXMubWFwKTtcblxuICAgICAgLy8gdGhpcy5faGVscGVyLnJlZ2lzdGVyKHRoaXMubWFwKTtcbiAgICAgIHRoaXMubWFwLm9uKCdjbGljaycsKGV2dDogbGVhZmxldC5MZWFmbGV0TW91c2VFdmVudCk9PntcbiAgICAgICAgaWYoZXZ0Lm9yaWdpbmFsRXZlbnQuZGVmYXVsdFByZXZlbnRlZCl7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMucG9pbnRDbGljay5lbWl0KGV2dC5sYXRsbmcpO1xuICAgICAgfSk7XG4gICAgICAvLyB0aGlzLmNyZWF0aW5nPWZhbHNlO1xuXG4gICAgICAvLyB0aGlzLm1hcC5vbignem9vbWVuZCcsKCk9PnRoaXMuY29vcmRpbmF0ZXNDaGFuZ2VkKCkpO1xuICAgICAgLy8gdGhpcy5tYXAub24oJ21vdmVlbmQnLCgpPT50aGlzLmNvb3JkaW5hdGVzQ2hhbmdlZCgpKTtcblxuICAgICAgLy8gaWYodGhpcy5zaG93TGF5ZXJDb250cm9sKXtcbiAgICAgIC8vICAgdGhpcy5sYXllckNvbnRyb2wgPSBMLmNvbnRyb2wubGF5ZXJzKGJhc2VMYXllcnMsIFtdLHtcbiAgICAgIC8vICAgICBoaWRlU2luZ2xlQmFzZTp0cnVlXG4gICAgICAvLyAgIH0pLmFkZFRvKHRoaXMubWFwKTtcbiAgICAgIC8vIH1cblxuICAgICAgLy8gdGhpcy5tYXBDcmVhdGVkLmVtaXQodGhpcy5tYXApO1xuXG5cblxuICAgICAgLy8gdGhpcy5tYXJrZXJMYXllcnMgPSBbXTtcbiAgICAgIC8vIHRoaXMuc2V0dXBNYXJrZXJzKCk7XG5cbiAgICAgIHRoaXMuc2V0Qm91bmRzKCk7XG4gICAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgICB9KTtcblxuICB9XG5cbiAgc2V0Qm91bmRzKCk6IHZvaWQge1xuICAgIGlmKCF0aGlzLm1hcHx8IXRoaXMuYm91bmRzKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm1hcC5maXRCb3VuZHMoW1xuICAgICAgW3RoaXMuYm91bmRzLnNvdXRoLHRoaXMuYm91bmRzLndlc3RdLFxuICAgICAgW3RoaXMuYm91bmRzLm5vcnRoLHRoaXMuYm91bmRzLmVhc3RdXG4gICAgXSk7XG4gIH1cblxufVxuLypcbmh0dHA6Ly8zNS4yNDQuMTExLjE2ODo4MDgwL3dtc1xuP3NlcnZpY2U9V01TXG4mcmVxdWVzdD1HZXRNYXBcbiZsYXllcnM9d2NmXG4mc3R5bGVzPVxuJmZvcm1hdD1pbWFnZSUyRnBuZ1xuJnRyYW5zcGFyZW50PXRydWVcbiZ2ZXJzaW9uPTEuMS4xXG4mdGltZT0yMDE5LTAxLTAxVDAwJTNBMDAlM0EwMC4wMDBaXG4md2lkdGg9MjU2XG4maGVpZ2h0PTI1NlxuJnNycz1FUFNHJTNBMzg1N1xuJmJib3g9LTE3NTMyODE5Ljc5OTk0MDU5LC01MDA5Mzc3LjA4NTY5NzMxMSwtMTUwMjgxMzEuMjU3MDkxOTM2LC0yNTA0Njg4LjU0Mjg0ODY1NVxuXG4qL1xuIl19