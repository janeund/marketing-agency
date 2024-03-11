import "./scss/style.scss";

window.addEventListener('DOMContentLoaded', () => {
  showProcessItems();
  slider();
})

function showProcessItems() {
  const questions = document.querySelectorAll(".process-item");
  questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
}); 
}

function slider() {
  const slides = document.querySelectorAll(".slide");
  
  const sliders = [...document.querySelectorAll(".slider")];
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");

  
    let sliderDimensions = slider.getBoundingClientRect();
    let sliderWidth = sliderDimensions.width;

    nextBtn.addEventListener('click', () => {
      slider.scrollLeft += sliderWidth;
    })

    prevBtn.addEventListener('click', () => {
      slider.scrollLeft -= sliderWidth;
    })
}