var gulp = require("gulp");
var browser = require("browser-sync");
var plumber = require("gulp-plumber");

gulp.task("server", function() {
    browser({
        server: {
            baseDir: "./public",
        }
    });
});

gulp.task("js", function(){
    gulp.src("./resource/*.js")
    .pipe(plumber())
    .pipe(gulp.dest("./public/"))
    .pipe(browser.reload({stream:true}))
});

gulp.task('reload', function(){
  gulp.src("./resource/*.html")
  .pipe(plumber())
  .pipe(gulp.dest("./public/"))
  .pipe(browser.reload({stream:true}))
});

gulp.task("default",['server'], function() {
    gulp.watch("./resource/*.js",["js"]);
    gulp.watch("./resource/*.html",["reload"]);
});
