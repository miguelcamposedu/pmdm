import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customEur',
})
export class CustomEurPipe implements PipeTransform {
  transform(value: string | number): string {
    return `${value}€`;
  }
}
