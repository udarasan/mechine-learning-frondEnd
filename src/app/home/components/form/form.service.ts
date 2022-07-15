import { Injectable } from '@angular/core';
import {Form} from "./form";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  addEmployee(form: Form) {
    return this.http.post<Form>(`http://mlapp-env.eba-hec863rm.us-west-2.elasticbeanstalk.com/login`, form);
  }
}
