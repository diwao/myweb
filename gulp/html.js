var gulp = require('gulp');
var htmlhint = require('gulp-htmlhint');
var browserSync = require('browser-sync');
// var notify = require('gulp-notify');
// var plumber = require('gulp-plumber');

var path = {
  base: 'app/src/html',
  src: 'app/src/html/**/*.html',
  dest: 'app/product/'
};

gulp.task('html', function(){
  gulp.src(path.src)
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.reporter())
    .pipe(gulp.dest(path.dest),{base: path.base})
    .pipe(browserSync.stream());
});
