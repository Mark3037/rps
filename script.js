const result = document.querySelector("div.results");
const winDisplay = document.querySelector("div.wins");
const lossDisplay = document.querySelector("div.losses");
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
    result.style.fontSize = "120px";
    winDisplay.textContent = ""
    lossDisplay.textContent = ""
    winCount = lossCount = 0;
}

function game(choice) {
    result.style.fontSize = "50px"
    const results = playRound(choice);
    if(results === "win") {
        winDisplay.textContent = `Wins: ${++winCount}`;
        if(winCount === 5) checkScore()
    } else if(results === "loss") {
        lossDisplay.textContent = `Losses: ${++lossCount}`
        if(lossCount === 5) checkScore()
    } else {
        return
    }
}

const buttons = document.querySelectorAll(".buttons-display button");
buttons.forEach(button => button.addEventListener("click", () => game(button.className)));