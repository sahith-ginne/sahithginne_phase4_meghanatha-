import { ConformationComponent } from './conformation/conformation.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminComponent } from './admin/admin.component';
import { BiscuitsComponent } from './biscuits/biscuits.component';
import { CartComponent } from './cart/cart.component';
import { FruitsComponent } from './fruits/fruits.component';
import { NutsComponent } from './nuts/nuts.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductsComponent } from './products/products.component';
import { SnacksComponent } from './snacks/snacks.component';
import { TransactionComponent } from './transaction/transaction.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import {  UserComponent } from './user/user.component';

const routes: Routes = [

  
  {
    path: 'admin' ,
    component: AdminComponent
  },
  
  {
    path: 'user',
    component: UserComponent
  },

  {
    path:'user-register',
    component:UserRegisterComponent
  },

  {
    path:'admin-register',
    component:AdminRegisterComponent
  },

  {
    path:'products',
    component:ProductsComponent
  },

  {
    path:'biscuits',
    component:BiscuitsComponent
  },

  {
    path:'snacks',
    component:SnacksComponent
  },

  {
    path:'nuts',
    component:NutsComponent
  },

  {
    path:'fruits',
    component:FruitsComponent
  },

  {
    path:'payment',
    component:PaymentComponent
  },

  {
    path:'cart',
    component:CartComponent
  },

  {
    path:'transcation',
    component:TransactionComponent
  },

  {
    path:'conformation',
    component:ConformationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


