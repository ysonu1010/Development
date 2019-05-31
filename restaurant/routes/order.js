const express = require('express');
const router= express.Router();
const mongoose = require('mongoose');
const orderModel = require('../models/orderModel');

//retrieve all orders
router.get('/',function(req,res){
    // res.send('product module').status(200);
    orderModel.find()
    .exec()
    .then(orders=>{
        res.json(orders).status(200);
    })
 });

 
router.post('/',function(req,res){
    const newOrder= new orderModel({ //creating instance of productModel
        _id: new mongoose.Types.ObjectId(),
        chef: req.body.chef,
        table_number: req.body.table_number,
        order_list:req.body.order_list,
        quantity: req.body.quantity
    });

    newOrder.save(function(err,newEntry){
        if(err){
            res.json(err).status(400);
        }
        else{
            res.json(newEntry).status(201);
        }
    });
    //res.send("order Booked").status(400);
});

module.exports=router;
