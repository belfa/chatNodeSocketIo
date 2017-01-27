var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('client'));

app.get('/hola-mundo', function(resquest, response){
    response.status(200).send('Hola Mundo desde una ruta de prueba.');
});

var messages = [{
    id : 1,
    text: 'Bienvenido al chat privado de Socket.io y NodeJS de Patiño.....',
    nickname: 'Bot - server'
}];

io.on('connection', function(socket){
    console.log("El nodo con IP: "+socket.handshake.address+" se ha conectado....");
    socket.emit('messages',messages);
});

server.listen(6677, function(){
    console.log('Servidor está funcionando en http://localhost:6677');
});
