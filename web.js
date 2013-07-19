var express = require('express');
var Buffer = require('buffer').Buffer;
var fs = require('fs');
var index_html = fs.readFileSync('index.html','utf8',0);
var index_buffer = new Buffer(index_html);
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(index_buffer.toString('utf8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
