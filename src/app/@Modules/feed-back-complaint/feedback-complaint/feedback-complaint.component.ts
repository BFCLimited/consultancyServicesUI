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

  Rating: any = [
    {value: '1', viewValue: 'Reporting Issue'},
    {value: '2', viewValue: 'Look into Issue'},
    {value: '3', viewValue: 'Prior Issue'},
    {value: '4', viewValue: 'On Field Issue'},
  ];

  ApplicationIssueType: any =[
    {value: '1', viewValue: 'Report Bug'},
    {value: '2', viewValue: 'Enhancement'},
    {value: '3', viewValue: 'Suggestion'},
  ];

  selectedone : any;
  selectedIssue : any;
  

  FileAttacment(){
    var fileinput = document.getElementById("browse");
    fileinput?.click(); 
  }

}
