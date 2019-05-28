const express = require('express');
const route1= express.Router();

route1.get('/',function(req,res){
    res.send('product module').status(200);
});

module.exports=route1;
