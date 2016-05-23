// モジュール読み込み
var gulp = require('gulp');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var babel = require('gulp-babel');
// 設定ファイル読み込み
var config = require('../config');

// タスク
// jsの構文チェック
gulp.task('eslint', function(){
  gulp.src(config.path.eslint.src)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(eslint({userEslintrc: true}))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(eslint.result(function(result){
      if (result.errorCount !== 0) {
        return;
      }
    }))
    .pipe(notify({
      title: 'eslintを実行しました！',
      message: new Date(),
      sound: 'Glass'
    })
  );
});

// jsファイルをmin化
gulp.task('script', function(){
  gulp.src(config.path.script.src,{base: config.path.script.base})
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglify())
    .pipe(gulp.dest(config.path.script.dest))
    .pipe(notify({
      title: 'jsをminifyしました',
      message: new Date(),
      sound: 'Glass'
    })
  );
});

// ライブラリを1ファイルに結合
gulp.task('concatLib', function(){
  gulp.src(config.path.concatLib.src)
    .pipe(concat('libs.js'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(config.path.concatLib.dest)
  );
});

// babel
gulp.task('babel',function(){
  gulp.src(config.path.babel.src,{base: config.path.babel.base})
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(babel())
    .pipe(gulp.dest(config.path.babel.dest)
  );
});
