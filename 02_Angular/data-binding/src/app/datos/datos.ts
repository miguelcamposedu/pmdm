import { Component } from '@angular/core';

@Component({
  selector: 'app-datos',
  imports: [],
  templateUrl: './datos.html',
  styleUrl: './datos.css',
})
export class Datos {
  title = 'Página de Data binding';
  edad = 25;
  email = 'miguel.campos@triana.salesianos.edu';

  getImageURL(pokemonName: string) {
    // String literals
    return `https://img.pokemondb.net/sprites/scarlet-violet/normal/${pokemonName}.png`;
  }

  isMenorEdad() {
    return this.edad < 18 ? 'badge text-bg-danger' : 'badge text-bg-success';
  }

  abrirAlert() {
    alert('Has hecho click');
  }
}
