const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const logo = document.querySelector('.logo');

btn.addEventListener('click', () => {
    nav.classList.toggle('menu-open')
    logo.classList.toggle('logo-open')
});