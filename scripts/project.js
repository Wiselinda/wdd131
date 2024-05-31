document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Function to load reviews from localStorage
    function loadReviews() {
        const reviewsContainer = document.getElementById("review-list");
        const reviews = JSON.parse(localStorage.getItem("reviews")) || [];

        reviewsContainer.innerHTML = "";
        reviews.forEach(review => {
            const reviewCard = document.createElement("div");
            reviewCard.className = "review-card";
            reviewCard.innerHTML = `
                <h3>${review.name}</h3>
                <div class="rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
                <p>${review.comment}</p>
            `;
            reviewsContainer.appendChild(reviewCard);
        });
    }

    // Function to add a new review
    function addReview(name, rating, comment) {
        const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
        reviews.push({ name, rating: parseInt(rating), comment });
        localStorage.setItem("reviews", JSON.stringify(reviews));
        loadReviews();
    }

    // Handle review form submission
    const reviewForm = document.getElementById("review-form");
    if (reviewForm) {
        reviewForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const name = reviewForm.name.value;
            const rating = reviewForm.rating.value;
            const comment = reviewForm.comment.value;

            // Add the new review
            addReview(name, rating, comment);

            // Reset the form
            reviewForm.reset();
            alert("Thank you for your review!");
        });
    }

    // Load reviews on page load
    loadReviews();
});
