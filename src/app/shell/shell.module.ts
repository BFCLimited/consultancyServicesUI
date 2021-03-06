import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { MaterialModule } from '../Shared/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ShellComponent,
    SideNavComponent,
    HeaderNavComponent
  ],
  exports:[ShellComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
    
  ],
})
export class ShellModule { }
