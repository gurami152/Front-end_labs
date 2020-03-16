var gulp = require('gulp'),
    jade = require('gulp-jade');
    browserSync=require('browser-sync').create();

const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const less = require('gulp-less');
const stylus = require('gulp-stylus');

// чтобы запустить эту задачу, наберите в командной строке gulp jade
gulp.task('jade', function() {
    return gulp.src('src/templates/*.jade')
        .pipe(jade()) 
        .pipe(gulp.dest('builds/development')); // указываем gulp куда положить скомпилированные HTML файлы
});

function watch(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    // следить за sass файлами
    gulp.watch('./src/templates/sass/**/*.sass',sass);

    // При изминении HTML запустить обновление страницы
    gulp.watch("./*.html").on('change', browserSync.reload);
}

gulp.task('watch',watch);