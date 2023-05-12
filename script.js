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

// function that plays 5 rounds, keeps score, and declares winner
function game() {
    let wins = 0;
    let losses = 0;
    for(x = 0; x < 5; x++) {
        result = playRound();
        console.log(result)
        if(result.charAt(4) === "w") wins++
        else if(result.charAt(4) === "l") losses++
        else continue;
    }
    if(wins === losses) {
        return `The score was ${wins} to ${losses}. It was a tie game!`
    } else if(wins > losses) {
        return `The score was ${wins} to ${losses}. You won the game!`
    } else {
        return `The score was ${wins} to ${losses}. You lost the game.`
    }
}

console.log(game());