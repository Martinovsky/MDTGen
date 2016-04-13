var express = require('express');
var app = express();
 
var bdd = require('./models/connector');
 
var mongoose = require('mongoose');
 
 
app.get('/', function (req, res) {
    res.send('Hello World');
});
 
var server = app.listen(8081, function () {
 
    var host = server.address().address
    var port = server.address().port
 
    console.log("Example app listening at http://%s:%s", host, port)
    console.log("Let's create a character")
    
    bdd.connect();
    
    bdd.db().once('open', function() {
		
		
		
		
	
    }); 
});