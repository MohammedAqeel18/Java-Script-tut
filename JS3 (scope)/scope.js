//Scope var, let , const
//scope refers to the visibility of variables in a program. In JavaScript, there are three types of scope: global, function, and block scope.

// Global scope: Variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.
var x = 10; // global variable
let y=20; // global variable
const z=30; // global variable

//local scope // block scope
{
    let y = 2; // local variable
    console.log(y);
}

//local scope // function scope

function myFunc(){
    const z = 30; // local variable
    
    console.log(z);
}
myFunc(); // prints 30
console.log(y);