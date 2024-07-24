'use strict';

//Прокрутка к началу страницы
const upButton = document.querySelector('.up-button');
upButton.addEventListener('click', function () {
  window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
});

//Появление кнопки ВВЕРХ при прокрутке

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      upButton.classList.add('up-button--visible');
    } else {
      upButton.classList.remove('up-button--visible');
    }
  });
});
observer.observe(document.body);

//Плавное появление секций

const appearingSections = document.querySelectorAll('.appearing-section');
const appearanceObserver = new IntersectionObserver(
  function (entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('appearing-section--hide');
      observer.unobserve(entry.target);
    });
  },
  {
    root: null,
    threshold: 0.2,
  }
);
appearingSections.forEach(function (section) {
  section.classList.add('appearing-section--hide');
  appearanceObserver.observe(section);
});
