//Declare my variables

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var timer = setInterval(animate, interval);
//1000 ms or 1 second / FPS
var interval = 1000/60;
var ball;
var paddle1;



//This is used to stop the player from moving through obstacles.

	//Instantiate the Player
	ball = new GameObject();
	ball.vx = -3;
	ball.vy = 0;	
	ball.width = 50;
	ball.height = ball.width;
	
//Instantiate Player 1
	var paddle1 = new GameObject();
	paddle1.x = 5;
	paddle1.width = 10;
	paddle1.height = 150;
	paddle1.color = "blue";
	
	
function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	

	paddle1.move();
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
		if(ball.hitTestObject(paddle1))
		{
		if(ball.y < paddle1.y - paddle1.height/6)
		{
			ball.vy = -3;
		}
		if(ball.y > paddle1.y + paddle1.height/6)
		{
			ball.vy = 3;
		}
		ball.x = paddle1.x + paddle1.width/2 + ball.width/2;
		ball.vx = -ball.vx;
		ball.color =  "#ff8000";
		}
	
	//player 1 collision
	if(paddle1.y < 0 + paddle1.height/2)
	{
		paddle1.y = 0 + paddle1.height/2;
		paddle1.vy = -paddle1.vy;
	}
	if(paddle1.y > 650 + paddle1.height/2)
	{
		paddle1.y = 650 + paddle1.height/2;
		paddle1.vy = -paddle1.vy;
	}
	//player 1 controls
	if(w)
	{
		paddle1.y += -2
	}
	if(s)
	{
		paddle1.y += 2
	}

	
paddle1.drawRect();
ball.drawCircle();
}

