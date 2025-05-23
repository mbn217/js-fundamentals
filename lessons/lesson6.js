//Conditional statements
// 1. if statement
// 2. if...else statement
// 3. switch statement
var age = 18;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

//else if statement
var score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}

//Switch statement
var day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Invalid day");
}

//Task: if hour between 6 and 12 print "Good morning"
//Task: if hour between 12 and 18 print "Good afternoon"
//Task: if hour between 18 and 24 print "Good evening"
var hour = 10;
if (hour >= 6 && hour < 12) {
    console.log("Good morning");
} else if (hour >= 12 && hour < 18) {
    console.log("Good afternoon");
} else if (hour >= 18 && hour < 24) {
    console.log("Good evening");
}