var gulp = require('gulp');
var browserSync = require('browser-sync');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var eslint = require('gulp-eslint');

var path = {
  src: 'app/src/js/*.js',
  dest: 'app/product/js'
};

gulp.task('eslint', function(){
  gulp.src(path.src)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(eslint({userEslintrc: true}))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(eslint.result(function(result){
      if (result.errorCount !== 0) {
        return;
      }
      gulp.src(result.filePath)
        .pipe(gulp.dest(path.dest));
    }))
    .pipe(browserSync.stream())
    .pipe(notify({
      title: 'eslintを実行しました！',
      message: new Date(),
      sound: 'Glass'
    }));
});
