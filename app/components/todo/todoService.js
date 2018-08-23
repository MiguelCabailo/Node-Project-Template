var mongoose = require('mongoose');

mongoose.connect('mongodb://root:toor102938@ds018508.mlab.com:18508/todoapplearning'
    , { useNewUrlParser: true });

var todoSchema = new mongoose.Schema({
    name: String,
    task: String,
});

var TodoMean = mongoose.model('TodoMean', todoSchema);

/*
// insert dummy items
var itemOne = TodoMean({name: 'ambika', task: 'play monopoly'})
    .save(function(err){
        if(err) throw err;
        console.log("item inserted");
    });
*/
module.exports = function (app) {
    app.get('/todostuff', function (req, res) {
        TodoMean.find({}, function (err, data) {
            if(err) throw err;
            res.send(data);
        });
    });
}