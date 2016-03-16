angular.module('ng1.movies')
   .filter('min2HrMin', function() {
  return function(input) {
    var totalMinutes = parseInt(input) || 0,
        hours = Math.floor(totalMinutes / 60),
        minutes = totalMinutes % 60,
        minutesStr = (minutes < 10 ? "0" : "") + minutes;
    return hours + ":" + minutesStr;
  };
});