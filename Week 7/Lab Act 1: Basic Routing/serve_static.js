var express = require('express');
var app = express();
 
app.use(express.static('public'));
 
app.get('/', function (req, res) {
  res.send('You have successfully created second app!');
})

app.get('/about', function (req, res) {
  res.send('<h1>About Our App</h1><p>This is a custom route created for the Module 4 Lab Activity!</p>');
});

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})
