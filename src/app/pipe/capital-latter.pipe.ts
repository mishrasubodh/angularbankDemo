import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'capitalLatter'
})
export class CapitalLatterPipe implements PipeTransform {

  transform(value: string): string {
    let first = value.toUpperCase();
    return first;
  }

}
