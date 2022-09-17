// this is a comment

// let me know that you see this comment

console.log("I want ice cream!");

console.log("I want ice cream too!");

console.log("heisan");

console.log("ohhohoho");

console.log("Hello World!");

console.log("BANANA!!!!!");

console.log(" i+ want chocalate");

/*
comparison operators

*/

let myNumber = "5";
let myNumber2 = 5;

if (myNumber === myNumber2) {
  console.log("Equal");
} else {
  console.log("Not equal");
}

let time = "I don't know";

let drink;

console.log(drink ? "Yes, drink" : "Nothing to see here");

switch (time) {
  case "Afternoon":
    drink = "Tea";
    break;
  case "Morning":
    drink = "Milk";
    break;
  case "Day":
    drink = "Vodka";
    break;
  case "Evening":
    drink = "Orange Juice";
    break;
  case "Night":
    drink = "Another shot of vodka";
    break;
  default:
    drink = "Whatever";
    break;
}

console.log(drink);

let day;

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    break;
}

console.log(day);
