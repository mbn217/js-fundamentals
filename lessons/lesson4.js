// Relational operators
// 1. Greater than
// 2. Less than
// 3. Greater than or equal to
// 4. Less than or equal to
// 5. Equal to
// 6. Not equal to
// 7. Strict equal to
// 8. Strict not equal to
var a = 5;
var b = 10;
console.log(a <= b); // true
console.log(a >= b); // false
console.log(a < b); // true
console.log(a > b); // false 
console.log(a == b); // false -- this is not strict (loose comparison)
console.log(a != b); // true -- this is not strict (loose comparison)
console.log(a === b); // false -- this is strict (strict comparison we also check the data type of the variable) 