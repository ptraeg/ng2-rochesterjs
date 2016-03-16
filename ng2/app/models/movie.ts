import {Poster} from "./movie-poster"

export interface Movie {
  id: number;
  title: string;
  synopsis: string;
  mpaa_rating: string;
  runtime: number;
  year: number;
  abridged_cast: any[];
  release_dates: any;
  posters: Poster;
  
}