import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProfessionalsRegistrationComponent } from '../professionals-registration/professionals-registration.component';

@Component({
  selector: 'app-professionals-highlights',
  templateUrl: './professionals-highlights.component.html',
  styleUrls: ['./professionals-highlights.component.scss']
})
export class ProfessionalsHighlightsComponent implements OnInit {

  constructor(public _openDialog: MatDialog) { }

  ngOnInit(): void {
  }

  OpenProfessionalRegistration(){
    const dialogRefProfessionalRegistrationPage = this._openDialog.open(
      ProfessionalsRegistrationComponent,
      {
        panelClass: "full-screen-dialog",
      }
    );
    dialogRefProfessionalRegistrationPage
      .beforeClosed()
      .subscribe((data) => {
        if (data) {
        }
      });
  }

}
