// get html elements
var startButtonEl = document.getElementById("start-button");
var quizContainerEl = document.getElementById("quiz-container");
var timerDivEl = document.getElementById("timer-div");
var secondsLeft = 60;

// start button click handler and listener
var startButtonHandler = function () {
    askQuestion();
    startTimer();
}

startButtonEl.addEventListener("click", startButtonHandler);

// loop through question array to display current question
var askQuestion = function () {
    for (var i = 0; i < questionArray.length; i++) {
        quizContainerEl.innerHTML = questionArray[i].question;
    }
}

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

// start timer
var startTimer = function () {
    setInterval(updateTimer, 1000);
    while (secondsLeft > 0) {
        console.log(secondsLeft);
        timerDivEl.innerHTML = "You have " + secondsLeft + " seconds left";
    }
}
// update timer 
var updateTimer = function () {
    secondsLeft = secondsLeft - 1;
}

