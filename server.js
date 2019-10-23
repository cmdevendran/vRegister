var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('hello World')
})

app.post('/', function(req, res){
    res.send('hello POST World')
})

app.get('/register_company', function (req, res) {
    // Prepare output in JSON format
    response = {
       cCompanyName:req.query.cCompanyName,
       cAddress : req.query.cAddress,
       cAddress2 : req.query.cAddress2,
       cPinCode : req.query.cPinCode,
       cContactPerson : req.query.cContactPerson,
       cTelephoneNumber : req.query.cContactPerson
       
    };
    console.log(response);
    res.end(JSON.stringify(response));
 })

var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port
    console.log('App listen', host, port)
})