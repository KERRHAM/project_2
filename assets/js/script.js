// code for turning Start quiz? button yellow or grey
function turnYellow() {
    let begin = document.getElementById("start");
    begin.style.backgroundColor = "yellow";
}

function turnGrey() {
    let begin = document.getElementById("start");
    begin.style.backgroundColor = "rgb(130, 139, 157)"
}

// code for turning rules? button yellow or grey 

function turnYellow1() {
    let begin = document.getElementById("rules");
    begin.style.backgroundColor = "yellow";
}

function turnGrey1() {
    let begin = document.getElementById("rules");
    begin.style.backgroundColor = "rgb(130, 139, 157)"
}

// Code for displaying Overlay Text for Rules? button
// W3 schools website

function displayOn() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function displayOff() {
    document.getElementById("overlay").style.display = "none";
  }

// code for start button to display questions
// simple step code

const question = document.getElementById("quizQuestions")
const choices = Array.from(document.getElementsByClassName("quizChoices"));

let currentquestion = {};
let acceptingAnswers = true;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'When was old Trafford built?',
        choice1: '1910',
        choice2: '1950',
        choice3: '2010',
        choice4: '1990',
        answer: 1,
    },

    {
        question: 'Who is Manchester Uniteds all-time top scorer?',
        choice1: 'Cristiano Ronaldo',
        choice2: 'Ryan Giggs',
        choice3: 'Wayne Rooney',
        choice4: 'Dennis Law',
        answer: 3,
    },

    {
        question: 'What Family currently own the biggest share of Manchester United?',
        choice1: 'The Glazers',
        choice2: 'The busbys',
        choice3: 'The Nevilles',
        choice4: 'The Ferdinands',
        answer: 1,
    },
]