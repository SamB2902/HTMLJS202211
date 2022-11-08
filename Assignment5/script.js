var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "yellow";
ctx.strokeStyle = "black";
ctx.lineWidth = "5";

ctx.fillRect(85,301,100,100);
ctx.strokeRect(85,301,100,100);

ctx.fillStyle = "none";
ctx.strokeStyle = "rgb(255,0,0)";
ctx.lineWidth = "5";

ctx.beginPath();
ctx.moveTo(85,682);
ctx.lineTo(278,550);
ctx.stroke();

ctx.fillStyle = "#ffff00";
ctx.strokeStyle = "red"; 
ctx.lineWidth = "5";

ctx.beginPath();
ctx.arc(385,441,66,0,2*Math.PI,true)
ctx.fill();
ctx.stroke();

ctx.fillStyle = "#ff00ff";
ctx.strokeStyle = "#00ffff";
ctx.lineWidth = "5";

ctx.beginPath();
ctx.moveTo(557,308);
ctx.lineTo(667,284);
ctx.lineTo(725,380);
ctx.lineTo(650,464);
ctx.lineTo(548,420);
ctx.closePath();
ctx.fill();
ctx.stroke();

ctx.fillStyle = "#ffff00";
ctx.strokeStyle = "rgb(32,32,32)";
ctx.lineWidth = "5";

ctx.beginPath();
ctx.moveTo(635,497);
ctx.lineTo(668,553);
ctx.lineTo(733,567);
ctx.lineTo(688,615);
ctx.lineTo(696,680);
ctx.lineTo(636,653);
ctx.lineTo(575,680);
ctx.lineTo(583,615);
ctx.lineTo(538,567);
ctx.lineTo(603,553);
ctx.closePath();
ctx.fill();
ctx.stroke();