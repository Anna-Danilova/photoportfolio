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
