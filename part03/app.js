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

//Higher order functions
function letLogin() {
  let array = [];
  for (let i = 0; i < 1000000; i++) {
    array.push(i);
  }
  return "Acces granted";
}
console.log(letLogin());

function letLoginUser(user) {
  let array = [];
  for (let i = 0; i < 1000000; i++) {
    array.push(i);
  }
  return "Acces granted " + user;
}
console.log(letLoginUser("josip"));

const giveAccessTo = (name) => "Access granted to " + name;

function authenticate(verify) {
  let array = [];
  for (let i = 0; i < verify; i++) {
    array.push(i);
  }
}

function letPerson(person, fn) {
  if (person.level === "admin") {
    fn(5000);
  } else if (person.level === "user") {
    fn(1000);
  }
  return giveAccessTo(person.name);
}

console.log(letPerson({ level: "admin", name: "sally" }, authenticate));

const multiplyBy = (num) => (num2) => num * num2;

console.log(multiplyBy(4)(6));

const multiplyByTwo = multiplyBy(2);
const multiplyByFive = multiplyBy(5);
console.log(multiplyByTwo(4));
console.log(multiplyByFive(2));


//closure
const close = () => {
  let grandpa = 'grandpa'
  return ()=> {
    let father = 'father'
    return function cl(){
      let son = 'son'
      return `${grandpa} > ${father} > ${son}`
    }
  }
}

console.log(close()()())

//memory efficient
function heavyDuty(index){
  const bigArray = new Array(7000).fill(':)')
  console.log('created')
  return bigArray[index]
}
console.log(heavyDuty(589))
console.log(heavyDuty(589))
console.log(heavyDuty(589))
console.log(heavyDuty(589))

function heavyDuty2(){
  const bigArray = new Array(7000).fill(':)')
  console.log('created again')
  return function(index){
    return bigArray[index]
  }

}
const getHeavyDuty = heavyDuty2();
console.log(getHeavyDuty(55));
console.log(getHeavyDuty(55));
console.log(getHeavyDuty(55));
console.log(getHeavyDuty(55));

//encapsulation