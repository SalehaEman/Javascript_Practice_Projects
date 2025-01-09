var number =prompt("Please enter a number");
var fact = 1;
if(number == 0){
    console.log(`The factorial of ${number} is 1`);
}else if(number < 0){
    console.log(`The Factorial of -ve number is not possible`);
}else{
    for(var i=1; i<=number; i++){
        fact = fact * i;
      
    }
}
console.log(`The factorial of ${number} is ${fact}`);