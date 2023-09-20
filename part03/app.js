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
  let grandpa = "grandpa";
  return () => {
    let father = "father";
    return function cl() {
      let son = "son";
      return `${grandpa} > ${father} > ${son}`;
    };
  };
};

console.log(close()()());

//memory efficient
function heavyDuty(index) {
  const bigArray = new Array(7000).fill(":)");
  console.log("created");
  return bigArray[index];
}
console.log(heavyDuty(589));
console.log(heavyDuty(589));
console.log(heavyDuty(589));
console.log(heavyDuty(589));

function heavyDuty2() {
  const bigArray = new Array(7000).fill(":)");
  console.log("created again");
  return function (index) {
    return bigArray[index];
  };
}
const getHeavyDuty = heavyDuty2();
console.log(getHeavyDuty(55));
console.log(getHeavyDuty(55));
console.log(getHeavyDuty(55));
console.log(getHeavyDuty(55));

//encapsulation
const makeNuclearButton = () => {
  let timeWithoutDestruction = 0;
  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;
  const launch = () => {
    timeWithoutDestruction = -1;
    return "boom";
  };
  setInterval(passTime, 1000);
  return {
    launch: launch,
    totalPeaceTime: totalPeaceTime,
  };
};

const ohno = makeNuclearButton();
console.log(ohno.totalPeaceTime());
console.log(ohno.launch());

//extra closures
let view;
function initialize() {
  view = "balkon";
  console.log("view has been initialized");
}

initialize();
initialize();
initialize();
console.log(view);

function initialize1() {
  let called = 0;
  if (called > 0) {
    return;
  } else {
    view = "balkon";
    called++;
    console.log("view has been initialized");
  }
}
const startOnce = initialize();
startOnce;
startOnce;
console.log(view);

const array = [1, 2, 3, 4];
// ako je var bit ce i am at index 4
// let dopusta scoping
// for (let i = 0; i < array.length; i++) {
//   setTimeout(function () {
//     console.log("I am at index" + i);
//   }, 3000);
// }

// prototypal inheritance
const arr = [];
console.log(arr.__proto__);
console.log(arr.toString());

let dragon = {
  name: "drago",
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`;
    }
  },
};
console.log(dragon.sing());

let lizard = {
  name: "Kiki",
  fight() {
    return 1;
  },
};
// const singLizard = dragon.sing.bind(lizard);
// console.log(singLizard());
lizard.__proto__ = dragon;
// console.log(lizard.sing())
// // console.log(dragon.__proto__)
// console.log(dragon.isPrototypeOf(lizard))
for (let prop in lizard) {
  //samo name i fight, ostali su nasljedeni
  if (lizard.hasOwnProperty(prop)) {
    console.log(prop);
  }
}

let human = {
  mortal: true,
};
let socrates = Object.create(human);
socrates.age = 45;
console.log(socrates.mortal);
console.log(human.isPrototypeOf(socrates));

function multiplyByTen(num) {
  return num * 10;
}
console.log(multiplyByTen.prototype);

//Data object => to have new method .lastYear()
//which shows you last year 'YYYY' format
// arrow function ne bi radia jer je on lexically scoped
Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
};
console.log(new Date("1990-10-10").lastYear());

//modify .map() to print ':)' at the end of each item
Array.prototype.map = function () {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push((this[i] +':)'));
  }
  return arr;
};
console.log([1, 2, 3].map());
//1:), 2:), 3:)
