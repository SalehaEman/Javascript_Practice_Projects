var x = prompt("Enter number");
if(x%2 == 0){
    //even
    console.log(`${x} is an even number`);
}else{
    //odd
    console.log(`${x} is an odd number`);
}

// using ternary operator
var x = prompt("Enter number");
var res = x%2 ==0 ? "even" : "odd";
console.log(` ${x} is a ${res} number`);