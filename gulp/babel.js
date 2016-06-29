// モジュール読み込み
var gulp = require('gulp');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');
// 設定ファイル読み込み
var config = require('../config');

// babel
gulp.task('babel',function(){
  gulp.src(config.path.babel.src,{base: config.path.babel.base})
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(babel())
    .pipe(gulp.dest(config.path.babel.dest))
    .pipe(notify({
      title: 'esをトランスパイルしました',
      message: new Date(),
      sound: 'Glass'
    })
  );
});
