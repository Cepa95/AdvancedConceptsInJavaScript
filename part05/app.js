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
const hof = () => () => 5;
const hof1 = (fn) => fn(6);
console.log(hof()());

const closure = function () {
  let count = 0;
  return function increment() {
    count++;
    return count;
  };
};
const incrementFn = closure();
console.log(incrementFn());
console.log(incrementFn());
console.log(incrementFn());

//partial application
const multiply = (a, b, c) => a * b * c;
const partialMultiplyBy5 = multiply.bind(null, 5);
console.log(partialMultiplyBy5(4, 10));

//memoization
function addTo80(n) {
  return n + 80;
}
addTo80(10);
addTo80(20); //dugo traje, neefikasno

// let cache = {};
function memoizedAddTo80(n) {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("long time");
      cache[n] = n + 80;
      return cache[n];
    }
  };
}
const memoized = memoizedAddTo80();
console.log(memoized(5));
console.log(memoized(6));
console.log(memoized(5));

// compose
// const compose = (f, g) => (data) => f(g(data));
// const multiplyBy3 = (num) => num * 3;
// const makePositive = (num) => Math.abs(num);
// const multiplyBy3andAbsolute = compose(multiplyBy3, makePositive);

// console.log(multiplyBy3andAbsolute(-50));

//pipe
const pipe = (f, g) => (data) => g(f(data));
const multiplyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);
const multiplyBy3andAbsolute = pipe(multiplyBy3, makePositive);

console.log(multiplyBy3andAbsolute(-50));
