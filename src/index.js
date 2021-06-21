import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>SPRINT 4. Asynchronous Programming
</h1>
<div>
Practical tasks. Promise, Async/Await & Generators.
</div>
`;

// SPRINT 4. Asynchronous Programming
// Practical tasks. Promise, Async/Await & Generators

console.log("=======================    Question 1   =======================");

// Implement the getPromise(delay, message) function, which takes an integer number delay
// (between 0 and 2000) and string message and returns a Promise that waits
// for specified amount of time (using delay argument) and resolves with the message.

function getPromise(delay, message) {
  let promise = new Promise(function (resolve, reject) {
    return setTimeout(() => resolve(message), delay);
  });
  return promise;
}

// alternative solution with "Number.isInteger" condition

// function getPromise(delay, message) {
//   let promise = new Promise(function (resolve, reject) {
//     return setTimeout(() => {
//       return Number.isInteger(delay) && delay >= 0 && delay <= 2000
//         ? (resolve(message), delay)
//         : (reject(new Error("Whoops!")), delay);
//       // return Number.isInteger(delay) && delay >= 0 && delay <= 2000
//       //   ? (resolve(message), delay)
//       //   : (reject(console.log("Error: Whoops!")), delay);
//     });
//   });
//   return promise;
// }

getPromise(200, "'hello' in 1st Task").then(function (data) {
  console.log(data);
});

const end = Date.now() + 1000;
while (Date.now() < end) {
  const muchCompute = 1 + 2 + 3;
}

console.log("=======================    Question 2   =======================");
