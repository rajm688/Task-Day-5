// Given a number, “addFive” returns 5 added to that number.
var num = 10;
function addFive(num) { 
 return num*5
}
var result = addFive(num)
console.log(result)

// Write a function called “getOpposite”.
// Given a number, return its opposite

var num1 = 5;
function getOpposite(num1) {
 return -1*num1
}
var result1 = getOpposite(num1)
console.log(result1)

// Fill in your code that takes an number minutes and converts it to seconds.

var min = 5;
function toSeconds(min) {
    return 60*min
}
var secs = toSeconds(min)
console.log(secs)

// Create a function that takes a string and returns it as an integer.
var mystr = "5";
function toInteger(mystr) {
    return parseInt(mystr)
}
var myint = toInteger(mystr)
console.log(myint)

// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
var myint1 = 6;
function nextNumber(myint1) {
    return parseInt(myint1)+1
}
var myNextint = nextNumber(myint1)
console.log(myNextint)

// Create a function that takes an array and returns the first element.
var arr = [5, 2, 3];
function getFirstElement(arr) {
    return arr[0]
}
var data = getFirstElement(arr)
console.log(data)
// Convert Hours into Seconds
// Write a function that converts hours into seconds.
var hours = 5;
function hourToSeconds(tomin) {
    return tomin * 60
}
var min = hourToSeconds(hours)
console.log(min)

// Create a function that takes height and width and finds the perimeter of a rectangle.
function findPerimeter(num1,num2) {
    return 2*(num1 + num2)
}
var peri = findPerimeter(6,7)
console.log(peri);
// Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function lessThan100(num3,num4) {
    if((num3 +num4)< 100){
        console.log("true")
    } else{
        console.log("false")
    }
};
lessThan100(22,15)