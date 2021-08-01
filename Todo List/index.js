const task = document.getElementById("task");
const listContainer = document.getElementById("listContainer");
var list = [];
let mainList = [];

function createTemplet(msg) {
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
  p.textContent = msg;
  listContainer.appendChild(div);
  count++;
}

count = 0;
class listItm {
  constructor(msg) {
    this.message = task.value;
    if (task.value == "") return;
    createTemplet(msg);
    task.value = "";
  }

  static remove(a) {
    list.pop(a);
    mainList.pop(a);
    setToLocal();
    const toRemove = document.getElementById(a);
    toRemove.remove();
    console.log("removed");
  }
}

function addToList() {
  if (list.includes(task.value)) return;
  list.push(task.value);
  a = new listItm(task.value);
  mainList.push(a);
  setToLocal();
}

if (localStorage.storedList) {
  let stored_List = getFromLocal();
  stored_List.forEach((element) => {
    a = new listItm();
    a.message = element.message;
    mainList.push(a);
    createTemplet(element.message);
    list.push(element.message);
  });
}

document.addEventListener("keyup", function (key) {
  if (key.key == "Enter") addToList();
});

function setToLocal() {
  window.localStorage.setItem("storedList", JSON.stringify(mainList));
}

function getFromLocal() {
  return JSON.parse(window.localStorage.getItem("storedList"));
}
