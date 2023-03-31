//Declare my variables

var canvas= document.getElementById("canvas");
var context = canvas.getContext("2d");
var timer= setInterval(animate, interval);
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
	
	//Instantiate the Player
	player = new Player();
	player.vx = 2;
	
function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move the Player
	player.move();

	//Update the Screen
	player.draw();
}
