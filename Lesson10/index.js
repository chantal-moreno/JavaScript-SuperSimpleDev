function subscribeButton() {
  const buttonElement = document.querySelector('.js-btn-subscribe');
  if (buttonElement.innerText === 'Subscribe') {
    buttonElement.innerText = 'Subscribed';
    buttonElement.classList.add('is-subscribed');
  } else {
    buttonElement.innerText = 'Subscribe';
    buttonElement.classList.remove('is-subscribed');
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value) * 100;
  cost < 4000 ? (cost += 1000) : cost;
  document.querySelector('.js-total-cost').innerHTML = `$${cost / 100}`;
}

function handleCostKeyDown(event) {
  if (event.key === 'Enter') calculateTotal();
}
