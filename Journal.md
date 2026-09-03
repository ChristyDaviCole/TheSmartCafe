Journal Prompt 1: Explain the syntax difference between the function declaration (calculatePrice) and the function expression (getTax).
calculatePrice simply declares a function and getTax is a function expression because it creates a function and assigns it to a variable.

Journal Prompt 2: What happened when you tried to log defaultTaxRate outside the function? Why did that occur?
I got an uncaught reference error becuase the defaultTaxRate variable was inside of the local scope of its declaration and it can't be seen globally. 