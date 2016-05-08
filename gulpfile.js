var gulp =require('gulp');
	browserSync = require('browser-sync');
    sass = require('gulp-sass');

// 编译Sass
gulp.task('sass', function() {
    gulp.src('./src/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./stylesheets'));
});

gulp.task('browser-sync', function() {
    browserSync({
        files: "**",
        server: {
            baseDir: "./"
        }
    });
});


gulp.task('default',['sass','browser-sync','watch']);

    // 监听文件变化
    gulp.task('watch',function(){
        gulp.watch('./src/*.scss',['sass']);
});

