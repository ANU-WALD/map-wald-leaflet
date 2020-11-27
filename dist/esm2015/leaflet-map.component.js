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
                else {
                    this.createBaseLayer();
                    this.baseLayer.addTo(this.map);
                }
            }
        });
        // Update parameters
    }
    createBaseLayer() {
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
            const baseLayerArray = [
                this.baseLayer
            ];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZmxldC1tYXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtbGVhZmxldC8iLCJzb3VyY2VzIjpbImxlYWZsZXQtbWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBK0Y7QUFDL0YsbUNBQW1DO0FBQ25DLHVEQUFtRDs7OztBQUluRCxNQUFNLGdCQUFnQixHQUFDLG9EQUFvRCxDQUFDO0FBRTVFLE1BYWEsbUJBQW1CO0lBYzlCLFlBQW9CLE9BQW1CLEVBQVUsR0FBbUI7UUFBaEQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWdCO1FBWDNELGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBR3RCLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFNbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUM7WUFDbkIsT0FBTztTQUNSO1FBRUQsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFaEQscUJBQXFCO1FBQ3JCLFlBQVk7UUFDWixJQUFJO1FBRUosZ0JBQWdCO1FBQ2hCLHlCQUF5QjtRQUN6QiwyQkFBMkI7UUFFM0IsMkJBQTJCO1FBQzNCLGdCQUFnQjtRQUNoQixRQUFRO1FBQ1IsTUFBTTtRQUNOLHVCQUF1QjtRQUN2QixJQUFJO1FBRVIseUJBQXlCO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsT0FBTztRQUVILElBQUcsT0FBTyxDQUFDLE1BQU0sRUFBQztZQUNoQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEI7SUFDSCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELFNBQVMsQ0FBQyxPQUF1QjtRQUMvQixVQUFVLENBQUMsR0FBRSxFQUFFO1lBQ2IsSUFBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUM7Z0JBQ1gsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNqQixPQUFPO2FBQ1I7WUFFRCxJQUFHLE9BQU8sSUFBRSxPQUFPLENBQUMsT0FBTyxFQUFDO2dCQUMxQixzRUFBc0U7Z0JBQ3RFLElBQUcsSUFBSSxDQUFDLFNBQVMsRUFBQztvQkFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksZ0JBQWdCLENBQUMsQ0FBQztvQkFDcEUsdUNBQXVDO2lCQUN4QztxQkFBTTtvQkFDTCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDaEM7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUgsb0JBQW9CO0lBQ3RCLENBQUM7SUFFRCxlQUFlO1FBQ2IsTUFBTSxPQUFPLEdBQTZCLEVBQUUsQ0FBQztRQUM3QyxJQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFDO1lBQzVCLE9BQU8sQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7U0FDcEQ7UUFFRCxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLElBQUksZ0JBQWdCLEVBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVELFNBQVM7UUFDUCxVQUFVLENBQUMsR0FBRSxFQUFFO1lBQ2IsSUFBRyxJQUFJLENBQUMsR0FBRyxFQUFDO2dCQUNWLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDO2FBQ2pCO1lBRUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUE0QixDQUFDO1lBQ3pELE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7WUFFckQsd0NBQXdDO1lBQ3hDLDBCQUEwQjtZQUMxQiw0Q0FBNEM7WUFDNUMsb0JBQW9CO1lBRXBCLGtEQUFrRDtZQUNsRCxrREFBa0Q7WUFDbEQsSUFBSTtZQUVKLG1EQUFtRDtZQUNuRCxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBLGdCQUFnQjtZQUMvQyxnQkFBZ0I7WUFDaEIsMkJBQTJCO1lBQzNCLElBQUk7WUFFSixpQkFBaUI7WUFDakIsZ0JBQWdCO1lBQ2hCLGdEQUFnRDtZQUNoRCxJQUFJO1lBQ0osSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZCLE1BQU0sY0FBYyxHQUFHO2dCQUNyQixJQUFJLENBQUMsU0FBUzthQUNmLENBQUM7WUFFRixJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBc0IsRUFBQztnQkFDNUMsR0FBRztnQkFDSCxJQUFJLEVBQUUsQ0FBQztnQkFDUCxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87Z0JBQ3JCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztnQkFDckIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUM3QixNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUM7Z0JBQ2hDLG1CQUFtQjtnQkFDbkIseUJBQXlCO2dCQUN6Qix5QkFBeUI7Z0JBQ3pCLGVBQWUsRUFBRSxJQUFJO2dCQUNyQixNQUFNLEVBQUMsY0FBYztnQkFDckIsZUFBZSxFQUFFLEtBQUs7Z0JBQ3RCLE1BQU0sRUFBRSxJQUFJO2dCQUNSLHVDQUF1QzthQUN0QixDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLHNCQUFzQjtZQUN0QixpQ0FBaUM7WUFDakMsSUFBSTtZQUVKLHNCQUFzQjtZQUN0QixrQ0FBa0M7WUFDbEMsd0NBQXdDO1lBQ3hDLHdDQUF3QztZQUN4QyxJQUFJO1lBRUosd0NBQXdDO1lBRXhDLG1DQUFtQztZQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxHQUE4QixFQUFDLEVBQUU7Z0JBQ3BELElBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsRUFBQztvQkFDcEMsT0FBTztpQkFDUjtnQkFDRCxvQ0FBb0M7WUFDdEMsQ0FBQyxDQUFDLENBQUM7WUFDSCx1QkFBdUI7WUFFdkIsd0RBQXdEO1lBQ3hELHdEQUF3RDtZQUV4RCw2QkFBNkI7WUFDN0IsMERBQTBEO1lBQzFELDBCQUEwQjtZQUMxQix3QkFBd0I7WUFDeEIsSUFBSTtZQUVKLGtDQUFrQztZQUlsQywwQkFBMEI7WUFDMUIsdUJBQXVCO1lBRXZCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUVMLENBQUM7SUFFRCxTQUFTO1FBQ1AsSUFBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFDO1lBQ3pCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO1lBQ2pCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDcEMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNyQyxDQUFDLENBQUM7SUFDTCxDQUFDOztBQXpNSCxrREEyTUM7c0ZBOUxZLG1CQUFtQjt3REFBbkIsbUJBQW1COztRQVhuQiw4QkFDWDtRQUFBLGtCQUF5QjtRQUMzQixpQkFBTTs7UUFGZ0MseUJBQWdCOztrREFXekMsbUJBQW1CO2NBYi9CLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7O0NBR1gsRUFBQyxNQUFNLEVBQUU7b0JBQ1I7Ozs7SUFJRTtpQkFDSDthQUNBOzBGQUVVLE1BQU07a0JBQWQsWUFBSztZQUNHLE9BQU87a0JBQWYsWUFBSztZQUNHLFdBQVc7a0JBQW5CLFlBQUs7WUFDRyxPQUFPO2tCQUFmLFlBQUs7WUFDRyxPQUFPO2tCQUFmLFlBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgbGVhZmxldCBmcm9tICdsZWFmbGV0JztcbmltcG9ydCB7IExlYWZsZXRTZXJ2aWNlIH0gZnJvbSAnLi9sZWFmbGV0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQm91bmRzIH0gZnJvbSAnbWFwLXdhbGQnO1xuaW1wb3J0IHsgQmFzZW1hcERlc2NyaXB0b3IgfSBmcm9tICcuL2RhdGEnO1xuXG5jb25zdCBERUZBVUxUX0JBU0VfTUFQPSdodHRwczovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xlYWZsZXQtbWFwJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibGVhZmxldEhvc3RcIiBbc3R5bGVdPVwic3R5bGVzXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuYCxzdHlsZXM6IFtcbiAgYFxuICAubGVhZmxldEhvc3R7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtaW4taGVpZ2h0OjQwMHB4O1xuICB9YFxuXVxufSlcbmV4cG9ydCBjbGFzcyBMZWFmbGV0TWFwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBib3VuZHM6IEJvdW5kcztcbiAgQElucHV0KCkgYmFzZU1hcDogQmFzZW1hcERlc2NyaXB0b3I7XG4gIEBJbnB1dCgpIHpvb21Db250cm9sID0gdHJ1ZTtcbiAgQElucHV0KCkgbWluWm9vbSA9IDU7XG4gIEBJbnB1dCgpIG1heFpvb20gPSAzMjtcblxuICBtYXA6IGxlYWZsZXQuTWFwO1xuICBzdHlsZXM6IGFueSA9IHt9O1xuICBpbml0aWFsaXNlZCA9IGZhbHNlO1xuXG4gIC8vIExlYWZsZXQuVGlsZUxheWVyXG4gIHByaXZhdGUgYmFzZUxheWVyOiBsZWFmbGV0LlRpbGVMYXllcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgc3ZjOiBMZWFmbGV0U2VydmljZSkge1xuICAgIGNvbnNvbGUubG9nKCdMZWFmbGV0TWFwQ29tcG9uZW50Jyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYoIXRoaXMuaW5pdGlhbGlzZWQpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNoYW5nZUNvdW50ID0gT2JqZWN0LmtleXMoY2hhbmdlcykubGVuZ3RoO1xuXG4gICAgLy8gaWYodGhpcy5jcmVhdGluZyl7XG4gICAgLy8gICByZXR1cm47XG4gICAgLy8gfVxuXG4gICAgLy8gaWYodGhpcy5tYXApe1xuICAgIC8vICAgaWYoY2hhbmdlcy5tYXJrZXJzKXtcbiAgICAvLyAgICAgdGhpcy5zZXR1cE1hcmtlcnMoKTtcblxuICAgIC8vICAgICBpZihjaGFuZ2VDb3VudD09PTEpe1xuICAgIC8vICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vICAgdGhpcy5tYXAucmVtb3ZlKCk7XG4gICAgLy8gfVxuXG4vLyAgICBpZighdGhpcy5jcmVhdGluZyl7XG4gICAgdGhpcy51cGRhdGVNYXAoY2hhbmdlcyk7XG4vLyAgICB9XG5cbiAgICBpZihjaGFuZ2VzLmJvdW5kcyl7XG4gICAgICB0aGlzLnNldEJvdW5kcygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlTWFwKCk7XG4gICAgdGhpcy5zZXRCb3VuZHMoKTtcbiAgfVxuXG4gIHVwZGF0ZU1hcChjaGFuZ2VzPzogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgIGlmKCF0aGlzLm1hcCl7XG4gICAgICAgIHRoaXMuY3JlYXRlTWFwKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYoY2hhbmdlcyYmY2hhbmdlcy5iYXNlTWFwKXtcbiAgICAgICAgLy8gdGhpcy5iYXNlTGF5ZXIuc2V0VXJsKHRoaXMuYmFzZU1hcC51cmxUZW1wbGF0ZSB8fCBERUZBVUxUX0JBU0VfTUFQKVxuICAgICAgICBpZih0aGlzLmJhc2VMYXllcil7XG4gICAgICAgICAgdGhpcy5iYXNlTGF5ZXIuc2V0VXJsKHRoaXMuYmFzZU1hcC51cmxUZW1wbGF0ZSB8fCBERUZBVUxUX0JBU0VfTUFQKTtcbiAgICAgICAgICAvLyB0aGlzLmJhc2VMYXllci5yZW1vdmVGcm9tKHRoaXMubWFwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUJhc2VMYXllcigpO1xuICAgICAgICAgIHRoaXMuYmFzZUxheWVyLmFkZFRvKHRoaXMubWFwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gVXBkYXRlIHBhcmFtZXRlcnNcbiAgfVxuXG4gIGNyZWF0ZUJhc2VMYXllcigpOiB2b2lkIHtcbiAgICBjb25zdCBvcHRpb25zOiBsZWFmbGV0LlRpbGVMYXllck9wdGlvbnMgPSB7fTtcbiAgICBpZih0aGlzLmJhc2VNYXAubWF4TmF0aXZlWm9vbSl7XG4gICAgICBvcHRpb25zLm1heE5hdGl2ZVpvb20gPSB0aGlzLmJhc2VNYXAubWF4TmF0aXZlWm9vbTtcbiAgICB9XG5cbiAgICB0aGlzLmJhc2VMYXllciA9IGxlYWZsZXQudGlsZUxheWVyKHRoaXMuYmFzZU1hcC51cmxUZW1wbGF0ZSB8fCBERUZBVUxUX0JBU0VfTUFQLG9wdGlvbnMpO1xuICB9XG5cbiAgY3JlYXRlTWFwKCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgIGlmKHRoaXMubWFwKXtcbiAgICAgICAgdGhpcy5tYXAucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMubWFwID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdGhlRGl2ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCB0aGVIb3N0ID0gdGhlRGl2LnF1ZXJ5U2VsZWN0b3IoJy5sZWFmbGV0SG9zdCcpO1xuXG4gICAgICAvLyBsZXQgYmFzZUxheWVycyA9IFIubWFwT2JqSW5kZXhlZCh2PT57XG4gICAgICAvLyAgIHJldHVybiBMLnRpbGVMYXllcih2LFxuICAgICAgLy8gICAgIHsgbWF4Wm9vbTogMTgsIGF0dHJpYnV0aW9uOiAnLi4uJyB9KTtcbiAgICAgIC8vIH0sdGhpcy5iYXNlTWFwcyk7XG5cbiAgICAgIC8vIGlmKCF0aGlzLmJhc2VNYXAgfHwgIWJhc2VMYXllcnNbdGhpcy5iYXNlTWFwXSl7XG4gICAgICAvLyAgIHRoaXMuYmFzZU1hcCA9IE9iamVjdC5rZXlzKHRoaXMuYmFzZU1hcHMpWzBdO1xuICAgICAgLy8gfVxuXG4gICAgICAvLyBsZXQgYmFzZUxheWVyQXJyYXkgPSBbYmFzZUxheWVyc1t0aGlzLmJhc2VNYXBdXTtcbiAgICAgIGxldCBjcnMgPSBsZWFmbGV0LkNSUy5FUFNHMzg1NzsvLzpMLkNSUy5TaW1wbGU7XG4gICAgICAvLyBpZih0aGlzLmNycyl7XG4gICAgICAvLyAgIGNycyA9IEwuQ1JTW3RoaXMuY3JzXTtcbiAgICAgIC8vIH1cblxuICAgICAgLy8gbGV0IHBhbmVzID0gMDtcbiAgICAgIC8vIGlmKHRoaXMubWFwKXtcbiAgICAgIC8vICAgcGFuZXMgPSBnZXRDdXN0b21NYXBQYW5lcyh0aGlzLm1hcCkubGVuZ3RoO1xuICAgICAgLy8gfVxuICAgICAgdGhpcy5jcmVhdGVCYXNlTGF5ZXIoKTtcbiAgICAgIGNvbnN0IGJhc2VMYXllckFycmF5ID0gW1xuICAgICAgICB0aGlzLmJhc2VMYXllclxuICAgICAgXTtcblxuICAgICAgdGhpcy5tYXAgPSBsZWFmbGV0Lm1hcCh0aGVIb3N0IGFzIEhUTUxFbGVtZW50LHtcbiAgICAgICAgY3JzLFxuICAgICAgICB6b29tOiA1LFxuICAgICAgICBtaW5ab29tOiB0aGlzLm1pblpvb20sXG4gICAgICAgIG1heFpvb206IHRoaXMubWF4Wm9vbSxcbiAgICAgICAgem9vbUNvbnRyb2w6IHRoaXMuem9vbUNvbnRyb2wsXG4gICAgICAgIGNlbnRlcjogbGVhZmxldC5sYXRMbmcoLTIwLCAxMzUpLFxuICAgICAgICAvLyB6b29tOiB0aGlzLnpvb20sXG4gICAgICAgIC8vIG1pblpvb206IHRoaXMubWluWm9vbSxcbiAgICAgICAgLy8gbWF4Wm9vbTogdGhpcy5tYXhab29tLFxuICAgICAgICBzY3JvbGxXaGVlbFpvb206IHRydWUsXG4gICAgICAgIGxheWVyczpiYXNlTGF5ZXJBcnJheSxcbiAgICAgICAgY29udGludW91c1dvcmxkOiBmYWxzZSxcbiAgICAgICAgbm9XcmFwOiB0cnVlXG4gICAgICAgICAgICAvLyBhdHRyaWJ1dGlvbkNvbnRyb2w6IHRoaXMuYXR0cmlidXRpb25cbiAgICAgIH0gYXMgbGVhZmxldC5NYXBPcHRpb25zKTtcbiAgICAgIHRoaXMuc3ZjLm1hcENyZWF0ZWQodGhpcy5tYXApO1xuICAgICAgLy8gaWYoIXRoaXMucGFubmFibGUpe1xuICAgICAgLy8gICB0aGlzLm1hcC5kcmFnZ2luZy5kaXNhYmxlKCk7XG4gICAgICAvLyB9XG5cbiAgICAgIC8vIGlmKCF0aGlzLnpvb21hYmxlKXtcbiAgICAgIC8vICAgdGhpcy5tYXAudG91Y2hab29tLmRpc2FibGUoKTtcbiAgICAgIC8vICAgdGhpcy5tYXAuZG91YmxlQ2xpY2tab29tLmRpc2FibGUoKTtcbiAgICAgIC8vICAgdGhpcy5tYXAuc2Nyb2xsV2hlZWxab29tLmRpc2FibGUoKTtcbiAgICAgIC8vIH1cblxuICAgICAgLy8gY29uZmlndXJlVmVjdG9yUGFuZXMocGFuZXMsdGhpcy5tYXApO1xuXG4gICAgICAvLyB0aGlzLl9oZWxwZXIucmVnaXN0ZXIodGhpcy5tYXApO1xuICAgICAgdGhpcy5tYXAub24oJ2NsaWNrJywoZXZ0OiBsZWFmbGV0LkxlYWZsZXRNb3VzZUV2ZW50KT0+e1xuICAgICAgICBpZihldnQub3JpZ2luYWxFdmVudC5kZWZhdWx0UHJldmVudGVkKXtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5wb2ludENsaWNrLmVtaXQoZXZ0LmxhdGxuZyk7XG4gICAgICB9KTtcbiAgICAgIC8vIHRoaXMuY3JlYXRpbmc9ZmFsc2U7XG5cbiAgICAgIC8vIHRoaXMubWFwLm9uKCd6b29tZW5kJywoKT0+dGhpcy5jb29yZGluYXRlc0NoYW5nZWQoKSk7XG4gICAgICAvLyB0aGlzLm1hcC5vbignbW92ZWVuZCcsKCk9PnRoaXMuY29vcmRpbmF0ZXNDaGFuZ2VkKCkpO1xuXG4gICAgICAvLyBpZih0aGlzLnNob3dMYXllckNvbnRyb2wpe1xuICAgICAgLy8gICB0aGlzLmxheWVyQ29udHJvbCA9IEwuY29udHJvbC5sYXllcnMoYmFzZUxheWVycywgW10se1xuICAgICAgLy8gICAgIGhpZGVTaW5nbGVCYXNlOnRydWVcbiAgICAgIC8vICAgfSkuYWRkVG8odGhpcy5tYXApO1xuICAgICAgLy8gfVxuXG4gICAgICAvLyB0aGlzLm1hcENyZWF0ZWQuZW1pdCh0aGlzLm1hcCk7XG5cblxuXG4gICAgICAvLyB0aGlzLm1hcmtlckxheWVycyA9IFtdO1xuICAgICAgLy8gdGhpcy5zZXR1cE1hcmtlcnMoKTtcblxuICAgICAgdGhpcy5zZXRCb3VuZHMoKTtcbiAgICAgIHRoaXMuaW5pdGlhbGlzZWQgPSB0cnVlO1xuICAgIH0pO1xuXG4gIH1cblxuICBzZXRCb3VuZHMoKTogdm9pZCB7XG4gICAgaWYoIXRoaXMubWFwfHwhdGhpcy5ib3VuZHMpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubWFwLmZpdEJvdW5kcyhbXG4gICAgICBbdGhpcy5ib3VuZHMuc291dGgsdGhpcy5ib3VuZHMud2VzdF0sXG4gICAgICBbdGhpcy5ib3VuZHMubm9ydGgsdGhpcy5ib3VuZHMuZWFzdF1cbiAgICBdKTtcbiAgfVxuXG59XG4vKlxuaHR0cDovLzM1LjI0NC4xMTEuMTY4OjgwODAvd21zXG4/c2VydmljZT1XTVNcbiZyZXF1ZXN0PUdldE1hcFxuJmxheWVycz13Y2ZcbiZzdHlsZXM9XG4mZm9ybWF0PWltYWdlJTJGcG5nXG4mdHJhbnNwYXJlbnQ9dHJ1ZVxuJnZlcnNpb249MS4xLjFcbiZ0aW1lPTIwMTktMDEtMDFUMDAlM0EwMCUzQTAwLjAwMFpcbiZ3aWR0aD0yNTZcbiZoZWlnaHQ9MjU2XG4mc3JzPUVQU0clM0EzODU3XG4mYmJveD0tMTc1MzI4MTkuNzk5OTQwNTksLTUwMDkzNzcuMDg1Njk3MzExLC0xNTAyODEzMS4yNTcwOTE5MzYsLTI1MDQ2ODguNTQyODQ4NjU1XG5cbiovXG4iXX0=