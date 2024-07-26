const fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
const nestedArray = [[1, 2], [3, 4], [5, 6], [[7, 8]]];
const animals = ["cat", "rat", "tiger", "lion"];
/* filter(): used to returns a specified length of array */
console.log(
  ">>> Array.filter: ",
  fruits.filter((value) => value.length === 5) /* returns a string */
);

/* map:modifies the array returns the new array */
console.log(
  ">>> Array.map: ",
  fruits.map((value) => value + "MAPPED")
); /* returns a string */
/*flat: multidimensional array converted to single dimensional array */
/* concatenates the sub array */

console.log(
  ">>> Array.flat: ",
  nestedArray.flat(2)
); /*returns a single array */

/* slice: Will not modify the original array and return sliced items from the array */
const slicedArray = animals.slice(0, 2);
console.log(">>> Array.slice: ", slicedArray, animals);

/* splice: Will modify the original array and can insert new values */
const splicedArray = animals.splice(1, 2, "monkey", "fox", "bear");
console.log(">>> Array.splice: ", splicedArray, animals);

/* returns a value of an first element to passes a test  */
console.log(
  ">>> Array.find: ",
  fruits.find((value) => value === "Apple") /* returns a string and number */
);
/*returns undefined if no elements are found  */
console.log(
  ">>> Array.find: ",
  fruits.find((value) => value === "Jackfruit")
);

/* returns the index (position) of the first element that passes a test. */
console.log(
  ">>> Array.find by index: ",
  fruits.find((_, index) => index === 3)
);
/* removes the last element from an array */
console.log(">>> Array.pop: ", fruits.pop());

/* insert or adds new element to an array(at the end) */
console.log(">>> Array.push: ", fruits.push("Not a fruit"), fruits);

/* joins a all  array elements into a string using any seperator*/
console.log(">>> Array.join: ", fruits.join(" $*% "));

/*  returns a single value: the function's accumulated result. */
console.log(
  ">>> Array.reduce: ",
  [1, 2, 3, 4, 5, 6].reduce((prev, cur) => prev + cur) /* returns a number */
);

/*  reverses the order of the elements in an array. */
console.log(">>> Array.reverse: ", fruits.reverse());

/* sorts the elements as strings in alphabetical and ascending order. */
console.log(">>> Array.sort: ", fruits.sort());

console.log(">>> Array.reverse: ", fruits.reverse());

/* executes a function for each array element.
returns true if the function returns true for all elements. */
console.log(
  ">>> Array.every: ",
  fruits.every((value) => value === "Mango")
);

/* checks if any array elements pass a test (provided as a callback function). */
console.log(
  ">>> Array.some: ",
  fruits.some((value) => value === "Mango")
);

/*  returns true if an array contains a specified value.
returns false if the value is not found. */
console.log(">>> Array.includes: ", fruits.includes("Jackfruit"));

/* fills specified elements in an array with a value. */
console.log(">>> Array.fill: ", Array(10).fill("#"));

/* starts at a specified index and searches from left to right 
(from the given start postion to the end of the array). */
console.log(">>> Array.indexOf: ", fruits.indexOf("Apple"));
console.log(">>> Array.indexOf: ", fruits.indexOf("Apple", 3));

/* maps all array elements and creates a new flat array. */
console.log(
  ">>> Array.flatMap: ",
  nestedArray.flat(2).flatMap((value) => value * 2)
);

/* converts an array to a string of (comma seperated)array values */
console.log(">>> Array.toString: ", fruits.toString());

/* starts at a specified index and searches from right to left 
(from the given postion to the beginning of the array). */
console.log(">>> Array.lastIndexOf: ", fruits.lastIndexOf("Apple"));

/*returns the index (position) of the first element that passes a test.  */
console.log(
  ">>> Array.findIndex: ",
  fruits.findIndex((value, index) => value === "Mango" && index === 3)
);

/* returns an array from any object with a length property. */
console.log(">>> Array.from: ", Array.from("12345"));

const numArray = ["1", "2", "3", "4", "5"];
/* removes first element from an array */
console.log(">>> Array.shift: ", numArray, numArray.shift(), numArray);
/* insert(or)adds a enw element to an array(at the beginning) */
console.log(">>> Array.unshift: ", numArray, numArray.unshift(), numArray);

/* returns an Iterator object with the key/value pairs from an array */
const entries = fruits.entries();
for (let item of entries) {
  console.log(">>> Array.entries: ", item);
}

/* returns an Iterator object with the keys of an array. */
const keys = fruits.keys();
for (const key of keys) {
  console.log(">>> Array.keys: ", key);
}

/* returns an iterator object with the value of an array */
const values = fruits.values();
for (const key of values) {
  console.log(">>> Array.values: ", key);
}

/* returns a foreach element in values with index of an array */
fruits.forEach(
  (value, index) =>
    console.log(
      ">>> Array.forEach: ",
      value,
      index
    ) /* returns a values and index */
);

/* Copywithin:  */
console.log(
  ">>> Array.copyWithIn: ",
  fruits.copyWithin(1, 0, 1)
); /* Returns array */

// const object1 = {name: "Sarguna", age: 18, }
// const object2 = {qualification: "BCA", gender: "Female" }
// const object3 = {...object2, address: "TVM", age: 21, ...object1,}
// const array1 = ["Sarguna",  18, ]
// const array2 = [ "BCA", "female" ]
// const array3 = [...array1, ...array2, "TVM"]

// // const {age, qualification, gender, address, name} = object3
// const [ age, qualification, gender, address, name] = array3
// // const name = object3.name
// // const age = object3.age
// // const qualification = object3.qualification
// // const gender = object3.gender
// // const address = object3.address
// // name = "Seetha"
// console.log("name: ", name);
// console.log("age: ", age);
// console.log("qualification: ", qualification);
// console.log("gender: ", gender);
// console.log("address: ", address);
// // console.log(array3);
