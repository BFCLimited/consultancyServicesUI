import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppliancesCatRoutingModule } from './appliances-cat-routing.module';
import { AppliancesCatComponent } from './appliances-cat/appliances-cat.component';


@NgModule({
  declarations: [
    AppliancesCatComponent
  ],
  imports: [
    CommonModule,
    AppliancesCatRoutingModule
  ]
})
export class AppliancesCatModule { }
