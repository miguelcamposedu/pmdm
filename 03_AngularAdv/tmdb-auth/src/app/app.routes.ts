import { Routes } from '@angular/router';
import { MovieDiscoverPage } from './pages/movie-discover-page/movie-discover-page';
import { CreateSession } from './pages/create-session/create-session';

export const routes: Routes = [

    {path: '', pathMatch: 'full', component: MovieDiscoverPage},
    {path: 'create-session',component: CreateSession}
];
