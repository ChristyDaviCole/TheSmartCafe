//Phase 1: Declarations, Expressions, and Console Testing
//First, create basic helper tools to calculate item subtotals and tax amounts.

/*Create a function declaration named calculatePrice that takes price and quantity
as parameters and returns price * quantity.*/

//function calculatePrice(price, quantity) {
//    return price * quantity;
//}

const calculatePrice = (price, quantity) => price * quantity;

/*Create a function expression assigned to a variable named getTax that takes amount and taxRate as parameters.
It should return only the tax value (amount * taxRate).*/

//const getTax = function (amount, taxRate) {
//    return amount * taxRate;
//}

const getTax = (amount, taxRate) => amount * taxRate;

//Console Test: Call both functions with test numbers (e.g., item price $15, quantity 4, tax rate 0.07).
//Use console.log() to output the subtotal and calculated tax to the browser console.

const subtotal = calculatePrice(15, 4);
console.log(subtotal);

const tax = getTax(subtotal, 0.07);
console.log(tax);

//Journal Prompt: Explain the syntax difference between the function declaration (calculatePrice)
// and the function expression (getTax).

/*Phase 2: Function Scope & Variable Accessibility
Now, explore local scope boundaries using internal variables.*/

//Create a function named calculateStoreTax that takes an amount parameter.
//Inside the function, define a local variable const defaultTaxRate = 0.07.

function calculateStoreTax(amount) {
    const defaultTaxRate = 0.07;

    return getTax(amount, defaultTaxRate);
}

//calculateStoreTax(100);

console.log(calculateStoreTax(100));

//console.log(defaultTaxRate);

//Return the tax for an amount given that default value
//Hint: you can call functions in other functions

//Console Test:
//Call calculateStoreTax(100) and console.log() the output.
//Directly below that call, attempt to console.log(defaultTaxRate) outside the function.
//Check your browser console to observe the error. Once confirmed, comment out the line that caused the error.

//Journal Prompt: What happened when you tried to log defaultTaxRate outside the function? Why did that occur?

//Phase 3: Refactoring to Arrow Functions
//To modernize the codebase, shorten your basic helper functions using concise arrow syntax.

//Refactor both calculatePrice and getTax into Arrow Functions.

//See line 11

//Use concise syntax (implicit return without {} or the return keyword).

//See line 20

//Console Test: Re-run your console.log() tests from Phase 1.
//Verify in the console that the outputs match your Phase 1 results exactly.

//Journal Prompt: Describe how arrow function syntax differs from standard function expressions.
//Did concise implicit returns make your cod1e easier or harder to read?

/*Phase 4: Callbacks & Higher-Order Functions
The Café offers various promotions. 
Create a higher-order function that delegates discount calculations to callback functions.*/

//Create a function named applyDiscount that takes two parameters: total and discountCallback. 
//It should call discountCallback(total) and return the result.

const applyDiscount = (total, discountCallback) => discountCallback(total);

//Create two separate discount functions:

//studentDiscount(total): returns the new price after applying a 10% discount (total * 0.90).

const studentDiscount = total => total * 0.90;

//seniorDiscount(total): returns the new price after applying a 20% discount (total * 0.80).

const seniorDiscount = total => total * 0.80;

//Console Test: Run applyDiscount(100, studentDiscount) and applyDiscount(100, seniorDiscount).

applyDiscount(100, studentDiscount);
applyDiscount(100, seniorDiscount);

//console.log() both results to confirm the callbacks produce different outputs.

console.log(applyDiscount(100, studentDiscount));
console.log(applyDiscount(100, seniorDiscount));

//Journal Prompt: Why is applyDiscount considered a “Higher-Order Function”?
//What role did studentDiscount and seniorDiscount play?
//What function would you have to write if you wanted to apply no discount?

/*Phase 5: Composing the Master Order Function
Combine all individual helper functions into a single transaction process.*/

//Create a main function named calculateFinalBill that accepts three parameters: price, quantity, and discountCallback.
//Inside calculateFinalBill, compose your existing functions step-by-step:

//const calculateFinalBill = (price, quantity, discountCallback) => calculatePrice(price, quantity);
////Use calculatePrice to get the subtotal.

const calculateFinalBill = (price, quantity, discountCallback) => {
 
    const subtotal = calculatePrice(price, quantity);

    //Use applyDiscount with the provided discountCallback to get the discounted price.

    const discountedSubtotal = applyDiscount(subtotal, discountCallback);

    //Use getTax (with a rate of 0.07) on the discounted price to get the tax amount.
    
    const storeTax = getTax(discountedSubtotal, 0.07);

    //Return the grand total (discounted price + tax amount).

    const grandTotal = discountedSubtotal + storeTax;
    
    return grandTotal;

}

//Console Test: Call calculateFinalBill(20, 3, studentDiscount) and console.log() the returned grand total.

console.log(calculateFinalBill(20, 3, studentDiscount));

//Journal Prompt: How did breaking the order process into small, single-purpose functions make writing calculateFinalBill easier than putting all the math into one long block of code?