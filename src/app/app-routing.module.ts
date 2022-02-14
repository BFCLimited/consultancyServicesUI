import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  {path: "", redirectTo:"home", pathMatch:"full"},

  {
    path: 'home',
    component : ShellComponent,
    children :[
      {
        path:'ApplianceRepair',
        loadChildren : () =>
          import('./@Modules/appliances-cat/appliances-cat.module').then((m) => m.AppliancesCatModule),
      },
    ]
  },
  { path: "**", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ relativeLinkResolution: "legacy" })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
