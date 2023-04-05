//Declare my variables

var canvas= document.getElementById("canvas");
var context = canvas.getContext("2d");
var timer= setInterval(animate, interval);
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
	
	//Instantiate the Player
	player = new Player();
	player.vx = -1;
	player.vy = -1;
	
function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	//Move the Player
	player.move();

	//collision
	if(player.x < 0 + player.width/2)
	{
		player.x = 0 + player.width/2;
		player.vx = -player.vx;
	}
	if(player.x > 925 + player.width/2)
	{
		player.x = 925 + player.width/2;
		player.vx = -player.vx;
	}

	if(player.y < 0 + player.height/2)
	{
		player.y = 0 + player.height/2;
		player.vy = -player.vy;
	}
	if(player.y > 705 + player.height/2)
	{
		player.y = 705 + player.height/2;
		player.vy = -player.vy;
	}

	//Update the Screen
	player.draw();
}
