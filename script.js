//Set up an array (plays)for the three possible play options [rock, paper, scissors]
let plays = [`rock`, `paper`, `scissors`];


//Prompt functions (playerInput) player to enter [rock, paper, scissors]. Assigns the input to [playerSelection]
//playerSelection.toLowerCase.  Compares player input to plays array [rock, paper, scissors] if input is not one of the three displays message asking for valid input and allows user to try again.
function input() {
    let playerInput = prompt('Please enter Rock, Paper, or Scissors');
     playerInput.toLowerCase();
     if (plays.indexOf(playerInput) !== -1) {
         let playerSelection = playerInput;
         return playerSelection;
     } else { (alert(`You have to input Rock, Paper, or Scissors!`));
    }
}

//Math function (computerPlay) that randomly selects an item from the array and assigns it to a variable [computerSelection]
function computerPlay(plays) {
    let computerSelection = plays[Math.floor(Math.random()*plays.length)];
    return computerSelection;
}

//Round of play function (playRound) playRound accepts 2 parameters [computerSelection, playerSelection] and declares a winner.  The logic is a 7 step if else statement.
//That increments win counters[playerWins, computerWins, tie].
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock'  && computerSelection === 'scissors') {
        alert('You win Rock smashes Scissors!');
        playerWins++
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        alert('You lose Paper covers Rock!');
        computerWins++
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        alert('You win Paper covers Rock!');
        playerWins++
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        alert('You lose Scissors cut Paper!');
        computerWins++
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        alert('You win Scissors cut paper!');
        playerWins++
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        alert('You lose Rock smashes Scissors!');
        computerWins++
    } else { (alert('You picked the same as the computer!  It\'s a tie'));
        tie++
    }
} 

//Game play function (game) Opens a while loop that calls (playRound) Loops 4 more times for a total of 5.  Compares [playerWins to computerWins] and dispays a message about the winner of the game.
function game() {
    let n = 0;
    while (n < 5) {
        input();
        computerPlay(plays);
        playRound(playerSelection, computerSelection);
        n++
    }
    if (playerWins > computerWins) {
        alert(`You won ${playerWins} to ${computerWins}!`);
    } else if (playerWins < computerWins) {
        alert(`You lose ${playerWins} to ${computerWins}!`);
    } else { (alert(`You managed a tie!?`));
    }
}

//Setup and assign variables to handle win counting[playerWins, computerWins, tie].
let playerWins;
let computerWins;
let tie;




