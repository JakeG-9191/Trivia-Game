// Global Vars
var intervalId;
var time = 150;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var clock = false;

console.log(clock)
var questionPool = [
    {
        question: "how is this possible?",
        options: ["it is not", "it is", "why not", "because"],
        rightAnswer: "it is not",
    },

    {
        question: "this is a test?",
        options: ["one", "two", "three", "four"],
        rightAnswer: "two",
    },
]

$("#begin").on("click", function () {
    begin();
    gameOn();
    count();
    setTimeout(lost, 150000);
    answers();
    console.log(clock)
})

function gameOn() {

    for (var i = 0; i < questionPool.length; i++) {
        questionAsked = (questionPool[i].question);
        optionsProvided = (questionPool[i].options);

        $(".question").append("<h3>" + questionAsked + "</h3>" + "<p>" + optionsArray(optionsProvided) + "</p>");

    }
}

function optionsArray(optionsProvided) {
    var choices = "";
    for (var i = 0; i < optionsProvided.length; i++) {
        choices += `<p class="choice" data-value="${optionsProvided[i]}">${optionsProvided[i]}</p>`
    }
    return choices;
}

function answers() {
    $(document).on("click", ".choice", function () {
        var selectedOption = $(this).attr("data-value");
        console.log(selectedOption)
    });
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
    clock = false;
}
// create start function that begins countdown timer

function begin() {
    clock = true;
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

