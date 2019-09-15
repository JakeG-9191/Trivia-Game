// Global Vars
var intervalId;
var time = 150;
setTimeout(lost, 150000);


// var questions = {
//     Q: ["here is the question", "1", "2", "3", "4"],
//     Q: ["a second question", "5", "6", "7", "8"],
//     Q: ["a third question", "A", "B", "C", "D"]
// };

var questionPool = {
    Q1: {
        question: "how is this possible?",
        wrongAnswers: ["it is not", "it is", "why not"],
        rightAnswer: "its in the eyes",
    },
    Q2: {
        question: "this is a test?",
        wrongAnswers: ["1", "2", "3"],
        rightAnswer: "4",
    },
}


// create a page onload for questions as soon as page loads
window.onload = function () {
alert("You are about to embark on a most magical trivia experience!");
}



function gameOn() {
i = 5

    $(".question").append(i["#id[i]"])



    // $(".question").text("Question 1: " + questionPool.Q1.question);
    // $("#option1").text(questionPool.Q1.wrongAnswers[0]);
    // $("#option2").text(questionPool.Q1.wrongAnswers[1]);
    // $("#option3").text(questionPool.Q1.wrongAnswers[2]);
    // $("#option4").text(questionPool.Q1.rightAnswer);

    // $(".question2").text("Question 2: " + questionPool.Q2.question);
    // $("#option1").text(questionPool.Q2.wrongAnswers[0]);
    // $("#option2").text(questionPool.Q2.wrongAnswers[1]);
    // $("#option3").text(questionPool.Q2.wrongAnswers[2]);
    // $("#option4").text(questionPool.Q2.rightAnswer);
}


// create reset function if player wants to play again
function playAgain() {
    time = 150;
    $(".display").text("02:30");
    setTimeout(lost, 150000)
}

function lost() {
    alert("you've run out of time");
    time = 150;
}
// create start function that begins countdown timer

function begin() {
    intervalId = setInterval(count, 1000);

}

// create time conversion function to break into minutes and seconds

function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00"
    }

    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}

// count function for actual time remaining will be tied to converstion factor as well

function count() {
    time--;
    var currentTime = timeConverter(time);
    $(".display").text(currentTime);
}

count();
begin();
gameOn();

