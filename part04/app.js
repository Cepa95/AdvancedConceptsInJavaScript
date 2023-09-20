// alert("Provjera");

//factory functions

function createElf(name, weapon) {
  return {
    name: name,
    weapon: weapon,
    attack() {
      return "attacks with " + weapon;
    },
  };
}
const peter = createElf("peter", "stones");
console.log(peter.attack());
