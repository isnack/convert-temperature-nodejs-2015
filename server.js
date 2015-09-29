// incluindo express 
var express =require('express')

var app = express();

//setando pasta onde ficarão os arquivos web

app.use(express.static('public'));

app.get('/',function(req,res){
   res.redirect('/index.html'); 
    
});




app.get('/services/convert', function(req, res) {
	    var temp=parseFloat(req.query.temp),
            type=parseFloat(req.query.type),
            ConvertServ = require('./app/TEMPServices.js'),
            result=0;
	result=ConvertServ.converter(temp,type);
    result=ConvertServ.description(result,type);
	res.send(result.toString());
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
