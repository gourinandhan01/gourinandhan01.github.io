// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Typing Effect
const dynamicText = document.getElementById('dynamic-text');
const textArray = ['Gouri Nandhan PV', 'a Data Analyst', 'a Problem Solver'];
let textIndex = 0, charIndex = 0;
setInterval(() => {
    if (charIndex < textArray[textIndex].length) {
        dynamicText.textContent += textArray[textIndex][charIndex++];
    } else {
        charIndex = 0;
        textIndex = (textIndex + 1) % textArray.length;
        dynamicText.textContent = '';
    }
}, 200);
