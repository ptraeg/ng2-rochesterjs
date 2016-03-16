angular.module('ng1.movies')
   .factory('ng1MovieRepository', ['$q', '$http', function ($q, $http) {
      var apiKey = "<your-api-key-here>",
         baseUrl = "http://api.rottentomatoes.com/api/public/v1.0";
      
      function getMovies() {
         return $http.jsonp(baseUrl + '/lists/movies/box_office.json?apiKey=' + apiKey + '&callback=JSON_CALLBACK')
         .then(function (result) {
            return result.data.movies;
         });
      }
      
      function getMovie(movieId) {
         return $http.jsonp(baseUrl + '/movies/' + movieId + '.json?apiKey=' + apiKey + '&callback=JSON_CALLBACK')
         .then(function (result) {
            return result.data;
         });
      }

      return {
         getMovies: getMovies,
         getMovie: getMovie
      }
   }]);