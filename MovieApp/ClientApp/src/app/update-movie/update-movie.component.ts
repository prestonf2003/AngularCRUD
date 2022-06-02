import { Component, OnInit } from '@angular/core';
import { Movie } from '../Movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {

  title: string = "";
  releaseYear: number = 0;
  genre: number = 0;
  id: number = 0;

  results: Movie[] = [];

  constructor(private movieS: MovieService) { }

  ngOnInit(): void {
  }
  updateMovie(): void {
    this.movieS.updateMovie(this.id ,this.title, this.releaseYear, this.genre).subscribe(
      (response) => {
        this.results = response;
      }
    );
    
  }

}
