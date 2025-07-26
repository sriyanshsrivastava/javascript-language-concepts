// this is variable concept. this syntax is allowed but not a good way t0
// use variable here.
num = 2+2 // num variable
console.log(num) // printing the variable to console.
console.log(num+3) // adding 3 in num variable and then printing to console.


// Right way to declare or assign variables.
let num2 = 2+2;
console.log(num2);

/* we can also use ; semi-colon in the end of statement, it will
    not give error, and without semi-colon we can achieve the same
    javascript is very forgiving about this semi-colon (;) thing.
*/

let username = "Navin";
username= 'Sriyansh'; // we can change the value of variable declared by "let"
console.log(username)


// declaring constant variable
const pi =3.14
// this will not allow value of the pi to be changed.
// pi=3.22; // this will give error