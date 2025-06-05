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
console.log(getComputerChoice());

function getHumanChoice() {
    let playerChoice = window.prompt("What's your choice: rock, paper, or scissors?");
    return playerChoice.toLowerCase();
}
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;
console.log(humanScore);
console.log(computerScore);

// function playRound(humanChoice,computerChoice) {
//    if (((humanChoice, computerChoice) === ("rock","paper"))
//    || ((humanChoice, computerChoice) === ("paper","scissors"))
//    || ((humanChoice, computerChoice) === ("scissors","rock"))) {
//        computerScore++;
//        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
//    }
//    else if (((humanChoice, computerChoice) === ("rock", "scissors"))
//         || ((humanChoice, computerChoice) === ("paper","rock"))
//         || ((humanChoice, computerChoice) === ("scissors","paper"))) {
//        humanScore++; 
//        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
//    }
//    else if (humanChoice === computerChoice) {
//        console.log("It's a tie!")
//    }
//}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "rock" && computerChoice === "paper")
    || (humanChoice === "paper" && computerChoice === "scissors")
    || (humanChoice === "scissors" && computerChoice === "rock")) {
        computerScore++;
        //console.log(computerChoice)
        //console.log(humanScore);
        //console.log(computerScore);
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors")
    || (humanChoice === "paper" && computerChoice === "rock")
    || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        //console.log(computerChoice);
        //console.log(humanScore);
        //console.log(computerScore);
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    }
    else if (humanChoice === computerChoice) {
        //console.log(computerChoice);
        console.log("It's a tie!");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);