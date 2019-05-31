var count = 0;
var concaty = "";
var caracter, time;

function abc() {
  var input_value = document.getElementById("data2").value;
  var i = input_value.split(" ");
  count++;

  if (count === 1) {
    caracter = i[0];
    clearTimeout(time);
  } else if (count === 2) {
    caracter = i[1].substr(0, 1);
    clearTimeout(time);
  } else if (count === 3) {
    caracter = i[1].substr(1, 1);
    clearTimeout(time);
  } else if (count === 4) {
    caracter = i[1].substr(2, 2);
    count = 0;
    clearTimeout(time);
  }
  document.getElementById("display").innerHTML = concaty + caracter;
  console.log(caracter);
  time = setTimeout(function() {
    concaty = concaty.concat(caracter);
    count = 0;
  }, 1000);
}

function def() {
  var input_value = document.getElementById("data3").value;
  var i = input_value.split(" ");
  count++;

  if (count === 1) {
    caracter = i[0].substr(0, 1);
    clearTimeout(time);
  } else if (count === 2) {
    caracter = i[0].substr(1, 1);
    clearTimeout(time);
  } else if (count === 3) {
    caracter = i[0].substr(2, 2);
    clearTimeout(time);
  } else if (count === 4) {
    caracter = i[1];
    count = 0;
    clearTimeout(time);
  }
  document.getElementById("display").innerHTML = concaty + caracter;
  console.log(caracter);
  time = setTimeout(function() {
    concaty = concaty.concat(caracter);
    count = 0;
  }, 1000);
}

function ghi() {
  var input_value = document.getElementById("data4").value;
  var i = input_value.split(" ");
  count++;

  if (count === 1) {
    caracter = i[0];
    clearTimeout(time);
  } else if (count === 2) {
    caracter = i[1].substr(0, 1);
    clearTimeout(time);
  } else if (count === 3) {
    caracter = i[1].substr(1, 1);
    clearTimeout(time);
  } else if (count === 4) {
    caracter = i[1].substr(2, 2);
    count = 0;
    clearTimeout(time);
  }
  document.getElementById("display").innerHTML = concaty + caracter;
  console.log(caracter);
  time = setTimeout(function() {
    concaty = concaty.concat(caracter);
    count = 0;
  }, 1000);
}

function jkl() {
  var input_value = document.getElementById("data5").value;
  var i = input_value.split(" ");
  count++;

  if (count === 1) {
    caracter = i[0];
    clearTimeout(time);
  } else if (count === 2) {
    caracter = i[1].substr(0, 1);
    clearTimeout(time);
  } else if (count === 3) {
    caracter = i[1].substr(1, 1);
    clearTimeout(time);
  } else if (count === 4) {
    caracter = i[1].substr(2, 2);
    count = 0;
    clearTimeout(time);
  }
  document.getElementById("display").innerHTML = concaty + caracter;
  console.log(caracter);
  time = setTimeout(function() {
    concaty = concaty.concat(caracter);
    count = 0;
  }, 1000);
}

function mno() {
  var input_value = document.getElementById("data6").value;
  var i = input_value.split(" ");
  count++;

  if (count === 1) {
    caracter = i[0].substr(0, 1);
    clearTimeout(time);
  } else if (count === 2) {
    caracter = i[0].substr(1, 1);
    clearTimeout(time);
  } else if (count === 3) {
    caracter = i[0].substr(2, 2);
    clearTimeout(time);
  } else if (count === 4) {
    caracter = i[1];
    count = 0;
    clearTimeout(time);
  }
  document.getElementById("display").innerHTML = concaty + caracter;
  console.log(caracter);
  time = setTimeout(function() {
    concaty = concaty.concat(caracter);
    count = 0;
  }, 1000);
}

function pqrs() {
  var input_value = document.getElementById("data7").value;
  var i = input_value.split(" ");
  count++;

  if (count === 1) {
    caracter = i[0];
    clearTimeout(time);
  } else if (count === 2) {
    caracter = i[1].substr(0, 1);
    clearTimeout(time);
  } else if (count === 3) {
    caracter = i[1].substr(1, 1);
    clearTimeout(time);
  } else if (count === 4) {
    caracter = i[1].substr(2, 1);
    clearTimeout(time);
  } else if (count === 5) {
    caracter = i[1].substr(3, 3);
    count = 0;
    clearTimeout(time);
  }
  document.getElementById("display").innerHTML = concaty + caracter;
  console.log(caracter);
  time = setTimeout(function() {
    concaty = concaty.concat(caracter);
    count = 0;
  }, 1000);
}

function tuv() {
  var input_value = document.getElementById("data8").value;
  var i = input_value.split(" ");
  count++;

  if (count === 1) {
    caracter = i[0];
    clearTimeout(time);
  } else if (count === 2) {
    caracter = i[1].substr(0, 1);
    clearTimeout(time);
  } else if (count === 3) {
    caracter = i[1].substr(1, 1);
    clearTimeout(time);
  } else if (count === 4) {
    caracter = i[1].substr(2, 2);
    count = 0;
    clearTimeout(time);
  }
  document.getElementById("display").innerHTML = concaty + caracter;
  console.log(caracter);
  time = setTimeout(function() {
    concaty = concaty.concat(caracter);
    count = 0;
  }, 1000);
}

function wxyz() {
  var input_value = document.getElementById("data9").value;
  var i = input_value.split(" ");
  count++;

  if (count === 1) {
    caracter = i[0].substr(0, 1);
    clearTimeout(time);
  } else if (count === 2) {
    caracter = i[0].substr(1, 1);
    clearTimeout(time);
  } else if (count === 3) {
    caracter = i[0].substr(2, 1);
    clearTimeout(time);
  } else if (count === 4) {
    caracter = i[0].substr(3, 3);
    clearTimeout(time);
  } else if (count === 5) {
    caracter = i[1];
    count = 0;
    clearTimeout(time);
  }
  document.getElementById("display").innerHTML = concaty + caracter;
  console.log(caracter);
  time = setTimeout(function() {
    concaty = concaty.concat(caracter);
    count = 0;
  }, 1000);
}
