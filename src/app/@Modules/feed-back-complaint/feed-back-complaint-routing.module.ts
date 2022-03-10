import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComplaintComponent } from './feedback-complaint/feedback-complaint.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {
    path:"",
    component : FeedbackComplaintComponent,
    children:[
      {
        path: "main-view", component : FeedbackComplaintComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedBackComplaintRoutingModule { }
