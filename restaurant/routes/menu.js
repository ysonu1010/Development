const express = require('express');
const router= express.Router();
const mongoose = require('mongoose');
const menuModel = require('../models/menuModel');

router.get('/',function(req,res){
   menuModel.find()
   .exec()
   .then(kuchhbhi=>{
       res.json(kuchhbhi).status(200);
   })
});

router.post('/',function(req,res){
    const newMenu= new menuModel({ 
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        dish_type: req.body.dish_type,
        description: req.body.description,
        price: req.body.price
    });

    newMenu.save(function(err,newEntry){
        if(err){
            res.json(err).status(400);
        }
        else{
            res.json(newEntry).status(201);
        }
    });
});


 //retrieve dish by dish_type
 router.get('/:type',function(req,res){
    const typee=req.params.type;
    menuModel.find({dish_type: typee})
    .exec()
    .then(product=>{
        res.json(product).status(200);
    })
 });
 


module.exports=router;
