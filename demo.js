// let factor = "vijay";
// let fplayer = "koli";
// let fmovie = "leo";
// function favourite() {
//   console.log("favourite actor:", factor);
//   console.log("favourite player:", fplayer);
//   console.log("favourite movie:", fmovie);
// }
// favourite();

// let homework = true;
// if (homework) {
//   console.log("great job");
// } else {
//   console.log("finish your homework before playing");
// }

// let cookies = false;
// if (cookies) {
//   console.log("would you like to cookies?");
// } else {
//   console.log("time to bake more cookies");
// }

// let brush = true;                                   server,database
// if (brush) {
//   console.log("your teeth are clean. ");
// } else {
//   console.log("Go brush your teeth now.");
// }

/* 1 = Rock 
2 = Paper
3 = Scissor
*/

const emoji = {
  1: `
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
  `,
  2: `
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
  `,
  3: `
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
    `,
};

// console.log(emoji[1]);

const choice = 1;
const computerChoice = 3;

if (isNaN(choice) || choice < 1 || choice > 3) {
  console.log("invalid choice so, chose a number between 1to3 ");
} else if (isNaN(computerChoice) || choice < 1 || choice > 2) {
  console.log(" invalid computer choice so, chose a number between 1to3 ");
} else {
  console.log(emoji[choice]);
  console.log(emoji[computerChoice]);

  if (choice === computerChoice) {
    console.log("it's draw");
  } else if (computerChoice === 1) {
    if (choice === 2) {
      console.log("you lose,paper cover a rock");
    } else if (choice === 3) {
      console.log("you win,rock crushes  the scissors");
    }
  } else if (computerChoice === 2) {
    if (choice == 1) {
      console.log("you win, paper cover a rock");
    } else if (computerChoice === 3) {
      console.log("you lose,scissors cuts the paper");
    }
  } else if (computerChoice === 3) {
    if (choice == 1) {
      console.log("you lose, rock crushes the scissors");
    } else if (choice == 2) {
      console.log("you win,scissors cuts the paper");
    }
  }
}

// if (choice > 2) {
//   console.log("you've entered an invalid number");
// } else if (choice == 1 || choice == 2 || choice == 3) {
//   if (choice == 1) {
//     console.log("you chose: rock{rock}");
//   } else if (choice == 2) {
//     console.log("you chose:Paper{paper}");
//   } else if (choice == 3) {
//     console.log("you choice:scissors{scissors}");
//   }
// }

// /* What  user2 chose */
// let computers_choice = 2;

// if (computers_choice == 1) {
//   console.log("the computer chose:rock{rock}");
// }
// if (choice <= 1 || choice >= 3) {
//   console.log("you lose,rock wins against scissors");
// } else if (choice == 1) {
//   console.log("it's a draw");
// } else {
//   console.log("you win");
// }

// if (computers_choice == 2) {
//   console.log("the computer chose:paper{paper}");
// }
// if (choice == 1) {
//   console.log("you lose,paper wins against rock");
// } else if (choice == 2) {
//   console.log("it's a draw");
// } else {
//   console.log("you win");
// }

// if (computers_choice == 3) {
//   console.log("the computer chose:scissors{scissors}");
// }
// if (choice == 2) {
//   console.log("you lose,scissors wins against paper");
// } else if (choice == 3) {
//   console.log("it's a draw");
// } else {
//   console.log("you win");
// }

/* Compare and declare win */

/* reversed number formet */

/* const reverse = (num) => {
  const numStr = String(num); // Convert number to string
  const numArray = numStr.split(""); // Split string into array
  const reversedArray = numArray.reverse(); // Reverse the array
  const reversedStr = reversedArray.join(""); // Join the array back into a string
  const reversedNum = parseInt(reversedStr, 10); // Convert string back to number
  return reversedNum;
};

const num = 124323;
console.log(reverse(num)); */

/* functions */

/* function prime(n) {
  let isPrime = true;
  if (n > 1) {
    for (i = 2; i < n; i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }
  }

  return isPrime;
}
console.log(prime(5)); */

/* for loop */

/* 1 to 10 */
// for (let count = 1; count <= 10; count = count + 1) {
//   console.log(count);
// }

/* reverse order 10 to 1 */
// for (let count = 10; count >= 1; count = count - 1) {
//   console.log(count);
// }

/*even number in for loop  */

// for (let count = 2; count <= 10; count = count + 2) {
//   console.log(count);
// }

/* tables in for loop */

// for (let count = 1; count <= 10; count = count + 1) {
//   console.log(count + "*2=" + count * 2);
// }
