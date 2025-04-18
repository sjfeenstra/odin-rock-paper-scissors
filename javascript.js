const possibilities = ["ROCK", "PAPER", "SCISSORS"];
let humanChoice = "";
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(possibilities) {
  const randomNumber = Math.floor(Math.random() * possibilities.length);
  return possibilities[randomNumber];
}

function playRound(humanChoice, computerChoice) {
  let message = document.querySelector(".message")
  if (humanChoice == computerChoice) {
    message.textContent = "DRAW"
    return;
  }
  switch (humanChoice) {
    case "ROCK":
      if (computerChoice == "PAPER") {
        message.textContent = "You lose Paper beats Rock";
        computerScore++;
      } else {
        message.textContent = "You win Rock beats Scissors";
        humanScore++;
      }
      break;
    case "PAPER":
      if (computerChoice == "SCISSORS") {
        message.textContent = "You lose Scissors beats Paper";
        computerScore++;
      } else {
        message.textContent = "You win Paper beats Rock";
        humanScore++;
      }
      break;
    case "SCISSORS":
      if (computerChoice == "ROCK") {
        message.textContent = "You lose Rock beats Scissors";
        computerScore++;
      } else {
        message.textContent = "You win Scissors beats Paper";
        humanScore++;
      }
      break;
  }
}

function reset(){
  humanScore = 0;
  computerScore =0;
}

function updateScores(humanScore,computerScore){
  let humanScoreElement = document.querySelector(".humanScore")
  let computerScoreElement = document.querySelector(".computerScore")
  let message = document.querySelector(".message")

  humanScoreElement.textContent = "Human Score: " + humanScore
  computerScoreElement.textContent = "Computer Score: " + computerScore
  if(humanScore == 5){
    message.textContent = `Human wins with ${humanScore} to ${computerScore}`
  } else if (computerScore == 5){
    message.textContent = `Computer wins with ${computerScore} to ${humanScore}`
  }
  if(humanScore == 5 || computerScore == 5){
    reset()
  }
}

let buttons = document.querySelector(".buttons")
buttons.addEventListener('click',(event)=>{
  playRound(event.target.id, getComputerChoice(possibilities))
  updateScores(humanScore, computerScore)
})
