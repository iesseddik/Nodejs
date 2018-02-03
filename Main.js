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


var express = require('express');
var app = express(); // npm express en ligne de commande avant


app.get('/', function(req, res) { // creation de route(url), ici root
  res.setHeader('Content-Type','Text/plain');
  res.end('vous etes a l\'accueil');
});

/*
app.get('/:etagenum/:chambrenum', function(req, res) {
  res.setHeader('Content-Type','Text/plain');
  console.log(req.params);
  res.end('vous etes a l\'etage '+ req.params.etagenum +' chambre '+ req.params.chambrenum);
});ou alors...*/
app.get('/:etagenum/:chambrenum', function(req, res) { //neccesite npm install ejs, creation dossier views, script.ejs
    res.render('etagechambre.ejs', {etage: req.params.etagenum, chambre: req.params.chambrenum, compteur: req.params.etagenum*req.params.chambrenum });
});

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

app.listen(8081);
