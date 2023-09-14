// alert("Provjera");
//PRIMITIVE=> sing value
console.log(typeof 5);
// true
// 'To be or no to be'
// undefined
console.log(typeof null);
console.log(typeof Symbol("just me"));

function a() {
  return 5;
}

a.hi = "Hello";

console.log(a.hi);

//NON-PRIMITIVE
// {}
// []
// function(){}

var array1 = [1, 2, 3];
var array2 = {
  0: "1",
  1: "2",
  2: "3",
};
console.log(Array.isArray(array1));
console.log(Array.isArray(array2));

// pass by value vs pass by refeerence
var a = 5;
var b = a;
b++;

console.log(a);
console.log(b);

let obj1 = { name: "yao", password: "123" };
let obj2 = obj1;
obj2.password = "easypeasy";
console.log(obj1);
console.log(obj2);

var c = [1, 2, 3, 4, 5];
var d = [].concat(c);
d.push(6);
console.log(c, d);

let obj123 = { a: "a", b: "b", c: "c" };
let clone = Object.assign({}, obj123);
let clone2 = { ...obj123 };
let noClone = obj123;
obj123.c = 5;
console.log(clone);
console.log(clone2);
console.log(noClone);

let obj12345 = {
  a: "a",
  b: "b",
  c: {
    deep: "try this",
  },
};

let superClone = JSON.parse(JSON.stringify(obj12345));
console.log(superClone);

//type coercion
console.log(1 == "1");
console.log(1 === "1");

//type caution, dynamic, weak

var aaa = "hello";
aaa += 17;
console.log(aaa);
