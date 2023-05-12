// function to create a randomly generated computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const num = Math.floor(Math.random() * choices.length)
    return choices[num]
}

// function that plays a single round and declares winner
function playRound(choice) {
    const result = document.querySelector("p.results");
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

function checkScore(score) {
    return
}

let winCount = 0;
let lossCount = 0;
function game(choice) {
    const winDisplay = document.querySelector("p.wins");
    const lossDisplay = document.querySelector("p.losses");
    const result = playRound(choice);
    if(result === "win") {
        winDisplay.textContent = `Wins: ${++winCount}`;
        checkScore(winCount)
    } else if(result === "loss") {
        lossDisplay.textContent = `Losses: ${++lossCount}`
        checkScore(lossCount)
    } else {
        return
    }
}

const buttons = document.querySelectorAll(".buttons-display button");
buttons.forEach(button => button.addEventListener("click", () => game(button.className)));