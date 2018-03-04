var http = require('http'); // appel a la bibliotheque de nodejs module http
var url = require("url");// import du module url
var querystring = require('querystring');
var express = require('express');
var app = express();



app.get('/', function(req, res) { //neccesite npm install ejs, creation dossier views, script.ejs
    res.render('stopwatch.ejs');
});

app.get('/CatalogProducts', function(req, res) { //neccesite npm install ejs, creation dossier views, script.ejs
    res.render('productCatalog.ejs');
});

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('Page introuvable !');
});

app.listen(8080);
