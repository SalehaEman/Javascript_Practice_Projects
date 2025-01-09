// using Math.max()

// var a = prompt("Please enter the first number");
// var b = prompt("Please enter the second number");
// var c = prompt("Please enter the third number");
// var x = Math.max(a,b,c);
// console.log(`${a}, ${b}, ${c}: Largest = ${x}`);


function check(p,q,r){
    if(p>=q && p>=r){
        return p;
    }else if(q>=p && q>=r){
        return q;
    }else{
        return r;
    }
}

var a = prompt("Please enter the first number");
var b = prompt("Please enter the second number");
var c = prompt("Please enter the third number");
var x = check(a,b,c);
console.log(`${a}, ${b}, ${c}: Largest = ${x}`);