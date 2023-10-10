export class PaymentServices {
  username!: string;
  cardnumber!: number;
  amount!: number;
  userInd!: any;
  userPaymentDetails: any[] = [{ uname: "arjun", cardno: 455445546548, amt: 5464 }]
  addServices() {
    this.userPaymentDetails.push({ uname: this.username, cardno: this.cardnumber, amt: this.amount });
  }
  userDelete() {
    this.userPaymentDetails.splice(this.userInd, 1);
  }
}