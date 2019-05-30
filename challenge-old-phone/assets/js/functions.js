var count = 0;
var concat = '';

function abc() {
    var input_value = document.getElementById('data1').value;
    var result = document.getElementById('separate');
    count++;
    document.getElementById('display').innerHTML;
    var i = input_value.split(" ");

    if (count === 1) {
        result.innerHTML = i[0];
    } else if (count === 2) {
        result.innerHTML = i[1].substr(0, 1);
    } else if (count === 3) {
        result.innerHTML = i[1].substr(1, 1);
    } else if (count === 4) {
        result.innerHTML = i[1].substr(2, 2);
    } else {
        count = 0;
        result.innerHTML = '';
    }
}

function def() {
    var input_value = document.getElementById('data2').value;
    var result = document.getElementById('separate');
    count++;
    document.getElementById('display').innerHTML;
    var i = input_value.split(" ");

    if (count === 1) {
        result.innerHTML = i[0].substr(0, 1);
    } else if (count === 2) {
        result.innerHTML = i[0].substr(1, 1);
    } else if (count === 3) {
        result.innerHTML = i[0].substr(2, 2);
    } else if (count === 4) {
        result.innerHTML = i[1];
    } else {
        count = 0;
        result.innerHTML = '';
    }
}

function ghi() {
    var input_value = document.getElementById('data3').value;
    var result = document.getElementById('separate');
    count++;
    document.getElementById('display').innerHTML;
    var i = input_value.split(" ");

    if (count === 1) {
        result.innerHTML = i[0];
    } else if (count === 2) {
        result.innerHTML = i[1].substr(0, 1);
    } else if (count === 3) {
        result.innerHTML = i[1].substr(1, 1);
    } else if (count === 4) {
        result.innerHTML = i[1].substr(2, 2);
    } else {
        count = 0;
        result.innerHTML = '';
    }
}

var res = abc() + def();
console.log(res);
