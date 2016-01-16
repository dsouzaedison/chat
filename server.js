/**
 * Created by edison on 1/15/2016.
 */
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

http.listen(555,function(){
    console.log('Server running on 555');
});

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection',function(socket){
    console.log('User Connected!');
    io.on('disconnect',function(){
        console.log('User disconnected!');
    });
    socket.on('chat message',function(msg){
        console.log(msg);
        io.emit('chat message',msg);
    })

});