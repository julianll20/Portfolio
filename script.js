document.addEventListener("DOMContentLoaded", function() {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  window.addEventListener("scroll", function() {
    let scrollY = window.scrollY;

    sections.forEach((sec) => {
      let top = sec.offsetTop - 150;
      let bottom = top + sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (scrollY >= top && scrollY < bottom) {
        navLinks.forEach((link) => {
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        });
      }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', scrollY > 100);
  });
});