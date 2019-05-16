import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductComponent } from '../app/list-product/list-product.component';
import { AddProductComponent } from 'src/app/add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { DeletProductComponent } from 'src/app/delet-product/delet-product.component';

import { FormsModule } from '@angular/forms';



const routes: Routes = [
  { path: '', component:ListProductComponent },
  { path: 'add-product', component: AddProductComponent },  
  { path: 'edit-product/:id', component: UpdateProductComponent },
  { path: 'delete-product/:id', component: DeletProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, FormsModule ]
})
export class AppRoutingModule { }
