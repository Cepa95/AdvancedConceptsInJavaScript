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
