const express = require('express');
const router= express.Router();
const mongoose = require('mongoose');

const userModel = require('../models/userModel');


router.get ('/',function(req,res){
    res.send("user's Home").status(200);
});
router.post('/',function(req,res){
    const newUser= new userModel({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    userModel.find({email: req.body.email }) //to check if email received already exist or not
    .exec() //'exec' line promisifies  the function
    .then(users=>{
        if(users.length>0){
            res.send("Account already exist").status(400)
        }
        else{
            newUser.save();
            res.send("Account created").status(400);
        }
    })
    .catch(err=>{
        console.log(err);
    })
});
module.exports=router;
//nodemon is added to automate the server restart after any changes made