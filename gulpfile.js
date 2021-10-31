var sass = require('gulp-sass')(require('sass'));
var gulp = require('gulp'); 
 
gulp.task("sass", function(done){
    gulp.src("./sass/**/*.scss")
    .pipe(sass({outputStyle: "expanded"}))
    .pipe(gulp.dest("./css"));
    done();
});
// 下記の設定で自動コンパイルをすることができる。
gulp.task("watch", function(){
  gulp.watch("./sass/**/*.scss", gulp.series(["sass"]))
});