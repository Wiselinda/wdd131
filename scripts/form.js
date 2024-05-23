const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastmodified').textContent = lastModified;

document.addEventListener("DOMContentLoaded", function() {
    // Populate product options dynamically
    const products = [
        { id: "fc-1888", name: "flux capacitor" },
        { id: "fc-2050", name: "power laces" },
        { id: "fs-1987", name: "time circuits" },
        { id: "ac-2000", name: "low voltage reactor" },
        { id: "jj-1969", name: "warp equalizer" }
    ];

    const productNameSelect = document.getElementById("productName");

    if (productNameSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            productNameSelect.appendChild(option);
        });
    }

    // Review counter
    const reviewCounter = document.getElementById("reviewCounter");
    if (reviewCounter) {
        let counter = localStorage.getItem("reviewCounter") || 0;
        counter++;
        localStorage.setItem("reviewCounter", counter);
        reviewCounter.textContent = counter;
    }
});
