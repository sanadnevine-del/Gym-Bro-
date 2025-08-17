// ===== HAMBURGER MENU =====
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
});

// Close menu when clicking a link
document.querySelectorAll(".nav-link").forEach(link =>
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("active");
    })
);

// ===== CONTACT FORM =====
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent actual page reload

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("⚠️ Please fill out all fields before submitting.");
        return;
    }

    // Simple email check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("⚠️ Please enter a valid email address.");
        return;
    }

    // Success message
    alert(`✅ Thank you, ${name}! Your message has been sent.`);
    form.reset(); // clear form after submit
});
