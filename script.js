// Rock Paper Scissors Game

const randomNumber = () => Math.floor(Math.random() * 3);

function computerPlay(randomNumber) {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[randomNumber];
}

console.log(computerPlay(randomNumber()));