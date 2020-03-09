import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../common/users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
PATH="/user";
  constructor(private http:HttpClient) { }
  getAll(username:string,password:string):Observable<Users[]>{

    return this.http.get<Users[]>(environment.API_BASE_PATH+this.PATH);
  }
}
