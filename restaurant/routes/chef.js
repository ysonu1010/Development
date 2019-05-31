const express = require('express');
const router= express.Router();
const mongoose = require('mongoose');
const chefModel = require('../models/chefModel');


router.get ('/',function(req,res){
    console.log("success");
    res.send("user's Home").status(200);
});

router.post('/',function(req,res){
    const newChef= new chefModel({ 
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        expertise: req.body.expertise,
        password: req.body.password
    });

    
    chefModel.find({expertise: req.body.expertise })
    .exec() 
    .then(users=>{
        if(users.length>0){
            res.send("Chef with this expertise already exist").status(400)
        }
        else{
            newChef.save();
            res.send("Chef Data created").status(400);
        }
    })
    .catch(err=>{
        console.log(err);
    })
   
});
module.exports=router;
//nodemon is added to automate the server restart after any changes made