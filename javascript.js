console.log("Hello World")

let randomNumber = Math.floor(Math.random() * 3) + 1;

function getComputerChoice() {
    let computerChoice;
    if (randomNumber === 1) {
        computerChoice = "rock";
    } else if (randomNumber === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}
console.log(getComputerChoice());

function getHumanChoice() {
    let humanChoice = window.prompt("What's your choice: rock, paper, or scissors?");
    return humanChoice.toLowerCase();
}
console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;