//1. Hellow world
console.log("Hello world");

//2. Variables
var firstName = "John";
var lastName = "Doe";

//Rule of variables creation
// 1. Variable names can contain letters, numbers, underscores, and dollar signs.
// 2. Variable names must start with a letter, underscore, or dollar sign.
// 3. Variable names are case-sensitive.
// 4. Variable names cannot be a reserved keyword (e.g., var, let, const, if, else, etc.).
// 5. Variable names should be descriptive and meaningful.
// 6. Variable names should not contain spaces or special characters (except for underscores and dollar signs).

console.log(firstName);
console.log(lastName);

var age , dateOfBirth, isMarried;
age = 30;
dateOfBirth = "1993-01-01";
isMarried = false;
console.log(age);
console.log(dateOfBirth);
console.log(isMarried);

//overwriting variables
age = 31;
console.log(age);

//3. Constants
const PI = 3.14;
//Constants are block-scoped, similar to variables declared using let.
// They cannot be reassigned or redeclared within the same scope.
// PI = 3.14159; // This will throw an error because PI is a constant and cannot be reassigned.
console.log(PI);

//4. Data types
var middleName = "Smith"; // string
var isStudent = true; // boolean
var height = 5.9; // number
var hobbies = ["reading", "traveling", "coding"]; // array
var person = { firstName: "John", lastName: "Doe" }; // object
var emptyValue = null; // null
var notDefined; // undefined







