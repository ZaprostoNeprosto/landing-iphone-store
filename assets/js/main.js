const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const logo = document.querySelector('.logo-link');
const menuList = document.getElementById('menu-list');

// Smooth Scroll
const scrollLinks = document.querySelectorAll("[data-scroll]");

scrollLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        const blockId = link.getAttribute("data-scroll");
        const targetElement = document.querySelector(blockId);
        const blockOffset = targetElement.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
            top: blockOffset,
            behavior: "smooth"
        });
    });
});

btn.addEventListener('click', () => {
    nav.classList.toggle('menu-list_open')
    logo.classList.toggle('logo-link_open')
});

function closeMenu() {
    nav.classList.remove('menu-list_open')
    logo.classList.remove('logo-link_open')
}

const menuItems = menuList.getElementsByTagName('a');
for (const item of menuItems) {
    item.addEventListener('click', closeMenu);
}
