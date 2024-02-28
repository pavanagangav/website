import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../models/food';



@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private baseurl="https://sheetdb.io/api/v1/tqqoiv9acuaep";

  constructor(private http:HttpClient) { }
  Onsubmit():Observable<Food[]>{
    return this.http.get<Food[]>(this.baseurl)
  }
}
