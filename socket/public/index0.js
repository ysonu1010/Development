var express = require('express');
//imports express module, returns a function.


// App setup
//server creation
//this is same as express.createServer();===>thsi is nowadays depricated
var app = express(); //better notation
var server = app.listen(4000, function(){
    console.log('listening for requests on port 4000,');
});

// Static files
//shows static files(Static files are files that clients download as they are from the server) 
//over client browser extracted from public directory.
//as public contains many files. it by defaults ends index.html to client
app.use(express.static('public'));

