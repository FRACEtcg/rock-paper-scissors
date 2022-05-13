const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const play = document.getElementById('play');
const choice = ['rock', 'paper', 'scissors'];
let firstblock = document.querySelector('.text');
let lastblock = document.querySelector('.text2');
rock.addEventListener('click', () => {
	yourChoice(this);
	round();
});
paper.addEventListener('click', () => {
	yourChoice(this);
	round();
});
scissors.addEventListener('click', () => {
	yourChoice(this);
	round();
});
play.addEventListener('click', () =>game());

function yourChoice(name) {
	playerchoice = name.id;
}
yourChoice(rock);
function opponentsChoice() {
	thechoice = choice[Math.floor(Math.random() * choice.length)];
}
function game() {
	play.style.display = 'none';
	firstblock.textContent = `Get ready for the game of ROCK, PAPER, SCISSORS against the computer.
  Choose your option by clicking the appropriate picture below`;
}
function round() {
}
