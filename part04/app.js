// alert("Provjera");

//factory functions
// const elfAttack = {
//   attack(){
//     return 'attacks with ' + this.weapon
//   }
// }

// function createElf(name, weapon) {
//   return {
//     name: name,
//     weapon: weapon,
//     // attack() {
//     //   return "attacks with " + weapon;
//     // },
//   };
// }
// // const peter = createElf("peter", "stones");
// // console.log(peter.attack());
// const sam = createElf("sam", "fire");
// sam.attack = elfAttack.attack
// console.log(sam.attack())

// Object.create()

// const elfFunctions = {
//   attack() {
//     return "attacks with " + this.weapon;
//   },
// };

// function createElf(name, weapon) {
//   let newElf = Object.create(elfFunctions);
//   newElf.name = name;
//   newElf.weapon = weapon;
//   return newElf;
// }
// const sam = createElf("sam", "fire");
// sam.attack = elfFunctions.attack;
// console.log(sam.attack());

// //constructor functions
// function Elf(name, weapon) {
//   console.log("this:", this);
//   this.name = name;
//   this.weapon = weapon;
//   console.log("this:", this);
// }
// const josip = new Elf("josip", "stones");
// console.log(josip);
// Elf.prototype.attack = function attack() {
//   return "attacks with " + this.weapon;
// };
// const check = new Elf("check", "fire");
// console.log("check: ", check.attack());

// const elf1 = new Function(
//   "name",
//   "weapon",
//   `this.name = name;
// this.weapon = weapon;`
// );

// const sarah = new elf1("sarah", "fire");
// console.log(sarah);

// var a = new Number(5);
// console.log(typeof a);
// var b = 5;
// console.log(typeof b);
// console.log(a === b);

//OOP
// class Elf {
//   constructor(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
//   }
//   attack() {
//     return "attack with " + this.weapon;
//   }
// }

// const josip = new Elf("josip", "stones");
// console.log(josip);
// console.log(josip instanceof Elf);

// // new binding this
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// //implicit binding
// const person = {
//   name: "Karen",
//   age: 40,
//   hi() {
//     console.log("hi " + this.name);
//   },
// };

// //explicit binding
// const person2 = {
//   name: "Karen",
//   age: 40,
//   hi: function () {
//     console.log("hi " + this.setTimeout).bind(window);
//   },
// };

// //arrow
// const person3 = {
//   name: "Karen",
//   age: 40,
//   hi: function () {
//     var inner = () => {
//       console.log("hi " + this.name);
//     };
//     return inner();
//   },
// };

// console.log(person3.hi())

//inheritance
class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return "attack with " + this.weapon;
  }
}
class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }
  makeFort() {
    return "fort made";
  }
}

const fiona = new Elf("Fiona", "ninja stars", "princess");
// const ogre = {...fiona}
console.log(fiona);
const shrek = new Ogre("Shrek", "club", "green");
console.log(shrek);
