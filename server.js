var express = require('express');

var app = express();

app.use(express.static('./assets'));

app.get("/", function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(4000, function(){
    console.log("listening on port http://localhost:4000");
});