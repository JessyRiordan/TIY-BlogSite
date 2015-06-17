var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    sass = require('gulp-sass');

gulp.task('serve', [ 'sass' ], function(){
  browserSync.init({
    server: "./_site"
  });

  gulp.watch("scss/*.scss", [ 'sass' ]);
  gulp.watch("./_site/*.html").on(change, browserSync.reload);
});

gulp.task('sass', function(){
  return gulp.src("scss/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("app/css"))
    .pipe(browserSync,stream());
});

gulp.task('default', [ 'serve' ]);
