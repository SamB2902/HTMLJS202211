var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var interval = 1000/60;
var timer = setInterval(animate, interval);
var fX = .85;
var fY = .97;
var gravity = 1;

enemy = new GameObject({color:"#990000", height:100, width:50, x:canvas.width+25, y:canvas.height-25, vx:-3, angle:-90});
player = new GameObject({color:"#0066ff", height:50, width:50, y:675});
health = new GameObject({width:200, height:35, color:"#00ff00", x:10, y:12});
healthStroke = new GameObject({x:9, y:11, color:"black", height:37, width: 202});
platform = new GameObject({color: "black", width: canvas.width, height:1, y: 481});
powerUp = new GameObject({color:"#00FFFF", height:20, width:30, x:850})

function animate(){
    context.clearRect(0,0,canvas.width, canvas.height);	
    
    player.move();
    enemy.move(); 
    player.vx *= fX;
	player.vy *= fY;;;
    player.vy += gravity;
    
    if(player.x < 0 + player.width/2)
    {
        player.x = 0 + player.width/2;
        player.vx = -player.vx;
    }
    if(player.x > 950 + player.width/2)
    {
        player.x = 950 + player.width/2;
        player.vx = -player.vx;
    }
    if (player.y > 650 + player.height/2)
    {
        player.y = 650 + player.height/2;
        player.vy = 0;
        player.canJump = true;
    }
    if(enemy.x < 0 + enemy.width/2)
    {
        enemy.x = 0 + enemy.width/2;
        enemy.vx = -enemy.vx;
    }
    if(enemy.x > 950 + enemy.width/2)
    {
        enemy.x = 950 + enemy.width/2;
        enemy.vx = -enemy.vx;
    }
    if (enemy.hitTestObject(player) && health.width > 0){health.width--;}
    if(health.width == 0)
        {enemy.vx = 0;
         context.font = "60px Arial Black";
         context.fillStyle = "#000000";
         context.textAlign = "center";
         context.fillText("GAME OVER", canvas.width/2,canvas.height/2)}

         if(player.hitTestObject(powerUp))
         {
            powerUp.x = 1500;
            if(health.width < 200)
            {health.width = health.width + 25}
         }
            
    
    if(w && player.canJump && player.vy ==0)
	{
		player.canJump = false;
		player.vy += player.jumpHeight; 
	}
    if(a)
	{player.x += -2;}
	if(d)
	{player.x += 2;} 
    if(platform.hitTestPoint(player.bottom()) && w)
    {
        player.vy += player.jumpHeight;
        player.canJump = false; 
    } 
    
    enemy.drawTriangle();
    player.drawRect();
    health.drawRect(0,0);
    healthStroke.drawStrokeRect(0,0);
    powerUp.drawCircle();
}