// function subscribeButton() {
//   const buttonElement = document.querySelector('.js-btn-subscribe');
//   if (buttonElement.innerText === 'Subscribe') {
//     buttonElement.innerText = 'Subscribed';
//   } else {
//     buttonElement.innerText = 'Subscribe';
//   }
// }

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value) * 100;
  cost < 4000 ? (cost += 1000) : cost;
  document.querySelector('.js-total-cost').innerHTML = `$${cost / 100}`;
}

function handleCostKeyDown(event) {
  if (event.key === 'Enter') calculateTotal();
}

// Exercises
// 9a. Create a <button>9a<button>. Use document.querySelector('button') to get the button from the page, and then display it in the console.
console.log(document.querySelector('button'));
// 9b. Continuing from 9a, create another button 9b below. Using JavaScript, change the text in the second button to '9b done!'
document.querySelector('.js-9b').innerHTML = '9b done!';
// 9c. Create 2 buttons 'heads' and 'tails', and a paragraph underneath. When clicking the 'heads' button, display 'You chose: heads' in the paragraph. When the 'tails' button, display 'You chose: tails'.
function choice(value) {
  document.querySelector('.js-choice').innerHTML = `You chose: ${value}`;
}
// 9d. Create a text box (<input>) and a submit button. When clicking 'Submit', display 'Your name is: ${text}' on the page (${text} = the text inside the box)
function getName() {
  const text = document.querySelector('.js-name-input').value;
  document.querySelector('.js-message').innerHTML = `Your name is: ${text}`;
}
// 9e. Modify exercise 9d so that when you press 'Enter' in the <input>, it will also display the same message on the page.
function handleNameKeyDown(event) {
  if (event.key === 'Enter') getName();
}
// 9f. Continuing from 9e, create a function to reuse the code.
// 9g. In the Amazon Shipping Calculator, enter a cost of 7.99 and click 'Calculate'. What issue dou you see? Find a fix for this issue.
// 9h. Let's create the project on the right: Whenever we type in the text box, update the text on the page. To do thie, we'll learn another event called <input onkeyup="...">. This runs code after we press a key and release it (key comes up)
function showText() {
  const text = document.querySelector('.js-text-input').value;
  document.querySelector('.js-text').innerHTML = text;
}
