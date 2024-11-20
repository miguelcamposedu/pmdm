import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateRequestTokenResponse } from '../models/interfaces/create-request-token.interface';
import { Observable } from 'rxjs';

// Screamming snake case
const API_KEY = '433d2c486572afb242c6fe7c1ddc6771';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // STEP 1
  createRequestToken(): Observable<CreateRequestTokenResponse> {
    return this.http.get<CreateRequestTokenResponse>(
      `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`
    );
  }
}
