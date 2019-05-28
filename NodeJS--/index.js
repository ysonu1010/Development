const express = require('express');
const morgan = require('morgan');
const app =express();
//nodejs runs line by line
//we are making local host server
//app is instance of express
const port=3000;
//defining the port for the server
var count=0;
//==============using middle ware morgan=============
app.use(morgan('dev'));
//app will use morgan as dev(type of morgan) as middle ware
app.get('*',function(req,res,next){
    count++;
    next();
});
//'*' -----> accepts all requests no matter what address is
//It can be used as 404 error handler if added to end of code,
//if none of the get request maches then it reaches to '*'
//and we can print 'ERROR" there
app.get('/',function(req,res){
    res.send('hello world!').status(200);
});
//setting status code manually(optional) else by default it gives 304
app.get('/test',function(req,res){
    res.send('testing').status(204);
});
app.listen(port,function(){
    console.log(`server listening on ${port}`);
});
//we have defined that this server is listening at localhost/3000
app.get('/count',function(req,res){
    res.send(count.toString()).status(200);
});

