import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../Movie';
​
@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
  providers: [MovieService]
})
export class MovieSearchComponent implements OnInit {
​
  searchTerm: string = "";
  results: Movie[] = [];
  constructor(private movieDb: MovieService) { }
​
  ngOnInit(): void {
  }
​
  searchMovies(): void {
    this.movieDb.searchMoviesTitle(this.searchTerm).subscribe(
      (response) => {
        this.results = response;
      }
    );
  }
​
}