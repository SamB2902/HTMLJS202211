var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");

var mnprz = new Image();

mnprz.src = "images/mnprz.jpg"

mnprz.onload = function(){
    draw(mnprz,mnprz)
}

document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);

var gameOver = true;
var Results = "Select Monkey, Ninja, Pirate, Robot, Zombie above."

function onKeyDown(e) {
    console.log(e.keyCode);

}

function onKeyUp(e) {
    if (e.keyCode == 32) {
        console.log("You pressed the spacebar");
        gameOver = false;
        draw(mnprz,mnprz);
    }

}
function draw(mnprz,cmnprz){
    if (gameOver == true){
        ctx.font = "40px Impact";
        ctx.fillStyle = "purple";
        ctx.strokeStyle = "blue";
        ctx.textAlign = "center";
        ctx.fillText("Welcome to the RPS Game!", canvas.width / 2, 280);
        ctx.fillText("Press Space to start", canvas.width / 2, 330);
        ctx.strokeText("Welcome to the RPS Game!", canvas.width / 2, 280);
    }else{
        ctx.save();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "30px Impact";
        ctx.textAlign = "center";
        ctx.fillStyle = "purple";
        ctx.fillText("player Choice", canvas.width / 2, 30);
        ctx.drawImage(mnprz,290,40,220,220);
        ctx.fillText("Computer Choice", canvas.width / 2, 290);
        ctx.drawImage(cmnprz,290,300,220,220);
        console.log(Results);
        ctx.fillText(Results, canvas.width / 2, 540);
        ctx.restore();
    }
}

var rps =["Monkey","Ninja","Pirate","Robot","Zombie"];

document.getElementById("Monkey").addEventListener('click', function (e) { playGame(rps[0]); });
document.getElementById("Ninja").addEventListener('click', function (e) { playGame(rps[1]); });
document.getElementById("Pirate").addEventListener('click', function (e) { playGame(rps[2]); });
document.getElementById("Robot").addEventListener('click', function (e) { playGame(rps[3]); });
document.getElementById("Zombie").addEventListener('click', function (e) { playGame(rps[4]); });

function playGame(playerChoice){
    if (gameOver == true) {
        return;
     }else{
        var cpuChoice = Math.floor(Math.random() * 4.99);
       // console.log(cpuChoice, playerChoice);

        switch (playerChoice){
            case "Monkey":
                if(cpuChoice == 0){Results ="CPU chose Monkey. It's a tie!"}
                else if(cpuChoice == 1){Results ="CPU chose Ninja. You Win!"}
                else if(cpuChoice == 2){Results = "CPU chose Pirate. You Lose!"}
                else if(cpuChoice == 3){Results ="CPU chose Robot. You Win!"}
                else{Results = "CPU chose Zombie.  You Lose!"}
                
                draw(mnprz,mnprz);
            
                
                break;

                case "Ninja":
                if(cpuChoice == 0){Results ="CPU chose Monkey. You Lose!"}
                else if(cpuChoice == 1){Results ="CPU chose Ninja. It's a tie!"}
                else if(cpuChoice == 2){Results ="CPU chose Pirate. You Win!"}
                else if(cpuChoice == 3){Results ="CPU chose Robot. You Lose!"}
                else{Results ="CPU chose Zombie. You Win!"}
                draw(mnprz,mnprz)
                break;

                case "Pirate":
                if(cpuChoice == 0){Results ="CPU chose Monkey. You Win!"}
                else if(cpuChoice == 1){ Results ="CPU chose Ninja. You Lose!"}
                else if(cpuChoice == 2){ Results ="CPU chose Pirate. It's a tie!"}
                else if(cpuChoice == 3){ Results ="CPU chose Robot. You Win!"}
                else {Results ="CPU chose Zombie. You Lose!"}
                draw(mnprz,mnprz)
                break;

                case "Robot":
                if(cpuChoice == 0){Results ="CPU chose Monkey. You Lose!"}
                else if(cpuChoice == 1){Results ="CPU chose Ninja. You Win!"}
                else if(cpuChoice == 2){Results ="CPU chose Pirate. You Lose!"}
                else if(cpuChoice == 3){ Results ="CPU chose Robot. It's a tie!"}
                else{ Results ="CPU chose Zombie. You Win!"}
                draw(mnprz,mnprz)
                break;

                case "Zombie":
                if(cpuChoice == 0){Results ="CPU chose Monkey. You Win!"}
                else if(cpuChoice == 1){Results ="CPU chose Ninja. You Lose! "}
                else if(cpuChoice == 2){Results ="CPU chose Pirate. You Win!"}
                else if(cpuChoice == 3){Results ="CPU chose Robot. You Lose!"}
                else{ Results ="CPU chose Zombie.It's a tie!"}
                draw(mnprz,mnprz)
                break;
        }
    }
}