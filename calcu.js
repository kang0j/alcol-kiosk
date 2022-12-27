function main () {
    var a = parseFloat(document.getElementById('a').value);
    var b = parseFloat(document.getElementById('b').value);
    var c = parseFloat(document.getElementById('c').value);
    var d = parseFloat(document.getElementById('d').value);
    var e = parseFloat(document.getElementById('e').value);
    var f = parseFloat(document.getElementById('f').value);
    var g = parseFloat(document.getElementById('g').value);


    var total = a*4+b*3+c*4+d*3+e*3+f*2+g*2

    document.getElementById('output').innerHTML = total;

}

