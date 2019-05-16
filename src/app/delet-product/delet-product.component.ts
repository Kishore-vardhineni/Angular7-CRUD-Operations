import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router} from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-delet-product',
  templateUrl: './delet-product.component.html',
  styleUrls: ['./delet-product.component.css']
})
export class DeletProductComponent implements OnInit {
  id: number;
  products: any=[];
  exist: boolean=false;
  data:object={};
  
  constructor(private http:HttpClient, private _productService: ProductService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    // this.route.params.subscribe(params=>{
    //   this.id=+params['id'];
    // });
    // if(confirm('are you sure?')){
    //   return this.http.delete("http://localhost:5555/product"+"/"+this.id)
    //   .subscribe(data=>{
    //   console.log(data); 
    //   this.router.navigate(['/']);
    //  }) 
    // }
    this.deleteProduct();
  }

  deleteProduct(){
    this.route.params.subscribe(params=>{
        this.id=+params['id'];
    });
    if(confirm('are you sure?')){
      return this._productService.deleteProduct(this.id)
      .subscribe(data=>{
      console.log(data); 
      this.router.navigate(['/']);
     }) 
    }
  }
}
