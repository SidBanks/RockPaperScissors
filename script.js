let plays = ["rock", "paper", "scissors"];

function computerPlay(plays) {
    return plays[Math.floor(Math.random()*plays.length)];
}