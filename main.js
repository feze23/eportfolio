
// main.js

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menu-toggle');
  const closeBtn = document.querySelector('.close-btn');
  const overlay = document.querySelector('.overlay');

  hamburger.addEventListener('click', () => {
    menu.classList.add('open');
    overlay.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    menu.classList.remove('open');
    overlay.classList.remove('show');
  });

  overlay.addEventListener('click', () => {
    menu.classList.remove('open');
    overlay.classList.remove('show');
  });

  const projetMenu = document.queryselector('.projetMenu'); 
  
});
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".main-nav a");
  const currentURL = window.location.pathname;

  links.forEach(link => {
    if (link.getAttribute("href") === currentURL || currentURL.endsWith(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });
});

// animation menu


