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
  const nextBtn = document.querySelector(".next-btn");
  const prevBtn = document.querySelector(".prev-btn");
  slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
  });
  let counter = 0;
  nextBtn.addEventListener("click", function () {
    counter++;
    carousel();
  });
  
  prevBtn.addEventListener("click", function () {
    counter--;
    carousel();
  });
  
  function carousel() {
    if (counter < slides.length - 1) {
      nextBtn.style.display = "block";
    } else {
      nextBtn.style.display = "none";
    }
    if (counter > 0) {
      prevBtn.style.display = "block";
    } else {
      prevBtn.style.display = "none";
    }
    slides.forEach(function (slide) {
      slide.style.transform = `translateX(-${counter * 606}%)`;
    });
  }
  prevBtn.style.display = "none";
}
