// How do you pass unbound number of parameters to the function?
// In C# params, in Java varargs
//REST Parameter - pack the comman separated values passed as parameters to the function in an Array
//Rules - Only on REST Parameter per function and it will always be the last parameter in function

function printCities(country: string, state?: string, ...cities: string[]): void {
    console.log(country);
    console.log(cities);
}

const Boss: string[] = ["A", "B", "C", "D", "E", "F", "G"];
printCities("India", "A", "B", "C", "D", "E");
printCities("India", "A", "B");
//SPREAD Operator - Unpacks the collection values
printCities("India","All States",...Boss);
printCities("USA");