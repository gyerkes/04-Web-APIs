// seltect the timer element
var timeEl = document.querySelector("#countdown");
var startButton = document.querySelector("#start-button");

function startTimer() {
    let timer = 75;
    setInterval(function () {
        timer--;
        if (timer >= 0) {
            span = document.getElementById('countdown');
            span.innerHTML = timer;
        }

        if (timer === 0) {
            alert("out of time");
            clearInterval(timer);
        }
    }, 1000)
}

function start() {
    document.getElementById('start-button').style = "color:purple";
    startTimer();
}