import { Component } from '@angular/core';
import { PaymentServices } from '../payment.service';

@Component({
  selector: 'app-listpayment',
  templateUrl: './listpayment.component.html',
  styleUrls: ['./listpayment.component.css']
})
export class ListpaymentComponent {
  userPaymentDatas: any;
  userSearch:any;
  sortOut ="uname";
  constructor(public userdata: PaymentServices) {
    if (this.userdata.userPaymentDetails) {
      this.userPaymentDatas = this.userdata.userPaymentDetails;
    }
  }
  doDelete(ind: any) {
    this.userdata.userInd = ind;
    if (confirm("Are You Sure Want To Delete This?") == true) {
      this.userdata.userDelete();   
    }
  }
  doUpdate(){
    
  }
}
