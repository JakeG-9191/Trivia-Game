// Global Vars
var intervalId;
var time = 150;
setTimeout(lost, 150000);


var questions = {
    Q1: {
        inqury: "how many fives is right?",
        answer: ["1", "2", "3", "5"],
    },
    Q2: {
        inqury: "how would you know?",
        answer: ["yes", "no", "i dont", "5"],
    },
    Q3: {
        inqury: "how would you know?",
        answer: ["yes", "no", "i dont", "5"],
    },
    Q4: {
        inqury: "how would you know?",
        answer: ["yes", "no", "i dont", "5"],
    },
    Q5: {
        inqury: "how would you know?",
        answer: ["yes", "no", "i dont", "5"],
    },
    Q6: {
        inqury: "how would you know?",
        answer: ["yes", "no", "i dont", "5"],
    },
    Q7: {
        inqury: "how would you know?",
        answer: ["yes", "no", "i dont", "5"],
    },
    Q8: {
        inqury: "how would you know?",
        answer: ["yes", "no", "i dont", "5"],
    },
    Q9: {
        inqury: "how would you know?",
        answer: ["yes", "no", "i dont", "5"],
    },
    Q10: {
        inqury: "how would you know?",
        answer: ["yes", "no", "i dont", "5"],
    },
};

console.log(questions.Q1.inqury);
console.log(questions.Q1.answer[3]);
console.log(questions.Q2.inqury);
console.log(questions.Q2.answer[2]);

// create a page onload for questions as soon as page loads
window.onload = function () {
    $(".question").append(questions.Q1.inqury)
}
// create reset function if player wants to play again
function playAgain() {
    time = 150;
    $(".display").text("02:30");
    setTimeout(lost, 150000)
}

function lost() {
    alert("you've run out of time")
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
    console.log(currentTime)
}

count();
begin();

