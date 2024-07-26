/* left triangle pattern*/

// let max = 5;
// let star = "";
// for (let i = 1; i <= max; i++) {
//   for (let j = 1; j < i; j++) {
//     star += "*";
//   }

//   star += "\n";
// }
// console.log(star);

/* square pattern */

// let j = 5;
// let star = "";
// for (let i = 1; i <= j; i++) {
//   for (let j = 1; j < 6; j++) {
//     star += "*";
//   }

//   star += "\n";
// }
// console.log(star);

/* Right triangle pattern */

// let max = 5;
// let star = "";
// for (let i = 1; i <= max; i++) {
//   for (let j = 5; j >= 1; j--) {
//     if (j <= i) star += "*";
//     else star += " ";
//   }
//   star += "\n";
// }
// console.log(star);

/* Triangle pattern */

// let max = 5;
// let star = "";
// for (let i = 1; i <= max; i++) {
//   for (let j = max; j >= 2 * 1 - i; j--) {
//     if (j <= i) star += "*";
//     else star += " ";
//   }
//   star += "\n";
// }
// console.log(star);

/* upper and lower pyramid pattern */

let max = 3;
let star = "";
for (let i = 1; i <= max; i++) {
  //   for (let j = max; j >= 2 * 1 - i; j--) {
  //     if (j <= i) star += "*";
  //     else star += " ";
  //   }
  //   star += "\n";

  for (let n = max; n <= max; n--) {
    for (let k = max; k < 2 * max - 1; k++) {
      if (k <= n) star += "* ";
      else star += " ";
    }
    star += "\n";
  }
}
console.log(star);
