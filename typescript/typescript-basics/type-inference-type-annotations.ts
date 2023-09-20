//Type Inference - The compiler of Typescript will decide the type of the variable upon initialization and will retain that type throughout the life of your application
let myName:string = "Pravinkumar R. D.";
//myName=283923;
//myName=true;
myName = "Alisha C.";

//Type Annotations/ Union Annotations
let num1: number | string | boolean;
num1 = "Hundred";
num1 = 1000;
num1 = true;
//num1 = [2389, 2390]

function addition(num1: number, num2: number): void|number {
    return num1 + num2;
}
addition(100,100);