//Functions
// 1. Function Declaration
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Alice");
// 2. Function Expression is also called Anonymous Function
// (function expression is a function that is defined inside a variable) 
var greet0 = function(name) {
    console.log("Hello, " + name + "!");
};
greet0("Bob");

//Declarative function can be called before it is defined but function expression 
// and arrow function cannot be called before it is defined



// 3. Arrow Function (ES6)
var greet1 = (name) => {
    console.log("Hello, " + name + "!");
};
greet1("Charlie");

//Functions with Default Parameters
function greet2(name = "Guest") {
    console.log("Hello, " + name + "!");
}
greet2(); // Output: Hello, Guest!
greet2("David"); // Output: Hello, David!
//Functions with return statement
function add(a, b) {
    return a + b;
}
var sum = add(5, 10);
console.log("Sum: " + sum); // Output: Sum: 15

//import functions from other files
// import { add } from './math.js';
// console.log(add(5, 10)); // Output: 15

import { printAge } from '../helpers/printHelper.js';
printAge(25); // Output: Age: 25

//import everything from a file
// import * as printHelper from './helpers/printHelper';

import * as helper from '../helpers/printHelper.js';
helper.printAge(25); // Output: Age: 25
helper.printName("Alice"); // Output: Name: Alice

