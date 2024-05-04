import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountPercentage',
  standalone: true
})
export class DiscountPercentagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
