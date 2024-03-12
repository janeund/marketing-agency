import "./scss/style.scss";

window.addEventListener('DOMContentLoaded', () => {
  //burgerOpen();
  showProcessItems();
  //slider();
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

function burgerOpen() {
  const burgerBtn = document.querySelector('.burger-menu');
  const sidebar = document.querySelector('.sidebar');
  const sidebarLink = document.querySelectorAll('.sidebar__menu-list li');

  burgerBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show-sidebar');
  burgerBtn.classList.toggle('_active');

  const linksArray = [...sidebarLink];
  console.log(linksArray);
  linksArray.map((item) => {
     item.addEventListener("click", () => { 
        console.log(item.classList.contains('sidebar__menu-item'));
        if (item.classList.contains('sidebar__menu-item')) {
           sidebar.classList.remove('show-sidebar');
        }
     });
  });
  });
};

// function slider() {
//   const slidesContainer = document.querySelectorAll("slides-container");
//   const nextBtn = document.querySelector(".next-btn");
//   const prevBtn = document.querySelector(".prev-btn");

//   function startSlider(type) {
//   // get all three slides active,last next
//   const activeSlide = document.querySelector('.slide-active')
//   const last = document.querySelector('.last')
//   let next = activeSlide.nextElementSibling
//   if (!next) {
//     next = container.firstElementChild
//   }
//   activeSlide.classList.remove('active')
//   last.classList.remove('last')
//   next.classList.remove('next')

//   if (type === 'prev') {
//     activeSlide.classList.add('next')
//     last.classList.add('active')
//     next = last.previousElementSibling
//     if (!next) {
//       next = container.lastElementChild
//     }
//     next.classList.remove('next')
//     next.classList.add('last')
//     return
//   }
//   activeSlide.classList.add('last')
//   last.classList.add('next')
//   next.classList.add('active')
// }
// nextBtn.addEventListener('click', () => {
//   startSlider()
// })
// prevBtn.addEventListener('click', () => {
//   startSlider('prev')
// })

// }