var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// route specific body parser
var urlEncodedParser = bodyParser.urlencoded({extended:false});

// connect to the mongoDB database
mongoose.connect('mongodb://root:toor102938@ds018508.mlab.com:18508/todoapplearning'
    , { useNewUrlParser: true });

// create a schema or format for the data
var todoSchema = new mongoose.Schema({
    name: String,
    task: String,
});

// create a model based on a schema 
var TodoMean = mongoose.model('TodoMean', todoSchema);

// exports for use in the main server.js
module.exports = function (app) {

    //GET all the data in the TodoMean model from mongoDB
    app.get('/todoData', function (req, res) {
        TodoMean.find({}, function (err, data) {
            if(err) throw err;
            res.send(data);
        });
    });

    //POST using body-parser
    app.post('/todoData', urlEncodedParser, function(req,res){
        var newTodoMean = TodoMean(req.body).save(function(err,data){
            if(err) throw err;
            console.log("added " + data + " to the DB");
            //parse the data to json
            res.json(data);
        });  
    });

    // DELETE by parameters
    app.delete('/todoData/:user', function(req,res,data){
        console.log(req.params.user);

        TodoMean.findByIdAndRemove(req.params.user, function(err, data){
            if (err) throw err;
            console.log('deleting user ' + data);
            res.json(data);
        })
    });
}