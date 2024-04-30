// JavaScript for responsive hamburger menu
const nav = document.querySelector('nav');
const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerHTML = '&#9776;'; // Unicode for hamburger icon
document.body.insertBefore(hamburger, document.body.firstChild);

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// JavaScript for last modified date
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastmodified').textContent = lastModified;
