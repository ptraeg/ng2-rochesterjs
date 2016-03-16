'use strict';

angular.module('ng1.movies')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/movie/:id', {
    templateUrl: 'movies/movie-detail.html',
    controller: 'MovieDetailCtrl'
  });
}])

.controller('MovieDetailCtrl', ['$scope', '$routeParams', 'ng1MovieRepository', function($scope, $routeParams, moviesRepo) {
   // init
   moviesRepo.getMovie($routeParams.id).then(function(data) {
      $scope.movie = data;
   });
   
}]);