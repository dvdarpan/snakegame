/**
 * New node file
 */
/*var sun = new Image();
var moon = new Image();
var earth = new Image();
function init(){
  sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
  window.requestAnimationFrame(draw);
}

function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');

  ctx.globalCompositeOperation = 'destination-over';
  ctx.clearRect(0,0,300,300); // clear canvas

  ctx.fillStyle = 'rgba(0,0,0,0.4)';
  ctx.strokeStyle = 'rgba(0,153,255,0.4)';
  ctx.save();
  ctx.translate(150,150);

  // Earth
  var time = new Date();
  ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
  ctx.translate(105,0);
  ctx.fillRect(0,-12,50,24); // Shadow
  ctx.drawImage(earth,-12,-12);

  // Moon
  ctx.save();
  ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
  ctx.translate(0,28.5);
  ctx.drawImage(moon,-3.5,-3.5);
  ctx.restore();

  ctx.restore();
  
  ctx.beginPath();
  ctx.arc(150,150,105,0,Math.PI*2,false); // Earth orbit
  ctx.stroke();
 
  ctx.drawImage(sun,0,0,300,300);

  window.requestAnimationFrame(draw);
}

init();*/
/*
$(document).ready(function() {
	
	var context = document.getElementById('RainbowStrokeStyleSample1').getContext('2d');
	  // 1. set strokeStyle to a linear gradient value
	  var rainbowGradient = context.createLinearGradient (0, 60, 320, 60);
	  rainbowGradient.addColorStop (0,    'red');
	  rainbowGradient.addColorStop (0.25, 'yellow');
	  rainbowGradient.addColorStop (0.5,  'green');
	  rainbowGradient.addColorStop (0.75, 'blue');
	  rainbowGradient.addColorStop (1,    'violet');
	  context.strokeStyle = rainbowGradient;
	  // 2. draw a kind of half cirlce on the left            
	  context.beginPath();
	  context.moveTo (60, 10);
	  context.lineTo (60, 110);
	  context.bezierCurveTo (0, 110, 0, 10, 60, 10);
	  context.stroke();
	  context.closePath();
	  // 3. draw a rectangle on the right top
	  context.strokeRect (80, 10, 230, 30);
	  // 4. set the text font and write 'Hello!' on the right bottom of the canvas
	  context.font = '60pt sans-serif';
	  context.strokeText ('Hello!', 80, 110); 
	  
	 
	  
});
var socket = io('http://localhost:3000/');
//$('#clients').text("New Value");
socket.on('message', function (data) { 
	 
	  console.log("return message block");
	  $('#clients').text(data.message);
	}); 
var msgcount=0;
function hide (){
	socket.emit('message', {message: msgcount});
	msgcount++;
	
}
*/