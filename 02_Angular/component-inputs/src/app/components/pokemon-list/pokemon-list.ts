import { Component } from '@angular/core';
import { Pokemon } from '../pokemon/pokemon';

@Component({
  selector: 'app-pokemon-list',
  imports: [Pokemon],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css',
})
export class PokemonList {
  pokemons = [
    { name: 'Bulbasaur', type: 'Grass/Poison' },
    { name: 'Charmander', type: 'Fire' },
    { name: 'Squirtle', type: 'Water' },
    { name: 'Pikachu', type: 'Electric' },
  ];
}
