# Node-Project-Template
Node Template Project with: express, gulp, gulp-sass, gulp-nodemon, browser-sync

Template project to increase productivity using an express server to aviod restarting the express server with gulp-nodemon, browser refreshing on html changes, compiling scss into css.

How to use:

1) Install Dependencies: npm i

2) CD to the project folder and on the terminal use the command: gulp
- this will start an express server with gulp-nodemon which will restart the express server if there are any changes instead of us having to manually restart it
- will sync the browser to a localhost so any changes in html will automatically referesh the browser
- will compile all the files in the sass folder to the style.css in the css folder

Pre-requisites:
- node js installed globally: download from node.js site
- gulp installed globally: npm install -g gulp on the terminal



Nodemon task for server restart on changes:

gulp.task('nodemon', function(cb){
    var started = false;
    
	return nodemon({
		script: 'app.js'
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true; 
		} 
	});
});

Sass task to watch all the .scss files in the folder and converts to css on dest
gulp.task('sass', function(){
    // source file
    return gulp.src('./public/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'))
    .pipe(browserSync.stream());
});


Watch task that watches the .scss files in the folder, if there are any changes run: sass
gulp.task('watch', function(){
    gulp.watch('./public/scss/**/*.scss', ['sass']);
});


Browser Sync Task to watch the server in port 7000 which opens a chrome browser on that port:
gulp.task('browser-sync', ['nodemon'], function(){
    browserSync.init(null, {
        proxy: "http://localhost:3000",
        files: ["public/**/*.*"],
        browser: "Chrome",
        port: 7000
    });
})

Set Default Gulp Task:
Runs sass to check for changes in .scss files, then syncs gulp html with the browser the runs watch that is async
gulp.task('default', ['sass','browser-sync', 'watch']);


