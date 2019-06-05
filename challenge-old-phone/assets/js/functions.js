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
  getValue = event.target.value;
  if (getValue === "0") {
    clearTimeout(time);
    time = setTimeout(function() {
      concatt = concatt.concat(getValue);
    }, 100);
    document.getElementById("display").innerHTML = concatt + getValue;
  }
}
