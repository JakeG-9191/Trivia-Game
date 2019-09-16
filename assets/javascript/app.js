// Global Vars
var intervalId;
var time = 150;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
setTimeout(lost, 150000);


var questionPool = [
    {
        question: "how is this possible?",
        options: ["it is not", "it is", "why not", "because"],
        rightAnswer: "three",
    },

    {
        question: "this is a test?",
        options: ["one", "two", "three", "four"],
        rightAnswer: 2,
    },
]

console.log(questionPool[1].options)
console.log(questionPool[1].options[2])
console.log(questionPool[1].rightAnswer)
// create a page onload for questions as soon as page loads
// window.onload = function () {

// }

$("#begin").on("click", function () {
    begin();
    gameOn();
    count();
})

function gameOn() {
    for (var i = 0; i < questionPool.length; i++) {
        var questionAsked = $("<p>").text(questionPool[i].question);
        var optionProvided = $("<p>").text(questionPool[i].options);

        console.log(optionProvided[i]);

        var qAndA = $("<div>");
        qAndA.append(questionAsked);
        qAndA.append(optionProvided);
        $(".question").prepend(qAndA)

    }
}

function answers() {

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

// count();
// begin();
// gameOn();

