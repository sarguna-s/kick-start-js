// https://gorest.co.in/public/v2/users
// https - Protocol
// gorest.co.in - Server - DNS (Domain Naming system)
// /public/v2 - API Versioning
// /users - Endpoint

/* 
Promise
Then - Catch
Async/await
How URL request is working
*/

// fetch("https://gorest.co.in/public/v2/users")
//   .then((response) => {
//     console.log(">>>>>>>>>>>>>> API RAW RESPONSE: ", response);

//     return response.json();
//   })
//   .then((response) => {
//     console.log(">>>>>>>>>>>>>> API JSON RESPONSE: ", response);
//     return response;
//   })
//   .catch((error) => {
//     console.log(">>>>>>>>>>>>>> API ERROR RESPONSE: ", error);
//   });

// const log1 = () =>
//   new Promise(
//     (() => {
//       setTimeout(() => console.log("Log-1"), 1000);

//       return "Log - 1 function is executed";
//     },
//     (reason) => `Reason for rejection: ${reason}`)
//   );

// const log2 = () =>
//   new Promise(
//     (() => {
//       setTimeout(() => console.log("Log-2"), 2000);

//       return "Log - 2 function is executed";
//     },
//     (reason) => `Reason for rejection: ${reason}`)
//   );

// const log3 = () =>
//   new Promise(
//     (() => {
//       setTimeout(() => console.log("Log-3"), 3000);

//       return "Log - 3 function is executed";
//     },
//     (reason) => `Reason for rejection: ${reason}`)
//   );

// const log4 = () =>
//   new Promise(
//     (() => {
//       setTimeout(() => console.log("Log-4"), 4000);

//       return "Log - 4 function is executed";
//     },
//     (reason) => `Reason for rejection: ${reason}`)
//   );

const getUsers = async () => {
  const rawResponse = await fetch("https://gorest.co.in/public/v2/users");
  console.log(">>>>>>>>>>>>>>>> RAW RESPONSE: ", rawResponse);

  const response = await rawResponse?.json();
  console.log(">>>>>>>>>>>>>>>> RESPONSE: ", response);

  return response;
};

getUsers();
