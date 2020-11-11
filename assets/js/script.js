// get html elements
var startButtonEl = document.getElementById("start-button");
var quizContainerEl = document.getElementById("quiz-container");
var timerDivEl = document.getElementById("timer-div");

// start button click handler and listener
var startQuiz = function () {
    quizContainerEl.innerHTML = questionArray[0].question;
    timerDivEl.innerHTML = "You have 60 seconds left";
}

startButtonEl.addEventListener("click", startQuiz);

// question array
var questionArray = [
    {
        question: "What does CSS stand for?",
        correct: "Cascading Style Sheets", 
        incorrect1: "Calista Stays Stylin",
        incorrect2: "California Style Strategy",
        incorrect3: "Coding Style Script"
    }, {
        question: "What is Calista's favorite color?",
        correct: "Pink",
        incorrect1: "Blue",
        incorrect2: "Red",
        incorrect3: "Yellow"
    }
]