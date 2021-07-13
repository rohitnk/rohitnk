const parent1 = document.querySelector(".p1");
const parent2 = document.querySelector(".p2");

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);

const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
};

function keyDown(e) {
  e.preventDefault();
  keys[e.key] = true;
  console.log(keys);
}
function keyUp(e) {
  e.preventDefault();
  keys[e.key] = false;
  console.log(keys);
}


