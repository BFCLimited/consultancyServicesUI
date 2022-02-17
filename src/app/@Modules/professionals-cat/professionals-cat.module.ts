import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalsCatRoutingModule } from './professionals-cat-routing.module';
import { ProfessionalsHighlightsComponent } from './professionals-highlights/professionals-highlights.component';
import { MaterialModule } from 'src/app/Shared/material.module';


@NgModule({
  declarations: [
    ProfessionalsHighlightsComponent
  ],
  imports: [
    CommonModule,
    ProfessionalsCatRoutingModule,
    MaterialModule
  ]
})
export class ProfessionalsCatModule { }
