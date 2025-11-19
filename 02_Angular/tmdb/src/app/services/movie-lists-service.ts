import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieListsTopRatedResponse } from '../models/movie-lists-top-rated.interface';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class MovieListsService {

  constructor(private http: HttpClient) {}

  getTopRated(): Observable<MovieListsTopRatedResponse> {
    return this.http.get<MovieListsTopRatedResponse>(`https://api.themoviedb.org/3/movie/top_rated`);
  }

    getPopular(): Observable<MovieListsTopRatedResponse> {
    return this.http.get<MovieListsTopRatedResponse>(`https://api.themoviedb.org/3/movie/popular`);
  }
  
}
