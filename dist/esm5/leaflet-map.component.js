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
                noWrap: true,
                tap: false,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZmxldC1tYXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtbGVhZmxldC8iLCJzb3VyY2VzIjpbImxlYWZsZXQtbWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBK0Y7QUFDL0YsaUNBQW1DO0FBQ25DLHFEQUFtRDs7OztBQUluRCxJQUFNLGdCQUFnQixHQUFDLG9EQUFvRCxDQUFDO0FBRTVFO0lBMkJFLDZCQUFvQixPQUFtQixFQUFVLEdBQW1CO1FBQWhELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFnQjtRQVgzRCxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUd0QixXQUFNLEdBQVEsRUFBRSxDQUFDO1FBQ2pCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBTWxCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQseUNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFDO1lBQ25CLE9BQU87U0FDUjtRQUVELElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBRWhELHFCQUFxQjtRQUNyQixZQUFZO1FBQ1osSUFBSTtRQUVKLGdCQUFnQjtRQUNoQix5QkFBeUI7UUFDekIsMkJBQTJCO1FBRTNCLDJCQUEyQjtRQUMzQixnQkFBZ0I7UUFDaEIsUUFBUTtRQUNSLE1BQU07UUFDTix1QkFBdUI7UUFDdkIsSUFBSTtRQUVSLHlCQUF5QjtRQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLE9BQU87UUFFSCxJQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUM7WUFDaEIsSUFBSSxDQUFDLFNBQVMs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LElBQUksQ0FBQyxNQUFNLEVBQUM7WUFDekIsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7WUFDakIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNwQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ3JDLENBQUMsQ0FBQztJQUNMLENBQUM7MEZBck1VLG1CQUFtQjs0REFBbkIsbUJBQW1COztZQVhuQiw4QkFDWDtZQUFBLGtCQUF5QjtZQUMzQixpQkFBTTs7WUFGZ0MseUJBQWdCOzs4QkFWdEQ7Q0E0TkMsQUFwTkQsSUFvTkM7QUF2TVksa0RBQW1CO2tEQUFuQixtQkFBbUI7Y0FiL0IsZ0JBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLHVGQUdYLEVBQUMsTUFBTSxFQUFFO29CQUNSLGdFQUlFO2lCQUNIO2FBQ0E7MEZBRVUsTUFBTTtrQkFBZCxZQUFLO1lBQ0csT0FBTztrQkFBZixZQUFLO1lBQ0csV0FBVztrQkFBbkIsWUFBSztZQUNHLE9BQU87a0JBQWYsWUFBSztZQUNHLE9BQU87a0JBQWYsWUFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBsZWFmbGV0IGZyb20gJ2xlYWZsZXQnO1xuaW1wb3J0IHsgTGVhZmxldFNlcnZpY2UgfSBmcm9tICcuL2xlYWZsZXQuc2VydmljZSc7XG5pbXBvcnQgeyBCb3VuZHMgfSBmcm9tICdtYXAtd2FsZCc7XG5pbXBvcnQgeyBCYXNlbWFwRGVzY3JpcHRvciB9IGZyb20gJy4vZGF0YSc7XG5cbmNvbnN0IERFRkFVTFRfQkFTRV9NQVA9J2h0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGVhZmxldC1tYXAnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJsZWFmbGV0SG9zdFwiIFtzdHlsZV09XCJzdHlsZXNcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gLHN0eWxlczogW1xuICBgXG4gIC5sZWFmbGV0SG9zdHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1pbi1oZWlnaHQ6NDAwcHg7XG4gIH1gXG5dXG59KVxuZXhwb3J0IGNsYXNzIExlYWZsZXRNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGJvdW5kczogQm91bmRzO1xuICBASW5wdXQoKSBiYXNlTWFwOiBCYXNlbWFwRGVzY3JpcHRvcjtcbiAgQElucHV0KCkgem9vbUNvbnRyb2wgPSB0cnVlO1xuICBASW5wdXQoKSBtaW5ab29tID0gNTtcbiAgQElucHV0KCkgbWF4Wm9vbSA9IDMyO1xuXG4gIG1hcDogbGVhZmxldC5NYXA7XG4gIHN0eWxlczogYW55ID0ge307XG4gIGluaXRpYWxpc2VkID0gZmFsc2U7XG5cbiAgLy8gTGVhZmxldC5UaWxlTGF5ZXJcbiAgcHJpdmF0ZSBiYXNlTGF5ZXI6IGxlYWZsZXQuVGlsZUxheWVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBzdmM6IExlYWZsZXRTZXJ2aWNlKSB7XG4gICAgY29uc29sZS5sb2coJ0xlYWZsZXRNYXBDb21wb25lbnQnKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZighdGhpcy5pbml0aWFsaXNlZCl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlQ291bnQgPSBPYmplY3Qua2V5cyhjaGFuZ2VzKS5sZW5ndGg7XG5cbiAgICAvLyBpZih0aGlzLmNyZWF0aW5nKXtcbiAgICAvLyAgIHJldHVybjtcbiAgICAvLyB9XG5cbiAgICAvLyBpZih0aGlzLm1hcCl7XG4gICAgLy8gICBpZihjaGFuZ2VzLm1hcmtlcnMpe1xuICAgIC8vICAgICB0aGlzLnNldHVwTWFya2VycygpO1xuXG4gICAgLy8gICAgIGlmKGNoYW5nZUNvdW50PT09MSl7XG4gICAgLy8gICAgICAgcmV0dXJuO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gICB0aGlzLm1hcC5yZW1vdmUoKTtcbiAgICAvLyB9XG5cbi8vICAgIGlmKCF0aGlzLmNyZWF0aW5nKXtcbiAgICB0aGlzLnVwZGF0ZU1hcChjaGFuZ2VzKTtcbi8vICAgIH1cblxuICAgIGlmKGNoYW5nZXMuYm91bmRzKXtcbiAgICAgIHRoaXMuc2V0Qm91bmRzKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVNYXAoKTtcbiAgICB0aGlzLnNldEJvdW5kcygpO1xuICB9XG5cbiAgdXBkYXRlTWFwKGNoYW5nZXM/OiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgaWYoIXRoaXMubWFwKXtcbiAgICAgICAgdGhpcy5jcmVhdGVNYXAoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZihjaGFuZ2VzJiZjaGFuZ2VzLmJhc2VNYXApe1xuICAgICAgICAvLyB0aGlzLmJhc2VMYXllci5zZXRVcmwodGhpcy5iYXNlTWFwLnVybFRlbXBsYXRlIHx8IERFRkFVTFRfQkFTRV9NQVApXG4gICAgICAgIGlmKHRoaXMuYmFzZUxheWVyKXtcbiAgICAgICAgICB0aGlzLmJhc2VMYXllci5zZXRVcmwodGhpcy5iYXNlTWFwLnVybFRlbXBsYXRlIHx8IERFRkFVTFRfQkFTRV9NQVApO1xuICAgICAgICAgIC8vIHRoaXMuYmFzZUxheWVyLnJlbW92ZUZyb20odGhpcy5tYXApO1xuICAgICAgICB9IGVsc2UgaWYodGhpcy5iYXNlTWFwKSB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVCYXNlTGF5ZXIoKTtcbiAgICAgICAgICB0aGlzLmJhc2VMYXllci5hZGRUbyh0aGlzLm1hcCkuYnJpbmdUb0JhY2soKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gVXBkYXRlIHBhcmFtZXRlcnNcbiAgfVxuXG4gIGNyZWF0ZUJhc2VMYXllcigpOiB2b2lkIHtcbiAgICB0aGlzLmJhc2VMYXllciA9IG51bGw7XG4gICAgaWYoIXRoaXMuYmFzZU1hcCl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9uczogbGVhZmxldC5UaWxlTGF5ZXJPcHRpb25zID0ge307XG4gICAgaWYodGhpcy5iYXNlTWFwLm1heE5hdGl2ZVpvb20pe1xuICAgICAgb3B0aW9ucy5tYXhOYXRpdmVab29tID0gdGhpcy5iYXNlTWFwLm1heE5hdGl2ZVpvb207XG4gICAgfVxuXG4gICAgdGhpcy5iYXNlTGF5ZXIgPSBsZWFmbGV0LnRpbGVMYXllcih0aGlzLmJhc2VNYXAudXJsVGVtcGxhdGUgfHwgREVGQVVMVF9CQVNFX01BUCxvcHRpb25zKTtcbiAgfVxuXG4gIGNyZWF0ZU1hcCgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICBpZih0aGlzLm1hcCl7XG4gICAgICAgIHRoaXMubWFwLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLm1hcCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRoZURpdiA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgdGhlSG9zdCA9IHRoZURpdi5xdWVyeVNlbGVjdG9yKCcubGVhZmxldEhvc3QnKTtcblxuICAgICAgLy8gbGV0IGJhc2VMYXllcnMgPSBSLm1hcE9iakluZGV4ZWQodj0+e1xuICAgICAgLy8gICByZXR1cm4gTC50aWxlTGF5ZXIodixcbiAgICAgIC8vICAgICB7IG1heFpvb206IDE4LCBhdHRyaWJ1dGlvbjogJy4uLicgfSk7XG4gICAgICAvLyB9LHRoaXMuYmFzZU1hcHMpO1xuXG4gICAgICAvLyBpZighdGhpcy5iYXNlTWFwIHx8ICFiYXNlTGF5ZXJzW3RoaXMuYmFzZU1hcF0pe1xuICAgICAgLy8gICB0aGlzLmJhc2VNYXAgPSBPYmplY3Qua2V5cyh0aGlzLmJhc2VNYXBzKVswXTtcbiAgICAgIC8vIH1cblxuICAgICAgLy8gbGV0IGJhc2VMYXllckFycmF5ID0gW2Jhc2VMYXllcnNbdGhpcy5iYXNlTWFwXV07XG4gICAgICBsZXQgY3JzID0gbGVhZmxldC5DUlMuRVBTRzM4NTc7Ly86TC5DUlMuU2ltcGxlO1xuICAgICAgLy8gaWYodGhpcy5jcnMpe1xuICAgICAgLy8gICBjcnMgPSBMLkNSU1t0aGlzLmNyc107XG4gICAgICAvLyB9XG5cbiAgICAgIC8vIGxldCBwYW5lcyA9IDA7XG4gICAgICAvLyBpZih0aGlzLm1hcCl7XG4gICAgICAvLyAgIHBhbmVzID0gZ2V0Q3VzdG9tTWFwUGFuZXModGhpcy5tYXApLmxlbmd0aDtcbiAgICAgIC8vIH1cbiAgICAgIHRoaXMuY3JlYXRlQmFzZUxheWVyKCk7XG4gICAgICBjb25zdCBiYXNlTGF5ZXJBcnJheSA9IFtcbiAgICAgIF07XG4gICAgICBpZih0aGlzLmJhc2VMYXllcil7XG4gICAgICAgIGJhc2VMYXllckFycmF5LnB1c2godGhpcy5iYXNlTGF5ZXIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm1hcCA9IGxlYWZsZXQubWFwKHRoZUhvc3QgYXMgSFRNTEVsZW1lbnQse1xuICAgICAgICBjcnMsXG4gICAgICAgIHpvb206IDUsXG4gICAgICAgIG1pblpvb206IHRoaXMubWluWm9vbSxcbiAgICAgICAgbWF4Wm9vbTogdGhpcy5tYXhab29tLFxuICAgICAgICB6b29tQ29udHJvbDogdGhpcy56b29tQ29udHJvbCxcbiAgICAgICAgY2VudGVyOiBsZWFmbGV0LmxhdExuZygtMjAsIDEzNSksXG4gICAgICAgIC8vIHpvb206IHRoaXMuem9vbSxcbiAgICAgICAgLy8gbWluWm9vbTogdGhpcy5taW5ab29tLFxuICAgICAgICAvLyBtYXhab29tOiB0aGlzLm1heFpvb20sXG4gICAgICAgIHNjcm9sbFdoZWVsWm9vbTogdHJ1ZSxcbiAgICAgICAgbGF5ZXJzOmJhc2VMYXllckFycmF5LFxuICAgICAgICBjb250aW51b3VzV29ybGQ6IGZhbHNlLFxuICAgICAgICBub1dyYXA6IHRydWUsXG4gICAgICAgIHRhcDogZmFsc2UsXG4gICAgICAgIC8vIHdvcmxkQ29weUp1bXA6dHJ1ZVxuICAgICAgICAgICAgLy8gYXR0cmlidXRpb25Db250cm9sOiB0aGlzLmF0dHJpYnV0aW9uXG4gICAgICB9IGFzIGxlYWZsZXQuTWFwT3B0aW9ucyk7XG4gICAgICB0aGlzLnN2Yy5tYXBDcmVhdGVkKHRoaXMubWFwKTtcbiAgICAgIC8vIGlmKCF0aGlzLnBhbm5hYmxlKXtcbiAgICAgIC8vICAgdGhpcy5tYXAuZHJhZ2dpbmcuZGlzYWJsZSgpO1xuICAgICAgLy8gfVxuXG4gICAgICAvLyBpZighdGhpcy56b29tYWJsZSl7XG4gICAgICAvLyAgIHRoaXMubWFwLnRvdWNoWm9vbS5kaXNhYmxlKCk7XG4gICAgICAvLyAgIHRoaXMubWFwLmRvdWJsZUNsaWNrWm9vbS5kaXNhYmxlKCk7XG4gICAgICAvLyAgIHRoaXMubWFwLnNjcm9sbFdoZWVsWm9vbS5kaXNhYmxlKCk7XG4gICAgICAvLyB9XG5cbiAgICAgIC8vIGNvbmZpZ3VyZVZlY3RvclBhbmVzKHBhbmVzLHRoaXMubWFwKTtcblxuICAgICAgLy8gdGhpcy5faGVscGVyLnJlZ2lzdGVyKHRoaXMubWFwKTtcbiAgICAgIHRoaXMubWFwLm9uKCdjbGljaycsKGV2dDogbGVhZmxldC5MZWFmbGV0TW91c2VFdmVudCk9PntcbiAgICAgICAgaWYoZXZ0Lm9yaWdpbmFsRXZlbnQuZGVmYXVsdFByZXZlbnRlZCl7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMucG9pbnRDbGljay5lbWl0KGV2dC5sYXRsbmcpO1xuICAgICAgfSk7XG4gICAgICAvLyB0aGlzLmNyZWF0aW5nPWZhbHNlO1xuXG4gICAgICAvLyB0aGlzLm1hcC5vbignem9vbWVuZCcsKCk9PnRoaXMuY29vcmRpbmF0ZXNDaGFuZ2VkKCkpO1xuICAgICAgLy8gdGhpcy5tYXAub24oJ21vdmVlbmQnLCgpPT50aGlzLmNvb3JkaW5hdGVzQ2hhbmdlZCgpKTtcblxuICAgICAgLy8gaWYodGhpcy5zaG93TGF5ZXJDb250cm9sKXtcbiAgICAgIC8vICAgdGhpcy5sYXllckNvbnRyb2wgPSBMLmNvbnRyb2wubGF5ZXJzKGJhc2VMYXllcnMsIFtdLHtcbiAgICAgIC8vICAgICBoaWRlU2luZ2xlQmFzZTp0cnVlXG4gICAgICAvLyAgIH0pLmFkZFRvKHRoaXMubWFwKTtcbiAgICAgIC8vIH1cblxuICAgICAgLy8gdGhpcy5tYXBDcmVhdGVkLmVtaXQodGhpcy5tYXApO1xuXG5cblxuICAgICAgLy8gdGhpcy5tYXJrZXJMYXllcnMgPSBbXTtcbiAgICAgIC8vIHRoaXMuc2V0dXBNYXJrZXJzKCk7XG5cbiAgICAgIHRoaXMuc2V0Qm91bmRzKCk7XG4gICAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgICB9KTtcblxuICB9XG5cbiAgc2V0Qm91bmRzKCk6IHZvaWQge1xuICAgIGlmKCF0aGlzLm1hcHx8IXRoaXMuYm91bmRzKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm1hcC5maXRCb3VuZHMoW1xuICAgICAgW3RoaXMuYm91bmRzLnNvdXRoLHRoaXMuYm91bmRzLndlc3RdLFxuICAgICAgW3RoaXMuYm91bmRzLm5vcnRoLHRoaXMuYm91bmRzLmVhc3RdXG4gICAgXSk7XG4gIH1cblxufVxuLypcbmh0dHA6Ly8zNS4yNDQuMTExLjE2ODo4MDgwL3dtc1xuP3NlcnZpY2U9V01TXG4mcmVxdWVzdD1HZXRNYXBcbiZsYXllcnM9d2NmXG4mc3R5bGVzPVxuJmZvcm1hdD1pbWFnZSUyRnBuZ1xuJnRyYW5zcGFyZW50PXRydWVcbiZ2ZXJzaW9uPTEuMS4xXG4mdGltZT0yMDE5LTAxLTAxVDAwJTNBMDAlM0EwMC4wMDBaXG4md2lkdGg9MjU2XG4maGVpZ2h0PTI1NlxuJnNycz1FUFNHJTNBMzg1N1xuJmJib3g9LTE3NTMyODE5Ljc5OTk0MDU5LC01MDA5Mzc3LjA4NTY5NzMxMSwtMTUwMjgxMzEuMjU3MDkxOTM2LC0yNTA0Njg4LjU0Mjg0ODY1NVxuXG4qL1xuIl19