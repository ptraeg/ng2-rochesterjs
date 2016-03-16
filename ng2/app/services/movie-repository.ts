import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs';
import {Http, Jsonp, Response} from 'angular2/http';
import {Movie} from '../models/movie';

@Injectable()
export class MovieRepository {

  apiKey: string = "<your-key-here>"
  baseUrl: string = "http://api.rottentomatoes.com/api/public/v1.0"
  movies: Movie[]

  constructor(private jsonp: Jsonp) {
  }

  getMovies(): Promise<Movie[]> {
    let moviesPromise: Promise<Movie[]> = new Promise((resolve, reject) => {
      this.jsonp.request(`${this.baseUrl}/lists/movies/box_office.json?apiKey=${this.apiKey}&callback=JSONP_CALLBACK&`)
        .subscribe((res: Response) => {
          let serviceResponse: any = res.json();
          this.movies = serviceResponse.movies;
          resolve(this.movies);
        });
    });
    return moviesPromise;
  }

  getMovie(movieId: string): Promise<Movie> {
    let moviePromise: Promise<Movie> = new Promise((resolve, reject) => {
      this.jsonp.request(`${this.baseUrl}/movies/${movieId}.json?apiKey=${this.apiKey}&callback=JSONP_CALLBACK&`)
        .subscribe((res: Response) => {
          let serviceResponse: any = res.json();
          resolve(serviceResponse);
        });
    });
    return moviePromise;
  }

}