const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema to declare the object type
const ItemSchema = new Schema({
    name :{
        type: String,
        required: true
    },
    date : {
        // this is auto inserted
        type: Date,
        default: Date.now
    }
})

module.exports = Item = mongoose.model('item', ItemSchema);