var express = require('express');
var app = express();
var fs = require("fs");
const cors = require('cors');

app.use(cors({
   origin: '*',
}));

app.get('/unse/:id', function (req, res) {
   fs.readFile( __dirname + "/" + "data.json", 'utf8', function (err, data) {
      var datas = JSON.parse( data );
      var data = datas["data" + req.params.id] 
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})