var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Ezhil Sankar Esakki!');
});

var server = app.listen(5000, function () {
   console.log('Example app listening at http://localhost:3000');
});