const table = document.getElementById("table");
let m = document.getElementById("matches");
let matches = m.value;
console.log(matches);
for (let i = 1; i < 4; i++) {
  const tr = document.createElement("tr");
  tr.setAttribute("id", i);
  table.appendChild(tr);
  for (let j = 1; j < 4; j++) {
    td = document.createElement("td");
    td.setAttribute("id", `${i}${j}`);
    tr.appendChild(td);
  }
}

function MatchReset() {
  player1 = true;
  player2 = false;

  p1 = {
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

  p2 = {
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
  count = 0;
  gameStart = false;

  for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 4; j++) {
      td = document.getElementById(`${i}${j}`);
      td.style.background = "white";
    }
  }
  m.value = "";
}
function masterReset() {
  MatchReset();
  m.disabled = false;
}
masterReset();
let player1Win = 0;
let player2Win = 0;

function myFunction(event) {
  let matches = m.value;
  console.log(matches);
  // debugger;
  // console.log(`before click the count is ${count}`);
  if (!gameStart) return;

  const clicked = event.target.id;
  // console.log(clicked);
  if (clicked == "table") return;
  const toChange = document.getElementById(`${clicked}`);
  matches--;
  m.value = matches;
  if (player1) {
    if (clickCheck(p1, clicked, p2)) return;
    count++;
    toChange.style.background =
      "linear-gradient(90deg, rgba(255,142,142,1) 30%, rgba(183,4,4,1) 100%)";
    if (winCheck(p1)) {
      player1Win++;
      hurray("Player 1");
      gameStart = false;
      return;
    }
    player1 = false;
    player2 = true;
  } else {
    if (clickCheck(p2, clicked, p1)) return;
    count++;
    toChange.style.background =
      "linear-gradient(90deg, rgba(213,247,164,1) 8%, rgba(0,255,38,1) 58%)";
    if (winCheck(p2)) {
      player2Win++;
      hurray("Player 2");
      gameStart = false;
      return;
    }
    player1 = true;
    player2 = false;
  }
  // console.log(`after click the count is ${count}`);
  if (count === 9) {
    setTimeout(function () {
      alert("match draw");
      reset();
    }, 300);
    gameStart = false;
    return;
  }
}

function clickCheck(px, clicked, py) {
  if (py[clicked] || px[clicked]) return true;
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
    alert(`${p} won `);
    reset();
  }, 300);
}

function play() {
  gameStart = true;
  m.disabled = true;
}
