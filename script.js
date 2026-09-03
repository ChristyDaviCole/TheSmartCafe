//Phase 1: Declarations, Expressions, and Console Testing
//First, create basic helper tools to calculate item subtotals and tax amounts.

/*Create a function declaration named calculatePrice that takes price and quantity
as parameters and returns price * quantity.*/

function calculatePrice(price, quantity) {
    return price * quantity;
}

/*Create a function expression assigned to a variable named getTax that takes amount and taxRate as parameters.
It should return only the tax value (amount * taxRate).*/

const getTax = function (amount, taxRate) {
    return amount * taxRate;
}

//Console Test: Call both functions with test numbers (e.g., item price $15, quantity 4, tax rate 0.07).
//Use console.log() to output the subtotal and calculated tax to the browser console.

const subtotal = calculatePrice(15, 4);
console.log(subtotal);

const tax = getTax(subtotal, 0.07);
console.log(tax);

//Journal Prompt: Explain the syntax difference between the function declaration (calculatePrice) and the function expression (getTax).