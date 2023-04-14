//Declare my variables

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var timer = setInterval(animate, interval);
//1000 ms or 1 second / FPS
var interval = 1000/60;
var ball;
var paddle1;
var p1Wins = 0;
var p2Wins = 0;



//This is used to stop the player from moving through obstacles.

	//Instantiate the ball
	ball = new GameObject();
	ball.vx = -2;
	ball.vy = -2;	
	ball.width = 50;
	ball.height = ball.width;
	
	//Instantiate Player 1
	var paddle1 = new GameObject();
	paddle1.x = 5;
	paddle1.width = 10;
	paddle1.height = 150;
	paddle1.color = "blue";

	//Instantiate Player 2
	var paddle2 = new GameObject();
	paddle2.x = 1019;
	paddle2.width = 10;
	paddle2.height = 150;
	paddle2.color = "green";
	
function animate()
{
	//Erase the Screen
	context.clearRect(0,0,canvas.width, canvas.height);	

	paddle1.move();
	paddle2.move();
	ball.move();

	
	
		//ball collision
		if(ball.x < 0)
		{
			ball.x = canvas.width/2;
			p2Wins++;
			//console.log ("p2Wins =",p2Wins) 
		}
		if(ball.x > 1024)
		{
			ball.x = canvas.width/2;
			p1Wins++;
			//console.log ("p1Wins =",p1Wins)
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
		
		if (ball.hitTestObject(paddle2))
		{
		if(ball.y < paddle2.y - paddle2.height/6)
		{
			ball.vy = -3;
		}
		if(ball.y > paddle2.y + paddle2.height/6)
		{
			ball.vy = 3;
		}
			ball.x = paddle2.x - paddle2.width/2 - ball.width/2;
			ball.vx = -ball.vx;
			ball.color =  "#ff00ff";
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
	//player 2 collision
	if(paddle2.y < 0 + paddle2.height/2)
	{
		paddle2.y = 0 + paddle2.height/2;
		paddle2.vy = -paddle2.vy;
	}
	if(paddle2.y > 650 + paddle2.height/2)
	{
		paddle2.y = 650 + paddle2.height/2;
		paddle2.vy = -paddle2.vy;
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
	//player 2 controls
	if(arrowUp)
	{
		paddle2.y += -2
	}
	if(arrowDown)
	{
		paddle2.y += 2
	}
	context.font = "20px Arial";
	context.textAlign = "center";
	context.fillText("Player 1 | Player 2",canvas.width/2,20);
	context.font = "15px Arial";
	context.fillText(p2Wins+"-"+p1Wins, canvas.width/2, 40);
	
paddle1.drawRect();
paddle2.drawRect();
ball.drawCircle();
}

