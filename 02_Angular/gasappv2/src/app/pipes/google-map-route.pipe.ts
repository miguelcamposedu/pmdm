import { Pipe, PipeTransform } from '@angular/core';
import { Gasolinera } from '../models/gas-item.dto';

@Pipe({
  name: 'googleMapRoute',
})
export class GoogleMapRoutePipe implements PipeTransform {
  transform(gasolinera: Gasolinera, ...args: unknown[]) {
    return `https://www.google.com/maps/dir/?api=1&destination=${this.sanitizeValue(
      gasolinera.latitude
    )},${this.sanitizeValue(gasolinera.longitude)}&travelmode=driving`;
  }

  sanitizeValue(value: string): string {
    return value.replace(',', '.');
  }
}
