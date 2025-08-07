var customerFirstName: string = "John";
var customerLastName: string = "Doe";
var customerAge: number = 30;


//TypeScript allows you to define types for variables, function parameters, and return values.
//Javascript does not have a built-in way to define types, but TypeScript allows you to do so.
//This can help catch errors at compile time rather than runtime, making your code more robust and easier to maintain.

type Customer = {
    firstName: string;
    lastName: string;
    age: number;
};

var firstCustomer: Customer = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
var secondCustomer: Customer = {
    firstName: "Jane",
    lastName: "Smith",
    age: 25
};

console.log(firstCustomer);
console.log(secondCustomer);