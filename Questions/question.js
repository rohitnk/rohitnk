import q from "./que.js";
// console.log(q);
let questionNo = 0;
function createquestion(question_statement, option, answer) {
  questionNo++;
  answer += 1;
  const app = document.getElementById("app");
  const div = document.createElement("div");
  app.appendChild(div);
  const questionStatement = document.createElement("h3");
  questionStatement.setAttribute("class", "question");
  div.appendChild(questionStatement);
  questionStatement.textContent = "Q." + questionNo + " " + question_statement;
  var count = 0;
  for (const op of option) {
    count++;
    const opdiv = document.createElement("div");
    console.log(count, answer);
    div.appendChild(opdiv);
    opdiv.setAttribute("class", "option");
    opdiv.textContent = count + ". " + op;
    if (count === answer)
      opdiv.addEventListener("click", function () {
        opdiv.style.backgroundColor = "green";
        opdiv.style.color = "white";
        // alert("This is correct option");
      });
    else
      opdiv.addEventListener("click", function () {
        opdiv.style.backgroundColor = "red";
        opdiv.style.color = "white";
        // alert("This is Wrong option");
      });
  }
}
debugger;
for (const options of q) {
  createquestion(options.question, options.answers, options.correctIndex);
}
