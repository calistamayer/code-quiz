// get html elements
var startButtonEl = document.getElementById("start-button");
var quizContainerEl = document.getElementById("quiz-container");
var timerDivEl = document.getElementById("timer-div");

// start button click handler and listener
var startButtonHandler = function () {
    quizContainerEl.innerHTML = "What does CSS stand for?";
    timerDivEl.innerHTML = "You have 60 seconds left";
}

startButtonEl.addEventListener("click", startButtonHandler);