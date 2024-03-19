var hit = 0;
var score = 0;


makeBubble();
changeHit();
startTimer();


function makeBubble() {
    var clutter = "";
    for (let i = 1; i <= 50; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#bot-panel").innerHTML = clutter;
}


function changeHit() {
    hit = Math.floor(Math.random() * 10);
    document.querySelector("#hitId").textContent = hit;
}

var timer = 60;
function startTimer() {
    var timerInt = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        } else {
            clearInterval(timerInt);
            document.querySelector("#bot-panel").innerHTML = 
            `<h3>GAME OVER<h3>
            <div>Your Score: ${score}</div>`;
        }
    }, 1000);
}

function incScore() {
    score += 10;
    document.querySelector("#scoreValue").textContent = score;
}

document.querySelector("#bot-panel").addEventListener("click", function (e) {
    var bubVal = Number(e.target.textContent);
    if (bubVal === hit) {
        incScore();
        changeHit();
        makeBubble();
    }
});

