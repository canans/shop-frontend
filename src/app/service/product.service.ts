import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{environment} from 'src/environments/environment'
import { Products } from '../common/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  PATH="/products";
  constructor(private http:HttpClient) { }

  getAll():Observable<Products[]>{
    return this.http.get<Products[]>(environment.API_BASE_PATH+this.PATH);
  }
 // setProduct(path:string,product:Products):Observable<any>{
   // return this.http.post<any>(path,product)(environment.API_BASE_PATH+this.PATH);
  
}
