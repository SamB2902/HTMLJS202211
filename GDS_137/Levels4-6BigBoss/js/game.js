
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var interval = 1000/60;
var timer = setInterval(animate, interval);
var score = 0;
var amount = 5
var items = [];
var hazards = [];
var colorTimer;

var player = new GameObject({width:50, height:50, y:750, color:"yellow"});
for(var i = 0; i < amount; i++)
{
    items[i] = new GameObject();
    items[i].x = Math.random()*canvas.width;
    items[i].y = Math.random()-canvas.height/3;
    items[i].width = 25;
    items[i].height = items[i].width;
    items[i].vy = rand(2,6);
    items[i].color = "#0fafff";

    hazards[i] = new GameObject();
    hazards[i].x = Math.random()*canvas.width;
    hazards[i].y = Math.random()-canvas.height/3;
    hazards[i].width = 25;
    hazards[i].height = items[i].width;
    hazards[i].vy = rand(2,6);
    hazards[i].color = "#d85977";
}

function animate()
{
	context.clearRect(0,0,canvas.width, canvas.height);

if(player.x < 0 + player.width/2)
{
    player.x = 0 + player.width/2;
    player.vx = -player.vx;
}
if (player.x > 750 + player.width/2)
{
    player.x = 750 + player.width/2;
    player.vx = -player.vx;
}

for(var i = 0; i < items.length; i++)
    {
        items[i].drawRect();
        items[i].move();
        
        if(items[i].y > canvas.height + items[i].height)
        {
            items[i].x = Math.random()*canvas.width;
            items[i].y = Math.random()-canvas.height/3;
            items[i].vy = rand(2,6);
        }
        if(player.hitTestObject(items[i]))
        {
            player.color = "#00ff00"
            clearTimeout(colorTimer);
            colorTimer = setTimeout(lose,500);
            items[i].x = Math.random()*canvas.width;
            items[i].y = Math.random()-canvas.height/3;
            items[i].vy = rand(2,6);
            score++
        }
    }
for(var i = 0; i < hazards.length; i++)
    {
        hazards[i].drawCircle();
        hazards[i].move();

        if(hazards[i].y > canvas.height + hazards[i].height)
        {
            hazards[i].x = Math.random()*canvas.width;
            hazards[i].y = Math.random()-canvas.height/3;
            hazards[i].vy = rand(2,6);
        }
   
        if(hazards[i].hitTestObject(player))
        {
            player.color = "red"
            score = 0;
            for(j = 0; j < amount; j++)
            {
                hazards[j].x = Math.random()*canvas.width;
                hazards[j].y = Math.random()-canvas.height/3;
                hazards[j].vy = rand(2,6);
                items[j].x = Math.random()*canvas.width;
                items[j].y = Math.random()-canvas.height/3;
                items[j].vy = rand(2,6);
            }
            clearTimeout(colorTimer);
            colorTimer = setTimeout(lose,500);
        }   
    }
    


    if(a)
    {
        player.x += -2;
    }
    if(d)
    {
        player.x += 2;
    }
    context.font = " Bold 30px Arial ";
    context.fillStyle = "black";
    context.fillText("Score: "+score,40,60);

    player.drawRect();
}

function lose()
{
  player.color = "yellow";  
}

