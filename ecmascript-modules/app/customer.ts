console.log('Customer Module Started!');

import SynechronPerson from "./person";

class Customer extends SynechronPerson {
    constructor() {
        super();
        console.log('Customer class constructor executed!');
    }
}

//Singleton pattern
export default new Customer();
console.log('Customer Module Ended!');