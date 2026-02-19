const toggleBtn = document.getElementById("darkModeToggle");

if (toggleBtn) {
    toggleBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
}
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
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
})
// Typing effect
const text = "ICT Student | Future Cybersecurity Professional";
let index = 0;

const typingElement = document.getElementById("typing-text");

if (typingElement) {
    function typeEffect() {
        if (index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 50);
        }
    }
    typeEffect();
}

if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
        particles: {
            number: { value: 60 },
            size: { value: 3 },
            color: { value: "#ffffff" },
            line_linked: { enable: true, color: "#ffffff" },
            move: { speed: 2 }
        }
    });
}

// Hamburger menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });
}

const strengthFill = document.getElementById("strengthFill");

const passwordInput = document.getElementById("passwordInput");
const strengthResult = document.getElementById("strengthResult");

if (passwordInput) { 
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
}

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
function copyHash() {
    const hashText = document.getElementById("hashResult").textContent;

    if (!hashText) return;

    navigator.clipboard.writeText(hashText)
        .then(() => {
            alert("Hash copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });
}
function sanitizeInput(input) {
    return input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


async function checkFileIntegrity() {
    const fileInput = document.getElementById("fileInput");
    const result = document.getElementById("fileHashResult");

    if (!fileInput.files.length) {
        result.textContent = "Please select a file.";
        return;
    }

    const file = fileInput.files[0];
    const arrayBuffer = await file.arrayBuffer();

    const hashBuffer = await crypto.subtle.digest("SHA-256", arrayBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");

    result.textContent = "File SHA-256: " + hashHex;
}
function handleTerminal(event) {
    if (event.key !== "Enter") return;

    const inputField = document.getElementById("terminalInput");
    const terminal = document.getElementById("terminal");
    const command = inputField.value.trim().toLowerCase();

    let output = "";

    switch(command) {
        case "help":
            output = "Available commands: help, whoami, ls, clear";
            break;
        case "whoami":
            output = "silas - aspiring cybersecurity analyst";
            break;
        case "ls":
            output = "projects  security-tools  learning-log";
            break;
        case "clear":
            terminal.innerHTML = "";
            inputField.value = "";
            return;
        default:
            output = "Command not found.";
    }

    terminal.innerHTML += `<p>> ${command}</p>`;
    terminal.innerHTML += `<p>${output}</p>`;
    terminal.scrollTop = terminal.scrollHeight;
    inputField.value = "";
}
const copyBtn = document.getElementById("copyHashBtn");
const copyMessage = document.getElementById("copyMessage");
const hashResult = document.getElementById("hashResult");

if (copyBtn && hashResult) {
    copyBtn.addEventListener("click", function () {

        if (hashResult.textContent.trim() === "") {
            copyMessage.textContent = "No hash to copy!";
            copyMessage.style.color = "red";
            copyMessage.classList.remove("hidden");
            return;
        }

        navigator.clipboard.writeText(hashResult.textContent)
            .then(() => {
                copyMessage.textContent = "Hash copied successfully!";
                copyMessage.style.color = "green";
                copyMessage.classList.remove("hidden");

                setTimeout(() => {
                    copyMessage.classList.add("hidden");
                }, 2000);
            })
            .catch(() => {
                copyMessage.textContent = "Failed to copy!";
                copyMessage.style.color = "red";
                copyMessage.classList.remove("hidden");
            });
    });
}
const emailInput = document.getElementById("emailInput");
const emailMessage = document.getElementById("emailMessage");

if (emailInput && emailMessage) {

    emailInput.addEventListener("input", function () {

        const emailValue = emailInput.value.trim();

        // Simple but effective email regex
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (emailValue === "") {
            emailMessage.textContent = "";
            emailInput.style.borderColor = "";
            return;
        }

     emailInput.classList.remove("valid", "invalid");

if (emailPattern.test(emailValue)) {
    emailInput.classList.add("valid");
} else {
    emailInput.classList.add("invalid");
}
    });
}
window.addEventListener("resize", function() {
    console.log("Screen width:", window.innerWidth);
});
