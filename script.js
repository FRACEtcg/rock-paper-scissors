const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const play = document.getElementById('play');
const choice = ['rock', 'paper', 'scissors'];
rock.addEventListener('click', round());
paper.addEventListener('click', round());
scissors.addEventListener('click', round());
play.addEventListener('click', game())
function opponentsChoice() {
  thechoice = choice[Math.floor(Math.random()*choice.length)];
}
function game() {
  play.style.display = 'none';
  let firstblock = document.body.querySelector('text');
  let lastblock = document.body.querySelectorAll('text').pop();
  play.style.display = 'block';
}
function round() {

}