document.getElementsByClassName('container')[0].style.display = "block";

function next(id) {
    document.getElementsByClassName('container')[id-1].style.display = "none";
    document.getElementsByClassName('container')[id].style.display = "block";

}

function result() {
    var score = 0;
    if (document.getElementById('correct1').checked) {
        score++;
    }
    if (document.getElementById('correct2').checked) {
        score++;
    }
    if (document.getElementById('correct3').checked) {
        score++;
    }
    if (document.getElementById('correct4').checked) {
        score++;
    }
    if (document.getElementById('correct5').checked) {
        score++;
    }
    if (document.getElementById('correct6').checked) {
        score++;
    }
    alert("your score is: "+ score)
}

function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function () {
        if(timeLeft > 1){
            
        }
    })
}