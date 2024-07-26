/* //console.log("My name is Sarguna")
var x = 12;
var y = 9;
var z = 7;
let total = x + z * y;
console.log(total);
 */

// /* "var" keyword
// 1. It's a global scoped variable. Accessible even after the end of the scope.
// 2. Mutable - Can be assigned again
// 3. You can redeclare the variable
// */

var age = 23;
var age = 25;
// console.log("Age: ", age);
// age = 24;
// console.log("Age: ", age);

// if (age < 30) {
//   if (age < 29) {
//     if (age < 28) {
//       if (age < 27) {
//         var name = "Sarguna";
//         if (age < 26) {
//           /* "name" is accessible here because this is within scope */
//           console.log(">>>>>>>>>>>> Name within scope: ", name);
//         }
//       }
//     }
//     /* "name" is accessible here because it's global scope variable even though it's not within scope */
//     console.log(">>>>>>>>>>>> Name Out of scope or Global scope: ", name);
//   }
// }

// /* "let" keyword
// 1. It's a local scoped variable. Only available within scope
// 2. Mutable - Can be assigned again
// 3. You can't redeclare the variable
// */

// let yearOfBirth = 2003;
// console.log("Year: ", yearOfBirth);
// yearOfBirth = 2004;
// console.log("Year: ", yearOfBirth);

// if (yearOfBirth < 3000) {
//   if (yearOfBirth < 2009) {
//     if (yearOfBirth < 2008) {
//       if (yearOfBirth < 2007) {
//         let gender = "Women";
//         if (yearOfBirth < 2006) {
//           /* "name" is accessible here because this is within scope */
//           console.log(">>>>>>>>>>>> Name within scope: ", gender);
//         }
//       }
//     }
//     /* "name" is accessible here because it's global scope variable even though it's not within scope */
//     console.log(">>>>>>>>>>>> Name Out of scope or Global scope: ", gender);
//   }
// }

/* "const" keyword 
1. It's a local scoped variable. Only available within scope
2. Immutable - Cannot be assigned again.
3. You can't redeclare the variable
*/

/*const monthOfBirth = "August";
console.log(">>>>>>>>>>>> Month: ", monthOfBirth);
// monthOfBirth = "September";
// console.log(">>>>>>>>>>>> Month: ", monthOfBirth);

if (monthOfBirth < "Jan") {
  if (monthOfBirth < "Feb") {
    if (monthOfBirth < "March") {
      if (monthOfBirth < "Apr") {
        const gender = "Women";
        if (monthOfBirth < "May") {
          /* "name" is accessible here because this is within scope */
// console.log(">>>>>>>>>>>> Name within scope: ", gender);
// }
// }
// }
/* "name" is accessible here because it's global scope variable even though it's not within scope */
// console.log(">>>>>>>>>>>> Name Out of scope or Global scope: ", gender);
// }
// }
let firstname = "siva";
const secondname = "sakthi";
const total = firstname + secondname;

for (i = 0; i < 8; i++) {
  console.log("tha first name is:", firstname);
  console.log("the second name is:", secondname);
  console.log("total:", total);
  console.log(i);
}
