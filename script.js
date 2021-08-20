var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var buttonEl = document.getElementById('startbtn');
var question1El = document.getElementById('question1');


function countdown() {
    var timeLeft = 20;
  
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
      }
    }, 1000);
  }
  buttonEl.addEventListener("click", showquestions);

  var answer1 = document.querySelectorAll("answer1");
    for(var i = 0; i < answer1.length; i++){
        answer1[i].addEventListener("click", showquestions);
    }

  function showquestions() {
    countdown()
    question1El.classList.remove('hidden');
    
  }