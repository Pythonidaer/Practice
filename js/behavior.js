const navToggle = document.querySelector('.side-nav__toggle');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('side-nav-open');
});
