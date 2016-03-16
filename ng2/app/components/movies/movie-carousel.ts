import {Component, Input, Output, EventEmitter} from "angular2/core";
import {Movie} from '../../models/movie';

@Component({
  selector: 'movies-carousel-view',
  template: `
    <div id="movies-carousel" class="carousel slide" data-ride="carousel">

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
      
        <div class="item" *ngFor="#movie of movies, #i=index" [class.active]="i==0">

          <a href="javascript:void(0)" (click)="movieDetailClicked(movie.id)">
            <img class="movie-carousel-image" src="{{movie.posters.profile}}" alt="{{movie.title}}">
            <div class="carousel-caption">
              <div class="carousel-caption">
                <h4>{{movie.title}}</h4>
                <p>{{movie.year}}</p>
              </div>
            </div>
          </a>

        </div>

      </div>

      <!-- Controls -->
      <a class="left carousel-control" href="#movies-carousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#movies-carousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>  
  `
})
export class MoviesCarouselComponent {

  @Input('movies') movies: Movie[];
  @Output('movieDetailClicked') movieDetailClick:EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  movieDetailClicked(movieId:string) {
    this.movieDetailClick.emit(movieId);
  }

}