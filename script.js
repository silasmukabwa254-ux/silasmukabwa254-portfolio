const toggleBtn = document.getElementById("darkModeToggle");

// Check saved preference when page loads
document.body.classList.add("dark-mode");

// Toggle dark mode
toggleBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});
// Scroll animation
const faders = document.querySelectorAll(".fade-in");

const appearOnScroll = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});
// Hide loader when page loads
window.addEventListener("load", function() {
    document.getElementById("loader").style.display = "none";
});
// Typing effect
const text = "ICT Student | Future Cybersecurity Professional";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

typeEffect();
particlesJS("particles-js", {
    particles: {
        number: { value: 60 },
        size: { value: 3 },
        color: { value: "#ffffff" },
        line_linked: { enable: true, color: "#ffffff" },
        move: { speed: 2 }
    }
});
// Hamburger menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("show");
});
const strengthFill = document.getElementById("strengthFill");

passwordInput.addEventListener("input", function () {
    const password = passwordInput.value;
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (strength === 0) {
        strengthResult.textContent = "";
        strengthFill.style.width = "0%";
    } 
    else if (strength <= 2) {
        strengthResult.textContent = "Weak Password";
        strengthResult.style.color = "red";
        strengthFill.style.width = "33%";
        strengthFill.style.background = "red";
    } 
    else if (strength === 3) {
        strengthResult.textContent = "Moderate Password";
        strengthResult.style.color = "orange";
        strengthFill.style.width = "66%";
        strengthFill.style.background = "orange";
    } 
    else {
        strengthResult.textContent = "Strong Password";
        strengthResult.style.color = "#00ff88";
        strengthFill.style.width = "100%";
        strengthFill.style.background = "#00ff88";
    }
});
const emailInput = document.getElementById("emailInput");
const emailResult = document.getElementById("emailResult");

emailInput.addEventListener("input", function () {
    const email = emailInput.value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email === "") {
        emailResult.textContent = "";
    } else if (emailPattern.test(email)) {
        emailResult.textContent = "Valid Email Format";
        emailResult.style.color = "#00ff88";
    } else {
        emailResult.textContent = "Invalid Email Format";
        emailResult.style.color = "red";
    }
});
async function generateHash() {
    const input = document.getElementById("hashInput").value;

    if (!input) {
        document.getElementById("hashResult").textContent = "";
        return;
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(input);

    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    document.getElementById("hashResult").textContent = "SHA-256: " + hashHex;
    document.getElementById("hashResult").style.color = "#00ff88";
}
