import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppliancesCatComponent } from './appliances-cat/appliances-cat.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {
    path:"",
    component : AppliancesCatComponent,
    children:[
      {
        path: "main-view", component : AppliancesCatComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppliancesCatRoutingModule { }
