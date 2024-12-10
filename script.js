// script.js

// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

// Clock
const clockElement = document.getElementById('clock');

// Function to display current time
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize clock
updateClock();

// Calendar Toggle
const calendarIcon = document.getElementById('calendar-icon');
const calendarPopup = document.getElementById('calendar-popup');
const closeCalendarButton = document.getElementById('close-calendar');

// Open calendar popup
calendarIcon.addEventListener('click', () => {
    calendarPopup.classList.toggle('show');
});

// Close calendar popup
closeCalendarButton.addEventListener('click', () => {
    calendarPopup.classList.remove('show');
});

// Function to update calendar with current month and date
function updateCalendar() {
    const date = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentMonth = monthNames[date.getMonth()];
    const currentDate = date.getDate();
    const currentYear = date.getFullYear();

    const calendarTitle = document.getElementById('calendar-title');
    calendarTitle.textContent = `${currentMonth} ${currentYear}`;

    const calendarDays = document.getElementById('calendar-days');
    calendarDays.innerHTML = '';

    const firstDay = new Date(currentYear, date.getMonth(), 1).getDay();
    const daysInMonth = new Date(currentYear, date.getMonth() + 1, 0).getDate();

    // Add empty days for the start of the month
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('calendar-day');
        calendarDays.appendChild(emptyCell);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.classList.add('calendar-day');
        dayCell.textContent = day;
        calendarDays.appendChild(dayCell);
    }
}

// Initialize calendar
updateCalendar();
