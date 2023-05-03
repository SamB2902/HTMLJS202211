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
enemy.vx = -2;

player = new GameObject();
player.color = "#0066ff";
player.height = 50;
player.width = player.height;
player.y = 675;
//player.vx = 0;


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

    while(health.width = 200)
    { 
        if (enemy.hitTestObject(player))
        {
            health.width = 175;
        }
    }
   
    
    
    
    enemy.drawCircle();
    player.drawRect();
    health.drawRect();
}