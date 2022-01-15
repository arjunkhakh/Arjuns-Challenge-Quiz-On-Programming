var button = document.querySelector("#buttonGame");

var quiz1 = document.querySelector("#quiz1")

var timeEl = document.querySelector("#timer")

var scoreEl = document.querySelector("#score")

var startup = document.querySelector("#startUp")

var initials = document.querySelector("#initals")

var inSubmit = document.querySelector("#initialSubmit")

var scoreboard = document.querySelector("#highscore")

var newQuestion = 0;

var questions = [
{
    question: "What Tag is used for a hyperlink?",
    answers: ["<a>", "<li>", "<p>", "<hyperlink>"],
    correctAnswerIndex: 0,
},
{
    question: "What do we put inside the () brackets when we call a function?",
    answers: ["String","Variable","Parameter", "Leave as Blank"],
    correctAnswerIndex: 2,
},
];

var secondsLeft = 30;


function setTime(event) {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " Seconds Remaining";

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
    startup.style.display = "none";
}
)

quiz1.addEventListener("click", function (event) {
    var elementClicked = event.target;

        if (elementClicked.matches("button")) {

        var rightAnswerIndex = quiz1.getAttribute("data-index");
        var selectedAnswerIndex = elementClicked.getAttribute("data-index");

        if (rightAnswerIndex === selectedAnswerIndex) {
            alert("You selected the right answer!");
           
            while (newQuestion < questions.length) {
                console.log("Well Done")
                quiz1.textContent = questions[newQuestion++];
            }

            
    } else {
        alert("You have selected the wrong one!")

        while (newQuestion < questions.length) {
                console.log("Wrong!")
                quiz1.textContent = questions[newQuestion++];
        }
    }
}
});

inSubmit.addEventListener("click", function (){

    let initValue = initials.value;
    if (initValue) {
        var userScore = { username: initValue };
        initials.value = '';
        highScores = JSON.parse(localStorage.getItem("initals")) || [];
        highScores.push(userScore)
        localStorage.setItem("initals", JSON.stringify(highScores));
        // highScoreBoard();
    }

    if(scoreboard){
        var TheScore = JSON.stringify(localStorage.getItem(userScore.username))

        scoreboard.textContent = TheScore;
        scoreboard.setAttribute("data-index", TheScore);

        scoreboard.append(TheScore);
    }

    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];
        
    //     var nameEl = scoreboard.createElement("li");

    //     nameEl.textContent = initValue;
    // }
    
    }
)

// function highScoreBoard() {

//     if(scoreboard){
//         var userScore = { username: initValue };
//         var TheScore = JSON.stringify(localStorage.getItem(userScore.username))

//         scoreboard.createElement("li")
//         scoreboard.textContent = TheScore;
//         scoreboard.setAttribute("data-index", TheScore);

//         scoreboard.append(TheScore);
//     }
// }