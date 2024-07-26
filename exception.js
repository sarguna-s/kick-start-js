try {
  //   console.log(a * b);
  //   let name = "sarguna";
  //   let age = 18;
  //   console.log(">>>>>>>>>>>>> Person: ", name, age);
  /* --------------------------- */
  //   const person = { name: "Sarguna", age: 18 };
  //   person.forEach((element) => {
  //     console.log(">>>>>>>>>>>>> Person: ", element);
  //   });
  /* --------------------------- Range Error */
  //   const num = 1;
  //   console.log(num.toPrecision(5));
  //   console.log(num.toPrecision(500));
  /* -------------------- Syntax error */
  //   console.log("Try block executed successfully('hello)");
  /* --------------------reference error */
  //   x = y + 1;
  /* -------------------type error */
  //   let num = 1;
  //   num.tolowerCase();
} catch (error) {
  console.error("Custom Error Handling: ", error.name);
} finally {
  console.log("-----All DONE-----");
}
