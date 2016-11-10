//npm intall -g nodemon
//nodemon app.js 
//npm install --save express

var app = require('express')();
var http = require('http').Server(app); //use them together

var requestHandler = function(req, res){ //has set of parameters
	// res.send('<h1>I, the server, have totally received your message</h1>')
	res.sendFile(__dirname + '/public/index.html'); //root directory
	
}
var christmasRequestHandler = function(req, res){
	res.sendFile(__dirname + '/public/christmas.html');
}
var halloweenRequestHandler = function(req, res){
	res.sendFile(__dirname + '/public/halloween.html');
}

app.get('/', requestHandler);
app.get('/christmas', christmasRequestHandler);
app.get('/halloween', halloweenRequestHandler);

var port = 9000;

var serverUpCallback = function(){
	console.log("server is running at port " + port);
}


http.listen(port, serverUpCallback)

