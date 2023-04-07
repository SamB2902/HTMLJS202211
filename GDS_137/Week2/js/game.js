//Declare my variables

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var timer = setInterval(animate, interval);
//1000 ms or 1 second / FPS
var interval = 1000/60;
var player;
var player1;

//This is used to stop the player from moving through obstacles.
//var prevX;

	//Instantiate the Player
	ball = new GameObject();
	ball.vx = -2;
	ball.vy = 0;	
	ball.width = 50;
	ball.height = ball.width;
	
//Instantiate Player 1
	var player1 = new GameObject();
	player1.x = 5;
	player1.width = 10;
	player1.height = 150;
	player1.color = "blue";
	
	
function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	

	player1.move();
	ball.move();
	
		//ball collision
		if(ball.x < 0)
		{
			ball.x = canvas.width/2;
		}
		if(ball.x > 974 + ball.width/2)
		{
			ball.x = 974 + ball.width/2;
			ball.vx = -ball.vx;
			ball.color =  "#ff00ff";
		}
	
		if(ball.y < 0 + ball.height/2)
		{
			ball.y = 0 + ball.height/2;
			ball.vy = -ball.vy;
			ball.color =  "#00ff00";
		}
		if(ball.y > 750 + ball.height/2)
		{
			ball.y = 750 + ball.height/2;
			ball.vy = -ball.vy;
			ball.color =  "#00ffff";
		}
		if(ball.hitTestObject(player1))
	{
		ball.x = player1.x + player1.width/2 + ball.width/2;
		ball.vx = -ball.vx;
		ball.color =  "#ff8000";
	}
	
	//player 1 collision
	if(player1.y < 0 + player1.height/2)
	{
		player1.y = 0 + player1.height/2;
		player1.vy = -player1.vy;
	}
	if(player1.y > 650 + player1.height/2)
	{
		player1.y = 650 + player1.height/2;
		player1.vy = -player1.vy;
	}
	//player 1 controls
	if(w)
	{
		player1.y += -2
	}
	if(s)
	{
		player1.y += 2
	}

	
player1.drawRect();
ball.drawCircle();
}

