import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_KEY = 'TODO: Add your API key here from your TMDB account';
const ACCESS_TOKEN = 'TODO: Add your access token here from your TMDB account';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getPopular() {
    return this.http.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    );
  }

  getPopularWithHeader() {
    return this.http.get(`https://api.themoviedb.org/3/movie/popular`, {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    });
  }
}
