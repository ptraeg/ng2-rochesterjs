'use strict';

angular.module('ng1.movies', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/movies', {
    templateUrl: 'movies/movie-list.html',
    controller: 'MovieListCtrl'
  });
}])

.controller('MovieListCtrl', ['$scope', '$location', 'ng1MovieRepository', function($scope, $location, moviesRepo) {
   // init
   moviesRepo.getMovies().then(function(data) {
      $scope.movies = data;
   });
   
   $scope.viewMode = "table";
   
   $scope.goToDetail = function() {
      var activeMovie = $scope.movies.find(function(m) { return m.active; });
      $location.path('/movie/' + activeMovie.id);
   }
   
}]);