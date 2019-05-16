import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  confirmationString: string="New product added";
  isAdded:boolean=false;
  productObj: any={};

  constructor( private http:HttpClient, private router:Router, private _productService: ProductService ) { }

  ngOnInit() {
  }
  
  // addProduct(product){
  //   this.productObj={
  //      name: product.name,
  //      color: product.color
  //   }
  //   return this.http.post("http://localhost:5555/product", this.productObj)
  //     .subscribe(data=>{
  //        this.isAdded=true;
  //        console.log(data);
  //        this.router.navigate(['/']);
  //     })
  // }

  addProduct(product){
    return this._productService.postNewProduct(product)
    .subscribe(data=>{
       this.isAdded=true;
       this.router.navigate(['/']);
    })
  }
}
