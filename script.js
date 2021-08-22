var startBtn = document.getElementById("startBtn");
var q1El = document.querySelector("#q1");
var q2El = document.querySelector("#q2");
var q3El = document.querySelector("#q3");
var q4El = document.querySelector("#q4");
var q5El = document.querySelector("#q5");
var a1 = document.querySelectorAll(".a1");
var a2 = document.querySelectorAll(".a2");
var a3 = document.querySelectorAll(".a3");
var a4 = document.querySelectorAll(".a4");
var a5 = document.querySelectorAll(".a5");
var scoreList = document.querySelector("#scoreList");
var score = 0;
var interval =
    console.log(localStorage.getItem("score"));
var quizTimeEl = document.querySelector("#quizTime")
var highScore = [];
var countdown = 30;
var holdInterval = 0;
var penalty = 5;
var time;
var timerEL = document.querySelector("#quizTime")

function renderTime() {
  timerEL.textContent = countdown
  countdown--
  console.log(countdown);
  if (holdInterval === 0) {
    console.log("stop timer");
  }
}

highScore.push(localStorage.getItem("score"));
startButton.addEventListener("click", function () {
  startTimeDiv.classList.add("hidden");
  q1.classList.remove("hidden");
  time=setInterval(renderTime, 1000);
})

function showquestions() {
  countdown()
  question1El.classList.remove('hidden');
}

for (var i = 0; i < a1.length; i++) {
  a1[i].addEventListener('click', function (event) {
    console.log(event.target.value);
    q1.classList.add('hidden');
    q2.classList.remove('hidden');
    if (event.target.value === "correct") {
      score++;
    } else {
      countdown=countdown-5;
    }
      document.getElementById("score").innerHTML = score;
    })
}

for (var i = 0; i < a2.length; i++) {
  a2[i].addEventListener('click', function (event) {
    console.log(event.target.value);
      q2.classList.add('hidden');
      q3.classList.remove('hidden');
    if (event.target.value == "correct") {
      score++;
    } else {
      countdown=countdown-5;
    }
    console.log(score);
      document.getElementById("score").innerHTML = score;
    })
}

for (var i = 0; i < a3.length; i++) {
  a3[i].addEventListener('click', function (event) {
    console.log(event.target.value);
    q3.classList.add('hidden');
    q4.classList.remove('hidden');
    if (event.target.value == "correct") {
      score++;
    } else {
      countdown=countdown-5;
    }
      console.log(score);
      document.getElementById("score").innerHTML = score;
    })
}

for (var i = 0; i < a4.length; i++) {
  a4[i].addEventListener('click', function (event) {
    console.log(event.target.value);
    q4.classList.add('hidden');
    q5.classList.remove('hidden');
    if (event.target.value == "correct") {
      score++;
    } else {
      countdown=countdown-5;
    }
      console.log(score);
      document.getElementById("score").innerHTML = score;
    })
}

for (var i = 0; i < a5.length; i++) {
  a5[i].addEventListener('click', function (event) {
    console.log(event.target.value);
    questionFive.classList.add('hidden');
    if (event.target.value == "correct") {
      score++;
    }
    console.log(score);
      document.getElementById("score").innerHTML = score;
    })
}

var saveBtn = document.getElementById("save");
var initials = document.getElementById("initials");
saveBtn.addEventListener("click", function (event) {
    console.log(initials.value);
    highScores.push(`${initials.value} : ${score}`);
    localStorage.setItem("score", highScore);
})

