function subscribeButton() {
  const buttonElement = document.querySelector('.js-btn-subscribe');
  if (buttonElement.innerText === 'Subscribe') {
    buttonElement.innerText = 'Subscribed';
  } else {
    buttonElement.innerText = 'Subscribe';
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);
  cost < 40 ? (cost += 10) : cost;
  document.querySelector('.js-total-cost').innerHTML = `$${cost}`;
}

function handleCostKeyDown(event) {
  if (event.key === 'Enter') calculateTotal();
}
