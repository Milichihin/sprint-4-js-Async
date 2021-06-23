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

// function getPromise(delay, message) {
//   let promise = new Promise(function (resolve, reject) {
//     return setTimeout(() => resolve(message), delay);
//   });
//   return promise;
// }

// alternative solution with "Number.isInteger" condition

function getPromise(delay, message) {
  let promise = new Promise(function (resolve, reject) {
    return setTimeout(() => {
      return Number.isInteger(delay) && delay >= 0 && delay <= 2000
        ? (resolve(message), delay)
        : (reject(new Error("Whoops!")), delay);
      // return Number.isInteger(delay) && delay >= 0 && delay <= 2000 ? (resolve(message), delay) : (reject(console.log("Error: Whoops!")), delay)
    });
  });
  return promise;
}

// getPromise('2000n', "'hello' in 1st Task").then(function (data) {
//   console.log(data);
// });

// const end1 = Date.now() + 1000;
// while (Date.now() < end1) {
//   const muchCompute = 1 + 2 + 3;
// };

console.log("=======================    Question 2   =======================");

// Write an add(x, y) function that takes two arguments x and y.
// The function should return a Promise that resolves with the sum of the two arguments if they are Numbers,
// or rejects with the message "Error!" otherwise.

function add(x, y) {
  return new Promise(function (resolve, reject) {
    typeof (x + y) === "number" ? resolve(x + y) : reject("Error!");
  });
}

// add(2, 2).then(res => console.log(res)); //4
// const end2 = Date.now() + 1000;
// while (Date.now() < end2) {
//   const muchCompute = 1 + 2 + 3;
// };

// add(2,"a").catch(err => console.log(err)); //Error!
// const end3 = Date.now() + 1000;
// while (Date.now() < end3) {
//     const muchCompute = 1 + 2 + 3;
// };

// add("b","a").catch(err => console.log(err)); //Error!
// const end4 = Date.now() + 1000;
// while (Date.now() < end4) {
//     const muchCompute = 1 + 2 + 3;
// };

console.log("=======================    Question 3   =======================");

// Implement the getAge() function to get user age. To find his age you need to call a getUser()
// async function that return a user object in format {role: "somerole", id: 1}.
// To get the actual user info you need to call another function getUserProfile(id),
// that uses id returned from the previous function and return user info as an object

// {name: "Petro", age: 15}. The getAge() must return the age of the user.

// const { getUser, getUserProfile } = require('./Helper.js');

async function getUser() {
  return {
    role: "somerole",
    id: 1
  };
}

async function getUserProfile() {
  return {
    name: "Petro",
    age: 15
  };
}

async function getAge() {
  const user = await getUser((el) => el);
  const id = user.id;
  const info = await getUserProfile(id);
  const age = info.age;
  return age;
}

// getAge().then(a => console.log(a));
// const end = Date.now() + 1000;
// while (Date.now() < end) {
//   const muchCompute = 1 + 2 + 3;
// }

console.log("=======================    Question 4   =======================");

// Implement the take() function that converts a sequence of iterated values into a sequence of length n.

function* take(n, iterable) {
  for (let i = 0; i < n; i++) {
    yield iterable[i];
  }
}

// const arr = ['a', 'b', 'c', 'd'];
// take(2, arr);

// // Example usage:
// // Output:
// // a
// // b
const arr = ["a", "b", "c", "d"];
for (const x of take(2, arr)) {
  console.log(x);
}

// const generator = take(2, arr);
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
