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
console.log(sing())
console.log(teddy)
var teddy = 'bear'

//undefined functions are fully hoisted
function sing(){
    console.log('la la la')
}
