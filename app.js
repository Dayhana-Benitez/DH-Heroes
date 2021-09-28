let express = require('express');
let app = express();
const PORT = 3030;
const path = require('path')

app.use(express.static('public'));

app.get('/babbage', function(req, res){
    res.sendFile(path.join(__dirname,"./public/views/babbage.html"));
})
app.get('/berners-lee', function(req, res){
    res.sendFile(path.join(__dirname,"./public/views/berners-lee.html"));    
})
app.get('/clarke', function(req, res){
    res.sendFile(path.join(__dirname,"./public/views/clarke.html")); 
})
app.get('/hamilton', function(req, res){
    res.sendFile(path.join(__dirname,"./public/views/hamilton.html")); 
})
app.get('/hopper', function(req, res){
    res.sendFile(path.join(__dirname,"./public/views/hopper.html")); 
})
app.get('/lovelace', function(req, res){
    res.sendFile(path.join(__dirname,"./public/views/lovelace.html")); 
})
app.get('/turing', function(req, res){
    res.sendFile(path.join(__dirname,"./public/views/turing.html")); 
})

app.listen(PORT, console.log("servidor levantado"))