let x = 0;

function add() {
  let i = ++x;

  document.getElementById("count").innerHTML = i;
}

function subtract() {
  let i = --x;
  document.getElementById("count").innerHTML = i;
}

function reset() {
  if (x > 0) {
    for (let i = 0; i < x; --x) {
      document.getElementById("count").innerHTML = i;

    }
  } else {
    for (let i = 0; i > x; ++x) {
      document.getElementById("count").innerHTML = i;
    }

  }
}