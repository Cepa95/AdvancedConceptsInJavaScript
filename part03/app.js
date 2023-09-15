// alert("Provjera");
function one() {
  return 1;
}

const obj = {
  two: function () {
    return 2;
  },
};

console.log(obj.two());

//function constructor
const four = new Function("return 4");
console.log(four());

const number = new Function("num", "return num");
console.log(number(10));

//functions are first class citizens in JS
//1
var stuff = function () {};
//2
function a(fn) {
  fn();
}
a(function () {
  console.log("Hello");
});
//3
function b() {
  return function c() {
    console.log("Bye");
  };
}
var d = b();
d();
