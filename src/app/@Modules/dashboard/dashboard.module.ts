import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardMainComponent } from './dashboard-main/dashboard-main.component';
import { MaterialModule } from 'src/app/Shared/material.module';
import { SharedCommonModule } from 'src/app/Shared/shared-common/shared-common.module';


@NgModule({
  declarations: [
    DashboardMainComponent
  ],
  // exports: [DashboardMainComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    SharedCommonModule
  ]
})
export class DashboardModule { }
