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
                else {
                    _this.createBaseLayer();
                    _this.baseLayer.addTo(_this.map);
                }
            }
        });
        // Update parameters
    };
    LeafletMapComponent.prototype.createBaseLayer = function () {
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
            var baseLayerArray = [
                _this.baseLayer
            ];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZmxldC1tYXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtbGVhZmxldC8iLCJzb3VyY2VzIjpbImxlYWZsZXQtbWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBK0Y7QUFDL0YsaUNBQW1DO0FBQ25DLHFEQUFtRDs7OztBQUluRCxJQUFNLGdCQUFnQixHQUFDLG9EQUFvRCxDQUFDO0FBRTVFO0lBMkJFLDZCQUFvQixPQUFtQixFQUFVLEdBQW1CO1FBQWhELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFnQjtRQVgzRCxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUd0QixXQUFNLEdBQVEsRUFBRSxDQUFDO1FBQ2pCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBTWxCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQseUNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFDO1lBQ25CLE9BQU87U0FDUjtRQUVELElBQU0sV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBRWhELHFCQUFxQjtRQUNyQixZQUFZO1FBQ1osSUFBSTtRQUVKLGdCQUFnQjtRQUNoQix5QkFBeUI7UUFDekIsMkJBQTJCO1FBRTNCLDJCQUEyQjtRQUMzQixnQkFBZ0I7UUFDaEIsUUFBUTtRQUNSLE1BQU07UUFDTix1QkFBdUI7UUFDdkIsSUFBSTtRQUVSLHlCQUF5QjtRQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLE9BQU87UUFFSCxJQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUM7WUFDaEIsSUFBSSxDQUFDLFNBQVMs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QUMsSUFBSSxDQUFDO1NBQ3JDLENBQUMsQ0FBQztJQUNMLENBQUM7MEZBNUxVLG1CQUFtQjs0REFBbkIsbUJBQW1COztZQVhuQiw4QkFDWDtZQUFBLGtCQUF5QjtZQUMzQixpQkFBTTs7WUFGZ0MseUJBQWdCOzs4QkFWdEQ7Q0FtTkMsQUEzTUQsSUEyTUM7QUE5TFksa0RBQW1CO2tEQUFuQixtQkFBbUI7Y0FiL0IsZ0JBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFLHVGQUdYLEVBQUMsTUFBTSxFQUFFO29CQUNSLGdFQUlFO2lCQUNIO2FBQ0E7MEZBRVUsTUFBTTtrQkFBZCxZQUFLO1lBQ0csT0FBTztrQkFBZixZQUFLO1lBQ0csV0FBVztrQkFBbkIsWUFBSztZQUNHLE9BQU87a0JBQWYsWUFBSztZQUNHLE9BQU87a0JBQWYsWUFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBsZWFmbGV0IGZyb20gJ2xlYWZsZXQnO1xuaW1wb3J0IHsgTGVhZmxldFNlcnZpY2UgfSBmcm9tICcuL2xlYWZsZXQuc2VydmljZSc7XG5pbXBvcnQgeyBCb3VuZHMgfSBmcm9tICdtYXAtd2FsZCc7XG5pbXBvcnQgeyBCYXNlbWFwRGVzY3JpcHRvciB9IGZyb20gJy4vZGF0YSc7XG5cbmNvbnN0IERFRkFVTFRfQkFTRV9NQVA9J2h0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGVhZmxldC1tYXAnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJsZWFmbGV0SG9zdFwiIFtzdHlsZV09XCJzdHlsZXNcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gLHN0eWxlczogW1xuICBgXG4gIC5sZWFmbGV0SG9zdHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1pbi1oZWlnaHQ6NDAwcHg7XG4gIH1gXG5dXG59KVxuZXhwb3J0IGNsYXNzIExlYWZsZXRNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGJvdW5kczogQm91bmRzO1xuICBASW5wdXQoKSBiYXNlTWFwOiBCYXNlbWFwRGVzY3JpcHRvcjtcbiAgQElucHV0KCkgem9vbUNvbnRyb2wgPSB0cnVlO1xuICBASW5wdXQoKSBtaW5ab29tID0gNTtcbiAgQElucHV0KCkgbWF4Wm9vbSA9IDMyO1xuXG4gIG1hcDogbGVhZmxldC5NYXA7XG4gIHN0eWxlczogYW55ID0ge307XG4gIGluaXRpYWxpc2VkID0gZmFsc2U7XG5cbiAgLy8gTGVhZmxldC5UaWxlTGF5ZXJcbiAgcHJpdmF0ZSBiYXNlTGF5ZXI6IGxlYWZsZXQuVGlsZUxheWVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBzdmM6IExlYWZsZXRTZXJ2aWNlKSB7XG4gICAgY29uc29sZS5sb2coJ0xlYWZsZXRNYXBDb21wb25lbnQnKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZighdGhpcy5pbml0aWFsaXNlZCl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlQ291bnQgPSBPYmplY3Qua2V5cyhjaGFuZ2VzKS5sZW5ndGg7XG5cbiAgICAvLyBpZih0aGlzLmNyZWF0aW5nKXtcbiAgICAvLyAgIHJldHVybjtcbiAgICAvLyB9XG5cbiAgICAvLyBpZih0aGlzLm1hcCl7XG4gICAgLy8gICBpZihjaGFuZ2VzLm1hcmtlcnMpe1xuICAgIC8vICAgICB0aGlzLnNldHVwTWFya2VycygpO1xuXG4gICAgLy8gICAgIGlmKGNoYW5nZUNvdW50PT09MSl7XG4gICAgLy8gICAgICAgcmV0dXJuO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gICB0aGlzLm1hcC5yZW1vdmUoKTtcbiAgICAvLyB9XG5cbi8vICAgIGlmKCF0aGlzLmNyZWF0aW5nKXtcbiAgICB0aGlzLnVwZGF0ZU1hcChjaGFuZ2VzKTtcbi8vICAgIH1cblxuICAgIGlmKGNoYW5nZXMuYm91bmRzKXtcbiAgICAgIHRoaXMuc2V0Qm91bmRzKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVNYXAoKTtcbiAgICB0aGlzLnNldEJvdW5kcygpO1xuICB9XG5cbiAgdXBkYXRlTWFwKGNoYW5nZXM/OiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgaWYoIXRoaXMubWFwKXtcbiAgICAgICAgdGhpcy5jcmVhdGVNYXAoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZihjaGFuZ2VzJiZjaGFuZ2VzLmJhc2VNYXApe1xuICAgICAgICAvLyB0aGlzLmJhc2VMYXllci5zZXRVcmwodGhpcy5iYXNlTWFwLnVybFRlbXBsYXRlIHx8IERFRkFVTFRfQkFTRV9NQVApXG4gICAgICAgIGlmKHRoaXMuYmFzZUxheWVyKXtcbiAgICAgICAgICB0aGlzLmJhc2VMYXllci5zZXRVcmwodGhpcy5iYXNlTWFwLnVybFRlbXBsYXRlIHx8IERFRkFVTFRfQkFTRV9NQVApO1xuICAgICAgICAgIC8vIHRoaXMuYmFzZUxheWVyLnJlbW92ZUZyb20odGhpcy5tYXApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY3JlYXRlQmFzZUxheWVyKCk7XG4gICAgICAgICAgdGhpcy5iYXNlTGF5ZXIuYWRkVG8odGhpcy5tYXApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBVcGRhdGUgcGFyYW1ldGVyc1xuICB9XG5cbiAgY3JlYXRlQmFzZUxheWVyKCk6IHZvaWQge1xuICAgIGNvbnN0IG9wdGlvbnM6IGxlYWZsZXQuVGlsZUxheWVyT3B0aW9ucyA9IHt9O1xuICAgIGlmKHRoaXMuYmFzZU1hcC5tYXhOYXRpdmVab29tKXtcbiAgICAgIG9wdGlvbnMubWF4TmF0aXZlWm9vbSA9IHRoaXMuYmFzZU1hcC5tYXhOYXRpdmVab29tO1xuICAgIH1cblxuICAgIHRoaXMuYmFzZUxheWVyID0gbGVhZmxldC50aWxlTGF5ZXIodGhpcy5iYXNlTWFwLnVybFRlbXBsYXRlIHx8IERFRkFVTFRfQkFTRV9NQVAsb3B0aW9ucyk7XG4gIH1cblxuICBjcmVhdGVNYXAoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgaWYodGhpcy5tYXApe1xuICAgICAgICB0aGlzLm1hcC5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5tYXAgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0aGVEaXYgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IHRoZUhvc3QgPSB0aGVEaXYucXVlcnlTZWxlY3RvcignLmxlYWZsZXRIb3N0Jyk7XG5cbiAgICAgIC8vIGxldCBiYXNlTGF5ZXJzID0gUi5tYXBPYmpJbmRleGVkKHY9PntcbiAgICAgIC8vICAgcmV0dXJuIEwudGlsZUxheWVyKHYsXG4gICAgICAvLyAgICAgeyBtYXhab29tOiAxOCwgYXR0cmlidXRpb246ICcuLi4nIH0pO1xuICAgICAgLy8gfSx0aGlzLmJhc2VNYXBzKTtcblxuICAgICAgLy8gaWYoIXRoaXMuYmFzZU1hcCB8fCAhYmFzZUxheWVyc1t0aGlzLmJhc2VNYXBdKXtcbiAgICAgIC8vICAgdGhpcy5iYXNlTWFwID0gT2JqZWN0LmtleXModGhpcy5iYXNlTWFwcylbMF07XG4gICAgICAvLyB9XG5cbiAgICAgIC8vIGxldCBiYXNlTGF5ZXJBcnJheSA9IFtiYXNlTGF5ZXJzW3RoaXMuYmFzZU1hcF1dO1xuICAgICAgbGV0IGNycyA9IGxlYWZsZXQuQ1JTLkVQU0czODU3Oy8vOkwuQ1JTLlNpbXBsZTtcbiAgICAgIC8vIGlmKHRoaXMuY3JzKXtcbiAgICAgIC8vICAgY3JzID0gTC5DUlNbdGhpcy5jcnNdO1xuICAgICAgLy8gfVxuXG4gICAgICAvLyBsZXQgcGFuZXMgPSAwO1xuICAgICAgLy8gaWYodGhpcy5tYXApe1xuICAgICAgLy8gICBwYW5lcyA9IGdldEN1c3RvbU1hcFBhbmVzKHRoaXMubWFwKS5sZW5ndGg7XG4gICAgICAvLyB9XG4gICAgICB0aGlzLmNyZWF0ZUJhc2VMYXllcigpO1xuICAgICAgY29uc3QgYmFzZUxheWVyQXJyYXkgPSBbXG4gICAgICAgIHRoaXMuYmFzZUxheWVyXG4gICAgICBdO1xuXG4gICAgICB0aGlzLm1hcCA9IGxlYWZsZXQubWFwKHRoZUhvc3QgYXMgSFRNTEVsZW1lbnQse1xuICAgICAgICBjcnMsXG4gICAgICAgIHpvb206IDUsXG4gICAgICAgIG1pblpvb206IHRoaXMubWluWm9vbSxcbiAgICAgICAgbWF4Wm9vbTogdGhpcy5tYXhab29tLFxuICAgICAgICB6b29tQ29udHJvbDogdGhpcy56b29tQ29udHJvbCxcbiAgICAgICAgY2VudGVyOiBsZWFmbGV0LmxhdExuZygtMjAsIDEzNSksXG4gICAgICAgIC8vIHpvb206IHRoaXMuem9vbSxcbiAgICAgICAgLy8gbWluWm9vbTogdGhpcy5taW5ab29tLFxuICAgICAgICAvLyBtYXhab29tOiB0aGlzLm1heFpvb20sXG4gICAgICAgIHNjcm9sbFdoZWVsWm9vbTogdHJ1ZSxcbiAgICAgICAgbGF5ZXJzOmJhc2VMYXllckFycmF5LFxuICAgICAgICBjb250aW51b3VzV29ybGQ6IGZhbHNlLFxuICAgICAgICBub1dyYXA6IHRydWVcbiAgICAgICAgICAgIC8vIGF0dHJpYnV0aW9uQ29udHJvbDogdGhpcy5hdHRyaWJ1dGlvblxuICAgICAgfSBhcyBsZWFmbGV0Lk1hcE9wdGlvbnMpO1xuICAgICAgdGhpcy5zdmMubWFwQ3JlYXRlZCh0aGlzLm1hcCk7XG4gICAgICAvLyBpZighdGhpcy5wYW5uYWJsZSl7XG4gICAgICAvLyAgIHRoaXMubWFwLmRyYWdnaW5nLmRpc2FibGUoKTtcbiAgICAgIC8vIH1cblxuICAgICAgLy8gaWYoIXRoaXMuem9vbWFibGUpe1xuICAgICAgLy8gICB0aGlzLm1hcC50b3VjaFpvb20uZGlzYWJsZSgpO1xuICAgICAgLy8gICB0aGlzLm1hcC5kb3VibGVDbGlja1pvb20uZGlzYWJsZSgpO1xuICAgICAgLy8gICB0aGlzLm1hcC5zY3JvbGxXaGVlbFpvb20uZGlzYWJsZSgpO1xuICAgICAgLy8gfVxuXG4gICAgICAvLyBjb25maWd1cmVWZWN0b3JQYW5lcyhwYW5lcyx0aGlzLm1hcCk7XG5cbiAgICAgIC8vIHRoaXMuX2hlbHBlci5yZWdpc3Rlcih0aGlzLm1hcCk7XG4gICAgICB0aGlzLm1hcC5vbignY2xpY2snLChldnQ6IGxlYWZsZXQuTGVhZmxldE1vdXNlRXZlbnQpPT57XG4gICAgICAgIGlmKGV2dC5vcmlnaW5hbEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpe1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLnBvaW50Q2xpY2suZW1pdChldnQubGF0bG5nKTtcbiAgICAgIH0pO1xuICAgICAgLy8gdGhpcy5jcmVhdGluZz1mYWxzZTtcblxuICAgICAgLy8gdGhpcy5tYXAub24oJ3pvb21lbmQnLCgpPT50aGlzLmNvb3JkaW5hdGVzQ2hhbmdlZCgpKTtcbiAgICAgIC8vIHRoaXMubWFwLm9uKCdtb3ZlZW5kJywoKT0+dGhpcy5jb29yZGluYXRlc0NoYW5nZWQoKSk7XG5cbiAgICAgIC8vIGlmKHRoaXMuc2hvd0xheWVyQ29udHJvbCl7XG4gICAgICAvLyAgIHRoaXMubGF5ZXJDb250cm9sID0gTC5jb250cm9sLmxheWVycyhiYXNlTGF5ZXJzLCBbXSx7XG4gICAgICAvLyAgICAgaGlkZVNpbmdsZUJhc2U6dHJ1ZVxuICAgICAgLy8gICB9KS5hZGRUbyh0aGlzLm1hcCk7XG4gICAgICAvLyB9XG5cbiAgICAgIC8vIHRoaXMubWFwQ3JlYXRlZC5lbWl0KHRoaXMubWFwKTtcblxuXG5cbiAgICAgIC8vIHRoaXMubWFya2VyTGF5ZXJzID0gW107XG4gICAgICAvLyB0aGlzLnNldHVwTWFya2VycygpO1xuXG4gICAgICB0aGlzLnNldEJvdW5kcygpO1xuICAgICAgdGhpcy5pbml0aWFsaXNlZCA9IHRydWU7XG4gICAgfSk7XG5cbiAgfVxuXG4gIHNldEJvdW5kcygpOiB2b2lkIHtcbiAgICBpZighdGhpcy5tYXB8fCF0aGlzLmJvdW5kcyl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5tYXAuZml0Qm91bmRzKFtcbiAgICAgIFt0aGlzLmJvdW5kcy5zb3V0aCx0aGlzLmJvdW5kcy53ZXN0XSxcbiAgICAgIFt0aGlzLmJvdW5kcy5ub3J0aCx0aGlzLmJvdW5kcy5lYXN0XVxuICAgIF0pO1xuICB9XG5cbn1cbi8qXG5odHRwOi8vMzUuMjQ0LjExMS4xNjg6ODA4MC93bXNcbj9zZXJ2aWNlPVdNU1xuJnJlcXVlc3Q9R2V0TWFwXG4mbGF5ZXJzPXdjZlxuJnN0eWxlcz1cbiZmb3JtYXQ9aW1hZ2UlMkZwbmdcbiZ0cmFuc3BhcmVudD10cnVlXG4mdmVyc2lvbj0xLjEuMVxuJnRpbWU9MjAxOS0wMS0wMVQwMCUzQTAwJTNBMDAuMDAwWlxuJndpZHRoPTI1NlxuJmhlaWdodD0yNTZcbiZzcnM9RVBTRyUzQTM4NTdcbiZiYm94PS0xNzUzMjgxOS43OTk5NDA1OSwtNTAwOTM3Ny4wODU2OTczMTEsLTE1MDI4MTMxLjI1NzA5MTkzNiwtMjUwNDY4OC41NDI4NDg2NTVcblxuKi9cbiJdfQ==