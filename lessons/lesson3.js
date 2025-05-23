//Object
var customer = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
//Accessing object properties
console.log(customer.firstName); // John
console.log(customer["lastName"]); // Doe
//Adding new properties
customer.email = "john.doe@example.com";
customer.phone = "123-456-7890";
console.log(customer);

//Arrays
var fruits = ["apple", "banana", "orange"];
//Accessing array elements
console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // orange
//Adding new elements
fruits.push("grape");
fruits.push("mango");
console.log(fruits); // ["apple", "banana", "orange", "grape", "mango"]
//Removing elements
fruits.pop();
console.log(fruits); // ["apple", "banana", "orange", "grape"]
