import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonList } from './components/pokemon-list/pokemon-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PokemonList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('component-inputs');
}
