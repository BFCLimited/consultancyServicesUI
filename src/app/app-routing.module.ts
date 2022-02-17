import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  // {path: "", redirectTo:""},

  {
    path: '',
    component : ShellComponent,
    children :[
      {
        path:'ProfessionalUse',
        loadChildren : () =>
          import('./@Modules/professionals-cat/professionals-cat.module').then((m) => m.ProfessionalsCatModule),
      },
      {
        path:'ApplianceRepair',
        loadChildren : () =>
          import('./@Modules/appliances-cat/appliances-cat.module').then((m) => m.AppliancesCatModule),
      },
      
    ]
  },
  { path: "**", redirectTo: "", component: ShellComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ relativeLinkResolution: "legacy" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
