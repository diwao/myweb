// モジュール読み込み
var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
var notify = require('gulp-notify');
// 設定ファイル読み込み
var config = require('../config');

// タスク
gulp.task('sprite', function () {
  var spriteData = gulp.src(config.path.sprite.src)
    .pipe(spritesmith(config.sprite.options)
  );
  spriteData.img
    .pipe(gulp.dest(config.path.sprite.dest))
    .pipe(notify({
      title: 'sprite画像を生成しました',
      message: new Date(),
      sound: 'Glass'
    })
  );
  spriteData.css
    .pipe(gulp.dest(config.path.sprite.dest))
    .pipe(notify({
      title: 'spriteのscssを生成しました',
      message: new Date(),
      sound: 'Glass'
    })
  );
});
