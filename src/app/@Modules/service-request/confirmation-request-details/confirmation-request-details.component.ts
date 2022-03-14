import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationPopUpComponent } from 'src/app/Shared/shared-common/confirmation-pop-up/confirmation-pop-up.component';


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
    Id:2
  },
  {
    Name: "Tamil Nadu",
    Id:3
  },
  {
    Name: "Karnataka",
    Id:4
  },
];

Address = "";
State=0;
city = "";
LandMark = "";
mobileNum = "";
pinCode="";

ServiceRequestData:any;

  constructor(public _dialogCloseIconClicked: MatDialogRef<ConfirmationRequestDetailsComponent>,
    public _openDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      ServiceId: number,
      CategoryId: number,
      ProviderId: number,
      ServiceName:string,
      ProviderName: string
    }
    ) { }

  ngOnInit(): void {
    this.ServiceRequestData = JSON.parse(JSON.stringify(this.data));
  }


  onAddressClick(address:any){
    this.Address = address.DoorNum;
    this.State = 1;
    this.city = address.City;
    this.pinCode = address.Pin;
    this.LandMark = address.Street
  }


  RequestSubmit(){
    const dialogRefConfirmationRequestdetailsPage = this._openDialog.open(
      ConfirmationPopUpComponent,
      {
        width: '350px',
        data : {
          ServiceName : this.ServiceRequestData.ServiceName,
          ProviderName : this.ServiceRequestData.ProviderName,
        }
      }
    );
    dialogRefConfirmationRequestdetailsPage
      .beforeClosed()
      .subscribe((data) => {
        if (data) {
        }
      });
  }


  closeConfirmationRequestDetails(){
    this._dialogCloseIconClicked.close();
  }

}
