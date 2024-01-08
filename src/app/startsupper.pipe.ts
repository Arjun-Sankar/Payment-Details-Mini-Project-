import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'startsupper'
})
export class StartsupperPipe implements PipeTransform {

  transform(value: any): any {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
