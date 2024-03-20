import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: any[] = [];
  searchTerm: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.searchMovies('Batman'); // Exemplo de pesquisa inicial
  }

  searchMovies(query: string): void {
    this.http.get<any>(`http://www.omdbapi.com/?s=${query}&apikey=7aa8934b`)
      .subscribe(response => {
        this.movies = response.Search;
      });
  }

  onSearchChange(event: any): void {
    this.searchMovies(event.target.value);
  }
}