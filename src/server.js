var app = require('express')();

app.get('/index.js', function(req, res) {
  res.sendFile(__dirname + '/index.js');
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

// Puts it on the correct port
app.listen(process.env.PORT || 3000);
