import { Component, OnInit } from '@angular/core';
import {FormBuilder, NgForm, Validators} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {FormService} from "./form.service";
import {Form} from "./form"
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public form: Form[] | undefined;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  prediction:any;

  constructor(private _formBuilder: FormBuilder,private formservice:FormService) { }

  ngOnInit(): void {
  }

  sendData(addForm: NgForm) :void{
    console.log(addForm.value)
    this.formservice.addEmployee(addForm.value).subscribe(
      (response: Form) => {
        console.log(response);
        addForm.reset();
        this.prediction=response
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
