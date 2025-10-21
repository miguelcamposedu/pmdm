import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Datos } from './datos/datos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Datos],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('data-binding');
}
