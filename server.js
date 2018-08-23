var express = require('express');
var todoService = require('./app/components/todo/todoService');

var app = express();

app.use(express.static('./app'));
app.use(express.static('./assets'));

/* To-do Services(MongoDB) */
todoService(app);

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



