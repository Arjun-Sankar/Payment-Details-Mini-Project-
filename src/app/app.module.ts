import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddpaymentComponent } from './addpayment/addpayment.component';
import { ListpaymentComponent } from './listpayment/listpayment.component';
import { FormsModule } from '@angular/forms';
import { PaymentServices } from './payment.service';

@NgModule({
  declarations: [
    AppComponent,
    AddpaymentComponent,
    ListpaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PaymentServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
