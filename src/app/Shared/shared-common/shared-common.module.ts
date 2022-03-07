import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedCommonRoutingModule } from './shared-common-routing.module';
import { GeoLocationMapsComponent } from './geo-location-maps/geo-location-maps.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    GeoLocationMapsComponent
  ],
  imports: [
    CommonModule,
    SharedCommonRoutingModule,
    FormsModule,
    MaterialModule,
    
  ],
  exports: [MaterialModule,GeoLocationMapsComponent],
})
export class SharedCommonModule { }
