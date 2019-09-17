// Global Vars
var intervalId;
var time = 150;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var clock = false;
startGame();

var questionPool = [
    { // 1
        question: "What is Earths average distance to the Sun?",
        options: ["92,956,050 miles", "83,041,430 miles", "405,321,783 miles", "100 light years"],
        rightAnswer: "92,956,050 miles",
    },
    { // 2
        question: "How long ago was the Earth formed?",
        options: ["About 3.7 million years ago", "About 823 billion years ago", "Roughly six days ago", "About 4.6 billion years ago"],
        rightAnswer: "About 4.6 billion years ago",
    },
    { // 3
        question: "How many types of crust does the planet have?",
        options: ["More than the average pizza", "Two", "Seven", "None"],
        rightAnswer: "Two",
    },
    { // 4
        question: "About how much of the Earth's atmosphere consists of nitrogen?",
        options: ["72%", "78%", "12%", "94%"],
        rightAnswer: "78%",
    },
    { // 5
        question: "In relation to Earth's overall diameter, how large is the moon?",
        options: ["About 1/72nd", "Almost 2 times", "About 1/5th", "About 1/4th"],
        rightAnswer: "About 1/4th",
    },
    { // 6
        question: "How many planets are between Earth and the Sun?",
        options: ["Two", "Three", "One", "Eight"],
        rightAnswer: "Two",
    },
    { // 7
        question: "Where was the largest earthquake recorded at on the planet?",
        options: ["Colorado, US", "London, UK", "Dhaka, Bangladesh", "Alaska, US"],
        rightAnswer: "Alaska, US",
    },
    { // 8
        question: "What causes most earthquakes?",
        options: ["The Moon's gravity", "Plate Tectonics", "Hurricanes", "Planes"],
        rightAnswer: "Plate Tectonics",
    },
    { // 9
        question: "How much of Earth's surface is covered in water?",
        options: ["About 70%", "About 55%", "About 24%", "About 82%"],
        rightAnswer: "About 70%",
    },
    { // 10
        question: "What feature is responsible for the magnetic field that surrounds the planet?",
        options: ["The world's oceans", "Volcano eruptions", "The molten core", "Gravity from the Sun"],
        rightAnswer: "The molten core",
    },
]

function startGame() {
    if (!clock) {
        $("#begin").on("click", function () {
            clock = true;
            begin();
            gameOn();
            count();
            setTimeout(lost, 150000);
            correct = 0;
            incorrect = 0;
        })
    };
};

function gameOn() {
    for (var i = 0; i < questionPool.length; i++) {
        questionAsked = (questionPool[i].question);
        optionsProvided = (questionPool[i].options);
        $(".question").append("<h3>" + questionAsked + "</h3>" + "<p>" + optionsArray(optionsProvided) + "</p>");
    };
}

$(document).on("click", ".choice", function () {
    selectedOption = $(this).attr("data-value");
    
    $(".choice").on("change", function () {
        $(".choice").not(this).prop("checked", false);
    });

    $("p").hover(function () {
        $(this).css("background-color", "red");
    }, function () {
        $(this).css("background-color", "#325d88");
    });
    $("p").click(function () {
        $(this).toggleClass("clicked");
    });

    if (correct + incorrect == 10) {
        gameStatus();
    }
    if (clock = true && questionPool[0].rightAnswer === selectedOption) {
        correct++;
    } else if (questionPool[1].rightAnswer === selectedOption) {
        correct++;
    } else if (questionPool[2].rightAnswer === selectedOption) {
        correct++;
    } else if (questionPool[3].rightAnswer === selectedOption) {
        correct++;
    } else if (questionPool[4].rightAnswer === selectedOption) {
        correct++;
    } else if (questionPool[5].rightAnswer === selectedOption) {
        correct++;
    } else if (questionPool[6].rightAnswer === selectedOption) {
        correct++;
    } else if (questionPool[7].rightAnswer === selectedOption) {
        correct++;
    } else if (questionPool[8].rightAnswer === selectedOption) {
        correct++;
    } else if (questionPool[9].rightAnswer === selectedOption) {
        correct++;
    } else {
        incorrect++;
    }
});

function optionsArray(optionsProvided) {
    var choices = "";
    for (var i = 0; i < optionsProvided.length; i++) {
        choices += `<p class="choice" type="checkbox" data-value="${optionsProvided[i]}">${optionsProvided[i]}</p>`
    }
    return choices;
}

function gameStatus() {
    $(".question").html("<h3>" + "Correct Answers: " + correct + "</h3>" + "<h3>" + "\nIncorrect Answers: " + incorrect + "</h3>");
    alert("You've answered all the questions before time was up!")
    $(".display").text("");
}

function lost() {
    $(".question").html("<h3>" + "Correct Answers: " + correct + "</h3>" + "<h3>" + "\nIncorrect Answers: " + incorrect + "</h3>");
    alert("You've run out of time");
    $(".display").text("");
}
// create start function that begins countdown timer

function begin() {
    clock = true;
    intervalId = setInterval(count, 1000);
    $(".question").html("");
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
};
