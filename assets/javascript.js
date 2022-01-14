var button = document.querySelector("#buttonGame");

var quiz1 = document.querySelector("#quiz1")

var timeEl = document.querySelector("#timer")

var scoreEl = document.querySelector("#score")

var questions = [
{
    question: "What Tag is used for a hyperlink?",
    answers: ["<a>", "<li>", "<p>", "<hyperlink>"],
    correctAnswerIndex: 0,
},
{
    question: "What is the best car company?",
    answers: ["Tesla","Tesla","Tesla", "Tesla"],
    correctAnswerIndex: 2,
},
];

var secondsLeft = 10;

function setTime(event) {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if(secondsLeft === 0) {
        clearInterval(timerInterval)
        quiz1.style.display = "none";
        score();
    }

  }, 1000);
}

function score() {
    // var scoreboardEl = document.createElement("li");
    // scoreboardEl.setAttribute("style", "font-size:40px");

    // scoreEl.style.display = "block";
    // scoreboardEl.style.display = "block";

    // scoreEl.textContent = "Please put in initials";

    // quiz1.append(scoreboardEl);
    // quiz1.append(scoreEl);

    scoreEl.style.display = "block";
}


button.addEventListener("click", function(event) {
    var firstQuestion = questions[0];
    quiz1.textContent = firstQuestion.question;
    quiz1.setAttribute("data-index", firstQuestion.correctAnswerIndex);

    for (var i = 0; i < firstQuestion.answers.length; i++) {
        var answer = firstQuestion.answers[i];
        var answerEl = document.createElement("li");
        var buttonEl = document.createElement("button");

        buttonEl.textContent = answer;
        buttonEl.setAttribute("data-index", i);

        answerEl.append(buttonEl);
        quiz1.append(answerEl);

        buttonEl.setAttribute("style", "background-color:pink; font-size:40px; margin-top:10px; padding-left:40px; padding-right:40px")
        answerEl.setAttribute("style", "list-style:none");
        quiz1.setAttribute("style", "margin:20px")
    }
    setTime()
}
)

quiz1.addEventListener("click", function (event) {
    var elementClicked = event.target;

        if (elementClicked.matches("button")) {

        var rightAnswerIndex = quiz1.getAttribute("data-index");
        var selectedAnswerIndex = elementClicked.getAttribute("data-index");

        if (rightAnswerIndex === selectedAnswerIndex) {
            //alert("You selected the right answer!");
            questions.question++;
            questions.answer++;
    } else {
        // alert("You have selected the wrong one!")
        questions.question++;
        questions.answer++;
    }
}
});

