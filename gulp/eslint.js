var gulp = require('gulp');
var browserSync = require('browser-sync');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var eslint = require('gulp-eslint');

gulp.task('eslint', function(){
  gulp.src('app/dev/js/*.js')
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
        .pipe(gulp.dest('app/product/js'));
    }))
    .pipe(browserSync.stream())
    .pipe(notify({
      title: 'eslintを実行しました！',
      message: new Date(),
      sound: 'Glass'
    }));
});
