import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalsCatRoutingModule } from './professionals-cat-routing.module';
import { ProfessionalsHighlightsComponent } from './professionals-highlights/professionals-highlights.component';
import { MaterialModule } from 'src/app/Shared/material.module';
import { ProfessionalsRegistrationComponent } from './professionals-registration/professionals-registration.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfessionalsHighlightsComponent,
    ProfessionalsRegistrationComponent
  ],
  imports: [
    CommonModule,
    ProfessionalsCatRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ProfessionalsCatModule { }
