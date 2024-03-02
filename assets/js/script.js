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
    
    { Question: "What Year was old trafford built?",
      Answers: {
        A:"1990", 
        B:"1910", 
        C:"2005", 
        D:"1905"
      },
        correctAnswer: "B"
    },

    { Question: "Alex Ferguson famously kicked a boot at which player, injuring his eye?",
      Answers: {
        A:"Ryan Giggs", 
        B:"David Beckham", 
        C:"Eric Cantona", 
        D:"Wayne Rooney"
      },
        correctAnswer: "B"
    },

    { Question: "Who scored the winning goal for Manchester United in their 2-1 Champions League final victory in 1999?",
      Answers:{
        A:"Gary Nevile", 
        B:"Ryan Giggs", 
        C:"Eric Cantona", 
        D:"Ole Gunnar Solskjaer"},
        correctAnswer: "D"
    },
    
    

]

function displayQuestion() {
    
    var questionIndex = questions[0].Answers[0,1,2,3];
    console.log(questionIndex)
}
        
displayQuestion()



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
