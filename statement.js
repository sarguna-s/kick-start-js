/* If statement */

let mark = 80;
if (mark > 75) {
  console.log("Pass");
} else {
  console.log("Fail");
}

/*If else statement  */

let num1 = 18;
if (num1 % 2 == 1) {
  console.log("odd");
} else {
  console.log("even");
}

/* Else if statement */

let result1 = 90;
if (result1 > 95) {
  console.log("excellent");
} else if (result1 < 80) {
  console.log("average");
} else {
  console.log("poor");
}

/* Nested If statement */

let age = 25;

if (age > 25) {
  if (age > 50) {
    if (age > 18) {
      console.log("you are major");
    } else {
      console.log("eligible for vote");
    }
  } else {
    console.log("you are too old");
  }
} else {
  console.log("you are minor");
}
// if (age > 50) console.log("You're too Old!");
// else if (age > 18) console.log("You're eligible for Vote!");
// else console.log("You're minor");

/* Switch statement */

let operation = "Enter the operator";
const a = 30;
const b = 15;
let total;
switch ("-") {
  case "+":
    total = a + b;
    console.log(total);
    break;
  case "-":
    total = a - b;
    console.log(total);
    break;
  case "*":
    total = a * b;
    console.log(total);
    break;
  case "/":
    total = a / b;
    console.log(total);
    break;
  default:
    console.log("invalid operator");
    break;
}

/* Reverse Number */

let numb = 1234679;
function reverseNumber(numb) {
  let strNumb = numb.toString();

  let arrayNumb = strNumb.split("");
  let reversedArrayNumb = arrayNumb.reverse();
  let reversedStrNumb = reversedArrayNumb.join("");
  let reversedNumb = parseInt(reversedStrNumb);
  return reversedNumb;
}
console.log(reverseNumber(1236479));

/* for in loop */
/*  iterating over the properties of an object */
const person = {
  Name: "sarguna",
  age: 20,
  address: "chennai",
};
console.log(person["Name"]);
console.log(person["gender"]);

const family = [
  "Jayaraman",
  "Pazhaniammal",
  "Samidurai",
  "Alamelu",
  "Murugesh",
  "Poorni",
];
for (const key in family) {
  console.log(`key: ${key} , value: ${family[key]}`);
  // console.log(person[key]);
}

/* for of loop */
/* iterate over the iterable objects such as string,map,set array and more.*/

const Animals = ["lion", "tiger", "fox", "bear"];
for (const Animal of Animals) {
  console.log(Animal);
}

/* Array methods */

const fruits = ["apple", "orange", "banana", "mango"];

console.log(fruits[2]);

/* push method */
fruits.push("pineapple");
console.log(fruits);

/* pop method */
fruits.pop("pineapple");
console.log(fruits);

/* unshift */
fruits.unshift("strawberry");
console.log(fruits);

/* shift method */

fruits.shift("apple");
console.log(fruits);

/* length of array */

let array = [1, "guna", "true", "null", 3.98];
let length = array.length;
console.log(length);

/* concat method */

let veg = ["onion", "tomato", "beans"];
let vegs = veg.concat("green chilli");
console.log(vegs);

/* last index of */

let username = ["Guna", "sai", "Shakila", "Guna", "Seetha"];
// let index = username.lastIndexof("Guna");
console.log(username.lastIndexOf("Guna"));

/* Functions */

function prime(n) {
  if (n < 1) {
    return false;
  }

  for (i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(prime(3));

/* Fibonacci serious */

function Fibonacci(n) {
  let f1 = 2;
  let f2 = 1;
  let f3;
  for (i = 0; i < 5; i++) {
    f3 = f1 + f2;
    f1 = f2;
    f2 = f3;
    console.log(f3);
  }
}
Fibonacci();



function leap(l) {
  if (l % 400 === 0) {
    return "leap year";
  } else if (l % 4 === 0 && l % 100 !== 0) {
    return "leap year";
  } else {
    return "not a leap year";
  }
}
console.log(leap(2100));
