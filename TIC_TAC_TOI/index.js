const table = document.getElementById("table");
for (let i = 1; i < 4; i++) {
  const tr = document.createElement("tr");
  tr.setAttribute("id", i);
  table.appendChild(tr);
  for (let j = 1; j < 4; j++) {
    td = document.createElement("td");
    td.setAttribute("id", `${i}${j}`);
    // tdt.set ("id", i);
    tr.appendChild(td);
  }
}
let player1 = true;
let player2 = false;

let p1 = {
  11: false,
  12: false,
  13: false,
  21: false,
  22: false,
  23: false,
  31: false,
  32: false,
  33: false,
};

let p2 = {
  11: false,
  12: false,
  13: false,
  21: false,
  22: false,
  23: false,
  31: false,
  32: false,
  33: false,
};

function myFunction(event) {
  const clicked = event.target.id;
  const toChange = document.getElementById(`${clicked}`);
  if (player1) {
    if (clickCheck(p1, clicked, p2)) return;
    toChange.style.backgroundColor = "red";
    if (winCheck(p1)) hurray("Player 1");
    player1 = false;
    player2 = true;
  } else {
    if (clickCheck(p2, clicked, p1)) return;
    toChange.style.backgroundColor = "green";
    if (winCheck(p2)) hurray("Player 2");
    player1 = true;
    player2 = false;
  }
}

function clickCheck(px, clicked, py) {
  if (py[clicked]) return true;
  px[clicked] = true;
  return false;
}

function winCheck(p) {
  if (
    (p[11] && p[12] && p[13]) ||
    (p[21] && p[22] && p[23]) ||
    (p[31] && p[32] && p[33])
  )
    return true;
  if (
    (p[11] && p[21] && p[31]) ||
    (p[12] && p[22] && p[32]) ||
    (p[13] && p[23] && p[33])
  )
    return true;
  if (p[11] && p[22] && p[33]) return true;
  if (p[31] && p[22] && p[13]) return true;
  return false;
}

function hurray(p) {
  setTimeout(function () {
    alert(p);
  }, 100);
}
