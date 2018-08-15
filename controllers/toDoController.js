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

/*
//dummy data
var itemOne = Todo({item: 'buy flowers'}).save((err)=>{
  if(err) throw err;
  console.log
});
*/


var urlEncodedParser = bodyParser.urlencoded({extended:false});

module.exports = (app)=>{

  app.get('/todo', (req,res)=>{
    // get data from mongo db and pass it to the view
    // empty object to get all of it
    // {item: find flowers} for a specific item
    Todo.find({},(err, data)=>{
      if(err) throw err;
      res.render('todo',{todos: data});
    })
  });

  app.post('/todo', urlEncodedParser, (req,res)=>{
    // get data from the view and add it to mongoDB
  
    var newTodo = Todo(req.body).save((err,data)=>{
      if(err) throw err;
      console.log("added " + data + " to the DB");
      res.json(data);
    });
  });

  app.delete('/todo/:item', (req,res)=>{
    // delete requested item from mongoDB
    // replace - with a space
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err,data){
      if(err) throw err;
      res.json(data);
    });
  });
}