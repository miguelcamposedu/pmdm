import { Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list-component/pokemon-list-component';
import { PageNotFoundComponent } from './components/page-not-found-component/page-not-found-component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokemons',
    pathMatch: 'full',
  },
  {
    path: 'pokemons',
    component: PokemonListComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
