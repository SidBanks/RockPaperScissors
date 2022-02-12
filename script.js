//Setup and assign variables to handle win counting[playerWins, computerWins, tie].
let playerWins = 0;
let computerWins = 0;
let tie = 0;

//Set up an array (plays)for the three possible play options [rock, paper, scissors]
let plays = [`rock`, `paper`, `scissors`];

//Prompt functions (playerInput) player to enter [rock, paper, scissors]. Assigns the input to [playerSelection]
//playerSelection.toLowerCase.  Compares player input to plays array [rock, paper, scissors] if input is not one of the three displays message asking for valid input and allows user to try again.
function input() {
   let input = prompt('Please enter Rock, Paper, or Scissors');
     input.toLowerCase();
     if (plays.indexOf(input) !== true) {
        let playerInput = input;
        return playerInput;
     } else { 
        document.getElementById('message').innerHTML = 
        `You have to input Rock, Paper, or Scissors!`;
    }
}

//Math function (computerPlay) that randomly selects an item from the array and assigns it to a variable [computerSelection]
function computerPlay(plays) {
    return plays[Math.floor(Math.random()*plays.length)];
}

//Round of play function (playRound) playRound accepts 2 parameters [computerSelection, playerSelection] and declares a winner.  The logic is a 7 step if else statement.
//That increments win counters[playerWins, computerWins, tie].
function playRound(playerSelection, computerSelection,) {
    if (playerSelection == 'rock'  && computerSelection == 'scissors') {
        document.getElementById('message').innerHTML = 
        'You win Rock smashes Scissors!';
        playerWins++
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        document.getElementById('message').innerHTML = 
        'You lose Paper covers Rock!';
        computerWins++
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        document.getElementById('message').innerHTML = 
        'You win Paper covers Rock!';
        playerWins++
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        document.getElementById('message').innerHTML = 
        'You lose Scissors cut Paper!';
        computerWins++
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        document.getElementById('message').innerHTML = 
        'You win Scissors cut paper!';
        playerWins++
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        'You lose Rock smashes Scissors!';
        document.getElementById('message').innerHTML = 
        computerWins++
    } else { 
        document.getElementById('message').innerHTML = 
        'You picked the same as the computer!  It\'s a tie';
        tie++
    }
} 

//Game play function (game) Opens a while loop that calls (playRound) Loops 4 more times for a total of 5.  Compares [playerWins to computerWins] and dispays a message about the winner of the game.
function game() {
    let n = 0;
    while (n < 5) {
        let computerSelection = computerPlay(plays);
        let playerSelection = input();
        playRound(playerSelection, computerSelection);
        n++
    }
    if (playerWins > computerWins) {
        document.getElementById('message2').innerHTML = 
        `You won ${playerWins} to ${computerWins}!`;
    } else if (playerWins < computerWins) {
        document.getElementById('message2').innerHTML = 
        `You lose ${playerWins} to ${computerWins}!`;
    } else { 
        document.getElementById('message2').innerHTML = 
        `You managed a tie!? ${playerWins} to ${computerWins}`;
    }
}






