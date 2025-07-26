// Data Types in javaScript

let data = 8; // number
let user = "Sriyansh"; // string

// there are two diffrent datatype in javascript
    // primitive
    // object

// we will talk about primitive datatype here in this file.

// Number

let number = 1000000;
let number2= 267788862889037940n; // very big number
let number3= 234167864789n; // n in the last of number denot 'Bigint'.
let number4= 7.8; // floating point number
console.log(typeof number4);
/* 
    we can use various types of number in the javascript like binary, octal
    hexadecimal, Decimal etc all type of numbersystem is supported here. we can
    always refer Documentation for this thing.
*/
// maximum number supported in javascript
console.log(Number.MAX_VALUE);

// String
/* 
    String is the Datatype where we store text value, character or any language literal.
*/
let userFirstName = "Sriyansh";
let userLastName = "Srivastava";
console.log(userFirstName+" "+userLastName)// String concatination
let specialCharecterDoubleQuote= "This sentence contain \"Double Quote\", and i want to print double quote in console. we can do this by 'Back Slash' before any \" to achieve the same."
console.log(specialCharecterDoubleQuote);


// Boolean
    // true or false
let bool = 5>6;
console.log(bool);


// Null
let name = null;
console.log(name);
console.log(typeof name);

// undefined value
let undefined
console.log(undefined)

// Symbol