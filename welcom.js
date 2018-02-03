var http = require('http'); // appel a la bibliotheque de nodejs
var url = require("url");// import du module url
var querystring = require('querystring');


var server = http.createServer(function(req, res) {
    var page = url.parse(req.url).pathname;
    var query = url.parse(req.url).query
    var params = querystring.parse(query);
    console.log(page);
    res.writeHead(200, {"Content-Type": "text/plain"});
    if ('prenom' in params && 'nom' in params) {
        res.write('Bonjour ' + params['prenom'] + ' ' + params['nom'] + ' : ');
    }
    if (page == '/') {
        res.write('Vous êtes à l\'accueil, que puis-je pour vous ?');
    }
    else if (page == '/etage/1/chambre') {
        res.write('fermée a cléf');
    }
    else {
      res.writeHead(404, {"Content-Type": "text/plain"});
      res.write("Vous etes partis aux fraises")
    }
    res.end();
});

server.listen(8080); // ecoute sur le port 8080
server.on('close', function() { // On écoute l'évènement close
    console.log('Bye bye !');
})
