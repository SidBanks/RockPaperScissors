//Setup and assign variables to handle win counting[playerWins, computerWins, tie, playerGames, computerGames, catGames].
let playerWins = 0;
let computerWins = 0;
let tie = 0;
let playerGames = 0;
let computerGames = 0;
let catGames = 0;
let computerSelection;
let playerSelection;


//Set up an array (plays)for the three possible play options [rock, paper, scissors]
let plays = [`rock`, `paper`, `scissors`];

//Math function (computerPlay) that randomly selects an item from the array and assigns it to a variable [computerSelection]
function computerPlay(plays) {
    computerSelection = plays[Math.floor(Math.random()*plays.length)];
    return computerSelection;
}

//Functions for assigning playerSelection variable.
function playerRock() {
    playerSelection = 'rock';
    return playerSelection;
}

function playerPaper() {
    playerSelection = 'paper';
    return playerSelection;
}

function playerScissors() {
    playerSelection = 'scissors';
    return playerSelection;
}

//Functions for resetting the score and delivering a reset message.
function resetGame() {
    playerWins = 0;
    computerWins = 0;
    tie = 0;
    playerGames = 0;
    computerGames = 0;
    catGames = 0;
}

function resetMessage() {
    document.getElementById('message3').innerHTML = 
    'All Scores Have Been Reset.';
}

//Round of play function (playRound) playRound accepts 2 parameters [computerSelection, playerSelection] and declares a winner.  The logic is a 7 step if else statement.
//That increments win counters[playerWins, computerWins, tie].
function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock'  && computerSelection == 'scissors') {
        playerWins++;
        document.getElementById('message').innerHTML = 
        `You win Rock smashes Scissors! The score is ${playerWins} to ${computerWins} with ${tie} ties.`;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerWins++;    
        document.getElementById('message').innerHTML = 
        `You lose Paper covers Rock! The score is ${playerWins} to ${computerWins} with ${tie} ties.`;
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerWins++;
        document.getElementById('message').innerHTML = 
        `You win Paper covers Rock! The score is ${playerWins} to ${computerWins} with ${tie} ties.`;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerWins++;
        document.getElementById('message').innerHTML = 
        `You lose Scissors cut Paper! The score is ${playerWins} to ${computerWins} with ${tie} ties.`;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerWins++;
        document.getElementById('message').innerHTML = 
        `You win Scissors cut paper! The score is ${playerWins} to ${computerWins} with ${tie} ties.`;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerWins++;
        document.getElementById('message').innerHTML = 
        `You lose Rock smashes Scissors! The score is ${playerWins} to ${computerWins} with ${tie} ties.`;
    } else { 
        tie++;
        document.getElementById('message').innerHTML = 
        `You picked the same as the computer!  It\'s a tie! The score is ${playerWins} to ${computerWins} with ${tie} ties.`;
    }

// If statement for tracking wins and rolling scores over. 
    if (playerWins == 5  && computerWins != 5) {
        document.getElementById('message2').innerHTML = 
        `You won ${playerWins} to ${computerWins}!`;
        playerWins = 0;
        computerWins = 0;
        tie = 0;
        playerGames++;
        document.getElementById('message3').innerHTML =
        `Player Games ${playerGames} : Computer Games ${computerGames} : Cat Games ${catGames}`;
    } else if (computerWins == 5 && playerWins != 5) {
        document.getElementById('message2').innerHTML = 
        `You lose ${playerWins} to ${computerWins}!`;
        playerWins = 0;
        computerWins = 0;
        tie = 0;
        computerGames++;
        document.getElementById('message3').innerHTML =
        `Player Games ${playerGames} : Computer Games ${computerGames} : Cat Games ${catGames}`;
    } else if (tie == 5 && playerWins < 5 && computerWins < 5) { 
        document.getElementById('message2').innerHTML = 
        `You managed a tie!? ${playerWins} to ${computerWins}`;
        playerWins = 0;
        computerWins = 0;
        tie = 0;
        catGames++;
        document.getElementById('message3').innerHTML =
        `Player Games ${playerGames} : Computer Games ${computerGames} : Cat Games ${catGames}`;
    }

}

   //3x Event Listeners assigning the playerSelection variable on button click
    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');
    const reset = document.querySelector('#reset');
   
    rock.addEventListener('click', playerRock);
    rock.addEventListener('click', function() { computerPlay(plays); });
    rock.addEventListener('click', function() { playRound(playerSelection, computerSelection); });

    paper.addEventListener('click', playerPaper);
    paper.addEventListener('click', function() { computerPlay(plays); });
    paper.addEventListener('click', function() { playRound(playerSelection, computerSelection); });

    scissors.addEventListener('click', playerScissors);
    scissors.addEventListener('click', function() { computerPlay(plays); });
    scissors.addEventListener('click', function() { playRound(playerSelection, computerSelection); });

    reset.addEventListener('click', resetGame);
    reset.addEventListener('click', resetMessage);
    






