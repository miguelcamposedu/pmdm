import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleListResponse } from '../models/vehicles-list.interface';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  constructor(private http: HttpClient) {}

  getVehicleList(): Observable<VehicleListResponse> {
    return this.http.get<VehicleListResponse>('https://swapi.dev/api/vehicles');
  }
}
