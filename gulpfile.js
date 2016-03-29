var gulp = require('gulp');
var browserSync = require('browser-sync');
require('./gulp/sass.js');
require('./gulp/ejs.js');
require('./gulp/eslint.js');
require('./gulp/html.js');

// 監視
gulp.task('default', function(){
  browserSync.init({
    server: {
      baseDir: './app/product/'
    }
  });
  gulp.watch(['app/src/sass/**/*.scss','app/src/sass/**/_*.scss'],['sass']);
  gulp.watch(['app/src/ejs/**/*.ejs','!app/src/ejs/**/_*.ejs'],['ejs']);
  gulp.watch('app/src/html/**/*.html',['html']);
  // gulp.watch('app/src/js/*.js',['eslint']);
});
