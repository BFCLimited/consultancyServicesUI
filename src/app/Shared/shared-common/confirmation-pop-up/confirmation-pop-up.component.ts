import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-pop-up',
  templateUrl: './confirmation-pop-up.component.html',
  styleUrls: ['./confirmation-pop-up.component.scss']
})
export class ConfirmationPopUpComponent implements OnInit {
ServiceName : string = "";
ProfessionalName : string ="";
ClientMobile: string ="+91 ***** *****";

  constructor(public dialogRef: MatDialogRef<ConfirmationPopUpComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      ServiceName:string,
      ProviderName: string
    }
    ) { 
      this.ServiceName = data.ServiceName;
      this.ProfessionalName = data.ProviderName;
    }

  ngOnInit(): void {
  }


  onNoClick(){
    this.dialogRef.close();
  }

}
