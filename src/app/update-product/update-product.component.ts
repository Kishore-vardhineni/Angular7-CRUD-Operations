import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../shared/product.service';
import { last } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id: number;
  products:any=[];
  data:object={};
  productObj:any={};
  confirmationMessage:string="Product Updated Successfully";
  isAdded:boolean=false;
  exist:boolean=false;

  constructor(private router:Router, private route:ActivatedRoute, private _productService: ProductService, private http:HttpClient) { }

  ngOnInit() {
  //   debugger
  //   this.route.params.subscribe(params=>{
  //     this.id=+params['id'];
  //   });
  //  return this.http.get("http://localhost:5555/product").subscribe(data=>{
  //       this.products=data;
  //       for(var i=0; i<this.products.length;i++){
  //         if(this.products[i].id===this.id){
  //           this.exist=true;
  //             this.data=this.products[i];
  //         } else{
  //           this.exist=false;
  //         }
  //       }
  //   });
  this.getProductId();
  }

  getProductId(){
     this.route.params.subscribe(params=>{
        this.id=+params['id'];
        return this._productService.getProductById(this.id)
        .subscribe(getdata=>{
           this.data=getdata;
        })
     })
  }
  // updateProduct(product){
  //    this.productObj={
  //       name: product.name,
  //       color: product.color
  //    }
  //    return this.http.put("http://localhost:5555/product"+"/"+this.id,this.productObj)
  //    .subscribe(data=>{
  //         console.log(data);
  //         this.isAdded=true;
  //         this.router.navigate(['/'])
  //    })
  // }
  
  updateProduct(product){
     return this._productService.updateNewProduct(this.id,product)
     .subscribe(data=>{
        console.log(data);
        this.isAdded=true;
        this.router.navigate(['/']);
     })
  }
}