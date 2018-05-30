// Rock Paper Scissors Game

const randomNumber = () => Math.floor(Math.random() * 3);

function computerPlay(randomNumber) {
    const choices = ["rock", "paper", "scissors"];
    return choices[randomNumber];
}

console.log(computerPlay(randomNumber()));

function playRound(playerSelection, computer = computerPlay(randomNumber())) {
    const player = String(playerSelection).toLowerCase();
    if (player === "rock" || player === "paper" || player === "scissors") {
        if (player === computer) {
            return "It's a tie, try again!";
        }
        switch (player) {
            case "rock":
                return (computer === 'scissors') ? "You Win! Rock beats Scissors!" : "You Lose! Paper beats Rock!";
            case "paper":
                return (computer === 'rock') ? "You Win! Paper beats Rock!" : "You Lose! Scissors beats Paper!";
            default:
                return (computer === 'paper') ? "You Win! Scissors beats Paper!" : "You Lose! Rock beats Scissors!";
        }
    }
    throw new Error("You must chose 'Rock', 'Paper', or 'Scissors'");
}

console.log(playRound(true));