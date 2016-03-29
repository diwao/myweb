var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');

var options = {
  outputStyle: 'nested',
  sourceMap: true,
  sourceComment: false
};

var autoprefixerOptions = {
  browser: ['last 3 version', 'ie >= 6', 'Android 4.0']
};

gulp.task('sass', function(){
  gulp.src('app/dev/sass/**/*.scss')
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(sass(options))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('app/product/css'))
    .pipe(browserSync.stream())
    .pipe(notify({
      title: 'Sassをコンパイルしました！',
      message: new Date(),
      sound: 'Glass'
    }));
});
