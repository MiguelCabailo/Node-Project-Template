const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

// items Database
const items = require('./routes/api/items');

// run express
const app = express();

// Body Parser Middle-ware json
// app.use(bodyParser.json());
app.use(express.json());

// DB config keys
// Export: file.object and store in const db
const db = require('./config/keys').mongoURI;

// Connect to MongoDB using the exported keys
// promise based
mongoose
    .connect('mongodb://root:toor102938@ds020208.mlab.com:20208/mern-shoppinglist', {useNewUrlParser:true})
    .then(()=> console.log('MongoDB Connected...'))
    .catch((err)=> console.log(err));

// Use Routes
// anything that goes to this path should refer to the items Database
app.use('/api/items', items)

// Serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    // Set static folder

    app.use(express.static('client/build'));

    app.get('/', (req,res)=>{
        res.sendfile(__dirname + '/client/build/index.html');
    })

    // all requests load index.html
    app.get('*', (req,res)=>{
        // should load the html unless hitting the api
        res.redirect('/');
    })
}


// if using heroku||5000
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

