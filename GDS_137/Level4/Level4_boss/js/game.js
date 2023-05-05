var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var interval = 1000/60;
var timer = setInterval(animate, interval);
var fX = .85;
var fY = .97;
var gravity = 1;
var jumpCount = 1;

enemy = new GameObject({color:"#990000", height:50, width:50, x:canvas.width+25, y:canvas.height-25, vx:-3});
player = new GameObject({color:"#0066ff", height:50, width:50, y:675});
health = new GameObject({width:200, height:36, color:"#00ff00", x:10, y:12});

function animate(){
    context.clearRect(0,0,canvas.width, canvas.height);	
    
    player.move();
    enemy.move(); 
    player.vx *= fX;
	player.vy *= fY;
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
    if (player.y > 630 + player.height/2 && jumpCount >= 2)
    {
        player.y = 630 + player.height/2;
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
       
        context.save();
        context.lineWidth = 1;
        context.strokeStyle = "black";
        context.beginPath();
        context.moveTo(9,11);
        context.lineTo(211,11);
        context.lineTo(211,49);
        context.lineTo(9,49);
        context.lineTo(9,11);
        context.closePath();
        context.stroke();
        context.restore();
    
    if(w && player.canJump && player.vy ==0 && jumpCount == 1)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
        jumpCount++
        
	}
    if(w && player.canJump && player.vy ==0 && jumpCount >= 2)
	{
		player.canJump =false;
		player.vy += player.jumpHeight*1.5;
        jumpCount = 1 
	}

    if(a)
	{player.x += -2;}
	if(d)
	{player.x += 2;}
    
    enemy.drawCircle();
    player.drawRect();
    health.drawRect(0,0);
}