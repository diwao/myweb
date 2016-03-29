var gulp = require('gulp');
var htmlhint = require('gulp-htmlhint');
var browserSync = require('browser-sync');
// var notify = require('gulp-notify');
// var plumber = require('gulp-plumber');

gulp.task('html', function(){
  gulp.src('app/dev/html/**/*.html')
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.reporter())
    .pipe(gulp.dest('app/product/'),{base: 'app/dev/html'})
    .pipe(browserSync.stream());
});
