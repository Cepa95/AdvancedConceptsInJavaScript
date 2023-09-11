// alert("Provjera");

//HOISTING
var favouriteFood = "grapes";

var foodThoughts = function () {
  console.log("original favourite food: " + favouriteFood);

  var favouriteFood = "sushi";

  console.log("original favourite favourite food: " + favouriteFood);
};

foodThoughts();

// partially hoisted variables
console.log(sing());
console.log(teddy);
var teddy = "bear";

//undefined functions are fully hoisted
function sing() {
  console.log("la la la");
}

//function expression
var canada = function () {
  console.log("cold");
};
//function declaration

function india() {
  console.log("warm");
}
//invocation, call, execution
canada();
india();

function marry(person1, person2) {
  console.log("arguments: ", arguments);
  console.log(Array.from(arguments));
  return `${person1} is now married to ${person2}`;
}

console.log(marry("Tim", "Tina"));

// arguments keyword

function marry(...args) {
  console.log("arguments: ", args);
  console.log(Array.from(arguments));
  return `${args[0]} is now married to ${args[1]}`;
}

console.log(marry("Tim", "Tina"));

// function two(){
//   var isValid;
// }

// function one(){
//   var isValid = true; //local environment
//   two(); // new execution context
// }
// var isValid = false;
// one()

//scope chain
function findName() {
  var b = "b";
  return printName();
}

function printName() {
  var c = "c";
  return "Josip";
}

function sayMyName() {
  var a = "a";
  return findName();
}

console.log(sayMyName());

function sayMyName1() {
  var a = "a";
  return function findName() {
    var b = "b";
    return function printName() {
      var c = "c";
      console.log(a);
      return "Josip";
    };
  };
}

console.log(sayMyName1()()());

// function scope vs block scope
if (5 > 4) {
  var secret = "12345";
}
console.log(secret);

// if (5 > 4) {
//   let secret1 = "12345";
// }
// console.log(secret1);

//IIFE
var script1 = (function () {
  function a() {
    return 5;
  }
  return {
    a: a,
  };
})();

var result = script1.a(); 
console.log(result); 
