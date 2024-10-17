import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from './form/form.model';

@Injectable({
  providedIn: 'root',
})
export class ViewvehicleService {
  private apiUrl = 'http://localhost:8080/vehicles';
  constructor(private http: HttpClient) {}

  deleteVehicle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  searchVehicles(search: string): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.apiUrl}/search?search=${search}`);
  }

}
