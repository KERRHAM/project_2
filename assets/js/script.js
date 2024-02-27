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

