// function subscribeButton() {
//   const buttonElement = document.querySelector('.js-btn-subscribe');
//   if (buttonElement.innerText === 'Subscribe') {
//     buttonElement.innerText = 'Subscribed';
//     buttonElement.classList.add('is-subscribed');
//   } else {
//     buttonElement.innerText = 'Subscribe';
//     buttonElement.classList.remove('is-subscribed');
//   }
// }

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value) * 100;
  cost < 4000 ? (cost += 1000) : cost;
  document.querySelector('.js-total-cost').innerHTML = `$${cost / 100}`;
}

// function handleCostKeyDown(event) {
//   if (event.key === 'Enter') calculateTotal();
// }

// Exercises
// 10c.
const button = document.querySelector('.js-button');
console.log(button.classList.contains('js-button'));
// 10d.
function toggleButton(btnClass) {
  const button = document.querySelector(btnClass);
  if (button.classList.contains('is-toggled')) {
    button.classList.remove('is-toggled');
  } else {
    checkToogle();
    button.classList.add('is-toggled');
  }
}
function checkToogle() {
  const btnToogle = document.querySelector('.is-toggled');
  if (btnToogle) {
    btnToogle.classList.remove('is-toggled');
  }
}
function errorMesssage() {
  const input = document.querySelector('.js-cost-input');
  if (input.value < 0) {
    document.querySelector('.js-total-cost').classList.add('error');
    document.querySelector('.js-total-cost').innerHTML =
      'Error: cost cannot be less then $0';
  } else {
    document.querySelector('.js-total-cost').classList.remove('error');
  }
}
