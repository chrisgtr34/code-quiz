var startBtn = document.getElementById('startBtn');
var nextBtn = document.getElementById('nextBtn');
var questionBoxElement = document.getElementById('question-box');
var questionElement = document.getElementById('question');
var answerButton = document.getElementById('answerBtn');
var score = 0;
var timeRemaining = 60;
var timer;


var questions = [
    {
        question: 'What tag is used to define an image or add an image to an HTML page?',
        answers: [
            { text: '<div>', correct: false},
            { text: '<table>', correct: false},
            { text: '<img>', correct: true},
            { text: '<meta>', correct: false}
        ]
    },
    {
        question: 'What tag can be used to insert a line break or blank line in an HTML document?',
        answers: [
            {text: '<br></br>', correct: true},
            { text: '<head></head>', correct: false},
            { text: '<body></body>', correct: false},
            { text: '<title></title>', correct: false}
        ]
    },
    {
        question: 'What tag is required in all HTML documents, and is used to define the title?',
        answers: [
            {text: '<head></head>', correct: false},
            {text: '<body></body>', correct: false},
            {text: '<title><title>', correct: true},
            {text: '<br></br>', correct: false}
        ]
    },
    {
        question: 'What declaration MUST be included as the first item in an HTML document before the tag and is used to provide instructions to the web browser?',
        answers: [
            {text: '<embed>', correct: false},
            {text: '<caption>', correct: false},
            {text: '<code>', correct: false},
            {text: '<!DOCTYPE>', correct: true}
        ]
    },
]

let shuffleQuestions;
let questionIndex;

startBtn.addEventListener('click',() =>{
    startTimer();
    startQuiz();
});

nextBtn.addEventListener('click', () => {
    questionIndex++;
    nextQuestion;
});

function startTimer() {
    timeRemaining = 60,
    document.getElementById('time').innerHTML = timeRemaining;
    timer = setInterval(function () {
        timeRemaining--;
        document.getElementById('time').innerHTML = timeRemaining;
        if(timeRemaining <= 0) {
            clearInterval(timer);
            alert("Your time is up!");
        }
    }, 1000);
}


function startQuiz() {
    startBtn.classList.add('hide')
    questionBoxElement.classList.remove('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    console.log(shuffleQuestions)
    questionIndex = 0
    nextQuestion();
}


function displayQuestions(question) {
    console.log(question)
    questionElement.innerText = question.question
    question.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')

        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', answerChoice)
        answerButton.appendChild(button)
    })
}


function nextQuestion(){
    // resetState()
    displayQuestions(shuffleQuestions)
}

function answerChoice (e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButton.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
  // If the selected answer does not have the value
  // true in it's data-correct property, remove 5 seconds.
    if(!correct){
     count -= 10
        document.getElementById('time').innerHTML=count;
    }
    if (shuffleQuestions.length > questionIndex + 1) {
        nextBtn.classList.remove('hide')
    } else {
        startBtn.innerText = 'Restart'
        startBtn.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }

  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }