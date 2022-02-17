import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppliancesCatComponent } from '../appliances-cat/appliances-cat/appliances-cat.component';
import { ProfessionalsHighlightsComponent } from './professionals-highlights/professionals-highlights.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},

  {
    path:"",
    component : ProfessionalsHighlightsComponent,
    children:[
      {
        path: "main-view", component : ProfessionalsHighlightsComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalsCatRoutingModule { }
