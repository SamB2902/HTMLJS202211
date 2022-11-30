var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var timer = requestAnimationFrame(main);

//astroid variables
var numAstroids = 20;
var astroids = [];



//Astroid Class
function Astroid(){
    //propreties to draw the astroid
    this.radius = randomRange(15,2);
    this.x = randomRange(canvas.width - this.radius,this.radius);
    this.y = randomRange(canvas.height - this.radius,this.radius)- canvas.height;
    this.vy = randomRange(10,5);
    this.color = "white";

    //methods (funtions) to draw astroids
    this.drawAstroid = function(){
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = this.color
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2 ,true);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    }
}

//for loop to instantiate astroids for game
for(var i = 0; i<numAstroids; i++){
    astroids[i] = new Astroid();
}

function main(){
    //clear the canvas
    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(var i = 0;i<astroids.length;i++){
        if(astroids[i].y > canvas.height + astroids[i].radius){
            astroids[i].y = randomRange(canvas.height - astroids[i].radius,astroids[i].radius) - canvas.height;
            astroids[i].x = randomRange(canvas.width - astroids[i].radius,astroids[i].radius);
        }
        astroids[i].y += astroids[i].vy;
        astroids[i].drawAstroid();
    }
    //refresh the screen
    timer = requestAnimationFrame(main);
}

//utility function
function randomRange(high,low){
    return Math.random() * (high-low) + low;
}