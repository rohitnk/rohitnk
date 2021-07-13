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
        opdiv.style.background = "rgb(146, 255, 124)";
        opdiv.style.color = "rgb(21, 124, 0)";
        // alert("This is correct option");
      });
    else
      opdiv.addEventListener("click", function () {
        opdiv.style.background = "rgb(255, 93, 93)";
        opdiv.style.color = "white";
        // alert("This is Wrong option");
      });
  }
  div.appendChild(document.createElement("br"));
}
debugger;
for (const options of q) {
  createquestion(options.question, options.answers, options.correctIndex);
}
