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

const elfFunctions = {
  attack() {
    return "attacks with " + this.weapon;
  },
};

function createElf(name, weapon) {
  let newElf = Object.create(elfFunctions);
  newElf.name = name;
  newElf.weapon = weapon;
  return newElf;
}
const sam = createElf("sam", "fire");
sam.attack = elfFunctions.attack;
console.log(sam.attack());

//constructor functions
function Elf(name, weapon) {
  console.log("this:", this);
  this.name = name;
  this.weapon = weapon;
  console.log("this:", this);
}
const josip = new Elf("josip", "stones");
console.log(josip);
Elf.prototype.attack = function attack() {
  return "attacks with " + this.weapon;
};
const check = new Elf("check", "fire");
console.log("check: ", check.attack());

const elf1 = new Function(
  "name",
  "weapon",
  `this.name = name;
this.weapon = weapon;`
);

const sarah = new elf1("sarah", "fire");
console.log(sarah);

var a = new Number(5);
console.log(typeof a);
var b = 5;
console.log(typeof b);
console.log(a === b);
