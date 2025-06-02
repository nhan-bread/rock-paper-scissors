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