import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
import { Iproduct } from '../shared/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private url:any="http://localhost:8888/product";

  constructor(private http: HttpClient) { }

  getProductsData(){
    return this.http.get(this.url);
  }

  getProductById(id:number){
    return this.http.get(this.url+"/"+id);
  }

  postNewProduct(products: any){
    return this.http.post(this.url, products);
  }

  updateNewProduct(id:number, products: any){
    return this.http.put(this.url+"/"+id, products);
  }

  deleteProduct(id:number){
    return this.http.delete(this.url+"/"+id);
  }
}
