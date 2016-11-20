/**
 * Created by LiChong on 2016/11/3.
 */
var gulp = require('gulp'),
    concat = require("gulp-concat");

gulp.task('concat', function () {
    gulp.src(['js/*.js','build/main.js'])  //要合并的文件
        .pipe(concat('all.js'))  // 合并匹配到的js文件并命名为 "all.js"
        .pipe(gulp.dest('build/'));
});
