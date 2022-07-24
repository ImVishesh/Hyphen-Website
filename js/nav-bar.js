const sections = document.querySelectorAll('.nav-bar-link-ids');
const links = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 1) {
      current = section.getAttribute('id');
      console.log(current);
    }
  });
  links.forEach((li) => {
    li.classList.remove('active-link');
    if (li.classList.contains(current)) {
      li.classList.add('active-link');
    }
  });
});
