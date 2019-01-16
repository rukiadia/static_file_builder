const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

gulp.task("sass", function() {
  return gulp
    .src("assets/css/*.scss")
    .pipe(sass())
    .pipe(postcss([
        autoprefixer(), cssnano()
    ]))
    .pipe(gulp.dest("dist/css/"));
});
