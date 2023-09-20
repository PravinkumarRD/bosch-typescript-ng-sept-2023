//This all code is in ECMAScript - 5
//1) Block level scoping is not allowed in ES5 [Functions are used for variable scoping]
{
  var myName = "Pravinkumar R. D.";
}
console.log(myName);
if (true) {
  var companyName = "Bosch Pvt. Ltd.";
}
console.log(companyName);

for (var i = 0; i < 5; i++) {
  //somelogic
}
console.log(i);
//Hoisting - Declaration of Variables and functions will get placed into memory
console.log(myFirend);
var myFirend = "Manish Kaushik";
var myFirend = "Alisha C.";
console.log(myFirend);

//All parameters to the function are optional
//function addition(num1) {
//   return num1 + 100;
// }
// function addition(num1, num2, num3) {
//   return num1 + num2 + num3;
// }
function addition(num1, num2) {
  return num1 + num2;
}

console.log(addition(100));
console.log(addition(100, 200));
console.log(addition(100, 200, 300));
