/** When Mouse hovers over the Start quiz Button, it will turn yellow.
 */
function turnYellow() {
  let changeYellow = document.getElementById("start");
  changeYellow.style.backgroundColor = "yellow";
}

/** When the mouse leaves the start quiz button's area it will turn grey. 
*/
function turnGrey() {
  let changeGrey = document.getElementById("start");
  changeGrey.style.backgroundColor = "rgb(130, 139, 157)"
}

/** When Mouse hovers over the Rules? Button, it will turn yellow.
 */
function turnYellow1() {
  let rulesYellow = document.getElementById("rules");
  rulesYellow.style.backgroundColor = "yellow";
}

/** When Mouse hovers over the Rules? Button, it will turn grey.
 */
function turnGrey1() {
  let rulesGrey = document.getElementById("rules");
  rulesGrey.style.backgroundColor = "rgb(130, 139, 157)"
}

/** When the user Presses the Rules? button, Rules? text content is displayed
 */
function displayOn() {
  document.getElementById("overlay").style.display = "block";
}

/** When the user clicks on Rules? content, The user will exit the Rules? section
 */
function displayOff() {
  document.getElementById("overlay").style.display = "none";
}

/** When Mouse hovers over the submit Button, it will turn yellow.
 */
function turnYellow2() {
  let submitYellow = document.getElementById("submit");
  submitYellow.style.backgroundColor = "yellow";
}
/** When Mouse leaves the submit Button area, it will turn Grey.
 */
function turnGrey2() {
  let submitGrey = document.getElementById("submit");
  submitGrey.style.backgroundColor = "rgb(130, 139, 157)"
}


/** When Mouse hovers over Finish Button, it will turn yellow.
 */
function turnYellow3() {
  let finishYellow = document.getElementById("finish");
  finishYellow.style.backgroundColor = "yellow";
}
/** When Mouse leaves the finish Button's area, it will turn grey.
 */
function turnGrey3() {
  let finishGrey = document.getElementById("finish");
  finishGrey.style.backgroundColor = "rgb(130, 139, 157)"
}
/** When the Mouse hovers over the try again Button, it will turn yellow.
 */
function turnYellow4() {
  let againYellow = document.getElementById("again");
  againYellow.style.backgroundColor = "yellow";
}
/** When the Mouse leaves try again? button area, it will turn grey.
 */
function turnGrey4() {
  let againGrey = document.getElementById("again");
  againGrey.style.backgroundColor = "rgb(130, 139, 157)"
}

// Questions array for storing Quiz questions 
var questions = [

  {
    Question: "What Year was old trafford built?",
    Answers: {
      A: "A: 1990",
      B: "B: 1910",
      C: "C: 2005",
      D: "D: 1905"
    },
    correctAnswer: "B"
  },


  {
    Question: "Alex Ferguson famously kicked a boot at which player, injuring his eye?",
    Answers: {
      A: "A: Ryan Giggs",
      B: "B: David Beckham",
      C: "C: Eric Cantona",
      D: "D: Wayne Rooney"
    },
    correctAnswer: "B"
  },

  {
    Question: "Who scored the winning goal for Manchester United in their 2-1 Champions League final victory in 1999?",
    Answers: {
      A: "A: Gary Nevile",
      B: "B: Ryan Giggs",
      C: "C: Eric Cantona",
      D: "D: Ole Gunnar Solskjaer"
    },
    correctAnswer: "D"
  },

  {
    Question: "Which player is affectionately known as 'The King' to Manchester United fans?",
    Answers: {
      A: "A: Eric Cantona ",
      B: "B: Wayne Rooney ",
      C: "C: Cristiano Ronaldo",
      D: "D: Alex Ferguson"
    },
    correctAnswer: "A"
  },

  {
    Question: "Manchester United broke their record transfer fee in 2016 when they paid £89.5 million for which player?",
    Answers: {
      A: "A: Paul Pogba",
      B: "B: Alexis Sanchez",
      C: "C: Memphis Depay",
      D: "D: Henrikh Mkhitaryan"
    },
    correctAnswer: "A"
  },

  {
    Question: "As of 2020, Manchester United hold the record for most league titles in England. How many times have they been champions?",
    Answers: {
      A: "A: 20",
      B: "B: 15",
      C: "C: 22",
      D: "D: 10"
    },
    correctAnswer: "A"
  },

  {
    Question: "Which player holds the record for most Man Utd appearances?",
    Answers: {
      A: "A: Roy Keane",
      B: "B: Ryan Giggs",
      C: "C: Bobby Charlton",
      D: "D: Wayne Rooney"
    },
    correctAnswer: "B"
  },

  {
    Question: "Which player holds the record for most Man Utd goals?",
    Answers: {
      A: "A: Cristiano Ronaldo",
      B: "B: Wayne Rooney",
      C: "C: Eric Cantona",
      D: "D: Ryan Giggs"
    },
    correctAnswer: "B"
  },

  {
    Question: "The highest transfer fee ever received by Man Utd was £80 million in 2009 - for which player?",
    Answers: {
      A: "A: Cristiano Ronaldo",
      B: "B: Carlos Teves",
      C: "C: David Beckham",
      D: "D: Romelu Lukaku "
    },
    correctAnswer: "A"
  },

  {
    Question: "Who were Manchester United's opponents in the first game at Old Trafford?",
    Answers: {
      A: "A: Everton",
      B: "B: Middlesborough",
      C: "C: Liverpool",
      D: "D: Man City"
    },
    correctAnswer: "C"
  },

  {
    Question: "What is the capacity of Old Trafford (as of 2020)?",
    Answers: {
      A: "A: 70,000",
      B: "B: 74,000 ",
      C: "C: 68,000",
      D: "D: 65,000"
    },
    correctAnswer: "B"
  },

  {
    Question: "What is the nickname of Old Trafford?",
    Answers: {
      A: "A: The Theatre of Dreams",
      B: "B: The Theatre of Manchester",
      C: "C: The Theatre of success",
      D: "D: The home of Dreams"
    },
    correctAnswer: "A"
  },

  {
    Question: "Old Trafford is situated on what road?",
    Answers: {
      A: "A: Sir Matt Busby Way",
      B: "B: Sir Ferguson Way",
      C: "C: Rooney road",
      D: "D: Giggs Street"
    },
    correctAnswer: "A"
  },

  {
    Question: "Manchester United were the first British team to win the European Cup (now Champions League).",
    Answers: {
      A: "A: True?",
      B: "B: False?",
      C: " ",
      D: ""
    },
    correctAnswer: "B"
  },

  {
    Question: "The West Stand of Old Trafford is more famously known as what?",
    Answers: {
      A: "A: The Stretford End",
      B: "B: The Busby End",
      C: "C: Charlton stand",
      D: "D: Sir Alex ferguson end"
    },
    correctAnswer: "A"
  },
]

// Variable for starting quiz index
var currentQuestionIndex = 0;

// Variable for storing users results
let results = [];

/** this function will shuffle the questions everytime the user begins the quiz
 */
function shuffleQuestions(questions) {
  var shuffledQuestions = [];
  document.getElementById("submit").style.display="none";

    for (let i = questions.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [questions[i], questions[j]] = [questions[j], questions[i]]; 
    } 
    return questions; 
  }

// creating a variable to assign it the value of a function.
let myQuestion;
myQuestion = shuffleQuestions(questions);

/** This function will display the first question to the users display.
 */
function displayQuestion(index) {
  var question = myQuestion[index];
  document.getElementById("quizQuestions").innerHTML = question.Question;
  document.getElementById("quizAnswer1").innerHTML = question.Answers.A;
  document.getElementById("quizAnswer2").innerHTML = question.Answers.B;
  document.getElementById("quizAnswer3").innerHTML = question.Answers.C;
  document.getElementById("quizAnswer4").innerHTML = question.Answers.D;
}

// call function
displayQuestion(0);

/** This Function will log the users chosen answer
 * compare it with the correct answer and ether increment the incorrect ot correct value,
 * Depending on the users score, a paragraph text will display to the user.
 */
function quizValue(chosenAnswer) {
  var scoretext = document.getElementById("scoretext");
  let increase = document.querySelectorAll(".correctValue");
  let decrease = document.querySelectorAll(".incorrectValue");
  var isCorrect = questions[currentQuestionIndex].correctAnswer === chosenAnswer;

  results.push({
    question: questions[currentQuestionIndex].Question,
    correct: isCorrect
  });
  //if (questions[currentQuestionIndex].correctAnswer === chosenAnswer) {
   // console.log("Correct");
  //} else {
    //console.log("Incorrect");
  //}

  if (currentQuestionIndex < questions.length -1) {
    currentQuestionIndex++;
    displayQuestion(currentQuestionIndex);
  } else {
    document.getElementById("quizQuestions").innerHTML = "End Of Quiz<br>Please Click the submit button for results";
    document.getElementById("quizanswer").style.display = "none";
    document.getElementById("submit").style.display="block";
  }

  if (isCorrect) {
    increase[0].textContent = parseInt(increase[0].textContent) + 1;
  } else {
    decrease[0].textContent = parseInt(decrease[0].textContent) + 1;
  }

  if (increase[0].textContent === "15") {
    scoretext.innerHTML = "Well done, Sir Alex would be proud!!!";
  } else if (increase[0].textContent >= "10") {
    scoretext.innerHTML = "Almost, Give it another go to Truly call yourself a United Fan!!!";
   } else if (increase[0].textContent <= "7") {
    scoretext.innerHTML = "You failed...Man City are in need of supporters?";
   }
}
 

/** When the user Presses submit the results section will appear,
 */
function displayResults() {
  document.getElementById("results_display").style.display = "block";
}
/** This function hides the results section unless submit button is pressed.
 */
function displayresultsOff() {
  document.getElementById("results_display").style.display = "none";
}