import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DiscoverMovieResponse } from '../models/interfaces/discover-movie-response.interface';

const API_BASE_URL = 'https://api.themoviedb.org/3/discover';

@Injectable({
  providedIn: 'root',
})
export class DiscoverService {
  constructor(private http: HttpClient) {}

  public getMovieList(selectedGenre: string): Observable<DiscoverMovieResponse> {
    return this.http.get<DiscoverMovieResponse>(`${API_BASE_URL}/movie?with_genres=${selectedGenre}`);
  }
}
