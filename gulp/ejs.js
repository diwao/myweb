var gulp = require('gulp');
var ejs = require('gulp-ejs');
var browserSync = require('browser-sync');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');

var datas = {
  title: 'My website template',
  author: 'diwao',
  description: 'サイトの説明が入ります',
  keywords: 'web,gulp',
  favicon: '/asset/image/favicon.ico',
  og: {
    url: 'http://google.com',
    image: 'http://google.com/og.jpg',
    description: 'og用の説明文が入ります',
    title: 'サイトの名前が入ります'
  }
};

var settings = {
  ext: '.html'
};

var path = {
  base: 'app/src/ejs',
  src: ['app/src/ejs/**/*.ejs', '!app/src/ejs/**/_*.ejs'],
  dest: 'app/src/html'
};

gulp.task('ejs', function(){
  gulp.src(path.src)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(ejs(datas, settings))
    .pipe(gulp.dest(path.dest),{base: path.base})
    .pipe(notify({
      title: 'ejsをコンパイルしました！',
      message: new Date(),
      sound: 'Glass'
    }));
});
