var http = require('http');
var fs = require('fs'); // fs pour le filesystem

// Chargement du fichier index.html affiché au client
var server = http.createServer(function(req, res) {
    fs.readFile('./socketio.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});




// Chargement de socket.io
var io = require('socket.io').listen(server);

// Quand un client se connecte, on le note dans la console
io.sockets.on('connection', function (socket) {
    console.log('Un client est connecté !');
    socket.emit('message', 'Vous êtes le bienvenu !') // emission au client
    socket.broadcast.emit('message', 'Un autre client vient de se connecter !'); // emission aux autres

    // Quand le serveur reçoit un signal de type "message" du client
    socket.on('message', function (message) {
      socket.broadcast.emit('message','jacky me dit : ' + message);
    });
});


server.listen(8083);
