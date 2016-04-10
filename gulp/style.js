// モジュール読み込み
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
// 設定ファイル読み込み
var config = require('../config');

// タスク
gulp.task('style', function(){
  //pc
  gulp.src(config.path.style.srcPC)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(sass(config.sass.options))
    .pipe(autoprefixer(config.autoprefixer.options))
    .pipe(gulp.dest(config.path.style.destPC))
    .pipe(browserSync.stream())
    .pipe(notify({
      title: 'Sass(pc)をコンパイルしました！',
      message: new Date(),
      sound: 'Glass'
    })
  );
  //sp
  gulp.src(config.path.style.srcSP)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(sass(config.sass.options))
    .pipe(autoprefixer(config.autoprefixer.options))
    .pipe(gulp.dest(config.path.style.destSP))
    .pipe(browserSync.stream())
    .pipe(notify({
      title: 'Sass(sp)をコンパイルしました！',
      message: new Date(),
      sound: 'Glass'
    })
  );
});
