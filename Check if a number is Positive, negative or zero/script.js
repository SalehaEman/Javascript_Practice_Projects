// using math.sign()

function check(){
    var value = document.getElementById('data').value;
    var res = Math.sign(value);
    document.getElementById('res').innerText = res;
}

//using user defined function

function check(){
    var value = document.getElementById('data').value;
    if(value > 0){
        res = `${value} is Positive Number` ;
    }
    else if(value < 0){
        res = `${value} is Negative Number`;
    }
    else if(value == 0){
        res = `${value} is zero`;
    }else{
        res = `${value} is Not A Number`;
    }
    document.getElementById('res').innerText = res;
}