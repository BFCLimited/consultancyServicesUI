import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppliancesCatRoutingModule } from './appliances-cat-routing.module';
import { AppliancesCatComponent } from './appliances-cat/appliances-cat.component';
import { MaterialModule } from 'src/app/Shared/material.module';


@NgModule({
  declarations: [
    AppliancesCatComponent
  ],
  imports: [
    CommonModule,
    AppliancesCatRoutingModule,
    MaterialModule
  ]
})
export class AppliancesCatModule { }
