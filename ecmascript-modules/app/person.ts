console.log('Person Module Started!');
export default class Person {
    constructor() {
        console.log('Person class constructor executed!');
    }
    firstName: string;
    lastName: string;
    city: string;
    getPersonInfo(): string {
        return `Person named ${this.firstName} ${this.lastName} lives in city ${this.city}!`;
    }
}
console.log('Person Module Ended!');