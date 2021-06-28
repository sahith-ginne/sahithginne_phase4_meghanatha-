import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { ProductsComponent } from './products/products.component';
import { SnacksComponent } from './snacks/snacks.component';
import { BiscuitsComponent } from './biscuits/biscuits.component';
import { NutsComponent } from './nuts/nuts.component';
import { FruitsComponent } from './fruits/fruits.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { ConformationComponent } from './conformation/conformation.component';
import { TransactionComponent } from './transaction/transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    UserRegisterComponent,
    AdminRegisterComponent,
    ProductsComponent,
    SnacksComponent,
    BiscuitsComponent,
    NutsComponent,
    FruitsComponent,
    CartComponent,
    PaymentComponent,
    ConformationComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


