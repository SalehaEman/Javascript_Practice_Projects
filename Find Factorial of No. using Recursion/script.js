var number =prompt("Please enter a number");
var fact = 1;
function factr(n){
    if(n>number){
        return;
    }
    var temp = fact;
    fact = fact * n;
    n++;
    factr(n);
}
factr(1);
console.log(`The fact of ${number} is ${fact}`);