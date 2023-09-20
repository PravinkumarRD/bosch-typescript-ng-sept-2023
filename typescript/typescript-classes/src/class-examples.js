"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
class Person {
    // constructor() {
    //     console.log('Person Class Constructor Executed!');
    // }
    _firstName;
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        if (!value)
            throw new Error('First Name is a required field!');
        this._firstName = value;
    }
    _lastName;
    get lastName() {
        return this._lastName;
    }
    set lastName(v) {
        this._lastName = v;
    }
    _city;
    get city() {
        return this._city;
    }
    set city(v) {
        this._city = v;
    }
    getPersonInfo() {
        return `Employee ${this.firstName} ${this.lastName} lives in city ${this.city}!`;
    }
}
//Customer IS-A Person
class Customer extends Person {
    constructor() {
        super();
        console.log('Customer Class Constructor Executed!');
    }
    customerId;
}
const person = new Customer();
person.firstName = "Pravinkumar";
person.lastName = "R. D.";
person.city = "Pune";
console.log(person.getPersonInfo());
console.log(typeof (Person));
//Multi-Level [Multiple Inheritance is not supported in Typescript]
class Parent {
}
class Child extends Parent {
}
class GrandChild extends Child {
}
//# sourceMappingURL=class-examples.js.map