var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var interval = 1000/60;
var timer = setInterval(animate, interval);
var fX = .85;
var fY = .97;
var gravity = 1;

enemy = new GameObject();
enemy.color = "#990000";
enemy.height = 50;
enemy.width = enemy.height;
enemy.x = canvas.width+25;
enemy.y = canvas.height-25;
enemy.vx = -3;

player = new GameObject();
player.color = "#0066ff";
player.height = 50;
player.width = player.height;
player.y = 675;

health = new GameObject()
health.width = 200;
health.height = 35;
health.color = "#00ff00";
health.x = 110;
health.y = 30;


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
        player.y = 650 + player.height/2
        player.vy = 0;
		player.canJump = true;}
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
    if(health.x < 10 + health.width/2)
    {
        health.x = 10 + health.width/2
    }
 
    if (enemy.hitTestObject(player) && health.width > 0)
        {
            health.width--; 
        }
    
    if(health.width == 0)
        {
            enemy.vx = 0;
            context.font = "60px Arial Black";
            context.fillStyle = "#000000";
            context.textAlign = "center";
            context.fillText("GAME OVER", canvas.width/2,canvas.height/2)
        }
       
    
        context.save();
        context.lineWidth = 1;
        context.strokeStyle = "#000000";
        context.beginPath();
        context.moveTo(9,11);
        context.lineTo(211,11);
        context.lineTo(211,49);
        context.lineTo(9,49);
        context.lineTo(9,11);
        context.closePath();
        context.stroke();
        context.restore();
        
        
    
    if(w && player.canJump && player.vy ==0)
	{
		player.canJump = false;
		player.vy += player.jumpHeight;
	}

	if(a)
	{
		player.x += -2;
	}
	if(d)
	{
		player.x += 2 
	}
    
    enemy.drawCircle();
    player.drawRect();
    health.drawRect();
}