'use strict';

//Прокрутка к началу страницы
const upButton = document.querySelector('.up-button');
upButton.addEventListener('click', function () {
  window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
});
