import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddpaymentComponent } from './addpayment/addpayment.component';
import { ListpaymentComponent } from './listpayment/listpayment.component';
import { FormsModule } from '@angular/forms';
import { PaymentServices } from './payment.service';
import { FilteringPipe } from './filtering.pipe';
import { StartsupperPipe } from './startsupper.pipe';
import { CheckcardPipe } from './custom/checkcard.pipe';
import { UsercardDirective } from './custom/usercard.directive';

@NgModule({
  declarations: [
    AppComponent,
    AddpaymentComponent,
    ListpaymentComponent,
    FilteringPipe,
    StartsupperPipe,
    CheckcardPipe,
    UsercardDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PaymentServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
