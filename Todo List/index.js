const task = document.getElementById("task");
const listContainer = document.getElementById("listContainer");
var list = [];
let mainList = [];

count = 0;
class listItm {
  constructor() {
    if (task.value == "") return;
    const div = document.createElement("div");
    div.setAttribute("class", "listItem");
    div.setAttribute("id", `${count}`);
    const p = document.createElement("p");
    div.appendChild(p);
    const btn = document.createElement("button");
    btn.textContent = "Remove";
    btn.setAttribute("onclick", `listItm.remove(${count})`);
    const btnDiv = document.createElement("div");
    btnDiv.appendChild(btn);
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    btnDiv.appendChild(editBtn);
    div.appendChild(btnDiv);
    console.log(task.value);
    p.textContent = task.value;
    listContainer.appendChild(div);
    task.value = "";
    count++;
    window.localStorage.setItem("mainList", mainList);
  }

  static remove(a) {
    list.pop(a);
    mainList.pop(a);
    const toRemove = document.getElementById(a);
    toRemove.remove();
    console.log("removed");
  }
}

function addToList() {
  if (list.includes(task.value)) return;
  list.push(task.value);
  a = new listItm();
  mainList.push(a);
  var z = JSON.parse(window.localStorage.getItem("mainList"));
  console.log(z[0]);
}
document.addEventListener("keyup", function (key) {
  // console.log(key);
  if (key.key == "Enter") addToList();
});
