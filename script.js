function updateCountdown() {
    const targetDate = new Date('2025-01-07T00:00:00-06:00');
    const now = new Date();
    const timeDifference = targetDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("time").innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeDifference < 0) {
        clearInterval(countdownInterval);
        document.getElementById("time").innerHTML = "¡La fecha ha llegado!";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
