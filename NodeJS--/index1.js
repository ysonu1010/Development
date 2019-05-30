const express = require('express');
const morgan = require('morgan');
const user =require('./routes/user');
const product =require('./routes/product');
const parser =require('body-parser');
//object of body-parser attends the body data
const mongoose =require('mongoose');
const userModel=require('./models/userModel');
const productModel=require('./models/productModel');
mongoose.connect("mongodb+srv://ysonu1010:12345@cluster0-3gl5b.mongodb.net/test?retryWrites=true",{ useNewUrlParser: true },function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Atlas connected");
    }
});
//connected mongoDB server for posting data received from Postman 

//body-parser
//required to read body of request
//otherwise body data doesnt show anything

const app =express();
//nodejs runs line by line
//we are making local host server
//app is instance of expres

//===================
//middlewares
const port=3000;
app.use(morgan('dev'));
app.use(parser.json());
//to get json data
app.use(parser.urlencoded({extended:true}));
//to read 'form' data from html

  
app.use('*',function(req,res,next){
    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Headers','content-type');//to remove CORS error
    next();
    //next =>can be named anything same as third arguement of this function
    //if next is not called, it doesn't execute any further code below 
    //and doesn't send response back
});
//if gives following error in console:
//Access to XMLHttpRequest at 'http://localhost:3000/user' 
//from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
//to allow all requests even if it is in different location
//Sometimes, it is also solved by changing the browser

app.use('/user',user);
app.use('/product',product);
app.get('/',function(req,res){
    res.send('I am at home').status(200);
});
//res.send() is executed only once in a request
//once done, it doesn't execute any further code
app.listen(port,function(){
    console.log(`server listening on ${port}`);
});