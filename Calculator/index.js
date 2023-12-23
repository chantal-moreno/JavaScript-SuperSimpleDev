// 5n. Create a script, create a variable called 'calculation', and save an empty string inside: let calculation '';
let calculation = localStorage.getItem('calculation') || '';
showCalculation();
// 7g. Create a function 'updateCalculation' and reuse the code.
function updateCalculation(character) {
  calculation += character;
  showCalculation();
  localStorage.setItem('calculation', calculation);
}
// 8h. We'll add localStorage. Whenever we update the calculation, save it using .setItem(). When the page is loaded, get the calculation using .getItem(). Use a default value of '' if calculation doesn't exist in local storage
// 9j. Whenever we update the calculation, display it on the page instead of in the console. When page first loads, if calculation exist in localStorage, display it on page.
function showCalculation() {
  document.querySelector('.js-calculation').innerHTML = calculation;
}
