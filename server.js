/* Snake Game based on the following link
 * https://github.com/dhoelzgen/snake/blob/socketio/server.js
 */
console.log('Starting Server');
var http = require('http');
var fs = require('fs');
var url = require('url');
var mu = require('mustache');
var util = require('util');
//var cfg = require('./config.json');

mu.root = __dirname; //+ '/templates';


{
  name: 'darpan'
};

var app = http.createServer(function(req, res) {

  res.writeHead(200, {
    'Cache-Control': 'no-cache',
    'Access-Control-Allow-Origin': '*'
  });

  var path = url.parse(req.url).pathname;
  switch (path) {
    case '/':
    case '/index.htm':
    case '/client.js':
    case '/jquery-1.11.3.js':
    case '/snake.js':
      if (path === '/') path = 'index.htm';
      var stream = mu.render(fs.readFileSync('./'+path,'utf8'), {
        name: "john"
      });
      res.write(stream);


  }
  res.end();

});
app.listen(3000);
var io = require('socket.io')(app);

//socket=io.listen(app);
function Clients() {};
Clients.prototype = {
  list: [],
  add: function(socket) {
    this.list.push(socket);
    socket.emit('broadcast', {
      message: 'Welcome to the most interesting chat room on earth!'
    });
  },
  remove: function(socket) {
    this.list.pop(socket);
  },
  broadcast: function(msg) {

  },
}
var clients = new Clients();

io.on("connection", function(socket) {
  clients.add(socket);
  console.log("connected");
  socket.on("message", function(data) {
    //	console.log(data.message +);
  });

});
