import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) {}

  searchMovies(term: string): Observable<any[]> {
    return this.http.get<any[]>(`https://www.omdbapi.com/?s=${term}&apikey=7aa8934b`);
  }
}