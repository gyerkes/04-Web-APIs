// seltect the timer element
var timeEl = document.querySelector(".countdown");
var startButton = document.querySelector(".start-button");

function startQuiz() {
    timerCount = 75;
    startTimer();
}

function startTimer() {
    // var timerCount = 75;
    timer = setInterval(function() {
    timerCount--;
    timeEl.textContent = timerCount;



    if (timerCount === 0) {
        clearInterval(timer);
    }

    }, 7500)
}

startButton.onclick = startTimer;
