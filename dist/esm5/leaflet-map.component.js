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
        this.pointSelection = false;
        this.pointSelected = new core_1.EventEmitter();
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
                maxBounds: toBounds(_this.maxBounds),
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
                if (!_this.pointSelection || evt.originalEvent.defaultPrevented) {
                    return;
                }
                _this.pointSelected.emit(evt.latlng);
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
        this.map.fitBounds(toBounds(this.bounds));
    };
    LeafletMapComponent.ɵfac = function LeafletMapComponent_Factory(t) { return new (t || LeafletMapComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.LeafletService)); };
    LeafletMapComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LeafletMapComponent, selectors: [["leaflet-map"]], inputs: { bounds: "bounds", maxBounds: "maxBounds", baseMap: "baseMap", zoomControl: "zoomControl", minZoom: "minZoom", maxZoom: "maxZoom", pointSelection: "pointSelection" }, outputs: { pointSelected: "pointSelected" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[1, "leafletHost"]], template: function LeafletMapComponent_Template(rf, ctx) { if (rf & 1) {
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
        }], maxBounds: [{
            type: core_1.Input
        }], baseMap: [{
            type: core_1.Input
        }], zoomControl: [{
            type: core_1.Input
        }], minZoom: [{
            type: core_1.Input
        }], maxZoom: [{
            type: core_1.Input
        }], pointSelection: [{
            type: core_1.Input
        }], pointSelected: [{
            type: core_1.Output
        }] }); })();
/*
http://35.244.111.168:8080/wms
?service=WMS
&request=GetMap
&layers=wcf
&styles=
&format=image%2Fpng
&transparent=true
&version=1.1.1
&time=2019-01-01T00%3A00%3A00.000Z
&width=256
&height=256
&srs=EPSG%3A3857
&bbox=-17532819.79994059,-5009377.085697311,-15028131.257091936,-2504688.542848655

*/
function toBounds(bounds) {
    if (!bounds) {
        return null;
    }
    return [
        [bounds.south, bounds.west],
        [bounds.north, bounds.east]
    ];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZmxldC1tYXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtbGVhZmxldC8iLCJzb3VyY2VzIjpbImxlYWZsZXQtbWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBcUg7QUFDckgsaUNBQW1DO0FBQ25DLHFEQUFtRDs7OztBQUluRCxJQUFNLGdCQUFnQixHQUFDLG9EQUFvRCxDQUFDO0FBRTVFO0lBOEJFLDZCQUFvQixPQUFtQixFQUFVLEdBQW1CO1FBQWhELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFnQjtRQWIzRCxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGtCQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUFrQixDQUFDO1FBRzdELFdBQU0sR0FBUSxFQUFFLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFNbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCx5Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUM7WUFDbkIsT0FBTztTQUNSO1FBRUQsSUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFaEQscUJBQXFCO1FBQ3JCLFlBQVk7UUFDWixJQUFJO1FBRUosZ0JBQWdCO1FBQ2hCLHlCQUF5QjtRQUN6QiwyQkFBMkI7UUFFM0IsMkJBQTJCO1FBQzNCLGdCQUFnQjtRQUNoQixRQUFRO1FBQ1IsTUFBTTtRQUNOLHVCQUF1QjtRQUN2QixJQUFJO1FBRVIseUJBQXlCO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENB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RUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQzNCLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgRWxlbWVudFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBsZWFmbGV0IGZyb20gJ2xlYWZsZXQnO1xuaW1wb3J0IHsgTGVhZmxldFNlcnZpY2UgfSBmcm9tICcuL2xlYWZsZXQuc2VydmljZSc7XG5pbXBvcnQgeyBCb3VuZHMgfSBmcm9tICdtYXAtd2FsZCc7XG5pbXBvcnQgeyBCYXNlbWFwRGVzY3JpcHRvciB9IGZyb20gJy4vZGF0YSc7XG5cbmNvbnN0IERFRkFVTFRfQkFTRV9NQVA9J2h0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGVhZmxldC1tYXAnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJsZWFmbGV0SG9zdFwiIFtzdHlsZV09XCJzdHlsZXNcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gLHN0eWxlczogW1xuICBgXG4gIC5sZWFmbGV0SG9zdHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1pbi1oZWlnaHQ6NDAwcHg7XG4gIH1gXG5dXG59KVxuZXhwb3J0IGNsYXNzIExlYWZsZXRNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGJvdW5kczogQm91bmRzO1xuICBASW5wdXQoKSBtYXhCb3VuZHM6IEJvdW5kcztcbiAgQElucHV0KCkgYmFzZU1hcDogQmFzZW1hcERlc2NyaXB0b3I7XG4gIEBJbnB1dCgpIHpvb21Db250cm9sID0gdHJ1ZTtcbiAgQElucHV0KCkgbWluWm9vbSA9IDU7XG4gIEBJbnB1dCgpIG1heFpvb20gPSAzMjtcbiAgQElucHV0KCkgcG9pbnRTZWxlY3Rpb24gPSBmYWxzZTtcbiAgQE91dHB1dCgpIHBvaW50U2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGxlYWZsZXQuTGF0TG5nPigpO1xuXG4gIG1hcDogbGVhZmxldC5NYXA7XG4gIHN0eWxlczogYW55ID0ge307XG4gIGluaXRpYWxpc2VkID0gZmFsc2U7XG5cbiAgLy8gTGVhZmxldC5UaWxlTGF5ZXJcbiAgcHJpdmF0ZSBiYXNlTGF5ZXI6IGxlYWZsZXQuVGlsZUxheWVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBzdmM6IExlYWZsZXRTZXJ2aWNlKSB7XG4gICAgY29uc29sZS5sb2coJ0xlYWZsZXRNYXBDb21wb25lbnQnKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZighdGhpcy5pbml0aWFsaXNlZCl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlQ291bnQgPSBPYmplY3Qua2V5cyhjaGFuZ2VzKS5sZW5ndGg7XG5cbiAgICAvLyBpZih0aGlzLmNyZWF0aW5nKXtcbiAgICAvLyAgIHJldHVybjtcbiAgICAvLyB9XG5cbiAgICAvLyBpZih0aGlzLm1hcCl7XG4gICAgLy8gICBpZihjaGFuZ2VzLm1hcmtlcnMpe1xuICAgIC8vICAgICB0aGlzLnNldHVwTWFya2VycygpO1xuXG4gICAgLy8gICAgIGlmKGNoYW5nZUNvdW50PT09MSl7XG4gICAgLy8gICAgICAgcmV0dXJuO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gICB0aGlzLm1hcC5yZW1vdmUoKTtcbiAgICAvLyB9XG5cbi8vICAgIGlmKCF0aGlzLmNyZWF0aW5nKXtcbiAgICB0aGlzLnVwZGF0ZU1hcChjaGFuZ2VzKTtcbi8vICAgIH1cblxuICAgIGlmKGNoYW5nZXMuYm91bmRzKXtcbiAgICAgIHRoaXMuc2V0Qm91bmRzKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVNYXAoKTtcbiAgICB0aGlzLnNldEJvdW5kcygpO1xuICB9XG5cbiAgdXBkYXRlTWFwKGNoYW5nZXM/OiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgaWYoIXRoaXMubWFwKXtcbiAgICAgICAgdGhpcy5jcmVhdGVNYXAoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZihjaGFuZ2VzJiZjaGFuZ2VzLmJhc2VNYXApe1xuICAgICAgICAvLyB0aGlzLmJhc2VMYXllci5zZXRVcmwodGhpcy5iYXNlTWFwLnVybFRlbXBsYXRlIHx8IERFRkFVTFRfQkFTRV9NQVApXG4gICAgICAgIGlmKHRoaXMuYmFzZUxheWVyKXtcbiAgICAgICAgICB0aGlzLmJhc2VMYXllci5zZXRVcmwodGhpcy5iYXNlTWFwLnVybFRlbXBsYXRlIHx8IERFRkFVTFRfQkFTRV9NQVApO1xuICAgICAgICAgIC8vIHRoaXMuYmFzZUxheWVyLnJlbW92ZUZyb20odGhpcy5tYXApO1xuICAgICAgICB9IGVsc2UgaWYodGhpcy5iYXNlTWFwKSB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVCYXNlTGF5ZXIoKTtcbiAgICAgICAgICB0aGlzLmJhc2VMYXllci5hZGRUbyh0aGlzLm1hcCkuYnJpbmdUb0JhY2soKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gVXBkYXRlIHBhcmFtZXRlcnNcbiAgfVxuXG4gIGNyZWF0ZUJhc2VMYXllcigpOiB2b2lkIHtcbiAgICB0aGlzLmJhc2VMYXllciA9IG51bGw7XG4gICAgaWYoIXRoaXMuYmFzZU1hcCl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9uczogbGVhZmxldC5UaWxlTGF5ZXJPcHRpb25zID0ge307XG4gICAgaWYodGhpcy5iYXNlTWFwLm1heE5hdGl2ZVpvb20pe1xuICAgICAgb3B0aW9ucy5tYXhOYXRpdmVab29tID0gdGhpcy5iYXNlTWFwLm1heE5hdGl2ZVpvb207XG4gICAgfVxuXG4gICAgdGhpcy5iYXNlTGF5ZXIgPSBsZWFmbGV0LnRpbGVMYXllcih0aGlzLmJhc2VNYXAudXJsVGVtcGxhdGUgfHwgREVGQVVMVF9CQVNFX01BUCxvcHRpb25zKTtcbiAgfVxuXG4gIGNyZWF0ZU1hcCgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICBpZih0aGlzLm1hcCl7XG4gICAgICAgIHRoaXMubWFwLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLm1hcCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRoZURpdiA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgdGhlSG9zdCA9IHRoZURpdi5xdWVyeVNlbGVjdG9yKCcubGVhZmxldEhvc3QnKTtcblxuICAgICAgLy8gbGV0IGJhc2VMYXllcnMgPSBSLm1hcE9iakluZGV4ZWQodj0+e1xuICAgICAgLy8gICByZXR1cm4gTC50aWxlTGF5ZXIodixcbiAgICAgIC8vICAgICB7IG1heFpvb206IDE4LCBhdHRyaWJ1dGlvbjogJy4uLicgfSk7XG4gICAgICAvLyB9LHRoaXMuYmFzZU1hcHMpO1xuXG4gICAgICAvLyBpZighdGhpcy5iYXNlTWFwIHx8ICFiYXNlTGF5ZXJzW3RoaXMuYmFzZU1hcF0pe1xuICAgICAgLy8gICB0aGlzLmJhc2VNYXAgPSBPYmplY3Qua2V5cyh0aGlzLmJhc2VNYXBzKVswXTtcbiAgICAgIC8vIH1cblxuICAgICAgLy8gbGV0IGJhc2VMYXllckFycmF5ID0gW2Jhc2VMYXllcnNbdGhpcy5iYXNlTWFwXV07XG4gICAgICBsZXQgY3JzID0gbGVhZmxldC5DUlMuRVBTRzM4NTc7Ly86TC5DUlMuU2ltcGxlO1xuICAgICAgLy8gaWYodGhpcy5jcnMpe1xuICAgICAgLy8gICBjcnMgPSBMLkNSU1t0aGlzLmNyc107XG4gICAgICAvLyB9XG5cbiAgICAgIC8vIGxldCBwYW5lcyA9IDA7XG4gICAgICAvLyBpZih0aGlzLm1hcCl7XG4gICAgICAvLyAgIHBhbmVzID0gZ2V0Q3VzdG9tTWFwUGFuZXModGhpcy5tYXApLmxlbmd0aDtcbiAgICAgIC8vIH1cbiAgICAgIHRoaXMuY3JlYXRlQmFzZUxheWVyKCk7XG4gICAgICBjb25zdCBiYXNlTGF5ZXJBcnJheSA9IFtcbiAgICAgIF07XG4gICAgICBpZih0aGlzLmJhc2VMYXllcil7XG4gICAgICAgIGJhc2VMYXllckFycmF5LnB1c2godGhpcy5iYXNlTGF5ZXIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm1hcCA9IGxlYWZsZXQubWFwKHRoZUhvc3QgYXMgSFRNTEVsZW1lbnQse1xuICAgICAgICBjcnMsXG4gICAgICAgIHpvb206IDUsXG4gICAgICAgIG1heEJvdW5kczogdG9Cb3VuZHModGhpcy5tYXhCb3VuZHMpLFxuICAgICAgICBtaW5ab29tOiB0aGlzLm1pblpvb20sXG4gICAgICAgIG1heFpvb206IHRoaXMubWF4Wm9vbSxcbiAgICAgICAgem9vbUNvbnRyb2w6IHRoaXMuem9vbUNvbnRyb2wsXG4gICAgICAgIGNlbnRlcjogbGVhZmxldC5sYXRMbmcoLTIwLCAxMzUpLFxuICAgICAgICAvLyB6b29tOiB0aGlzLnpvb20sXG4gICAgICAgIC8vIG1pblpvb206IHRoaXMubWluWm9vbSxcbiAgICAgICAgLy8gbWF4Wm9vbTogdGhpcy5tYXhab29tLFxuICAgICAgICBzY3JvbGxXaGVlbFpvb206IHRydWUsXG4gICAgICAgIGxheWVyczpiYXNlTGF5ZXJBcnJheSxcbiAgICAgICAgY29udGludW91c1dvcmxkOiBmYWxzZSxcbiAgICAgICAgbm9XcmFwOiB0cnVlLFxuICAgICAgICB0YXA6IGZhbHNlLFxuICAgICAgICAvLyB3b3JsZENvcHlKdW1wOnRydWVcbiAgICAgICAgICAgIC8vIGF0dHJpYnV0aW9uQ29udHJvbDogdGhpcy5hdHRyaWJ1dGlvblxuICAgICAgfSBhcyBsZWFmbGV0Lk1hcE9wdGlvbnMpO1xuICAgICAgdGhpcy5zdmMubWFwQ3JlYXRlZCh0aGlzLm1hcCk7XG4gICAgICAvLyBpZighdGhpcy5wYW5uYWJsZSl7XG4gICAgICAvLyAgIHRoaXMubWFwLmRyYWdnaW5nLmRpc2FibGUoKTtcbiAgICAgIC8vIH1cblxuICAgICAgLy8gaWYoIXRoaXMuem9vbWFibGUpe1xuICAgICAgLy8gICB0aGlzLm1hcC50b3VjaFpvb20uZGlzYWJsZSgpO1xuICAgICAgLy8gICB0aGlzLm1hcC5kb3VibGVDbGlja1pvb20uZGlzYWJsZSgpO1xuICAgICAgLy8gICB0aGlzLm1hcC5zY3JvbGxXaGVlbFpvb20uZGlzYWJsZSgpO1xuICAgICAgLy8gfVxuXG4gICAgICAvLyBjb25maWd1cmVWZWN0b3JQYW5lcyhwYW5lcyx0aGlzLm1hcCk7XG5cbiAgICAgIC8vIHRoaXMuX2hlbHBlci5yZWdpc3Rlcih0aGlzLm1hcCk7XG4gICAgICB0aGlzLm1hcC5vbignY2xpY2snLChldnQ6IGxlYWZsZXQuTGVhZmxldE1vdXNlRXZlbnQpPT57XG4gICAgICAgIGlmKCF0aGlzLnBvaW50U2VsZWN0aW9uIHx8IGV2dC5vcmlnaW5hbEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpe1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucG9pbnRTZWxlY3RlZC5lbWl0KGV2dC5sYXRsbmcpO1xuICAgICAgfSk7XG4gICAgICAvLyB0aGlzLmNyZWF0aW5nPWZhbHNlO1xuXG4gICAgICAvLyB0aGlzLm1hcC5vbignem9vbWVuZCcsKCk9PnRoaXMuY29vcmRpbmF0ZXNDaGFuZ2VkKCkpO1xuICAgICAgLy8gdGhpcy5tYXAub24oJ21vdmVlbmQnLCgpPT50aGlzLmNvb3JkaW5hdGVzQ2hhbmdlZCgpKTtcblxuICAgICAgLy8gaWYodGhpcy5zaG93TGF5ZXJDb250cm9sKXtcbiAgICAgIC8vICAgdGhpcy5sYXllckNvbnRyb2wgPSBMLmNvbnRyb2wubGF5ZXJzKGJhc2VMYXllcnMsIFtdLHtcbiAgICAgIC8vICAgICBoaWRlU2luZ2xlQmFzZTp0cnVlXG4gICAgICAvLyAgIH0pLmFkZFRvKHRoaXMubWFwKTtcbiAgICAgIC8vIH1cblxuICAgICAgLy8gdGhpcy5tYXBDcmVhdGVkLmVtaXQodGhpcy5tYXApO1xuXG5cblxuICAgICAgLy8gdGhpcy5tYXJrZXJMYXllcnMgPSBbXTtcbiAgICAgIC8vIHRoaXMuc2V0dXBNYXJrZXJzKCk7XG5cbiAgICAgIHRoaXMuc2V0Qm91bmRzKCk7XG4gICAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgICB9KTtcblxuICB9XG5cbiAgc2V0Qm91bmRzKCk6IHZvaWQge1xuICAgIGlmKCF0aGlzLm1hcHx8IXRoaXMuYm91bmRzKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm1hcC5maXRCb3VuZHModG9Cb3VuZHModGhpcy5ib3VuZHMpKTtcbiAgfVxuXG59XG4vKlxuaHR0cDovLzM1LjI0NC4xMTEuMTY4OjgwODAvd21zXG4/c2VydmljZT1XTVNcbiZyZXF1ZXN0PUdldE1hcFxuJmxheWVycz13Y2ZcbiZzdHlsZXM9XG4mZm9ybWF0PWltYWdlJTJGcG5nXG4mdHJhbnNwYXJlbnQ9dHJ1ZVxuJnZlcnNpb249MS4xLjFcbiZ0aW1lPTIwMTktMDEtMDFUMDAlM0EwMCUzQTAwLjAwMFpcbiZ3aWR0aD0yNTZcbiZoZWlnaHQ9MjU2XG4mc3JzPUVQU0clM0EzODU3XG4mYmJveD0tMTc1MzI4MTkuNzk5OTQwNTksLTUwMDkzNzcuMDg1Njk3MzExLC0xNTAyODEzMS4yNTcwOTE5MzYsLTI1MDQ2ODguNTQyODQ4NjU1XG5cbiovXG5cbmZ1bmN0aW9uIHRvQm91bmRzKGJvdW5kczpCb3VuZHMpOkwuTGF0TG5nQm91bmRzTGl0ZXJhbHtcbiAgaWYoIWJvdW5kcyl7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gW1xuICAgIFtib3VuZHMuc291dGgsYm91bmRzLndlc3RdLFxuICAgIFtib3VuZHMubm9ydGgsYm91bmRzLmVhc3RdXG4gIF07XG59Il19