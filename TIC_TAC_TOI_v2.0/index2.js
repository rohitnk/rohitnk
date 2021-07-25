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

let click = {
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
    if (clickCheck("p1", clicked, "p2")) return;
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
  if (py[clicked] !== false) return true;
  px[clicked] = px;
  return false;
}
