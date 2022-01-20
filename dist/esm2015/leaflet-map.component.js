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
        this.pointSelection = false;
        this.pointSelected = new core_1.EventEmitter();
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
                maxBounds: toBounds(this.maxBounds),
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
                if (!this.pointSelection || evt.originalEvent.defaultPrevented) {
                    return;
                }
                this.pointSelected.emit(evt.latlng);
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
        this.map.fitBounds(toBounds(this.bounds));
    }
}
exports.LeafletMapComponent = LeafletMapComponent;
LeafletMapComponent.ɵfac = function LeafletMapComponent_Factory(t) { return new (t || LeafletMapComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.LeafletService)); };
LeafletMapComponent.ɵcmp = i0.ɵɵdefineComponent({ type: LeafletMapComponent, selectors: [["leaflet-map"]], inputs: { bounds: "bounds", maxBounds: "maxBounds", baseMap: "baseMap", zoomControl: "zoomControl", minZoom: "minZoom", maxZoom: "maxZoom", pointSelection: "pointSelection" }, outputs: { pointSelected: "pointSelected" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[1, "leafletHost"]], template: function LeafletMapComponent_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZmxldC1tYXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWFwLXdhbGQtbGVhZmxldC8iLCJzb3VyY2VzIjpbImxlYWZsZXQtbWFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx3Q0FBcUg7QUFDckgsbUNBQW1DO0FBQ25DLHVEQUFtRDs7OztBQUluRCxNQUFNLGdCQUFnQixHQUFDLG9EQUFvRCxDQUFDO0FBRTVFLE1BYWEsbUJBQW1CO0lBaUI5QixZQUFvQixPQUFtQixFQUFVLEdBQW1CO1FBQWhELFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFnQjtRQWIzRCxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUNuQixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGtCQUFhLEdBQUcsSUFBSSxtQkFBWSxFQUFrQixDQUFDO1FBRzdELFdBQU0sR0FBUSxFQUFFLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7UUFNbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUM7WUFDbkIsT0FBTztTQUNSO1FBRUQsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFFaEQscUJBQXFCO1FBQ3JCLFlBQVk7UUFDWixJQUFJO1FBRUosZ0JBQWdCO1FBQ2hCLHlCQUF5QjtRQUN6QiwyQkFBMkI7UUFFM0IsMkJBQTJCO1FBQzNCLGdCQUFnQjtRQUNoQixRQUFRO1FBQ1IsTUFBTTtRQUNOLHVCQUF1QjtRQUN2QixJQUFJO1FBRVIseUJBQXlCO1FBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxD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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBFbGVtZW50UmVmLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGxlYWZsZXQgZnJvbSAnbGVhZmxldCc7XG5pbXBvcnQgeyBMZWFmbGV0U2VydmljZSB9IGZyb20gJy4vbGVhZmxldC5zZXJ2aWNlJztcbmltcG9ydCB7IEJvdW5kcyB9IGZyb20gJ21hcC13YWxkJztcbmltcG9ydCB7IEJhc2VtYXBEZXNjcmlwdG9yIH0gZnJvbSAnLi9kYXRhJztcblxuY29uc3QgREVGQVVMVF9CQVNFX01BUD0naHR0cHM6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsZWFmbGV0LW1hcCcsXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImxlYWZsZXRIb3N0XCIgW3N0eWxlXT1cInN0eWxlc1wiPlxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbmAsc3R5bGVzOiBbXG4gIGBcbiAgLmxlYWZsZXRIb3N0e1xuICAgIHdpZHRoOjEwMCU7XG4gICAgbWluLWhlaWdodDo0MDBweDtcbiAgfWBcbl1cbn0pXG5leHBvcnQgY2xhc3MgTGVhZmxldE1hcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgYm91bmRzOiBCb3VuZHM7XG4gIEBJbnB1dCgpIG1heEJvdW5kczogQm91bmRzO1xuICBASW5wdXQoKSBiYXNlTWFwOiBCYXNlbWFwRGVzY3JpcHRvcjtcbiAgQElucHV0KCkgem9vbUNvbnRyb2wgPSB0cnVlO1xuICBASW5wdXQoKSBtaW5ab29tID0gNTtcbiAgQElucHV0KCkgbWF4Wm9vbSA9IDMyO1xuICBASW5wdXQoKSBwb2ludFNlbGVjdGlvbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgcG9pbnRTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8bGVhZmxldC5MYXRMbmc+KCk7XG5cbiAgbWFwOiBsZWFmbGV0Lk1hcDtcbiAgc3R5bGVzOiBhbnkgPSB7fTtcbiAgaW5pdGlhbGlzZWQgPSBmYWxzZTtcblxuICAvLyBMZWFmbGV0LlRpbGVMYXllclxuICBwcml2YXRlIGJhc2VMYXllcjogbGVhZmxldC5UaWxlTGF5ZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHN2YzogTGVhZmxldFNlcnZpY2UpIHtcbiAgICBjb25zb2xlLmxvZygnTGVhZmxldE1hcENvbXBvbmVudCcpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmKCF0aGlzLmluaXRpYWxpc2VkKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjaGFuZ2VDb3VudCA9IE9iamVjdC5rZXlzKGNoYW5nZXMpLmxlbmd0aDtcblxuICAgIC8vIGlmKHRoaXMuY3JlYXRpbmcpe1xuICAgIC8vICAgcmV0dXJuO1xuICAgIC8vIH1cblxuICAgIC8vIGlmKHRoaXMubWFwKXtcbiAgICAvLyAgIGlmKGNoYW5nZXMubWFya2Vycyl7XG4gICAgLy8gICAgIHRoaXMuc2V0dXBNYXJrZXJzKCk7XG5cbiAgICAvLyAgICAgaWYoY2hhbmdlQ291bnQ9PT0xKXtcbiAgICAvLyAgICAgICByZXR1cm47XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyAgIHRoaXMubWFwLnJlbW92ZSgpO1xuICAgIC8vIH1cblxuLy8gICAgaWYoIXRoaXMuY3JlYXRpbmcpe1xuICAgIHRoaXMudXBkYXRlTWFwKGNoYW5nZXMpO1xuLy8gICAgfVxuXG4gICAgaWYoY2hhbmdlcy5ib3VuZHMpe1xuICAgICAgdGhpcy5zZXRCb3VuZHMoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZU1hcCgpO1xuICAgIHRoaXMuc2V0Qm91bmRzKCk7XG4gIH1cblxuICB1cGRhdGVNYXAoY2hhbmdlcz86IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICBpZighdGhpcy5tYXApe1xuICAgICAgICB0aGlzLmNyZWF0ZU1hcCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmKGNoYW5nZXMmJmNoYW5nZXMuYmFzZU1hcCl7XG4gICAgICAgIC8vIHRoaXMuYmFzZUxheWVyLnNldFVybCh0aGlzLmJhc2VNYXAudXJsVGVtcGxhdGUgfHwgREVGQVVMVF9CQVNFX01BUClcbiAgICAgICAgaWYodGhpcy5iYXNlTGF5ZXIpe1xuICAgICAgICAgIHRoaXMuYmFzZUxheWVyLnNldFVybCh0aGlzLmJhc2VNYXAudXJsVGVtcGxhdGUgfHwgREVGQVVMVF9CQVNFX01BUCk7XG4gICAgICAgICAgLy8gdGhpcy5iYXNlTGF5ZXIucmVtb3ZlRnJvbSh0aGlzLm1hcCk7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmJhc2VNYXApIHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUJhc2VMYXllcigpO1xuICAgICAgICAgIHRoaXMuYmFzZUxheWVyLmFkZFRvKHRoaXMubWFwKS5icmluZ1RvQmFjaygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBVcGRhdGUgcGFyYW1ldGVyc1xuICB9XG5cbiAgY3JlYXRlQmFzZUxheWVyKCk6IHZvaWQge1xuICAgIHRoaXMuYmFzZUxheWVyID0gbnVsbDtcbiAgICBpZighdGhpcy5iYXNlTWFwKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBvcHRpb25zOiBsZWFmbGV0LlRpbGVMYXllck9wdGlvbnMgPSB7fTtcbiAgICBpZih0aGlzLmJhc2VNYXAubWF4TmF0aXZlWm9vbSl7XG4gICAgICBvcHRpb25zLm1heE5hdGl2ZVpvb20gPSB0aGlzLmJhc2VNYXAubWF4TmF0aXZlWm9vbTtcbiAgICB9XG5cbiAgICB0aGlzLmJhc2VMYXllciA9IGxlYWZsZXQudGlsZUxheWVyKHRoaXMuYmFzZU1hcC51cmxUZW1wbGF0ZSB8fCBERUZBVUxUX0JBU0VfTUFQLG9wdGlvbnMpO1xuICB9XG5cbiAgY3JlYXRlTWFwKCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgIGlmKHRoaXMubWFwKXtcbiAgICAgICAgdGhpcy5tYXAucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMubWFwID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdGhlRGl2ID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCB0aGVIb3N0ID0gdGhlRGl2LnF1ZXJ5U2VsZWN0b3IoJy5sZWFmbGV0SG9zdCcpO1xuXG4gICAgICAvLyBsZXQgYmFzZUxheWVycyA9IFIubWFwT2JqSW5kZXhlZCh2PT57XG4gICAgICAvLyAgIHJldHVybiBMLnRpbGVMYXllcih2LFxuICAgICAgLy8gICAgIHsgbWF4Wm9vbTogMTgsIGF0dHJpYnV0aW9uOiAnLi4uJyB9KTtcbiAgICAgIC8vIH0sdGhpcy5iYXNlTWFwcyk7XG5cbiAgICAgIC8vIGlmKCF0aGlzLmJhc2VNYXAgfHwgIWJhc2VMYXllcnNbdGhpcy5iYXNlTWFwXSl7XG4gICAgICAvLyAgIHRoaXMuYmFzZU1hcCA9IE9iamVjdC5rZXlzKHRoaXMuYmFzZU1hcHMpWzBdO1xuICAgICAgLy8gfVxuXG4gICAgICAvLyBsZXQgYmFzZUxheWVyQXJyYXkgPSBbYmFzZUxheWVyc1t0aGlzLmJhc2VNYXBdXTtcbiAgICAgIGxldCBjcnMgPSBsZWFmbGV0LkNSUy5FUFNHMzg1NzsvLzpMLkNSUy5TaW1wbGU7XG4gICAgICAvLyBpZih0aGlzLmNycyl7XG4gICAgICAvLyAgIGNycyA9IEwuQ1JTW3RoaXMuY3JzXTtcbiAgICAgIC8vIH1cblxuICAgICAgLy8gbGV0IHBhbmVzID0gMDtcbiAgICAgIC8vIGlmKHRoaXMubWFwKXtcbiAgICAgIC8vICAgcGFuZXMgPSBnZXRDdXN0b21NYXBQYW5lcyh0aGlzLm1hcCkubGVuZ3RoO1xuICAgICAgLy8gfVxuICAgICAgdGhpcy5jcmVhdGVCYXNlTGF5ZXIoKTtcbiAgICAgIGNvbnN0IGJhc2VMYXllckFycmF5ID0gW1xuICAgICAgXTtcbiAgICAgIGlmKHRoaXMuYmFzZUxheWVyKXtcbiAgICAgICAgYmFzZUxheWVyQXJyYXkucHVzaCh0aGlzLmJhc2VMYXllcik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubWFwID0gbGVhZmxldC5tYXAodGhlSG9zdCBhcyBIVE1MRWxlbWVudCx7XG4gICAgICAgIGNycyxcbiAgICAgICAgem9vbTogNSxcbiAgICAgICAgbWF4Qm91bmRzOiB0b0JvdW5kcyh0aGlzLm1heEJvdW5kcyksXG4gICAgICAgIG1pblpvb206IHRoaXMubWluWm9vbSxcbiAgICAgICAgbWF4Wm9vbTogdGhpcy5tYXhab29tLFxuICAgICAgICB6b29tQ29udHJvbDogdGhpcy56b29tQ29udHJvbCxcbiAgICAgICAgY2VudGVyOiBsZWFmbGV0LmxhdExuZygtMjAsIDEzNSksXG4gICAgICAgIC8vIHpvb206IHRoaXMuem9vbSxcbiAgICAgICAgLy8gbWluWm9vbTogdGhpcy5taW5ab29tLFxuICAgICAgICAvLyBtYXhab29tOiB0aGlzLm1heFpvb20sXG4gICAgICAgIHNjcm9sbFdoZWVsWm9vbTogdHJ1ZSxcbiAgICAgICAgbGF5ZXJzOmJhc2VMYXllckFycmF5LFxuICAgICAgICBjb250aW51b3VzV29ybGQ6IGZhbHNlLFxuICAgICAgICBub1dyYXA6IHRydWUsXG4gICAgICAgIHRhcDogZmFsc2UsXG4gICAgICAgIC8vIHdvcmxkQ29weUp1bXA6dHJ1ZVxuICAgICAgICAgICAgLy8gYXR0cmlidXRpb25Db250cm9sOiB0aGlzLmF0dHJpYnV0aW9uXG4gICAgICB9IGFzIGxlYWZsZXQuTWFwT3B0aW9ucyk7XG4gICAgICB0aGlzLnN2Yy5tYXBDcmVhdGVkKHRoaXMubWFwKTtcbiAgICAgIC8vIGlmKCF0aGlzLnBhbm5hYmxlKXtcbiAgICAgIC8vICAgdGhpcy5tYXAuZHJhZ2dpbmcuZGlzYWJsZSgpO1xuICAgICAgLy8gfVxuXG4gICAgICAvLyBpZighdGhpcy56b29tYWJsZSl7XG4gICAgICAvLyAgIHRoaXMubWFwLnRvdWNoWm9vbS5kaXNhYmxlKCk7XG4gICAgICAvLyAgIHRoaXMubWFwLmRvdWJsZUNsaWNrWm9vbS5kaXNhYmxlKCk7XG4gICAgICAvLyAgIHRoaXMubWFwLnNjcm9sbFdoZWVsWm9vbS5kaXNhYmxlKCk7XG4gICAgICAvLyB9XG5cbiAgICAgIC8vIGNvbmZpZ3VyZVZlY3RvclBhbmVzKHBhbmVzLHRoaXMubWFwKTtcblxuICAgICAgLy8gdGhpcy5faGVscGVyLnJlZ2lzdGVyKHRoaXMubWFwKTtcbiAgICAgIHRoaXMubWFwLm9uKCdjbGljaycsKGV2dDogbGVhZmxldC5MZWFmbGV0TW91c2VFdmVudCk9PntcbiAgICAgICAgaWYoIXRoaXMucG9pbnRTZWxlY3Rpb24gfHwgZXZ0Lm9yaWdpbmFsRXZlbnQuZGVmYXVsdFByZXZlbnRlZCl7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wb2ludFNlbGVjdGVkLmVtaXQoZXZ0LmxhdGxuZyk7XG4gICAgICB9KTtcbiAgICAgIC8vIHRoaXMuY3JlYXRpbmc9ZmFsc2U7XG5cbiAgICAgIC8vIHRoaXMubWFwLm9uKCd6b29tZW5kJywoKT0+dGhpcy5jb29yZGluYXRlc0NoYW5nZWQoKSk7XG4gICAgICAvLyB0aGlzLm1hcC5vbignbW92ZWVuZCcsKCk9PnRoaXMuY29vcmRpbmF0ZXNDaGFuZ2VkKCkpO1xuXG4gICAgICAvLyBpZih0aGlzLnNob3dMYXllckNvbnRyb2wpe1xuICAgICAgLy8gICB0aGlzLmxheWVyQ29udHJvbCA9IEwuY29udHJvbC5sYXllcnMoYmFzZUxheWVycywgW10se1xuICAgICAgLy8gICAgIGhpZGVTaW5nbGVCYXNlOnRydWVcbiAgICAgIC8vICAgfSkuYWRkVG8odGhpcy5tYXApO1xuICAgICAgLy8gfVxuXG4gICAgICAvLyB0aGlzLm1hcENyZWF0ZWQuZW1pdCh0aGlzLm1hcCk7XG5cblxuXG4gICAgICAvLyB0aGlzLm1hcmtlckxheWVycyA9IFtdO1xuICAgICAgLy8gdGhpcy5zZXR1cE1hcmtlcnMoKTtcblxuICAgICAgdGhpcy5zZXRCb3VuZHMoKTtcbiAgICAgIHRoaXMuaW5pdGlhbGlzZWQgPSB0cnVlO1xuICAgIH0pO1xuXG4gIH1cblxuICBzZXRCb3VuZHMoKTogdm9pZCB7XG4gICAgaWYoIXRoaXMubWFwfHwhdGhpcy5ib3VuZHMpe1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubWFwLmZpdEJvdW5kcyh0b0JvdW5kcyh0aGlzLmJvdW5kcykpO1xuICB9XG5cbn1cbi8qXG5odHRwOi8vMzUuMjQ0LjExMS4xNjg6ODA4MC93bXNcbj9zZXJ2aWNlPVdNU1xuJnJlcXVlc3Q9R2V0TWFwXG4mbGF5ZXJzPXdjZlxuJnN0eWxlcz1cbiZmb3JtYXQ9aW1hZ2UlMkZwbmdcbiZ0cmFuc3BhcmVudD10cnVlXG4mdmVyc2lvbj0xLjEuMVxuJnRpbWU9MjAxOS0wMS0wMVQwMCUzQTAwJTNBMDAuMDAwWlxuJndpZHRoPTI1NlxuJmhlaWdodD0yNTZcbiZzcnM9RVBTRyUzQTM4NTdcbiZiYm94PS0xNzUzMjgxOS43OTk5NDA1OSwtNTAwOTM3Ny4wODU2OTczMTEsLTE1MDI4MTMxLjI1NzA5MTkzNiwtMjUwNDY4OC41NDI4NDg2NTVcblxuKi9cblxuZnVuY3Rpb24gdG9Cb3VuZHMoYm91bmRzOkJvdW5kcyk6TC5MYXRMbmdCb3VuZHNMaXRlcmFse1xuICBpZighYm91bmRzKXtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBbXG4gICAgW2JvdW5kcy5zb3V0aCxib3VuZHMud2VzdF0sXG4gICAgW2JvdW5kcy5ub3J0aCxib3VuZHMuZWFzdF1cbiAgXTtcbn0iXX0=