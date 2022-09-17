// Functions

// standard version

function testFunction() {
  console.log("Function has run");
}

//testFunction();

// arrow function

const arrowFunction = () => {
  console.log("Arrow function has run");
};

//arrowFunction();

//

let firstName = "Hilde";
const timeOfDay = "evening";

const greetFunction = (name, time) => {
  const scopedVar = "Only available in the function";
  console.log(`Good ${time} ${name}`);
  firstName = "Tommy";
};

//greetFunction(timeOfDay, firstName);
//console.log(firstName);

// Scope

// Return

const returnTest = () => {
  //console.log("Function has run");
  const scopedVar = "This string has left this function";
  return scopedVar;
};
let returnedValue = returnTest();

//console.log(returnedValue);

// example

//const multiply = (num1, num2) => num1 * num2;

//function multiply(num1, num2) {
//  return num1 * num2;
//}

//console.log(multiply(4421312, 52432));

function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}

//let total = calculator(1597441, 789, "-");
//console.log(calculator(1597441, 789, "-"));

const funFunction = () => {
  console.log("whatever");
};

funFunction();

function iceCream() {
  console.log("iceCream");
}

iceCream();
