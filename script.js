// function to create a randomly generated computer choice
function getComputerChoice() {
    'make an array of options'
    'make a random number'
    return "random index of array"
}

// function that plays a single round and declares winner
function playRound(playerSelection, computerSelection) {
    'ask for player choice'
    'decide what each side selected, and who won'
    return "string that declares winner like: 'You lose! paper beats rock'"
}

// function that checks conditions of player choice
function playerCheck(choice) {
    'make choice lowercase'
    'make sure its rock, paper, or scissors'
    'if valid'
        'return'
    'if invalid'
        'reprompt for answer change'
        'rerun playerCheck'
    return choice
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

console.log(game());