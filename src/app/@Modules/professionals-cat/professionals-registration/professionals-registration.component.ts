import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-professionals-registration',
  templateUrl: './professionals-registration.component.html',
  styleUrls: ['./professionals-registration.component.scss']
})
export class ProfessionalsRegistrationComponent implements OnInit {

  title = 'newMat';
     
  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;

  
  constructor(private _formBuilder: FormBuilder,
    public _dialogCloseIconClicked: MatDialogRef<ProfessionalsRegistrationComponent>) {}
  
  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      amount: ['', Validators.required],
      stock: ['', Validators.required]
    });
  }
  
  submit(){
      console.log(this.firstFormGroup.value);
      console.log(this.secondFormGroup.value);
  }
  closeRegistration(){
    this._dialogCloseIconClicked.close();
  }
}
