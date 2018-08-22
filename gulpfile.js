var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync');

gulp.task('browser-sync', ['nodemon'], function(){
    browserSync.init(null, {
        proxy: "http://localhost:4000",
        files: ["**/*.html"],
        browser: "Chrome",
        port: 7000
    })
});

gulp.task('nodemon', function(cb){
    var started = false;

    return nodemon({
        script: 'server.js'})
        .on('start', function(){
            if(!started){
                cb();
                started = true;
            }
        });
});

gulp.task('sass', function(){
    return gulp.src('./assets/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', function(){
    gulp.watch('./assets/scss/**/*.scss', ['sass'])
});

gulp.task('default', ['sass','watch','browser-sync']);

