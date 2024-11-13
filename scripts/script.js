document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    const currentURL = window.location.href;

    links.forEach(link => {
        if (link.href === currentURL) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

const buttonToggle = document.querySelector("nav button");
const icon = buttonToggle.querySelector("i");

buttonToggle.addEventListener('click', () => {
    let toggleMenu = document.querySelector('nav ul').classList.toggle('show-menu-mobile');

    if (toggleMenu) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});
