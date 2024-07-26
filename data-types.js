// BOOLEAN
// const stringVal = "";
// const numVal = 0;
// const nullVal = null;
// const undefinedVal = undefined;
// const boolVal = false;

// if (stringVal || numVal || nullVal || undefinedVal || boolVal)
//   console.log("CONDITION SATISFIED");
// else console.error("CONDITION NOT-SATISFIED");

// /* OBJECT */
// const userInfo = { name: "Sarguna", age: 20, gender: "female" };
// console.log(">>>>>>>>>>> READ OBJECT: objectVal.name", userInfo.name);
// console.log(">>>>>>>>>>> READ OBJECT: objectVal['name']", userInfo["name"]);
// for (let key in userInfo) {
//   console.log(">>>>>>>>>>> READ OBJECT: key is", key);
// }

// for (let [key, value] of Object.entries(userInfo)) {
//   console.log(">>>>>>>>>>> READ OBJECT: entries is", key, ":", value);
// }

// for (let key of Object.keys(userInfo)) {
//   console.log(">>>>>>>>>>> READ OBJECT: key is", key);
// }

// for (let value of Object.values(userInfo)) {
//   console.log(">>>>>>>>>>> READ OBJECT: value is", value);
// }

// console.log(">>>>>>>>>>> READ OBJECT: length is", Object.keys(userInfo).length);

// console.log(
//   ">>>>>>>>>>> READ OBJECT: Check object is 'empty or not'",
//   !!Object.keys(userInfo).length
// );

// userInfo.dob = "16-09-2004";

// console.log(">>>>>>>>>>> READ OBJECT: Add new value", userInfo);
// console.log(">>>>>>>>>>> READ OBJECT: Add new value", userInfo["address"]);

/* Array */
const animals = ["Cat", "Rat", "Dog", "Cow"];

console.log(">>>>>>>>>>> READ Array: ArrayVal[0]", animals[0]);

for (let index in animals) {
  console.log(">>>>>>>>>>> READ Array: index is", index);
}

for (let animal of animals) {
  console.log(">>>>>>>>>>> READ Array: animal is", animal);
}

/* Using arrow function */
animals.forEach((val, i, array) =>
  console.log(">>>>>>>>>>> READ Array: Foreach: ", val, i, array)
);

/* USING normal function */
animals.forEach(function (val, i, array) {
  console.log(">>>>>>>>>>> READ Array: Foreach: ", val, i, array);
});

console.log(">>>>>>>>>>> READ Array: length is", animals.length);

console.log(
  ">>>>>>>>>>> READ Array: Check Array is 'empty or not'",
  !!animals.length
);

animals[5] = "LION";
animals.push("ZEBRA");
animals[50] = "TIGER";

console.log(">>>>>>>>>>> READ Array: Add new value", animals);
console.log(">>>>>>>>>>> READ Array: Add new value", animals[49]);
