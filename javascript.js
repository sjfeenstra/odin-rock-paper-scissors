const possibilities = ["ROCK", "PAPER", "SCISSORS"];
let humanChoice = "";
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(possibilities) {
  const randomNumber = Math.floor(Math.random() * possibilities.length);
  return possibilities[randomNumber];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("Draw");
    return;
  }
  switch (humanChoice) {
    case "ROCK":
      if (computerChoice == "PAPER") {
        console.log("You lose Paper beats Rock");
        computerScore++;
      } else {
        console.log("You win Rock beats Scissors");
        humanScore++;
      }
      break;
    case "PAPER":
      if (computerChoice == "SCISSORS") {
        console.log("You lose Scissors beats Paper");
        computerScore++;
      } else {
        console.log("You win Paper beats Rock");
        humanScore++;
      }
      break;
    case "SCISSORS":
      if (computerChoice == "ROCK") {
        console.log("You lose Rock beats Scissors");
        computerScore++;
      } else {
        console.log("You win Scissors beats Paper");
        humanScore++;
      }
      break;
  }
}

function playGame() {
  gameNumber = 1;
  while (gameNumber <= 5) {
    while (!possibilities.includes(humanChoice)) {
      humanChoice = prompt(
        `Choose between ROCK, PAPER and SCISSORS? (Game ${gameNumber})`
      );
    }

    let computerChoice = getComputerChoice(possibilities).toUpperCase();

    playRound(humanChoice, computerChoice);
    gameNumber++;
    humanChoice = "";
  }
  if (humanScore > computerScore) {
    console.log(`You win with ${humanScore} to ${computerScore}`);
  } else if (computerScore > humanScore) {
    console.log(`You lose with ${humanScore} to ${computerScore}`);
  } else {
    console.log(`You draw with ${humanScore} to ${computerScore}`);
  }
}

playGame();
