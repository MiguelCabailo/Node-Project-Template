# Node-Project-Template
Node Template Project with: express, gulp, gulp-sass, gulp-nodemon, browser-sync

Template project to increase productivity using an express server to aviod restarting the express server with gulp-nodemon, browser refreshing on html changes, compiling scss into css.

How to use:
Simply cd to the folder and on the terminal, type: gulp
- this will start an express server with gulp-nodemon which will restart the express server if there are any changes instead of us having to manually restart it
- will sync the browser to a localhost so any changes in html will automatically referesh the browser
- will compile all the files in the sass folder to the style.css in the css folder

Pre-requisites:
- node js installed globally
- gulp installed globally: npm install -g gulp
- no need to install the npm packages on the local folder
