var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');

var options = {
  outputStyle: 'nested',
  sourceMap: true,
  sourceComment: false
};

var autoprefixerOptions = {
  browsers: ['last 3 version', 'ie >= 9', 'Android 4.0']
};

var path = {
  pc: {
    src: 'app/src/pc/sass/**/*.scss',
    dest: 'app/public/pc/css'
  },
  sp: {
    src: 'app/src/sp/sass/**/*.scss',
    dest: 'app/public/sp/css'
  }
};

gulp.task('style', function(){
  //pc
  gulp.src(path.pc.src)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(sass(options))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(path.pc.dest))
    .pipe(browserSync.stream())
    .pipe(notify({
      title: 'Sass(pc)をコンパイルしました！',
      message: new Date(),
      sound: 'Glass'
    })
  );
  //sp
  gulp.src(path.sp.src)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(sass(options))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest(path.sp.dest))
    .pipe(browserSync.stream())
    .pipe(notify({
      title: 'Sass(sp)をコンパイルしました！',
      message: new Date(),
      sound: 'Glass'
    })
  );
});
