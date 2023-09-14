// alert("Provjera");
//PRIMITIVE=> sing value
console.log(typeof 5)
// true
// 'To be or no to be'
// undefined
console.log(typeof null)
console.log(typeof Symbol('just me'))


function a(){
    return 5
}

a.hi= 'Hello'

console.log(a.hi)

//NON-PRIMITIVE
// {}
// []
// function(){}

var array1 = [1,2,3]
var array2 = {
    0: '1',
    1: '2',
    2: '3',	
}
console.log(Array.isArray(array1))
console.log(Array.isArray(array2))