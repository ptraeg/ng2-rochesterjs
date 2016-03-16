'use strict';

// Declare app level module which depends on views, and components
angular.module('ng1App', [
  'ngRoute',
  'ui.bootstrap',
  'ng1.movies',
  'ng1.about'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/movies'});
}]);