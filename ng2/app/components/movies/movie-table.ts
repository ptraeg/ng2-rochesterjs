import {Component, Input, Output, EventEmitter} from "angular2/core";
import {Movie} from '../../models/movie';
import {TomatoMeter} from "./tomato-meter";
import {MinToHourMin} from "../../pipe/min-to-hour-min"

@Component({
  selector: 'movies-table-view',
  template: `
      <table class="table table-striped">
        <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Year</th>
              <th>Rating</th>
              <th>Running Time</th>
              <th>Tomatometer™</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="#movie of movies">
              <td>
                <img class="movie-table-image" [src]="movie.posters.profile" (click)="movieDetailClicked(movie.id)"/>
              </td>
              <td>{{movie.title}}</td>
              <td>{{movie.year}}</td>
              <td>{{movie.mpaa_rating}}</td>
              <td>{{movie.runtime | min2HrMin}}</td>
              <td>
                <tomato-meter [rating]=movie.ratings.critics_rating>
                </tomato-meter>
              </td>
            </tr>
        </tbody>
      </table>  
  `,
  directives: [TomatoMeter],
  pipes: [MinToHourMin]
})
export class MoviesTableComponent {

  @Input('movies') movies: Movie[];
  @Output('movieDetailClicked') movieDetailClick:EventEmitter<string> = new EventEmitter<string>();
  
  constructor() {
  }
  
  movieDetailClicked(movieId:string) {
    this.movieDetailClick.emit(movieId);
  }

}
