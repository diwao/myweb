// モジュール読み込み
var gulp = require('gulp');
// 設定ファイル読み込み
var config = require('../config');

// タスク
gulp.task('copy', function() {
  gulp.src(config.path.copy.src,{base: config.path.copy.base})
    .pipe(gulp.dest(config.path.copy.dest)
  );
});
