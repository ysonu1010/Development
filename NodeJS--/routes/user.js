const express = require('express');
const router= express.Router();

router.get ('/',function(req,res){
    res.send("user's Home").status(200);
});
router.post('/',function(req,res){
    console.log(req.body);
    res.send(req.body).status(200);
});
module.exports=router;
//nodemon is added to automate the server restart after any changes made