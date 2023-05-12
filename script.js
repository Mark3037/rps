// function to create a randomly generated computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const num = Math.floor(Math.random() * choices.length)
    return choices[num]
}

// function that plays a single round and declares winner
function playRound(choice) {
    const results = document.querySelector("div.results");
    let playerSelection = choice;
    let computerSelection = getComputerChoice();
    if(playerSelection === computerSelection) {
        results.textContent = `A tie! You both picked ${playerSelection}`
    } else if(playerSelection === "rock" && computerSelection === "scissors" ||
       playerSelection === "paper" && computerSelection === "rock" ||
       playerSelection === "scissors" && computerSelection === "paper") {
        results.textContent = `You win! ${playerSelection} beats ${computerSelection}`
    } else {
        results.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

const buttons = document.querySelectorAll(".buttons-display button");
buttons.forEach(button => button.addEventListener("click", () => playRound(button.className)));