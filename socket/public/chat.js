//Make socket connection on local host
//we can access io because we have loaded the socket library in index.html
//defines where we want to make connection of socket
var socket =io.connect('http://localhost:4000');
//this socket variable is different from that defined in index.js on server.

//Query DOM
var message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output');
      feedback=document.getElementById('feedback');

// Emit events
btn.addEventListener('click', function(){

    //In socket.emit, socket is the same that we created above
    //this 'emit' fucntion sends the message down the websocket to the server.
    //calling this msg as chat msg
    //2nd parameter is the actual msg to be sent
  socket.emit('chat', {
      message: message.value,
      handle: handle.value
  });
  message.value = "";
});

//add broadcast. server sends 'some message' to all the clients except the one 
//which is asking the server to broadcast it.
//EX: In whatsapp chat group, we see 'someone is typing a msg'
//this msg is broadcasted to each member of the group ecept the one who is typing

message.addEventListener('keypress', function(){
    socket.emit('typing',handle.value);
    //now lets go to server page(index.js) and add the code to broadcast it.
})


// Listen for events from server
//listening for chat msg from the server, that the server received from other clients.
//.on is for listening
socket.on('chat', function(data){
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});

//braodcast message from server, on the client other then the one who has sent to server
socket.on('typing', function(data){
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});