// Exercises Part 1
// 12a. Create a variable called 'add' and save a function inside. This function will console.log(2+3); Run th function twice.
// const add = function () {
//   console.log(2 + 3);
// };
// add();
// add();
// 12b. Continuing from exrcise 12a, create a function runTwice(fun) that takes a function (as a parameter) and runs it twice.
// function runTwice(fun) {
//   fun();
//   fun();
// }
// runTwice(function () {
//   console.log('12b');
// });
// runTwice(add);
// 12c. Create the button below. When clicking the button, afeter 1 second, the text inside the button changes to 'Finished!'.
// document.querySelector('.js-btn').addEventListener('click', () => changeText());
// function changeText() {
//   const btn = document.querySelector('.js-btn');
//   setTimeout(() => {
//     btn.innerHTML = 'Finished';
//   }, 1000);
// }
// 12d. Continuing from exercise 12c, modify the button so that when we click it, the text immediately changes to 'Loading...', and then after 1 second, it changes to 'Finished!'
document.querySelector('.js-btn').addEventListener('click', () => changeText());
function changeText() {
  const btn = document.querySelector('.js-btn');
  btn.innerHTML = 'Loading...';
  setTimeout(() => {
    btn.innerHTML = 'Finished!';
  }, 1000);
}
// 12e. Create the 'Add to cart' button below. When clicking this button, display the message 'Added' below the button. Then, afetr 2 seconds, remove the message.
// document
//   .querySelector('.js-btn-add')
//   .addEventListener('click', () => addToCart());
// function addToCart() {
//   const msg = document.querySelector('.js-message');
//   msg.innerHTML = 'Added';
//   setTimeout(() => {
//     msg.innerHTML = '';
//   }, 2000);
// }
// 12f. Continuing from 12e, if we click the buton, wait 1 to 1.5 seconds, and then click the button again, notice that the second time, thee message disappears very quickly (because the first setTimeout is still running and will make the message disappear very soon). Modify the code so when click the button, it refreshes the 2 second wait time.
document
  .querySelector('.js-btn-add')
  .addEventListener('click', () => addToCart());
let timeOut;
function addToCart() {
  const msg = document.querySelector('.js-message');
  msg.innerHTML = 'Added';
  clearTimeout(timeOut);
  timeOut = setTimeout(() => {
    msg.innerHTML = '';
  }, 2000);
}
// 12g. Imagine we're creating a messaging app. Use setInterval() and document.title to make the tittle changes every 1 second.
// setInterval(() => {
//   if (document.title === 'Lesson 12 - Advanced Functions') {
//     document.title = '(2) New Messages';
//   } else {
//     document.title = 'Lesson 12 - Advanced Functions';
//   }
// }, 1000);
// 12h. Continuing from 12g, instead of displaying "(2) New Messages" every time, save the number of messages in a variable: let messages = 2;
// let messages = 2;
// setInterval(() => {
//   if (document.title === 'Lesson 12 - Advanced Functions') {
//     document.title = `(${messages}) New Messages`;
//   } else {
//     document.title = 'Lesson 12 - Advanced Functions';
//   }
// }, 1000);
// 12i. Continuing from 12h, don´t let messages go below 0. If messgaes === 0 stop changing the tittle and display just the other title. When messages > 0 start changing the tittle again.
let messages = 2;
document
  .querySelector('.js-btn-add-msg')
  .addEventListener('click', () => messages++);
document.querySelector('.js-btn-remove-msg').addEventListener('click', () => {
  if (messages > 0) messages--;
});
setInterval(() => {
  if (document.title === 'Lesson 12 - Advanced Functions' && messages > 0) {
    document.title = `(${messages}) New Messages`;
  } else {
    document.title = 'Lesson 12 - Advanced Functions';
  }
}, 1000);

// Exercises Part 2
// 12j. Create an arrow function called 'multiply' that takes 2 numbers, multiples them together, and returns the result.
let multiply = (number1, number2) => number1 * number2;
console.log(multiply(2, 3));
console.log(multiply(7, 10));
//12k. Continuing from exercise 12j, write the arrow function on one line (if you already did this, skip this exercise)
//12l. Create a function countPositive(nums) that takes an array of numbers and returns how many numbers in the array are greater than 0. Create this function using .forEach() instead of a loop.
console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));
function countPositive(nums) {
  let count = 0;
  nums.forEach((num) => {
    if (num > 0) count++;
  });
  return count;
}
// 12m. Create a function addNum(array,num) that takes an array of numbers and returns an array where each number is increased by 'num'. Create this function using .map() instead of a loop.
console.log(addNum([1, 2, 3], 2));
console.log(addNum([-2, -1, 0, 99], 2));
function addNum(array, num) {
  return array.map((value) => value + num);
}
//12n. Create a function removeEgg(foods) that takes an array of strings and returns an array where the string 'egg' is removed. Create this function using filter() instead of a loop.
// console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));
// function removeEgg(foods) {
//   return foods.filter((food) => food !== 'egg');
// }
//12o. Update exercise 12n to only remove the first 2 eggs from the array. Again, use .filter() intead of a loop.
console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));
function removeEgg(foods) {
  let numberOfEggs = 0;
  return foods.filter((food) => {
    if (food === 'egg' && numberOfEggs < 2) {
      numberOfEggs++;
      return false;
    } else {
      return true;
    }
  });
}
//12p. Go back to the earlier exercises in 12(12c-12i) and switch the code to use arrow functions.
//12q. Go back to the earlier exercise in lesson 12(12c-12i) and instead of using onclick="...", switch the code to use .addEventListener('click', ...)
//12r. Make a copy of the Rock Paper Scissors, UPDATE.
//12s. Update the 'Auto Play' button to use .addEventListener().
//12t. Update the 'Auto Play' button so that when the game is auto playing, the text in the button is 'Stop Playing'.
//12u. Update the code so pressing 'a' on keyboard will auto play the game. pressing 'r' play rock, pressing 'p' play paper, pressing 's' scissors.
//12v. Update the 'Reset Score' button to use .addEventListener()
//12w. Update the code so pressing 'Backspace' will reset the score.
//12x, When clicking 'Reset Score' or pressing 'Backspace', instead of resetting the score immediately, display a confirmation message below the button. Yes = reset score and hide the message. No = will not reset the score, and hide the message.
