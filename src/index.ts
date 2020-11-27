import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MapWaldCoreModule } from 'map-wald';

const components: any[] = [
  //$componentList
];

const services: any[] = [
  //$serviceList
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    MapWaldCoreModule
  ],
  declarations: components,
  exports: components,
  providers: services
})
export class MapWaldLeafletModule {
  static forRoot(moduleInitialisation:any): ModuleWithProviders<MapWaldLeafletModule> {
    return {
      ngModule: MapWaldLeafletModule,
      providers: services
    };
  }
}
