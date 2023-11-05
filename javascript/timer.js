document.addEventListener("DOMContentLoaded", function() {
    // time that is needed to countdown back
    const targetDate = new Date("2025-11-01T00:00:00").getTime();

    const countdownContainer = document.getElementById("countdown-timer");

    function updateCountdown() {
        const currentDate = new Date().getTime();

        const timeRemaining = targetDate - currentDate;

        // sets none if the targetDate in past
        if (timeRemaining <= 0) {
            countdownContainer.style.display = "none";
            clearInterval(timerInterval);
        } else {
            // remaining time
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            // displaying in every html id 
            document.getElementById("days").innerText = days < 10 ? `0${days}` : days;
            document.getElementById("hours").innerText = hours < 10 ? `0${hours}` : hours;
            document.getElementById("minutes").innerText = minutes < 10 ? `0${minutes}` : minutes;
            document.getElementById("seconds").innerText = seconds < 10 ? `0${seconds}` : seconds;
        }
    }

    updateCountdown();

    // update every 1 second
    const timerInterval = setInterval(updateCountdown, 1000);
});
