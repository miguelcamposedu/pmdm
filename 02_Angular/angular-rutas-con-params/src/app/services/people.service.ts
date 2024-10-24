import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeopleListResponse } from '../models/people-list-response.interface';
import { PeopleDetailResponse } from '../models/people-detail-response.interface';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private http: HttpClient) {}

  getPeople(): Observable<PeopleListResponse> {
    return this.http.get<PeopleListResponse>('https://swapi.dev/api/people/');
  }

  getOnePeople(id: number): Observable<PeopleDetailResponse> {
    return this.http.get<PeopleDetailResponse>(
      `https://swapi.dev/api/people/${id}/`
    );
  }
}
