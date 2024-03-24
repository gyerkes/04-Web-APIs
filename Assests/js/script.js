// seltect the timer element
var timeEl = document.querySelector("#countdown");
var startButton = document.querySelector("#start-button");
var welcomePage = document.querySelector('#welcomePage');
var questionPage = document.querySelector('#questionPage');
var pageArray = [questionPage, welcomePage]

let questions = [
    question1 = {
        questionstr: "What color is the sky?",
        answers: ["blue", "red", "green", "yellow"],
        correctAnswer: "blue"
    },
    question2 = {
        questionstr: "What color is the sky2?",
        answers: ["blue", "red", "green", "yellow"],
        correctAnswer: "blue"
    },
    question3 = {
        questionstr: "What color is the sky3?",
        answers: ["blue", "red", "green", "yellow"],
        correctAnswer: "blue"
    },
]
// event listener for start button
startButton.addEventListener("click", startQuiz)

function startQuiz() {
    startTimer();
    hideElements();
    questionPage.classList.remove('hide');


}

function hideElements() {
    for (let index = 0; index < pageArray.length; index++) {
        const element = pageArray[index];
        console.log(element);
        if (!element.classList.contains("hide")) {
            element.classList.add('hide');
        }
        
    }
}


// StartTimer Funcition
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




