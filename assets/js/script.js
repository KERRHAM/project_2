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
    let begin = document.getElementById("submit");
    begin.style.backgroundColor = "yellow";
}

function turnGrey2() {
    let begin = document.getElementById("submit");
    begin.style.backgroundColor = "rgb(130, 139, 157)"
}

// code for turning finish and try again button's yellow or grey 

function turnYellow3() {
    let begin = document.getElementById("finish");
    begin.style.backgroundColor = "yellow";
}

function turnGrey3() {
  let begin = document.getElementById("finish");
  begin.style.backgroundColor = "rgb(130, 139, 157)"
}

function turnYellow4() {
  let begin = document.getElementById("again");
  begin.style.backgroundColor = "yellow";
}

function turnGrey4() {
  let begin = document.getElementById("again");
  begin.style.backgroundColor = "rgb(130, 139, 157)"
}


const question = document.getElementById("quizQuestion");
const answer = Array.from(document.getElementsByClassName("quizAnswers"));

let questioncounter = 0;
let availableQuestions = 0;
let results = [];



var questions = [
    
    { Question: "What Year was old trafford built?",
      Answers: {
        A:"A: 1990", 
        B:"B: 1910", 
        C:"C: 2005", 
        D:"D: 1905"
      },
        correctAnswer: "B"
    },


    { Question: "Alex Ferguson famously kicked a boot at which player, injuring his eye?",
      Answers: {
        A:"A: Ryan Giggs", 
        B:"B: David Beckham", 
        C:"C: Eric Cantona", 
        D:"D: Wayne Rooney"
      },
        correctAnswer: "B"
    },

    { Question: "Who scored the winning goal for Manchester United in their 2-1 Champions League final victory in 1999?",
      Answers:{
        A:"A: Gary Nevile", 
        B:"B: Ryan Giggs", 
        C:"C: Eric Cantona", 
        D:"D: Ole Gunnar Solskjaer"},
        correctAnswer: "D"
    },

    { Question: "Which player is affectionately known as 'The King' to Manchester United fans?",
      Answers: {
        A:"A: Eric Cantona ", 
        B:"B: Watne Rooney ", 
        C:"C: Cristiano Ronaldo", 
        D:"D: Alex Ferguson"
      },
        correctAnswer: "A"
    },

    { Question: "Manchester United broke their record transfer fee in 2016 when they paid £89.5 million for which player?",
    Answers: {
      A:"A: Paul Pogba", 
      B:"B: Alexis Sanchez", 
      C:"C: Memphis Depay", 
      D:"D: Henrikh Mkhitaryan"
    },
      correctAnswer: "A"
    },

    { Question: "As of 2020, Manchester United hold the record for most league titles in England. How many times have they been champions?",
    Answers: {
      A:"A: 20", 
      B:"B: 15", 
      C:"C: 22", 
      D:"D: 10"
    },
      correctAnswer: "A"
  },

    { Question: "Which player holds the record for most Man Utd appearances?",
    Answers: {
      A:"A: Roy Keane", 
      B:"B: Ryan Giggs", 
      C:"C: Bobby Charlton", 
      D:"D: Wayne Rooney"
    },
      correctAnswer: "B"
  },

  { Question: "Which player holds the record for most Man Utd goals?",
    Answers:{
      A:"A: Cristiano Ronaldo", 
      B:"B: Wayne Rooney", 
      C:"C: Eric Cantona", 
      D:"D: Ryan Giggs"},
      correctAnswer: "B"
  },

  { Question: "The highest transfer fee ever received by Man Utd was £80 million in 2009 - for which player?",
    Answers: {
      A:"A: Cristiano Ronaldo", 
      B:"B: Carlos Teves", 
      C:"C: David Beckham", 
      D:"D: Romelu Lukaku "
    },
      correctAnswer: "A"
  },

  { Question: "Who were Manchester United's opponents in the first game at Old Trafford?",
  Answers: {
    A:"A: Everton", 
    B:"B: Middlesborough", 
    C:"C: Liverpool", 
    D:"D: Man City"
  },
    correctAnswer: "C"
  },

  { Question: "What is the capacity of Old Trafford (as of 2020)?",
  Answers: {
    A:"A: 70,000", 
    B:"B: 74,000 ", 
    C:"C: 68,000", 
    D:"D: 65,000"
  },
    correctAnswer: "B"
  },

  { Question: "What is the nickname of Old Trafford?",
  Answers: {
    A:"A: The Theatre of Dreams", 
    B:"B: The Theatre of Manchester", 
    C:"C: The Theatre of success", 
    D:"D: The home of Dreams"
  },
    correctAnswer: "A"
  },

  { Question: "Old Trafford is situated on what road?",
  Answers: {
    A:"A: Sir Matt Busby Way.", 
    B:"B: Sir Ferguson Way", 
    C:"C: Rooney road", 
    D:"D: Giggs Street"
  },
    correctAnswer: "A"
  },

  { Question: "Manchester United were the first British team to win the European Cup (now Champions League).",
  Answers: {
    A:"A: True?", 
    B:"B: False?", 
    C:" ", 
    D:""
  },
    correctAnswer: "B"
  },

  { Question: "The West Stand of Old Trafford is more famously known as what?",
  Answers: {
    A:"A: The Stretford End", 
    B:"B: The Busby End", 
    C:"C: Charlton stand", 
    D:"D: Sir Alex ferguson end"
  },
    correctAnswer: "A"
  },
]

var currentQuestionIndex = 0;

function displayQuestion(index) {
    var question = questions[index];
    document.getElementById("quizQuestions").innerHTML = question.Question;
    document.getElementById("quizAnswer1").innerHTML = question.Answers.A;
    document.getElementById("quizAnswer2").innerHTML = question.Answers.B;
    document.getElementById("quizAnswer3").innerHTML = question.Answers.C;
    document.getElementById("quizAnswer4").innerHTML = question.Answers.D;
}

displayQuestion(0)


function quizValue(chosenAnswer) {

  var isCorrect = questions[currentQuestionIndex].correctAnswer === chosenAnswer;
   results.push({question: questions[currentQuestionIndex].Question, correct: isCorrect});
    if(questions[currentQuestionIndex].correctAnswer === chosenAnswer) {
       console.log("Correct")
    } else {
       console.log("Incorrect")
    }
  
  if (currentQuestionIndex < questions.length -6) {
      currentQuestionIndex++;
      displayQuestion(currentQuestionIndex);
   } else {
     scoreResult();
   }

}

function randomQuestion() {

}

function correctAnswerTally() {
    
  let score = parseInt(document.getElementById("correctValue").innertext);
      document.getElementById("correctValue").innerText = ++score;

}

function incorrectAnswerTally() {

  let score = parseInt(document.getElementById("incorrectValue").innertext);
      document.getElementById("incorrectValue").innerText = ++score;


}

function displayResults() {
  document.getElementById("results_display").style.display = "block";
}

function displayresultsOff() {
  document.getElementById("results_display").style.display = "none";
}
