import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedBackComplaintRoutingModule } from './feed-back-complaint-routing.module';
import { FeedbackComplaintComponent } from './feedback-complaint/feedback-complaint.component';
import { MaterialModule } from 'src/app/Shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    FeedbackComplaintComponent
  ],
  imports: [
    CommonModule,
    FeedBackComplaintRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MatTabsModule
  ]
})
export class FeedBackComplaintModule { }
