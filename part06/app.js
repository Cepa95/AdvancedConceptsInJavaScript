// alert("Provjera");
//asynchronous js
//3
// setTimeout(() => {
//   console.log("1"), 0;
// });
// //4
// setTimeout(() => {
//   console.log("2"), 10;
// });
// //2
// Promise.resolve("3").then((data) => {
//   console.log(data);
// });
// //1
// console.log("4");

//promises

// const promise = new Promise((resolve, reject) => {
//   if (1) {
//     resolve("worked");
//   } else {
//     reject("broken");
//   }
// });

// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "HII");
// });

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, "Helloooo");
// });

// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 5000, "Ciao");
// });

// Promise.all([promise, promise2, promise3, promise4]).then((values) => {
//   console.log(values);
// });

// // console.log(promise.then(result => console.log(result)));
// console.log(
//   promise
//     .then((result) => result + "!")
//     .then((result2) => {
//       // throw 'greska';
//       console.log(result2);
//     })
//     .catch((error) => console.log(error))
// );

// const urls = [
//   "https://jsonplaceholder.typicode.com/users",
//   "https://jsonplaceholder.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/albums",
// ];

// Promise.all(
//   urls.map((url) => {
//     return fetch(url).then((resp) => resp.json());
//   })
// )
//   .then((results) => {
//     console.log(results[0]);
//     console.log(results[1]);
//     console.log(results[2]);
//   })
//   .catch(() => console.log("error"));

//async await

// async function fetchUsers() {
//   const resp = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await resp.json();
//   console.log(data);
// }
// fetchUsers();

// const getData = async function () {
//   try {
//     const [users, posts, albums] = await Promise.all(
//       urls.map((url) => fetch(url).then((resp) => resp.json()))
//     );

//     console.log(users);
//     console.log(posts);
//     console.log(albums);
//   } catch {
//     console.log("oops");
//   }
// };

// getData();

// function someAsyncOperation1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const result = "operacija jedan";
//       resolve(result);
//     }, 5000);
//   });
// }

// function someAsyncOperation2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const result = "operacija dva";
//       resolve(result);
//     }, 2000);
//   });
// }

// async function example() {
//   console.log("Start");
//   const result1 = await someAsyncOperation1();
//   console.log("After await 1");
//   const result2 = await someAsyncOperation2();
//   console.log("After await 2");
//   return result1 + " " + result2;
// }

// example()
//   .then((result) => {
//     console.log("Final result:", result);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// console.log(5 + 2);
// for (let i = 0; i < 10000; i++) {
//   console.log(i);
// }

//ES9

// const animals = {
//   tiger: 23,
//   lion: 5,
//   monkey: 10,
//   bird: 14,
// };

// const { tiger, ...rest } = animals;
// console.log(tiger);
// console.log(rest);

// const array = [1, 2, 3, 4, 5];
// function sum(a, b, c, d, e) {
//   return a + b + c + d + e;
// }
// console.log(sum(...array));

// function objectSpread(p1, p2, p3) {
//   console.log(p1);
//   console.log(p2);
//   console.log(p3);
// }

// const { tiger, lion, ...rest } = animals;

// objectSpread(tiger, rest);
//finally
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

// Promise.all(
//   urls.map((url) => {
//     return fetch(url).then((resp) => resp.json());
//   })
// )
//   .then((results) => {
//     console.log(results[0]);
//     console.log(results[1]);
//     console.log(results[2]);
//   })
//   .catch(() => console.log("error"))
//   .finally((data) => console.log("extra"));

//for await of

// const getData = async function () {
//   try {
//     const [users, posts, albums] = await Promise.all(
//       urls.map((url) => fetch(url).then((resp) => resp.json()))
//     );

//     console.log(users);
//     console.log(posts);
//     console.log(albums);
//   } catch {
//     console.log("oops");
//   }
// };

// // getData();

// const loopThroughUrls = (url) => {
//   for (url of urls) {
//     console.log(url);
//   }
// };
// loopThroughUrls(urls);

// const getData2 = async function () {
//   const arrayOfPromises = urls.map((url) => fetch(url));
//   for await (let request of arrayOfPromises) {
//     const data = await request.json();
//     console.log(data);
//   }
// };
// getData2();
// callback queue=> task queue
// setTimeout(() => {
//   console.log("3");
// }, 0);
// setTimeout(() => {
//   console.log("4");
// }, 10);
// //job queue => microtask queue
// Promise.resolve("hi").then((data) => console.log("2", data));

// console.log("1");

//Parallel, sequence, race

const promisify = (item, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(item), delay));

const a = () => promisify("a", 100);
const b = () => promisify("b", 5000);
const c = () => promisify("c", 3000);

console.log(a(), b(), c());

async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `Parallel is done: ${output1} ${output2} ${output3}`;
}
parallel().then(console.log);

async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
}

race().then(console.log);

async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `Sequence is done: ${output1} ${output2} ${output3} `;
}

sequence().then(console.log);