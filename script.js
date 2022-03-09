const computerOptions = ["rock", "paper", "scissors"];
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");
const playerOptions = [rockBtn, paperBtn, scissorBtn];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const randOption =
    computerOptions[Math.floor(Math.random() * computerOptions.length)];
  return randOption;
}

function youWon() {
  document.querySelector(".display-winner").value = "You won!";
  playerScore++;
  document.querySelector(".player-score").textContent = playerScore;
}

function youLost() {
  document.querySelector(".display-winner").value = "You lost!";
  computerScore++;
  document.querySelector(".computer-score").textContent = computerScore;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    document.querySelector(".display-winner").value = "Tie!";
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      youWon();
    } else {
      youLost();
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      youWon();
    } else {
      youLost();
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      youWon();
    } else {
      youLost();
    }
  }
}

function displayMsg(message) {
  document.querySelector(".result").textContent = message;
}

function restart() {
  playerScore = 0;
  computerScore = 0;
  document.querySelector(".player-score").textContent = 0;
  document.querySelector(".computer-score").textContent = 0;
  document.querySelector(".computer-choice").value = "";
  document.querySelector(".display-winner").value = "";
}

playerOptions.forEach((option) => option.addEventListener("click", game));

function game() {
  document.querySelector(".result").textContent = "";
  const computerSelection = computerPlay();
  document.querySelector(".computer-choice").value = computerSelection;
  console.log(playRound(this.innerText, computerSelection));
  if (playerScore === 5) {
    displayMsg("You won the game!");
    restart();
  }

  if (computerScore === 5) {
    displayMsg("The computer won the game!");
    restart();
  }
}
