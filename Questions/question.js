import q from "./que.js";
// console.log(q);
function createquestion(question_statement, option, answer) {
  const app = document.getElementById("app");
  const div = document.createElement("div");
  app.appendChild(div);
  const questionStatement = document.createElement("h3");
  div.appendChild(questionStatement);
  questionStatement.textContent = question_statement;
  var count = -1;
  for (const op of option) {
    count++;
    const opdiv = document.createElement("div");
    console.log(count, answer);
    div.appendChild(opdiv);
    opdiv.textContent = op;
    if (count === answer)
      opdiv.addEventListener("click", function () {
        alert("This is correct option");
      });
    else
      opdiv.addEventListener("click", function () {
        alert("This is Wrong option");
      });
  }
}

for (const options of q) {
  createquestion(options.question, options.answers, options.correctIndex);
}
