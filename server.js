var express = require('express');
var todoMongoDb = require('./app/components/todo/todoMongoDb');

var app = express();

// use static files from these two folders
app.use(express.static('./app'));
app.use(express.static('./assets'));

/* To-do Component MongoDB */
todoMongoDb(app);

// send single page index.html
app.get("/", function(req,res){
    res.sendFile(__dirname + '/index.html');
});

/* always redirect to "/" which is the index .html*/
app.get('*',function (req, res) {
    res.redirect('/');
});


app.listen(4000, function(){
    console.log("listening on port http://localhost:4000");
});



