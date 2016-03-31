var gulp = require('gulp');
var del = require('del');
var browserSync = require('browser-sync');
require('./gulp/style.js');
require('./gulp/ejs.js');
require('./gulp/script.js');
require('./gulp/html.js');
require('./gulp/copy.js');

// クリーン
gulp.task('clean', function() {
  del(['app/public/*']);
});

// ビルド
gulp.task('build', ['ejs','style','script','html','copy']);

// チェック
gulp.task('check',['html','script']);

// 監視
gulp.task('default', function(){
  browserSync.init({
    server: {
      baseDir: './app/public/'
    }
  });
  gulp.watch(['app/src/**/*.scss','!app/src/**/_*.scss'],['style']);
  gulp.watch(['app/src/**/*.ejs','!app/src/**/_*.ejs'],['ejs']);
  gulp.watch(['app/src/**/*.js'],['script']);
});
