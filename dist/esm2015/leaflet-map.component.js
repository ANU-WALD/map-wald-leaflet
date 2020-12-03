"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeafletMapComponent = void 0;
const core_1 = require("@angular/core");
const leaflet = require("leaflet");
const leaflet_service_1 = require("./leaflet.service");
const i0 = require("@angular/core");
const i1 = require("./leaflet.service");
const _c0 = ["*"];
const DEFAULT_BASE_MAP = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
class LeafletMapComponent {
    constructor(element, svc) {
        this.element = element;
        this.svc = svc;
        this.zoomControl = true;
        this.minZoom = 5;
        this.maxZoom = 32;
        this.styles = {};
        this.initialised = false;
        console.log('LeafletMapComponent');
    }
    ngOnChanges(changes) {
        if (!this.initialised) {
            return;
        }
        const changeCount = Object.keys(changes).length;
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
    }
    ngOnInit() {
        this.updateMap();
        this.setBounds();
    }
    updateMap(changes) {
        setTimeout(() => {
            if (!this.map) {
                this.createMap();
                return;
            }
            if (changes && changes.baseMap) {
                // this.baseLayer.setUrl(this.baseMap.urlTemplate || DEFAULT_BASE_MAP)
                if (this.baseLayer) {
                    this.baseLayer.setUrl(this.baseMap.urlTemplate || DEFAULT_BASE_MAP);
                    // this.baseLayer.removeFrom(this.map);
                }
                else if (this.baseMap) {
                    this.createBaseLayer();
                    this.baseLayer.addTo(this.map).bringToBack();
                }
            }
        });
        // Update parameters
    }
    createBaseLayer() {
        this.baseLayer = null;
        if (!this.baseMap) {
            return;
        }
        const options = {};
        if (this.baseMap.maxNativeZoom) {
            options.maxNativeZoom = this.baseMap.maxNativeZoom;
        }
        this.baseLayer = leaflet.tileLayer(this.baseMap.urlTemplate || DEFAULT_BASE_MAP, options);
    }
    createMap() {
        setTimeout(() => {
            if (this.map) {
                this.map.remove();
                this.map = null;
            }
            const theDiv = this.element.nativeElement;
            const theHost = theDiv.querySelector('.leafletHost');
            // let baseLayers = R.mapObjIndexed(v=>{
            //   return L.tileLayer(v,
            //     { maxZoom: 18, attribution: '...' });
            // },this.baseMaps);
            // if(!this.baseMap || !baseLayers[this.baseMap]){
            //   this.baseMap = Object.keys(this.baseMaps)[0];
            // }
            // let baseLayerArray = [baseLayers[this.baseMap]];
            let crs = leaflet.CRS.EPSG3857; //:L.CRS.Simple;
            // if(this.crs){
            //   crs = L.CRS[this.crs];
            // }
            // let panes = 0;
            // if(this.map){
            //   panes = getCustomMapPanes(this.map).length;
            // }
            this.createBaseLayer();
            const baseLayerArray = [];
            if (this.baseLayer) {
                baseLayerArray.push(this.baseLayer);
            }
            this.map = leaflet.map(theHost, {
                crs,
                zoom: 5,
                minZoom: this.minZoom,
                maxZoom: this.maxZoom,
                zoomControl: this.zoomControl,
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
            this.svc.mapCreated(this.map);
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
            this.map.on('click', (evt) => {
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
            this.setBounds();
            this.initialised = true;
        });
    }
    setBounds() {
        if (!this.map || !this.bounds) {
            return;
        }
        this.map.fitBounds([
            [this.bounds.south, this.bounds.west],
            [this.bounds.north, this.bounds.east]
        ]);
    }
}
exports.LeafletMapComponent = LeafletMapComponent;
LeafletMapComponent.ɵfac = function LeafletMapComponent_Factory(t) { return new (t || LeafletMapComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.LeafletService)); };
LeafletMapComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LeafletMapComponent, selectors: [["leaflet-map"]], inputs: { bounds: "bounds", baseMap: "baseMap", zoomControl: "zoomControl", minZoom: "minZoom", maxZoom: "maxZoom" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[1, "leafletHost"]], template: function LeafletMapComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleMap(ctx.styles);
    } }, styles: [".leafletHost[_ngcontent-%COMP%]{\n    width:100%;\n    min-height:400px;\n  }"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(LeafletMapComponent, [{
        type: core_1.Component,
        args: [{
                selector: 'leaflet-map',
                template: `<div class="leafletHost" [style]="styles">
  <ng-content></ng-content>
</div>
`, styles: [
                    `
  .leafletHost{
    width:100%;
    min-height:400px;
  }`
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZmxldC1tYXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtbGVhZmxldC8iLCJzb3VyY2VzIjpbImxlYWZsZXQtbWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBK0Y7QUFDL0YsbUNBQW1DO0FBQ25DLHVEQUFtRDs7OztBQUluRCxNQUFNLGdCQUFnQixHQUFDLG9EQUFvRCxDQUFDO0FBRTVFLE1BYWEsbUJBQW1CO0lBYzlCLFlBQW9CLE9BQW1CLEVBQVUsR0FBbUI7UUFBaEQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWdCO1FBWDNELGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBR3RCLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFNbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUM7WUFDbkIsT0FBTztTQUNSO1FBRUQsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFaEQscUJBQXFCO1FBQ3JCLFlBQVk7UUFDWixJQUFJO1FBRUosZ0JBQWdCO1FBQ2hCLHlCQUF5QjtRQUN6QiwyQkFBMkI7UUFFM0IsMkJBQTJCO1FBQzNCLGdCQUFnQjtRQUNoQixRQUFRO1FBQ1IsTUFBTTtRQUNOLHVCQUF1QjtRQUN2QixJQUFJO1FBRVIseUJBQXlCO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsT0FBTztRQUVILElBQUcsT0FBTyxDQUFDLE1BQU0sRUFBQztZQUNoQixJQUFJLENBQUMs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QUNSO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUM7WUFDakIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNwQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ3JDLENBQUMsQ0FBQztJQUNMLENBQUM7O0FBaE5ILGtEQWtOQztzRkFyTVksbUJBQW1CO3dEQUFuQixtQkFBbUI7O1FBWG5CLDhCQUNYO1FBQUEsa0JBQXlCO1FBQzNCLGlCQUFNOztRQUZnQyx5QkFBZ0I7O2tEQVd6QyxtQkFBbUI7Y0FiL0IsZ0JBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOzs7Q0FHWCxFQUFDLE1BQU0sRUFBRTtvQkFDUjs7OztJQUlFO2lCQUNIO2FBQ0E7MEZBRVUsTUFBTTtrQkFBZCxZQUFLO1lBQ0csT0FBTztrQkFBZixZQUFLO1lBQ0csV0FBVztrQkFBbkIsWUFBSztZQUNHLE9BQU87a0JBQWYsWUFBSztZQUNHLE9BQU87a0JBQWYsWUFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBsZWFmbGV0IGZyb20gJ2xlYWZsZXQnO1xuaW1wb3J0IHsgTGVhZmxldFNlcnZpY2UgfSBmcm9tICcuL2xlYWZsZXQuc2VydmljZSc7XG5pbXBvcnQgeyBCb3VuZHMgfSBmcm9tICdtYXAtd2FsZCc7XG5pbXBvcnQgeyBCYXNlbWFwRGVzY3JpcHRvciB9IGZyb20gJy4vZGF0YSc7XG5cbmNvbnN0IERFRkFVTFRfQkFTRV9NQVA9J2h0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGVhZmxldC1tYXAnLFxuICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJsZWFmbGV0SG9zdFwiIFtzdHlsZV09XCJzdHlsZXNcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuPC9kaXY+XG5gLHN0eWxlczogW1xuICBgXG4gIC5sZWFmbGV0SG9zdHtcbiAgICB3aWR0aDoxMDAlO1xuICAgIG1pbi1oZWlnaHQ6NDAwcHg7XG4gIH1gXG5dXG59KVxuZXhwb3J0IGNsYXNzIExlYWZsZXRNYXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGJvdW5kczogQm91bmRzO1xuICBASW5wdXQoKSBiYXNlTWFwOiBCYXNlbWFwRGVzY3JpcHRvcjtcbiAgQElucHV0KCkgem9vbUNvbnRyb2wgPSB0cnVlO1xuICBASW5wdXQoKSBtaW5ab29tID0gNTtcbiAgQElucHV0KCkgbWF4Wm9vbSA9IDMyO1xuXG4gIG1hcDogbGVhZmxldC5NYXA7XG4gIHN0eWxlczogYW55ID0ge307XG4gIGluaXRpYWxpc2VkID0gZmFsc2U7XG5cbiAgLy8gTGVhZmxldC5UaWxlTGF5ZXJcbiAgcHJpdmF0ZSBiYXNlTGF5ZXI6IGxlYWZsZXQuVGlsZUxheWVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSBzdmM6IExlYWZsZXRTZXJ2aWNlKSB7XG4gICAgY29uc29sZS5sb2coJ0xlYWZsZXRNYXBDb21wb25lbnQnKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZighdGhpcy5pbml0aWFsaXNlZCl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlQ291bnQgPSBPYmplY3Qua2V5cyhjaGFuZ2VzKS5sZW5ndGg7XG5cbiAgICAvLyBpZih0aGlzLmNyZWF0aW5nKXtcbiAgICAvLyAgIHJldHVybjtcbiAgICAvLyB9XG5cbiAgICAvLyBpZih0aGlzLm1hcCl7XG4gICAgLy8gICBpZihjaGFuZ2VzLm1hcmtlcnMpe1xuICAgIC8vICAgICB0aGlzLnNldHVwTWFya2VycygpO1xuXG4gICAgLy8gICAgIGlmKGNoYW5nZUNvdW50PT09MSl7XG4gICAgLy8gICAgICAgcmV0dXJuO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gICB0aGlzLm1hcC5yZW1vdmUoKTtcbiAgICAvLyB9XG5cbi8vICAgIGlmKCF0aGlzLmNyZWF0aW5nKXtcbiAgICB0aGlzLnVwZGF0ZU1hcChjaGFuZ2VzKTtcbi8vICAgIH1cblxuICAgIGlmKGNoYW5nZXMuYm91bmRzKXtcbiAgICAgIHRoaXMuc2V0Qm91bmRzKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVNYXAoKTtcbiAgICB0aGlzLnNldEJvdW5kcygpO1xuICB9XG5cbiAgdXBkYXRlTWFwKGNoYW5nZXM/OiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgaWYoIXRoaXMubWFwKXtcbiAgICAgICAgdGhpcy5jcmVhdGVNYXAoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZihjaGFuZ2VzJiZjaGFuZ2VzLmJhc2VNYXApe1xuICAgICAgICAvLyB0aGlzLmJhc2VMYXllci5zZXRVcmwodGhpcy5iYXNlTWFwLnVybFRlbXBsYXRlIHx8IERFRkFVTFRfQkFTRV9NQVApXG4gICAgICAgIGlmKHRoaXMuYmFzZUxheWVyKXtcbiAgICAgICAgICB0aGlzLmJhc2VMYXllci5zZXRVcmwodGhpcy5iYXNlTWFwLnVybFRlbXBsYXRlIHx8IERFRkFVTFRfQkFTRV9NQVApO1xuICAgICAgICAgIC8vIHRoaXMuYmFzZUxheWVyLnJlbW92ZUZyb20odGhpcy5tYXApO1xuICAgICAgICB9IGVsc2UgaWYodGhpcy5iYXNlTWFwKSB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVCYXNlTGF5ZXIoKTtcbiAgICAgICAgICB0aGlzLmJhc2VMYXllci5hZGRUbyh0aGlzLm1hcCkuYnJpbmdUb0JhY2soKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gVXBkYXRlIHBhcmFtZXRlcnNcbiAgfVxuXG4gIGNyZWF0ZUJhc2VMYXllcigpOiB2b2lkIHtcbiAgICB0aGlzLmJhc2VMYXllciA9IG51bGw7XG4gICAgaWYoIXRoaXMuYmFzZU1hcCl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9uczogbGVhZmxldC5UaWxlTGF5ZXJPcHRpb25zID0ge307XG4gICAgaWYodGhpcy5iYXNlTWFwLm1heE5hdGl2ZVpvb20pe1xuICAgICAgb3B0aW9ucy5tYXhOYXRpdmVab29tID0gdGhpcy5iYXNlTWFwLm1heE5hdGl2ZVpvb207XG4gICAgfVxuXG4gICAgdGhpcy5iYXNlTGF5ZXIgPSBsZWFmbGV0LnRpbGVMYXllcih0aGlzLmJhc2VNYXAudXJsVGVtcGxhdGUgfHwgREVGQVVMVF9CQVNFX01BUCxvcHRpb25zKTtcbiAgfVxuXG4gIGNyZWF0ZU1hcCgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICBpZih0aGlzLm1hcCl7XG4gICAgICAgIHRoaXMubWFwLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLm1hcCA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRoZURpdiA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgY29uc3QgdGhlSG9zdCA9IHRoZURpdi5xdWVyeVNlbGVjdG9yKCcubGVhZmxldEhvc3QnKTtcblxuICAgICAgLy8gbGV0IGJhc2VMYXllcnMgPSBSLm1hcE9iakluZGV4ZWQodj0+e1xuICAgICAgLy8gICByZXR1cm4gTC50aWxlTGF5ZXIodixcbiAgICAgIC8vICAgICB7IG1heFpvb206IDE4LCBhdHRyaWJ1dGlvbjogJy4uLicgfSk7XG4gICAgICAvLyB9LHRoaXMuYmFzZU1hcHMpO1xuXG4gICAgICAvLyBpZighdGhpcy5iYXNlTWFwIHx8ICFiYXNlTGF5ZXJzW3RoaXMuYmFzZU1hcF0pe1xuICAgICAgLy8gICB0aGlzLmJhc2VNYXAgPSBPYmplY3Qua2V5cyh0aGlzLmJhc2VNYXBzKVswXTtcbiAgICAgIC8vIH1cblxuICAgICAgLy8gbGV0IGJhc2VMYXllckFycmF5ID0gW2Jhc2VMYXllcnNbdGhpcy5iYXNlTWFwXV07XG4gICAgICBsZXQgY3JzID0gbGVhZmxldC5DUlMuRVBTRzM4NTc7Ly86TC5DUlMuU2ltcGxlO1xuICAgICAgLy8gaWYodGhpcy5jcnMpe1xuICAgICAgLy8gICBjcnMgPSBMLkNSU1t0aGlzLmNyc107XG4gICAgICAvLyB9XG5cbiAgICAgIC8vIGxldCBwYW5lcyA9IDA7XG4gICAgICAvLyBpZih0aGlzLm1hcCl7XG4gICAgICAvLyAgIHBhbmVzID0gZ2V0Q3VzdG9tTWFwUGFuZXModGhpcy5tYXApLmxlbmd0aDtcbiAgICAgIC8vIH1cbiAgICAgIHRoaXMuY3JlYXRlQmFzZUxheWVyKCk7XG4gICAgICBjb25zdCBiYXNlTGF5ZXJBcnJheSA9IFtcbiAgICAgIF07XG4gICAgICBpZih0aGlzLmJhc2VMYXllcil7XG4gICAgICAgIGJhc2VMYXllckFycmF5LnB1c2godGhpcy5iYXNlTGF5ZXIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm1hcCA9IGxlYWZsZXQubWFwKHRoZUhvc3QgYXMgSFRNTEVsZW1lbnQse1xuICAgICAgICBjcnMsXG4gICAgICAgIHpvb206IDUsXG4gICAgICAgIG1pblpvb206IHRoaXMubWluWm9vbSxcbiAgICAgICAgbWF4Wm9vbTogdGhpcy5tYXhab29tLFxuICAgICAgICB6b29tQ29udHJvbDogdGhpcy56b29tQ29udHJvbCxcbiAgICAgICAgY2VudGVyOiBsZWFmbGV0LmxhdExuZygtMjAsIDEzNSksXG4gICAgICAgIC8vIHpvb206IHRoaXMuem9vbSxcbiAgICAgICAgLy8gbWluWm9vbTogdGhpcy5taW5ab29tLFxuICAgICAgICAvLyBtYXhab29tOiB0aGlzLm1heFpvb20sXG4gICAgICAgIHNjcm9sbFdoZWVsWm9vbTogdHJ1ZSxcbiAgICAgICAgbGF5ZXJzOmJhc2VMYXllckFycmF5LFxuICAgICAgICBjb250aW51b3VzV29ybGQ6IGZhbHNlLFxuICAgICAgICBub1dyYXA6IHRydWVcbiAgICAgICAgICAgIC8vIGF0dHJpYnV0aW9uQ29udHJvbDogdGhpcy5hdHRyaWJ1dGlvblxuICAgICAgfSBhcyBsZWFmbGV0Lk1hcE9wdGlvbnMpO1xuICAgICAgdGhpcy5zdmMubWFwQ3JlYXRlZCh0aGlzLm1hcCk7XG4gICAgICAvLyBpZighdGhpcy5wYW5uYWJsZSl7XG4gICAgICAvLyAgIHRoaXMubWFwLmRyYWdnaW5nLmRpc2FibGUoKTtcbiAgICAgIC8vIH1cblxuICAgICAgLy8gaWYoIXRoaXMuem9vbWFibGUpe1xuICAgICAgLy8gICB0aGlzLm1hcC50b3VjaFpvb20uZGlzYWJsZSgpO1xuICAgICAgLy8gICB0aGlzLm1hcC5kb3VibGVDbGlja1pvb20uZGlzYWJsZSgpO1xuICAgICAgLy8gICB0aGlzLm1hcC5zY3JvbGxXaGVlbFpvb20uZGlzYWJsZSgpO1xuICAgICAgLy8gfVxuXG4gICAgICAvLyBjb25maWd1cmVWZWN0b3JQYW5lcyhwYW5lcyx0aGlzLm1hcCk7XG5cbiAgICAgIC8vIHRoaXMuX2hlbHBlci5yZWdpc3Rlcih0aGlzLm1hcCk7XG4gICAgICB0aGlzLm1hcC5vbignY2xpY2snLChldnQ6IGxlYWZsZXQuTGVhZmxldE1vdXNlRXZlbnQpPT57XG4gICAgICAgIGlmKGV2dC5vcmlnaW5hbEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpe1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLnBvaW50Q2xpY2suZW1pdChldnQubGF0bG5nKTtcbiAgICAgIH0pO1xuICAgICAgLy8gdGhpcy5jcmVhdGluZz1mYWxzZTtcblxuICAgICAgLy8gdGhpcy5tYXAub24oJ3pvb21lbmQnLCgpPT50aGlzLmNvb3JkaW5hdGVzQ2hhbmdlZCgpKTtcbiAgICAgIC8vIHRoaXMubWFwLm9uKCdtb3ZlZW5kJywoKT0+dGhpcy5jb29yZGluYXRlc0NoYW5nZWQoKSk7XG5cbiAgICAgIC8vIGlmKHRoaXMuc2hvd0xheWVyQ29udHJvbCl7XG4gICAgICAvLyAgIHRoaXMubGF5ZXJDb250cm9sID0gTC5jb250cm9sLmxheWVycyhiYXNlTGF5ZXJzLCBbXSx7XG4gICAgICAvLyAgICAgaGlkZVNpbmdsZUJhc2U6dHJ1ZVxuICAgICAgLy8gICB9KS5hZGRUbyh0aGlzLm1hcCk7XG4gICAgICAvLyB9XG5cbiAgICAgIC8vIHRoaXMubWFwQ3JlYXRlZC5lbWl0KHRoaXMubWFwKTtcblxuXG5cbiAgICAgIC8vIHRoaXMubWFya2VyTGF5ZXJzID0gW107XG4gICAgICAvLyB0aGlzLnNldHVwTWFya2VycygpO1xuXG4gICAgICB0aGlzLnNldEJvdW5kcygpO1xuICAgICAgdGhpcy5pbml0aWFsaXNlZCA9IHRydWU7XG4gICAgfSk7XG5cbiAgfVxuXG4gIHNldEJvdW5kcygpOiB2b2lkIHtcbiAgICBpZighdGhpcy5tYXB8fCF0aGlzLmJvdW5kcyl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5tYXAuZml0Qm91bmRzKFtcbiAgICAgIFt0aGlzLmJvdW5kcy5zb3V0aCx0aGlzLmJvdW5kcy53ZXN0XSxcbiAgICAgIFt0aGlzLmJvdW5kcy5ub3J0aCx0aGlzLmJvdW5kcy5lYXN0XVxuICAgIF0pO1xuICB9XG5cbn1cbi8qXG5odHRwOi8vMzUuMjQ0LjExMS4xNjg6ODA4MC93bXNcbj9zZXJ2aWNlPVdNU1xuJnJlcXVlc3Q9R2V0TWFwXG4mbGF5ZXJzPXdjZlxuJnN0eWxlcz1cbiZmb3JtYXQ9aW1hZ2UlMkZwbmdcbiZ0cmFuc3BhcmVudD10cnVlXG4mdmVyc2lvbj0xLjEuMVxuJnRpbWU9MjAxOS0wMS0wMVQwMCUzQTAwJTNBMDAuMDAwWlxuJndpZHRoPTI1NlxuJmhlaWdodD0yNTZcbiZzcnM9RVBTRyUzQTM4NTdcbiZiYm94PS0xNzUzMjgxOS43OTk5NDA1OSwtNTAwOTM3Ny4wODU2OTczMTEsLTE1MDI4MTMxLjI1NzA5MTkzNiwtMjUwNDY4OC41NDI4NDg2NTVcblxuKi9cbiJdfQ==