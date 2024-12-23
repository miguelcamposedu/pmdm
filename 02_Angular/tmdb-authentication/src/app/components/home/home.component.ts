import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/interfaces/movies-popular.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  userName = '';
  userPhoto = '';
  listMovies: Movie[] = [];

  constructor(
    private authService: AuthService,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.userName = localStorage.getItem('user_name') ?? '';
    this.userPhoto = localStorage.getItem('user_photo')
      ? `https://image.tmdb.org/t/p/original${localStorage.getItem(
          'user_photo'
        )}`
      : '';

    this.moviesService.getPopularMovies().subscribe((response) => {
      this.listMovies = response.results;
    });
  }

  createRequestToken() {
    this.authService.createRequestToken().subscribe((response) => {
      localStorage.setItem('token', response.request_token);

      // STEP 2 de la autenticación en TMDB (firma del token iniciando sesión en TMDB)
      window.location.href = `https://www.themoviedb.org/authenticate/${response.request_token}?redirect_to=http://localhost:4200/approved`;
    });
  }

  isLoggedIn() {
    return localStorage.getItem('logged_in') === 'true';
  }

  logout() {
    localStorage.clear();
    window.location.href = 'http://localhost:4200';
  }
}
