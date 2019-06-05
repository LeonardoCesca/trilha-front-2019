let count = 0;
let concatt = "";
let time;
let pressKey;
let character = "";
let getValue;

function receive() {
  if (pressKey != event.target.value) {
    pressKey = event.target.value;
    count = 0;
    concatt = concatt.concat(character);
  }
  getValue = event.target.value;
  getValue = getValue.replace(" ", "");
  if (count >= getValue.length) {
    count = 0;
  }
  clearTimeout(time);
  character = getValue[count];
  time = setTimeout(function() {
    concatt = concatt.concat(character);
    count = 0;
    character = "";
  }, 1000);
  document.getElementById("display").innerHTML = concatt + character;
  count++;
}

function zero() {
  concatt = concatt.concat(character);
  getValue = event.target.value;
  concatt = concatt.concat(getValue);
  character = "";
  document.getElementById("display").innerHTML = concatt;
  count = 0;
}

function space() {
  concatt = concatt.concat(character);
  character = " ";
  document.getElementById("display").innerHTML = concatt;
  count = 0;
}

function clearString() {
  concatt = concatt.substring(0, concatt.length - 1);
  document.getElementById("display").innerHTML = concatt;
}
