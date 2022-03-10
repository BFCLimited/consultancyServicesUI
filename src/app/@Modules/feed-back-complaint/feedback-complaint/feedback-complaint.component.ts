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

  Reviews: any =[
    {
      image: 'assets/images/blank-profile-picture.png',
      name: 'AAron Finch',
      UserType: 'Service Provider',
      VerifiedUser : true,
      Comment: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",

    },
    {
      image: 'assets/images/blank-profile-picture.png',
      name: 'Maxwell G',
      UserType: 'Client',
      VerifiedUser : false,
      Comment: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",

    },
    {
      image: 'assets/images/blank-profile-picture.png',
      name: 'R Pant',
      UserType: 'Service Provider',
      VerifiedUser : true,
      Comment: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",

    },
    {
      image: 'assets/images/blank-profile-picture.png',
      name: 'Shami M',
      UserType: 'Service Provider',
      VerifiedUser : false,
      Comment: " Lorem ipsum dolor sit.",

    },
    {
      image: 'assets/images/blank-profile-picture.png',
      name: 'Dhoni',
      UserType: 'Client',
      VerifiedUser : false,
      Comment: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",

    },
  ];

  selectedone : any;
  selectedIssue : any;
  

  FileAttacment(){
    var fileinput = document.getElementById("browse");
    fileinput?.click(); 
  }

}
