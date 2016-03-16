import {Component, View} from "angular2/core";

import {Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {JSONP_PROVIDERS} from 'angular2/http';
import {bootstrap} from "angular2/platform/browser";

import {MovieListComponent} from "./components/movies/movie-list";
import {MovieDetailComponent} from "./components/movies/movie-detail";
import {AboutComponent} from "./components/about/about";


@Component({
  selector: 'rotten-tomatoes-app'
})
@View({
  template: `
    <nav class="navbar navbar-default">
      <div class="container-fluid">
         <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
            aria-controls="navbar">
               <span class="sr-only">Toggle navigation</span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">ng2 Rotten Tomatoes Sample App</a>
         </div>
         <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
              <li [class.active]="isActiveRoute('movie')">
                <a [routerLink]="['Movies']">Movies</a>
              </li>
              <li [class.active]="isActiveRoute('about')">
                <a [routerLink]="['About']">About</a>
              </li>
          </ul>
         </div>
      </div>
   </nav>
    
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/movies', name: 'Movies', component: MovieListComponent, useAsDefault: true },
  { path: '/movie/:id', name: 'MovieDetail', component: MovieDetailComponent },
  { path: '/about', name: 'About', component: AboutComponent }
])
class RottenTomatoesApp {
  constructor() {
  }

  isActiveRoute(routeName: string) {
    return document.location.pathname.includes(routeName);
  }
}

bootstrap(RottenTomatoesApp, [ROUTER_PROVIDERS, JSONP_PROVIDERS]);
