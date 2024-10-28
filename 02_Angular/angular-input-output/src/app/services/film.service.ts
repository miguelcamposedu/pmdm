import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilmListResponse } from '../models/films-response.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmService {
  constructor(private http: HttpClient) {}

  getFilms(): Observable<FilmListResponse> {
    return this.http.get<FilmListResponse>('https://swapi.dev/api/films/');
  }
}
