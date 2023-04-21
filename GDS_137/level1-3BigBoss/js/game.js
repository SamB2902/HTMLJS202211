var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var interval = 1000/60;
var timer = setInterval(animate, interval);
var score = 0;
var frictionX = .85;	
var frictionY = .97;

var paddle = new GameObject();
    paddle.color = "#00ffff";
    paddle.x = canvas.width/2;
    paddle.y = 550;
    paddle.width = 250;
    paddle.height = 40;
    paddle.force = 2;

var ball = new GameObject();
    ball.width = 80;
    ball.height = ball.width;
    ball.color = "#ff00ff"
    ball.vx = 5;
    ball.vy = 5;

function animate()
{
    context.clearRect(0,0,canvas.width, canvas.height);	
    
    ball.vy *= frictionY;
    paddle.vx *= frictionX;
    ball.vy += 1;
    

   ball.move();
   paddle.move();	
    
    if(ball.x < 0 + ball.width/2)
    {
        ball.x = 0 + ball.width/2;
        ball.vx = -ball.vx*.67;
    }
    if(ball.x > 920 + ball.width/2)
    {
        ball.x = 920 + ball.width/2;
        ball.vx = -ball.vx*.67;
    }
    if(ball.y < 0 + ball.height/2)
    {
        ball.y = 0 + ball.height/2
        ball.vy = -ball.vy*.67;
    }
    if(ball.y > 520 + ball.height/2)
    {
        ball.y = 520 + ball.height/2;
        ball.vy = -ball.vy*.67;
        score = 0
    }
    if(paddle.x < 0 + paddle.width/2)
    {
        paddle.x = 0 + paddle.width/2;
        paddle.vx = -paddle.vx
    }
    if(paddle.x > 750 + paddle.width/2)
    {
        paddle.x = 750 + paddle.width/2;
        paddle.vx = -paddle.vx
    }
    if(ball.hitTestObject(paddle))
    {
        if(ball.x < paddle.x - paddle.width/6)
        {ball.vx = -ball.force}

        if(ball.x < paddle.x - paddle.width/3)
        {ball.vx = -ball.force*5}

         if(ball.x > paddle.x - paddle.width/6)
        {ball.vx = ball.force}
        
        if(ball.x > paddle.x - paddle.width/3)
        {ball.vx = ball.force*5} 
        
        ball.y = paddle.y - paddle.height/2 - ball.height/2;
        ball.vy = -35;
        score++
    }

    if(a)
    {
        paddle.x += -2;
        paddle.vx += paddle.ax * -paddle.force
    }
    if(d)
    {
        paddle.x += 2 
        paddle.vx += paddle.ax * paddle.force
    }
    
    context.save();
    context.lineWidth = 1;
    context.strokeStyle = "#000000";
    context.beginPath();
    context.moveTo(paddle.x,paddle.y);
    context.lineTo(ball.x,ball.y);
    context.closePath();
    context.stroke();
	context.restore();

    context.font = "16px Arial Black";
    context.fillStyle  = "#555555";
    context.fillText("Score: "+score,80,25);

    paddle.drawRect();
    ball.drawCircle()
}