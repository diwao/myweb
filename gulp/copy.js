var gulp = require('gulp');

var path = {
  base: 'app/src',
  src: ['app/src/**/*.png','app/src/**/*.jpg','app/src/common/css/**','app/src/common/lib/**'],
  dest: 'app/public'
};

gulp.task('copy', function() {
  gulp.src(path.src,{base: path.base})
    .pipe(gulp.dest(path.dest)
  );
});
