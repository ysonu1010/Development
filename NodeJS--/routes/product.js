const express = require('express');
const router= express.Router();
const mongoose = require('mongoose');
const productModel = require('../models/productModel');
//as this is used to make an instance of product model in line 11
router.get('/',function(req,res){
    res.send('product module').status(200);
});

router.post('/',function(req,res){
    const newProduct= new productModel({ //creating instance of productModel
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    });

    newProduct.save();
    res.send("Product Entered").status(400);
});

module.exports=router;
