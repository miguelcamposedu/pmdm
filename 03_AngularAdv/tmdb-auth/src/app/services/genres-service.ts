import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenresMovieListResponse } from '../models/interfaces/genres-movie-list-response.interface';
import { Observable } from 'rxjs';
import { GenresTvListResponse } from '../models/interfaces/genres-tv-list-response.interface';

const API_BASE_URL = 'https://api.themoviedb.org/3/genre';

@Injectable({
  providedIn: 'root',
})
export class GenresService {
  constructor(private http: HttpClient) {}

  public getMovieList(): Observable<GenresMovieListResponse> {
    return this.http.get<GenresMovieListResponse>(`${API_BASE_URL}/movie/list`);
  }

  public getTvList(): Observable<GenresTvListResponse> {
    return this.http.get<GenresTvListResponse>(`${API_BASE_URL}/tv/list`);
  }
}
