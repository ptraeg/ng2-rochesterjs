import {Component, OnInit} from "angular2/core";
import {RouteParams} from 'angular2/router';
import {MovieCastList} from './movie-cast-list';
import {MovieRepository} from "../../services/movie-repository"
import {Movie} from '../../models/movie';

@Component({
  templateUrl: '/app/components/movies/movie-detail.html',
  directives: [MovieCastList],
  providers: [MovieRepository]
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;

  constructor(private routeParams: RouteParams, private movieRepository: MovieRepository) {
  }
  
  ngOnInit() {
    let id: string = this.routeParams.get('id');
    this.movieRepository.getMovie(id)
      .then((movie) => {
        this.movie = movie;
      });
  }

}