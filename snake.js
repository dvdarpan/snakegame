/**
 * New node file Snake Object
 */

function Snake() {
};
Snake.prototype = {
	Scale : function(x, y, size, color) {

		var color = color;
		ctx.fillStyle = color;
		ctx.fillRect(x, y,size,size);
		ctx.fill();
	},
	animate : function(fn) {
		window.requestAnimationFrame(fn);
	},
	
	body : function(length,scaleSize,color,y,time) {
		for(var i=0;i<=length;i++){
			this.Scale(i*scaleSize+time,y,scaleSize-1,color);
		}
	}
};
$(document).ready(function() {
	ctx = document.getElementById("canvas1").getContext('2d');
	user =["darpan"];
	user.forEach(createSnake);
	
});

function createSnake(currentValue){
	var me = new Snake();
	var start =null;
	var ran =Math.random()*500;
	var meNow = function(timestamp) {
		if (!start) start = timestamp;
		  var progress = timestamp - start;
		ctx.clearRect(0,0,500,500);
		me.body(4,30,'blue',ran,progress/20);
		window.requestAnimationFrame(meNow);
	};
	me.animate(meNow);
}