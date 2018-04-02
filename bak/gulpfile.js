/**
 * Created by LiChong on 2016/11/3.
 */
var gulp = require('gulp'),
    concat = require("gulp-concat"),
    connect = require('gulp-connect');//livereload

gulp.task('concat', function () {
    gulp.src(['js/*.js', 'build/main.js'])  //要合并的文件
        .pipe(concat('all.js'))  // 合并匹配到的js文件并命名为 "all.js"
        .pipe(gulp.dest('build/'));
});


//定义html任务
gulp.task('html', function () {
    gulp.src('demo/**/*.html')
        .pipe(connect.reload());
});

//定义livereload任务
gulp.task('connect', function () {
    connect.server({
        livereload: true
    });
});

//定义看守任务
gulp.task('watch', function () {
    gulp.watch('demo/**', ['html']);
});

//定义默认任务
gulp.task('default', ['connect', 'watch']);