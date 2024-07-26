/* string methods */

let person = "Sarguna";
let length = person.length;
console.log(length);
console.log(person.split(""));

let text = "Hello World";
console.log(text.at(4));
console.log(text.charAt(0));
console.log(text.charCodeAt(2));

let fruits = " Apple, Banana, Orange, Kiwi ";
console.log(fruits.slice(1, 9));
console.log(fruits.substring(8, 14));
console.log(fruits.substr(8, 6));

let animals = "lion, tiger, orange, kiwi";
console.log(animals.toLowerCase());
console.log(animals.toUpperCase());

let address = "       chennai         ";
console.log(address.trim());
console.log(address.trimStart());
console.log(address.trimEnd());

let user = "my name is sarguna";
let newuser = user.replace("sarguna", "seetha");
console.log(newuser, " ");
console.log(user.repeat(2));

let num = "7";
let newnum = num.padStart(4, 0);
console.log(newnum);
let newnumber = num.padEnd(4, 9);
console.log(newnumber);

let text1 = "tamil";
let text2 = "selvi";
let text3 = text1.concat(" ", text2);
console.log(text3.concat());

let greet = (X) => console.log(X);
greet("hello");

let persons = [
  {
    username: "sarguna",
    contact: 9865484902,
  },
  {
    username: "siva",
    contact: 7944656622,
  },
];
persons.map((item, index) => {
  console.log(item.username);
  console.log(item.contact);
  console.log(item.username, index);
});
