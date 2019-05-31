const express = require('express');
const morgan = require('morgan');
const chef =require('./routes/chef');
const menu =require('./routes/menu');
const order =require('./routes/order');
const parser =require('body-parser');
const mongoose =require('mongoose');
const chefModel=require('./models/chefModel');
const menuModel=require('./models/menuModel');
mongoose.connect("mongodb+srv://ysonu101010:12345@cluster0-zrz3q.mongodb.net/test?retryWrites=true&w=majority",{ useNewUrlParser: true },function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Atlas connected");
    }
});

const app =express();

const port=3000;
app.use(morgan('dev'));
app.use(parser.json());


//to get json data
app.use(parser.urlencoded({extended:true}));
//to read 'form' data from html

app.get ('/',function(req,res){
    res.send("user's Home").status(200);
});

app.use('*',function(req,res,next){
    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Headers','content-type');
    next();
});


app.use('/chef',chef);
app.use('/menu',menu);
app.use('/order',order);


app.listen(port,function(){
    console.log(`server listening on ${port}`);
});