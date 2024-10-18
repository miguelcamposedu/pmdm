import { Component } from '@angular/core';

export interface CountryPhone {
  nombre: string;
  flag: string;
  prefix: number[];
}

const COUNTRY_PREFIXES: CountryPhone[] = [
  { nombre: 'Spain', flag: 'es', prefix: [34] },
  {
    nombre: 'Dominican Republic',
    flag: 'dm',
    prefix: [809, 829, 849],
  },
];

@Component({
  selector: 'app-phone-prefix-list',
  templateUrl: './phone-prefix-list.component.html',
  styleUrl: './phone-prefix-list.component.css',
})
export class PhonePrefixListComponent {
  countryPhoneList = COUNTRY_PREFIXES;

  getFlagImage(flag: string): string {
    return `fi fi-${flag}`;
  }
}
