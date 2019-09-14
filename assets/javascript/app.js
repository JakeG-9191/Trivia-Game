// Global Vars
var intervalId;
var time = 150;
setTimeout(lost, 150000);


// var questions = {
//     Q: ["here is the question", "1", "2", "3", "4"],
//     Q: ["a second question", "5", "6", "7", "8"],
//     Q: ["a third question", "A", "B", "C", "D"]
// };

var trivia1 = {question:"how would you go about this?", answer1:"this first", answer2:"this second", answer3:"this third", answer4:"this fourth and last"}

console.log(trivia1)
console.log(trivia1.question)

for (var i = 1; i < 5; i++) {
    
}


// create a page onload for questions as soon as page loads
window.onload = function () {

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

