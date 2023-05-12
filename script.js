// function to create a randomly generated computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const num = Math.floor(Math.random() * choices.length)
    return choices[num]
}

// function that plays a single round and declares winner
function playRound(playerSelection, computerSelection) {
    'ask for player choice'
    'decide what each side selected, and who won'
    return "string that declares winner like: 'You lose! paper beats rock'"
}

// function that checks conditions of player choice
function playerCheck(choice) {
    let newChoice = choice.toLowerCase();
    if(newChoice === "rock" || newChoice === "paper" || newChoice === "scissors") {
        return newChoice
    } else {
        newChoice = prompt("What is your choice?")
        return playerCheck(newChoice)
    }
}

// function that plays 5 rounds, keeps score, and declares winner
function game() {
    'make a win and loss variable = 0'
    'declare a loop that iterates 5 times'
        'call playRound()'
        'increment win or loss depending on result'
    'decide if win or loss is greater'
    return 'winner and score'
}

console.log(playerCheck("rack"));