// alert("Provjera");
//asynchronous js
//3
setTimeout(() => {
  console.log("1"), 0;
});
//4
setTimeout(() => {
  console.log("2"), 10;
});
//2
Promise.resolve("3").then((data) => {
  console.log(data);
});
//1
console.log("4");
