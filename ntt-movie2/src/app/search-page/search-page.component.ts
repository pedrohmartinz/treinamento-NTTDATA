import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  movies: any[] = [];
  searchTerm: string = '';

  constructor(private http: HttpClient) { }

  searchMovies(): void {
    this.http.get<any>(`http://www.omdbapi.com/?s=${this.searchTerm}&apikey=7aa8934b`)
      .subscribe(response => {
        this.movies = response.Search;
      });
  }
}