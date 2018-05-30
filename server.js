var express = require('express'),
  app = express(),
  port = process.env.PORT || 80;

app.get('/number', function(req, res) {
  const response = {
     number: Math.floor(Math.random() * 100)
  }
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(response));
});


app.get('/', function(req, res) {
  res.send('entrevista intelbras');
});

app.listen(port);

console.log('RESTful API server started on: ' + port);
