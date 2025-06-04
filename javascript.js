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