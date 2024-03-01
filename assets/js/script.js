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

// quiz.html code
// code for start button to display questions
// simple step code

// code for turning Start quiz? button yellow or grey
function turnYellow2() {
    let begin = document.getElementById("next");
    begin.style.backgroundColor = "yellow";
}

function turnGrey2() {
    let begin = document.getElementById("next");
    begin.style.backgroundColor = "rgb(130, 139, 157)"
}

// code for turning rules? button yellow or grey 

function turnYellow3() {
    let begin = document.getElementById("submit");
    begin.style.backgroundColor = "yellow";
}

function turnGrey3() {
    let begin = document.getElementById("submit");
    begin.style.backgroundColor = "rgb(130, 139, 157)"
}


var questions = [
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

function displayQuestion() {

    var questions = [
        "What Year was old trafford built?",
        "Alex Ferguson famously kicked a boot at which player, injuring his eye?",
        "Who scored the winning goal for Manchester United in their 2-1 Champions League final victory in 1999?"
    ]
    
    var answer = [
        "A:1990", "B:1910", "C:2005", "D:1905",
        "A:Ryan Giggs", "B:David Beckham", "C:Eric Cantona", "D:Wayne Rooney",
        "A:Gary Nevile", "B:David Beckham", "C:Ryan giggs", "D:Ole Gunnar Solskjaer",
    ]

    document.getElementById("quizQuestions").innerHTML = questions[0];
    document.getElementById("quizAnswer1").innerHTML = answer[0];
    document.getElementById("quizAnswer2").innerHTML = answer[1];
    document.getElementById("quizAnswer3").innerHTML = answer[2];
    document.getElementById("quizAnswer4").innerHTML = answer[3];


}
        
displayQuestion()

function nextQuestion() {
    
}


// results.html code

// code for turning Start quiz? button yellow or grey
function turnYellow4() {
    let begin = document.getElementById("finish");
    begin.style.backgroundColor = "yellow";
}

function turnGrey4() {
    let begin = document.getElementById("finish");
    begin.style.backgroundColor = "rgb(130, 139, 157)"
}

// code for turning rules? button yellow or grey 

function turnYellow5() {
    let begin = document.getElementById("again");
    begin.style.backgroundColor = "yellow";
}

function turnGrey5() {
    let begin = document.getElementById("again");
    begin.style.backgroundColor = "rgb(130, 139, 157)"
}
