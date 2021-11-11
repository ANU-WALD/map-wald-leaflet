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
                noWrap: true,
                tap: false,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZmxldC1tYXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtbGVhZmxldC8iLCJzb3VyY2VzIjpbImxlYWZsZXQtbWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBK0Y7QUFDL0YsbUNBQW1DO0FBQ25DLHVEQUFtRDs7OztBQUluRCxNQUFNLGdCQUFnQixHQUFDLG9EQUFvRCxDQUFDO0FBRTVFLE1BYWEsbUJBQW1CO0lBYzlCLFlBQW9CLE9BQW1CLEVBQVUsR0FBbUI7UUFBaEQsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWdCO1FBWDNELGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ25CLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBR3RCLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFNbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUM7WUFDbkIsT0FBTztTQUNSO1FBRUQsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFaEQscUJBQXFCO1FBQ3JCLFlBQVk7UUFDWixJQUFJO1FBRUosZ0JBQWdCO1FBQ2hCLHlCQUF5QjtRQUN6QiwyQkFBMkI7UUFFM0IsMkJBQTJCO1FBQzNCLGdCQUFnQjtRQUNoQixRQUFRO1FBQ1IsTUFBTTtRQUNOLHVCQUF1QjtRQUN2QixJQUFJO1FBRVIseUJBQXlCO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsT0FBTztRQUVILElBQUcsT0FBTyxDQUFDLE1BQU0sRUFBQztZQUNoQixJQUFJLENBQUMs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LE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO1lBQ2pCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDcEMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztTQUNyQyxDQUFDLENBQUM7SUFDTCxDQUFDOztBQWxOSCxrREFvTkM7c0ZBdk1ZLG1CQUFtQjt3REFBbkIsbUJBQW1COztRQVhuQiw4QkFDWDtRQUFBLGtCQUF5QjtRQUMzQixpQkFBTTs7UUFGZ0MseUJBQWdCOztrREFXekMsbUJBQW1CO2NBYi9CLGdCQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7O0NBR1gsRUFBQyxNQUFNLEVBQUU7b0JBQ1I7Ozs7SUFJRTtpQkFDSDthQUNBOzBGQUVVLE1BQU07a0JBQWQsWUFBSztZQUNHLE9BQU87a0JBQWYsWUFBSztZQUNHLFdBQVc7a0JBQW5CLFlBQUs7WUFDRyxPQUFPO2tCQUFmLFlBQUs7WUFDRyxPQUFPO2tCQUFmLFlBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgbGVhZmxldCBmcm9tICdsZWFmbGV0JztcbmltcG9ydCB7IExlYWZsZXRTZXJ2aWNlIH0gZnJvbSAnLi9sZWFmbGV0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQm91bmRzIH0gZnJvbSAnbWFwLXdhbGQnO1xuaW1wb3J0IHsgQmFzZW1hcERlc2NyaXB0b3IgfSBmcm9tICcuL2RhdGEnO1xuXG5jb25zdCBERUZBVUxUX0JBU0VfTUFQPSdodHRwczovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xlYWZsZXQtbWFwJyxcbiAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwibGVhZmxldEhvc3RcIiBbc3R5bGVdPVwic3R5bGVzXCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbjwvZGl2PlxuYCxzdHlsZXM6IFtcbiAgYFxuICAubGVhZmxldEhvc3R7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBtaW4taGVpZ2h0OjQwMHB4O1xuICB9YFxuXVxufSlcbmV4cG9ydCBjbGFzcyBMZWFmbGV0TWFwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBib3VuZHM6IEJvdW5kcztcbiAgQElucHV0KCkgYmFzZU1hcDogQmFzZW1hcERlc2NyaXB0b3I7XG4gIEBJbnB1dCgpIHpvb21Db250cm9sID0gdHJ1ZTtcbiAgQElucHV0KCkgbWluWm9vbSA9IDU7XG4gIEBJbnB1dCgpIG1heFpvb20gPSAzMjtcblxuICBtYXA6IGxlYWZsZXQuTWFwO1xuICBzdHlsZXM6IGFueSA9IHt9O1xuICBpbml0aWFsaXNlZCA9IGZhbHNlO1xuXG4gIC8vIExlYWZsZXQuVGlsZUxheWVyXG4gIHByaXZhdGUgYmFzZUxheWVyOiBsZWFmbGV0LlRpbGVMYXllcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsIHByaXZhdGUgc3ZjOiBMZWFmbGV0U2VydmljZSkge1xuICAgIGNvbnNvbGUubG9nKCdMZWFmbGV0TWFwQ29tcG9uZW50Jyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYoIXRoaXMuaW5pdGlhbGlzZWQpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNoYW5nZUNvdW50ID0gT2JqZWN0LmtleXMoY2hhbmdlcykubGVuZ3RoO1xuXG4gICAgLy8gaWYodGhpcy5jcmVhdGluZyl7XG4gICAgLy8gICByZXR1cm47XG4gICAgLy8gfVxuXG4gICAgLy8gaWYodGhpcy5tYXApe1xuICAgIC8vICAgaWYoY2hhbmdlcy5tYXJrZXJzKXtcbiAgICAvLyAgICAgdGhpcy5zZXR1cE1hcmtlcnMoKTtcblxuICAgIC8vICAgICBpZihjaGFuZ2VDb3VudD09PTEpe1xuICAgIC8vICAgICAgIHJldHVybjtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vICAgdGhpcy5tYXAucmVtb3ZlKCk7XG4gICAgLy8gfVxuXG4vLyAgICBpZighdGhpcy5jcmVhdGluZyl7XG4gICAgdGhpcy51cGRhdGVNYXAoY2hhbmdlcyk7XG4vLyAgICB9XG5cbiAgICBpZihjaGFuZ2VzLmJvdW5kcyl7XG4gICAgICB0aGlzLnNldEJvdW5kcygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlTWFwKCk7XG4gICAgdGhpcy5zZXRCb3VuZHMoKTtcbiAgfVxuXG4gIHVwZGF0ZU1hcChjaGFuZ2VzPzogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgIGlmKCF0aGlzLm1hcCl7XG4gICAgICAgIHRoaXMuY3JlYXRlTWFwKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYoY2hhbmdlcyYmY2hhbmdlcy5iYXNlTWFwKXtcbiAgICAgICAgLy8gdGhpcy5iYXNlTGF5ZXIuc2V0VXJsKHRoaXMuYmFzZU1hcC51cmxUZW1wbGF0ZSB8fCBERUZBVUxUX0JBU0VfTUFQKVxuICAgICAgICBpZih0aGlzLmJhc2VMYXllcil7XG4gICAgICAgICAgdGhpcy5iYXNlTGF5ZXIuc2V0VXJsKHRoaXMuYmFzZU1hcC51cmxUZW1wbGF0ZSB8fCBERUZBVUxUX0JBU0VfTUFQKTtcbiAgICAgICAgICAvLyB0aGlzLmJhc2VMYXllci5yZW1vdmVGcm9tKHRoaXMubWFwKTtcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMuYmFzZU1hcCkge1xuICAgICAgICAgIHRoaXMuY3JlYXRlQmFzZUxheWVyKCk7XG4gICAgICAgICAgdGhpcy5iYXNlTGF5ZXIuYWRkVG8odGhpcy5tYXApLmJyaW5nVG9CYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFVwZGF0ZSBwYXJhbWV0ZXJzXG4gIH1cblxuICBjcmVhdGVCYXNlTGF5ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5iYXNlTGF5ZXIgPSBudWxsO1xuICAgIGlmKCF0aGlzLmJhc2VNYXApe1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG9wdGlvbnM6IGxlYWZsZXQuVGlsZUxheWVyT3B0aW9ucyA9IHt9O1xuICAgIGlmKHRoaXMuYmFzZU1hcC5tYXhOYXRpdmVab29tKXtcbiAgICAgIG9wdGlvbnMubWF4TmF0aXZlWm9vbSA9IHRoaXMuYmFzZU1hcC5tYXhOYXRpdmVab29tO1xuICAgIH1cblxuICAgIHRoaXMuYmFzZUxheWVyID0gbGVhZmxldC50aWxlTGF5ZXIodGhpcy5iYXNlTWFwLnVybFRlbXBsYXRlIHx8IERFRkFVTFRfQkFTRV9NQVAsb3B0aW9ucyk7XG4gIH1cblxuICBjcmVhdGVNYXAoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgaWYodGhpcy5tYXApe1xuICAgICAgICB0aGlzLm1hcC5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5tYXAgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0aGVEaXYgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IHRoZUhvc3QgPSB0aGVEaXYucXVlcnlTZWxlY3RvcignLmxlYWZsZXRIb3N0Jyk7XG5cbiAgICAgIC8vIGxldCBiYXNlTGF5ZXJzID0gUi5tYXBPYmpJbmRleGVkKHY9PntcbiAgICAgIC8vICAgcmV0dXJuIEwudGlsZUxheWVyKHYsXG4gICAgICAvLyAgICAgeyBtYXhab29tOiAxOCwgYXR0cmlidXRpb246ICcuLi4nIH0pO1xuICAgICAgLy8gfSx0aGlzLmJhc2VNYXBzKTtcblxuICAgICAgLy8gaWYoIXRoaXMuYmFzZU1hcCB8fCAhYmFzZUxheWVyc1t0aGlzLmJhc2VNYXBdKXtcbiAgICAgIC8vICAgdGhpcy5iYXNlTWFwID0gT2JqZWN0LmtleXModGhpcy5iYXNlTWFwcylbMF07XG4gICAgICAvLyB9XG5cbiAgICAgIC8vIGxldCBiYXNlTGF5ZXJBcnJheSA9IFtiYXNlTGF5ZXJzW3RoaXMuYmFzZU1hcF1dO1xuICAgICAgbGV0IGNycyA9IGxlYWZsZXQuQ1JTLkVQU0czODU3Oy8vOkwuQ1JTLlNpbXBsZTtcbiAgICAgIC8vIGlmKHRoaXMuY3JzKXtcbiAgICAgIC8vICAgY3JzID0gTC5DUlNbdGhpcy5jcnNdO1xuICAgICAgLy8gfVxuXG4gICAgICAvLyBsZXQgcGFuZXMgPSAwO1xuICAgICAgLy8gaWYodGhpcy5tYXApe1xuICAgICAgLy8gICBwYW5lcyA9IGdldEN1c3RvbU1hcFBhbmVzKHRoaXMubWFwKS5sZW5ndGg7XG4gICAgICAvLyB9XG4gICAgICB0aGlzLmNyZWF0ZUJhc2VMYXllcigpO1xuICAgICAgY29uc3QgYmFzZUxheWVyQXJyYXkgPSBbXG4gICAgICBdO1xuICAgICAgaWYodGhpcy5iYXNlTGF5ZXIpe1xuICAgICAgICBiYXNlTGF5ZXJBcnJheS5wdXNoKHRoaXMuYmFzZUxheWVyKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5tYXAgPSBsZWFmbGV0Lm1hcCh0aGVIb3N0IGFzIEhUTUxFbGVtZW50LHtcbiAgICAgICAgY3JzLFxuICAgICAgICB6b29tOiA1LFxuICAgICAgICBtaW5ab29tOiB0aGlzLm1pblpvb20sXG4gICAgICAgIG1heFpvb206IHRoaXMubWF4Wm9vbSxcbiAgICAgICAgem9vbUNvbnRyb2w6IHRoaXMuem9vbUNvbnRyb2wsXG4gICAgICAgIGNlbnRlcjogbGVhZmxldC5sYXRMbmcoLTIwLCAxMzUpLFxuICAgICAgICAvLyB6b29tOiB0aGlzLnpvb20sXG4gICAgICAgIC8vIG1pblpvb206IHRoaXMubWluWm9vbSxcbiAgICAgICAgLy8gbWF4Wm9vbTogdGhpcy5tYXhab29tLFxuICAgICAgICBzY3JvbGxXaGVlbFpvb206IHRydWUsXG4gICAgICAgIGxheWVyczpiYXNlTGF5ZXJBcnJheSxcbiAgICAgICAgY29udGludW91c1dvcmxkOiBmYWxzZSxcbiAgICAgICAgbm9XcmFwOiB0cnVlLFxuICAgICAgICB0YXA6IGZhbHNlLFxuICAgICAgICAvLyB3b3JsZENvcHlKdW1wOnRydWVcbiAgICAgICAgICAgIC8vIGF0dHJpYnV0aW9uQ29udHJvbDogdGhpcy5hdHRyaWJ1dGlvblxuICAgICAgfSBhcyBsZWFmbGV0Lk1hcE9wdGlvbnMpO1xuICAgICAgdGhpcy5zdmMubWFwQ3JlYXRlZCh0aGlzLm1hcCk7XG4gICAgICAvLyBpZighdGhpcy5wYW5uYWJsZSl7XG4gICAgICAvLyAgIHRoaXMubWFwLmRyYWdnaW5nLmRpc2FibGUoKTtcbiAgICAgIC8vIH1cblxuICAgICAgLy8gaWYoIXRoaXMuem9vbWFibGUpe1xuICAgICAgLy8gICB0aGlzLm1hcC50b3VjaFpvb20uZGlzYWJsZSgpO1xuICAgICAgLy8gICB0aGlzLm1hcC5kb3VibGVDbGlja1pvb20uZGlzYWJsZSgpO1xuICAgICAgLy8gICB0aGlzLm1hcC5zY3JvbGxXaGVlbFpvb20uZGlzYWJsZSgpO1xuICAgICAgLy8gfVxuXG4gICAgICAvLyBjb25maWd1cmVWZWN0b3JQYW5lcyhwYW5lcyx0aGlzLm1hcCk7XG5cbiAgICAgIC8vIHRoaXMuX2hlbHBlci5yZWdpc3Rlcih0aGlzLm1hcCk7XG4gICAgICB0aGlzLm1hcC5vbignY2xpY2snLChldnQ6IGxlYWZsZXQuTGVhZmxldE1vdXNlRXZlbnQpPT57XG4gICAgICAgIGlmKGV2dC5vcmlnaW5hbEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpe1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLnBvaW50Q2xpY2suZW1pdChldnQubGF0bG5nKTtcbiAgICAgIH0pO1xuICAgICAgLy8gdGhpcy5jcmVhdGluZz1mYWxzZTtcblxuICAgICAgLy8gdGhpcy5tYXAub24oJ3pvb21lbmQnLCgpPT50aGlzLmNvb3JkaW5hdGVzQ2hhbmdlZCgpKTtcbiAgICAgIC8vIHRoaXMubWFwLm9uKCdtb3ZlZW5kJywoKT0+dGhpcy5jb29yZGluYXRlc0NoYW5nZWQoKSk7XG5cbiAgICAgIC8vIGlmKHRoaXMuc2hvd0xheWVyQ29udHJvbCl7XG4gICAgICAvLyAgIHRoaXMubGF5ZXJDb250cm9sID0gTC5jb250cm9sLmxheWVycyhiYXNlTGF5ZXJzLCBbXSx7XG4gICAgICAvLyAgICAgaGlkZVNpbmdsZUJhc2U6dHJ1ZVxuICAgICAgLy8gICB9KS5hZGRUbyh0aGlzLm1hcCk7XG4gICAgICAvLyB9XG5cbiAgICAgIC8vIHRoaXMubWFwQ3JlYXRlZC5lbWl0KHRoaXMubWFwKTtcblxuXG5cbiAgICAgIC8vIHRoaXMubWFya2VyTGF5ZXJzID0gW107XG4gICAgICAvLyB0aGlzLnNldHVwTWFya2VycygpO1xuXG4gICAgICB0aGlzLnNldEJvdW5kcygpO1xuICAgICAgdGhpcy5pbml0aWFsaXNlZCA9IHRydWU7XG4gICAgfSk7XG5cbiAgfVxuXG4gIHNldEJvdW5kcygpOiB2b2lkIHtcbiAgICBpZighdGhpcy5tYXB8fCF0aGlzLmJvdW5kcyl7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5tYXAuZml0Qm91bmRzKFtcbiAgICAgIFt0aGlzLmJvdW5kcy5zb3V0aCx0aGlzLmJvdW5kcy53ZXN0XSxcbiAgICAgIFt0aGlzLmJvdW5kcy5ub3J0aCx0aGlzLmJvdW5kcy5lYXN0XVxuICAgIF0pO1xuICB9XG5cbn1cbi8qXG5odHRwOi8vMzUuMjQ0LjExMS4xNjg6ODA4MC93bXNcbj9zZXJ2aWNlPVdNU1xuJnJlcXVlc3Q9R2V0TWFwXG4mbGF5ZXJzPXdjZlxuJnN0eWxlcz1cbiZmb3JtYXQ9aW1hZ2UlMkZwbmdcbiZ0cmFuc3BhcmVudD10cnVlXG4mdmVyc2lvbj0xLjEuMVxuJnRpbWU9MjAxOS0wMS0wMVQwMCUzQTAwJTNBMDAuMDAwWlxuJndpZHRoPTI1NlxuJmhlaWdodD0yNTZcbiZzcnM9RVBTRyUzQTM4NTdcbiZiYm94PS0xNzUzMjgxOS43OTk5NDA1OSwtNTAwOTM3Ny4wODU2OTczMTEsLTE1MDI4MTMxLjI1NzA5MTkzNiwtMjUwNDY4OC41NDI4NDg2NTVcblxuKi9cbiJdfQ==