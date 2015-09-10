/* Snake Game based on the following link
 * https://github.com/dhoelzgen/snake/blob/socketio/server.js
 */

var http = require('http');
var fs = require('fs');
var url = require('url');
var io = require('socket.io');
//var cfg = require('./config.json');
var ser =http.createServer(function(req, res) {
	res.writeHead(200, {'Cache-Control': 'no-cache','Access-Control-Allow-Origin': '*'});
  
  var path =url.parse(req.url).pathname;
  switch (path) {
  case '/':
  case '/index.htm':  
  case '/client.js': 
  case '/jquery-1.11.3.js':
  case '/snake.js':
	  if(path==='/') path ='/index.htm';
	  res.write(fs.readFileSync(__dirname + path));
  }
  res.end();
});
ser.listen(3000);
socket=io.listen(ser);
socket.on("connection", function(socket) {
	console.log("connected"); 
	socket.emit( 'message',{ message: 'Welcome to the most interesting chat room on earth!' }); 
	} ); 
socket.on("message", function(data) { 
	console.log(data.message);
});

