import "./scss/style.scss";

window.addEventListener('DOMContentLoaded', () => {
  burgerOpen();
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

// Mobile menu: the burger toggles a full-screen menu (screens up to 890px)
function burgerOpen() {
  const burgerBtn = document.querySelector('.burger-menu');
  const menu = document.querySelector('.header__menu-body');
  if (!burgerBtn || !menu) return;

  function setOpen(open) {
    document.body.classList.toggle('menu-open', open);
    burgerBtn.classList.toggle('_active', open);
    burgerBtn.setAttribute('aria-expanded', String(open));
    burgerBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  burgerBtn.addEventListener('click', () => {
    setOpen(!document.body.classList.contains('menu-open'));
  });

  // Close after choosing a section
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) {
      setOpen(false);
      burgerBtn.focus();
    }
  });

  // Reset if the screen gets wide again while the menu is open
  window.matchMedia('(min-width: 891px)').addEventListener('change', (e) => {
    if (e.matches) setOpen(false);
  });
}

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