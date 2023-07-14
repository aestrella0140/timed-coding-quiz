
var timerEl = document.querySelector(".timer");
var startBtn = document.querySelector('.next');
var initials = document.getElementById("initials");
var saveBtn = document.getElementById("save");
var savedInitials = document.getElementById("save-initials");
var savedScore = document.getElementById("saved-score");
var leaderboardList = document.getElementById("Leaderboard-list");
var LeaderboardCount = document.getElementById("leaderboard-count");
var listForm = document.getElementById("list-form");
var CurrentTime = 60;
var timerId;
var lists = [];


document.getElementsByClassName('container')[0].style.display = "block";
timerEl.textContent = "TimeLeft " + CurrentTime;
function next(id) {
    document.getElementsByClassName('container')[id - 1].style.display = "none";
    document.getElementsByClassName('container')[id].style.display = "block";

}

function result() {
    var score = CurrentTime;
    if (document.getElementById('correct1').checked) {
        score++;
    } else {
        CurrentTime - 5;
    }
    if (document.getElementById('correct2').checked) {
        score++;
    } else {
        CurrentTime - 5;
    }
    if (document.getElementById('correct3').checked) {
        score++;
    } else {
        CurrentTime - 5;
    }
    if (document.getElementById('correct4').checked) {
        score++;
    } else {
        CurrentTime - 5;
    }
    if (document.getElementById('correct5').checked) {
        score++;
    } else {
        CurrentTime - 5;
    }
    if (document.getElementById('correct6').checked) {
        score++;
    } else {
        CurrentTime - 5;
    }
}


function countdown() {
    timeInterval = setInterval(function () {
        CurrentTime--;
        if (CurrentTime < 0) {
            CurrentTime = 0;
        } 
    timerEl.textContent = "TimeLeft " + CurrentTime;

        if (customElements <= 0) {
            clearInterval(timeInterval);

        }
    }, 1000);
}



startBtn.addEventListener("click", countdown);

function renderLeaderboardList() {
    leaderboardList.innerHTML = "";
    LeaderboardCount.textContent = lists.length;

    for (var i = 0; i < list.length; i++) {
        var list = lists[i];

        var li = document.createElement("li");
        li.textContent = list;
        li.setAttribute("data-index", i);

        leaderboardList.appendChild(li);
    }
}

function storeList() {
    localStorage.setItem("lists", JSON.stringify(lists));
}

listForm.addEventListener("lists", function (event) {
    event.preventDefault();
    var listText = listInput.value.trim();
    if (listText === "") {
        return;
    }

    lists.push(listText);
    listInput.value = ""

    storeList();
    renderLeaderboardList();
});

leaderboardList.addEventListener("click", function (event) {
    var element = event.target;

    if (element.matches("button") === true) {
        var index = element.parentElement.getAttribute("data-index");

        storeList();
        renderLeaderboardList();
    }
})



function saveLastScore() {
    var studentScore = {
        initials: initials.value,
        CurrentTime: CurrentTime.valueOf,
    }
    localStorage.setItem("studentScore", JSON.stringify(studentScore));
}

function renderLastScore() {
    var lastScore = JSON.parse(localStorage.getItem("studentScore"));
    if (lastScore !== null) {
        document.getElementById("saved-initails").innerHTML = lastScore.initials;
        document.getElementById("saved-score").innerHTML = lastScore.CurrentTime;
    } else {
        return;
    }
}

saveBtn.addEventListener("click", function (event) {
    event.preventDefault();
    saveLastScore();
    renderLastScore();
});

function init() {
    renderLastScore();
}
init();

