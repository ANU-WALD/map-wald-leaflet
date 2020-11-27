import { Injectable } from '@angular/core';
import * as leaflet from 'leaflet';
import { Observable } from 'rxjs';

@Injectable()
export class LeafletService {
  map: Promise<leaflet.Map>;
  private resolve: ((x: leaflet.Map)=>void);
  private reject: ((x: any)=>void);

  constructor() {
    this.map = new Promise<leaflet.Map>((res,rej)=>{
      this.resolve = res;
      this.reject = rej;
    });
  }

  mapCreated(map: leaflet.Map): void {
    this.resolve(map);
  }

  withMap(fn:((m:L.Map)=>void)): void {
    this.map.then(fn);
  }
}
