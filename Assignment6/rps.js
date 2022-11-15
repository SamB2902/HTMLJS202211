//canvas drawing stuff
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");

//drawing the fonts
ctx.font = "40px Verdana";
ctx.fillStyle = "darkblue";
ctx.fillText("Welcome to the RPS Game!", 125, 200);


ctx.font = "30px  Verdana";
ctx.fillStyle = "Darkgreen";
ctx.fillText("Select rock, paper, scissors!", 200, 230);
var rps = ["rock", "paper", "scissors"];
//console.log(rps[2]);

ctx.font = "20px  Verdana";
ctx.fillStyle = "Darkred";
document.getElementById("rock").addEventListener('click', function (e) { ctx.fillText("You picked " + rps[0], 275, 255) });
document.getElementById("paper").addEventListener('click', function (e) { ctx.fillText("You picked " + rps[1], 275, 255) });
document.getElementById("scissors").addEventListener('click', function (e) { ctx.fillText("You picked " + rps[2], 275, 255) });

document.getElementById("rock").addEventListener('click', function (e) { ("You picked " + rps[0]); playGame(rps[0]); });
document.getElementById("paper").addEventListener('click', function (e) { ("You picked " + rps[1]); playGame(rps[1]); });
document.getElementById("scissors").addEventListener('click', function (e) { ("You picked " + rps[2]); playGame(rps[2]); });

function playGame(playerChoice) {
    var cpuChoice = Math.floor(Math.random() * 2.99);
    console.log(cpuChoice, playerChoice);

    switch (playerChoice) {
        case "rock":
            if (cpuChoice == 0) {
                //rock
                ctx.font = "20px  Verdana";
                ctx.fillStyle = "Darkred";
                ctx.fillText("CPU chose Rock. It's a tie!", 275, 280);
            }
            else if (cpuChoice == 1) {
                //paper
                ctx.font = "20px  Verdana";
                ctx.fillStyle = "Darkred";
                ctx.fillText("CPU chose Paper. You lose!", 275, 280);
            }
            else {
                ctx.font = "20px  Verdana";
                ctx.fillStyle = "Darkred";
                ctx.fillText("CPU chose Scissors. You win!", 275, 280);
            }

            break;

        case "paper":
            if (cpuChoice == 0) {
                //rock
                ctx.font = "20px  Verdana";
                ctx.fillStyle = "Darkred";
                ctx.fillText("CPU chose Rock. You win!", 275, 280);
            }
            else if (cpuChoice == 1) {
                //paper
                ctx.font = "20px  Verdana";
                ctx.fillStyle = "Darkred";
                ctx.fillText("CPU chose Paper. It's a tie!", 275, 280);
            }
            else {
                ctx.font = "20px  Verdana";
                ctx.fillStyle = "Darkred";
                ctx.fillText("CPU chose Scissors. You lose!", 275, 280);
            }

            break;

        case "scissors":
            if (cpuChoice == 0) {
                //rock
                ctx.font = "20px  Verdana";
                ctx.fillStyle = "Darkred";
                ctx.fillText("CPU chose Rock. You lose!", 275, 280);
            }
            else if (cpuChoice == 1) {
                //paper
                ctx.font = "20px  Verdana";
                ctx.fillStyle = "Darkred";
                ctx.fillText("CPU chose Paper. You win!", 275, 280);
            }
            else {
                ctx.font = "20px  Verdana";
                ctx.fillStyle = "Darkred";
                ctx.fillText("CPU chose Scissors. It's a tie!", 275, 280);
            }

            break;
    }
}
