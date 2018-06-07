// Rock Paper Scissors Game

// Globals
const choices = document.getElementsByTagName("button");
const display = document.getElementById("display");
const scoreboard = document.getElementById("scoreboard");
const scores = {
  player: scoreboard.childNodes[3],
  computer: scoreboard.childNodes[7]
};

// Event Listeners
[...choices].forEach(choice => choice.addEventListener("click", playRound));

// Functions
function playRound() {
  const roundResult = playRound(this.innerHTML);
  display.innerHTML = roundResult;
  incrementScore(roundResult);
  if (endGameCheck(scores)) {
    [...choices].forEach(choice => choice.removeEventListener("click", playRound)); 
  }
}

const randomNumber = () => Math.floor(Math.random() * 3);

function computerPlay(randomNumber) {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[randomNumber];
}

function playRound(playerSelection, computer = computerPlay(randomNumber())) {
  const player = String(playerSelection).toLowerCase();
  if (player === 'rock' || player === 'paper' || player === 'scissors') {
    if (player === computer) {
      return "It's a tie, try again!";
    }
    switch (player) {
      case 'rock':
        return computer === 'scissors' ?
          'You Win! Rock beats Scissors!' :
          'You Lose! Paper beats Rock!';
      case 'paper':
        return computer === 'rock' ?
          'You Win! Paper beats Rock!' :
          'You Lose! Scissors beats Paper!';
      default:
        return computer === 'paper' ?
          'You Win! Scissors beats Paper!' :
          'You Lose! Rock beats Scissors!';
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
  if (player + computer === 5) {
    endDisplay.innerHTML = (player > computer) ? `You win! ${player} to ${computer}!` : `You lose! ${computer} to ${player}!`;
    result = true;
  }
  return result;
}
// function game(playerChoice) {
//   const score = [0, 0];
//   let roundResult,
//     round = 1;
//   while (round <= 5) {
//     roundResult = playRound(playerChoice());
//     console.log(roundResult);
//     if (roundResult.includes('tie')) {
//       continue;
//     }
//     score[roundResult.includes('Win') ? 0 : 1]++;
//     round++;
//   }
//   if (score[0] > score[1]) {
//     console.log(`You win! ${score[0]} to ${score[1]}!`);
//   } else {
//     console.log(`You lose! ${score[1]} to ${score[0]}!`);
//   }
// }