import { Component, OnInit } from '@angular/core';
import { MovieListsService } from '../../services/movie-lists-service';
import { Movie } from '../../models/movie-lists-item.interface';

@Component({
  selector: 'app-top-movie-list',
  imports: [],
  templateUrl: './top-movie-list.html',
  styleUrl: './top-movie-list.css',
})
export class TopMovieList implements OnInit {
  movieList: Movie[] = [];

  constructor(private movieListsService: MovieListsService) {}

  ngOnInit(): void {
    this.loadTopRatedMovies();  
  }

  loadTopRatedMovies() {
this.movieListsService.getTopRated().subscribe(resp => {
      this.movieList = resp.results;
    });
  }

    loadPopularMovies() {
this.movieListsService.getPopular().subscribe(resp => {
      this.movieList = resp.results;
    });
  }

}
