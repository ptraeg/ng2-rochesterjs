import { Component, OnInit } from "angular2/core";
import { Router } from 'angular2/router';
import { MoviesTableComponent } from './movie-table';
import { MoviesCarouselComponent } from './movie-carousel';
import { MovieRepository } from "../../services/movie-repository"
import { Movie } from '../../models/movie';

@Component({
  template: `
    <div class="container">
      <h3>Movie List</h3>

      <div>
          <div class="btn-toolbar pull-right" role="toolbar">
              <div class="btn-group">              
                  <button type="button" class="btn btn-default" [class.active]="viewMode=='table'"  
                      (click)="setViewMode('table')"><span class="glyphicon glyphicon-list"></span></button>
                    
                  <button type="button" class="btn btn-default"  [class.active]="viewMode=='carousel'"
                      (click)="setViewMode('carousel')"><span class="glyphicon glyphicon-picture"></span></button>
              </div>
          </div>
          <div class="clearfix"></div>
      </div>

      <movies-table-view [movies]=movies *ngIf="viewMode=='table'" (movieDetailClicked)="onMovieDetailClicked($event)"></movies-table-view>
      
      <movies-carousel-view [movies]=movies *ngIf="viewMode=='carousel'" (movieDetailClicked)="onMovieDetailClicked($event)"></movies-carousel-view>

    </div>
  `,
  directives: [MoviesTableComponent, MoviesCarouselComponent],
  providers: [MovieRepository]
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  viewMode: string = 'table';

  constructor(private router: Router, private movieRepository: MovieRepository) {
  }
  
  ngOnInit() {
    this.movieRepository.getMovies()
      .then((movies) => {
        this.movies = movies;
      });
  }

  setViewMode(newMode: string) {
    this.viewMode = newMode;
  }
  
  onMovieDetailClicked(movieId) {
    this.router.navigate( ['MovieDetail', {id:movieId}] );
  }

}
