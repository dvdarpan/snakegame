/**
 * New node file Snake Object
 */


function Snake(length, scaleSize, color, speed, ctx) {
  this.length = length;
  this.scaleSize = scaleSize;
  this.color = color;
  this.speed = speed;
  this.ctx = ctx;
};
Snake.prototype = {
  length: '',
  scaleSize: '',
  color: '',
  Scale: function(x, y) {

    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(x, y, this.scaleSize - 1, this.scaleSize);
    this.ctx.fill();
  },
  animate: function(fn) {
    window.requestAnimationFrame(fn);

  },

  body: function(x, y) {
    for (var i = 0; i <= this.length; i++) {
      if ((x + (i * this.scaleSize)) < this.ctx.canvas.width) {
        this.Scale(x + (i * this.scaleSize), y);
      } else {
        this.Scale(this.ctx.canvas.width - (x + (i * this.scaleSize)), y);

      }
    }
  }
};

function createSnake(canvas) {
  var ctx = canvas.getContext('2d');
  var snake = new Snake(4, 30, 'blue', 5, ctx);
  var start = null;
  var y = Math.random() * 500;
  var step = function(timestamp) {
    if (!start) start = timestamp;
    var newX = (timestamp - start) / snake.speed;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
     if (newX > canvas.width) {
       start = timestamp;
     };
    snake.body(newX, y);
    //if ((snake.length + 5 * snake.scaleSize + newX) < canvas.width) {
    snake.animate(step);

  };
  snake.animate(step);
}

function resize_canvas(canvas) {

  if (canvas.width < window.innerWidth) {
    canvas.width = window.innerWidth;
  }
  if (canvas.height < window.innerHeight) {
    canvas.height = window.innerHeight;
  }
  createSnake(canvas);

}

$(document).ready(function() {
  canvas = document.getElementById("canvas1");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  user = ["darpan"];
  //user.forEach(createSnake(canvas));
  createSnake(canvas);
});
var socket = io();
socket.on('broadcast', function(data) {
  $('#message').text(data.message);
});

{
  name: 'darpan'
};
