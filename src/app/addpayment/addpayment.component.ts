import { Component, ElementRef, ViewChild } from '@angular/core';
import { PaymentServices } from '../payment.service';
import { EMPTY, empty } from 'rxjs';

@Component({
  selector: 'app-addpayment',
  templateUrl: './addpayment.component.html',
  styleUrls: ['./addpayment.component.css']
})
export class AddpaymentComponent {
  paymentUsername!: string;
  paymentCardnumber!: number;
  paymentAmount!: number;
  validButton: boolean = false;
  @ViewChild('name') name!: ElementRef;
  @ViewChild('num') num!: ElementRef;
  @ViewChild('amt') amt!: ElementRef;


  constructor(public userdata: PaymentServices) {
    console.log("hii")
  }
  doValid(eve: any) {
    if (this.paymentUsername && this.paymentCardnumber && this.paymentAmount) {
      if (eve.target.id == 'activename') {
        this.validButton = true;
      }
      else if (eve.target.id == 'activenum') {
        this.validButton = true;
      }
      else if (eve.target.id == 'activeamt') {
        this.validButton = true;
      }
    } else {
      this.validButton = false;
    }
  }
  addDetails() {
    this.userdata.username = this.paymentUsername;
    this.userdata.cardnumber = this.paymentCardnumber;
    this.userdata.amount = this.paymentAmount;
    this.userdata.addServices();
    this.paymentUsername = "";
    this.paymentCardnumber = 0;
    this.paymentAmount = 0;
  }
}
