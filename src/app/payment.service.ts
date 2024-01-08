export class PaymentServices {
  userDataObj:any
  username!: string;
  cardnumber!: any;
  amount!: number;
  userInd!: any;
  userPaymentDetails: any[] = [{ uname: "arjun", cardno: 2345897465314568, amt: 5464 },{ uname: "arun raj", cardno: 2345632487941658, amt: 64877 },{ uname: "kevin duke", cardno: 8964978523641524n, amt: 10000 }]
  addServices() {
    this.userPaymentDetails.push({ uname: this.username, cardno: this.cardnumber, amt: this.amount });
  }
  userDelete() {
    this.userPaymentDetails.splice(this.userInd, 1);
  }
}