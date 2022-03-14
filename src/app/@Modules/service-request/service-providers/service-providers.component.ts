import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationRequestDetailsComponent } from '../confirmation-request-details/confirmation-request-details.component';

@Component({
  selector: 'app-service-providers',
  templateUrl: './service-providers.component.html',
  styleUrls: ['./service-providers.component.scss']
})
export class ServiceProvidersComponent implements OnInit {

  Providers : any = [
    {
      image : 'assets/images/blank-profile-picture.png',
      ProviderName: 'Aron Finch',
      ProviderDesg : 'Ac Service / Repair',
      VerifiedProvider: false,
      Description : 'Provide you high quality work at any time',
      Rating : '4.5',
      ProviderId : 1
    },
    {
      image : 'assets/images/blank-profile-picture.png',
      ProviderName: 'Maxwell G',
      ProviderDesg : 'Ac Service / Repair',
      VerifiedProvider: true,
      Description : 'Provide you high quality work at any time',
      Rating : '4.5',
      ProviderId : 2
    },
    {
      image : 'assets/images/blank-profile-picture.png',
      ProviderName: 'Balu Mechanic Works Balu Mechanic Works',
      ProviderDesg : 'Ac Installation',
      VerifiedProvider: true,
      Description : 'Satisfaction is Important.',
      Rating : '4.5',
      ProviderId : 3
    },
    {
      image : 'assets/images/blank-profile-picture.png',
      ProviderName: 'Pant',
      ProviderDesg : 'Washing Mechince',
      VerifiedProvider: false,
      Description : 'Provide you high quality work at any time Provide you high quality work at any time Provide you high quality work at any time Provide you high quality work at any time',
      Rating : '4.5',
      ProviderId : 4
    },
    {
      image : 'assets/images/blank-profile-picture.png',
      ProviderName: 'Pavan Somineni',
      ProviderDesg : 'Ac Service / Repair',
      VerifiedProvider: true,
      Description : 'Good at work',
      Rating : '4.5',
      ProviderId : 5
    },
    {
      image : 'assets/images/blank-profile-picture.png',
      ProviderName: 'Pavan Somineni',
      ProviderDesg : 'Ac Service / Repair',
      VerifiedProvider: true,
      Description : 'Good at work',
      Rating : '4.5',
      ProviderId : 5
    },
    {
      image : 'assets/images/blank-profile-picture.png',
      ProviderName: 'Pavan Somineni',
      ProviderDesg : 'Ac Service / Repair',
      VerifiedProvider: true,
      Description : 'Good at work',
      Rating : '4.5',
      ProviderId : 5
    },
    {
      image : 'assets/images/blank-profile-picture.png',
      ProviderName: 'Pavan Somineni',
      ProviderDesg : 'Ac Service / Repair',
      VerifiedProvider: true,
      Description : 'Good at work',
      Rating : '4.5',
      ProviderId : 5
    },
    {
      image : 'assets/images/blank-profile-picture.png',
      ProviderName: 'Pavan Somineni',
      ProviderDesg : 'Ac Service / Repair',
      VerifiedProvider: true,
      Description : 'Good at work',
      Rating : '4.5',
      ProviderId : 5
    },
    {
      image : 'assets/images/blank-profile-picture.png',
      ProviderName: 'Pavan Somineni',
      ProviderDesg : 'Ac Service / Repair',
      VerifiedProvider: true,
      Description : 'Good at work',
      Rating : '4.5',
      ProviderId : 5
    },
    {
      image : 'assets/images/blank-profile-picture.png',
      ProviderName: 'Pavan Somineni',
      ProviderDesg : 'Ac Service / Repair',
      VerifiedProvider: true,
      Description : 'Good at work',
      Rating : '4.5',
      ProviderId : 5
    },
  ]

  ServiceProviderData:any;


  constructor(public _dialogCloseIconClicked: MatDialogRef<ServiceProvidersComponent>,
    public _openDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      ServiceID: number,
      CategoryID: number,
      ServiceName : string,
    }
    ) { }

  ngOnInit(): void {
    this.ServiceProviderData = JSON.parse(JSON.stringify(this.data));
  }


  closeServiceProvides(){
    this.data.ServiceID;
    this.data.CategoryID;
    this._dialogCloseIconClicked.close();
  }


  RequestServiceClick(ProviderId : number, ProviderName: string){
    const dialogRefConfirmationRequestdetailsPage = this._openDialog.open(
      ConfirmationRequestDetailsComponent,
      {
        panelClass: "full-screen-dialog",
        data : {
          ServiceId : this.ServiceProviderData.ServiceID,
          CategoryId : this.ServiceProviderData.CategoryID,
          ServiceName : this.ServiceProviderData.ServiceName,
          ProviderName,
          ProviderId
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
}
