// モジュール読み込み
var gulp = require('gulp');
var htmlhint = require('gulp-htmlhint');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
// 設定ファイル読み込み
var config = require('../config');

// タスク
gulp.task('html', function(){
  gulp.src(config.path.html.src)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(htmlhint('.htmlhintrc'))
    .pipe(htmlhint.reporter())
    .pipe(notify({
      title: 'htmlhintを実行しました',
      message: new Date(),
      sound: 'Glass'
    })
  );
});
