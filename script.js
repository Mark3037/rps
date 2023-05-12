// function that checks conditions of player choice
function getPlayerChoice(choice = "") {
    let newChoice = choice.toLowerCase();
    if(newChoice === "rock" || newChoice === "paper" || newChoice === "scissors") {
        return newChoice
    } else {
        newChoice = prompt("What is your choice?")
        return getPlayerChoice(newChoice)
    }
}

// function to create a randomly generated computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const num = Math.floor(Math.random() * choices.length)
    return choices[num]
}

// function that plays a single round and declares winner
function playRound() {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    if(playerSelection === computerSelection) return `A tie! You both picked ${playerSelection}`
    if(playerSelection === "rock" && computerSelection === "scissors" ||
       playerSelection === "paper" && computerSelection === "rock" ||
       playerSelection === "scissors" && computerSelection === "paper") {
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

const buttons = document.querySelectorAll(".buttons-display button");
buttons.forEach(button => button.addEventListener("click", () => getPlayerChoice(button.className)))
console.log(buttons)