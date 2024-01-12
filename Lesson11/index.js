const todoList = [
  {
    name: 'make dinner',
    dueDate: '2024-01-12',
  },
  {
    name: 'wash dishes',
    dueDate: '2024-01-12',
  },
];
renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;
    const html = `
    <div>
      ${name} 
    </div>
    <div>
      ${dueDate} 
    </div>
    <button onclick="removeTodo(${i})">Delete</button>
    `;
    todoListHTML += html;
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  todoList.push({ name, dueDate });
  inputElement.value = '';
  dateInputElement.value = '';
  renderTodoList();
}
function removeTodo(index) {
  todoList.splice(index, 1);
  renderTodoList();
}

//Exercises Part 1
// 11a. Create an array of numbers: const nums = [10,20,30]; Modify the last value in this array and change it to 99.
// const nums = [10, 20, 30];
// nums[2] = 99;
// console.log(nums);
// 11b. Create a function getLastValue(array) that takes an array and returns the last value in the array
// getLastValue([1, 20, 22, 24, 5]);
// getLastValue(['hi', 'hello', 'good']);
// function getLastValue(array) {
//   return console.log(array[array.length - 1]);
// }
// 11c. Create a function arraySwap(array) that takes an array and returns an array when the first and last values are swapped. Example [1,20,22,24,5] = [5,20,22,24,1]
// arraySwap([1, 20, 22, 24, 5]);
// arraySwap(['hi', 'hello', 'good']);
// function arraySwap(array) {
//   const firstValue = array[0];
//   const lastValue = array[array.length - 1];
//   array[0] = lastValue;
//   array[array.length - 1] = firstValue;
//   return console.log(array);
// }
// 11d. Create a for loop that count up from 0 to 10, but counts ub by 2.
// for (let i = 0; i < 11; i += 2) {
//   console.log(i);
// }
// 11e. Create a for loop that count down from 5 to 0.
// for (let i = 5; i > -1; i--) {
//   console.log(i);
// }
// 11f. Do exercise 11d and 11e, but using while loops.
// let i = 0;
// while (i < 11) {
//   console.log(i);
//   i += 2;
// }
// i = 5;
// while (i > -1) {
//   console.log(i);
//   i--;
// }
// 11g. Create a loop that takes an array of numbers and creates a new array where each number is increased by 1.
// let numbers = [1, 2, 3];
// for (let i = 0; i < numbers.length; i++) {
//   numbers[i]++;
// }
// console.log(numbers);
// 11h. Create a function addOne(array) that takes an array of numbers and return an array when each number is increased by 1.
// addOne([1, 2, 3]);
// addOne([-2, -1, 0, 99]);
// function addOne(array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i]++;
//   }
//   return console.log(array);
// }
// 11i. Crate a function addNum(array,num) that takes an  array of numbers and returns an array where each number is increased by 'num'.
// addNum([1, 2, 3], 2);
// addNum([1, 2, 3], 3);
// addNum([-2, -1, 0, 99], 2);
// function addNum(array, num) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] += num;
//   }
//   return console.log(array);
// }
// 11j. Create a function addArray(array1,array2) that takes 2 arrays of numbers and adss each number in the arrays together.
// addArrays([1, 1, 2], [1, 1, 3]);
// addArrays([1, 2, 3], [4, 5, 6]);
// function addArrays(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     array1[i] += array2[i];
//   }
//   return console.log(array1);
// }
// 11k. Create a function countPositive(nums) that takes an array of numbers and returns how many numbers in the array are greater than 0.
// countPositive([1, -3, 5]);
// countPositive([-2, 3, -5, 7, 10]);
// function countPositive(array) {
//   let nums = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > 0) nums++;
//   }
//   return console.log(nums);
// }
// 11l. Create a function minMax(nums) that takes an array of numbers and returns an object with the minimum and maximum numbers in the array.
// minMax([1, -3, 5]);
// minMax([-2, 5, -5, 7, 10]);
// function minMax(array) {
//   const result = {
//     min: null,
//     max: null,
//   };
//   for (let i = 0; i < array.length; i++) {
//     if (result.max === null || array[i] > result.max) {
//       result.max = array[i];
//     }
//     if (result.min === null || array[i] < result.min) {
//       result.min = array[i];
//     }
//   }
//   return console.log(result);
// }
// 11m. Update exercise 11l to also handle these cases.
// minMax([]);
// minMax([3]);
// 11n. Create a function countWords(words) that takes an array of strings and returns an object with how many times each string appeared.
// countWords(['apple', 'grape', 'apple', 'apple']);
// function countWords(array) {
//   const words = {};
//   for (let i = 0; i < array.length; i++) {
//     array[i] in words ? words[array[i]]++ : (words[array[i]] = 1);
//   }
//   return console.log(words);
// }
