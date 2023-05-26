var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var interval = 1000 / 60;
var timer = setInterval(animate, interval);
var fX = .85;
var fY = .97;
var gravity = 1;
var amount = 3;
var enemy = [];
var powerUpTimer;
var stay = false;

player = new GameObject({ color: "#0066ff", height: 60, width: 60, y: 670 });
health = new GameObject({ width: 200, height: 35, color: "#00ff00", x: 10, y: 12 });
healthStroke = new GameObject({ x: 9, y: 11, color: "black", height: 37, width: 202 });
platform = new GameObject({ color: "black", width: canvas.width, height: 1, y: 481 });
powerUp = new GameObject({ color: "#00FFFF", height: 20, width: 30, x: 850 });
weapon = new GameObject({width: 30, height: 30,x:80, y:585, color:"#473384"});

for (var i = 0; i < amount; i++) {
    enemy[i] = new GameObject();
    enemy[i].color = "#990000";
    enemy[i].height = 100;
    enemy[i].width = 50;
    enemy[i].x = rand(0,1000);
    enemy[i].y = canvas.height - 25;
    enemy[i].vx = rand(-3,-5);
    enemy[i].angle = -90;
}

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    player.move();
    weapon.move();
    player.vx *= fX;
    player.vy *= fY;
    player.vy += gravity;
    
    //walls
    if (player.x < 0 + player.width / 2) 
    {
        player.x = 0 + player.width / 2;
        player.vx = -player.vx;
    }
    if (player.x > 940 + player.width / 2) 
    {
        player.x = 940 + player.width / 2;
        player.vx = -player.vx;
    }
    if (player.y > 640 + player.height / 2) 
    {
        player.y = 640 + player.height / 2;
        player.vy = 0;
        player.canJump = true;
    }
    if(weapon.y > 670 + weapon.height/2)
    {
        weapon.y = 670 + weapon.height/2
    }
   

    for (var i = 0; i < enemy.length; i++) 
    {
        enemy[i].drawTriangle();
        enemy[i].move(); 
        
        if (enemy[i].x < 0 + enemy[i].width / 2) 
        {
            enemy[i].x = 0 + enemy[i].width / 2;
            enemy[i].vx = -enemy[i].vx;
        }

        if (enemy[i].x > 1100 + enemy[i].width / 2) 
        {
            enemy[i].x = 1100 + enemy[i].width / 2;
            enemy[i].vx = -enemy[i].vx;
        }

        if (enemy[i].hitTestObject(player) && health.width > 0) 
        {
            health.width--;
        }

        if (health.width == 0) {
            enemy[i].vx = 0;
            context.font = "60px Arial Black";
            context.fillStyle = "#000000";
            context.textAlign = "center";
            context.fillText("GAME OVER", canvas.width / 2, canvas.height / 2)
        }

        if(enemy[i].hitTestObject(weapon))
        {
            enemy[i].x =  1050;
            enemy[i].vx = rand(-3,-5);
        }
    }  
    if(stay == true)
    {
        weapon.y = player.y;
    }
    
    if(player.hitTestObject(weapon))
    { 
        stay = true;
        weapon.x = player.x+10;
        console.log(stay);
        
    }

   if (player.hitTestObject(powerUp)) 
   {
        powerUp.x = 1050;

        if (health.width < 200) 
        {
            health.width = health.width + 25

            if (health.width > 200) 
            {
                health.width = 200
            }
        }
        if(powerUp.x == 1050)
        {
            setTimeout(getPowerUp, 2000);
        }
    }

    //controls
    if (w && player.canJump && player.vy == 0) 
    {
        player.canJump = false;
        player.vy += player.jumpHeight;
    }
    if (a) 
    { 
        player.x += -2; 
    }
    if (d) 
    { 
        player.x += 2; 
    }
    if (platform.hitTestPoint(player.bottom()) && w) 
    {
        player.vy += player.jumpHeight;
        player.canJump = false;
    }
    if(space)
    {
       weapon.y ++;
       weapon.vy++;
       stay = false;
       
    }
    

    player.drawRect();
    health.drawRect(0, 0);
    healthStroke.drawStrokeRect(0, 0);
    powerUp.drawCircle();
    weapon.drawRect();
}

function getPowerUp()
{
   powerUp.x = 850  
}