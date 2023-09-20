//Strongly Types Array
const BoschOffices: string[] = ["Bangalore", "Mumbai", "Berlin", "Delhi"];

for (let index = 0; index < BoschOffices.length; index++) {
    if (BoschOffices[index] === "Berlin") break;
    console.log(BoschOffices[index]);
}
console.log('');
BoschOffices.forEach(function (city) {
    if (city === 'Berlin') return;
    console.log(city);
});
console.log('');
//ECMAScript 6/2015
for (let city of BoschOffices) {
    //if(city==='Berlin') break;
    console.log(city);
}

//Iterator object [Symbol]
const result = BoschOffices[Symbol.iterator]();
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());
console.log(result.next());