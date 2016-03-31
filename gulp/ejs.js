var gulp = require('gulp');
var ejs = require('gulp-ejs');
var browserSync = require('browser-sync');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');

var datas = {
  title: 'サイトタイトル',
  author: '著者名',
  description: '説明',
  keywords: 'キーワード',
  favicon: '/asset/image/favicon.ico',
  og: {
    siteName: 'og用のサイトタイトル',
    description: 'og用の説明',
    url: 'https://github.com/diwao/myweb',
    image: ''
  }
};

var settings = {
  ext: '.html'
};

var path = {
  pc: {
    src: ['app/src/pc/ejs/**/*.ejs', '!app/src/pc/ejs/**/_*.ejs'],
    dest: 'app/public'
  },
  sp: {
    src: ['app/src/sp/ejs/**/*.ejs', '!app/src/sp/ejs/**/_*.ejs'],
    dest: 'app/public/sp'
  }
};

gulp.task('ejs', function(){
  //pc
  gulp.src(path.pc.src)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(ejs(datas, settings))
    .pipe(gulp.dest(path.pc.dest))
    .pipe(browserSync.stream())
    .pipe(notify({
      title: 'ejs(pc)をコンパイルしました',
      message: new Date(),
      sound: 'Glass'
    })
  );
  //sp
  gulp.src(path.sp.src)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(ejs(datas, settings))
    .pipe(gulp.dest(path.sp.dest))
    .pipe(browserSync.stream())
    .pipe(notify({
      title: 'ejs(sp)をコンパイルしました',
      message: new Date(),
      sound: 'Glass'
    })
  );
});
