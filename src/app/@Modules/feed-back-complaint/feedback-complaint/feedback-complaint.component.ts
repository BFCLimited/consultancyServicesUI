import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback-complaint',
  templateUrl: './feedback-complaint.component.html',
  styleUrls: ['./feedback-complaint.component.scss']
})
export class FeedbackComplaintComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  foods: any = [
    {value: '1', viewValue: 'Professional Related'},
    {value: '2', viewValue: 'Application Related'},
    {value: '3', viewValue: 'Other'},
  ];

}
