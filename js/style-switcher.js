// ======================== toggle style switcher ====================
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
    console.log("Hello");
});
// hide style-switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});
// ======================== theme color ====================
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });
}
// ======================== theme light and dark mode ====================
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});
window.addEventListener("load", () => {
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
    } else {
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const text1 = document.getElementById('text1').value;
    const text2 = document.getElementById('text2').value;

    if (name && email && text1 && text2) {
        alert(`Họ Tên: ${name}\nEmail: ${email}\nCâu hỏi: ${text1}\nTin nhắn: ${text2}`);
    } else {
        alert('Vui lòng điền đầy đủ thông tin!');
    }
}

