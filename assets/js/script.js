// get html elements
var startButtonEl = document.getElementById("start-button");
var quizContainerEl = document.getElementById("quiz-container");

// create handler function for start button click
var startButtonHandler = function () {
    quizContainerEl.innerHTML = "";
}

// event listener for start button click
startButtonEl.addEventListener("click", startButtonHandler);