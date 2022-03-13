import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceProvidersComponent } from '../../service-request/service-providers/service-providers.component';

@Component({
  selector: 'app-appliances-cat',
  templateUrl: './appliances-cat.component.html',
  styleUrls: ['./appliances-cat.component.scss']
})
export class AppliancesCatComponent implements OnInit {

  latitudeUsedInEditModeOnly: any;
  longitudeUsedInEditModeOnly: any;

  applianceServicesList : any = [
    {
      ServiceName : "AC Installation / Uninstallation Uninstallation",
      ServiceID: 1,
      CategoryID : 1
    },
    {
      ServiceName : "AC Installation / Uninstallation Uninstallation",
      ServiceID: 2,
      CategoryID : 1
    },
    {
      ServiceName : "AC Ins",
      ServiceID: 3,
      CategoryID : 1
    },
    {
      ServiceName : "AC Installation",
      ServiceID: 4,
      CategoryID : 1
    },
    {
      ServiceName : "AC Repair",
      ServiceID: 5,
      CategoryID : 1
    },
    {
      ServiceName : "Washing Mechine",
      ServiceID: 6,
      CategoryID : 1
    },
    {
      ServiceName : "Refrezirator",
      ServiceID: 7,
      CategoryID : 1
    },
    {
      ServiceName : "Coolers",
      ServiceID: 8,
      CategoryID : 1
    },
    {
      ServiceName : "AC Installation / Uninstallation Uninstallation",
      ServiceID: 9,
      CategoryID : 1
    },
    {
      ServiceName : "AC Installation / Uninstallation Uninstallation",
      ServiceID: 10,
      CategoryID : 1
    },
    {
      ServiceName : "AC Installation / Uninstallation Uninstallation",
      ServiceID: 11,
      CategoryID : 1
    },
    {
      ServiceName : "AC Ins",
      ServiceID: 12,
      CategoryID : 1,
    },
    {
      ServiceName : "AC Installation",
      ServiceID: 13,
      CategoryID : 1
    },
    {
      ServiceName : "AC Repair",
      ServiceID: 14,
      CategoryID : 1
    },
    {
      ServiceName : "Washing Mechine",
      ServiceID: 15,
      CategoryID : 1
    },
    {
      ServiceName : "Refrezirator",
      ServiceID: 16,
      CategoryID : 1
    },
    {
      ServiceName : "Coolers",
      ServiceID: 17,
      CategoryID : 1
    },
    {
      ServiceName : "AC Installation / Uninstallation Uninstallation",
      ServiceID: 18,
      CategoryID : 1
    },
    {
      ServiceName : "AC Installation / Uninstallation Uninstallation",
      ServiceID: 19,
      CategoryID : 1
    },
    {
      ServiceName : "AC Installation / Uninstallation Uninstallation",
      ServiceID: 20,
      CategoryID : 1
    },
    {
      ServiceName : "AC Ins",
      ServiceID: 21,
      CategoryID : 1
    },
    {
      ServiceName : "AC Installation",
      ServiceID: 22,
      CategoryID : 1
    },
    {
      ServiceName : "AC Repair",
      ServiceID: 23,
      CategoryID : 1
    },
    {
      ServiceName : "Washing Mechine",
      ServiceID: 24,
      CategoryID : 1
    },
    {
      ServiceName : "Refrezirator",
      ServiceID: 25,
      CategoryID : 1
    },
    {
      ServiceName : "Coolers",
      ServiceID: 26,
      CategoryID : 1
    },
    {
      ServiceName : "AC Installation / Uninstallation Uninstallation",
      ServiceID: 27,
      CategoryID : 1
    },
    {
      ServiceName : "AC Installation / Uninstallation Uninstallation",
      ServiceID: 28,
      CategoryID : 1
    },
    {
      ServiceName : "AC Installation / Uninstallation Uninstallation",
      ServiceID: 1,
      CategoryID : 1
    },
    {
      ServiceName : "AC Ins",
      ServiceID: 1,
      CategoryID : 1
    },
    {
      ServiceName : "AC Installation",
      ServiceID: 1,
      CategoryID : 1
    },
    {
      ServiceName : "AC Repair",
      ServiceID: 1,
      CategoryID : 1
    },
    {
      ServiceName : "Washing Mechine",
      ServiceID: 1,
      CategoryID : 1
    },
    {
      ServiceName : "Refrezirator",
      ServiceID: 1,
      CategoryID : 1
    },
    {
      ServiceName : "Coolers",
      ServiceID: 1,
      CategoryID : 1
    },
    {
      ServiceName : "AC Installation / Uninstallation Uninstallation",
      ServiceID: 1,
      CategoryID : 1
    },
    {
      ServiceName : "AC Installation / Uninstallation Uninstallation",
      ServiceID: 1,
      CategoryID : 1
    },
    {
      ServiceName : "AC Installation / Uninstallation Uninstallation",
      ServiceID: 1,
      CategoryID : 1
    },
    {
      ServiceName : "AC Ins",
      ServiceID: 1,
      CategoryID : 1
    },
    {
      ServiceName : "AC Installation",
      ServiceID: 1,
      CategoryID : 1
    },
    {
      ServiceName : "AC Repair",
      ServiceID: 1,
      CategoryID : 1
    },
    {
      ServiceName : "Washing Mechine",
      ServiceID: 1,
      CategoryID : 1
    },
    {
      ServiceName : "Refrezirator",
      ServiceID: 1,
      CategoryID : 1
    },
    {
      ServiceName : "Coolers",
      ServiceID: 1,
      CategoryID : 1
    },
    {
      ServiceName : "AC Installation / Uninstallation Uninstallation",
      ServiceID: 1,
      CategoryID : 1
    },
    
  ]

  constructor(public _openDialog: MatDialog) { }

  ngOnInit(): void {
  }


  ServiceClick(ServiceID : number, CategoryID : number){
    const dialogRefserviceProvidersPage = this._openDialog.open(
      ServiceProvidersComponent,
      {
        panelClass: "full-screen-dialog",
        data : {
          ServiceID,
          CategoryID
        }
      }
    );
    dialogRefserviceProvidersPage
      .beforeClosed()
      .subscribe((data) => {
        if (data) {
        }
      });
  }

}
