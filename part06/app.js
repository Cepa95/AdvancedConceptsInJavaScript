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
