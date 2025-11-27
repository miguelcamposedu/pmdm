import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateRequestTokenResponse } from '../models/create-request-token-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  createRequestToken(): Observable<CreateRequestTokenResponse> {
    return this.http.get<CreateRequestTokenResponse>('https://api.themoviedb.org/3/authentication/token/new');
  }

    createSession(): Observable<CreateRequestTokenResponse> {
    //return this.http.post<CreateRequestTokenResponse>('https://api.themoviedb.org/3/authentication/token/new');
  }

}
