const Customer = {
    customerId: 27382,
    contactName: 'Manish Kaushik',
    city: 'Bangalore',
    company: 'Wells'
};
console.log('Customer ' + Customer.contactName + ' \n\tlives in city ' + Customer.city + ' works in company ' + Customer.company);
//This below statement will only work in console.log statements
console.log('Customer %s \n\tlives in city %s works in company %s', Customer.contactName, Customer.city, Customer.company);
function getWellsCustomerInfo() {
    //return 'Customer ' + Customer.contactName + ' \n\tlives in city ' + Customer.city + ' works in company ' + Customer.company;
    //return 'Customer %s \n\tlives in city %s works in company %s',Customer.contactName,Customer.city,Customer.company
    return `Customer ${Customer.contactName} 
    lives in city ${Customer.city} works in company ${Customer.company}`;
}
console.log(getWellsCustomerInfo());
//Backtick syntax `` with expression/literal - As template in Angular Component
console.log(`Customer ${Customer.contactName} 
    lives in city ${Customer.city} works in company ${Customer.company}`);
//# sourceMappingURL=template-literals.js.map