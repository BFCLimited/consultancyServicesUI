import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ServiceRequestRoutingModule } from './service-request-routing.module';
import { ServiceProvidersComponent } from './service-providers/service-providers.component';
import { MaterialModule } from 'src/app/Shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationRequestDetailsComponent } from './confirmation-request-details/confirmation-request-details.component';


@NgModule({
  declarations: [
    ServiceProvidersComponent,
    ConfirmationRequestDetailsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ServiceRequestRoutingModule,
    FormsModule
  ]
})
export class ServiceRequestModule { }
