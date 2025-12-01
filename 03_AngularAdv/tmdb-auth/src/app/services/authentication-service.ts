import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateRequestTokenResponse } from '../models/interfaces/create-request-token-response.interface';
import { CreateSession } from '../pages/create-session/create-session';
import { CreateSessionDto } from '../models/dto/create-session.dto';
import { CreateSessionResponse } from '../models/interfaces/create-session-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  createRequestToken(): Observable<CreateRequestTokenResponse> {
    return this.http.get<CreateRequestTokenResponse>('https://api.themoviedb.org/3/authentication/token/new');
  }

  createSession(dto: CreateSessionDto): Observable<CreateSessionResponse> {
    return this.http.post<CreateSessionResponse>('https://api.themoviedb.org/3/authentication/session/new', dto);
  }

}
