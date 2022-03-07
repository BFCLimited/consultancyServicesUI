import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppliancesCatRoutingModule } from './appliances-cat-routing.module';
import { AppliancesCatComponent } from './appliances-cat/appliances-cat.component';
import { MaterialModule } from 'src/app/Shared/material.module';
import { SharedCommonModule } from 'src/app/Shared/shared-common/shared-common.module';


@NgModule({
  declarations: [
    AppliancesCatComponent
  ],
  imports: [
    CommonModule,
    AppliancesCatRoutingModule,
    MaterialModule,
    SharedCommonModule
  ]
})
export class AppliancesCatModule { }
