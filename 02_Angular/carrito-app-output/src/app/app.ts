import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Shop } from './components/shop/shop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Shop],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('carrito-app-output');
}
