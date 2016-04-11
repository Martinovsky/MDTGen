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
    console.log("Let's creat a character")
    
    bdd.connect();
    
    bdd.db().once('open', function() {
        
        var schema = new mongoose.Schema({
            name: String,
            type: String,
            owner_user: mongoose.Schema.ObjectId,
            actual_fiche: mongoose.Schema.ObjectId
        });
        
        var character = mongoose.model('character', schema);

        /*var Vladimir = new character({
            name : "Vladimir Kedchenkov",
            type : "Vampire"
        });*/
        
        character.find(function (err, characters) {
            if (err) return console.error(err);
            
            characters[0].name = "Vladou";
            
            characters[0].save(function (err) {
            if (err) return console.error(err);
                console.log("Vladmir Kendchenkov est save in base")
                
             bdd.close();
            });
            
        });         
    } ); 
});