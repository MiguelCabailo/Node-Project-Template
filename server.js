var express = require('express');
var todoMongoDb = require('./app/components/todo/todoMongoDb');

var app = express();

app.use(express.static('./app'));
app.use(express.static('./assets'));

/* To-do Services(MongoDB) */
todoMongoDb(app);

app.get("/", function(req,res){
    res.sendFile(__dirname + '/index.html');
});

/* redirect to "/" */
app.get('*',function (req, res) {
    res.redirect('/');
});


app.listen(4000, function(){
    console.log("listening on port http://localhost:4000");
});



