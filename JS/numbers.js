//number methods
const myVariable = "423.555aaaa";
const myVariable1="aaa2222"
const myNumber = 42;
const myFloat = 42.0

console.log(Number.isInteger(myNumber)); //true
console.log(Number.isInteger(myVariable));


//parsefloat 
//in js, parsefloat is used to convert string to number
console.log(Number.parseFloat(myVariable))
console.log(Number.parseFloat(myVariable1));
console.log(Number.parseFloat(myVariable).toFixed(2));//outut is in white color because it is a sting

//parseInt
//in js, parseInt is used to convert string to number
console.log(Number.parseInt(myVariable));
console.log(typeof myVariable)

//to string
//in js, toString is used to convert number to string

console.log(myNumber.toString());

//chaining method
console.log(parseFloat(myVariable).toFixed(2).toUpperCase().toString());

//isNaN
//Number.isNaN is used to check if the value is NaN or not
//isNaN is used to check if the value is NaN or not

console.log(Number.isNaN(myVariable)); //false
console.log(Number.isNaN("Aqeel")); //false
console.log(isNaN("Aqeel")); //true