// Rock Paper Scissors Game

// Globals
const choices = Array.from(document.getElementsByClassName("play-game"));
const reset = document.getElementById("reset");
const display = document.getElementById("display");
const scores = {
  player: document.getElementById("player-score"),
  computer: document.getElementById("computer-score")
};

// Event Listeners
choices.forEach(choice => choice.addEventListener("click", play));
reset.addEventListener("click", startNewGame);

// Functions
function play() {
  console.log(this.id)
  const roundResult = playRound(this.id);

  display.innerHTML = roundResult;
  incrementScore(roundResult);
  if (endGameCheck(scores)) toggleHiddenButtons();
}

function startNewGame() {
  display.innerHTML = "Let's play a game!";
  scores.player.innerText = 0;
  scores.computer.innerText = 0;
  toggleHiddenButtons();
}

function toggleHiddenButtons() {
  choices.forEach(choice => choice.classList.toggle("hidden"));
  reset.classList.toggle("hidden");
}

const randomNumber = () => Math.floor(Math.random() * 3);

function computerPlay(randomNumber) {
  const computerChoices = ['rock', 'paper', 'scissors'];

  return computerChoices[randomNumber];
}

function playRound(playerSelection, computer = computerPlay(randomNumber())) {
  const player = String(playerSelection).toLowerCase();

  if (player === 'rock' || player === 'paper' || player === 'scissors') {
    if (player === computer) return "It's a tie, try again!";
    switch (player) {
      case 'rock':
        return computer === 'scissors' ?
          'You Win! Rock beats Scissors!' : 'You Lose! Paper beats Rock!';
      case 'paper':
        return computer === 'rock' ?
          'You Win! Paper beats Rock!' : 'You Lose! Scissors beats Paper!';
      default:
        return computer === 'paper' ?
          'You Win! Scissors beats Paper!' : 'You Lose! Rock beats Scissors!';
    }
  }
  throw new Error("You must chose 'Rock', 'Paper', or 'Scissors'");
}

function incrementScore(roundResult, currentScore = scores) {
  if (roundResult.includes('tie')) return;
  const winner = roundResult.includes('Win') ? "player" : "computer";
  let winScore = parseInt(currentScore[winner].innerText);
  currentScore[winner].innerText = winScore += 1;
}

function endGameCheck(scores, endDisplay = display) {
  const player = parseInt(scores.player.innerText);
  const computer = parseInt(scores.computer.innerText);
  let result = false;

  if (player === 3 || computer === 3) {
    endDisplay.innerHTML = player > computer ?
      `You win ${player} to ${computer}!` : `You lose ${computer} to ${player}!`;
    result = true;
  }
  return result;
}