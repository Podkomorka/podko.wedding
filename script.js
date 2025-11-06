// Navbar scroll changes
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
    } else {
            navbar.classList.remove('scrolled');
    }
});

// Mobile navbar closes on link click
const navToggle = document.getElementById('nav-toggle');
const menuLinks = document.querySelectorAll('.menu-items a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navToggle.checked) {
            navToggle.checked = false;
        }
    });
});

const bg = document.querySelector('#our_story .bg');

window.addEventListener('scroll', () => {
  const section = document.querySelector('#our_story');
  const rect = section.getBoundingClientRect();
  const scrollSpeed = 0.3; // 0.2-0.4 for subtle effect
  const offset = rect.top * scrollSpeed;

  bg.style.transform = `translateY(${offset}px)`;
});