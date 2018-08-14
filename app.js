var express = require('express');
var toDoController = require('./controllers/toDoController.js');

var app = express();

// set-up template engine
app.set('view engine', 'ejs');

// not route specific, used on every route. It will look for static files on ./public
app.use(express.static('./public'));

//fire controllers
toDoController(app);


app.listen(3000);
console.log(`listening on port http://3000`);