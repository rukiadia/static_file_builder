const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("sass", function() {
  return gulp
    .src("assets/css/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css/"));
});
