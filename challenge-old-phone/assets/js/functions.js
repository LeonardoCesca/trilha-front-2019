var count = 0;
var concaty = '';
var caracter;

function abc() {
    var input_value = document.getElementById('data2').value;
    var result = document.getElementById('display').innerHTML;
    var i = input_value.split(" ");
    count++;

    if (count === 1) {
        caracter = i[0];
    } else if (count === 2) {
        caracter = i[1].substr(0, 1);
    } else if (count === 3) {
        caracter = i[1].substr(1, 1);
    } else if (count === 4) {
        caracter = i[1].substr(2, 2);
        count = 0;
    }
    concaty = concaty.concat(caracter);
    result = concaty;
    document.getElementById('display').innerHTML = caracter;
}

function def() {
    var input_value = document.getElementById('data3').value;
    var result = document.getElementById('display').innerHTML;
    var i = input_value.split(" ");
    count++;

    if (count === 1) {
        caracter = i[0].substr(0, 1);

    } else if (count === 2) {
        caracter = i[0].substr(1, 1);

    } else if (count === 3) {
        caracter = i[0].substr(2, 2);

    } else if (count === 4) {
        caracter = i[1];
        count = 0;
    }

    concaty = concaty.concat(caracter);
    result = concaty;
    document.getElementById('display').innerHTML = caracter;
}

function ghi() {
    var input_value = document.getElementById('data4').value;
    var result = document.getElementById('display').innerHTML;
    var i = input_value.split(" ");
    count++;

    if (count === 1) {
        caracter = result.innerHTML = i[0].substr(0, 1);

    } else if (count === 2) {
        caracter = result.innerHTML = i[0].substr(1, 1);

    } else if (count === 3) {
        caracter = result.innerHTML = i[0].substr(2, 2);

    } else if (count === 4) {
        caracter = result.innerHTML = i[1];
        count = 0;
    }

    concaty = concaty.concat(caracter);
    result = concaty;
    document.getElementById('display').innerHTML = caracter;
}

function jkl() {
    var input_value = document.getElementById('data5').value;
    var result = document.getElementById('display').innerHTML;
    var i = input_value.split(" ");
    count++;

    if (count === 1) {
        caracter = result.innerHTML = i[0].substr(0, 1);

    } else if (count === 2) {
        caracter = result.innerHTML = i[0].substr(1, 1);

    } else if (count === 3) {
        caracter = result.innerHTML = i[0].substr(2, 2);

    } else if (count === 4) {
        caracter = result.innerHTML = i[1];
        count = 0;
    }

    concaty = concaty.concat(caracter);
    result = concaty;
    document.getElementById('display').innerHTML = caracter;
}

function mno() {
    var input_value = document.getElementById('data6').value;
    var result = document.getElementById('display').innerHTML;
    var i = input_value.split(" ");
    count++;

    if (count === 1) {
        caracter = result.innerHTML = i[0].substr(0, 1);

    } else if (count === 2) {
        caracter = result.innerHTML = i[0].substr(1, 1);

    } else if (count === 3) {
        caracter = result.innerHTML = i[0].substr(2, 2);

    } else if (count === 4) {
        caracter = result.innerHTML = i[1];
        count = 0;
    }

    concaty = concaty.concat(caracter);
    result = concaty;
    document.getElementById('display').innerHTML = caracter;
}

function pqrs() {
    var input_value = document.getElementById('data7').value;
    var result = document.getElementById('display').innerHTML;
    var i = input_value.split(" ");
    count++;

    if (count === 1) {
        caracter = result.innerHTML = i[0].substr(0, 1);

    } else if (count === 2) {
        caracter = result.innerHTML = i[0].substr(1, 1);

    } else if (count === 3) {
        caracter = result.innerHTML = i[0].substr(2, 2);

    } else if (count === 4) {
        caracter = result.innerHTML = i[1];
        count = 0;
    }

    concaty = concaty.concat(caracter);
    result = concaty;
    document.getElementById('display').innerHTML = caracter;

}

function tuv() {
    var input_value = document.getElementById('data8').value;
    var result = document.getElementById('display').innerHTML;
    var i = input_value.split(" ");
    count++;

    if (count === 1) {
        caracter = result.innerHTML = i[0].substr(0, 1);

    } else if (count === 2) {
        caracter = result.innerHTML = i[0].substr(1, 1);

    } else if (count === 3) {
        caracter = result.innerHTML = i[0].substr(2, 2);

    } else if (count === 4) {
        caracter = result.innerHTML = i[1];
        count = 0;
    }

    concaty = concaty.concat(caracter);
    result = concaty;
    document.getElementById('display').innerHTML = caracter;
}

function wxyz() {
    var input_value = document.getElementById('data9').value;
    var result = document.getElementById('display').innerHTML;
    var i = input_value.split(" ");
    count++;

    if (count === 1) {
        caracter = result.innerHTML = i[0].substr(0, 1);

    } else if (count === 2) {
        caracter = result.innerHTML = i[0].substr(1, 1);

    } else if (count === 3) {
        caracter = result.innerHTML = i[0].substr(2, 2);

    } else if (count === 4) {
        caracter = result.innerHTML = i[0].substr(3, 3);

    } else if (count === 5) {
        caracter = result.innerHTML = i[1];
        count = 0;
    }

    concaty = concaty.concat(caracter);
    result = concaty;
    document.getElementById('display').innerHTML = caracter;
}