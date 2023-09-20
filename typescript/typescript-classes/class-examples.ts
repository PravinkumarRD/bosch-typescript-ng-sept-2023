//Without access modifiers, all members of classes are public
//constructor is used for initialization of data members
/*
class Person {
    constructor(fname: string, lname: string, city: string) {
        console.log('Person Class Constructor Executed!');
        this.firstName = fname;
        this.lastName = lname;
        this.city = city;
    }
    firstName: string;
    lastName: string;
    city: string;
    getPersonInfo(): string {
        return `Employee ${this.firstName} ${this.lastName} lives in city ${this.city}!`;
    }
}

class Person {
    constructor(public firstName: string, public lastName: string, private city: string) {
        console.log('Person Class Constructor Executed!');
    }
    
    getPersonInfo(): string {
        return `Employee ${this.firstName} ${this.lastName} lives in city ${this.city}!`;
    }
}*/
// class User {
//     userId: number;
//     address: Address;
// }
// class Address {
//     areaName: string;
//     roadName: string;
// }
// const user: User = new User();
// user.address.areaName = "";
abstract class Person {
    // constructor() {
    //     console.log('Person Class Constructor Executed!');
    // }
    private _firstName: string;
    get firstName() {
        return this._firstName;
    }
    set firstName(value: string) {
        if (!value) throw new Error('First Name is a required field!');
        this._firstName = value;
    }

    private _lastName: string;
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(v: string) {
        this._lastName = v;
    }

    private _city: string;
    public get city(): string {
        return this._city;
    }
    public set city(v: string) {
        this._city = v;
    }

    getPersonInfo(): string {
        return `Employee ${this.firstName} ${this.lastName} lives in city ${this.city}!`;
    }
}
//Customer IS-A Person
class Customer extends Person {
    constructor() {
        super();
        console.log('Customer Class Constructor Executed!');
    }
    customerId: number;
}
const person = new Customer();
person.firstName = "Pravinkumar";
person.lastName = "R. D.";
person.city = "Pune";

console.log(person.getPersonInfo());

console.log(typeof (Person));


//Multi-Level [Multiple Inheritance is not supported in Typescript]
class Parent{

}
class Child extends Parent{

}
class GrandChild extends Child{

}