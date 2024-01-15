let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

let isAutoPlaying = false;
let intervalId;
function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(function () {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
    document.querySelector('.btn-auto-play').innerHTML = 'Stop Autp play';
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    document.querySelector('.btn-auto-play').innerHTML = 'Auto play';
  }
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
