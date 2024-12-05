import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviePopularResponse } from '../models/interfaces/movies-popular.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<MoviePopularResponse> {
    return this.http.get<MoviePopularResponse>(
      'https://api.themoviedb.org/3/movie/popular'
    );
  }
}
