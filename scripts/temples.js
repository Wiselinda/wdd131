document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav');
    const hamburger = document.getElementById('menu');
    hamburger.innerHTML = '&#9776;'; // Unicode for hamburger icon

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('show');
        if (nav.classList.contains('show')) {
            hamburger.innerHTML = '&#10006;'; // Unicode for close icon (X)
        } else {
            hamburger.innerHTML = '&#9776;'; // Unicode for hamburger icon
        }
    });

    // JavaScript for last modified date
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById('lastmodified').textContent = lastModified;
});

