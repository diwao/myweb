var gulp = require('gulp');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var path = {
  base: 'app/src/',
  src: ['app/src/**/*.js','!app/src/**/lib/*.js'],
  dest: 'app/public'
};

gulp.task('script', function(){
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
      gulp.src(result.filePath,{base: path.base})
        .pipe(rename({
          suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest(path.dest));
    }))
    .pipe(notify({
      title: 'eslintを実行しました！',
      message: new Date(),
      sound: 'Glass'
    })
  );
});
