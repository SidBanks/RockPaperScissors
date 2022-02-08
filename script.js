//Set up an array (plays)for the three possible play options [rock, paper, scissors]
let plays = ["rock", "paper", "scissors"];

//Math function (computerPlay) that randomly selects an item from the array and assigns it to a variable [computerSelection]
let computerSelection = function computerPlay(plays) {
    return plays[Math.floor(Math.random()*plays.length)];
}

//Round of play function (playRound) playRound accepts 2 parameters [computerSelection, playerSelection] and declares a winner.  The logic is a 7 step if statement
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock'  && computerSelection === 'scissors') {
        alert('You win Rock smashes Scissors!');
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        alert('You lose Paper covers Rock!');
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        alert('You win Paper covers Rock!');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        alert('You lose Scissors cut Paper!');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        alert('You win Scissors cut paper!');
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        alert('You lose Rock smashes Scissors!');
    } else (playerSelection === '' && computerSelection === '') {
        alert('You picked the same as the computer!  It\'s a tie');
    }
} 

//Game play function (Game) Opens a while loop that calls (playRound) dispays round results message. Increments [playerWins OR computerWins].  Loops 4 more times for a total of 5.  Compares [playerWins to computerWins] and dispays a message about the winner of the game.

//Prompt functions (playerInput) player to enter [rock, paper, scissors]. Assigns the input to [playerSelection]
//playerSelection.toLowerCase.  Compares player input to [rock, paper, scissors] if input is not one of the three displays message asking for valid input and allows user to try again.




