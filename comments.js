// Create web server
// Run on terminal: node comments.js
// Open browser and go to http://localhost:3000/
// Try to add comment and see the result
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var comments = [{author: 'Morgan', text: 'Hello World'}];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/comments', function(req, res) {
  res.setHeader('Cache-Control', 'no-cache');
  res.json(comments);
});

app.post('/comments', function(req, res) {
  comments.push(req.body);
  res.setHeader('Cache-Control', 'no-cache');
  res.json(comments);
});

app.listen(3000);