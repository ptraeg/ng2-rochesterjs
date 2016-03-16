import { Component, Input } from "angular2/core";
import { Movie } from '../../models/movie';

@Component({
  selector: 'movie-cast-list',
  template: `
    <div *ngFor="#castmember of movie.abridged_cast">
      {{castmember.name}} - {{castmember.characters[0]}}
    </div>
  `
})
export class MovieCastList {

  @Input('movie') movie: Movie;
  constructor() {
  }

}
