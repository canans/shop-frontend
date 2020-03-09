import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import{environment} from 'src/environments/environment'
import { Category } from '../common/category';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
PATH="/category"

  constructor(private http:HttpClient) { }

  getCategory():Observable<Category[]>{
    console.log(environment.API_BASE_PATH+this.PATH)
    return this.http.get<Category[]>(environment.API_BASE_PATH+this.PATH);

  }
}
