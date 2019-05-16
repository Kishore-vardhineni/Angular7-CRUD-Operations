import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  product: any=[];

  constructor( private http:HttpClient, private _productService: ProductService) { }

  ngOnInit() {
    // this.fetchData();
     this.getProducts();
  }

  // fetchData(){
  //   return this.http.get("http://localhost:5555/product")
  //   .subscribe(data=>{
  //      this.product=data;
  //   })
  // }

  getProducts(){
    return this._productService.getProductsData()
     .subscribe(data=>{
         this.product=data;
     })
  }
}
