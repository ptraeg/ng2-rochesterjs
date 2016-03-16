import { Component, Input, ViewEncapsulation } from "angular2/core";
import { Router, ROUTER_DIRECTIVES } from 'angular2/router';
import { Movie } from '../../models/movie';

@Component({
  selector: 'movie-list-row',
  template: `
    <tr>
      <td>
        <a [routerLink]="['MovieDetail',{id:movie.id}]">
          <img [src]="movie.posters.profile"/>
        </a>
      </td>
      <td>{{movie.title}}</td>
      <td>{{movie.year}}</td>
      <td>{{movie.mpaa_rating}}</td>
      <td>{{movie.runtime}}</td>
    </tr>
  `,
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
export class MovieListRow {

  @Input('movie') movie:Movie;

  constructor(private router: Router) {
  }

  onSelect(movie: Movie) {
    this.router.navigate(['MovieDetail', { id: movie.id }]);
  }

}
