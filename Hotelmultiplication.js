var http = require('http'); // appel a la bibliotheque de nodejs
var url = require("url");// import du module url
var querystring = require('querystring');
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

app.listen(8080);
console.log('hellllllow everybody');
