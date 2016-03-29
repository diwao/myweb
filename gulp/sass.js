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

var path = {
  src: 'app/src/sass/**/*.scss',
  dest: 'app/product/css'
};

gulp.task('sass', function(){
  gulp.src(path.src)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(sass(options))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(path.dest))
    .pipe(browserSync.stream())
    .pipe(notify({
      title: 'Sassをコンパイルしました！',
      message: new Date(),
      sound: 'Glass'
    }));
});
