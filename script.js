
var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;

var choices = ["rock", "paper", "scissors"];

window.onload = function() {
  for (let i = 0; i < 3; i++) {
    // <img id="rock">
    let choice = document.createElement("img");
    choice.id = choices[i];
    choice.src = choices[i] + ".png";
    choice.addEventListener("click", selectChoice);
    document.getElementById("choices").append(choice);
  }
}

function selectChoice() {
  you = this.id;
  document.getElementById("your-choice").src = you + ".png";

  // random for opponent
  opponent = choices[Math.floor(Math.random() * 3)]; // 0- .999999 * 3 = 0-2.999999
  document.getElementById("opponent-choice").src = opponent + ".png";

  // check for winner
  if (you == opponent) {
    yourScore++;
    opponentScore++;
  }
  else {
    if (you == "rock") {
      if (opponent == "scissors") {
        yourScore++;
      }
      else if (opponent == "paper") {
        opponentScore++;
      }
    }
    else if (you == "scissors") {
      if (opponent == "paper") {
        yourScore++;
      }
      else if (opponent == "rock") {
        opponentScore++;
      }
    }
    else if (you == "paper") {
      if (opponent == "rock") {
        yourScore++;
      }
      else if (opponent == "scissors") {
        opponentScore++;
      }
    }  
  }

  document.getElementById("your-score").innerText = yourScore;
  document.getElementById("opponent-score").innerText = opponentScore;
}