console.log("Hello World")

let randomNumber = Math.floor(Math.random() * 3) + 1;

function getComputerChoice() {
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
        else if (humanChoice === computerChoice) {
            console.log(`You both chose ${computerChoice}, it's a tie!`);
        }
        console.log(humanScore);
        console.log(computerScore);
    }
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
}

playGame();