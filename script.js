'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let gameOver = false;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'Please enter a number...';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'The number is correct!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('h1').textContent = 'You won the game!';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.guess').disabled = false;
      document.querySelector('.check').disabled = false;
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Number too high!' : 'Number too low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = 'You lost the game!';
    document.querySelector('.score').textContent = 0;
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('h1').textContent = 'GAME OVER!';
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('h1').innerHTML =
    'Guess My Number!<br>(Between 1 and 20)';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
});
