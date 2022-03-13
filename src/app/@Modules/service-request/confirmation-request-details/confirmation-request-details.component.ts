import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-confirmation-request-details',
  templateUrl: './confirmation-request-details.component.html',
  styleUrls: ['./confirmation-request-details.component.scss']
})
export class ConfirmationRequestDetailsComponent implements OnInit {

RecentAddress : any =[
  {
    FullAddress : "1-1104,parkroad, mangalagiri, Guntur dt 522503",
    DoorNum: "1-1104",
    Street:"Parkroad",
    City:"Mangalagiri",
    State:"Andhra Pradesh",
    Pin : "522503",
    AddressId : 1
  },
  {
    FullAddress : "1/c 2-D,AjayNagar, mangalagiri, Guntur dt 522503",
    DoorNum: "1/c 2-D",
    Street:"AjayNagar",
    City:"Mangalagiri",
    State:"Andhra Pradesh",
    Pin : "522503",
    AddressId :2
  },
  {
    FullAddress : "1/c 2-D,AjayNagar, mangalagiri, Guntur dt 522503",
    DoorNum: "1/c 2-D",
    Street:"AjayNagar",
    City:"Mangalagiri",
    State:"Andhra Pradesh",
    Pin : "522503",
    AddressId :3
  },

];

citys : any = [
  {
    Name: "Andhra Pradesh",
    Id:1
  },
  {
    Name: "Telangana",
    Id:1
  },
  {
    Name: "Tamil Nadu",
    Id:1
  },
  {
    Name: "Karnataka",
    Id:1
  },
];

Address = "";
State=0;
city = "";
LandMark = "";
mobileNum = "";
pinCode="";



  constructor(public _dialogCloseIconClicked: MatDialogRef<ConfirmationRequestDetailsComponent>) { }

  ngOnInit(): void {
  }


  onAddressClick(address:any){
    this.Address = address.DoorNum;
    this.State = 1;
    this.city = address.City;
    this.pinCode = address.Pin;
    this.LandMark = address.Street
  }


  closeConfirmationRequestDetails(){
    this._dialogCloseIconClicked.close();
  }

}
