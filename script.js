'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!💖';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
let num = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  let highscore = Number(document.querySelector('.highscore').textContent);

  if (!guess) {
    document.querySelector('.message').textContent = '☹ No number!';
  } else if (guess !== num) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > num ? '❌ Number too large!' : '❌ Number too small!';
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.guess').value = '';
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'You lost the game 💩';
      document.querySelector('.guess').value = '';
    }
  } else if (guess === num) {
    document.querySelector('.message').textContent =
      '✔ Congratulations! You win! 🏆';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = num;
    if (highscore < score) {
      document.querySelector('.highscore').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = 'Something went wrong...';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  num = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
});
