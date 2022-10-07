// variables to keep track of quiz state
var currentQuestion = 0;
var timeRemaining = 60;
var quizTimer;

// variables to reference DOM elements
var questionsEl = document.getElementById('questions');
var startBtnEl = document.getElementById('startBtn');
var startMenuEl = document.getElementById("start-screen");
var timerEl = document.getElementById('timer')
var qTitleEL = document.getElementById('question-title')
var choicesEl = document.getElementById('choices')

/// FUNCTION TO START THE QUIZ
function startQuiz() {
  // hide start screen 
  startMenuEl.classList.add('hide')
  // un-hide questions section
  questionsEl.classList.remove('hide')
  // start timer
  quizTimer = setInterval(clockTick, 1000)
  // show starting time
  timerEl.textContent = timeRemaining;
  getQuestion();
}

/// FUNCTION TO GET/SHOW EACH QUESTION ///
function getQuestion() {
  // get current question object from array
  var thisQuestion = questions[currentQuestion]
  // update title with current question
  qTitleEL.textContent = thisQuestion.title
  // clear out any old question choices
  choicesEl.innerHTML = "";
  // loop over choices
  for (i=0; i<thisQuestion.choices.length; i++) {
    // FOR {
      // create new button for each choice
      var newBtn = document.createElement("button");
      newBtn.setAttribute("style", "display: flex; flex-direction: column")
      newBtn.textContent = thisQuestion.choices[i];
      newBtn.addEventListener('click', questionClick)
      // display on the page
      choicesEl.append(newBtn)
      // } 
  }
}

/// FUNCTION FOR CLICKING A QUESTION ///
function questionClick(event) {
  console.log('click has happened')
  currentQuestion++;
  getQuestion()
  // if the clicked element is not a choice button, do nothing.
  if (something) {

  }

  if (something) {
  // check if user guessed wrong
    // penalize time

    // display new time on page

    // give them feedback, letting them know it's wrong
  } else {
    // give them feedback, letting them know it's right
  }

  // flash right/wrong feedback on page for a short period of time

  // move to next question

  // check if we've run out of questions
    // if so, end the quiz
    // else, get the next question
}

/// FUNCTION TO END THE QUIZ ///
function quizEnd() {
  // stop timer

  // show end screen

  // show final score

  // hide questions section
}

/// FUNCTION FOR UPDATING THE TIME ///
function clockTick() {
  // update time
  timeRemaining--;
  timerEl.textContent = timeRemaining;
  // check if user ran out of time
  if(timeRemaining <=0 ) {
    alert('yo game is over')
    clearInterval(quizTimer)
  }
}

function saveHighscore() {
  // get value of input box - for initials

  // make sure value wasn't empty
    // get saved scores from localstorage, or if not any, set to empty array

    // format new score object for current user

    // save to localstorage

    // redirect to next page
}

/// CLICK EVENTS ///
  // user clicks button to submit initials

  // user clicks button to start quiz
startBtnEl.addEventListener("click", startQuiz)
  // user clicks on element containing choices