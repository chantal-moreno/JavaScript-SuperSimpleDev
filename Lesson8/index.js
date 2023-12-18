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

const product2 = {
  name: "shirt",
  "delivery-time": "1 day",
  rating: {
    stars: 4.5,
    count: 87,
  },
  fun: function function1() {
    return "function inside object";
  },
};
console.log(product2);
console.log(product2["name"]);
//If we dont use bracke notation here, we wolud get an error because the name have a dash (-)
console.log(product2["delivery-time"]);
//use dot notation by default
//for properties that don't work, use bracket notation
console.log(product2.rating);
console.log(product2.rating.count);
console.log(product2.fun());

//JavaScript Object to JSON(String)
console.log(JSON.stringify(product2));
//JSON to JavaScript Object
const jsonString = JSON.stringify(product2);
console.log(JSON.parse(jsonString));

//Destructuring
//Easy way to take properties out of an object
const object1 = {
  messsage: "God job!",
  price: 799,
};
const { messsage, price } = object1;
console.log(messsage);
console.log(price);

//Shorthand Property
//If the property and the variable name are the same
const object2 = {
  //messsage: messsage,
  messsage,
};
console.log(object2);

//Shorthand method
const object3 = {
  // method: function function1() {
  //   console.log("method");
  // },
  method() {
    console.log("method");
  },
};
console.log(object3);
object3.method();
