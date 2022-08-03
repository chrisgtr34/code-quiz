var startBtn = document.getElementById('startBtn');
var nextBtn = document.getElementById('nextBtn');
var questionBoxElement = document.getElementById('question-box');
var questionElement = document.getElementById('question');
var answerButton = document.getElementById('answerBtn');
var choice1 = document.getElementById('1');
var choice2 = document.getElementById('2');
var choice3 = document.getElementById('3');
var choice4= document.getElementById('4');
var result = document.getElementById('score')
var score = 0;
var timeRemaining = 60;
var timer;


var questions = [
    {
        question: 'What tag is used to define an image or add an image to an HTML page?',
        choice1: "<div>",
        choice2: "<table>",
        choice3: "<img>", 
        choice4: "<meta>", 
        correct: "3"
    },
    {
        question: 'What tag can be used to insert a line break or blank line in an HTML document?',
        choice1: "<br></br>", 
        choice2: "<head></head>",
        choice3: "<body></body>",
        choice4: "<title></title>", 
        correct: "1"
    },
    {
        question: 'What tag is required in all HTML documents, and is used to define the title?',
        choice1: "<head></head>",
        choice2: "<body></body>",
        choice3: "<title><title>", 
        choice4: "<br></br>", 
        correct: "3"
        
    },
    {
        question: 'What declaration MUST be included as the first item in an HTML document before the tag and is used to provide instructions to the web browser?',
        choice1: "<embed>",
        choice2: "<caption>",
        choice3: "<code>",
        choice4: "<!DOCTYPE>", 
        correct: "4"
        
    },
]

let shuffleQuestions;
let questionIndex = 0;

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
    displayQuestions(shuffleQuestions)
}


function displayQuestions() {
    var q = questions[questionIndex];
    questionElement.innerHTML = q.question;
    choice1.innerText = q.choice1;
    choice2.innerText = q.choice2;
    choice3.innerText = q.choice3;
    choice4.innerText = q.choice4;
}

function checkAnswer(answer) {
    if(questions[questionIndex].correct == answer) {
        answerChoice.textContent = "Correct!"
    }
    else {
       answerChoice.textContent = "Wrong!"
       timeRemaining-=10;
    }

    if (questions.length === questionIndex+1) {
        showResults(); // If it has gone through all questions, show final score
        return;
    }
        questionIndex++;
        displayQuestions();
    };

    function showResults() {
        if (timeRemaining === 0 || questions.length -1) { 
         result.textContent = "Your final score is " + timeRemaining + ".";
        }
     };
     
