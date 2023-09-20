//Scoping, Hoisting, Re-Declaration [ES6 - 2015]
//Block-level scoping - two keyword [let and const]
{
    let myName = "Pravinkumar R. D.";
}
//console.log(myName);
if (true) {
    let myFriend = "Manish Kaushik";
}
//console.log(myFriend);
for (let i = 0; i < 5; i++) {
    //some logic
}
//console.log(i);
//Hoisting - Any variable declared  with let or const keywords, are hoisted into TDZ
//TDZ - Temporal Dead Zone
//console.log(myAnotherFriend);
{
    let myAnotherFriend = "Alisha C.";
}
let myAnotherFriend = "Manish Sharma";
console.log(myAnotherFriend);

const PI = 3.14;
//PI = 3.141234567;

//Object and Array Reference Type
const MyWorkingCities = ["Bangalore", "Chennai", "Hyderabad"];
MyWorkingCities.push("Pune");
console.log(MyWorkingCities);
//MyWorkingCities=[];