function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let randomChoice;
    if (randomNumber === 1) {
        randomChoice = "rock";
    } else if (randomNumber === 2) {
        randomChoice = "paper";
    } else {
        randomChoice = "scissors";
    }
    return randomChoice;
}
//console.log(getComputerChoice());

function getHumanChoice() {
    let playerChoice = window.prompt("What's your choice: rock, paper, or scissors?");
    return playerChoice.toLowerCase();
}
//console.log(getHumanChoice());

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    console.log(humanScore);
    console.log(computerScore);

    function playRound(humanChoice, computerChoice) {
        if ((humanChoice === "rock" && computerChoice === "paper")
        || (humanChoice === "paper" && computerChoice === "scissors")
        || (humanChoice === "scissors" && computerChoice === "rock")) {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        }
        else if ((humanChoice === "rock" && computerChoice === "scissors")
        || (humanChoice === "paper" && computerChoice === "rock")
        || (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        }
        else {
            console.log(`You both chose ${computerChoice}, it's a tie!`);
        }
        console.log(humanScore);
        console.log(computerScore);
    }

      playRound(getHumanChoice(), getComputerChoice());
      playRound(getHumanChoice(), getComputerChoice());
      playRound(getHumanChoice(), getComputerChoice());
      playRound(getHumanChoice(), getComputerChoice());
      playRound(getHumanChoice(), getComputerChoice());

      if (humanScore > computerScore) {
        console.log(`The final score is ${humanScore} to ${computerScore}. You win! :)`)
      }
      else if (humanScore < computerScore) {
        console.log(`The final score is ${humanScore} to ${computerScore}. You lose. :(`)
      }
      else if (humanScore === computerScore) {
        console.log(`The final score is ${humanScore} to ${computerScore}. It's a tie!`)
      }
}

playGame();