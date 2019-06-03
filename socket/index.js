var express = require('express');
var socket = require('socket.io');
//socket or socket.io is a library
//socket variable returned is a fucntion, that will be called later to setup socket
// App setup
var app = express();
var server = app.listen(4000, function(){
    console.log('listening for requests on port 4000,');
});

// Static files
app.use(express.static('public'));

// Socket setup & pass server as argument
//===================================
// 1. here we decide, which server we want socket to setup on
var io = socket(server);

//io.on waits for a event called connection(connection is event when we make a connection from a browser) with the above server
//as connection is made, the callback funtion is executed with
//msg on console 'made socket connection'
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    //to listen to message being sent from client
    //when it receives a chat message, fire the calback function
    //that receives the 'data' that client sends
    socket.on('chat',function(data){
        //sending the 'chat' message contained in 'data' to all clients(sockets connections) connected to webserver conneted to the socket
        io.sockets.emit('chat', data)
    });


//handing the broadcast request from client for 'typing' message.
    socket.on('typing', function(data){
        socket.broadcast.emit('typing',data)
    });


}); 
// 2. Now setup socket.io on front end i.e in index.html in public directory
//load sockt.io library from socket.io official site to index.html
//import a file chat.js that connects socket to the front end.
