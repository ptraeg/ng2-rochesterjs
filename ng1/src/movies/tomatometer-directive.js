'use strict';

angular.module('ng1.movies').directive('ng1Tomatometer', function() {
  return {
    restrict: 'E',
    scope: {
      ratings: '='
    },
    template: '<span class="tomatometer" ng-class="tomatometerClass"></span>',
    link: function(scope, element, attrs) {
       // See http://www.rottentomatoes.com/about/ for ratings details
       if (scope.ratings.critics_rating === 'Certified Fresh') {
          scope.tomatometerClass = 'certified-fresh';
       } else if (scope.ratings.critics_rating === 'Fresh') {
          scope.tomatometerClass = 'fresh';
       } else {
          scope.tomatometerClass = 'rotten';
       }
    }
  };
});