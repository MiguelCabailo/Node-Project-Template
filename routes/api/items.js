const express = require('express');
// complete middleware and routing system
const router = express.Router();

// refer to Item model
const Item = require('../../models/Item');

// @route GET api/items
// @desc GET All Items
// @access Public
// instead of app.get if used in the server.js
// already in the route so only need the / since not in the server.js
router.get('/', (req,res)=>{
    Item.find()
        // sort by descending date
        .sort({ date: -1 })
        .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create an Item
// @access  Public
router.post('/', (req,res)=>{
    // new model saved in memory
    const newItem = new Item({
        name: req.body.name
    });

    // save to database
    newItem.save().then((item)=> res.json(item));

    // header content-type json on postman and use raw and type in object literal
});

// @route   POST api/items/:id
// @desc    Delete An Item
// @access  Public
router.delete('/:id', (req,res)=>{
    Item.findById(req.params.id)
        .then(item=>item.remove().then(()=>res.json({success:true})))
        .catch(err => res.status(404).json({success:false}));
});


module.exports = router;
