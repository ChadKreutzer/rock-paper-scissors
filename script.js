// Rock Paper Scissors Game

const randomNumber = () => Math.floor(Math.random() * 3);

function computerPlay(randomNumber) {
    const choices = ["rock", "paper", "scissors"];
    return choices[randomNumber];
}

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

function game() {
    const score = [0, 0];
    let roundResult, round = 1;
    while (round <= 5) {
        roundResult = playRound(prompt("Chose 'Rock', 'Paper', or 'Scissors'"));
        console.log(roundResult);
        if (roundResult.includes("tie")) {
            continue;
        }
        score[roundResult.includes("Win") ? 0 : 1]++;
        round++;
    }
    if (score[0] > score[1]) {
        console.log(`You win! ${score[0]} to ${score[1]}!`);
    }
    else {
        console.log(`You lose! ${score[1]} to ${score[0]}!`);
    }
}

game();
