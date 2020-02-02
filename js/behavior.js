const navToggle = document.querySelector('.nav__toggle');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});
