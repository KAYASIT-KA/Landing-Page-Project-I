const navbar = document.querySelector('.navbar');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navbarLinks = document.querySelector('.navbar-links');

hamburgerMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
    navbarLinks.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

// Hide navbar when scrolling down, show when scrolling up
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop && currentScroll > 50) {
        navbar.style.top = '-70px';
    } else {
        navbar.style.top = '0';
    }
    lastScrollTop = currentScroll;
});
