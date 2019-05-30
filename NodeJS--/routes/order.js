const express = require('express');
const router= express.Router();
const mongoose = require('mongoose');
const orderModel = require('../models/orderModel');

router.get('/',function(req,res){
    res.send('order module').status(200);
});

router.post('/',function(req,res){
    const newOrder= new orderModel({ //creating instance of productModel
        _id: new mongoose.Types.ObjectId(),
        user: req.body.user._id,
        product: req.body.product._id,
        quantity: req.body.quantity
    });

    newOrder.save();
    res.send("order Booked").status(400);
});

module.exports=router;
