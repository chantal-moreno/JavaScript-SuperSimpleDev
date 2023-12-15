// 7a.  Create a function called 'greet' that displays the message 'Hello!' in the console. Call / run this function a few times usign: greet();
// 7b. Continuing from 7a, add a parameter called 'name' to the 'greet' function and display the message: 'Hello ${name}!'. Call the function a few times with different names: greet('Simon');
// 7c. Try calling greet() without a name (it will display 'Hello undefined!'). Modify the function so that if 'name' is undefined, it will display 'Hi there!' instead.
function greet(name = "Hi there") {
  console.log(`Hello ${name}!`);
}
greet("Chent");
greet("Cris");
greet();
// 7d. Create a function 'convertToFahrenheit(celsius)' that takes a number in degrees Celsius and returns a number in degrees Fahrenheit. Formula: Fahrenheit = (Celsius*9/5)+32
function convertToFahrenheit(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
console.log(convertToFahrenheit(25));
// 7e. Create a function 'convertToCelsius(fahrenheit)' that takes a number in degrees Fahrenheit and returns a number in degrees Celsius. Formula: Celsius = (Fahrenheir-32)*5/9
function convertToCelsius(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}
console.log(convertToCelsius(86));
// 7f. Create a function 'convertTemperature(degrees, unit)' that takes a number and a unit ('C' pr 'F'), and convert it into the other unit.
function convertTemperature(degrees, unit) {
  if (unit === "F") {
    return convertToCelsius(degrees) + "C";
  } else if (unit === "C") {
    return convertToFahrenheit(degrees) + "F";
  }
}
console.log(convertTemperature(25, "C"));
console.log(convertTemperature(86, "F"));
