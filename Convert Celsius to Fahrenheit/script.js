function convert(){
    var c = document.getElementById('data').value;
    // alert(c);
    var f = (c * 1.8) + 32;
    // alert(f);
    document.getElementById('result').innerText = `${c} C = ${f} F`;
}