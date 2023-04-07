//Declare my variables

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var timer = setInterval(animate, interval);
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player1;

//This is used to stop the player from moving through obstacles.
//var prevX;

	
	//Instantiate the Player
	var player1 = new GameObject();
	player1.x = 10;
	player1.width = 20;
	player1.height = player1.width*4;
	player1.color = "blue";
	
	
function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	

	if(w)
	{
		player1.y += -2
	}
	if(s)
	{player1.y += 2}

player1.drawRect();
}

