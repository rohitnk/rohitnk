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

let player1Win = 0;
let player2Win = 0;

function matchReset() {
  resetBackground();
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

  p1sore.textContent = player1Win;
  p2sore.textContent = player2Win;

  changeHoverBackground();
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

function masterReset() {
  matchReset();
  m.value = "0";
  player1Win = 0;
  player2Win = 0;
  p1sore.textContent = player1Win;
  p2sore.textContent = player2Win;
  m.disabled = false;
  gameStart = false;
  msg.textContent = "Enter No. of Matches:";
  resetBackground();
}

masterReset();

function myFunction(event) {
  console.log(matches);
  if (!gameStart) return;
  const clicked = event.target.id;
  if (clicked == "table") return;
  const toChange = document.getElementById(`${clicked}`);
  if (player1) {
    if (clickCheck(p1, clicked, p2)) return;
    count++;
    toChange.style.background =
      "linear-gradient(90deg, rgba(255,142,142,1) 30%, rgba(183,4,4,1) 100%)";
    if (winCheck(p1)) {
      player1Win++;
      hurray("Player 1");
      checkMatches();
      return;
    }
    player1 = false;
    player2 = true;
    changeHoverBackground();
  } else {
    if (clickCheck(p2, clicked, p1)) return;
    count++;
    toChange.style.background =
      "linear-gradient(90deg, rgba(213,247,164,1) 8%, rgba(0,255,38,1) 58%)";
    if (winCheck(p2)) {
      player2Win++;
      hurray("Player 2");
      checkMatches();
      return;
    }
    player1 = true;
    player2 = false;
    changeHoverBackground();
  }
  if (count === 9) {
    matches--;
    setTimeout(function () {
      m.value = matches;
      // alert("match draw");
      showMessage("RESULT", "match draw...");

      matchReset();
    }, 300);
    checkMatches();
    return;
  }
}

function checkMatches() {
  if (matches === 0) {
    setTimeout(function () {
      if (player1Win > player2Win)
        // alert("The winner of the contest is Player 1");
        showMessage("CONGRATULATIONS", `The winner of the contest is Player 1`);
      else if (player2Win > player1Win)
        // alert("The winner of the contest is Player 2");
        showMessage("CONGRATULATIONS", `The winner of the contest is Player 2`);
      // alert("the contest is draw");
      else showMessage("TRY AGAIN", "the contest is draw");
      masterReset();
    }, 310);
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
  matches--;
  setTimeout(function () {
    m.value = matches;
    // alert(`${p} won `);
    showMessage("HURRAY", `${p} won...🎉🎉🎉🎉🎉`);

    matchReset();
  }, 300);
}

function play() {
  if (gameStart) return;
  matches = m.value;
  if (matches <= 0) {
    // alert("please Enter the No. of matches to play........");
    showMessage("WARNING", "please Enter the No. of matches to play........");

    return;
  }
  msg.textContent = "Matches Remaining :";
  gameStart = true;
  m.disabled = true;
  const tds = document.querySelectorAll("td");
  tds.forEach((td) => {
    td.style.setProperty(
      "--td-background-color",
      "linear-gradient(90deg, rgb(255 207 207) 30%, rgb(245 183 183) 100%)"
    );
  });
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

function showMessage(comment, message) {
  Swal.fire(comment, message);
}

// Swal({
//   title: `I will not change html's and body's height`,
//   heightAuto: true,
// });
