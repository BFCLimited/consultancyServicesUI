import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppliancesCatComponent } from '../appliances-cat/appliances-cat/appliances-cat.component';
import { ProfessionalsHighlightsComponent } from './professionals-highlights/professionals-highlights.component';
import { ProfessionalsRegistrationComponent } from './professionals-registration/professionals-registration.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},

  {
    path:"",
    component : ProfessionalsHighlightsComponent,
    children:[
      {
        path: "Registration", component : ProfessionalsRegistrationComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalsCatRoutingModule { }
