// モジュール読み込み
var gulp = require('gulp');
var ejs = require('gulp-ejs');
var browserSync = require('browser-sync');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
// 設定ファイル読み込み
var config = require('../config');

// タスク
gulp.task('ejs', function(){
  //pc
  gulp.src(config.path.ejs.srcPC)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(ejs(config.ejs.data, config.ejs.settings))
    .pipe(gulp.dest(config.path.ejs.destPC))
    .pipe(browserSync.stream())
    .pipe(notify({
      title: 'ejs(pc)をコンパイルしました',
      message: new Date(),
      sound: 'Glass'
    })
  );
  //sp
  gulp.src(config.path.ejs.srcSP)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(ejs(config.ejs.data, config.ejs.settings))
    .pipe(gulp.dest(config.path.ejs.destSP))
    .pipe(browserSync.stream())
    .pipe(notify({
      title: 'ejs(sp)をコンパイルしました',
      message: new Date(),
      sound: 'Glass'
    })
  );
});
