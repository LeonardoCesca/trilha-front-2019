let count = 0;
let concaty = "";
let caracter, time;

function abc() {
  let input_value = document.getElementById("data2").value;
  let i = input_value.split(" ");
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
  clearTimeout(time);
  document.getElementById("display").innerHTML = concaty + caracter;
  time = setTimeout(function () {
    concaty = concaty.concat(caracter);
    count = 0;
  }, 600);
}

function def() {
  let input_value = document.getElementById("data3").value;
  let i = input_value.split(" ");
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
  clearTimeout(time);
  document.getElementById("display").innerHTML = concaty + caracter;
  time = setTimeout(function () {
    concaty = concaty.concat(caracter);
    count = 0;
  }, 600);
}

function ghi() {
  let input_value = document.getElementById("data4").value;
  let i = input_value.split(" ");
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
  clearTimeout(time);
  document.getElementById("display").innerHTML = concaty + caracter;
  time = setTimeout(function () {
    concaty = concaty.concat(caracter);
    count = 0;
  }, 600);
}

function jkl() {
  let input_value = document.getElementById("data5").value;
  let i = input_value.split(" ");
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
  clearTimeout(time);
  document.getElementById("display").innerHTML = concaty + caracter;
  time = setTimeout(function () {
    concaty = concaty.concat(caracter);
    count = 0;
  }, 600);
}

function mno() {
  let input_value = document.getElementById("data6").value;
  let i = input_value.split(" ");
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
  clearTimeout(time);
  document.getElementById("display").innerHTML = concaty + caracter;
  time = setTimeout(function () {
    concaty = concaty.concat(caracter);
    count = 0;
  }, 600);
}

function pqrs() {
  let input_value = document.getElementById("data7").value;
  let i = input_value.split(" ");
  count++;

  if (count === 1) {
    caracter = i[0];
  } else if (count === 2) {
    caracter = i[1].substr(0, 1);
  } else if (count === 3) {
    caracter = i[1].substr(1, 1);
  } else if (count === 4) {
    caracter = i[1].substr(2, 1);
  } else if (count === 5) {
    caracter = i[1].substr(3, 3);
    count = 0;
  }
  clearTimeout(time);
  document.getElementById("display").innerHTML = concaty + caracter;
  time = setTimeout(function () {
    concaty = concaty.concat(caracter);
    count = 0;
  }, 600);
}

function tuv() {
  let input_value = document.getElementById("data8").value;
  let i = input_value.split(" ");
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
  clearTimeout(time);
  document.getElementById("display").innerHTML = concaty + caracter;
  time = setTimeout(function () {
    concaty = concaty.concat(caracter);
    count = 0;
  }, 600);
}

function wxyz() {
  let input_value = document.getElementById("data9").value;
  let i = input_value.split(" ");
  count++;

  if (count === 1) {
    caracter = i[0].substr(0, 1);
  } else if (count === 2) {
    caracter = i[0].substr(1, 1);
  } else if (count === 3) {
    caracter = i[0].substr(2, 1);
  } else if (count === 4) {
    caracter = i[0].substr(3, 3);
  } else if (count === 5) {
    caracter = i[1];
    count = 0;
  }
  clearTimeout(time);
  document.getElementById("display").innerHTML = concaty + caracter;
  time = setTimeout(function () {
    concaty = concaty.concat(caracter);
    count = 0;
  }, 600);
}

function space() {
  time = setTimeout(function () {
    concaty = concaty.concat(" ");
    count = 0;
  }, 500);
}