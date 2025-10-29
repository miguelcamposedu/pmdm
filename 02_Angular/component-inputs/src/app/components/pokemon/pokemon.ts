import { Component, input } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  imports: [],
  templateUrl: './pokemon.html',
  styleUrl: './pokemon.css',
})
export class Pokemon {
  nombrePokemon = input('');
  tipoPokemon = input('');
}
