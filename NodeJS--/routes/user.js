const express = require('express');
const router= express.Router();
const mongoose = require('mongoose');

const userModel = require('../userModel');


router.get ('/',function(req,res){
    res.send("user's Home").status(200);
});
router.post('/',function(req,res){
    const newUser= new userModel({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.password
    });

    
});
module.exports=router;
//nodemon is added to automate the server restart after any changes made