import { Inject, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './Movie';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  urlRoot: string;

//We'll need to inject 2 services: HTTP and base url
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) { 
    this.urlRoot = baseUrl
  }
  searchMoviesTitle(title: string) : Observable<Movie[]>{
    return this.http.get<Movie[]>(this.urlRoot + "movies/SearchByTitle/" + title);
  }

  updateMovie( id: number, Title: string, release: number, Genre: number) : Observable<Movie[]>{
    return this.http.post<Movie[]>(this.urlRoot + "movies/updateMovie/" + id, {title:  Title, releaseYear: release, genre: Genre});
  
  }
}
