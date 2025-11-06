import { CurrencyPipe, DATE_PIPE_DEFAULT_OPTIONS, DatePipe } from '@angular/common';
import { Component, LOCALE_ID } from '@angular/core';

// *** Importa el locale en ESPAÑOL ****
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);
// **************************

@Component({
  selector: 'app-euromillon-page',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './euromillon-page.html',
  styleUrl: './euromillon-page.css',
  providers: [
    { provide: LOCALE_ID, useValue: 'es-ES' },
    {
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useValue: { dateFormat: 'EEEE, MMMM d, y, h:mm:ss a zzzz', locale: 'es-ES' },
    },
  ],
})
export class EuromillonPage {
  premio1 = 1000000000;
  fecha = new Date();
}
