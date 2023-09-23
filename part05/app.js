// alert("Provjera");
//functional programming
//no side effects
// input -> output
const array = [1, 2, 3, 4, 5];
// function mutateArray(arr) {
//   arr.pop();
// }
// function mutateArrayEach(arr){
//   arr.forEach(item => arr.push(1))

// }
// mutateArray(array);
// mutateArray(array);
// mutateArrayEach(array);

function removeLastItem(arr) {
  const newArray = [].concat(arr);
  newArray.pop();
  return newArray;
}
function multiplyByTwo(arr) {
  return arr.map((item) => item * 2);
}

console.log(removeLastItem(array));
console.log(multiplyByTwo(array));
console.log(array);

//referential transparency
function a(num1, num2) {
  return num1 + num2;
}
console.log(a(1, 3));

function b(num) {
  return num * 2;
}
console.log(b(a(3, 4)));

//idempotence

function notGood(num) {
  return Math.random(num);
}
console.log(notGood(5));

//imperative vs declarative
for (let i = 0; i < 10; i++) {
  console.log(i);
}
[1, 2, 3].forEach((item) => console.log(item));

//immutability
const obj = { name: "andrei" };
function clone(obj) {
  return { ...obj }; // pure function
}

function updateName(obj) {
  const obj2 = clone(obj);
  obj2.name = "Nana";
  return obj2;
}
const updateObj = updateName(obj);
console.log(updateObj);
console.log(obj);

//debugger
const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((accumulator, array) => {
  // debugger
  return accumulator.concat(array);
}, []);

console.log(flattened);

//HOF, closures
const hof = () => () => 5
const hof1 = (fn) => fn(6)
console.log(hof()());

const closure = function () {
  let count = 0;
  return function increment(){
     count++;
     return count
  }
}
const incrementFn = closure()
console.log(incrementFn());
console.log(incrementFn());
console.log(incrementFn());
