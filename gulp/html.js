var gulp = require('gulp');
var htmlhint = require('gulp-htmlhint');
var browserSync = require('browser-sync');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');

var path = {
  src: 'app/public/**/*.html',
};

gulp.task('html', function(){
  gulp.src(path.src)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.reporter()
    .pipe(notify({
      title: 'htmlhintを実行しました',
      message: new Date(),
      sound: 'Glass'
    }))
  );
});
