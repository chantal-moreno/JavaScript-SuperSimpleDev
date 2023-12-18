// const product = {
//   name: "socks",
//   price: 1090,
// };
// console.log(product);
// console.log(product.name);
// console.log(product.price);

// product.name = "cotton socks";
// console.log(product);
// product.newProperty = true;
// console.log(product);
// delete product.newProperty;
// console.log(product);

// const product2 = {
//   name: "shirt",
//   "delivery-time": "1 day",
//   rating: {
//     stars: 4.5,
//     count: 87,
//   },
//   fun: function function1() {
//     return "function inside object";
//   },
// };
// console.log(product2);
// console.log(product2["name"]);
// //If we dont use bracke notation here, we wolud get an error because the name have a dash (-)
// console.log(product2["delivery-time"]);
// //use dot notation by default
// //for properties that don't work, use bracket notation
// console.log(product2.rating);
// console.log(product2.rating.count);
// console.log(product2.fun());

// //JavaScript Object to JSON(String)
// console.log(JSON.stringify(product2));
// //JSON to JavaScript Object
// const jsonString = JSON.stringify(product2);
// console.log(JSON.parse(jsonString));

// //Destructuring
// //Easy way to take properties out of an object
// const object1 = {
//   messsage: "God job!",
//   price: 799,
// };
// const { messsage, price } = object1;
// console.log(messsage);
// console.log(price);

// //Shorthand Property
// //If the property and the variable name are the same
// const object2 = {
//   //messsage: messsage,
//   messsage,
// };
// console.log(object2);

// //Shorthand method
// const object3 = {
//   // method: function function1() {
//   //   console.log("method");
//   // },
//   method() {
//     console.log("method");
//   },
// };
// console.log(object3);
// object3.method();

//Exercises
// 8a. Let's say in the Amazon project, we have a basketball product. This product has a name of 'basketball', a price of 2095 cents. Create an object to represent this product and display it in the console.
const product = {
  name: 'basketball',
  price: 2095,
};
console.log(product);
// 8b. Continuing from 8a, let's say we want to increase the price by 500 cents. Use dot notation to increse the price, and display the update object in the console.
product.price += 500;
console.log(product);
// 8c. Using bracket notation, add a property 'delivery-time' to the object with the value '3 days'. Display the update object in the console.
product['delivery-time'] = '3 days';
console.log(product);
// 8d. Create a function 'comparePrice(product1,product2)', which takes 2 products (with 'name' and 'price' properties) and returns the product that is less expensive. Create 2 products and try out the function.
function comparePrice(product1, product2) {
  if (product1.price < product2.price) {
    return product1;
  } else {
    return product2;
  }
}
const product1 = {
  name: 'PS5 (Play Station 5)',
  price: 11000,
};
const product2 = {
  name: 'Nintendo Switch',
  price: 9000,
};
console.log(comparePrice(product1, product2));
// 8e. Create a function 'isSameProduct(product1, product2)', which returns true if 2 products have the same values inside('name' and 'price'). If not, return false. Create 2 products and try out the function.(Objects are references so you can´t compare them directly)
function isSameProduct(product1, product2) {
  return product1.name === product2.name && product1.price === product2.price
    ? true
    : false;
}
console.log(isSameProduct(product1, product2));
// 8f. Using Google or and A.I. tool, search hot to convert a string to all lowercase with JavaScript('Good Morning' => 'good morning')
const text = 'Good Morning';
console.log(text.toLowerCase());
// 8g. Search how to repeat a string many times ('test' 2 times => 'testest')
console.log('test'.repeat(2));
