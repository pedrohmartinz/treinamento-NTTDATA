import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  searchTerm: string = '';
  searchResults: any[] = [];

  constructor(private movieService: MovieService) {}

  searchMovies(): void {
    this.movieService.searchMovies(this.searchTerm)
      .subscribe((response: any) => {
        console.log(response); // Verifique os dados recebidos
        if (response && response.Search) {
          this.searchResults = response.Search;
        } else {
          this.searchResults = [];
        }
      });
  }
}