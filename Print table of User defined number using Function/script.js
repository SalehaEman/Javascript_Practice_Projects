function table(number){
    for(var i=1; i<=10; i++){
        var res = i * number;
        console.log(`${number} x ${1} = ${res}`);
    }
}

table(prompt("enter number for table"));