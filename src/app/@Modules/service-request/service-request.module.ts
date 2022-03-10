import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRequestRoutingModule } from './service-request-routing.module';
import { ServiceProvidersComponent } from './service-providers/service-providers.component';
import { MaterialModule } from 'src/app/Shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ServiceProvidersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ServiceRequestRoutingModule
  ]
})
export class ServiceRequestModule { }
