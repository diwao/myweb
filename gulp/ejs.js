var gulp = require('gulp');
var ejs = require('gulp-ejs');
var browserSync = require('browser-sync');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');

var datas = {
  title: 'test site',
  message: 'hello world'
};

var settings = {
  ext: '.html'
};

gulp.task('ejs', function(){
  gulp.src(['app/dev/ejs/**/*.ejs', '!app/dev/ejs/**/_*.ejs'])
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(ejs(datas, settings))
    .pipe(gulp.dest('app/dev/html'),{base: 'app/dev/ejs'})
    .pipe(notify({
      title: 'ejsをコンパイルしました！',
      message: new Date(),
      sound: 'Glass'
    }));
});
