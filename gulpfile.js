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
  gulp.watch(['app/dev/sass/**/*.scss','app/dev/sass/**/_*.scss'],['sass']);
  gulp.watch(['app/dev/ejs/**/*.ejs','!app/dev/ejs/**/_*.ejs'],['ejs']);
  gulp.watch('app/dev/html/**/*.html',['html']);
  // gulp.watch('app/dev/js/*.js',['eslint']);
});
