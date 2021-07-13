let tar = document.getElementById("target");
let score = 0;
manualSetTime = 20;
nextStepTime = 1000; //in millisecond
function randomX() {
  let a = Math.floor(Math.random() * (500 - 80));
  return a + "px";
}
function randomY() {
  let a = Math.floor(Math.random() * (500 - 80));
  return a + "px";
}
function nextStep() {
  if (flag == false) return;
  tar.style.marginTop = randomX();
  tar.style.marginLeft = randomY();
  document.getElementById("score").innerHTML = score;
}
tar.addEventListener("click", function () {
  if (flag == true) score++;
  else return;
  tar.style.backgroundColor = "#" + Math.floor(Math.random() * 999999);
  nextStep();
  clearInterval(interval);
  interval = setInterval(nextStep, nextStepTime);
});
function exiting() {
  if (flag == false) return;
  clearInterval(interval);
  clearInterval(time);
  flag = false;
  alert("Your score is " + score);
  score = 0;
  document.getElementById("score").innerHTML = score + ".";
  st.innerHTML = manualSetTime + "sec";
}
document.getElementById("exit").addEventListener("click", exiting);

st = document.getElementById("timer");
st.textContent = manualSetTime + "sec";

function timeDown() {
  timer = timer - 1;
  if (timer === 0) {
    alert("TIMEOUT......");
    exiting();
  }
  return timer + " sec";
}
function showTime() {
  st.innerHTML = timeDown();
}
let flag = false;
function game() {
  if (flag == true) return;
  tar.classList.add("target_transition");
  timer = manualSetTime;
  flag = true;
  nextStep();
  interval = setInterval(nextStep, nextStepTime);
  time = setInterval(showTime, 1000);
}
document.getElementById("gam").addEventListener("click", game);
