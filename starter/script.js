'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 25;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secrateNmber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// document.querySelector('.number').textContent = secrateNmber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //there is no input
  if (!guess) {
    displayMessage('🎉 No Number');
    // document.querySelector('.message').textContent = '🎉 No Number';

    //with win correct
  } else if (guess === secrateNmber) {
    displayMessage('🎉 Correct Number!');
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secrateNmber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //gues is to high
  } else {
    if (score > 1) {
      displayMessage(guess > secrateNmber ? '⚡Too high!' : '⚠ Too low');
      // document.querySelector('.message').textContent =
      // guess > secrateNmber ? '⚡Too high!' : '⚠ Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      // document.querySelector('.message').textContent = 'You lost the game!';
      // score--;
      document.querySelector('.score').textContent = 0;
    }
  }

  // } else if (guess > secrateNmber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '⚡Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     // score--;
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //guess is too low
  // } else if (guess < secrateNmber) {
  //   if (score > 1) {
  //     if (score) document.querySelector('.message').textContent = '⚠ Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game!';
  //     // score--;
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  // document.querySelector('.highscore').textContent = score;
  score = 20;
  secrateNmber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
