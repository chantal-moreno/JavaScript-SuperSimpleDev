// 12a. Create a variable called 'add' and save a function inside. This function will console.log(2+3); Run th function twice.
const add = function () {
  console.log(2 + 3);
};
add();
add();
// 12b. Continuing from exrcise 12a, create a function runTwice(fun) that takes a function (as a parameter) and runs it twice.
function runTwice(fun) {
  fun();
  fun();
}
runTwice(function () {
  console.log('12b');
});
runTwice(add);
// 12c. Create the button below. When clicking the button, afeter 1 second, the text inside the button changes to 'Finished!'.
// function changeText() {
//   const btn = document.querySelector('.js-btn');
//   setTimeout(() => {
//     btn.innerHTML = 'Finished';
//   }, 1000);
// }
// 12d. Continuing from exercise 12c, modify the button so that when we click it, the text immediately changes to 'Loading...', and then after 1 second, it changes to 'Finished!'
function changeText() {
  const btn = document.querySelector('.js-btn');
  btn.innerHTML = 'Loading...';
  setTimeout(() => {
    btn.innerHTML = 'Finished!';
  }, 1000);
}
// 12e. Create the 'Add to cart' button below. When clicking this button, display the message 'Added' below the button. Then, afetr 2 seconds, remove the message.
// function addToCart() {
//   const msg = document.querySelector('.js-message');
//   msg.innerHTML = 'Added';
//   setTimeout(() => {
//     msg.innerHTML = '';
//   }, 2000);
// }
// 12f. Continuing from 12e, if we click the buton, wait 1 to 1.5 seconds, and then click the button again, notice that the second time, thee message disappears very quickly (because the first setTimeout is still running and will make the message disappear very soon). Modify the code so when click the button, it refreshes the 2 second wait time.
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
// setInterval(function () {
//   if (document.title === 'Lesson 12 - Advanced Functions') {
//     document.title = `(${messages}) New Messages`;
//   } else {
//     document.title = 'Lesson 12 - Advanced Functions';
//   }
// }, 1000);
// 12i. Continuing from 12h, don´t let messages go below 0. If messgaes === 0 stop changing the tittle and display just the other title. When messages > 0 start changing the tittle again.
let messages = 2;
setInterval(function () {
  if (document.title === 'Lesson 12 - Advanced Functions' && messages > 0) {
    document.title = `(${messages}) New Messages`;
  } else {
    document.title = 'Lesson 12 - Advanced Functions';
  }
}, 1000);
