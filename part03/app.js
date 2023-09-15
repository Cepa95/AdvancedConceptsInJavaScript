// alert("Provjera");
function one() {
  return 1;
}

const obj = {
  two: function () {
    return 2;
  },
};

console.log(obj.two())

//function constructor
const four = new Function('return 4')
console.log(four())

const number = new Function('num', 'return num')
console.log(number(10))