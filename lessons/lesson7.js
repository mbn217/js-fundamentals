//Loops
// 1. for loop
// 2. while loop
// 3. do...while loop
// 4. for...in loop
// 5. for...of loop

// For loop
for (var i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}

// While loop
var j = 0;
while (j < 5) {
    console.log("Iteration: " + j);
    j++;
}

// Do...while loop
var k = 0;
do {
    console.log("Iteration: " + k);
    k++;
} while (k < 5);

// For...in loop
var person = { fname: "John", lname: "Doe", age: 25 };
for (var key in person) {
    console.log(key + ": " + person[key]);
}

// For...of loop
var colors = ["red", "green", "blue"];
for (var color of colors) {
    console.log(color);
}
