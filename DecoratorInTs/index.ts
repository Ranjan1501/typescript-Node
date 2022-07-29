let variable = function(target) {
target.property = 'Hi, I am Ranjan';
}

// Decorator
@variable
class GFG
{ }

// Print in the console
console.log( GFG.property );
// Procedure to run: To run decorators, it requires transpiler support in browsers but at present no browsers are supported this. 

// Step1: We use BabelJS and then we can run decorators on browsers. Here we will use jsfiddle for run the code. 
// Step 2: Under jsfiddle select the option Babel+JSX, otherwise the program will not run, only JavaScript will show error @.

