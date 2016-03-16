var gulp = require('gulp'),
   webserver = require('gulp-webserver'),
   less = require('gulp-less'),
   sourcemaps = require('gulp-sourcemaps');;

gulp.task('webserver', function () {
   gulp.src('./')
      .pipe(webserver({
         livereload: true,
         directoryListing: true,
         open: "http://localhost:8000/src/index.html"
      }));
});

gulp.task('less', function () {
   gulp.src('./src/app.less')
      .pipe(sourcemaps.init())
      .pipe(less())
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./src'));
});

gulp.task('watch', function () {
   gulp.watch('src/**/*.less', ['less']);
})

gulp.task('default', ['less', 'webserver', 'watch']);