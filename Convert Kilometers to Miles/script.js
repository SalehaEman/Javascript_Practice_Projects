function convert(){
    var kms = document.getElementById('data').value;
    // alert(kms);
    const factor = 0.62137;
    var miles = kms * factor;
    // alert(miles);
    document.getElementById('result').innerText = `${miles} miles`;
    document.getElementById('result').innerText = miles + `miles`;
}