const result = document.querySelector("p.results");
const winDisplay = document.querySelector("p.wins");
const lossDisplay = document.querySelector("p.losses");
let winCount = 0;
let lossCount = 0;

// function to create a randomly generated computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const num = Math.floor(Math.random() * choices.length)
    return choices[num]
}

// function that plays a single round and declares winner
function playRound(choice) {
    let playerSelection = choice;
    let computerSelection = getComputerChoice();
    if(playerSelection === computerSelection) {
        result.textContent = `A tie! You both picked ${playerSelection}`
        return "tie"
    } else if(playerSelection === "rock" && computerSelection === "scissors" ||
       playerSelection === "paper" && computerSelection === "rock" ||
       playerSelection === "scissors" && computerSelection === "paper") {
        result.textContent = `You win! ${playerSelection} beats ${computerSelection}`
        return "win"
    } else {
        result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
        return "loss"
    }
}

function checkScore() {
    if(winCount === 5) {
        result.textContent = "You won the game!";
    } else {
        result.textContent = "You lost the game."
    }
    winDisplay.textContent = ""
    lossDisplay.textContent = ""
    winCount = lossCount = 0;
}

function game(choice) {
    const result = playRound(choice);
    if(result === "win") {
        winDisplay.textContent = `Wins: ${++winCount}`;
        if(winCount === 5) checkScore()
    } else if(result === "loss") {
        lossDisplay.textContent = `Losses: ${++lossCount}`
        if(lossCount === 5) checkScore()
    } else {
        return
    }
}

const buttons = document.querySelectorAll(".buttons-display button");
buttons.forEach(button => button.addEventListener("click", () => game(button.className)));