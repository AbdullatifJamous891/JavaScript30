let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(function () {
        const timeLeft = Math.round((then - Date.now()) / 1000);
        if (timeLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(timeLeft);
    }, 1000)
}

function displayTimeLeft(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const seconds_left = seconds % 60;
    const display = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds_left < 10 ? '0' : ''}${seconds_left}`;
    timerDisplay.textContent = display;
    document.title = display;
}

function displayEndTime(timestamp) {
    const time = new Date(timestamp);
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    endTime.textContent = `Be back at ${hour > 12 ? hour - 12 : hour}:${minute < 10 ? '0' : ''}${minute}:${second < 10 ? '0' : ''}${second}`;
    console.log({hour, minute, second})
}

function startTimer() {
    timer(parseInt(this.dataset.time));
}

buttons.forEach(function (button) {
    button.addEventListener('click', startTimer);
});

document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const minutes = this.minutes.value;
    timer(minutes*60);
    this.reset();

});