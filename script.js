//Set up an array (plays)for the three possible play options [rock, paper, scissors]
let plays = ["rock", "paper", "scissors"];

//Math function (computerPlay) that randomly selects an item from the array and assigns it to a variable [computerSelection]
let computerSelection = function computerPlay(plays) {
    return plays[Math.floor(Math.random()*plays.length)];
}

//Round of play function (playRound) playRound accepts 2 parameters [computerSelection, playerSelection] and declares a winner.  The logic is a 7 step if statement
function playRound(playerSelection, computerSelection) {

}

//Game play function (Game) Opens a while loop that calls (playRound) dispays round results message. Increments [playerWins OR computerWins].  Loops 4 more times for a total of 5.  Compares [playerWins to computerWins] and dispays a message about the winner of the game.

//Prompt functions (playerInput) player to enter [rock, paper, scissors]. Assigns the input to [playerSelection]
//playerSelection.toLowerCase.  Compares player input to [rock, paper, scissors] if input is not one of the three displays message asking for valid input and allows user to try again.




