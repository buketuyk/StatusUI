import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Status {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  private apiUrl = 'https://localhost:7092/api/statuses';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Status[]> {
    return this.http.get<Status[]>(this.apiUrl); 
  }

  getById(id: number): Observable<Status> {
    return this.http.get<Status>(`${this.apiUrl}/${id}`);
  }
}
