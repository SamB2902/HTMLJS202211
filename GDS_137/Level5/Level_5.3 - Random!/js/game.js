	//----------------------------------------------------------Instructions------------------------------------------------
	//---------------------In this assignment you will draw multiple squares on the screen in random locations--------------
	//---------------------First you will create an array of particles. Then you will move and draw them.-------------------
	//---------------------Follow the comments below to complete this assignment--------------------------------------------

var canvas= document.getElementById("canvas");
var context = canvas.getContext("2d");
var timer= setInterval(animate, interval);
var interval= 1000/60;
var player;
var amount = 12;

var particles = [];

for(var i = 0; i < amount; i++)
{
	particles[i] = new GameObject();
	particles[i].x = Math.random() * canvas.width;
	particles[i].y = Math.random() * canvas.height;
}

	//----------------------------------------------Step 1: Create particles------------------------------------------------
	//Declare an "amount" variable and set it to 12
	
	//Create an array called "particles" to store the particles
	
	//Create a for loop that loops the number of times specified by the "amount" variable

		//Within the for loop do the following: 
		//	1.Instantiate new GameObject and store it in each index of the particles array
		//	2.set each particle's x property to a random number from 0 - the canvas.width 
		//	3.set each particle's y property to a random number from 0 - the canvas.height
	
	//---------------------------------------------------------------------------------------------------------------
	
	var fX = .85;
	var fY = .97;
	
	var gravity = 1;


function animate()
{
	
	context.clearRect(0,0,canvas.width, canvas.height);	
	
	for(var i = 0;i< particles.length;i++)
	{
		particles[i].drawRect();
	}
	//--------------------------------------Step 2: Draw Particles---------------------------------------------------------
	//DrawRect()for each particle using a for loop.
	//The for loop should use the particles.length for its limit
	
	
	//----------------------------------------------------------------------------------------------------------------------
}

//-----------------------------------------------FINAL STEP: View Particles-------------------------------------------------
//Refresh your program a few times to see the particles spawn in random locations!