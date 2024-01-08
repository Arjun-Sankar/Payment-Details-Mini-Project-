import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appUsercard]'
})
export class UsercardDirective {

  constructor(public elref: ElementRef) {
  }
  @HostListener("keyup") onKeyUp(){
    var cardnum= this.elref.nativeElement.value.toString().split("")
    if(cardnum.length==4){
      cardnum.splice(4,0,"-")
    }
    if(cardnum.length==9){
      cardnum.splice(9,0,"-")
    }  
    if(cardnum.length==14){
      cardnum.splice(14,0,"-")
    }
    this.elref.nativeElement.value=cardnum.join("")
  }

}
