// モジュール読み込み
var gulp = require('gulp');
var del = require('del');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');
// 設定ファイル読み込み
var config = require('./config.js');

// 各タスク読み込み
require('./gulp/babel.js');
require('./gulp/copy.js');
require('./gulp/ejs.js');
require('./gulp/html.js');
require('./gulp/script.js');
require('./gulp/sprite.js');
require('./gulp/style.js');

// チェック
gulp.task('check',['html','eslint']);

// public以下のファイルを全消去
gulp.task('clean', function() {
  del([config.pub + '/*']);
});

// ビルド
gulp.task('build', function(){
  runSequence(
    'ejs',
    'style',
    'eslint',
    'babel',
    'concatLib',
    'copy',
    'html'
  );
});

// デフォルトタスク
gulp.task('default', function(){
  browserSync.init({
    server: {
      baseDir: config.pub
    }
  });
  gulp.watch(config.path.style.watch, ['style']);
  gulp.watch(config.path.ejs.watch, ['ejs']);
  gulp.watch(config.path.babel.watch, ['babel']);
});
