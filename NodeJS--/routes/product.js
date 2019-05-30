const express = require('express');
const router= express.Router();
const mongoose = require('mongoose');
const productModel = require('../models/productModel');
//as this is used to make an instance of product model in line 11


//retrieving all products, product retrieval
router.get('/',function(req,res){
   // res.send('product module').status(200);
   productModel.find()
   .exec()
   .then(kuchhbhi=>{
       res.json(kuchhbhi).status(200);
   })
});

router.post('/',function(req,res){
    const newProduct= new productModel({ //creating instance of productModel
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
    });

    newProduct.save(function(err,newEntry){
        if(err){
            res.json(err).status(400);
        }
        else{
            res.json(newEntry).status(201);
        }
    });
   // res.send("Product Entered").status(400);
});
//to update the price of a product
router.put('/:productID',function(req,res){
    const id=req.params.productID;
    const newPrice=req.body.price;
    productModel.updateOne({_id:id},{$set:{price:newPrice}})
    .exec()
    .then(data=>{
        res.json(data).sendStatus(400)
    })
});


 //retrieve product by ID
 router.get('/:productID',function(req,res){
    const id=req.params.productID;
    productModel.findById(id)
    .exec()
    .then(product=>{
        res.json(product).status(200);
    })
 });
 
 //delete product by product ID
router.delete('/:productID',function(req,res){
    const id=req.params.productID;
    productModel.deleteOne({_id:id})
    .exec()
    .then(data=>{
        res.json(data).status(200);
    })
});

module.exports=router;
