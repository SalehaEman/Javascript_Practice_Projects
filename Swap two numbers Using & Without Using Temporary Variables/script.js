// using temporary variable
var p = prompt("Please enter the first value");
var q = prompt("Please enter the second value");
console.log(`The value of a is: ${p}, The value of b ${q}`);
var temp;
temp = p;
p = q;
q = temp;

console.log(`After Swapping \n The value of a is: ${p}, The value of b ${q}`);

// without using temporary variable

var a = parseInt(prompt("Please enter the first value"));
var b = parseInt(prompt("Please enter the second value"));
console.log(`The value of a is: ${a}, The value of b ${b}`)

a = a + b;
b = a - b;
a = a - b;
console.log(`After Swapping \n The value of a is: ${a}, The value of b ${b}`)