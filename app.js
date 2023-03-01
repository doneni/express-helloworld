// dependency modules
var express = require('express');

var http = require('http');
var path = require('path');

// setting
// # express.js ��ü �ʱ�ȭ
var app = express();

// env vars
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//routes
app.all('*', function(eq,res) {
    res.render('index', {msg: 'Welcome to the Practical Node.js!'})
})

//server
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
})