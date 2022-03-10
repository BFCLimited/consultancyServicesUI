import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

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
    },
    {
      image : 'assets/images/blank-profile-picture.png',
      ProviderName: 'Maxwell G',
      ProviderDesg : 'Ac Service / Repair',
      VerifiedProvider: true,
      Description : 'Provide you high quality work at any time',
      Rating : '4.5',
    },
    {
      image : 'assets/images/blank-profile-picture.png',
      ProviderName: 'Balu Mechanic Works Balu Mechanic Works',
      ProviderDesg : 'Ac Installation',
      VerifiedProvider: true,
      Description : 'Satisfaction is Important.',
      Rating : '4.5',
    },
    {
      image : 'assets/images/blank-profile-picture.png',
      ProviderName: 'Pant',
      ProviderDesg : 'Washing Mechince',
      VerifiedProvider: false,
      Description : 'Provide you high quality work at any time Provide you high quality work at any time Provide you high quality work at any time Provide you high quality work at any time',
      Rating : '4.5',
    },
    {
      image : 'assets/images/blank-profile-picture.png',
      ProviderName: 'Pavan Somineni',
      ProviderDesg : 'Ac Service / Repair',
      VerifiedProvider: true,
      Description : 'Good at work',
      Rating : '4.5',
    },
  ]



  constructor(public _dialogCloseIconClicked: MatDialogRef<ServiceProvidersComponent>) { }

  ngOnInit(): void {
  }


  closeServiceProvides(){
    this._dialogCloseIconClicked.close();
  }
}
