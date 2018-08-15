var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// connect to the DB
mongoose.connect('mongodb://root:toor102938@ds018508.mlab.com:18508/todoapplearning'
, { useNewUrlParser: true });

// schema for the DB(blue-print for the data)
var todoSchema = new mongoose.Schema({
  item: String
});

// create a todo model and base it on a schema
// Capital
// parameters: Model Name stored as a collection/schema 
var Todo = mongoose.model('Todo', todoSchema);

// test dummy data
var itemOne = Todo({item: 'buy flowers'}).save((err)=>{
  if(err) throw err;
  console.log('item saved');
});

var urlEncodedParser = bodyParser.urlencoded({extended:false});
var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];

module.exports = (app)=>{

  app.get('/todo', (req,res)=>{
    res.render('todo',{todos: data});
  });

  app.post('/todo', urlEncodedParser, (req,res)=>{
    data.push(req.body);
    // send data back once the data array has been updated
    res.json(data);
  });

  app.delete('/todo/:item', (req,res)=>{
    // filter out item to be deleted
    // returns true if the particular item is not equal to the parameters passed in
    // if the parameter matches the item inside the array it returns false and takes it out
    // filters it out, essentially deleting it
    data = data.filter(function(todo){
      return todo.item.replace(/ /g, '-') !== req.params.item;
    });

    res.json(data);
  });
}