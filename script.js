let timer;
let time = 0; // Initial time in seconds
let isRunning = false;

const timerDisplay = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');
const setTimeBtn = document.getElementById('set-time-btn');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');

function updateDisplay() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;
    timer = setInterval(() => {
        if (time > 0) {
            time--;
            updateDisplay();
        } else {
            stopTimer();
        }
    }, 1000);
}

function stopTimer() {
    isRunning = false;
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    time = 0;
    updateDisplay();
}

function setTime() {
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;
    time = (minutes * 60) + seconds;
    updateDisplay();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
setTimeBtn.addEventListener('click', setTime);

updateDisplay();
