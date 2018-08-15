var bodyParser = require('body-parser');
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