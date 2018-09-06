const express = require('express');
const mongoose = require('mongoose');

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
    .connect(db, {useNewUrlParser:true})
    .then(()=> console.log('MongoDB Connected...'))
    .catch((err)=> console.log(err));


// Use Routes
// anything that goes to this path should refer to the items Database
app.use('/api/items', items)


// if using heroku||5000
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

