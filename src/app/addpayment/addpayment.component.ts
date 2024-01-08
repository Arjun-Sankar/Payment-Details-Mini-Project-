import { Component, ElementRef, ViewChild} from '@angular/core';
import { PaymentServices } from '../payment.service';
import { EMPTY, empty } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addpayment',
  templateUrl: './addpayment.component.html',
  styleUrls: ['./addpayment.component.css']
})
export class AddpaymentComponent {
  userFormData:any;
  paymentName: any;
  paymentCard:any;
  paymentAmount:any;
  arrCard: any[] = [];
  cardnumb: any[] = [];
  validButton: boolean = false;
  checkMaster: boolean = false;
  // @ViewChild('uname') uname!: ElementRef;
  // @ViewChild('cardno') cardno!: ElementRef;
  // @ViewChild('amt') amt!: ElementRef;


  constructor(public userdata: PaymentServices) {
   
  }
  getData(form: NgForm){
    this.userFormData=form.value;
  // console.log(this.userFormData)
  }
  doValid() {
    if (this.paymentName && this.paymentCard && this.paymentAmount) {
      this.validButton = true;
    } else {
      this.validButton = false;
    }
   
  }

  addDetails() {
    this.arrCard = this.paymentCard.toString().split("");
    this.cardnumb = this.arrCard.filter((val, ind, arr) => {
      return val>=0;
    })
    this.userdata.username = this.paymentName;
    this.userdata.cardnumber = this.cardnumb.join("");
    this.userdata.amount = this.paymentAmount;
    this.userdata.addServices();
  }
}
