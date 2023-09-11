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


function marry(person1, person2){
  console.log('arguments: ', arguments)
  return `${person1} is now married to ${person2}`;
}

console.log(marry ('Tim', 'Tina'))