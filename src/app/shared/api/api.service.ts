import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Story } from '../types/story';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl: string;

  constructor(private readonly http: HttpClient) {
    this.baseUrl = `${environment.api}`;
  }

  getStories(): Observable<Story[]> {
    return this.http.get<any>(`${this.baseUrl}/v1/search?tags=front_page`).pipe(map(res => res.hits));
  }

  getStoryById(id: string): Observable<Story> {
    return this.http.get<any>(`${this.baseUrl}/v1/items/${id}`);
  }
}
