//All parameters in Typescript functions are compulsory
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(100, 200));
//IncomingMoney [ActualSales]- Outgoing Money[cogs,expense,gstAmount] = NetProfit
//Default Parameters
// function salesNetProfit(cogs: number, expense: number = 10000, actualSales: number, gstPercent: number = 0): number {
//     let gstAmount: number = actualSales * gstPercent / 100;
//     return actualSales - (cogs + expense + gstAmount);
// }
// console.log(salesNetProfit(12000, undefined, 150000));
//optional parameters
function salesNetProfit(cogs, expense = 10000, actualSales, gstPercent) {
    if (!gstPercent)
        gstPercent = 5;
    let gstAmount = actualSales * gstPercent / 100;
    return actualSales - (cogs + expense + gstAmount);
}
console.log(salesNetProfit(12000, 13000, 150000, 18));
//# sourceMappingURL=functions.js.map