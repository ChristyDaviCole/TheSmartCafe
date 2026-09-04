Journal Prompt 1: Explain the syntax difference between the function declaration (calculatePrice) and the function expression (getTax).
calculatePrice simply declares a function and getTax is a function expression because it creates a function and assigns it to a variable.

Journal Prompt 2: What happened when you tried to log defaultTaxRate outside the function? Why did that occur?
I got an uncaught reference error becuase the defaultTaxRate variable was inside of the local scope of its declaration and it can't be seen globally. 

Journal Prompt 3: Describe how arrow function syntax differs from standard function expressions. Did concise implicit returns make your code easier or harder to read?
The fat arrow syntax lets you omit the curly braces, the word function, and the word return. I like this style better becuase it is more concise and easy to understand.

Journal Prompt 4: Why is applyDiscount considered a “Higher-Order Function”? What role did studentDiscount and seniorDiscount play? What function would you have to write if you wanted to apply no discount?
applyDiscount is a higher order function because it takes another function as an argument. studentDiscount and seniorDiscount were the callback functions. applyDiscount would receive these callback functions and then execute. const noDiscount = total => total;

Journal Prompt 5: How did breaking the order process into small, single-purpose functions make writing calculateFinalBill easier than putting all the math into one long block of code? A function declaration creates a function directly, while a function expression assigns a function to a variable.