'use strict';

const seceretScore = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = seceretScore;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === seceretScore) {
    document.querySelector('.message').textContent = '💐 Correct Number';
  } else if (guess > seceretScore) {
    document.querySelector('.message').textContent = '📈 Too High';
  } else if (guess < seceretScore) {
    document.querySelector('.message').textContent = '📉 Too Low';
  }
});
