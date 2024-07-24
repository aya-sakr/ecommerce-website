import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'USD'
})
export class USDPipe implements PipeTransform {

  transform(value: number):number {
    return value *50  ;
  }

}
