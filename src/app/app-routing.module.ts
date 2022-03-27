import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  { path: "", redirectTo: "home/dashboard", pathMatch: "full" },

  {
    path: 'home',
    component : ShellComponent,
    children :[
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./@Modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path:'ProfessionalUse',
        loadChildren : () =>
          import('./@Modules/professionals-cat/professionals-cat.module').then((m) => m.ProfessionalsCatModule),
      },
      {
        path:'FeedBackComponent',
        loadChildren : () =>
          import('./@Modules/feed-back-complaint/feed-back-complaint.module').then((m) => m.FeedBackComplaintModule),
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
