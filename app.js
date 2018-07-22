var express = require('express');
var app = express();

var port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => res.sendfile('index.html', { root: __dirname + "/public" } ));


app.listen(port, () => console.log("listening on port: http://localhost:" + port));

