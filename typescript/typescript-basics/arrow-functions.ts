const Employee = {
    employeeId: 2738,
    employeeName: 'Alisha C.',
    city: 'Mumbai',
    printEmployeeInfo: function () {
        console.log(this);
        setTimeout(()=> {
            console.log(this);
            console.log(`Employee ${this.employeeName} with Id ${this.employeeId} who lives in city ${this.city}!`);
        }, 2000);
    }
}
Employee.printEmployeeInfo();