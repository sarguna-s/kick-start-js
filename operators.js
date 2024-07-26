// // ASSIGNMENT
// const a = 10;
// let b = 15;
// b = 20;

// // ARITHMETIC (PODMAS)
// const addition = 5 + 5;
// let subtraction = 50 - 5;
// console.log(">>>>>>>>>>>>> SUB-STEP: 1", subtraction);
// subtraction *= 5;
// console.log(">>>>>>>>>>>>> SUB-STEP: 2", subtraction);
// subtraction /= 2;
// console.log(">>>>>>>>>>>>> SUB-STEP: 3", subtraction);
// subtraction %= 5;
// console.log(">>>>>>>>>>>>> SUB-STEP: 4", subtraction);

// COMPARISON
// console.log(">>>>>>>>>>>>> COMP-STEP: 5 == 5", 5 == 5);
// console.log('>>>>>>>>>>>>> COMP-STEP: 5 == "5"', 5 == "5"); /* BAD */
// console.log(">>>>>>>>>>>>> COMP-STEP: 5 === 5", 5 === 5); /* GOOD */
// console.log('>>>>>>>>>>>>> COMP-STEP: 5 === "5"', 5 === "5");
// console.log(">>>>>>>>>>>>> COMP-STEP: 5 !== 5", 5 !== 5); /* GOOD */
// console.log('>>>>>>>>>>>>> COMP-STEP: 5 !== "5"', 5 !== "5");

// LOGICAL
const a = 5;
const b = 5;
const c = "5";

console.log(">>>>>>>>>>>>> LOGIC-STEP: a === b && a === c", a === b && a === c);
console.log(">>>>>>>>>>>>> LOGIC-STEP: a === b || a === c", a === b || a === c);
console.log(
  ">>>>>>>>>>>>> LOGIC-STEP: !(a === b && a === c)",
  !(a === b && a === c)
);
