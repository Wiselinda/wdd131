document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Function to load reviews from localStorage
    function loadReviews() {
        const reviewsContainer = document.querySelector(".reviews");
        const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

        reviewsContainer.innerHTML = "";
        reviews.forEach(review => {
            const reviewCard = document.createElement("div");
            reviewCard.className = "review-card";
            reviewCard.innerHTML = `<h3>${review.name}</h3><p>${review.message}</p>`;
            reviewsContainer.appendChild(reviewCard);
        });
    }

    // Function to add a new review
    function addReview(name, message) {
        const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        reviews.push({ name, message });
        localStorage.setItem("reviews", JSON.stringify(reviews));
        loadReviews();
    }

    // Handle form submission
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const name = contactForm.name.value;
            const email = contactForm.email.value;
            const message = contactForm.message.value;

            // Add the new review
            addReview(name, message);

            // Reset the form
            contactForm.reset();
            alert("Thank you for your message!");
        });
    }

    // Load reviews on page load
    loadReviews();
});

