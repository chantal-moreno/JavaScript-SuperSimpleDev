let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

document
  .querySelector('.js-btn-rock')
  .addEventListener('click', () => playGame('rock'));
document
  .querySelector('.js-btn-paper')
  .addEventListener('click', () => playGame('paper'));
document
  .querySelector('.js-btn-scissors')
  .addEventListener('click', () => playGame('scissors'));
document
  .querySelector('.js-btn-reset')
  .addEventListener('click', () => resetScore());
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  } else if (event.key === 'a') {
    autoPlay();
  } else if (event.key === 'Backspace') {
    resetScore();
  }
});

let isAutoPlaying = false;
let intervalId;
let elementAutoPlay = document.querySelector('.js-btn-auto-play');
elementAutoPlay.addEventListener('click', () => autoPlay());
function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
    elementAutoPlay.innerHTML = 'Stop Playing';
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    elementAutoPlay.innerHTML = 'Auto play';
  }
}
function resetScore() {
  let confirmationMessage = document.querySelector('.js-confirmation-message');
  confirmationMessage.innerHTML = `<p>Are you sure you want to reset the score?</p>
  <button class="js-btn-yes">Yes</button>
  <button class="js-btn-no">No</button>`;
  document.querySelector('.js-btn-yes').addEventListener('click', () => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
    confirmationMessage.innerHTML = '';
  });
  document
    .querySelector('.js-btn-no')
    .addEventListener('click', () => (confirmationMessage.innerHTML = ''));
}
function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';
  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie';
    } else if (computerMove === 'paper') {
      result = 'You lose!';
    } else {
      result = 'You win!';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'paper') {
      result = 'Tie';
    } else if (computerMove === 'scissors') {
      result = 'You lose!';
    } else {
      result = 'You win!';
    }
  } else if (playerMove === 'scissors') {
    if (computerMove === 'scissors') {
      result = 'Tie';
    } else if (computerMove === 'rock') {
      result = 'You lose!';
    } else {
      result = 'You win!';
    }
  }

  if (result === 'You win!') {
    score.wins++;
  } else if (result === 'You lose!') {
    score.losses++;
  } else {
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector(
    '.js-moves'
  ).innerHTML = `You <img src="img/${playerMove}-emoji.png" alt="${playerMove}" />
  <img src="img/${computerMove}-emoji.png" alt="${computerMove}" /> Computer`;
}
function updateScoreElement() {
  document.querySelector(
    '.js-score'
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }
  return computerMove;
}
