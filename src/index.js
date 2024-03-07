import "./scss/style.scss";

const questions = document.querySelectorAll(".process-item__title");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  console.log(btn);

  btn.addEventListener("click", function () {
    //console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});