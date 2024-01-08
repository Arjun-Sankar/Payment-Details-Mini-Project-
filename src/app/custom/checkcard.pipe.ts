import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkcard'
})
export class CheckcardPipe implements PipeTransform {

  transform(value: any, customize: string, cardNumber?: any): any {
    if (customize == "hideNum") {
      var cardnum = value.toString();
      return cardnum = "**** **** **** " + cardnum.slice(12);
    }
    else if (customize == "loadImg") {
      let checkNumber;
      if (cardNumber) {
        checkNumber = cardNumber.toString().substr(0, 2)
        if (checkNumber > 23) {
          return true;
        }
        else {
          return false;
        }
      }
        }
        else if (customize == "visaImg") {
          let checkNumber;
          if (cardNumber) {
            checkNumber = cardNumber.toString().substr(0, 2)
            if (checkNumber > 89) {
              return true;
            }
            else {
              return false;
            }
          }
            }

  }

}
