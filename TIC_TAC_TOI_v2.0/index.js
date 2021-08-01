const table = document.getElementById("table");
const msg = document.getElementById("msg");
let m = document.getElementById("matches");

let matches;
////to check
const p1sore = document.getElementById("player1score");
const p2sore = document.getElementById("player2score");
// console.log(matches);
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

player1 = true;
player2 = false;

gameStart = false;

class player {
  constructor(name) {
    this.name = name;
  }
  playerWin = 0;
  p = {
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

  reset = () => {
    this.p = {
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
  };

  static count = 0;

  static matchReset() {
    resetBackground();
    player1 = true;
    player2 = false;
    p1.reset();
    p2.reset();
    player.count = 0;
    p1sore.textContent = p1.playerWin;
    p2sore.textContent = p2.playerWin;
    changeHoverBackground();
  }

  static masterReset() {
    player.matchReset();
    m.value = "0";
    p1.playerWin = 0;
    p2.playerWin = 0;
    p1sore.textContent = p1.playerWin;
    p2sore.textContent = p2.playerWin;
    m.disabled = false;
    gameStart = false;
    msg.textContent = "Enter No. of Matches:";
    resetBackground();
    console.log("Master reset complete.");
  }

  static checkMatches() {
    if (matches === 0) {
      setTimeout(function () {
        if (p1.playerWin > p2.playerWin)
          showMessage(
            "CONGRATULATIONS",
            `The winner of the contest is ${p1.name}`
          );
        else if (p2.playerWin > p1.playerWin)
          showMessage(
            "CONGRATULATIONS",
            `The winner of the contest is ${p2.name}`
          );
        else showMessage("TRY AGAIN", "the contest is draw");
        player.masterReset();
      }, 310);
    }
  }

  static winCheck(p) {
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

  static hurray(p) {
    matches--;
    setTimeout(function () {
      m.value = matches;
      showMessage("HURRAY", `${p.name} won...🎉🎉🎉🎉🎉`);
      player.matchReset();
    }, 300);
  }

  static clickCheck(px, clicked, py) {
    if (py.p[clicked] || px.p[clicked]) return true;
    px.p[clicked] = true;
    return false;
  }

  static flip() {
    if (player1 === true) {
      player1 = false;
      player2 = true;
    } else {
      player2 = false;
      player1 = true;
    }
  }

  static makeMove(px, toChange) {
    player.count++;
    toChange.style.background = px.color;
    if (player.winCheck(px.p)) {
      px.playerWin++;
      player.hurray(px);
      player.checkMatches();
      return;
    }
    player.flip();
    changeHoverBackground();
  }
}

function resetBackground() {
  for (let i = 1; i < 4; i++) {
    for (let j = 1; j < 4; j++) {
      td = document.getElementById(`${i}${j}`);
      td.style.background = "";
      td.style.setProperty("--td-background-color", "");
    }
  }
}

let p1 = new player("player1");
p1.color =
  "linear-gradient(90deg, rgba(255,142,142,1) 30%, rgba(183,4,4,1) 100%)";
let p2 = new player("player2");
p2.color =
  "linear-gradient(90deg, rgba(213,247,164,1) 8%, rgba(0,255,38,1) 58%)";

player.masterReset();

function myFunction(event) {
  // debugger;
  console.log(matches);
  if (!gameStart) return;
  const clicked = event.target.id;
  if (clicked == "table") return;
  const toChange = document.getElementById(`${clicked}`);

  if (player1) {
    if (player.clickCheck(p1, clicked, p2)) return;
    player.makeMove(p1, toChange);
  } else {
    if (player.clickCheck(p2, clicked, p1)) return;
    player.makeMove(p2, toChange);
  }
  if (player.count === 9) {
    matches--;
    setTimeout(function () {
      m.value = matches;
      showMessage("RESULT", "match draw...");
      player.matchReset();
    }, 300);
    player.checkMatches();
    return;
  }
}

function changeHoverBackground() {
  const tds = document.querySelectorAll("td");
  if (player1 === true) {
    tds.forEach((td) => {
      td.style.setProperty(
        "--td-background-color",
        "linear-gradient(90deg, rgb(255 207 207) 30%, rgb(245 183 183) 100%)"
      );
    });
  } else {
    tds.forEach((td) => {
      td.style.setProperty(
        "--td-background-color",
        "linear-gradient(90deg, rgb(228 249 198) 8%, rgb(131 255 149) 58%)"
      );
    });
  }
}

function play() {
  if (gameStart) return;
  matches = m.value;
  if (matches <= 0) {
    showMessage("WARNING", "please Enter the No. of matches to play........");
    return;
  }
  msg.textContent = "Matches Remaining :";
  gameStart = true;
  m.disabled = true;
  const tds = document.querySelectorAll("td");
  changeHoverBackground();
}

function mr() {
  player.masterReset();
}

function showMessage(comment, message) {
  // Swal.fire(comment, message);
  alert(`${comment}  ${message}`);
}
