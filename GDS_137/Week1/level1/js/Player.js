// JavaScript Document
function Player()
{
	//Player's location
	this.x = canvas.width/2;
	this.y = canvas.height/2;
	
	//Player's dimensions
	this.width = 100;
	this.height = 100;
	
	//Player's velocity or speed on each axis
	this.vx = 0;
	this.vy = 0;
	
	//Player's color
	this.color = "#ff0000";
	
	//This draws the player to the screen
	this.draw = function()
	{
		context.save();
			context.fillStyle = this.color;
			context.translate(this.x, this.y);
			context.beginPath();
			context.arc(0,0,this.width/2,0,360*Math.PI/180,true);
			context.closePath();
			context.fill();
		context.restore();
		
	}	
	
	//This changes the player's position
	this.move = function()
	{
		this.x += this.vx;
		this.y += this.vy;
	}
}
