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
//   .catch(() => console.log("error"));

//async await

async function fetchUsers() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();
  console.log(data);
}
fetchUsers();

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => fetch(url).then((resp) => resp.json()))
    );

    console.log(users);
    console.log(posts);
    console.log(albums);
  } catch {
    console.log("oops");
  }
};

getData();

function someAsyncOperation1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = "operacija jedan";
      resolve(result);
    }, 5000);
  });
}

function someAsyncOperation2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = "operacija dva";
      resolve(result);
    }, 2000);
  });
}

async function example() {
  console.log("Start");
  const result1 = await someAsyncOperation1();
  console.log("After await 1");
  const result2 = await someAsyncOperation2();
  console.log("After await 2");
  return result1 + " " + result2;
}

example()
  .then((result) => {
    console.log("Final result:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// console.log(5 + 2);
// for (let i = 0; i < 10000; i++) {
//   console.log(i);
// }
