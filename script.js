
// Product enquiry buttons

const productButtons = document.querySelectorAll(".product-btn");

productButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        alert("Thank you for your interest! Contact us for product details.");
    });
});

// Contact form

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Thank you! Your message has been received.");

        contactForm.reset();
    });
}

console.log("Noodle House website loaded successfully!");
