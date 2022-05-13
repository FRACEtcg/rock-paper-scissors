const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const play = document.getElementById('play');
const choice = ['rock', 'paper', 'scissors'];
let firstblock = document.querySelector('.text');
let lastblock = document.querySelector('.text2');
let playerchoice = '';
let oppchoice = '';
let yourcounter = 0;
let oppcounter = 0;
let count = document.querySelector('.counterdiv');
count.style.display = 'none';
rock.addEventListener('click', () => {
	yourChoice('rock');
	round();
});
paper.addEventListener('click', () => {
	yourChoice('paper');
	round();
});
scissors.addEventListener('click', () => {
	yourChoice('scissors');
	round();
});
play.addEventListener('click', () => game());
//game functions
function yourChoice(name) {
	playerchoice = name;
}

function opponentsChoice() {
	oppchoice = choice[Math.floor(Math.random() * choice.length)];
}

function round() {
	opponentsChoice();
	if (oppcounter === 5 || yourcounter === 5) {
		endgame();
		lastblock.textContent = 'You have won the series!';
	} else if (oppcounter === 5) {
		endgame();
		lastblock.textContent = 'You have lost the series!';
	} else if (oppchoice === 'rock' && playerchoice === 'paper') {
		yourcounter += 1;
		lastblock.textContent = `You won. Your opponents choice was ${oppchoice}.`;
	} else if (oppchoice === 'rock' && playerchoice === 'scissors') {
		oppcounter += 1;
		lastblock.textContent = `You lost. Your opponents choice was ${oppchoice}.`;
	} else if (oppchoice === 'paper' && playerchoice === 'scissors') {
		yourcounter += 1;
		lastblock.textContent = `You won. Your opponents choice was ${oppchoice}.`;
	} else if (oppchoice === 'paper' && playerchoice === 'rock') {
		oppcounter += 1;
		lastblock.textContent = `You lost. Your opponents choice was ${oppchoice}.`;
	} else if (oppchoice === 'scissors' && playerchoice === 'paper') {
		oppcounter += 1;
		lastblock.textContent = `You lost. Your opponents choice was ${oppchoice}.`;
	} else if (oppchoice === 'scissors' && playerchoice === 'rock') {
		yourcounter += 1;
		lastblock.textContent = `You won. Your opponents choice was ${oppchoice}.`;
	} else {
    lastblock.textContent = `It's a draw. Your opponents choice was ${oppchoice}.Another round!`;
  }
	count.textContent = `the score is: ${yourcounter}:${oppcounter}`;
	console.log(oppchoice, playerchoice, oppcounter, yourcounter);
}

function game() {
	count.style.display = 'block';
	oppcounter = 0;
	yourcounter = 0;
	play.style.display = 'none';
	firstblock.textContent = `Get ready for the game of ROCK, PAPER, SCISSORS against the computer.
  Choose your option by clicking the appropriate picture below.`;
}
function endgame() {
	count.style.display = 'none';
	oppcounter = 0;
	yourcounter = 0;
	play.style.display = 'block';
	firstblock.textContent = `Click 'Play' button to play again.`;
}
