var express = require('express');
var app = express();
var fs = require("fs");

app.get('/users', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

app.get('/quiz/1', function (req, res) {
    fs.readFile( __dirname + "/" + "question1.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
    });
 })

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("App listening at ", port)
//    console.log("Host is ",host)
})