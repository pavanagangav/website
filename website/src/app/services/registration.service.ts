import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registration } from '../models/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseurl="https://sheetdb.io/api/v1/tqqoiv9acuaep"
  constructor(private http:HttpClient) { }
  submit(user:Registration):Observable<any>{
    return this.http.post(this.baseurl,user)
  }
}
