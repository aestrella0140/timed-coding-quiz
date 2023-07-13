
var timerEl = document.querySelector(".timer");
var startBtn = document.getElementsByClassName('next');

var CurrentTime = 60;
var timerId;

document.getElementsByClassName('container')[0].style.display = "block";

function next(id) {
    document.getElementsByClassName('container')[id - 1].style.display = "none";
    document.getElementsByClassName('container')[id].style.display = "block";

}

function result() {
    var score = CurrentTime;
    if (document.getElementById('correct1').checked) {
        score++;
    }else {
        CurrentTime -5;
    }
    if (document.getElementById('correct2').checked) {
        score++;
    }else {
        CurrentTime -5;
    }
    if (document.getElementById('correct3').checked) {
        score++;
    }else {
        CurrentTime -5;
    }
    if (document.getElementById('correct4').checked) {
        score++;
    }else {
        CurrentTime -5;
    }
    if (document.getElementById('correct5').checked) {
        score++;
    }else {
        CurrentTime -5;
    }
    if (document.getElementById('correct6').checked) {
        score++;
    }else {
        CurrentTime -5;
    }
    alert("your score is: " + CurrentTime)
}


function countdown () {
    CurrentTime--;
    console.log(CurrentTime);
    timerEl.textContent = CurrentTime;
}

function startTimer () {
    startBtn.disabled = true;
    timerId = setInterval(countdown, 1000);
}

startBtn.onclick = countdown;